import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ComplianceContent } from '../../views/CompliancePage.js';

export const metadata: Metadata = {
  title: { absolute: 'Prop Money Australia Laws: Is It Legal? Section 22 Guide' },
  description:
    'Prop money Australia laws in plain English: Crimes (Currency) Act 1981 Section 22, RBA rules and the markings that keep prop notes lawful. Read the guide.',
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
