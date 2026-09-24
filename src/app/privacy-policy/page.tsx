import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PROPPS PTY LTD collects, uses, and protects customer data under the Privacy Act 1988 (Cth).',
  alternates: { canonical: `https://${SITE.domain}/privacy-policy/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Privacy Policy', path: '/privacy-policy/' }} />
      <PolicyContent policyType="privacy" />
    </>
  );
}
