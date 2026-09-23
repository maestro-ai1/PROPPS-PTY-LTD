import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ComplianceContent } from '../../views/CompliancePage.js';

export const metadata: Metadata = {
  title: 'Crimes (Currency) Act 1981 & RBA Compliance',
  description:
    'How PROPPS PTY LTD reproduction currency complies with Section 22 of the Crimes (Currency) Act 1981 and Reserve Bank of Australia guidelines: specimen markings, paper stock, and on-set protocols.',
  alternates: { canonical: `https://${SITE.domain}/compliance/` },
};

export default function Page() {
  return <ComplianceContent />;
}
