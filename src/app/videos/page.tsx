import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { VideosContent } from '../../views/VideosPage.js';

export const metadata: Metadata = {
  title: 'Cinema Prop Videos & Camera Tests',
  description:
    '4K video demonstrations of PROPPS PTY LTD Australian prop currency: slow-motion camera tests, bank brick unboxings, director kit breakdowns, and art department aging tutorials.',
  alternates: { canonical: `https://${SITE.domain}/videos/` },
};

export default function Page() {
  return <VideosContent />;
}
