import type { Metadata } from 'next';
import React from 'react';
import { InvoicePageContent } from '../../views/InvoicePage.js';

export const metadata: Metadata = {
  title: 'Your Invoice',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return <InvoicePageContent />;
}