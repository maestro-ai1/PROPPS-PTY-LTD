import { NextResponse } from 'next/server';
import { buildEnquiry, sendEnquiryEmail } from '../../../lib/notify.js';
import { addEnquiry, storageEnabled } from '../../../lib/serverStore.js';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  if (body?.website) return NextResponse.json({ ok: true, ref: 'ENQ-00000' });

  const { enquiry, error } = buildEnquiry(body, 'contact');
  if (!enquiry) return NextResponse.json({ ok: false, error }, { status: 400 });

  let stored = false;
  try {
    if (storageEnabled()) {
      await addEnquiry(enquiry);
      stored = true;
    }
  } catch (err) {
    console.error('[contact] storage failed', err);
  }

  let emailed = false;
  try {
    emailed = (await sendEnquiryEmail(enquiry)).sent;
  } catch (err) {
    console.error('[contact] email failed', err);
  }

  if (!emailed && !stored) {
    return NextResponse.json(
      { ok: false, error: 'Email is not available right now. Please contact us on WhatsApp.' },
      { status: 503 }
    );
  }
  return NextResponse.json({ ok: true, ref: enquiry.ref });
}
