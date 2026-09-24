import { NextResponse } from 'next/server';
import { isAdminRequest } from '../../../../lib/adminAuth.js';
import { sendMail } from '../../../../lib/mailer.js';
import { isEmail } from '../../../../lib/notify.js';

export const runtime = 'nodejs';

// Sends an admin-composed email (payment details, enquiry reply) from the
// server, where SMTP credentials live. Passcode-gated.
export async function POST(request: Request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json().catch(() => null);
  const to = body?.to;
  const subject = typeof body?.subject === 'string' ? body.subject.slice(0, 200) : '';
  const html = typeof body?.html === 'string' ? body.html.slice(0, 200_000) : '';
  const text = typeof body?.text === 'string' ? body.text.slice(0, 50_000) : '';
  if (!isEmail(to) || !subject || !html) {
    return NextResponse.json({ error: 'Invalid email request' }, { status: 400 });
  }

  const result = await sendMail({
    to,
    subject,
    html,
    text,
    replyTo: process.env.NOTIFY_EMAIL || undefined,
  });
  return NextResponse.json({ sent: result.sent, reason: result.error || result.reason }, { status: result.sent ? 200 : 502 });
}
