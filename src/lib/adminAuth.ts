// lib/adminAuth.ts
// Server & client validation for Admin Reply Portal

export const DEFAULT_ADMIN_PASSCODE = 'PROPPS2026';

export function getAdminPasscode(): string {
  // In server runtime (Node/Vercel), check process.env
  if (typeof process !== 'undefined' && process.env && process.env.ADMIN_PASSCODE) {
    return process.env.ADMIN_PASSCODE;
  }
  return DEFAULT_ADMIN_PASSCODE;
}

export function checkAdminPasscode(passcode: string | null | undefined): boolean {
  if (!passcode) return false;
  const expected = getAdminPasscode();
  return passcode.trim() === expected.trim();
}
