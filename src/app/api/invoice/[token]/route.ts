import { NextResponse } from 'next/server';
import { getOrderByToken } from '../../../../lib/serverStore.js';

export const runtime = 'nodejs';

interface Ctx {
  params: Promise<{ token: string }>;
}

// Public, but only reachable with the unguessable token from the invoice email.
export async function GET(_request: Request, { params }: Ctx) {
  const { token } = await params;
  const order = await getOrderByToken(token);
  if (!order) {
    return NextResponse.json({ error: 'Invoice not found' }, { status: 404, headers: { 'Cache-Control': 'no-store' } });
  }
  const inv = order.invoice;
  if (!inv) {
    // Order exists but payment details have not been sent yet: expose only what the confirm page needs.
    return NextResponse.json(
      { pending: true, ref: order.ref, total: order.total, status: order.status, paymentNotified: Boolean(order.paymentNotifiedAt), items: [], lines: [] },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }
  return NextResponse.json(
    {
      ref: order.ref,
      issued: inv.sentAt,
      customerName: order.customerName,
      address: order.address,
      status: order.status,
      paymentNotified: Boolean(order.paymentNotifiedAt),
      items: order.items,
      subtotal: inv.subtotal,
      shippingFee: inv.shippingFee,
      discount: inv.discount,
      total: inv.total,
      method: inv.method,
      lines: inv.lines,
      note: inv.note ?? '',
    },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}