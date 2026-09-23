import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Refund & Replacement Policy',
  description: 'PROPPS PTY LTD refund, damage replacement, and cancellation policy under Australian Consumer Law.',
  alternates: { canonical: `https://${SITE.domain}/refund-policy/` },
};

export default function Page() {
  return <PolicyContent policyType="refund" />;
}
