// src/components/ProductionTypesMarquee.tsx
// Auto-scrolling strip signalling broad industry fit, without naming or
// implying endorsement from any real network/studio/streaming platform.
import React from 'react';

const PRODUCTION_TYPES = [
  'Streaming Series',
  'Feature Film',
  'Television Drama',
  'Commercial Production',
  'Music Video',
  'Theatre & Stage',
  'Documentary',
  'Photography',
];

export const ProductionTypesMarquee: React.FC = () => {
  const track = [...PRODUCTION_TYPES, ...PRODUCTION_TYPES];

  return (
    <section className="border-t border-[#EAE3DC] py-10 sm:py-12 overflow-hidden bg-[#F9F7F2]">
      <div className="max-w-3xl mx-auto px-4 text-center mb-6">
        <p className="text-xs sm:text-sm text-[#6F665F] leading-relaxed">
          Crafted for content that matches the production quality and creative standards of modern streaming networks.
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex items-center gap-10 sm:gap-14 w-max">
          {track.map((type, idx) => (
            <span
              key={`${type}-${idx}`}
              className="font-serif-luxury text-base sm:text-lg font-bold uppercase tracking-widest text-[#C5A059] whitespace-nowrap"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
