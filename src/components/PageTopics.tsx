// src/components/PageTopics.tsx
// Server component, driven by src/config/keyword-map.js (same idea as ebikedirect.eu): the page's secondary keywords are
// rendered as visible H3 topics, each with one plain sentence and a link to the guide or range that answers it.
import React from 'react';
import Link from 'next/link';
import { KEYWORD_PAGES, KEYWORD_PRODUCTS } from '../config/keyword-map.js';
import { POSTS, PRODUCTS } from '../config/site.js';

const LINK = 'text-[#D4AF37] underline hover:text-[#C5A059] transition-colors';
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const PAGE_GUIDE: Record<string, string> = {
  '/': 'buying-film-props-in-australia-a-checklist-for-art-departments',
  '/shop': 'where-to-buy-prop-money-in-australia-legally',
  '/about': 'where-to-buy-prop-money-in-australia-legally',
  '/contact': 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia',
  '/wholesale': 'wholesale-prop-money-for-production-companies-bulk-pricing-explained',
  '/compliance': 'crimes-currency-act-1981-rba-prop-money-guidelines',
  '/shop/new-notes': 'where-to-buy-prop-money-in-australia-legally',
  '/shop/film-and-tv-props': 'buying-film-props-in-australia-a-checklist-for-art-departments',
  '/shop/money-stacks': 'ready-prop-money-stacks-for-fast-turnaround',
  '/shop/photography-props': 'prop-money-for-photography-realistic-cash-shots-without-the-risk',
  '/shop/event-and-party-props': 'toy-money-and-play-money-for-kids-games-and-learning',
  '/shop/custom-and-branded-props': 'custom-and-branded-prop-currency-guide-for-agencies',
};

function guideFor(key: string, cat: string | null, prod: string | null) {
  const fixed = PAGE_GUIDE[key];
  if (fixed) return POSTS.find((p) => p.slug === fixed);
  const byDate = [...POSTS].sort((a, b) => (b.date < a.date ? -1 : 1));
  if (prod) { const hit = byDate.find((p) => (p.relatedProducts ?? []).includes(prod)); if (hit) return hit; }
  if (cat) return byDate.find((p) => (p.relatedCategories ?? []).includes(cat));
  return byDate[0];
}

interface Props {
  /** keyword-map page key such as "/", "/shop/new-notes", or a product slug */
  target: string;
  name: string;
}

export const PageTopics: React.FC<Props> = ({ target, name }) => {
  const product = PRODUCTS.find((p) => p.slug === target);
  const entry = product ? KEYWORD_PRODUCTS[target as keyof typeof KEYWORD_PRODUCTS] : KEYWORD_PAGES[target as keyof typeof KEYWORD_PAGES];
  if (!entry || entry.secondary.length === 0) return null;
  const cat = product ? product.category : /^\/shop\/(.+)$/.exec(target)?.[1] ?? null;
  const guide = guideFor(target, cat, product ? target : null);
  const link = guide ? <Link href={`/blog/${guide.slug}/`} className={LINK}>{guide.title}</Link> : null;

  const sentence = (intent: string, kw: string) => {
    const lead = intent.charAt(0);
    if (lead === 'T') return <>Buying {kw}? Every PROPPS note is a specimen-marked reproduction prop. Orders start at $300 AUD and ship from Melbourne by Express Post with signature.</>;
    if (lead === 'I') return <>Researching {kw}? {link ? <>Our guide <em>{link}</em> explains it in plain English.</> : 'Our buying guides explain it in plain English.'}</>;
    if (lead === 'N') return <>Looking for {kw}? This page and the {name} range are the quickest way to find it.</>;
    return <>Comparing {kw}? {link ? <>Check the options on this page, then read <em>{link}</em> before you order.</> : 'Check the options on this page before you order.'}</>;
  };

  return (
    <section aria-labelledby={`topics-${target.replace(/[^a-z0-9]+/gi, '-')}`} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-4">
      <h2 id={`topics-${target.replace(/[^a-z0-9]+/gi, '-')}`} className="font-serif-luxury text-xl font-bold text-[#1A1414]">
        What buyers search for: {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {entry.secondary.map((s: { keyword: string; intent: string }) => (
          <div key={s.keyword}>
            <h3 className="font-serif-luxury text-base font-bold text-[#1A1414]">{cap(s.keyword)}</h3>
            <p className="text-sm text-[#6F665F] leading-relaxed mt-1">{sentence(s.intent, s.keyword)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
