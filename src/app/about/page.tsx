import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { AboutContent } from '../../views/AboutPage.js';

export const metadata: Metadata = {
  title: { absolute: 'About PROPPS | Melbourne Prop Money Makers Since 2019' },
  description:
    'PROPPS PTY LTD makes specimen-marked Australian prop currency in Eltham, Melbourne. 500+ productions supplied since 2019. Meet the team and our standards.',
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
