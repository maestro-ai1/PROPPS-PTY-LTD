'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { KEYWORD_PAGES, KEYWORD_PRODUCTS, KEYWORD_POSTS } from '../config/keyword-map.js';

type KW = { keyword: string; intent: string; vol: number | string | null; kd: number | string | null };
type Entry = { focus: KW; secondary?: KW[] } | null;

function lookup(path: string): Entry {
  const p = path.replace(/\/+$/, '') || '/';
  const pages = KEYWORD_PAGES as unknown as Record<string, Entry>;
  if (pages[p]) return pages[p];
  const parts = p.split('/').filter(Boolean);
  if (parts[0] === 'shop' && parts.length === 3) {
    return (KEYWORD_PRODUCTS as unknown as Record<string, Entry>)[parts[2]] || null;
  }
  if (parts[0] === 'blog' && parts.length === 2) {
    const kw = (KEYWORD_POSTS as unknown as Record<string, KW>)[parts[1]];
    return kw ? { focus: kw } : null;
  }
  return null;
}

const fmt = (v: number | string | null) => (v === null || v === undefined ? 'n/a' : String(v));

// Internal SEO overlay. Mounted from layout.tsx only when VERCEL_ENV !== 'production'.
export function KeywordMapPanel() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const entry = lookup(path);
  const rows: KW[] = entry ? [entry.focus, ...(entry.secondary || [])] : [];

  // Nothing to show on the full-map page or on unmapped pages: stay out of the way.
  if (!entry || path.startsWith('/keyword-map')) return null;

  return (
    <div className="fixed bottom-2 left-2 z-[9999] max-w-[calc(100vw-1rem)] text-[11px] font-mono" data-keyword-map>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded border border-[#C5A059] bg-[#141010] px-2 py-1 text-[#C5A059]"
        aria-expanded={open}
      >
        KW MAP {open ? '−' : '+'}
      </button>
      {open && (
        <div className="mt-1 w-[340px] max-w-full rounded border border-[#C5A059] bg-[#141010]/95 p-2 text-white shadow-lg">
          <div className="mb-1 break-all text-[#C5A059]">{path}</div>
          {entry ? (
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#C5A059]">
                  <th>Keyword</th>
                  <th>Int</th>
                  <th>Vol</th>
                  <th>KD</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.keyword} className={i === 0 ? 'font-bold' : ''}>
                    <td className="pr-1">
                      {i === 0 ? '★ ' : ''}
                      {r.keyword}
                    </td>
                    <td className="pr-1">{r.intent}</td>
                    <td className="pr-1">{fmt(r.vol)}</td>
                    <td>{fmt(r.kd)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>No mapped keyword for this page (see docs/keyword-map.md).</div>
          )}
          <div className="mt-1 opacity-60">T/C/I/N · preview only, hidden in production</div>
        </div>
      )}
    </div>
  );
}
