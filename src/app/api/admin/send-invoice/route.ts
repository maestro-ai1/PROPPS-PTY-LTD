import { NextResponse } from 'next/server';
import { randomBytes } from 'node:crypto';
import { isAdminRequest } from '../../../../lib/adminAuth.js';
import { getOrder, updateOrder, setPaymentDefaults, getPaymentDefaults } from '../../../../lib/serverStore.js';
import { sendInvoiceEmail, clean, cleanText } from '../../../../lib/notify.js';
import { isPayMethod, PAY_METHOD_IDS, type InvoiceRecord, type PayLine, type PayLinesByMethod } from '../../../../lib/payment.js';
import { SHOP } from '../../../../config/site.js';

export const runtime = 'nodejs';

function cleanLines(input: unknown): PayLine[] {
  if (!Array.isArray(input)) return [];
  return input
    .slice(0, 12)
    .map((l: any) => ({ label: clean(l?.label, 60), value: clean(l?.value, 200) }))
    .filter((l) => l.label && l.value);
}

export async function POST(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body: any = await request.json().catch(() => ({}));

  const order = await getOrder(String(body.orderId ?? ''));
  if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  if (!order.email) return NextResponse.json({ error: 'This order has no customer email (WhatsApp order).' }, { status: 400 });

  const method = body.method;
  if (!isPayMethod(method)) return NextResponse.json({ error: 'Choose a payment method' }, { status: 400 });
  const lines = cleanLines(body.lines);
  if (lines.length === 0) return NextResponse.json({ error: 'Add at least one payment detail line' }, { status: 400 });

  // Remember the details for next time (Reference lines are order specific and stay out).
  if (body.saveDefaults && body.allLines) {
    const existing = (await getPaymentDefaults()) ?? {};
    const next: Partial<PayLinesByMethod> = { ...existing };
    for (const id of PAY_METHOD_IDS) {
      const saved = cleanLines(body.allLines?.[id]).map((l) =>
        l.label.toLowerCase() === 'reference' ? { label: l.label, value: order.ref } : l
      );
      if (saved.length) next[id] = saved;
    }
    await setPaymentDefaults(next).catch(() => undefined);
  }

  // The discount depends on the method actually invoiced.
  const discount = method === 'crypto' ? Math.round(order.subtotal * (SHOP.cryptoDiscount / 100)) : 0;
  const total = order.subtotal + order.shippingFee - discount;

  const invoice: InvoiceRecord = {
    token: order.invoice?.token ?? randomBytes(24).toString('hex'),
    method,
    lines,
    note: cleanText(body.note, 1000) || undefined,
    sentAt: Date.now(),
    subtotal: order.subtotal,
    shippingFee: order.shippingFee,
    discount,
    total,
  };

  const candidate = { ...order, paymentMethod: method, discount, total, totalAmount: total, invoice };
  const result = await sendInvoiceEmail(candidate, invoice);

  if (!result.sent) {
    return NextResponse.json({ sent: false, reason: result.error || result.reason || 'send failed' });
  }

  const status = order.status === 'pending' ? 'payment-sent' : order.status;
  const saved = await updateOrder(order.id, {
    paymentMethod: method,
    discount,
    total,
    totalAmount: total,
    invoice,
    status,
  });
  return NextResponse.json({ sent: true, order: saved });
}