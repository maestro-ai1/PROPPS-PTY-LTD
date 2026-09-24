import { NextResponse } from 'next/server';
import { getOrderByToken, updateOrder } from '../../../../../lib/serverStore.js';
import { sendPaymentNotifiedEmails } from '../../../../../lib/notify.js';

export const runtime = 'nodejs';

interface Ctx {
  params: Promise<{ token: string }>;
}

export async function POST(_request: Request, { params }: Ctx) {
  const { token } = await params;
  const order = await getOrderByToken(token);
  if (!order || !order.invoice) return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
  if (order.paymentNotifiedAt || order.status === 'paid' || order.status === 'dispatched') {
    return NextResponse.json({ ok: true, alreadyNotified: true });
  }
  const updated = await updateOrder(order.id, { paymentNotifiedAt: Date.now() });
  try {
    await sendPaymentNotifiedEmails(updated ?? order);
  } catch (err) {
    console.error('[invoice] notify failed', err);
  }
  return NextResponse.json({ ok: true });
}