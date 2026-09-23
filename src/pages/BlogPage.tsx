// src/pages/BlogPage.tsx
import React, { useState } from 'react';
import { POSTS, SITE } from '../config/site.js';
import { Calendar, Clock, ArrowRight, BookOpen, ArrowLeft } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: string) => void;
  selectedSlug?: string;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, selectedSlug }) => {
  if (selectedSlug) {
    const post = POSTS.find((p) => p.slug === selectedSlug) || POSTS[0];
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
        <button
          type="button"
          onClick={() => onNavigate('/blog')}
          className="inline-flex items-center gap-2 text-xs font-mono-code text-[#C5A059] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Production Guides</span>
        </button>

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

          <p className="text-sm text-[#9AA7A0] leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <article className="prose prose-invert max-w-none text-[#B4C0BA] text-sm leading-relaxed space-y-4">
          {post.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        <div className="pt-8 border-t border-[#1E2B25] flex justify-between items-center">
          <button
            type="button"
            onClick={() => onNavigate('/shop')}
            className="px-6 py-3 bg-gradient-to-r from-[#C5A059] to-[#E5C378] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow cursor-pointer font-mono-code"
          >
            Explore Cinema Props Catalog →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
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
          <div
            key={post.slug}
            onClick={() => onNavigate(`/blog/${post.slug}`)}
            className="luxury-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer group space-y-4"
          >
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
        ))}
      </div>
    </div>
  );
};
