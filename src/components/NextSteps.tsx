// src/components/NextSteps.tsx
// A short block of contextual internal links for the static pages (about, contact, wholesale, compliance).
import React from 'react';
import Link from 'next/link';

const LINK = 'text-[#D4AF37] underline hover:text-[#C5A059] transition-colors';

export const NextSteps: React.FC = () => (
  <nav aria-label="Where to next" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-2">
    <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">Where to next</h2>
    <p className="text-sm text-[#6F665F] leading-relaxed">
      Browse the <Link href="/shop/new-notes/" className={LINK}>new Australian prop notes</Link>, the <Link href="/shop/film-and-tv-props/" className={LINK}>film and TV range</Link> or
      ready <Link href="/shop/money-stacks/" className={LINK}>money stacks</Link>. Read the <Link href="/blog/" className={LINK}>buying guides</Link>, check
      the <Link href="/compliance/" className={LINK}>compliance page</Link>, <Link href="/shipping-policy/" className={LINK}>shipping policy</Link> and <Link href="/refund-policy/" className={LINK}>refund policy</Link>,
      or <Link href="/wholesale/" className={LINK}>ask for a wholesale quote</Link>.
    </p>
  </nav>
);
