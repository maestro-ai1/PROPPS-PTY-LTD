import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { ShopContent } from '../../views/ShopPage.js';

export const metadata: Metadata = {
  title: 'Shop Australian Cinema Prop Money',
  description:
    'Browse the full PROPPS PTY LTD catalog: strapped bundles, bank bricks, director briefcase kits, vintage props, and custom distressed cash for Australian film and TV.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function Page() {
  return <ShopContent />;
}
