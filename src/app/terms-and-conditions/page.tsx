import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Terms & Conditions of Sale',
  description: 'Legally binding terms governing the purchase and intended use of PROPPS PTY LTD reproduction currency props.',
  alternates: { canonical: `https://${SITE.domain}/terms-and-conditions/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Terms and Conditions of Sale', path: '/terms-and-conditions/' }} />
      <PolicyContent policyType="terms" />
    </>
  );
}
