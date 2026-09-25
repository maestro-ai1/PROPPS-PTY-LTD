import { NextResponse } from 'next/server';
import { getOrderByToken, updateOrder } from '../../../../../lib/serverStore.js';
import { sendPaymentNotifiedEmails, cleanText } from '../../../../../lib/notify.js';
import { rateLimit, clientIp } from '../../../../../lib/redis.js';

export const runtime = 'nodejs';

const MAX_BYTES = 4 * 1024 * 1024; // stays under the serverless request body limit

interface Ctx {
  params: Promise<{ token: string }>;
}

// Identify the real file type from its first bytes - never trust the name/MIME.
function sniff(b: Buffer): { ext: string; type: string } | null {
  if (b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return { ext: 'jpg', type: 'image/jpeg' };
  if (b.length > 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { ext: 'png', type: 'image/png' };
  if (b.length > 12 && b.subarray(0, 4).toString() === 'RIFF' && b.subarray(8, 12).toString() === 'WEBP') return { ext: 'webp', type: 'image/webp' };
  if (b.length > 5 && b.subarray(0, 5).toString() === '%PDF-') return { ext: 'pdf', type: 'application/pdf' };
  if (b.length > 12 && b.subarray(4, 8).toString() === 'ftyp' && /^(heic|heix|hevc|hevx|mif1|msf1)$/.test(b.subarray(8, 12).toString())) return { ext: 'heic', type: 'image/heic' };
  return null;
}

export async function POST(request: Request, { params }: Ctx) {
  if (!(await rateLimit(`proof:${clientIp(request)}`, 6, 600))) {
    return NextResponse.json({ ok: false, error: 'Too many uploads. Please wait a few minutes.' }, { status: 429 });
  }
  const { token } = await params;
  const order = await getOrderByToken(token);
  if (!order) return NextResponse.json({ ok: false, error: 'Invoice not found' }, { status: 404 });

  const form = await request.formData().catch(() => null);
  const file = form?.get('file');
  if (!(file instanceof File)) return NextResponse.json({ ok: false, error: 'Choose a screenshot or PDF first.' }, { status: 400 });
  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: 'File must be under 4 MB.' }, { status: 413 });
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  const kind = sniff(bytes);
  if (!kind) return NextResponse.json({ ok: false, error: 'Please upload a JPG, PNG, WebP, HEIC or PDF.' }, { status: 415 });

  const updated = await updateOrder(order.id, { paymentNotifiedAt: Date.now() });
  try {
    const delivered = await sendPaymentNotifiedEmails(updated ?? order, {
      filename: `payment-${order.ref}.${kind.ext}`,
      content: bytes,
      contentType: kind.type,
    }, cleanText(form?.get('note'), 500));
    if (!delivered) throw new Error('owner email not delivered');
  } catch (err) {
    console.error('[invoice] proof email failed', err);
    return NextResponse.json({ ok: false, error: 'Could not send your confirmation. Please use the WhatsApp button.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}