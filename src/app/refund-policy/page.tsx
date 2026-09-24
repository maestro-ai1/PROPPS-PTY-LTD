import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Refund & Replacement Policy',
  description: 'PROPPS PTY LTD refund, damage replacement, and cancellation policy under Australian Consumer Law.',
  alternates: { canonical: `https://${SITE.domain}/refund-policy/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Refund and Replacement Policy', path: '/refund-policy/' }} />
      <PolicyContent policyType="refund" />
    </>
  );
}
