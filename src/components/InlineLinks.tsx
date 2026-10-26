// src/components/InlineLinks.tsx
// Renders text with [label](href) links: internal hrefs use next/link, external ones open in a new tab.
import React from 'react';
import Link from 'next/link';

const LINK_CLASS = 'text-[#D4AF37] underline hover:text-[#C5A059] transition-colors';

export const InlineLinks: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
        const [, label, href] = m;
        return href.startsWith('http') ? (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>{label}</a>
        ) : (
          <Link key={i} href={href} className={LINK_CLASS}>{label}</Link>
        );
      })}
    </>
  );
};
