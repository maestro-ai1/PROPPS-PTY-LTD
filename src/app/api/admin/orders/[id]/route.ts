import { NextResponse } from 'next/server';
import { isAdminRequest } from '../../../../../lib/adminAuth.js';
import { getOrder, patchOrder, removeOrder, updateOrder } from '../../../../../lib/serverStore.js';
import { sendThankYouEmail } from '../../../../../lib/notify.js';

export const runtime = 'nodejs';

const STATUSES = ['pending', 'payment-sent', 'paid', 'dispatched', 'cancelled'] as const;

interface Ctx {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: Ctx) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  const { status } = await request.json().catch(() => ({ status: '' }));
  if (!STATUSES.includes(status)) return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  const before = await getOrder(id);
  const order = await patchOrder(id, status);
  if (!order) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let thankYouSent: boolean | undefined;
  if (status === 'paid' && before?.status !== 'paid') {
    const saved = await updateOrder(order.id, { paidAt: Date.now() });
    thankYouSent = (await sendThankYouEmail(saved ?? order).catch(() => ({ sent: false }))).sent;
  }
  return NextResponse.json({ order, thankYouSent });
}

export async function DELETE(request: Request, { params }: Ctx) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await removeOrder(id);
  return NextResponse.json({ ok: true });
}
