import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Terms & Conditions of Sale',
  description: 'Legally binding terms governing the purchase and intended use of PROPPS PTY LTD reproduction currency props.',
  alternates: { canonical: `https://${SITE.domain}/terms-and-conditions/` },
};

export default function Page() {
  return <PolicyContent policyType="terms" />;
}
