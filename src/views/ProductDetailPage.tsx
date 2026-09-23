// src/pages/ProductDetailPage.tsx
import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  Percent,
  ShoppingBag,
  MessageCircle,
  ArrowLeft,
  Check,
  FileCheck,
  Layers,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, SHOP, SITE } from '../config/site.js';
import { SmartImage } from '../components/SmartImage.js';
import { JsonLd } from '../components/JsonLd.js';
import { waLink } from '../lib/whatsapp.js';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onAddToCart: (product: (typeof PRODUCTS)[0], quantity: number) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const categoryObj = CATEGORIES.find((c) => c.slug === product.category);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const msg = `Hello ${SITE.name}, I am inquiring about ordering: ${quantity}x ${product.name} ($${product.price * quantity} AUD). Could you confirm dispatch availability to my production location?`;
    window.open(waLink('61400000000', msg), '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      <JsonLd type="product" data={product} />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono-code text-[#889690]">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="hover:text-[#C5A059] transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button
          type="button"
          onClick={() => onNavigate('/shop')}
          className="hover:text-[#C5A059] transition-colors"
        >
          Shop
        </button>
        <span>/</span>
        {categoryObj && (
          <>
            <button
              type="button"
              onClick={() => onNavigate(`/shop/${categoryObj.slug}`)}
              className="hover:text-[#C5A059] transition-colors"
            >
              {categoryObj.name}
            </button>
            <span>/</span>
          </>
        )}
        <span className="text-[#F8F6F0] truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Back button */}
      <button
        type="button"
        onClick={() => onNavigate('/shop')}
        className="inline-flex items-center gap-2 text-xs font-mono-code text-[#C5A059] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Prop Catalog</span>
      </button>

      {/* Main Product Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left Column: Photorealistic SmartImage Artwork */}
        <div className="space-y-4">
          <div className="luxury-card rounded-2xl overflow-hidden border-2 border-[#C5A059]/30">
            <SmartImage
              src={product.images[0]}
              alt={product.name}
              badge={product.badge}
            />
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

            <p className="text-sm text-[#B4C0BA] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price Box */}
          <div className="p-5 rounded-2xl bg-[#141E1A] border border-[#2C3E36] space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-mono-code text-3xl font-extrabold text-[#C5A059]">
                ${product.price} AUD
              </span>
              <span className="text-xs text-[#9AA7A0] font-mono-code">
                EXPRESS DISPATCH
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-code text-[#E5C378]">
              <Percent className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>
                Pay via Crypto &amp; save 10%: ${(product.price * 0.9).toFixed(0)} AUD
              </span>
            </div>
          </div>

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
                    <span>Add {quantity} To Cart — ${product.price * quantity} AUD</span>
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
              <span>Inquire via WhatsApp Studio Desk</span>
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
            <button
              type="button"
              onClick={() => onNavigate('/shop')}
              className="text-xs font-mono-code text-[#C5A059] hover:underline"
            >
              Browse All Props →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/shop/${rel.category}/${rel.slug}`)}
                className="luxury-card rounded-2xl overflow-hidden cursor-pointer group"
              >
                <SmartImage src={rel.images[0]} alt={rel.name} />
                <div className="p-4 space-y-1">
                  <h4 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] group-hover:text-[#E5C378] transition-colors truncate">
                    {rel.name}
                  </h4>
                  <span className="font-mono-code text-xs font-bold text-[#C5A059] block">
                    ${rel.price} AUD
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
