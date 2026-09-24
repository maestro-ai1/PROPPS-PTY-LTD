import { NextResponse } from 'next/server';
import { isAdminRequest } from '../../../../lib/adminAuth.js';
import { getPaymentDefaults } from '../../../../lib/serverStore.js';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ defaults: (await getPaymentDefaults()) ?? null });
}