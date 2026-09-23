// src/views/VideosPage.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Play, Film, ShoppingBag, Clock, Sparkles, CheckCircle2, X } from 'lucide-react';
import { PRODUCTS } from '../config/site.js';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  resolution: string;
  thumbnail: string;
  badge: string;
  description: string;
  productionNotes: string;
  relatedProductSlug: string;
  videoUrl?: string;
}

export const VideosContent: React.FC = () => {
  const router = useRouter();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const goToProduct = (slug: string) => {
    const prod = PRODUCTS.find((p) => p.slug === slug);
    router.push(prod ? `/shop/${prod.category}/${prod.slug}` : '/shop');
  };

  const videos: VideoItem[] = [
    {
      id: 'video-1',
      title: 'Ultra Slow-Motion Poly-Flick & Counting Test (1,000 FPS)',
      category: 'Camera Testing',
      duration: '01:45',
      resolution: '4K Ultra-HD',
      thumbnail: '/images/100-dollar-stack-1.webp',
      badge: 'High Speed Cam',
      description:
        'Close-up camera analysis of our 120gsm matte archival paper stock filmed at 1,000 frames per second on ARRI Alexa Mini LF. Demonstrates zero glare under 5600K high-key film lighting and authentic stack fanning.',
      productionNotes:
        'Tested with ARRI Master Primes 50mm T1.3. Lighting: Aputure 600d with parabolic softbox. Shows the complete absence of reflective polymer glint.',
      relatedProductSlug: '100-australian-prop-money-for-sale',
    },
    {
      id: 'video-2',
      title: 'Heist Master Vault Brick & Tamper-Evident Banding Reveal',
      category: 'Product Showcase',
      duration: '02:18',
      resolution: '4K HDR',
      thumbnail: '/images/10000-dollar-heist-brick-1.webp',
      badge: 'Director Grade',
      description:
        'Unboxing and tactile inspection of the 1,000-note vacuum-sealed $100 AUD vault brick. Features Commonwealth security-simulation strapping and heavy-density studio heft.',
      productionNotes:
        'Ideal for bank robbery scenes and cartel vaults. Weighs approximately 1.05 kg matching realistic Australian currency bulk.',
      relatedProductSlug: '100-australian-prop-money-for-sale',
    },
    {
      id: 'video-3',
      title: 'Film Director Aluminium Flight Case & $300,000 Kit Breakdown',
      category: 'Production Kits',
      duration: '03:12',
      resolution: '4K Cinema',
      thumbnail: '/images/film-director-briefcase-1.webp',
      badge: 'Turnkey Prop Kit',
      description:
        'Full walkthrough of the lockable dual-combination aluminium flight case. Contains 30 pre-strapped cinema bundles seated in custom high-density EVA shockproof foam.',
      productionNotes:
        'Includes dual key locks and numeric combination latches. Ready to place directly on set without additional art department dressing.',
      relatedProductSlug: '50-australian-prop-money-for-sale',
    },
    {
      id: 'video-4',
      title: 'Real AUD vs. Prop Money: Specimen Identification & Camera Realism',
      category: 'Legal & Specimen',
      duration: '02:40',
      resolution: '1080p Studio',
      thumbnail: '/images/50-dollar-stack-1.webp',
      badge: 'Compliance Guide',
      description:
        'Educational side-by-side comparison illustrating why our prop notes look hyper-realistic through camera viewfinders while strictly adhering to Commonwealth specimen markings.',
      productionNotes:
        'Clearly shows the enlarged non-reflective SPECIMEN text, distinct micro-signatures, and absence of holographic diffraction foils.',
      relatedProductSlug: '50-australian-prop-money-for-sale',
    },
    {
      id: 'video-5',
      title: 'Studio Distressing & Film Aging Tutorial (Art Dept Special)',
      category: 'Behind The Scenes',
      duration: '04:05',
      resolution: '4K Cinema',
      thumbnail: '/images/weathered-street-bundle-1.webp',
      badge: 'Art Department',
      description:
        'Melbourne prop masters demonstrate tea-staining, corner-dogearing, and hand-weathering techniques to transform crisp mint bills into gritty street-level crime cash.',
      productionNotes:
        'Techniques taught by veteran Australian art department crews for crime thrillers, street dramas, and period cinematic storytelling.',
      relatedProductSlug: '50-australian-prop-money-for-sale',
    },
    {
      id: 'video-6',
      title: 'Mixed Denomination Production Bundle In Action',
      category: 'Product Showcase',
      duration: '01:55',
      resolution: '4K Ultra-HD',
      thumbnail: '/images/mixed-denomination-bundle-1.webp',
      badge: 'Multi-Denom',
      description:
        'Dynamic handling of mixed $5, $10, $20, $50, and $100 Australian prop notes. Highlights the precise proportional sizing step-downs across all denominations.',
      productionNotes:
        'Each note strictly reflects Australian note dimensional scaling (from $5 small note to $100 wide format) for believable camera presence.',
      relatedProductSlug: '5-australian-prop-money-for-sale',
    },
  ];

  const categories = ['All', 'Camera Testing', 'Product Showcase', 'Production Kits', 'Legal & Specimen', 'Behind The Scenes'];

  const filteredVideos =
    activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C0D12] border border-[#D4AF37]/50 shadow-md">
          <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#FFD77D]">
            Official Video Showcase
          </span>
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-[#F8F6F0] tracking-tight">
          CINEMA PROP VIDEOS &amp; CAMERA TESTS
        </h1>

        <p className="text-sm sm:text-base text-[#D1C7CA] leading-relaxed">
          High-definition video demonstrations of Australian prop currency in motion. Watch 4K slow-motion note fanning, studio lighting response, bank brick unboxings, and art department aging tests.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#38242A] pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'white-gold-btn text-white shadow-lg border border-[#D4AF37]/50'
                : 'bg-[#151518] text-[#A8A49D] hover:text-[#FFF] hover:bg-[#1E1E24] border border-[#2C2822]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Video Highlight Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#17171A] via-[#101012] to-[#0A0A0C] border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 relative aspect-video rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#2C2822] group shadow-inner">
          <img
            src="/images/100-dollar-stack-1.webp"
            alt="Australian Prop Money 4K Camera Test Video"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <button
            type="button"
            onClick={() => setSelectedVideo(videos[0])}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            aria-label="Play Ultra Slow-Motion Poly-Flick Video"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border-2 border-white">
              <Play className="w-7 h-7 fill-black translate-x-0.5" />
            </div>
          </button>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-white">
            <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/20">
              4K ULTRA-HD · 1,000 FPS
            </span>
            <span className="px-2 py-0.5 rounded bg-[#00b67a] font-bold">01:45</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#24131A] border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Featured Spotlight Video</span>
          </div>

          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F6F0]">
            Ultra Slow-Motion Poly-Flick &amp; Counting Test (1,000 FPS)
          </h2>

          <p className="text-xs sm:text-sm text-[#D1C7CA] leading-relaxed">
            Filmed on an ARRI Alexa Mini LF cinema sensor with 50mm Master Prime optics. Watch how our specialized 120gsm matte finish absorbs studio light completely, preventing lens flare while fanning like freshly strapped Reserve Bank currency.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setSelectedVideo(videos[0])}
              className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E5C378] hover:to-[#D4AF37] text-[#120A0D] font-bold text-xs uppercase tracking-wider rounded-xl transition-transform active:scale-98 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Play className="w-4 h-4 fill-[#120A0D]" />
              <span>Watch Video</span>
            </button>

            <button
              type="button"
              onClick={() => router.push('/shop/new-notes')}
              className="px-5 py-3 bg-[#1C1014] hover:bg-[#2B181F] text-[#F8F6F0] font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#38242A] hover:border-[#D4AF37] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Shop $100 Stacks</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((item) => (
          <div
            key={item.id}
            className="luxury-card rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-[#38242A] hover:border-[#D4AF37]/80 transition-all bg-[#140C0F]"
            onClick={() => setSelectedVideo(item)}
          >
            <div className="relative aspect-video overflow-hidden bg-[#0A0507]">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#00b67a] text-white font-mono-code text-[10px] font-bold shadow-md">
                {item.badge}
              </div>

              <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/20 text-white font-mono-code text-[10px] font-bold">
                {item.resolution}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-all border border-white">
                  <Play className="w-5 h-5 fill-black translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/70 text-white font-mono-code text-[10px]">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                <span>{item.duration}</span>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#D4AF37] block">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11.5px] text-[#A8A49D] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2C2822] flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#D4AF37] flex items-center gap-1">
                  <span>Watch Video</span>
                  <Play className="w-3 h-3 fill-[#D4AF37]" />
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToProduct(item.relatedProductSlug);
                  }}
                  className="px-2.5 py-1 rounded bg-[#1A1A1E] hover:bg-[#25252B] text-white border border-[#2C2822] text-[10.5px] font-mono-code transition-colors cursor-pointer"
                >
                  View Prop Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#141417] border-2 border-[#D4AF37] rounded-2xl overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#1A1A1E] border-b border-[#2C2822] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#00b67a] text-white font-mono-code text-[10px] font-bold uppercase">
                  {selectedVideo.resolution}
                </span>
                <span className="text-xs font-mono-code text-[#D4AF37] font-semibold">
                  {selectedVideo.category} · {selectedVideo.duration}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-[#A8A49D] hover:text-white hover:bg-[#25252A] transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 filter blur-sm"
              />
              <div className="relative z-10 space-y-4 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black mx-auto flex items-center justify-center shadow-2xl border-2 border-white animate-pulse">
                  <Play className="w-8 h-8 fill-black translate-x-0.5" />
                </div>
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
                  {selectedVideo.title}
                </h3>
                <p className="text-xs text-[#D1C7CA] font-mono-code">
                  Studio Demonstration · 4K Cinema Stream Ready
                </p>
                <div className="p-3 rounded-lg bg-black/70 border border-[#D4AF37]/40 text-left text-xs text-[#FFD77D] font-mono-code space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#00b67a]" />
                    <span>PRODUCTION CAMERA SPECIFICATIONS:</span>
                  </div>
                  <p>{selectedVideo.productionNotes}</p>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-serif-luxury text-base font-bold text-[#F8F6F0]">
                    {selectedVideo.title}
                  </h4>
                  <p className="text-xs text-[#A69C9F] max-w-2xl leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    goToProduct(selectedVideo.relatedProductSlug);
                    setSelectedVideo(null);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#120A0D] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow shrink-0"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order This Prop</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
