import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../config/site.js';
import { JsonLd } from '../components/JsonLd.js';
import { HomeContent } from '../views/HomePage.js';

export const metadata: Metadata = {
  title: { absolute: 'Australian Prop Money for Film & TV | PROPPS Melbourne' },
  description:
    'Cinema-grade Australian prop money for film, TV, theatre and photo shoots. Specimen-marked, made in Melbourne, Express dispatch nationwide. From $300.',
  keywords: SITE.keywords,
};

export default function Page() {
  return (
    <>
      <JsonLd type="homepage" />
      <HomeContent />
    </>
  );
}
