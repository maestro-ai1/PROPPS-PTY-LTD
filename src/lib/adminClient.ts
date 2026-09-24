// Browser-side helper for calling passcode-protected /api/admin/* routes.
export const PASSCODE_STORAGE_KEY = 'propps_admin_passcode_session';

export function getStoredPasscode(): string {
  if (typeof window === 'undefined') return '';
  try {
    return sessionStorage.getItem(PASSCODE_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

export async function adminSendMail(opts: {
  to: string;
  subject: string;
  html: string;
  text: string;
}): Promise<{ sent: boolean; reason?: string }> {
  try {
    const res = await adminFetch('/api/admin/send', { method: 'POST', body: JSON.stringify(opts) });
    const data = await res.json().catch(() => ({}));
    return { sent: res.ok && data.sent === true, reason: data.reason || data.error };
  } catch {
    return { sent: false, reason: 'network' };
  }
}

export async function adminFetch(path: string, init: RequestInit = {}): Promise<Response> {
  return fetch(path, {
    ...init,
    headers: {
      ...(init.headers || {}),
      'Content-Type': 'application/json',
      'X-Admin-Passcode': getStoredPasscode(),
    },
    cache: 'no-store',
  });
}
