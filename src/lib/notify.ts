// SERVER-ONLY helpers shared by /api/order, /api/contact and /api/wholesale.
import { SITE, SHOP, PRODUCTS } from '../config/site.js';
import { sendMail } from './mailer.js';
import { buildEmailHtml, EmailRow } from './emailTemplate.js';
import { generateOrderRef, StoredOrder } from './order.js';
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
  const ref = /^[A-Z]{2,5}-[A-Z0-9]{6}$/.test(clientRef) ? clientRef : generateOrderRef();
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
    const customer = await sendMail({
      to: order.email,
      subject: `Order ${order.ref} received - ${SITE.name}`,
      html: buildEmailHtml({
        title: 'We received your order',
        preheader: `Order ${order.ref} received`,
        intro: `Thank you ${order.customerName}. Your order is registered. Please watch for a separate email with payment details from our dispatch desk.`,
        refBadge: order.ref,
        rows,
      }),
      text: `Thank you ${order.customerName}. Order ${order.ref} is registered. Watch for a payment details email from us.`,
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
