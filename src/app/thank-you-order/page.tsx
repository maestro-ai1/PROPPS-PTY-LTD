import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ThankYouOrderContent } from '../../views/ThankYouOrderPage.js';

export const metadata: Metadata = {
  title: 'Order Received',
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ThankYouOrderContent />
    </Suspense>
  );
}
