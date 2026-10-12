import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ShopContent } from '../../views/ShopPage.js';

export const metadata: Metadata = {
  title: { absolute: 'Australian Prop Money for Sale | Shop Online | PROPPS' },
  description:
    'Buy prop money online: $5 to $100 specimen notes, money stacks and film packs. Order prop money in AUD with Express Post, free delivery over $500.',
  keywords: SITE.keywords,
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function Page() {
  return <ShopContent />;
}
