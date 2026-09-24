import { NextResponse } from 'next/server';
import { isAdminRequest } from '../../../../../lib/adminAuth.js';
import { patchOrder, removeOrder } from '../../../../../lib/serverStore.js';

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
  const order = await patchOrder(id, status);
  return order ? NextResponse.json({ order }) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function DELETE(request: Request, { params }: Ctx) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  await removeOrder(id);
  return NextResponse.json({ ok: true });
}
