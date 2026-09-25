import { rateLimit, clientIp } from '../../../lib/redis.js';
import { NextResponse, after } from 'next/server';
import { buildOrderFromRequest, sendOrderEmails, getNotifyEmail } from '../../../lib/notify.js';
import { addOrder, getOrder, storageEnabled } from '../../../lib/serverStore.js';
import { generateOrderRef } from '../../../lib/order.js';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!(await rateLimit(`order:${clientIp(request)}`, 8, 600))) {
    return NextResponse.json({ ok: false, error: 'Too many requests. Please wait a few minutes and try again, or use WhatsApp.' }, { status: 429 });
  }
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (body?.website) return NextResponse.json({ ok: true, ref: 'PP0000', emailed: false });

  const { order, error } = buildOrderFromRequest(body);
  if (!order) return NextResponse.json({ ok: false, error }, { status: 400 });

  // Short numbers can collide: make sure this one is not already in use.
  if (storageEnabled()) {
    for (let i = 0; i < 8 && (await getOrder(order.ref)); i++) {
      order.ref = generateOrderRef();
      order.orderRef = order.ref;
    }
  }

  let stored = false;
  try {
    if (storageEnabled()) {
      await addOrder(order);
      stored = true;
    }
  } catch (err) {
    console.error('[order] storage failed', err);
  }

  // Saved: answer the customer straight away and send the emails right after the
  // response (after() keeps the serverless function alive until they are sent).
  if (stored) {
    after(async () => {
      try {
        await sendOrderEmails(order);
      } catch (err) {
        console.error('[order] email failed', err);
      }
    });
    return NextResponse.json({ ok: true, ref: order.ref, emailed: Boolean(getNotifyEmail()), stored: true });
  }

  // Not saved (no storage): the email is the only record, so wait for it.
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
