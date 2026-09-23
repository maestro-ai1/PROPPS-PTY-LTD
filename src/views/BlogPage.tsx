// src/views/BlogPage.tsx
import React from 'react';
import Link from 'next/link';
import { POSTS, PRODUCTS, CATEGORIES } from '../config/site.js';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { BlogPhoto } from '../components/BlogPhoto.js';

export const BlogListContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />

      {/* Header */}
      <div className="border-b border-[#1E2B25] pb-6 space-y-2 text-center">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Cinematography &amp; Art Department Guides
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          PROP &amp; PRODUCTION JOURNAL
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-2xl mx-auto leading-relaxed">
          Technical insights for directors of photography, prop masters, gaffers, and line producers working with reproduction Australian currency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group"
          >
            <BlogPhoto src={post.image} alt={post.imageAlt ?? post.title} />

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-[#9AA7A0]">
                <span className="text-[#C5A059] font-bold uppercase">{post.category}</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0] group-hover:text-[#E5C378] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-[#9AA7A0] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E2B25] flex items-center justify-between text-xs font-mono-code text-[#C5A059]">
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Authors write links inline as [label](url). Internal hrefs (starting with
// "/") render as next/link; external hrefs open in a new tab with a
// dofollow rel — these are curated authoritative citations (RBA,
// legislation.gov.au, etc.), not user content, so no nofollow is applied.
const LINK_PATTERN = /(\[[^\]]+\]\([^)]+\))/g;
const LINK_MATCH = /^\[([^\]]+)\]\(([^)]+)\)$/;

function renderParagraph(text: string, key: number) {
  const parts = text.split(LINK_PATTERN);
  return (
    <p key={key}>
      {parts.map((part, i) => {
        const match = part.match(LINK_MATCH);
        if (!match) return <React.Fragment key={i}>{part}</React.Fragment>;
        const [, label, href] = match;
        if (href.startsWith('http')) {
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] underline hover:text-[#E5C378] transition-colors"
            >
              {label}
            </a>
          );
        }
        return (
          <Link
            key={i}
            href={href}
            className="text-[#C5A059] underline hover:text-[#E5C378] transition-colors"
          >
            {label}
          </Link>
        );
      })}
    </p>
  );
}

interface BlogPostContentProps {
  post: (typeof POSTS)[number];
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  const relatedProducts = (post.relatedProducts ?? [])
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));
  const relatedCategories = (post.relatedCategories ?? [])
    .map((slug) => CATEGORIES.find((c) => c.slug === slug))
    .filter((c): c is (typeof CATEGORIES)[number] => Boolean(c));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono-code text-[#C5A059] hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Production Guides</span>
      </Link>

      <header className="space-y-3 border-b border-[#1E2B25] pb-6">
        <div className="flex items-center gap-3 text-xs font-mono-code text-[#C5A059]">
          <span className="px-2.5 py-0.5 rounded bg-[#1C2A24] border border-[#2C3E36] font-bold">
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-[#9AA7A0]">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-[#9AA7A0]">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#F8F6F0] leading-tight">
          {post.title}
        </h1>

        <p className="text-sm text-[#9AA7A0] leading-relaxed">{post.excerpt}</p>
      </header>

      <BlogPhoto src={post.image} alt={post.imageAlt ?? post.title} priority />

      <article className="prose prose-invert max-w-none text-[#B4C0BA] text-sm leading-relaxed space-y-4">
        {post.content.split('\n\n').map((para, i) => renderParagraph(para, i))}
      </article>

      {relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-[#1E2B25] space-y-5">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            RELATED PROP SPECIMENS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/shop/${rel.category}/${rel.slug}`}
                className="luxury-card rounded-2xl overflow-hidden group block"
              >
                <ProductPhoto src={rel.images[0]} alt={rel.name} />
                <div className="p-4 space-y-1">
                  <h3 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] group-hover:text-[#E5C378] transition-colors truncate">
                    {rel.name}
                  </h3>
                  <span className="font-mono-code text-xs font-bold text-[#C5A059] block">
                    From ${rel.price} AUD
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedCategories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {relatedCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#141E1A] text-[#B4C0BA] hover:bg-[#1C2A24] border border-[#22302A] transition-all"
            >
              Explore {cat.name} →
            </Link>
          ))}
        </div>
      )}

      {post.relatedPage && (
        <Link
          href={post.relatedPage.href}
          className="inline-block text-xs font-mono-code text-[#C5A059] hover:underline"
        >
          {post.relatedPage.label} →
        </Link>
      )}

      <div className="pt-8 border-t border-[#1E2B25] flex justify-between items-center">
        <Link
          href="/shop"
          className="px-6 py-3 bg-gradient-to-r from-[#C5A059] to-[#E5C378] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code"
        >
          Explore Cinema Props Catalog →
        </Link>
      </div>
    </div>
  );
};
