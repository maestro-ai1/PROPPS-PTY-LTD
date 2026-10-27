// src/components/RelatedBlocks.tsx
// Server component: "Related searches" (secondary keywords linking to the page that owns their primary keyword)
// and "Topics" (tag chips). Both are plain crawlable links.
import React from 'react';
import Link from 'next/link';
import { searchLinksFor } from '../config/keyword-links.js';
import { tagsForPost, tagsForProduct, tagsForCategory, tagHref } from '../config/tags.js';

const CHIP = 'inline-block px-3 py-1.5 rounded-lg text-xs bg-[#F9F7F2] text-[#6F665F] border border-[#EAE3DC] hover:border-[#D4AF37] hover:text-[#1A1414] transition-colors';

interface Props {
  hostHref: string;
  kind: 'post' | 'product' | 'category';
  slug: string;
  narrow?: boolean;
}

export const RelatedBlocks: React.FC<Props> = ({ hostHref, kind, slug, narrow }) => {
  const searches = searchLinksFor(hostHref);
  const tags = kind === 'post' ? tagsForPost(slug) : kind === 'product' ? tagsForProduct(slug) : tagsForCategory(slug);
  if (searches.length === 0 && tags.length === 0) return null;

  return (
    <aside
      aria-label="Related searches and topics"
      className={`${narrow ? 'max-w-3xl' : 'max-w-6xl'} mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-6`}
    >
      {searches.length > 0 && (
        <section className="space-y-3 border-t border-[#EAE3DC] pt-6">
          <h2 className="font-serif-luxury text-base font-bold text-[#1A1414]">Related searches</h2>
          <ul className="flex flex-wrap gap-2">
            {searches.map((s) => (
              <li key={s.keyword}>
                <Link href={s.href} className={CHIP}>{s.keyword}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {tags.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-base font-bold text-[#1A1414]">Topics</h2>
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t.slug}>
                <Link href={tagHref(t)} className={CHIP}>{t.kw}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
};
