'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

// Private, task-focused pages (admin, invoice, payment confirmation) should not
// show marketing popups over the form the visitor is filling in.
const PRIVATE_PREFIXES = ['/admin', '/invoice', '/confirm'];

export const HideOnPrivatePages: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname() || '/';
  if (PRIVATE_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + '/'))) return null;
  return <>{children}</>;
};