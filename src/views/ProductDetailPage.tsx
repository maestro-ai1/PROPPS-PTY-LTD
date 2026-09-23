// src/views/ProductDetailPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Percent, ShoppingBag, MessageCircle, ArrowLeft, Check, FileCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SITE } from '../config/site.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { waLink } from '../lib/whatsapp.js';
import { useApp } from '../context/AppContext.js';

interface ProductDetailContentProps {
  product: (typeof PRODUCTS)[number];
}

export const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ product }) => {
  const { addToCart } = useApp();
  const bundles = product.bundles;
  const [selectedBundleId, setSelectedBundleId] = useState(bundles?.[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedBundle = bundles?.find((b) => b.id === selectedBundleId) ?? bundles?.[0];
  const unitPrice = selectedBundle?.price ?? product.price;

  const categoryObj = CATEGORIES.find((c) => c.slug === product.category);
  const sameCategoryProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const otherCategoryProducts = PRODUCTS.filter((p) => p.category !== product.category);
  const relatedProducts = [...sameCategoryProducts, ...otherCategoryProducts].slice(0, 3);

  const handleAdd = () => {
    const cartLine = selectedBundle
      ? {
          ...product,
          slug: `${product.slug}--${selectedBundle.id}`,
          name: `${product.name} — ${selectedBundle.label}`,
          price: selectedBundle.price,
        }
      : product;
    addToCart(cartLine, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const bundleNote = selectedBundle ? ` (${selectedBundle.label})` : '';
    const msg = `Hello ${SITE.name}, I am inquiring about ordering: ${quantity}x ${product.name}${bundleNote} ($${unitPrice * quantity} AUD). Could you confirm dispatch availability to my production location?`;
    window.open(waLink('61420128746', msg), '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { name: 'Shop', href: '/shop' },
          ...(categoryObj ? [{ name: categoryObj.name, href: `/shop/${categoryObj.slug}` }] : []),
          { name: product.name, href: `/shop/${product.category}/${product.slug}` },
        ]}
      />

      {/* Back button */}
      <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-mono-code text-[#C5A059] hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Prop Catalog</span>
      </Link>

      {/* Main Product Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left Column: Real Product Photography */}
        <div className="space-y-4">
          <div className="luxury-card rounded-2xl overflow-hidden border-2 border-[#C5A059]/30">
            <ProductPhoto src={product.images[0]} alt={product.name} badge={product.badge} priority />
          </div>

          <div className="p-4 bg-[#121A16] rounded-xl border border-[#22302A] flex items-center justify-between text-xs font-mono-code text-[#9AA7A0]">
            <span className="flex items-center gap-1.5 text-[#56C48B]">
              <ShieldCheck className="w-4 h-4" />
              RBA Specimen Compliant
            </span>
            <span>Melbourne Studio Stock</span>
          </div>
        </div>

        {/* Right Column: Pricing, Specs & Actions */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1C2A24] border border-[#2C3E36] text-[10px] font-mono-code uppercase tracking-wider text-[#C5A059]">
                {categoryObj?.name || 'Australian Prop'}
              </span>
              {product.badge && (
                <span className="px-2 py-0.5 rounded bg-[#C5A059] text-[#0D1512] text-[10px] font-mono-code font-bold uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Exactly One H1 for the Product Page */}
            <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#F8F6F0] leading-tight">
              {product.name}
            </h1>

            <p className="text-sm text-[#B4C0BA] leading-relaxed">{product.description}</p>
          </div>

          {/* Price Box */}
          <div className="p-5 rounded-2xl bg-[#141E1A] border border-[#2C3E36] space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-mono-code text-3xl font-extrabold text-[#C5A059]">
                ${unitPrice} AUD
              </span>
              <span className="text-xs text-[#9AA7A0] font-mono-code">EXPRESS DISPATCH</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E5C378]">
              <Percent className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Pay via Crypto &amp; save 10%: ${(unitPrice * 0.9).toFixed(0)} AUD</span>
            </div>
          </div>

          {/* Bundle Size Selector */}
          {bundles && bundles.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] block">
                Select Bundle Size
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {bundles.map((bundle) => {
                  const isSelected = selectedBundle?.id === bundle.id;
                  return (
                    <button
                      key={bundle.id}
                      type="button"
                      onClick={() => setSelectedBundleId(bundle.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#1C2A24] border-[#C5A059] shadow ring-1 ring-[#C5A059]'
                          : 'bg-[#121A16] border-[#22302A] hover:border-[#2C3E36]'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#F8F6F0] block">{bundle.label}</span>
                      <span className="text-[10px] text-[#9AA7A0] font-mono-code block">
                        ${bundle.faceValue.toLocaleString()} face value
                      </span>
                      <span className="text-sm font-mono-code font-bold text-[#C5A059] block mt-1">
                        ${bundle.price} AUD
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart Controls */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#121A16] border border-[#2C3E36] rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#C5A059] text-base font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center font-mono-code font-bold text-sm text-[#F8F6F0]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#C5A059] text-base font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-4 px-6 font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-xl ${
                  added
                    ? 'bg-[#56C48B] text-[#0D1512]'
                    : 'bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Added To Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {quantity} To Cart — ${unitPrice * quantity} AUD</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Studio Inquiry */}
            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 bg-[#121A16] hover:bg-[#1A2520] border border-[#25D366]/40 text-[#25D366] font-mono-code font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>

          {/* Technical Specifications Table */}
          {product.details && (
            <div className="p-5 rounded-2xl bg-[#0F1714] border border-[#22302A] space-y-3">
              <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>Production &amp; Camera Specifications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code">
                {Object.entries(product.details).map(([key, val]) => (
                  <div key={key} className="p-2.5 bg-[#141E1A] rounded-lg border border-[#1E2B25]">
                    <span className="text-[#889690] uppercase block text-[10px]">{key}</span>
                    <span className="text-[#F8F6F0] font-semibold block mt-0.5">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-[#1E2B25] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
              RELATED PROP SPECIMENS
            </h3>
            <Link href="/shop" className="text-xs font-mono-code text-[#C5A059] hover:underline">
              Browse All Props →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/shop/${rel.category}/${rel.slug}`}
                className="luxury-card rounded-2xl overflow-hidden group block"
              >
                <ProductPhoto src={rel.images[0]} alt={rel.name} />
                <div className="p-4 space-y-1">
                  <h4 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] group-hover:text-[#E5C378] transition-colors truncate">
                    {rel.name}
                  </h4>
                  <span className="font-mono-code text-xs font-bold text-[#C5A059] block">
                    From ${rel.price} AUD
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
