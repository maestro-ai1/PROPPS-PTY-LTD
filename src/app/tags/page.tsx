import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { TagsHubContent } from '../../views/TagPage.js';

export const metadata: Metadata = {
  title: { absolute: 'Prop Money Topics and Searches | PROPPS' },
  description: 'Browse prop money topics: movie grade notes, $100 and $50 notes, play money for kids and party use. Each topic links products and buying guides.',
  alternates: { canonical: `https://${SITE.domain}/tags/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'CollectionPage', name: 'Prop Money Topics and Searches', path: '/tags/' }} />
      <TagsHubContent />
    </>
  );
}
