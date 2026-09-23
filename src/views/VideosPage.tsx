// src/views/VideosPage.tsx
import React from 'react';

const YOUTUBE_VIDEO_ID = '5akeQV8ZNas';
const VIDEO_TITLE = 'Review Props Money Denominations: 5s, 10s, 20, 50s, 100s';

export const VideosContent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-4">
      <h1 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F8F6F0]">
        {VIDEO_TITLE}
      </h1>

      <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#2C3E36] shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
          title={VIDEO_TITLE}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};
