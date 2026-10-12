import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { WholesaleContent } from '../../views/WholesalePage.js';

export const metadata: Metadata = {
  title: { absolute: 'Wholesale Prop Money Australia | Bulk Pricing' },
  description:
    'Wholesale prop money for Australian production companies. Bulk pricing, tiered discounts of 10% to 30% and a dedicated studio contact for ongoing orders.',
  keywords: SITE.keywords,
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
