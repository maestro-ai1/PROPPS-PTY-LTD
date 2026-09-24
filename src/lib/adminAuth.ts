// lib/adminAuth.ts
// SERVER-ONLY. The passcode is never sent to or compared in the browser:
// the client posts what the user typed to /api/admin/login and later sends it
// as the X-Admin-Passcode header on admin API calls.
import { timingSafeEqual } from 'node:crypto';

export function getAdminPasscode(): string | null {
  const fromEnv = process.env.ADMIN_PASSCODE;
  if (fromEnv && fromEnv.trim()) return fromEnv.trim();
  // No fallback in production: an unset ADMIN_PASSCODE locks the portal
  // instead of silently accepting a well-known default.
  return process.env.NODE_ENV === 'production' ? null : 'PROPPS2026';
}

export function checkAdminPasscode(candidate: string | null | undefined): boolean {
  const expected = getAdminPasscode();
  if (!expected || !candidate) return false;
  const a = Buffer.from(candidate.trim());
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function isAdminRequest(request: Request): boolean {
  return checkAdminPasscode(request.headers.get('x-admin-passcode'));
}
