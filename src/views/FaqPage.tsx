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
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2 text-center">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block">
          Australian Production Inquiries
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1414]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F] max-w-2xl mx-auto leading-relaxed">
          Comprehensive answers covering Reserve Bank compliance, order thresholds, express Australia Post delivery, and payment procedures.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {FAQ.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] overflow-hidden transition-all">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#1A1414]">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-white border border-[#EAE3DC] flex items-center justify-center text-[#D4AF37] transition-transform ${
                    isOpen ? 'rotate-180 text-white bg-[#D4AF37]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6F665F] leading-relaxed border-t border-[#EAE3DC] animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need more help */}
      <div className="p-8 rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] text-center space-y-4">
        <h2 className="font-serif-luxury text-xl font-bold text-[#1A1414]">
          Have a Specific Production Question?
        </h2>
        <p className="text-xs text-[#6F665F] max-w-md mx-auto">
          Our Melbourne dispatch desk is staffed weekdays from 9:00 AM to 6:00 PM AEST to assist with production timelines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-white text-xs font-mono-code text-[#D4AF37] rounded-xl border border-[#EAE3DC] hover:bg-[#F9F7F2] text-center shadow-sm"
          >
            Submit an Inquiry
          </Link>
          <a
            href="https://wa.me/61420128746?text=Hello%20PROPPS%20PTY%20LTD,%20I%20have%20a%20question%20regarding%20prop%20currency%20orders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white font-bold text-xs font-mono-code rounded-xl flex items-center justify-center gap-1.5 shadow-md hover:bg-[#20BA5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
