import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { PolicyContent, REFUND_FAQS } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Refund Policy: Refunds in 3 to 8 Business Days',
  description: 'PROPPS refund policy: approved refunds reach you in 3 to 8 business days. Damage replacement, cancellations and returns under Australian Consumer Law.',
  alternates: { canonical: `https://${SITE.domain}/refund-policy/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Refund and Replacement Policy', path: '/refund-policy/' }} />
      <JsonLd type="faq" data={REFUND_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <PolicyContent policyType="refund" />
    </>
  );
}
