// src/pages/ShopPage.tsx
import React, { useState, useMemo } from 'react';
import { Filter, ShoppingBag, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SHOP, SITE } from '../config/site.js';
import { SmartImage } from '../components/SmartImage.js';

interface ShopPageProps {
  initialCategory?: string;
  onNavigate: (path: string) => void;
  onAddToCart: (product: (typeof PRODUCTS)[0]) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  initialCategory,
  onNavigate,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedCategory, sortBy]);

  const handleAdd = (product: (typeof PRODUCTS)[0]) => {
    onAddToCart(product);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1500);
  };

  const currentCatObj = CATEGORIES.find((c) => c.slug === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Page Header */}
      <div className="border-b border-[#1E2B25] pb-6 space-y-2">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Australian Cinema Specimen Catalog
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          {currentCatObj ? currentCatObj.name.toUpperCase() : 'CINEMA PROP MONEY CATALOG'}
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-3xl leading-relaxed">
          {currentCatObj
            ? currentCatObj.description
            : 'Explore Australia’s standard in compliant reproduction currency, 100-note strapped bundles, bank bricks, and turnkey director heist kits.'}
        </p>
      </div>

      {/* Category Filter Pills & Sort Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#C5A059] text-[#0D1512] font-bold shadow'
                : 'bg-[#141E1A] text-[#B4C0BA] hover:bg-[#1C2A24] border border-[#22302A]'
            }`}
          >
            All Props ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.slug
                  ? 'bg-[#C5A059] text-[#0D1512] font-bold shadow'
                  : 'bg-[#141E1A] text-[#B4C0BA] hover:bg-[#1C2A24] border border-[#22302A]'
              }`}
            >
              {cat.name}
            </button>
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
          return (
            <div
              key={product.slug}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div
                onClick={() => onNavigate(`/shop/${product.category}/${product.slug}`)}
                className="cursor-pointer"
              >
                <SmartImage
                  src={product.images[0]}
                  alt={product.name}
                  badge={product.badge}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div
                  onClick={() => onNavigate(`/shop/${product.category}/${product.slug}`)}
                  className="cursor-pointer space-y-1.5"
                >
                  <h3 className="font-serif-luxury text-sm font-bold text-[#F8F6F0] hover:text-[#E5C378] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9AA7A0] leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#22302A] space-y-3">
                  <div className="flex items-center justify-between font-mono-code">
                    <div>
                      <span className="text-base font-bold text-[#C5A059]">
                        ${product.price} AUD
                      </span>
                      <span className="text-[10px] text-[#6E7B75] block">
                        crypto: ${(product.price * 0.9).toFixed(0)} AUD
                      </span>
                    </div>
                    <span className="text-[10px] text-[#56C48B] font-semibold">
                      MELBOURNE STOCK
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate(`/shop/${product.category}/${product.slug}`)
                      }
                      className="py-2.5 px-3 bg-[#1C2A24] hover:bg-[#263830] text-[#F8F6F0] text-xs font-semibold rounded-lg border border-[#2C3E36] transition-colors text-center cursor-pointer"
                    >
                      Specifications
                    </button>

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

      {/* RBA Compliance Banner on Shop Page */}
      <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#B4C0BA]">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#C5A059] shrink-0" />
          <span>
            All reproduction currency adheres strictly to Section 22 of the Crimes (Currency) Act 1981.
          </span>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/compliance')}
          className="text-[#C5A059] hover:underline shrink-0"
        >
          Read Legal Compliance Guide →
        </button>
      </div>
    </div>
  );
};
