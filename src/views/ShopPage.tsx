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
      <div className="border-b border-[#1E2B25] pb-6 space-y-2">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Australian Cinema Specimen Catalog
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          {currentCatObj ? (currentCatObj.h1 ?? currentCatObj.name).toUpperCase() : 'PROP MONEY AUSTRALIA — FULL CATALOG'}
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-3xl leading-relaxed">
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
                ? 'bg-[#C5A059] text-[#0D1512] font-bold shadow'
                : 'bg-[#141E1A] text-[#B4C0BA] hover:bg-[#1C2A24] border border-[#22302A]'
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
                  ? 'bg-[#C5A059] text-[#0D1512] font-bold shadow'
                  : 'bg-[#141E1A] text-[#B4C0BA] hover:bg-[#1C2A24] border border-[#22302A]'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 text-xs font-mono-code shrink-0">
          <span className="text-[#889690]">SORT BY:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#141E1A] border border-[#2C3E36] rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-[#C5A059]"
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
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <Link href={productHref} className="block space-y-1.5">
                  <h3 className="font-serif-luxury text-sm font-bold text-[#F8F6F0] hover:text-[#E5C378] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9AA7A0] leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </Link>

                <div className="pt-3 border-t border-[#22302A] space-y-3">
                  <div className="flex items-center justify-between font-mono-code">
                    <div>
                      <span className="text-base font-bold text-[#C5A059]">
                        From ${product.price} AUD
                      </span>
                      <span className="text-[10px] text-[#6E7B75] block">
                        crypto: ${(product.price * 0.9).toFixed(0)} AUD
                      </span>
                    </div>
                    <span className="text-[10px] text-[#56C48B] font-semibold">MELBOURNE STOCK</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={productHref}
                      className="py-2.5 px-3 bg-[#1C2A24] hover:bg-[#263830] text-[#F8F6F0] text-xs font-semibold rounded-lg border border-[#2C3E36] transition-colors text-center"
                    >
                      Specifications
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`py-2.5 px-3 font-bold text-xs uppercase tracking-wider rounded-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer shadow ${
                        isAdded
                          ? 'bg-[#56C48B] text-[#0D1512]'
                          : 'bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512]'
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
