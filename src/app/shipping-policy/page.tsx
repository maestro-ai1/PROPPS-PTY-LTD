import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Shipping & Dispatch Policy',
  description: 'Australia Post Express dispatch cutoffs, transit times, and discreet packaging standards for PROPPS PTY LTD orders.',
  alternates: { canonical: `https://${SITE.domain}/shipping-policy/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Shipping and Dispatch Policy', path: '/shipping-policy/' }} />
      <PolicyContent policyType="shipping" />
    </>
  );
}
