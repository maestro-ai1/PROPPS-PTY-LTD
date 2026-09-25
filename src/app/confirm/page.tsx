import type { Metadata } from 'next';
import React from 'react';
import { ConfirmPageContent } from '../../views/ConfirmPage.js';

export const metadata: Metadata = {
  title: 'Confirm Your Payment',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return <ConfirmPageContent />;
}