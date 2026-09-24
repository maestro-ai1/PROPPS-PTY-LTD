import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { VideosContent } from '../../views/VideosPage.js';

export const metadata: Metadata = {
  title: 'Props Money Denominations Review',
  description: 'Video review of PROPPS PTY LTD prop money across all denominations: $5, $10, $20, $50, and $100.',
  alternates: { canonical: `https://${SITE.domain}/videos/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: 'Props Money Denominations Review', path: '/videos/' }} />
      <VideosContent />
    </>
  );
}
