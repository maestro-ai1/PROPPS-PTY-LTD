import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ComplianceContent } from '../../views/CompliancePage.js';

export const metadata: Metadata = {
  title: 'Prop Money Australia Laws | Compliance Guide',
  description:
    'Prop money Australia laws explained: Crimes (Currency) Act 1981 Section 22 and RBA reproduction currency guidelines for legally compliant prop currency.',
  alternates: { canonical: `https://${SITE.domain}/compliance/` },
};

export default function Page() {
  return <ComplianceContent />;
}
