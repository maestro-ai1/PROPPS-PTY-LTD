// src/components/CategoryPhoto.tsx
// Real category photography, served from /public/images/categories/.
import React from 'react';
import Image from 'next/image';

interface CategoryPhotoProps {
  src: string; // filename under /images/categories/
  alt: string;
}

export const CategoryPhoto: React.FC<CategoryPhotoProps> = ({ src, alt }) => {
  return (
    <div className="product-frame w-full relative select-none overflow-hidden">
      <Image
        src={`/images/categories/${src}`}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover"
      />

      {/* MANDATORY Crimes (Currency) Act 1981 s22 specimen marking.
          Do not remove: these are real currency photos and are only
          permitted on this site with this overlay present. */}
      <div className="absolute bottom-2 left-2 z-[5] px-2 py-1 rounded-md bg-black/75 border border-[#D4AF37]/70 pointer-events-none">
        <p
          className="text-[#F5E5B8] font-bold tracking-[0.1em] text-[7px] sm:text-[8px] leading-tight"
          style={{ fontVariant: 'small-caps' }}
        >
          Specimen · Not Legal Tender
          <br />
          For Motion Picture Use Only
        </p>
      </div>
    </div>
  );
};
