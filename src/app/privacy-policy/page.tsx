import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { PolicyContent } from '../../views/PolicyPage.js';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PROPPS PTY LTD collects, uses, and protects customer data under the Privacy Act 1988 (Cth).',
  alternates: { canonical: `https://${SITE.domain}/privacy-policy/` },
};

export default function Page() {
  return <PolicyContent policyType="privacy" />;
}
