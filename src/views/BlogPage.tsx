// src/views/BlogPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { POSTS, PRODUCTS, CATEGORIES, BLOG_FAQ } from '../config/site.js';
import { Calendar, Clock, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { BlogPhoto } from '../components/BlogPhoto.js';

const POSTS_PER_PAGE = 6;

export const BlogListContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />

      {/* Header */}
      <div className="border-b border-[#EAE3DC] pb-8 space-y-3 text-center">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block">
          Cinematography &amp; Art Department Guides
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A1414]">
          PROP &amp; PRODUCTION JOURNAL
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F] max-w-2xl mx-auto leading-relaxed">
          Technical insights for directors of photography, prop masters, gaffers, and line producers working with reproduction Australian currency.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#EAE3DC] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <BlogPhoto src={post.image} alt={post.imageAlt ?? post.title} />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-[10.5px] font-mono-code text-[#6F665F]">
                    <span className="text-[#D4AF37] font-bold uppercase px-2 py-0.5 rounded bg-[#F9F7F2] border border-[#D4AF37]/20">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-serif-luxury text-xl font-bold text-[#1A1414] group-hover:text-[#D4AF37] transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-[#6F665F] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F7F4F0] flex items-center justify-between text-xs font-mono-code text-[#D4AF37] group-hover:text-[#1A1414] transition-colors">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6 border-t border-[#F7F4F0]">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl border border-[#EAE3DC] text-[#6F665F] hover:bg-[#F9F7F2] hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 px-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-11 h-11 rounded-xl font-mono-code text-xs font-bold transition-all ${
                    currentPage === page
                      ? 'bg-[#D4AF37] text-white shadow-lg border border-[#D4AF37]'
                      : 'bg-white text-[#6F665F] border border-[#EAE3DC] hover:border-[#D4AF37]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl border border-[#EAE3DC] text-[#6F665F] hover:bg-[#F9F7F2] hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Blog Q&A Section (7 Items from Keywords) */}
      <section className="pt-16 border-t border-[#EAE3DC] space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-mono-code font-bold tracking-widest text-[#D4AF37] uppercase block">
            Production Intelligence
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1414]">
            PROP CURRENCY FAQ
          </h2>
          <p className="text-xs text-[#6F665F] max-w-md mx-auto">
            Essential answers on Australian prop money legality, cinematography performance, and studio logistics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-3">
          {BLOG_FAQ.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'bg-[#F9F7F2] border-[#D4AF37] shadow-md' : 'bg-white border-[#EAE3DC] hover:border-[#D4AF37]/50'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className={`font-serif-luxury font-bold text-sm sm:text-base leading-snug transition-colors ${isOpen ? 'text-[#1A1414]' : 'text-[#4F4640] group-hover:text-[#1A1414]'}`}>
                    {item.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                    isOpen ? 'bg-[#D4AF37] text-white rotate-180' : 'bg-[#F7F4F0] text-[#D4AF37]'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#6F665F] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="border-t border-[#D4AF37]/20 pt-4">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1A1414] to-[#2C2420] text-center space-y-6 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-[60px]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 blur-[60px]" />
        
        <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white relative z-10 leading-tight">
          Ready to Outfit Your Next <br className="hidden sm:block" /> Australian Production?
        </h3>
        <p className="text-sm text-[#BDB8B0] max-w-xl mx-auto relative z-10">
          From independent shorts to major streaming series, we provide compliant cinema-grade currency with same-day Melbourne dispatch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 pt-2">
          <Link
            href="/shop"
            className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#1A1414] font-black text-xs uppercase tracking-widest rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all font-mono-code"
          >
            Browse Cinema Shop
          </Link>
          <a
            href="https://wa.me/61420128746?text=Hello%20PROPPS%20PTY%20LTD,%20inquiring%20about%20a%20bulk%20film%20prop%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#D4AF37]/10 transition-all font-mono-code flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Dispatch</span>
          </a>
        </div>
      </section>
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
              className="text-[#D4AF37] underline hover:text-[#C5A059] transition-colors"
            >
              {label}
            </a>
          );
        }
        return (
          <Link
            key={i}
            href={href}
            className="text-[#D4AF37] underline hover:text-[#C5A059] transition-colors"
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

      <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4AF37] hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Production Guides</span>
      </Link>

      <header className="space-y-3 border-b border-[#EAE3DC] pb-6">
        <div className="flex items-center gap-3 text-xs font-mono-code text-[#D4AF37]">
          <span className="px-2.5 py-0.5 rounded bg-[#F9F7F2] border border-[#EAE3DC] font-bold">
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-[#6F665F]">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-[#6F665F]">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">
          {post.title}
        </h1>

        <p className="text-sm text-[#6F665F] leading-relaxed">{post.excerpt}</p>
      </header>

      <BlogPhoto src={post.image} alt={post.imageAlt ?? post.title} priority />

      <article className="prose max-w-none text-[#6F665F] text-sm leading-relaxed space-y-4">
        {post.content.split('\n\n').map((para, i) => renderParagraph(para, i))}
      </article>

      {relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-[#EAE3DC] space-y-5">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            RELATED PROP SPECIMENS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/shop/${rel.category}/${rel.slug}`}
                className="luxury-card rounded-2xl overflow-hidden group block bg-white"
              >
                <ProductPhoto src={rel.images[0]} alt={rel.name} />
                <div className="p-4 space-y-1">
                  <h3 className="font-serif-luxury text-xs font-bold text-[#1A1414] group-hover:text-[#D4AF37] transition-colors truncate">
                    {rel.name}
                  </h3>
                  <span className="font-mono-code text-xs font-bold text-[#D4AF37] block">
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
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#F9F7F2] text-[#6F665F] hover:bg-white border border-[#EAE3DC] transition-all"
            >
              Explore {cat.name} →
            </Link>
          ))}
        </div>
      )}

      {post.relatedPage && (
        <Link
          href={post.relatedPage.href}
          className="inline-block text-xs font-mono-code text-[#D4AF37] hover:underline"
        >
          {post.relatedPage.label} →
        </Link>
      )}

      <div className="pt-8 border-t border-[#EAE3DC] flex justify-between items-center">
        <Link
          href="/shop"
          className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code"
        >
          Explore Cinema Props Catalog →
        </Link>
      </div>
    </div>
  );
};
