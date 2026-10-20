import { NextResponse } from 'next/server';
import { CRYPTO_WALLETS } from '../../../../config/site.js';
import { getOrderByToken } from '../../../../lib/serverStore.js';
import { rateLimit, clientIp } from '../../../../lib/redis.js';

export const runtime = 'nodejs';

// Crypto checkout data. The unguessable order token is the only key; wallets are public receive addresses.
export async function GET(request: Request) {
  if (!(await rateLimit(`crypto:${clientIp(request)}`, 60, 600))) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  const token = new URL(request.url).searchParams.get('t') || '';
  const order = await getOrderByToken(token);
  const headers = { 'Cache-Control': 'no-store' };
  if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404, headers });
  if (order.paymentMethod !== 'crypto') return NextResponse.json({ error: 'Not a crypto order' }, { status: 400, headers });
  return NextResponse.json(
    {
      ref: order.ref,
      total: order.total,
      discount: order.discount,
      status: order.status,
      paymentNotified: Boolean(order.paymentNotifiedAt),
      wallets: {
        btc: CRYPTO_WALLETS.bitcoin,
        usdtTrc20: CRYPTO_WALLETS.usdtTrc20,
        usdtErc20: CRYPTO_WALLETS.usdtErc20,
      },
    },
    { headers }
  );
}
