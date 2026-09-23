// src/components/ReviewPopup.tsx
// Bottom-left rotating popup of PROPPS' real, migrated Trustpilot
// reviews (src/data/reviews.ts). Deliberately NOT a fake purchase/
// sales-activity feed: every name, location, rating and quote shown
// here is a real review, never a fabricated transaction.
'use client';

import React, { useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews.js';

// How long a popup stays visible before it auto-dismisses.
const VISIBLE_DURATION_MS = 6000;

// Gap between one popup closing and the next one appearing.
// Set low for a quick demo; a real site should use something like
// 45_000 (45s) so reviews don't feel spammy - change this one value.
const GAP_BETWEEN_POPUPS_MS = 12000;

export const ReviewPopup: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (REVIEWS_DATA.length === 0) return;

    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        showTimer = setTimeout(() => {
          setIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
          cycle();
        }, GAP_BETWEEN_POPUPS_MS);
      }, VISIBLE_DURATION_MS);
    };

    // First popup after a short initial delay so it doesn't fire
    // the instant the page loads.
    const initialTimer = setTimeout(cycle, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (REVIEWS_DATA.length === 0) return null;
  const review = REVIEWS_DATA[index];

  return (
    <div
      className={`fixed bottom-5 left-5 z-30 w-72 sm:w-80 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="rounded-2xl bg-[#0F1714] border border-[#2C3E36] shadow-2xl p-4 flex gap-3">
        <div className="w-9 h-9 rounded-full bg-[#1C2A24] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#C5A059] font-serif-luxury font-bold text-sm">
          {review.author.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#F8F6F0] truncate">{review.author}</span>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="text-[#58645F] hover:text-white shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className="text-[10px] text-[#889690] block">{review.location}</span>

          <div className="flex items-center gap-0.5 my-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < review.rating ? 'text-[#C5A059] fill-[#C5A059]' : 'text-[#2C3E36]'}`}
              />
            ))}
          </div>

          <p className="text-[11px] text-[#B4C0BA] leading-snug line-clamp-2">"{review.title}"</p>
          <span className="text-[9px] text-[#58645F] font-mono-code block mt-1">
            {review.date} · Verified Trustpilot Review
          </span>
        </div>
      </div>
    </div>
  );
};
