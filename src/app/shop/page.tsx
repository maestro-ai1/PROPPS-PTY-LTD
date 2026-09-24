import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ShopContent } from '../../views/ShopPage.js';

export const metadata: Metadata = {
  title: 'Prop Money Australia | Shop Cinema Currency',
  description:
    'Shop prop money Australia: New Notes, Money Stacks, Film & TV, Photography, Event & Custom Props. Buy prop money online with fast Melbourne dispatch.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function Page() {
  return <ShopContent />;
}
