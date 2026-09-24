import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { FaqContent } from '../../views/FaqPage.js';

export const metadata: Metadata = {
  title: 'FAQ — Orders, Compliance & Shipping',
  description:
    'Answers on Australian prop money legality, Crimes (Currency) Act 1981 compliance, minimum order thresholds, crypto discounts, and Australia Post Express shipping.',
  alternates: { canonical: `https://${SITE.domain}/faq/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="faq" />
      <FaqContent />
    </>
  );
}
