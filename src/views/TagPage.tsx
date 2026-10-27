// src/views/TagPage.tsx
// Tag landing pages: /tags/ (hub of every tag) and /tags/<slug>/ (one keyword, its copy, matching products and guides).
import React from 'react';
import Link from 'next/link';
import { TAGS, TAG_NOTE, tagHref, relatedTags } from '../config/tags.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { ProductPhoto } from '../components/ProductPhoto.js';

const LINK = 'text-[#D4AF37] underline hover:text-[#C5A059] transition-colors';
const CHIP = 'inline-block px-3 py-1.5 rounded-lg text-xs bg-[#F9F7F2] text-[#6F665F] border border-[#EAE3DC] hover:border-[#D4AF37]';
type Tag = (typeof TAGS)[number];

const titleCase = (s: string) => s.replace(/\b([a-z])/g, (m) => m.toUpperCase());

export const TagsHubContent: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
    <Breadcrumb items={[{ name: 'Topics', href: '/tags' }]} />
    <header className="space-y-3 border-b border-[#EAE3DC] pb-6">
      <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">Prop Money Topics and Searches</h1>
      <p className="text-sm text-[#6F665F] leading-relaxed">
        Every topic below groups the PROPPS products and guides that answer one search, from movie grade prop money to play money for kids. Each topic page links on to the matching range in the <Link href="/shop/" className={LINK}>shop</Link> and to our <Link href="/blog/" className={LINK}>buying guides</Link>.
      </p>
    </header>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {TAGS.map((t) => (
        <li key={t.slug} className="rounded-xl border border-[#EAE3DC] bg-white p-4 space-y-1">
          <h2 className="font-serif-luxury text-base font-bold text-[#1A1414]">
            <Link href={tagHref(t)} className="hover:text-[#D4AF37] transition-colors">{titleCase(t.kw)}</Link>
          </h2>
          <p className="text-xs text-[#6F665F] leading-relaxed">{t.paras[0].slice(0, 120).replace(/\s+\S*$/, '')}...</p>
        </li>
      ))}
    </ul>
  </div>
);

export const TagContent: React.FC<{ tag: Tag }> = ({ tag }) => {
  const related = relatedTags(tag);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <Breadcrumb items={[{ name: 'Topics', href: '/tags' }, { name: titleCase(tag.kw), href: `/tags/${tag.slug}` }]} />

      <header className="space-y-4 border-b border-[#EAE3DC] pb-8">
        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">{tag.title.split(':')[0]}</h1>
        {tag.paras.map((p) => (
          <p key={p.slice(0, 24)} className="text-sm text-[#6F665F] leading-relaxed">{p}</p>
        ))}
        <p>
          <Link href={tag.target.href} className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code">
            {tag.target.label} →
          </Link>
        </p>
      </header>

      {tag.products.length > 0 && (
        <section className="space-y-4" aria-labelledby="tag-products">
          <h2 id="tag-products" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Products for {tag.kw}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tag.products.map((p) => (
              <Link key={p.slug} href={`/shop/${p.category}/${p.slug}/`} className="luxury-card rounded-2xl overflow-hidden group block bg-white">
                <ProductPhoto src={p.images[0]} alt={p.name} />
                <div className="p-4 space-y-1">
                  <h3 className="font-serif-luxury text-xs font-bold text-[#1A1414] group-hover:text-[#D4AF37] transition-colors">{p.name}</h3>
                  <span className="font-mono-code text-xs font-bold text-[#D4AF37] block">From ${p.price} AUD</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {tag.categories.length > 0 && (
        <section className="space-y-3" aria-labelledby="tag-ranges">
          <h2 id="tag-ranges" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Ranges that fit</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#6F665F]">
            {tag.categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop/${c.slug}/`} className={LINK}>{c.name}</Link>
                <span>: {c.description}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="space-y-3" aria-labelledby="tag-guides">
        <h2 id="tag-guides" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Guides on {tag.kw}</h2>
        <ul className="space-y-3 text-sm text-[#6F665F]">
          {tag.posts.map((g) => (
            <li key={g.slug}>
              <Link href={`/blog/${g.slug}/`} className={LINK}>{g.title}</Link>
              <p className="text-xs leading-relaxed">{g.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="space-y-3 border-t border-[#EAE3DC] pt-6" aria-labelledby="tag-related">
          <h2 id="tag-related" className="font-serif-luxury text-base font-bold text-[#1A1414]">Related topics</h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={tagHref(r)} className={CHIP}>{r.kw}</Link>
              </li>
            ))}
            <li><Link href="/tags/" className="inline-block px-3 py-1.5 rounded-lg text-xs text-[#D4AF37] underline">All topics</Link></li>
          </ul>
        </section>
      )}

      <p className="text-xs text-[#6F665F] leading-relaxed border-t border-[#EAE3DC] pt-4">
        {TAG_NOTE} Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. See the <Link href="/compliance/" className={LINK}>compliance page</Link>, <Link href="/shipping-policy/" className={LINK}>shipping policy</Link> and <Link href="/refund-policy/" className={LINK}>refund policy</Link>.
      </p>
    </div>
  );
};
