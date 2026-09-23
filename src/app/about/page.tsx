import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { AboutContent } from '../../views/AboutPage.js';

export const metadata: Metadata = {
  title: `About ${SITE.name} — Melbourne Cinema Prop Currency Since 2019`,
  description:
    'PROPPS PTY LTD is Australia’s dedicated cinema-grade reproduction currency manufacturer, founded 2019 in Eltham VIC. Section 22 Crimes (Currency) Act 1981 compliant.',
  alternates: { canonical: `https://${SITE.domain}/about/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="about" />
      <AboutContent />
    </>
  );
}
