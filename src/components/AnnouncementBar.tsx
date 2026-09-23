// src/components/AnnouncementBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Percent, ShieldCheck, MessageCircle } from 'lucide-react';
import { SHOP } from '../config/site.js';

export const AnnouncementBar: React.FC = () => {
  const slides = [
    {
      icon: Truck,
      text: `AUSTRALIA'S #1 PROP MONEY SUPPLIER · SAME-DAY AUSPOST EXPRESS DISPATCH BEFORE 2PM (FREE OVER $${SHOP.freeShippingThreshold} AUD)`,
    },
    {
      icon: Percent,
      text: `INSTANT 10% DISCOUNT ON ALL PROP ORDERS PAID VIA CRYPTOCURRENCY (BITCOIN · USDT TRC20 · ETHEREUM)`,
    },
    {
      icon: ShieldCheck,
      text: `100% LEGAL SPECIMEN PROP NOTES · DUAL-SIDED HIGH RESOLUTION PRINT FOR CINEMA & STAGE PRODUCTIONS`,
    },
    {
      icon: MessageCircle,
      text: `DISCREET VACUUM-SEALED PACKAGING · INSTANT DISPATCH DESK & WHATSAPP SUPPORT ACTIVE 24/7`,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const CurrentIcon = slides[current].icon;

  return (
    <div className="bg-gradient-to-r from-[#17140B] via-[#2A2312] to-[#17140B] border-b border-[#D4AF37]/50 text-xs py-1.5 px-4 select-none relative overflow-hidden shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="text-[#D4AF37] hover:text-white px-2 py-0.5 text-xs transition-colors focus:outline-none cursor-pointer"
          aria-label="Previous announcement"
        >
          ‹
        </button>

        <div className="flex items-center gap-2 text-center justify-center font-mono-code text-[11px] tracking-wider text-white font-semibold transition-all duration-300">
          <CurrentIcon className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
          <span className="truncate">{slides[current].text}</span>
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="text-[#D4AF37] hover:text-white px-2 py-0.5 text-xs transition-colors focus:outline-none cursor-pointer"
          aria-label="Next announcement"
        >
          ›
        </button>
      </div>
    </div>
  );
};
