// src/pages/HomePage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Truck,
  Percent,
  ArrowRight,
  ShoppingBag,
  Building2,
  Film,
  ChevronRight,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { SITE, BRAND, PRODUCTS, CATEGORIES, FAQ } from '../config/site.js';
import { CategoryPhoto } from '../components/CategoryPhoto.js';
import { ProductPhoto } from '../components/ProductPhoto.js';
import { TrustpilotReviewsSlider } from '../components/TrustpilotReviewsSlider.js';
import { ProductionTypesMarquee } from '../components/ProductionTypesMarquee.js';
import { useApp } from '../context/AppContext.js';

export const HomeContent: React.FC = () => {
  const { addToCart } = useApp();

  // Hero slider state
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: 'PROP MONEY AUSTRALIA — CINEMA-GRADE CURRENCY FOR FILM & TV',
      subtitle:
        'Engineered specifically for television series, feature films, theatre productions, commercial visual arts, and training simulations across Australia.',
      ctaText: 'Explore Prop Catalog',
      ctaPath: '/shop',
      badge: 'Melbourne VIC 3093 Studio · Fast Express Dispatch',
    },
    {
      title: '100% LEGAL SPECIMEN PROP CURRENCY FOR PRODUCTION',
      subtitle:
        'Dual-sided ultra-high resolution print on non-reflective 120gsm archival paper with clear specimen markings ensuring seamless camera realism.',
      ctaText: 'View Legal Guidelines',
      ctaPath: '/compliance',
      badge: 'Certified Film & Stage Props',
    },
    {
      title: 'FROM A STARTER STACK TO A FULL 100-STACK VAULT',
      subtitle:
        'Every denomination is available in six bundle sizes, from a $1,500 starter stack to a $200,000 bulk vault stack, ready for filming.',
      ctaText: 'View Bundle Sizes',
      ctaPath: '/shop/new-notes',
      badge: 'Director Grade Cinema Props',
    },
    {
      title: 'BULK B2B STUDIO SUPPLY & EXPRESS NATIONWIDE DISPATCH',
      subtitle:
        'Trusted by major streaming series and Australian theatrical companies. Same-day AusPost Express dispatch before 2PM.',
      ctaText: 'Wholesale Studio Rates',
      ctaPath: '/wholesale',
      badge: 'Wholesale B2B Studio Supply',
    },
  ];

  // Real product photography — specimen-marked in-browser via the overlay
  // band below (never remove that overlay; it's the mandatory Crimes
  // (Currency) Act 1981 s22 specimen marking for these images).
  const heroImages = ['/images/hero/hero-1.jpg', '/images/hero/hero-2.jpg', '/images/hero/hero-3.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Always feature the flagged products, plus at least one product from every
  // other category so every category gets homepage-level product exposure,
  // not just the flagged "new-notes" denominations.
  const flaggedFeatured = PRODUCTS.filter((p) => p.featured);
  const representedCategories = new Set(flaggedFeatured.map((p) => p.category));
  const categoryFillIns = CATEGORIES.filter((c) => !representedCategories.has(c.slug))
    .map((c) => PRODUCTS.find((p) => p.category === c.slug))
    .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p));
  const featuredProducts = [...flaggedFeatured, ...categoryFillIns];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* SECTION 1: HERO VIEWPORT - AUSTRALIAN PROP MONEY GOLD & WHITE LUXURY THEME */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden border-b border-[#2C2822] bg-[#0D0D0E] px-4 py-14 sm:py-20">
        {/* Photo background layer — crossfades with heroSlide */}
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: idx === heroSlide % heroImages.length ? 1 : 0 }}
            aria-hidden={idx !== heroSlide % heroImages.length}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Light scrim — just enough for text legibility, photos stay bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708]/45 via-[#0A0A0B]/32 to-[#070708]/55" />

        {/* Gold & Pure Light Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[320px] bg-[#D4AF37]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[300px] bg-white/10 rounded-full blur-[130px] pointer-events-none" />

        {/* MANDATORY Crimes (Currency) Act 1981 s22 specimen marking.
            Do not remove: these hero photos are real currency photography
            and are only permitted on this site with this overlay present.
            Kept small/corner so it stays out of the way of the photo. */}
        <div className="absolute bottom-4 left-4 z-[5] px-2.5 py-1 rounded-lg bg-black/75 border border-[#D4AF37]/70 pointer-events-none">
          <p
            className="text-[#F5E5B8] font-bold tracking-[0.2em] text-[10px] sm:text-xs"
            style={{ fontVariant: 'small-caps' }}
          >
            Specimen
          </p>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.65)' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181611] border border-[#D4AF37]/70 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[11px] font-mono-code font-bold tracking-widest uppercase text-[#F5E5B8]">
              {heroSlides[heroSlide].badge}
            </span>
          </div>

          {/* Heading - EXACTLY ONE H1, statically rendered on slide 0 */}
          <h1
            className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            aria-live="polite"
          >
            {heroSlide === 0 ? heroSlides[0].title : heroSlides[heroSlide].title}
          </h1>

          {/* Brand Entity Statement */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-[#D4D0C8] leading-relaxed font-normal">
            {heroSlides[heroSlide].subtitle}
          </p>

          {/* Action CTAs in Gold & White */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <Link
              href={heroSlides[heroSlide].ctaPath}
              className="w-full sm:w-auto px-7 py-3.5 white-gold-btn font-serif-luxury font-black text-xs tracking-wider uppercase rounded-xl shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2 border border-[#D4AF37]/50"
            >
              <span>{heroSlides[heroSlide].ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              href="/shop"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-[#0A0A0B] font-serif-luxury font-bold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg border border-[#FFE799]"
            >
              <span>View Best Sellers</span>
              <Zap className="w-4 h-4 text-[#0A0A0B]" />
            </Link>

            <Link
              href="/wholesale"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#141416] hover:bg-[#1E1E22] border border-[#2C2822] hover:border-white text-white font-serif-luxury font-bold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Studio B2B</span>
              <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
            </Link>
          </div>

          {/* Quick Category Jump Chips (Gold & White Style) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: '$100 Notes', path: '/shop/new-notes/100-australian-prop-money-for-sale', badge: 'Hot' },
              { label: '$50 Notes', path: '/shop/new-notes/50-australian-prop-money-for-sale', badge: 'Popular' },
              { label: '$20 Notes', path: '/shop/new-notes/20-australian-prop-money-for-sale', badge: '' },
              { label: '$10 Notes', path: '/shop/new-notes/10-australian-prop-money-for-sale', badge: '' },
              { label: '$5 Notes', path: '/shop/new-notes/5-australian-prop-money-for-sale', badge: 'New' },
              { label: 'All Bundle Sizes', path: '/shop/new-notes', badge: '' },
            ].map((chip, idx) => (
              <Link
                key={idx}
                href={chip.path}
                className="px-3 py-1.5 rounded-lg bg-[#121214] hover:bg-[#1C1B1F] border border-[#2C2822] hover:border-[#D4AF37] text-[#EDEBE6] hover:text-white text-xs font-mono-code transition-all flex items-center gap-1.5 shadow-sm group"
              >
                <span>{chip.label}</span>
                {chip.badge && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-[#D4AF37] text-[#0A0A0B] font-bold">
                    {chip.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setHeroSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  heroSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-[#38242A] hover:bg-[#5C3B44]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-PILLAR TRUST BAR (GOLD & WHITE LUXURY TILES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#161517] to-[#0F0E10] border border-[#2C2822] hover:border-[#D4AF37] transition-all flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[#1F1E22] border border-[#00b67a]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#00E599]" />
            </div>
            <div>
              <p className="font-serif-luxury font-bold text-xs uppercase tracking-wider text-white">
                100% Legal Specimen Props
              </p>
              <p className="text-[11px] text-[#A8A49D] mt-0.5">
                Clearly marked cinema specimen for film & stage.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#161517] to-[#0F0E10] border border-[#2C2822] hover:border-[#D4AF37] transition-all flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[#1F1E22] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Truck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-serif-luxury font-bold text-xs uppercase tracking-wider text-white">
                AusPost Express Dispatch
              </p>
              <p className="text-[11px] text-[#A8A49D] mt-0.5">
                Same-day dispatch before 2PM with tracking.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#161517] to-[#0F0E10] border border-[#2C2822] hover:border-[#D4AF37] transition-all flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[#1F1E22] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Percent className="w-5 h-5 text-[#F5E5B8]" />
            </div>
            <div>
              <p className="font-serif-luxury font-bold text-xs uppercase tracking-wider text-white">
                10% Crypto Discount
              </p>
              <p className="text-[11px] text-[#A8A49D] mt-0.5">
                Instant 10% deduction on Bitcoin & USDT.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-[#161517] to-[#0F0E10] border border-[#2C2822] hover:border-[#D4AF37] transition-all flex items-center gap-3.5 shadow-md">
            <div className="w-10 h-10 rounded-lg bg-[#1F1E22] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 text-[#D4AF37]">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-serif-luxury font-bold text-xs uppercase tracking-wider text-white">
                Melbourne VIC Studio
              </p>
              <p className="text-[11px] text-[#A8A49D] mt-0.5">
                Supplying Australia's top film & TV productions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CATEGORY SHOWCASE (COMPACT UNIFORM TILES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-[#38242A] pb-3">
          <div>
            <span className="text-[10.5px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              Cinema & Television Catalog
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F6F0]">
              EXPLORE PROP CURRENCY CATEGORIES
            </h2>
          </div>
          <Link href="/shop" className="text-xs font-mono-code font-bold text-[#D4AF37] hover:underline flex items-center gap-1">
            <span>View All Categories</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="luxury-card rounded-xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Product Frame standard 4:3 */}
              <div className="relative overflow-hidden">
                <CategoryPhoto src={cat.image} alt={cat.name} />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#00b67a] text-white font-mono-code text-[9.5px] font-bold shadow-md">
                  CINEMA GRADE
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif-luxury text-sm font-bold text-[#F8F6F0] group-hover:text-[#D4AF37] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11.5px] text-[#A69C9F] leading-relaxed line-clamp-2 mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#2C2822] flex items-center justify-between text-xs font-mono-code text-[#D4AF37]">
                  <span>Explore Props</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURED & BEST SELLING PROPS (COMPACT & UNIFORM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-[#2C2822] pb-3">
          <div>
            <span className="text-[10.5px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              Best Selling Studio Props
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              FEATURED PRODUCTION PACKS
            </h2>
          </div>
          <p className="text-[11px] text-[#A8A49D] font-mono-code max-w-xs text-left sm:text-right">
            Pre-strapped and vacuum-sealed for camera-ready realism.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProducts.map((product) => (
            <div key={product.slug} className="luxury-card rounded-xl overflow-hidden flex flex-col justify-between">
              <Link href={`/shop/${product.category}/${product.slug}`} className="relative block">
                <ProductPhoto src={product.images[0]} alt={product.name} badge={product.badge} />
              </Link>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <Link href={`/shop/${product.category}/${product.slug}`} className="space-y-1 block">
                  <h3 className="font-serif-luxury text-sm font-bold text-white hover:text-[#D4AF37] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-[#A8A49D] leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </Link>

                <div className="pt-2.5 border-t border-[#2C2822] space-y-2.5">
                  <div className="flex items-center justify-between font-mono-code">
                    <div>
                      <span className="text-sm font-bold text-[#D4AF37]">
                        From ${product.price} AUD
                      </span>
                      <span className="text-[9.5px] text-[#F5E5B8] block font-semibold">
                        Crypto: ${(product.price * 0.9).toFixed(0)} AUD (-10%)
                      </span>
                    </div>
                    <span className="text-[9.5px] text-[#00E599] font-bold bg-[#00b67a]/15 px-2 py-0.5 rounded border border-[#00b67a]/40">
                      DISPATCH 24H
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/shop/${product.category}/${product.slug}`}
                      className="py-2 px-2.5 bg-[#17161A] hover:bg-[#222126] text-white text-xs font-semibold rounded-lg border border-[#2C2822] hover:border-white transition-colors text-center"
                    >
                      Specs
                    </Link>

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="py-2 px-2.5 white-gold-btn font-bold text-xs uppercase tracking-wider rounded-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer shadow border border-[#D4AF37]/40"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: TRUSTPILOT VERIFIED STUDIO REVIEWS & REVOLUTIONARY SLIDER */}
      <div id="reviews-section">
        <TrustpilotReviewsSlider />
      </div>

      {/* SECTION 5: "ABOUT PROPPS PTY LTD" AUTHORITY LAYER (12 SIGNALS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#170E12] via-[#10080B] to-[#0A0507] border border-[#38242A] shadow-2xl relative overflow-hidden space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono-code font-bold tracking-widest text-[#D4AF37] uppercase block">
              Authority, Origin &amp; Compliance Standards
            </span>
            <h2 className="font-serif-luxury text-xl sm:text-3xl font-bold text-[#F8F6F0] leading-tight">
              ENGINEERED IN MELBOURNE FOR AUSTRALIAN CINEMA &amp; TELEVISION
            </h2>
            <p className="text-xs sm:text-sm text-[#D1C7CA] leading-relaxed">
              Founded in {BRAND.foundingYear} in {BRAND.foundingLocation}, <strong className="text-white">{SITE.name}</strong> operates as Australia's dedicated production prop currency manufacturing laboratory. We serve cinema directors, art departments, theatrical companies, and commercial studios with compliant, camera-ready reproduction currency.
            </p>
          </div>

          {/* 4 Core Differentiation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {BRAND.differentiation.map((diff, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#140C0F] border border-[#2B181E] space-y-2">
                <div className="w-7 h-7 rounded-lg bg-[#24131A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] text-xs font-bold font-mono-code">
                  0{idx + 1}
                </div>
                <p className="text-[11.5px] text-[#E8ECE9] leading-relaxed font-medium">
                  {diff}
                </p>
              </div>
            ))}
          </div>

          {/* Scale & Footprint Metrics */}
          <div className="pt-5 border-t border-[#29171D] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#D4AF37] block">500+</span>
              <span className="text-[10px] text-[#A69C9F] uppercase tracking-wider font-mono-code mt-0.5 block">
                Australian Productions Supplied
              </span>
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#00b67a] block">100%</span>
              <span className="text-[10px] text-[#A69C9F] uppercase tracking-wider font-mono-code mt-0.5 block">
                Legal Specimen Compliance
              </span>
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#D4AF37] block">24hr</span>
              <span className="text-[10px] text-[#A69C9F] uppercase tracking-wider font-mono-code mt-0.5 block">
                Express Melbourne Dispatch
              </span>
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-white block">VIC 3093</span>
              <span className="text-[10px] text-[#A8A49D] uppercase tracking-wider font-mono-code mt-0.5 block">
                Australian Studio HQ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION (COMPACT) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1.5">
          <span className="text-xs font-mono-code font-bold tracking-widest text-[#D4AF37] uppercase block">
            Common Inquiries
          </span>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs text-[#A8A49D]">
            Direct answers regarding legal compliance, ordering thresholds, and studio dispatch.
          </p>
        </div>

        <div className="space-y-2.5">
          {FAQ.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="rounded-xl bg-[#141417] border border-[#2C2822] overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-xs sm:text-sm text-white">{item.question}</span>
                  <span className="w-5 h-5 rounded-full bg-[#201F1A] flex items-center justify-center text-[#D4AF37] text-xs font-bold shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#C4C0B8] leading-relaxed border-t border-[#2C2822] animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: DIRECT DISPATCH DESK / WHATSAPP BANNER (GOLD & WHITE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17171A] via-[#101012] to-[#0A0A0C] border-2 border-[#D4AF37]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-block px-2 py-0.5 rounded bg-[#00b67a] text-white font-mono-code text-[9.5px] font-bold tracking-wider uppercase mb-1">
              FAST SAME-DAY DISPATCH
            </div>
            <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#F8F6F0]">
              NEED CUSTOM SERIALS OR BULK FILM PACKS?
            </h3>
            <p className="text-xs text-[#D1C7CA] max-w-xl">
              Connect directly with our Melbourne prop dispatch desk for tailored studio quotes, custom weathered props, or same-day courier dispatch across Australia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-3 bg-[#1E1116] hover:bg-[#2C1820] text-white font-serif-luxury font-bold text-xs uppercase tracking-wider rounded-xl border border-[#38242A] hover:border-[#D4AF37] transition-colors"
            >
              Contact Dispatch Desk
            </Link>

            <a
              href="https://wa.me/61420128746?text=Hello%20PROPPS%20PTY%20LTD,%20inquiring%20about%20film%20prop%20currency%20dispatch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7569] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 font-mono-code"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRODUCTION TYPES MARQUEE */}
      <ProductionTypesMarquee />
    </div>
  );
};
