import type { Metadata } from 'next';
import React from 'react';
import { CryptoCheckoutContent } from '../../../views/CryptoCheckoutPage.js';

export const metadata: Metadata = {
  title: 'Crypto Payment',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return <CryptoCheckoutContent />;
}
