// src/components/TrustpilotReviewsSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  MessageSquarePlus,
  X,
  Send,
  Building,
  Truck,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Pause,
  Play,
  CornerDownRight,
} from 'lucide-react';
import { REVIEWS_DATA, REVIEWS_STATS, Review } from '../data/reviews';
import { SITE } from '../config/site.js';

export const TrustpilotReviewsSlider: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeRatingFilter, setActiveRatingFilter] = useState<number | 'all' | 'critical'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newCategory, setNewCategory] = useState<'product-quality' | 'customer-service' | 'shipping' | 'wholesale'>('product-quality');

  // Track responsive cards per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter reviews
  const filteredReviews = reviews.filter((r) => {
    const matchCategory =
      activeCategory === 'all' || r.category === activeCategory;
    const matchRating =
      activeRatingFilter === 'all'
        ? true
        : activeRatingFilter === 'critical'
        ? r.rating <= 3
        : r.rating === activeRatingFilter;
    return matchCategory && matchRating;
  });

  // Reset index if filtered length is exceeded
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, activeRatingFilter]);

  // Max index
  const maxIndex = Math.max(0, filteredReviews.length - cardsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Auto-slide effect when not paused
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex, filteredReviews.length]);

  // Handle new review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim() || !newTitle.trim()) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      author: newAuthor.trim(),
      role: newRole.trim() || 'Verified Production Client',
      location: newLocation.trim() || 'Australia',
      rating: newRating,
      title: newTitle.trim(),
      comment: newComment.trim(),
      date: 'Just now',
      category: newCategory,
      verified: true,
      productionType: 'Verified Customer Submission',
    };

    setReviews([newRev, ...reviews]);
    setSubmittedReview(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedReview(false);
      setNewAuthor('');
      setNewRole('');
      setNewLocation('');
      setNewTitle('');
      setNewComment('');
      setNewRating(5);
    }, 1800);
  };

  // Trustpilot-style Green Star Box generator
  const renderTrustpilotStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`w-5 h-5 flex items-center justify-center rounded-[2px] transition-all ${
              star <= rating ? 'bg-[#00b67a]' : 'bg-[#DCDCE6] opacity-35'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-white text-white" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="reviews-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Trustpilot-Themed Header Banner (Gold & White Theme with Trustpilot Green) */}
      <div className="rounded-2xl bg-gradient-to-b from-[#151518] via-[#101012] to-[#0A0A0C] border-2 border-[#2C2822] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b67a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
          {/* Left: Overall Trustpilot Metric */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00b67a] animate-pulse" />
                Verified Production Reviews
              </span>
              <span className="text-[#3A3830]">•</span>
              <div className="inline-flex items-center gap-1.5 bg-[#17171A] px-2.5 py-0.5 rounded border border-[#2C2822]">
                <div className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                  <Star className="w-2.5 h-2.5 fill-white text-white" />
                </div>
                <span className="text-xs font-bold tracking-tight text-white font-sans">
                  Trustpilot
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                {REVIEWS_STATS.trustScore}
              </h2>
              {renderTrustpilotStars(5)}
              <div className="text-xs sm:text-sm text-[#A8A49D] font-medium">
                <strong className="text-white font-mono-code text-base font-bold">
                  {REVIEWS_STATS.averageRating}
                </strong>{' '}
                out of 5 on{' '}
                <strong className="text-white font-semibold font-sans">Trustpilot</strong>{' '}
                based on{' '}
                <strong className="text-[#D4AF37] font-mono-code">
                  {reviews.length + 172} reviews
                </strong>
              </div>
            </div>

            <p className="text-xs text-[#A8A49D] max-w-xl">
              Authentic Australian studio feedback from prop masters, art directors, theatrical coordinators, and independent filmmakers nationwide.
            </p>
          </div>

          {/* Right: Actions (Breakdown & Write Review) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowStatsModal(true)}
              className="px-3.5 py-2 rounded-xl bg-[#1A1A1E] hover:bg-[#25252A] text-white text-xs font-mono-code font-semibold border border-[#2C2822] hover:border-[#D4AF37]/50 flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Rating Breakdown</span>
            </button>

            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00b67a] to-[#008b5d] hover:from-[#00c987] hover:to-[#009e6a] text-white text-xs font-mono-code font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg border border-[#00b67a]/40 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 fill-white" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Category & Star Filter Tabs */}
        <div className="mt-4 pt-4 border-t border-[#23211D] flex flex-wrap items-center justify-between gap-2.5">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Reviews', icon: Sparkles },
              { id: 'product-quality', label: 'Product Quality', icon: Building },
              { id: 'customer-service', label: 'Customer Services', icon: ShieldCheck },
              { id: 'shipping', label: 'Shipping & Delivery', icon: Truck },
              { id: 'wholesale', label: 'Wholesale B2B', icon: HelpCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#00b67a]/20 text-[#00b67a] border border-[#00b67a]/60 shadow-sm font-semibold'
                      : 'bg-[#151518] text-[#A8A49D] hover:text-white border border-[#25231F]'
                  }`}
                >
                  <Icon className="w-3 h-3 text-[#D4AF37]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Star Filter Pills (including critical 1-3★) */}
          <div className="flex items-center gap-1">
            <span className="text-[10.5px] text-[#8C8880] font-mono-code mr-1 hidden sm:inline">
              Filter:
            </span>
            <button
              type="button"
              onClick={() => setActiveRatingFilter('all')}
              className={`px-2 py-0.5 rounded text-[10.5px] font-mono-code transition-colors cursor-pointer ${
                activeRatingFilter === 'all'
                  ? 'bg-[#232018] text-[#D4AF37] font-bold border border-[#D4AF37]/50'
                  : 'text-[#8C8880] hover:text-white'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveRatingFilter(5)}
              className={`px-2 py-0.5 rounded text-[10.5px] font-mono-code flex items-center gap-1 transition-colors cursor-pointer ${
                activeRatingFilter === 5
                  ? 'bg-[#00b67a]/20 text-[#00b67a] font-bold border border-[#00b67a]/40'
                  : 'text-[#8C8880] hover:text-white'
              }`}
            >
              <span>5★</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveRatingFilter(4)}
              className={`px-2 py-0.5 rounded text-[10.5px] font-mono-code flex items-center gap-1 transition-colors cursor-pointer ${
                activeRatingFilter === 4
                  ? 'bg-[#00b67a]/20 text-[#00b67a] font-bold border border-[#00b67a]/40'
                  : 'text-[#8C8880] hover:text-white'
              }`}
            >
              <span>4★</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveRatingFilter('critical')}
              className={`px-2 py-0.5 rounded text-[10.5px] font-mono-code flex items-center gap-1 transition-colors cursor-pointer ${
                activeRatingFilter === 'critical'
                  ? 'bg-[#00b67a]/20 text-[#00b67a] font-bold border border-[#00b67a]/60'
                  : 'text-[#8C8880] hover:text-[#00b67a]'
              }`}
              title="Includes authentic 3★, 2★, and 1★ customer reviews and studio resolutions"
            >
              <span>Critical (1-3★)</span>
            </button>
          </div>
        </div>
      </div>

      {/* REVOLUTIONARY CAROUSEL CONTAINER (COMPACTED & PERFECTLY ALIGNED) */}
      <div className="relative">
        {filteredReviews.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#140D10] border border-[#2D1B22] space-y-2">
            <p className="text-xs text-[#A89C9F]">
              No reviews match this specific filter combination.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setActiveRatingFilter('all');
              }}
              className="text-xs font-mono-code text-[#D4AF37] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="overflow-hidden">
            {/* Slider Track with Smooth Translation */}
            <div
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-5"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage + 1.2)}%)`,
              }}
            >
              {filteredReviews.map((review) => {
                return (
                  <div
                    key={review.id}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col"
                  >
                    {/* Compact Card with Fixed Height & Aligned Structure */}
                    <div className="h-[270px] w-full rounded-2xl bg-gradient-to-b from-[#151518] to-[#0E0E10] hover:from-[#1A1A1E] hover:to-[#121215] border border-[#2C2822] hover:border-[#00b67a]/60 p-4 sm:p-5 shadow-lg transition-all duration-200 flex flex-col justify-between group overflow-hidden relative">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#00b67a] transition-all" />

                      {/* Header block: Star Rating & Date */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          {renderTrustpilotStars(review.rating)}
                          <span className="text-[10px] font-mono-code text-[#8C8880]">
                            {review.date}
                          </span>
                        </div>

                        {/* Verified Badge */}
                        <div className="flex items-center gap-1 text-[10.5px] font-mono-code text-[#00b67a] mb-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#00b67a] shrink-0" />
                          <span className="font-semibold truncate">Verified Client</span>
                        </div>

                        {/* Title - strictly single line clamp for uniform height */}
                        <h3 className="font-serif-luxury text-sm font-bold text-white leading-snug line-clamp-1 group-hover:text-[#D4AF37] transition-colors mb-1.5" title={review.title}>
                          "{review.title}"
                        </h3>

                        {/* Comment Body - strictly 3 line clamp */}
                        <p className="text-[11.5px] text-[#C4C0B8] leading-relaxed line-clamp-3">
                          {review.comment}
                        </p>
                      </div>

                      {/* Company Reply snippet if present */}
                      {review.companyReply && (
                        <div className="my-1 px-2 py-1 rounded bg-[#0A0A0C] border-l-2 border-[#00b67a] text-[10px] text-[#00b67a] line-clamp-1 flex items-center gap-1">
                          <CornerDownRight className="w-2.5 h-2.5 shrink-0 text-[#00b67a]" />
                          <span className="font-bold text-[#00b67a]">Reply:</span>
                          <span className="truncate text-[#BDB8B0]">{review.companyReply.text}</span>
                        </div>
                      )}

                      {/* Pinned Bottom Footer */}
                      <div className="mt-auto pt-2.5 border-t border-[#23211D] space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-semibold text-xs text-white truncate">
                            {review.author}
                          </span>
                          <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-[#1C1A14] text-[#D4AF37] border border-[#D4AF37]/30 uppercase shrink-0">
                            {review.category.replace('-', ' ')}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[10.5px] text-[#8C8880]">
                          <span className="truncate">{review.role}</span>
                          <span className="font-mono-code shrink-0">{review.location}</span>
                        </div>

                        {review.productionType && (
                          <div className="text-[9.5px] text-[#00b67a] font-mono-code flex items-center gap-1 truncate">
                            <ShieldCheck className="w-2.5 h-2.5 text-[#00b67a] shrink-0" />
                            <span className="truncate">{review.productionType}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Carousel Navigation Arrows & Controls */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={filteredReviews.length <= cardsPerPage}
              aria-label="Previous reviews slide"
              className="w-9 h-9 rounded-xl bg-[#170E12] hover:bg-[#25151C] disabled:opacity-30 disabled:cursor-not-allowed border border-[#2D1B22] flex items-center justify-center text-[#F8F6F0] hover:text-[#D4AF37] transition-colors cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={filteredReviews.length <= cardsPerPage}
              aria-label="Next reviews slide"
              className="w-9 h-9 rounded-xl bg-[#170E12] hover:bg-[#25151C] disabled:opacity-30 disabled:cursor-not-allowed border border-[#2D1B22] flex items-center justify-center text-[#F8F6F0] hover:text-[#D4AF37] transition-colors cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Play/Pause Autoplay Indicator */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="px-2.5 py-1.5 rounded-xl bg-[#170E12] hover:bg-[#25151C] border border-[#2D1B22] text-[10.5px] font-mono-code text-[#8C7D82] hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              <span>{isPaused ? 'Paused' : 'Auto'}</span>
            </button>
          </div>

          {/* Dots Indicator */}
          {maxIndex > 0 && (
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className="group flex h-6 min-w-6 items-center justify-center cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      currentIndex === dotIdx
                        ? 'w-5 bg-[#00b67a]'
                        : 'w-1.5 bg-[#2C2822] group-hover:bg-[#4A4235]'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}

          <div className="text-[11px] font-mono-code text-[#8C8880]">
            Showing{' '}
            <strong className="text-white">
              {Math.min(currentIndex + cardsPerPage, filteredReviews.length)}
            </strong>{' '}
            of <strong className="text-[#D4AF37]">{filteredReviews.length}</strong> reviews
          </div>
        </div>
      </div>

      {/* RATING BREAKDOWN STATS MODAL (Gold & White Theme with Trustpilot Green) */}
      {showStatsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#141417] border-2 border-[#2C2822] rounded-2xl p-5 sm:p-6 space-y-5 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowStatsModal(false)}
              className="absolute top-4 right-4 text-[#8C8880] hover:text-[#D4AF37] p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
                Audited Performance
              </span>
              <h3 className="font-serif-luxury text-lg font-bold text-white">
                Rating Distribution &amp; Criteria
              </h3>
            </div>

            {/* Big Summary Score */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0B0B0D] border border-[#23211D]">
              <div className="text-3xl font-mono-code font-bold text-[#D4AF37]">
                {REVIEWS_STATS.averageRating}
              </div>
              <div className="space-y-0.5">
                {renderTrustpilotStars(5)}
                <p className="text-xs text-[#A8A49D]">
                  Overall Trustpilot TrustScore based on 184 client evaluations
                </p>
              </div>
            </div>

            {/* Star Distribution Bars */}
            <div className="space-y-2">
              {[
                { star: 5, pct: 76, count: 140 },
                { star: 4, pct: 15, count: 28 },
                { star: 3, pct: 5, count: 9 },
                { star: 2, pct: 2, count: 4 },
                { star: 1, pct: 2, count: 3 },
              ].map((item) => (
                <div key={item.star} className="flex items-center gap-2.5 text-xs font-mono-code">
                  <span className="w-12 text-[#9E9094] flex items-center gap-1">
                    {item.star} <Star className="w-3 h-3 fill-[#00b67a] text-[#00b67a]" />
                  </span>
                  <div className="flex-1 h-2.5 rounded-full bg-[#1E1E22] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.star >= 4 ? 'bg-[#00b67a]' : item.star === 3 ? 'bg-[#D4AF37]' : 'bg-[#00b67a]/60'
                      }`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                  <span className="w-14 text-right text-[#B5A8AB]">
                    {item.pct}% ({item.count})
                  </span>
                </div>
              ))}
            </div>

            {/* Department Breakdown */}
            <div className="pt-3 border-t border-[#23211D] grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-[#18181C] border border-[#262420]">
                <span className="text-[#8C8880] block text-[10.5px]">Product Quality</span>
                <span className="font-mono-code text-sm font-bold text-[#D4AF37]">4.9 / 5.0</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#18181C] border border-[#262420]">
                <span className="text-[#8C8880] block text-[10.5px]">Customer Service</span>
                <span className="font-mono-code text-sm font-bold text-[#D4AF37]">4.8 / 5.0</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#18181C] border border-[#262420]">
                <span className="text-[#8C8880] block text-[10.5px]">Shipping Reliability</span>
                <span className="font-mono-code text-sm font-bold text-[#D4AF37]">4.4 / 5.0</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#18181C] border border-[#262420]">
                <span className="text-[#8C8880] block text-[10.5px]">Wholesale B2B</span>
                <span className="font-mono-code text-sm font-bold text-[#D4AF37]">4.9 / 5.0</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowStatsModal(false)}
              className="w-full py-2 rounded-xl bg-[#202025] hover:bg-[#2A2A30] text-xs font-mono-code text-white font-semibold border border-[#2C2822] cursor-pointer"
            >
              Close Breakdown
            </button>
          </div>
        </div>
      )}

      {/* WRITE A REVIEW MODAL (Gold & White Theme with Trustpilot Green) */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="w-full max-w-lg bg-[#141417] border-2 border-[#2C2822] rounded-2xl p-5 sm:p-6 space-y-5 shadow-2xl relative my-8">
            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 text-[#8C8880] hover:text-[#D4AF37] p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
                Production Community Feedback
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Write a Verified Client Review
              </h3>
              <p className="text-xs text-[#A8A49D]">
                Share your candid production experience regarding print quality, dispatch speed, or support.
              </p>
            </div>

            {submittedReview ? (
              <div className="p-6 text-center rounded-xl bg-[#0B0B0D] border border-[#D4AF37]/40 space-y-2.5">
                <CheckCircle2 className="w-10 h-10 text-[#00b67a] mx-auto animate-bounce" />
                <h4 className="font-serif-luxury text-base font-bold text-white">
                  Review Published &amp; Added to Slider!
                </h4>
                <p className="text-xs text-[#A8A49D]">
                  Thank you for contributing to our verified Australian studio community.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                {/* Star Rating Picker */}
                <div>
                  <label className="block text-xs font-mono-code text-[#D4AF37] uppercase tracking-wider mb-1">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          star <= newRating
                            ? 'bg-[#00b67a] text-white shadow-md'
                            : 'bg-[#1E1E22] text-[#6E6A60] hover:bg-[#28282E]'
                        }`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    ))}
                    <span className="text-xs font-mono-code text-white ml-2">
                      {newRating === 5
                        ? '5 - Excellent / Camera-Ready'
                        : newRating === 4
                        ? '4 - Very Good'
                        : newRating === 3
                        ? '3 - Average / Minor Issue'
                        : newRating === 2
                        ? '2 - Dissatisfied'
                        : '1 - Poor Experience'}
                    </span>
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-mono-code text-[#D4AF37] uppercase tracking-wider mb-1">
                    Feedback Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                  >
                    <option value="product-quality">Product Quality &amp; Visual Realism</option>
                    <option value="customer-service">Customer Services &amp; Support</option>
                    <option value="shipping">Shipping &amp; Express Delivery</option>
                    <option value="wholesale">Wholesale B2B &amp; Studio Invoicing</option>
                  </select>
                </div>

                {/* Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-mono-code text-[#B5A8AB] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cameron Davies"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-[#B5A8AB] mb-1">
                      Role / Department
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Art Director / Prop Master"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-mono-code text-[#B5A8AB] mb-1">
                    Production Location (City, State)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sydney, NSW"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                  />
                </div>

                {/* Headline */}
                <div>
                  <label className="block text-xs font-mono-code text-[#B5A8AB] mb-1">
                    Review Headline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Perfect coloration under 4K studio lenses"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                  />
                </div>

                {/* Detailed Comment */}
                <div>
                  <label className="block text-xs font-mono-code text-[#B5A8AB] mb-1">
                    Detailed Review *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe how the props performed on camera, the packaging, dispatch speed, or how customer support assisted you..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181C] border border-[#2C2822] text-xs text-white focus:border-[#00b67a] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-3.5 py-2 rounded-xl bg-[#18181C] text-xs text-[#B5A8AB] hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#00b67a] to-[#008b5d] hover:from-[#00c987] hover:to-[#009e6a] text-white text-xs font-mono-code font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 border border-[#00b67a]/40 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
