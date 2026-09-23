import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { VideosContent } from '../../views/VideosPage.js';

export const metadata: Metadata = {
  title: 'Review Props Money Denominations: 5s, 10s, 20, 50s, 100s',
  description: 'Video review of PROPPS PTY LTD prop money across all denominations: $5, $10, $20, $50, and $100.',
  alternates: { canonical: `https://${SITE.domain}/videos/` },
};

export default function Page() {
  return <VideosContent />;
}
