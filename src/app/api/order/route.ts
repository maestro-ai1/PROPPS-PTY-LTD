import { NextResponse } from 'next/server';
import { buildOrderFromRequest, sendOrderEmails } from '../../../lib/notify.js';
import { addOrder, storageEnabled } from '../../../lib/serverStore.js';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (body?.website) return NextResponse.json({ ok: true, ref: 'PRP-000000', emailed: false });

  const { order, error } = buildOrderFromRequest(body);
  if (!order) return NextResponse.json({ ok: false, error }, { status: 400 });

  let stored = false;
  try {
    if (storageEnabled()) {
      await addOrder(order);
      stored = true;
    }
  } catch (err) {
    console.error('[order] storage failed', err);
  }

  let emailed = false;
  try {
    emailed = (await sendOrderEmails(order)).ownerSent;
  } catch (err) {
    console.error('[order] email failed', err);
  }

  // A WhatsApp order already reaches the owner through WhatsApp itself. An
  // email-channel order that was neither emailed nor stored would be lost, so
  // report failure and let the cart fall back to WhatsApp.
  if (order.channel === 'email' && !emailed && !stored) {
    return NextResponse.json(
      { ok: false, error: 'Order email is not available right now. Please order via WhatsApp.' },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, ref: order.ref, emailed, stored });
}
