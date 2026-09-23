// src/components/BlogPhoto.tsx
// Real currency-style photography used on blog cards/posts, served from
// /public/images/blog/.
import React from 'react';
import Image from 'next/image';

interface BlogPhotoProps {
  src: string; // filename under /images/blog/
  alt: string;
  priority?: boolean;
}

export const BlogPhoto: React.FC<BlogPhotoProps> = ({ src, alt, priority }) => {
  return (
    <div className="w-full aspect-[16/10] relative select-none overflow-hidden rounded-xl">
      <Image
        src={`/images/blog/${src}`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover"
      />

      {/* MANDATORY Crimes (Currency) Act 1981 s22 specimen marking.
          Do not remove: these are real currency-style photos and are only
          permitted on this site with this overlay present. */}
      <div className="absolute bottom-2 left-2 z-[5] px-2 py-0.5 rounded-md bg-black/75 border border-[#D4AF37]/70 pointer-events-none">
        <p
          className="text-[#F5E5B8] font-bold tracking-[0.15em] text-[8px] sm:text-[9px]"
          style={{ fontVariant: 'small-caps' }}
        >
          Specimen
        </p>
      </div>
    </div>
  );
};
