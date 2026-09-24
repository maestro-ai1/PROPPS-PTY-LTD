import { NextResponse } from 'next/server';
import { checkAdminPasscode, getAdminPasscode } from '../../../../lib/adminAuth.js';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!getAdminPasscode()) {
    return NextResponse.json({ ok: false, error: 'Admin passcode is not configured.' }, { status: 503 });
  }
  let body: any = {};
  try {
    body = await request.json();
  } catch {
    /* fall through to invalid */
  }
  if (!checkAdminPasscode(typeof body?.passcode === 'string' ? body.passcode : '')) {
    // Small delay slows brute-force guessing.
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
