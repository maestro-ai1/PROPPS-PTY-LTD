// src/components/ProductPhoto.tsx
// Real product photography, served from /public/images/products/.
import React from 'react';
import Image from 'next/image';

interface ProductPhotoProps {
  src: string; // filename under /images/products/
  alt: string;
  badge?: string;
  priority?: boolean;
}

export const ProductPhoto: React.FC<ProductPhotoProps> = ({ src, alt, badge, priority }) => {
  return (
    <div className="product-frame w-full relative select-none overflow-hidden">
      <Image
        src={`/images/products/${src}`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover"
      />

      {/* MANDATORY Crimes (Currency) Act 1981 s22 specimen marking.
          Do not remove: this is real prop photography and is only
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

      {badge && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#C5A059] text-[#0D1512] font-bold text-[9px] tracking-wider uppercase rounded shadow font-mono-code z-30">
          {badge}
        </div>
      )}
    </div>
  );
};
