// SERVER-ONLY helpers shared by /api/order, /api/contact and /api/wholesale.
import { randomBytes } from 'node:crypto';
import { SITE, SHOP, PRODUCTS, REPLY, CONTACT } from '../config/site.js';
import { sendMail } from './mailer.js';
import { buildEmailHtml, EmailRow } from './emailTemplate.js';
import { generateOrderRef, isValidOrderRef, StoredOrder, paymentTermsHtml, paymentWhatsAppLink } from './order.js';
import { PAY_METHOD_LABEL, type PayMethodId } from './payment.js';
import { buildInvoiceHtml } from './invoiceTemplate.js';
import type { InvoiceRecord } from './payment.js';
import type { StoredEnquiry } from './enquiryStore.js';

// Where owner notifications go. Set NOTIFY_EMAIL in Vercel env vars.
export function getNotifyEmail(): string | undefined {
  return process.env.NOTIFY_EMAIL || undefined;
}

export function isEmail(value: unknown): value is string {
  return typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';
}

// Multi-line free text: keep newlines, strip other control characters.
export function cleanText(value: unknown, max: number): string {
  return typeof value === 'string' ? value.replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';
}

const money = (n: number) => `$${Number(n).toFixed(2)} AUD`;
const adminUrl = () => `https://${SITE.domain}/admin/`;

const PAYMENT_METHODS = ['bank-transfer', 'payid', 'crypto'];

