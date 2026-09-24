import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../config/site.js';

interface FaqSectionProps {
  id: string;
  heading: string;
  items: FaqItem[];
}

// Native <details>: every answer is in the server-rendered HTML (crawlers and
// AI agents can read it) and it works without JavaScript.
export const FaqSection: React.FC<FaqSectionProps> = ({ id, heading, items }) => (
  <section aria-labelledby={id} className="space-y-4">
    <h2 id={id} className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
      {heading}
    </h2>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <details key={idx} className="group rounded-2xl bg-[#121A16] border border-[#22302A] open:border-[#C5A059]/50">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-[#F8F6F0]">{item.question}</h3>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2C3E36] bg-[#1C2A24] text-[#C5A059] transition-transform group-open:rotate-180">
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="border-t border-[#1C2A24] px-4 pb-4 pt-3 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-[#B4C0BA]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </section>
);