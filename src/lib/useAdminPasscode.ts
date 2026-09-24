// src/lib/useAdminPasscode.ts
import { useState, useEffect } from 'react';
import { PASSCODE_STORAGE_KEY } from './adminClient.js';

// The passcode is verified by the server (/api/admin/login); the browser never
// holds or compares the real value.
async function verify(passcode: string): Promise<boolean> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function useAdminPasscode() {
  const [passcode, setPasscode] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let saved: string | null = null;
    try {
      saved = sessionStorage.getItem(PASSCODE_STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
    if (!saved) return;
    verify(saved).then((ok) => {
      if (ok) {
        setPasscode(saved as string);
        setIsUnlocked(true);
      }
    });
  }, []);

  const unlock = async (entered: string): Promise<boolean> => {
    if (await verify(entered)) {
      try {
        sessionStorage.setItem(PASSCODE_STORAGE_KEY, entered);
      } catch {
        /* storage unavailable */
      }
      setPasscode(entered);
      setIsUnlocked(true);
      setError(null);
      return true;
    }
    setError('Invalid admin passcode. Please check and try again.');
    return false;
  };

  const lock = () => {
    try {
      sessionStorage.removeItem(PASSCODE_STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
    setPasscode('');
    setIsUnlocked(false);
  };

  return { passcode, isUnlocked, error, unlock, lock };
}
