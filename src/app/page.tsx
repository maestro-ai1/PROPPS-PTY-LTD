import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../components/JsonLd.js';
import { HomeContent } from '../views/HomePage.js';

export const metadata: Metadata = {
  title: 'Prop Money Australia | Cinema-Grade Currency – PROPPS PTY LTD',
  description:
    'Buy prop money Australia for film, TV, and theatre productions. Cinema-grade specimen currency with fast Melbourne dispatch and a 10% crypto discount.',
};

export default function Page() {
  return (
    <>
      <JsonLd type="homepage" />
      <HomeContent />
    </>
  );
}
