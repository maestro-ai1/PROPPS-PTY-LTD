import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ComplianceContent } from '../../views/CompliancePage.js';

export const metadata: Metadata = {
  title: 'Prop Money Australia Laws | Compliance Guide',
  description:
    'Prop money Australia laws explained: Crimes (Currency) Act 1981 Section 22 and RBA reproduction currency guidelines for legally compliant prop currency.',
  alternates: { canonical: `https://${SITE.domain}/compliance/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Prop Money Australia Laws', path: '/compliance/' }} />
      <ComplianceContent />
    </>
  );
}
