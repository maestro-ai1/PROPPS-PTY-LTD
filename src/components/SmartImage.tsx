// src/components/SmartImage.tsx
// High-fidelity cinema reproduction currency artwork renderer
import React from 'react';

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  category?: string;
  badge?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  category,
  badge,
}) => {
  // Determine denomination from a leading "N-" in the filename (e.g.
  // "5-dollar-prop-note.webp") or a "$N" in the alt text, matched as a
  // whole number so "5" never accidentally matches inside "50"/"150".
  const denom = src?.match(/^(\d+)-/)?.[1] || alt.match(/\$(\d+)\b/)?.[1];

  const isFive = denom === '5';
  const isTen = denom === '10';
  const isTwenty = denom === '20';
  const isFifty = denom === '50';
  const isMixed = src?.includes('mixed') || alt.includes('Mixed');
  const isBrick = src?.includes('brick') || alt.includes('Brick');
  const isBriefcase = src?.includes('briefcase') || alt.includes('Briefcase');
  const isDuffle = src?.includes('duffle') || alt.includes('Duffle');
  const isVintage = src?.includes('vintage') || alt.includes('Vintage');
  const isDistressed = src?.includes('distressed') || alt.includes('Distressed');

  // Palette settings for Australian currency denominations
  let baseColor = '#0E3B27'; // $100 Emerald Green
  let accentColor = '#38B273';
  let bandColor = '#FFFFFF';
  let bandText = 'AUD $10,000 · 100 x $100 SPECIMEN';
  let denomText = '$100';

  if (isFifty) {
    baseColor = '#8A5D12'; // $50 Rich Gold
    accentColor = '#F2B93B';
    bandText = 'AUD $5,000 · 100 x $50 SPECIMEN';
    denomText = '$50';
  } else if (isTwenty) {
    baseColor = '#7A2218'; // $20 Deep Ochre Red
    accentColor = '#E0533C';
    bandText = 'AUD $2,000 · 100 x $20 SPECIMEN';
    denomText = '$20';
  } else if (isTen) {
    baseColor = '#1B6F8E'; // $10 Blue
    accentColor = '#3EA4C9';
    bandText = 'AUD $1,000 · 100 x $10 SPECIMEN';
    denomText = '$10';
  } else if (isFive) {
    baseColor = '#5B3E8E'; // $5 Purple
    accentColor = '#7D5FB8';
    bandText = 'AUD $500 · 100 x $5 SPECIMEN';
    denomText = '$5';
  } else if (isVintage) {
    baseColor = '#3A423D';
    accentColor = '#B8A882';
    bandText = 'HISTORIC AUSTRALIAN PAPER REPRODUCTION';
    denomText = '$100';
  }

  return (
    <div className={`product-frame w-full relative select-none overflow-hidden ${className}`}>
      {/* Background subtle studio gradient */}
      <div className="absolute inset-0 bg-radial from-[#F5F2EB] to-[#E3DDCF]" />

      {/* Grid studio surface watermark */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(#2C3E36 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Render specialized illustration based on type */}
      {isBriefcase ? (
        <div className="relative z-10 w-[84%] aspect-[4/3] flex flex-col items-center justify-center p-3">
          {/* Metallic flight case */}
          <div className="w-full h-[88%] bg-gradient-to-b from-[#D4D8D7] via-[#9EA4A2] to-[#69706E] rounded-xl p-2.5 shadow-2xl border-4 border-[#4E5452] relative flex flex-col justify-between">
            {/* Case corner protectors */}
            <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-[#3A3D3C] rounded-tl-lg border border-[#A4A9A7]" />
            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#3A3D3C] rounded-tr-lg border border-[#A4A9A7]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 bg-[#3A3D3C] rounded-bl-lg border border-[#A4A9A7]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-[#3A3D3C] rounded-br-lg border border-[#A4A9A7]" />

            {/* Interior velvet foam with arranged prop bundles */}
            <div className="w-full h-full bg-[#1A1A1A] rounded-lg p-2 flex flex-col justify-between shadow-inner border border-[#333]">
              <div className="grid grid-cols-4 gap-1.5 h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded relative flex items-center justify-center shadow-md border ${
                      i % 2 === 0
                        ? 'bg-[#14422B] border-[#2E8B57]'
                        : 'bg-[#8F6517] border-[#DAA520]'
                    }`}
                  >
                    <div className="w-[85%] h-3 bg-white/90 rounded-sm shadow-sm flex items-center justify-center">
                      <span className="text-[6px] font-bold text-black font-mono-code">
                        {i % 2 === 0 ? '$100' : '$50'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Latches */}
            <div className="absolute -top-3 left-1/4 w-7 h-4 bg-[#787E7D] rounded-t border border-[#444]" />
            <div className="absolute -top-3 right-1/4 w-7 h-4 bg-[#787E7D] rounded-t border border-[#444]" />
          </div>
          <span className="mt-1 text-[10px] font-bold tracking-wider text-[#2A342F] uppercase font-mono-code">
            ALUMINIUM HERO FLIGHT CASE · 2,000 STRAPPED NOTES
          </span>
        </div>
      ) : isDuffle ? (
        <div className="relative z-10 w-[84%] aspect-[4/3] flex flex-col items-center justify-center">
          <div className="w-[85%] h-[75%] bg-[#1E2522] rounded-3xl p-3 shadow-2xl border-2 border-[#3C4A44] relative flex flex-col justify-center items-center">
            {/* Bag straps */}
            <div className="absolute inset-y-0 left-6 w-3 bg-[#0D1210] border-x border-[#333]" />
            <div className="absolute inset-y-0 right-6 w-3 bg-[#0D1210] border-x border-[#333]" />
            {/* Zipper opened revealing cash bundles */}
            <div className="w-[80%] h-[60%] bg-[#141A17] rounded-xl border border-[#444] p-1.5 flex gap-1.5 overflow-hidden shadow-inner">
              <div className="w-1/2 h-full bg-[#14422B] rounded flex items-center justify-center shadow">
                <span className="bg-white px-2 py-0.5 text-[8px] font-bold text-black font-mono-code">$100 BRICK</span>
              </div>
              <div className="w-1/2 h-full bg-[#8F6517] rounded flex items-center justify-center shadow">
                <span className="bg-white px-2 py-0.5 text-[8px] font-bold text-black font-mono-code">$50 BRICK</span>
              </div>
            </div>
          </div>
          <span className="mt-2 text-[10px] font-bold tracking-wider text-[#2A342F] uppercase font-mono-code">
            HEIST TACTICAL LOADOUT · 30 STRAPPED BUNDLES
          </span>
        </div>
      ) : isBrick ? (
        <div className="relative z-10 w-[78%] aspect-[4/3] flex flex-col items-center justify-center">
          {/* Heavy shrink-wrapped 10-bundle brick */}
          <div className="w-[85%] h-[80%] bg-[#14422B] rounded-lg p-2.5 shadow-2xl border-2 border-[#2F855A] relative flex flex-col justify-between overflow-hidden">
            {/* Shrink-wrap gloss reflection */}
            <div className="absolute -inset-x-10 top-0 h-14 bg-gradient-to-b from-white/30 to-transparent rotate-12 pointer-events-none" />

            {/* Stack layers */}
            <div className="space-y-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-2 w-full bg-[#1B5E3C] rounded-sm border-b border-[#0C301F]" />
              ))}
            </div>

            {/* Central official tamper-evident bank label */}
            <div className="my-auto bg-[#FBF9F4] p-2 rounded border border-[#C5A059] shadow-md text-center">
              <div className="text-[9px] font-bold text-[#141E1A] tracking-wider uppercase font-serif-luxury">
                RESERVE PROP BANK OF AUSTRALIA
              </div>
              <div className="text-[11px] font-mono-code font-bold text-[#0D3B23] my-0.5">
                $100,000 AUD VAULT SIMULATION BRICK
              </div>
              <div className="text-[7px] text-[#555] font-mono-code">
                TEN 100-NOTE STRAPS · COMPLIANT SPECIMEN
              </div>
            </div>

            <div className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-2 w-full bg-[#1B5E3C] rounded-sm border-b border-[#0C301F]" />
              ))}
            </div>
          </div>
        </div>
      ) : isMixed ? (
        <div className="relative z-10 w-[84%] aspect-[4/3] flex items-center justify-center">
          {/* Fanned out mixed stack */}
          <div className="relative w-full h-[85%] flex items-center justify-center">
            {/* $5 Purple */}
            <div className="absolute w-[68%] h-[55%] -rotate-12 -translate-y-4 bg-[#5B3E8E] rounded-md shadow-lg border border-[#7D5FB8] flex items-center justify-between p-2">
              <span className="text-[10px] font-bold text-white font-mono-code">$5</span>
              <span className="text-[7px] text-white/80 font-bold tracking-widest uppercase">AUSTRALIAN PROP</span>
            </div>
            {/* $10 Cyan */}
            <div className="absolute w-[70%] h-[57%] -rotate-6 -translate-y-2 bg-[#1B6F8E] rounded-md shadow-lg border border-[#3EA4C9] flex items-center justify-between p-2">
              <span className="text-[10px] font-bold text-white font-mono-code">$10</span>
              <span className="text-[7px] text-white/80 font-bold tracking-widest uppercase">SPECIMEN NOTE</span>
            </div>
            {/* $20 Red */}
            <div className="absolute w-[72%] h-[60%] rotate-0 bg-[#8E281B] rounded-md shadow-lg border border-[#C94F3E] flex items-center justify-between p-2">
              <span className="text-[10px] font-bold text-white font-mono-code">$20</span>
              <span className="text-[7px] text-white/80 font-bold tracking-widest uppercase">NON-LEGAL TENDER</span>
            </div>
            {/* $50 Gold */}
            <div className="absolute w-[74%] h-[62%] rotate-6 translate-y-2 bg-[#9E6E14] rounded-md shadow-lg border border-[#E0A83A] flex items-center justify-between p-2">
              <span className="text-[10px] font-bold text-white font-mono-code">$50</span>
              <span className="text-[7px] text-white/80 font-bold tracking-widest uppercase">CINEMA GRADE</span>
            </div>
            {/* $100 Green (Top) */}
            <div className="absolute w-[76%] h-[64%] rotate-12 translate-y-4 bg-[#144A2F] rounded-md shadow-2xl border border-[#2EB074] flex items-center justify-between p-2.5">
              <span className="text-[12px] font-extrabold text-[#98FF98] font-mono-code">$100</span>
              <div className="text-center">
                <span className="text-[8px] font-bold text-white tracking-widest uppercase block font-serif-luxury">
                  PROPPS PTY LTD
                </span>
                <span className="text-[6.5px] text-[#A5E3C7] font-mono-code block">
                  ALL 5 DENOMINATIONS PACK
                </span>
              </div>
              <span className="text-[12px] font-extrabold text-[#98FF98] font-mono-code">$100</span>
            </div>
          </div>
        </div>
      ) : (
        /* Standard 100-note strapped banknote bundle */
        <div className="relative z-10 w-[84%] aspect-[4/3] flex flex-col items-center justify-center">
          {/* Note Stack 3D depth */}
          <div className="w-[86%] h-[64%] relative flex items-center justify-center">
            {/* Shadow under stack */}
            <div className="absolute -bottom-3 inset-x-4 h-6 bg-black/35 rounded-full blur-md" />

            {/* Stack side layers for realistic physical bulk */}
            <div 
              className="absolute inset-0 rounded-lg shadow-xl"
              style={{
                backgroundColor: baseColor,
                transform: 'translateY(6px)',
                filter: 'brightness(0.7)',
              }}
            />
            <div 
              className="absolute inset-0 rounded-lg shadow-lg"
              style={{
                backgroundColor: baseColor,
                transform: 'translateY(3px)',
                filter: 'brightness(0.85)',
              }}
            />

            {/* Top Banknote Body */}
            <div 
              className="relative w-full h-full rounded-lg shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden border"
              style={{
                backgroundColor: baseColor,
                borderColor: accentColor,
              }}
            >
              {/* Note guilloche patterns */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, ${accentColor} 10%, transparent 10%)`,
                  backgroundSize: '12px 12px',
                }}
              />

              {/* Legal Specimen Banner Diagonal */}
              <div className="absolute -inset-x-6 top-1/2 -translate-y-1/2 -rotate-12 bg-black/60 py-1 border-y border-[#C5A059] flex items-center justify-center z-10">
                <span className="text-[9px] font-bold tracking-[0.25em] text-[#F8F6F0] font-mono-code uppercase">
                  FOR MOTION PICTURE USE ONLY · SPECIMEN
                </span>
              </div>

              {/* Note Header */}
              <div className="flex justify-between items-start z-0">
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-black font-mono-code text-white drop-shadow">
                    {denomText}
                  </span>
                  <span className="text-[7px] font-semibold text-white/80 uppercase font-serif-luxury tracking-wider">
                    Australia
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[7px] font-mono-code text-[#C5A059] font-bold block">
                    COMMONWEALTH COMPLIANT
                  </span>
                  <span className="text-[6px] text-white/60 font-mono-code">
                    CRIMES ACT 1981 S22
                  </span>
                </div>
              </div>

              {/* Note Center Clear Window Homage */}
              <div className="flex items-center justify-between z-0 px-2">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#C5A059]/60 flex items-center justify-center bg-black/20">
                  <span className="text-[6px] font-bold text-[#C5A059] text-center font-serif-luxury">
                    PROP
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[8px] font-extrabold tracking-widest text-white/95 uppercase font-serif-luxury">
                    REPRODUCTION NOTE
                  </span>
                  <span className="text-[6.5px] block text-white/70 font-mono-code">
                    NON-LEGAL TENDER
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#C5A059]/60 flex items-center justify-center bg-black/20">
                  <span className="text-[6px] font-bold text-[#C5A059] text-center font-serif-luxury">
                    RBA*
                  </span>
                </div>
              </div>

              {/* Note Footer */}
              <div className="flex justify-between items-end z-0">
                <span className="text-[6.5px] font-mono-code text-white/70">
                  SERIES 2026 / CINEMA ARCHIVAL
                </span>
                <span className="text-[14px] font-black font-mono-code text-white drop-shadow">
                  {denomText}
                </span>
              </div>
            </div>

            {/* Official Currency Strapping Band Around Bundle */}
            <div className="absolute inset-y-[-4px] left-1/2 -translate-x-1/2 w-16 bg-[#FFFFFF] shadow-2xl rounded-sm border-x border-[#D8D2C4] flex flex-col justify-between items-center py-1 z-20">
              <span className="text-[5.5px] font-bold text-[#141E1A] tracking-wider font-serif-luxury uppercase">
                PROPPS PTY LTD
              </span>
              <div className="w-full py-0.5 bg-[#C5A059] text-center">
                <span className="text-[7px] font-black text-[#0D1512] font-mono-code tracking-tight block">
                  100 NOTES
                </span>
              </div>
              <span className="text-[5px] font-mono-code text-[#444] text-center leading-none">
                SEALED STRAP
              </span>
            </div>
          </div>

          <span className="mt-2 text-[9.5px] font-bold tracking-wider text-[#35423C] uppercase font-mono-code">
            {bandText}
          </span>
        </div>
      )}

      {/* Compliance Watermark Corner Tag */}
      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-[#0D1512]/85 rounded text-[8px] font-mono-code text-[#C5A059] border border-[#2C3E36] backdrop-blur-sm z-30">
        RBA COMPLIANT SPECIMEN
      </div>

      {badge && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#C5A059] text-[#0D1512] font-bold text-[9px] tracking-wider uppercase rounded shadow font-mono-code z-30">
          {badge}
        </div>
      )}
    </div>
  );
};
