import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { WholesaleContent } from '../../views/WholesalePage.js';

export const metadata: Metadata = {
  title: 'Wholesale Prop Money Australia | Bulk Pricing',
  description:
    'Wholesale prop money Australia for production companies. Bulk prop cash pricing, tiered discounts (10%–30%), and a dedicated studio contact for ongoing orders.',
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
