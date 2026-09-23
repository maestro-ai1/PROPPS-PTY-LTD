import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { BlogListContent } from '../../views/BlogPage.js';

export const metadata: Metadata = {
  title: 'Prop & Production Journal',
  description:
    'Technical guides on Australian prop money legality, cinematography lighting for prop cash, and art department weathering techniques.',
  alternates: { canonical: `https://${SITE.domain}/blog/` },
};

export default function Page() {
  return <BlogListContent />;
}
