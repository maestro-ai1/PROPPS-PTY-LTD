import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { WholesaleContent } from '../../views/WholesalePage.js';

export const metadata: Metadata = {
  title: 'Wholesale Cinema Prop Supply — B2B Studio Pricing',
  description:
    'Tiered wholesale discounts (10%–30%) on Australian cinema prop currency for film, TV, and theatrical production companies. Request a production estimate.',
  alternates: { canonical: `https://${SITE.domain}/wholesale/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="wholesale" />
      <WholesaleContent />
    </>
  );
}
