// src/views/ShopPage.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../config/site.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { useApp } from '../context/AppContext.js';

interface ShopContentProps {
  category?: string;
}

export const ShopContent: React.FC<ShopContentProps> = ({ category }) => {
  const { addToCart } = useApp();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let list = category ? PRODUCTS.filter((p) => p.category === category) : [...PRODUCTS];

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [category, sortBy]);

  const handleAdd = (product: (typeof PRODUCTS)[number]) => {
    addToCart(product);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1500);
  };

  const currentCatObj = CATEGORIES.find((c) => c.slug === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <Breadcrumb
        items={[
          { name: 'Shop', href: '/shop' },
          ...(currentCatObj ? [{ name: currentCatObj.name, href: `/shop/${currentCatObj.slug}` }] : []),
        ]}
      />

      {/* Page Header */}
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block">
          Australian Cinema Specimen Catalog
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1414]">
          {currentCatObj ? (currentCatObj.h1 ?? currentCatObj.name).toUpperCase() : 'PROP MONEY AUSTRALIA — FULL CATALOG'}
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F] max-w-3xl leading-relaxed">
          {currentCatObj
            ? currentCatObj.description
            : 'Explore Australia’s standard in compliant reproduction currency, 100-note strapped bundles, bank bricks, and turnkey director heist kits.'}
        </p>
      </div>

      {/* Category Filter Pills & Sort Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Category Pills — real links so every category is its own indexable URL */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/shop"
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              !category
                ? 'bg-[#D4AF37] text-white font-bold shadow'
                : 'bg-[#F9F7F2] text-[#6F665F] hover:bg-white border border-[#EAE3DC]'
            }`}
          >
            All Props ({PRODUCTS.length})
          </Link>

          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                category === cat.slug
                  ? 'bg-[#D4AF37] text-white font-bold shadow'
                  : 'bg-[#F9F7F2] text-[#6F665F] hover:bg-white border border-[#EAE3DC]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs font-mono-code shrink-0">
          <span className="text-[#6F665F]">SORT BY:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#EAE3DC] rounded-lg px-3 py-1.5 text-[#1A1414] focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid (Uniform 4:3 Product Frames) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const isAdded = addedSlug === product.slug;
          const productHref = `/shop/${product.category}/${product.slug}`;
          return (
            <div key={product.slug} className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between">
              {/* Image Frame */}
              <Link href={productHref} className="block">
                <ProductPhoto src={product.images[0]} alt={product.name} badge={product.badge} />
              </Link>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <Link href={productHref} className="block space-y-1.5">
                  <h2 className="font-serif-luxury text-sm font-bold text-[#1A1414] hover:text-[#D4AF37] transition-colors leading-snug">
                    {product.name}
                  </h2>
                  <p className="text-xs text-[#6F665F] leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </Link>

                <div className="pt-3 border-t border-[#F7F4F0] space-y-3">
                  <div className="flex items-center justify-between font-mono-code">
                    <div>
                      <span className="text-base font-bold text-[#D4AF37]">
                        From ${product.price} AUD
                      </span>
                      <span className="text-[10px] text-[#6F665F] block">
                        crypto: ${(product.price * 0.9).toFixed(0)} AUD
                      </span>
                    </div>
                    <span className="text-[10px] text-[#00b67a] font-semibold">MELBOURNE STOCK</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={productHref}
                      className="py-2.5 px-3 bg-[#F9F7F2] hover:bg-white text-[#1A1414] text-xs font-semibold rounded-lg border border-[#EAE3DC] transition-colors text-center"
                    >
                      Specifications
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`py-2.5 px-3 font-bold text-xs uppercase tracking-wider rounded-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer shadow ${
                        isAdded
                          ? 'bg-[#00b67a] text-white'
                          : 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#C5A059] hover:to-[#D4AF37] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add To Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
