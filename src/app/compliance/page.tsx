import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ComplianceContent } from '../../views/CompliancePage.js';

export const metadata: Metadata = {
  title: { absolute: 'Prop Money Australia Laws: Is It Legal? Section 22 Guide' },
  description:
    'Is prop money legal in Australia? Our compliance policy: non-legal tender specimen markings on every note, Section 22 rules and film, TV and theatre use only.',
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
