// src/views/FaqPage.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQ } from '../config/site.js';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#1E2B25] pb-6 space-y-2 text-center">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Australian Production Inquiries
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-2xl mx-auto leading-relaxed">
          Comprehensive answers covering Reserve Bank compliance, order thresholds, express Australia Post delivery, and payment procedures.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {FAQ.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="rounded-2xl bg-[#121A16] border border-[#22302A] overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#F8F6F0]">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-[#1C2A24] border border-[#2C3E36] flex items-center justify-center text-[#C5A059] transition-transform ${
                    isOpen ? 'rotate-180 text-white bg-[#C5A059]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#B4C0BA] leading-relaxed border-t border-[#1C2A24] animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help */}
      <div className="p-8 rounded-2xl bg-[#0D1512] border border-[#2C3E36] text-center space-y-4">
        <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
          Have a Specific Production Question?
        </h3>
        <p className="text-xs text-[#9AA7A0] max-w-md mx-auto">
          Our Melbourne dispatch desk is staffed weekdays from 9:00 AM to 6:00 PM AEST to assist with production timelines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-[#1C2A24] text-xs font-mono-code text-[#C5A059] rounded-xl border border-[#2C3E36] hover:bg-[#263830] text-center"
          >
            Submit an Inquiry
          </Link>
          <a
            href="https://wa.me/61400000000?text=Hello%20PROPPS%20PTY%20LTD,%20I%20have%20a%20question%20regarding%20prop%20currency%20orders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-[#0D1512] text-xs font-mono-code font-bold rounded-xl flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
