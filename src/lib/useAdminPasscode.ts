// src/lib/useAdminPasscode.ts
import { useState, useEffect } from 'react';
import { checkAdminPasscode, DEFAULT_ADMIN_PASSCODE } from './adminAuth.js';

const PASSCODE_STORAGE_KEY = 'propps_admin_passcode_session';

export function useAdminPasscode() {
  const [passcode, setPasscode] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = sessionStorage.getItem(PASSCODE_STORAGE_KEY);
    if (saved && checkAdminPasscode(saved)) {
      setPasscode(saved);
      setIsUnlocked(true);
    }
  }, []);

  const unlock = (entered: string): boolean => {
    if (checkAdminPasscode(entered)) {
      sessionStorage.setItem(PASSCODE_STORAGE_KEY, entered);
      setPasscode(entered);
      setIsUnlocked(true);
      setError(null);
      return true;
    } else {
      setError('Invalid admin security passcode. Please check your credentials.');
      return false;
    }
  };

  const lock = () => {
    sessionStorage.removeItem(PASSCODE_STORAGE_KEY);
    setPasscode('');
    setIsUnlocked(false);
  };

  return {
    passcode,
    isUnlocked,
    error,
    unlock,
    lock,
    defaultPasscodeHint: DEFAULT_ADMIN_PASSCODE,
  };
}
