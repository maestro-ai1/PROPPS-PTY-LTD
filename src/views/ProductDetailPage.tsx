// src/views/ProductDetailPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Percent, ShoppingBag, MessageCircle, ArrowLeft, Check, FileCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES, SITE, PRODUCT_FAQS } from '../config/site.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { Breadcrumb } from '../components/Breadcrumb.js';
import { FaqSection } from '../components/FaqSection.js';
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
      <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4AF37] hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Prop Catalog</span>
      </Link>

      {/* Main Product Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left Column: Real Product Photography */}
        <div className="space-y-4">
          <div className="luxury-card rounded-2xl overflow-hidden border-2 border-[#EAE3DC]">
            <ProductPhoto src={product.images[0]} alt={product.name} badge={product.badge} priority />
          </div>

          <div className="p-4 bg-[#F9F7F2] rounded-xl border border-[#EAE3DC] flex items-center justify-between text-xs font-mono-code text-[#6F665F]">
            <span className="flex items-center gap-1.5 text-[#00b67a]">
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
              <span className="px-2 py-0.5 rounded bg-[#F9F7F2] border border-[#EAE3DC] text-[10px] font-mono-code uppercase tracking-wider text-[#D4AF37]">
                {categoryObj?.name || 'Australian Prop'}
              </span>
              {product.badge && (
                <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-white text-[10px] font-mono-code font-bold uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Exactly One H1 for the Product Page */}
            <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">
              {product.name}
            </h1>

            <p className="text-sm text-[#6F665F] leading-relaxed">{product.description}</p>
          </div>

          {/* Price Box */}
          <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-mono-code text-3xl font-extrabold text-[#D4AF37]">
                ${unitPrice} AUD
              </span>
              <span className="text-xs text-[#6F665F] font-mono-code">EXPRESS DISPATCH</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4AF37]">
              <Percent className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Pay via Crypto &amp; save 10%: ${(unitPrice * 0.9).toFixed(0)} AUD</span>
            </div>
          </div>

          {/* Bundle Size Selector */}
          {bundles && bundles.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#D4AF37] block">
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
                          ? 'bg-white border-[#D4AF37] shadow ring-1 ring-[#D4AF37]'
                          : 'bg-[#F9F7F2] border-[#EAE3DC] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="text-xs font-bold text-[#1A1414] block">{bundle.label}</span>
                      <span className="text-[10px] text-[#6F665F] font-mono-code block">
                        ${bundle.faceValue.toLocaleString()} face value
                      </span>
                      <span className="text-sm font-mono-code font-bold text-[#D4AF37] block mt-1">
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
              <div className="flex items-center bg-[#F9F7F2] border border-[#EAE3DC] rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#1A1414] hover:text-[#D4AF37] text-base font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center font-mono-code font-bold text-sm text-[#1A1414]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#1A1414] hover:text-[#D4AF37] text-base font-bold"
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
                    ? 'bg-[#00b67a] text-white'
                    : 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#C5A059] hover:to-[#D4AF37] text-white'
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

            <p className="text-[10px] text-[#6F665F] font-mono-code text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#00b67a]" />
              Non-legal-tender specimen prop currency, Section 22 Crimes (Currency) Act 1981 compliant
            </p>

            {/* Direct WhatsApp Studio Inquiry */}
            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-4 bg-[#F9F7F2] hover:bg-white border border-[#25D366]/40 text-[#25D366] font-mono-code font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>

          {/* Technical Specifications Table */}
          {product.details && (
            <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] space-y-3">
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                <FileCheck className="w-4 h-4" />
                <span>Production &amp; Camera Specifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code">
                {Object.entries(product.details).map(([key, val]) => (
                  <div key={key} className="p-2.5 bg-white rounded-lg border border-[#F7F4F0]">
                    <span className="text-[#6F665F] uppercase block text-[10px]">{key}</span>
                    <span className="text-[#1A1414] font-semibold block mt-0.5">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product FAQs (5 unique questions per product) */}
      {PRODUCT_FAQS[product.slug] && (
        <div className="pt-12 border-t border-[#EAE3DC]">
          <FaqSection id="product-faq-heading" heading={`Frequently Asked Questions: ${product.name}`} items={PRODUCT_FAQS[product.slug]} />
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-[#EAE3DC] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-luxury text-xl font-bold text-[#1A1414]">
              RELATED PROP SPECIMENS
            </h2>
            <Link href="/shop" className="text-xs font-mono-code text-[#D4AF37] hover:underline">
              Browse All Props →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
    </div>
  );
};
