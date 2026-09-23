import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ShopContent } from '../../views/ShopPage.js';

export const metadata: Metadata = {
  title: 'Prop Money Australia | Shop Cinema Currency',
  description:
    'Shop prop money Australia: New Notes, Money Stacks, Film & TV Props, Photography, Event & Party, and Custom Props. Buy prop money online, fast Melbourne dispatch.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function Page() {
  return <ShopContent />;
}
