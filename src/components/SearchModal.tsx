// src/components/SearchModal.tsx
import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { PRODUCTS, CATEGORIES, POSTS } from '../config/site.js';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (slug: string) => void;
  onSelectPost: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectPost,
}) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
    );
  }, [query]);

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0F1714] border border-[#2C3E36] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#22302A] flex items-center gap-3 bg-[#0B100E]">
          <Search className="w-5 h-5 text-[#C5A059]" />
          <input
            type="text"
            autoFocus
            placeholder="Search prop cash, $100 bundles, bank bricks, briefcases..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-[#58645F] text-sm focus:outline-none font-mono-code"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#889690] hover:text-white text-xs font-mono-code mr-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#889690] hover:text-white rounded-lg hover:bg-[#1A2520]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div className="py-10 text-center space-y-2">
              <Package className="w-8 h-8 text-[#4E5C56] mx-auto" />
              <p className="text-xs text-[#9AA7A0] font-mono-code">
                Type keywords like "$100", "brick", "vintage", "strapped", "briefcase"...
              </p>
            </div>
          ) : filteredProducts.length === 0 && filteredPosts.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-sm font-semibold text-[#F8F6F0]">No props matching "{query}"</p>
              <p className="text-xs text-[#9AA7A0] mt-1 font-mono-code">
                Try searching for specific AUD denominations ($100, $50, $20) or bundle types.
              </p>
            </div>
          ) : (
            <>
              {filteredProducts.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#C5A059]">
                    Matching Prop Products ({filteredProducts.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.slug}
                        type="button"
                        onClick={() => {
                          onSelectProduct(p.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-[#141E1A] hover:bg-[#1C2A24] border border-[#22302A] hover:border-[#C5A059]/40 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-[#F8F6F0] group-hover:text-[#E5C378]">
                              {p.name}
                            </span>
                            {p.badge && (
                              <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-[#C5A059] text-[#0D1512] font-bold">
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#889690] truncate max-w-md mt-0.5">
                            {p.shortDescription}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono-code font-bold text-xs text-[#C5A059]">
                            ${p.price} AUD
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#889690] group-hover:text-[#C5A059] ml-auto mt-1" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#22302A]">
                  <h4 className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#C5A059]">
                    Production Guides &amp; Articles ({filteredPosts.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredPosts.map((post) => (
                      <button
                        key={post.slug}
                        type="button"
                        onClick={() => {
                          onSelectPost(post.slug);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-[#141E1A] hover:bg-[#1C2A24] border border-[#22302A] transition-colors"
                      >
                        <span className="text-xs font-semibold text-[#F8F6F0] block">
                          {post.title}
                        </span>
                        <span className="text-[10px] font-mono-code text-[#C5A059] mt-0.5 block">
                          {post.category} · {post.readTime}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
