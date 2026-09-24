import { NextResponse } from 'next/server';
import { isAdminRequest } from '../../../../lib/adminAuth.js';
import { listOrders, storageEnabled } from '../../../../lib/serverStore.js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ orders: await listOrders(), storage: storageEnabled() });
}
