import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Shipping & Dispatch Policy',
  description: 'Australia Post Express dispatch cutoffs, transit times, and discreet packaging standards for PROPPS PTY LTD orders.',
  alternates: { canonical: `https://${SITE.domain}/shipping-policy/` },
};

export default function Page() {
  return <PolicyContent policyType="shipping" />;
}
