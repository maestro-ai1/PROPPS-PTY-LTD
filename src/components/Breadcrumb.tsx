// src/components/Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';
import { JsonLd } from './JsonLd.js';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  const trail: BreadcrumbItem[] = [{ name: 'Home', href: '/' }, ...items];

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={className ?? 'flex items-center gap-2 flex-wrap text-xs font-mono-code text-[#889690]'}
      >
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          return (
            <React.Fragment key={item.href}>
              {isLast ? (
                <span className="text-[#F8F6F0] truncate max-w-xs">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#C5A059] transition-colors">
                  {item.name}
                </Link>
              )}
              {!isLast && <span>/</span>}
            </React.Fragment>
          );
        })}
      </nav>
      <JsonLd type="breadcrumb" data={trail} />
    </>
  );
};
