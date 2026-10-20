import type { Metadata } from 'next';
import React from 'react';
import { CheckoutContent } from '../../views/CheckoutPage.js';

export const metadata: Metadata = {
  title: 'Checkout',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return <CheckoutContent />;
}