export function buildOrderFromRequest(body: any): { order?: StoredOrder; error?: string } {
  const customerName = clean(body?.customerName, 120);
  const email = clean(body?.email, 254);
  const phone = clean(body?.phone, 40);
  const address = cleanText(body?.address, 400);
  const channel = body?.channel === 'whatsapp' ? 'whatsapp' : 'email';
  const paymentMethod = PAYMENT_METHODS.includes(body?.paymentMethod) ? body.paymentMethod : 'bank-transfer';

  if (!customerName) return { error: 'Name is required' };
  if (!phone) return { error: 'Phone is required' };
  if (!address) return { error: 'Delivery address is required' };
  if (channel === 'email' && !isEmail(email)) return { error: 'A valid email is required' };
  if (!Array.isArray(body?.items) || body.items.length === 0 || body.items.length > 50) {
    return { error: 'Cart is empty' };
  }

  // Prices come from the catalog, never from the browser.
  const items: StoredOrder['items'] = [];
  for (const raw of body.items) {
    const quantity = Math.floor(Number(raw?.quantity));
    if (!Number.isFinite(quantity) || quantity < 1 || quantity > 1000) return { error: 'Invalid quantity' };
    const [baseSlug, bundleId] = String(raw?.slug ?? '').split('--');
    const product = PRODUCTS.find((p) => p.slug === baseSlug);
    if (!product) return { error: 'Unknown product in cart' };
    const bundle = bundleId ? product.bundles?.find((b) => b.id === bundleId) : undefined;
    if (bundleId && !bundle) return { error: 'Unknown bundle in cart' };
    items.push({
      slug: String(raw.slug),
      name: bundle ? `${product.name} - ${bundle.label}` : product.name,
      price: bundle ? bundle.price : product.price,
      quantity,
    });
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  if (subtotal < SHOP.minOrder) return { error: `Minimum order is $${SHOP.minOrder} AUD` };
  const shippingFee = subtotal >= SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee;
  const discount = paymentMethod === 'crypto' ? Math.round(subtotal * (SHOP.cryptoDiscount / 100)) : 0;
  const total = subtotal + shippingFee - discount;

  const now = Date.now();
  // The WhatsApp message is opened synchronously in the browser before this
  // request completes, so it already carries a client-generated ref; keep
  // that same ref so the WhatsApp message and the stored/emailed order match.
  const clientRef = typeof body?.ref === 'string' ? body.ref.trim() : '';
  const ref = isValidOrderRef(clientRef) ? clientRef : generateOrderRef();
  return {
    order: {
      id: `ord_${now}_${Math.random().toString(36).slice(2, 6)}`,
      ref,
      orderRef: ref,
      date: new Date(now).toISOString(),
      customerName,
      email: isEmail(email) ? email : '',
      customerEmail: isEmail(email) ? email : '',
      phone,
      address,
      city: '',
      state: '',
      postcode: '',
      items,
      subtotal,
      shippingFee,
      discount,
      total,
      totalAmount: total,
      paymentMethod,
      channel,
      status: 'pending',
      confirmToken: randomBytes(24).toString('hex'),
      createdAt: now,
    },
  };
}

export async function sendOrderEmails(order: StoredOrder) {
  const to = getNotifyEmail();
  if (!to) return { ownerSent: false, customerSent: false, reason: 'NOTIFY_EMAIL not set' };

  const rows: EmailRow[] = [
    { label: 'Customer', heading: true },
    { label: 'Name', value: order.customerName },
    { label: 'Email', value: order.email || '(not provided - WhatsApp order)' },
    { label: 'Phone', value: order.phone },
    { label: 'Delivery address', value: order.address },
    { label: 'Order', heading: true },
    ...order.items.map((i) => ({
      label: `${i.quantity} x ${i.name}`,
      value: money(i.price * i.quantity),
      mono: true,
    })),
    { label: 'Subtotal', value: money(order.subtotal), mono: true },
    { label: 'Shipping', value: money(order.shippingFee), mono: true },
    ...(order.discount > 0 ? [{ label: 'Crypto discount', value: `-${money(order.discount)}`, mono: true }] : []),
    { label: 'Payment method', value: order.paymentMethod },
    { label: 'Checkout channel', value: order.channel === 'whatsapp' ? 'WhatsApp' : 'Email form' },
    { label: 'Total', value: money(order.total), highlight: true },
  ];

  const owner = await sendMail({
    to,
    subject: `New order ${order.ref} - ${money(order.total)}`,
    html: buildEmailHtml({
      title: `New order ${order.ref}`,
      preheader: `${order.customerName} - ${money(order.total)}`,
      intro: 'A new order was placed on the website. Send the customer their payment details.',
      refBadge: order.ref,
      rows,
      cta: { label: 'View in Admin Portal', url: adminUrl() },
      secondaryCta: order.email
        ? { label: 'Reply to customer', url: `mailto:${order.email}?subject=${encodeURIComponent(`Your order ${order.ref}`)}` }
        : undefined,
    }),
    text: `New order ${order.ref}\n${order.customerName} <${order.email}> ${order.phone}\n${order.address}\n\n${order.items
      .map((i) => `${i.quantity} x ${i.name} - ${money(i.price * i.quantity)}`)
      .join('\n')}\n\nTotal: ${money(order.total)}\nPayment: ${order.paymentMethod}\nChannel: ${order.channel}\nAdmin: ${adminUrl()}`,
    replyTo: order.email || undefined,
  });

  let customerSent = false;
  if (order.email) {
    const customerRows: EmailRow[] = [
      { label: 'Your order', heading: true },
      ...order.items.map((i) => ({ label: `${i.quantity} x ${i.name}`, value: money(i.price * i.quantity), mono: true })),
      { label: 'Shipping', value: order.shippingFee > 0 ? money(order.shippingFee) : 'FREE', mono: true },
      ...(order.discount > 0 ? [{ label: 'Crypto discount', value: `-${money(order.discount)}`, mono: true }] : []),
      { label: 'Payment method', value: PAY_METHOD_LABEL[order.paymentMethod as PayMethodId] || order.paymentMethod },
      { label: 'Delivery address', value: order.address },
      { label: 'Total', value: money(order.total), highlight: true },
    ];
    const origin = `https://${SITE.domain}`;
    const customer = await sendMail({
      to: order.email,
      subject: `Order placed - ${order.ref} - ${SITE.name}`,
      html: buildEmailHtml({
        title: `Your order has been placed - ${order.ref}`,
        preheader: `Order ${order.ref} placed - payment details coming next`,
        intro: `Thank you ${order.customerName}. Your order is registered. We will email your invoice and payment details shortly. Once you have paid, use the buttons below to upload your payment screenshot or confirm on WhatsApp so we can dispatch.`,
        refBadge: order.ref,
        rows: customerRows,
        footerButtons: [
          ...(order.confirmToken ? [{ label: "I've paid - Upload confirmation", url: `${origin}/confirm/?t=${order.confirmToken}`, variant: 'gold' as const }] : []),
          { label: 'Confirm via WhatsApp', url: paymentWhatsAppLink(order.ref, order.total, 'question'), variant: 'green' as const },
          { label: 'Reply by email', url: `mailto:${CONTACT.email.replace('&#64;', '@')}?subject=${encodeURIComponent(`Order ${order.ref}`)}`, variant: 'outline' as const },
        ],
      }),
      text: `Thank you ${order.customerName}. Order ${order.ref} is registered (${money(order.total)}). We will email your payment details shortly. After paying, upload your screenshot: ${origin}/confirm/?t=${order.confirmToken ?? ''}`,
      replyTo: to,
    });
    customerSent = customer.sent;
  }
  return { ownerSent: owner.sent, customerSent, reason: owner.error || owner.reason };
}

export function buildEnquiry(
  body: any,
  type: 'contact' | 'wholesale'
): { enquiry?: StoredEnquiry; error?: string } {
  const name = clean(body?.name, 120);
  const email = clean(body?.email, 254);
  const message = cleanText(body?.message, 4000);
  if (!name) return { error: 'Name is required' };
  if (!isEmail(email)) return { error: 'A valid email is required' };
  if (!message) return { error: 'Message is required' };

  const now = Date.now();
  return {
    enquiry: {
      id: `enq_${now}_${Math.random().toString(36).slice(2, 6)}`,
      ref: `ENQ-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      type,
      name,
      email,
      phone: clean(body?.phone, 40) || undefined,
      company: clean(body?.company, 160) || undefined,
      subject: clean(body?.subject, 200) || `Website ${type} message from ${name}`,
      message,
      status: 'new',
      createdAt: now,
    },
  };
}

export async function sendEnquiryEmail(enq: StoredEnquiry) {
  const to = getNotifyEmail();
  if (!to) return { sent: false, reason: 'NOTIFY_EMAIL not set' };

  const rows: EmailRow[] = [
    { label: 'From', heading: true },
    { label: 'Name', value: enq.name },
    { label: 'Email', value: enq.email },
    ...(enq.phone ? [{ label: 'Phone', value: enq.phone }] : []),
    ...(enq.company ? [{ label: 'Company', value: enq.company }] : []),
    { label: 'Message', heading: true },
    { label: 'Message', value: enq.message, block: true },
  ];

  const result = await sendMail({
    to,
    subject: `${enq.type === 'wholesale' ? 'Wholesale enquiry' : 'Website message'}: ${enq.subject}`,
    html: buildEmailHtml({
      title: enq.type === 'wholesale' ? 'New wholesale enquiry' : 'New website message',
      preheader: `${enq.name}: ${enq.message.slice(0, 80)}`,
      refBadge: enq.ref,
      rows,
      cta: { label: 'View in Admin Portal', url: adminUrl() },
      secondaryCta: { label: 'Reply to sender', url: `mailto:${enq.email}?subject=${encodeURIComponent(`Re: ${enq.subject}`)}` },
    }),
    text: `${enq.subject}\n\nFrom: ${enq.name} <${enq.email}> ${enq.phone ?? ''}\n\n${enq.message}\n\nAdmin: ${adminUrl()}`,
    replyTo: enq.email,
  });
  return { sent: result.sent, reason: result.error || result.reason };
}

export const invoiceUrl = (token: string) => `https://${SITE.domain}/invoice/?t=${encodeURIComponent(token)}`;

export function orderInvoiceView(order: StoredOrder, invoice: InvoiceRecord) {
  return {
    ref: order.ref,
    date: new Date(invoice.sentAt).toISOString(),
    customerName: order.customerName,
    email: order.email,
    phone: order.phone,
    address: order.address,
    paymentMethod: invoice.method,
    items: order.items,
    subtotal: invoice.subtotal,
    shippingFee: invoice.shippingFee,
    discount: invoice.discount,
    total: invoice.total,
  };
}

export function buildInvoiceEmail(order: StoredOrder, invoice: InvoiceRecord): string {
  return buildInvoiceHtml({
    order: orderInvoiceView(order, invoice),
    lines: invoice.lines,
    note: invoice.note,
    termsHtml: paymentTermsHtml(order.ref, invoice.method),
    openUrl: invoiceUrl(invoice.token),
    intro: `Thank you ${order.customerName}. Your invoice and payment details are below.`,
  });
}

export async function sendInvoiceEmail(order: StoredOrder, invoice: InvoiceRecord) {
  const lineText = invoice.lines.filter((l) => l.value.trim()).map((l) => `${l.label}: ${l.value}`).join('\n');
  return sendMail({
    to: order.email,
    subject: `Invoice ${order.ref} - ${money(invoice.total)} - ${SITE.name}`,
    html: buildInvoiceEmail(order, invoice),
    text: `Invoice ${order.ref} - ${money(invoice.total)}\n\n${lineText}\n\nOpen your invoice: ${invoiceUrl(invoice.token)}\n\n${SITE.name} - ABN ${REPLY.bizNumber.value}`,
    replyTo: getNotifyEmail(),
  });
}

// Client pressed "I have made the payment": alert the owner, reassure the client.
export interface ProofFile {
  filename: string;
  content: Buffer;
  contentType: string;
}

export async function sendPaymentNotifiedEmails(order: StoredOrder, proof?: ProofFile, note?: string) {
  const to = getNotifyEmail();
  const total = money(order.invoice?.total ?? order.total);
  let ownerSent = false;
  if (to) {
    ownerSent = (
      await sendMail({
      to,
      subject: `Client says paid: ${order.ref} - ${total}`,
      html: buildEmailHtml({
        title: `Payment notification ${order.ref}`,
        preheader: `${order.customerName} says they have paid ${total}`,
        intro: proof
          ? 'The client uploaded a payment confirmation (attached). Check your bank or wallet, then mark the order as paid in the portal to send the thank-you email.'
          : 'The client pressed "I have made the payment". Check your bank or wallet, then mark the order as paid in the portal to send the thank-you email.',
        refBadge: order.ref,
        rows: [
          { label: 'Customer', value: order.customerName },
          { label: 'Email', value: order.email },
          { label: 'Payment method', value: order.invoice?.method ?? order.paymentMethod },
          { label: 'Amount', value: total, highlight: true, mono: true },
          ...(note ? [{ label: 'Customer note', value: note, block: true }] : []),
        ],
        cta: { label: 'Open Admin Portal', url: adminUrl() },
      }),
      text: `${order.customerName} says they paid ${total} for ${order.ref}. Verify, then mark as paid: ${adminUrl()}`,
      replyTo: order.email || undefined,
      attachments: proof ? [proof] : undefined,
    })
    ).sent;
  }
  if (order.email) {
    await sendMail({
      to: order.email,
      subject: `Thank you - we have your payment confirmation (${order.ref})`,
      html: buildEmailHtml({
        title: 'Thank you - we have your payment notification',
        preheader: `Order ${order.ref}: we are confirming your payment`,
        intro: `Thank you ${order.customerName}. We have been told your payment of ${total} is on its way. Our Melbourne dispatch desk will confirm it shortly and email you as soon as your order is packed for Australia Post Express.`,
        refBadge: order.ref,
        rows: [],
      }),
      text: `Thank you ${order.customerName}. We have your payment notification for ${order.ref} and will confirm it shortly.`,
      replyTo: to,
    });
  }
  return ownerSent;
}

// Owner confirmed the money arrived (status set to paid).
export async function sendThankYouEmail(order: StoredOrder) {
  if (!order.email) return { sent: false, reason: 'no customer email' };
  const total = money(order.invoice?.total ?? order.total);
  const result = await sendMail({
    to: order.email,
    subject: `Payment received - thank you (${order.ref})`,
    html: buildEmailHtml({
      title: 'Payment received - thank you',
      preheader: `Order ${order.ref} is confirmed and being prepared`,
      intro: `Thank you ${order.customerName}. We have received your payment and your order is confirmed. It will be packed and dispatched from Melbourne via Australia Post Express with tracking and signature on delivery.`,
      refBadge: order.ref,
      rows: [
        { label: 'Order', heading: true },
        ...order.items.map((i) => ({ label: `${i.quantity} x ${i.name}`, value: money(i.price * i.quantity), mono: true })),
        { label: 'Amount paid', value: total, highlight: true, mono: true },
        { label: 'Delivery address', value: order.address },
      ],
      footer: `Questions? Reply to this email or WhatsApp ${REPLY.channels.whatsapp}.`,
    }),
    text: `Thank you ${order.customerName}. Payment of ${total} received for order ${order.ref}. We will email you when it is dispatched.`,
    replyTo: getNotifyEmail(),
  });
  return { sent: result.sent, reason: result.error || result.reason };
}