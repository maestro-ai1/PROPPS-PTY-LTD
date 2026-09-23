// src/views/AboutPage.tsx
import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';
import { SITE, BRAND } from '../config/site.js';

export const AboutContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Title & Entity Header */}
      <div className="text-center space-y-3 border-b border-[#1E2B25] pb-8">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Australian Cinema Provenance · Founded 2019
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F6F0]">
          ABOUT {SITE.name}
        </h1>
        <p className="text-xs sm:text-sm text-[#B4C0BA] max-w-2xl mx-auto leading-relaxed">
          The authorized standard in cinema-grade reproduction currency, bespoke theatrical bank props, and law enforcement training specimens across the Commonwealth of Australia.
        </p>
      </div>

      {/* Main Narrative Article (700+ Words Entity-Rich) */}
      <article className="prose prose-invert max-w-none text-[#B4C0BA] text-sm leading-relaxed space-y-6">
        <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] not-prose flex flex-col sm:flex-row items-center gap-4 text-xs font-mono-code text-[#E5C378]">
          <div className="w-10 h-10 rounded-xl bg-[#1C2A24] border border-[#C5A059] flex items-center justify-center shrink-0 text-[#C5A059]">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <strong className="text-white block uppercase">
              Commonwealth Legal Mandate &amp; Production Integrity
            </strong>
            <span>
              All reproduction currency manufactured by PROPPS PTY LTD is engineered strictly in accordance with Section 22 of the Crimes (Currency) Act 1981 and Reserve Bank of Australia (RBA) guidelines.
            </span>
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] pt-4">
          Our Foundation in Australian Motion Pictures
        </h2>
        <p>
          Founded in 2019 in Eltham, Victoria (postcode 3093), {SITE.name} was established to solve a critical challenge confronting the Australian film, television, and theatrical production industry: the acute need for hyper-realistic visual currency props that maintain impeccable fidelity under modern 4K, 6K, and 8K cinema camera sensors while strictly adhering to Commonwealth counterfeit deterrence legislation.
        </p>
        <p>
          Prior to the development of our specialized cinema series, art directors and prop masters were frequently forced to compromise between sub-standard generic "play money" that looks unconvincing on high-definition close-ups, or navigating opaque legal frameworks surrounding currency reproduction. By consulting directly with legal experts in Commonwealth currency law and working hand-in-hand with leading Australian directors of photography, {SITE.name} engineered a purpose-built proprietary reproduction process that delivers authentic visual weight, texture, and coloration on camera while incorporating all statutory specimen markings.
        </p>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] pt-4">
          Craftsmanship, Camera Performance &amp; Material Science
        </h2>
        <p>
          Real polymer banknotes reflect studio lighting unpredictably, causing hot spots, unwanted glare, and unnatural sheen under high-powered tungsten, HMI, and LED cinematography fixtures. To resolve this optical hurdle, {SITE.name} developed our signature matte-finish reproduction technique.
        </p>
        <p>
          Each prop note is double-side printed on custom 120gsm archival wood-pulp stock using non-reflective, anti-glare pigments calibrated to render rich Australian golden-brown ($100), yellow-gold ($50), and red-ochre ($20) hues without distracting studio reflections. Every individual banknote incorporates crisp micro-lettering, high-contrast reproduction watermarks, and prominently placed "THIS NOTE IS NOT LEGAL TENDER / FOR CINEMATIC USE ONLY" disclaimers on both obverse and reverse faces.
        </p>
        <p>
          Whether capturing a high-speed bank heist getaway sequence, an intimate dining exchange, a dramatic underground casino showdown, or law enforcement search-and-seizure training drills, our props possess the exact physical hand-feel, flick, and tactile response required for convincing on-screen handling by cast and crew.
        </p>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] pt-4">
          The 12 Brand Authority Pillars of {SITE.name}
        </h2>
        <p>
          Our operations across Australia are guided by uncompromising standards of production excellence, verified institutional compliance, and ethical studio distribution:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">1. Founding Provenance</span>
            <p className="text-xs text-[#9AA7A0]">Established 2019 in Eltham, Victoria as an incorporated proprietary limited enterprise.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">2. Victorian Headquarters</span>
            <p className="text-xs text-[#9AA7A0]">Operating from Suite 4, 95 Main Road, Eltham VIC 3093 with secure packing facilities.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">3. Quantifiable Scale</span>
            <p className="text-xs text-[#9AA7A0]">Over 500 Australian productions supplied, spanning feature films to theatrical tours.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">4. Crimes Act S22 Adherence</span>
            <p className="text-xs text-[#9AA7A0]">Every specimen note engineered to prevent any potential confusion with legal tender.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">5. Historical Milestones</span>
            <p className="text-xs text-[#9AA7A0]">From bespoke pilot orders in 2019 to nationwide express studio distribution in 2026.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">6. Nationwide Dispatch</span>
            <p className="text-xs text-[#9AA7A0]">Australia Post Express tracked courier dispatch with mandatory signature on delivery.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">7. Non-Glare Inks</span>
            <p className="text-xs text-[#9AA7A0]">Formulated specifically for ARRI, RED, Sony Venice, and Blackmagic cinema sensors.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">8. Complete Denomination Suite</span>
            <p className="text-xs text-[#9AA7A0]">Accurately representing $5, $10, $20, $50, and $100 denominations plus vintage series.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">9. Bank-Strapped Authentication</span>
            <p className="text-xs text-[#9AA7A0]">Heavy kraft paper straps featuring authentic simulation reserve banking typography.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">10. Vault-Grade Heist Hardware</span>
            <p className="text-xs text-[#9AA7A0]">Aluminium locking flight cases and shrink-wrapped bricks for major cinematic climaxes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">11. Age-Gated 18+ Access</span>
            <p className="text-xs text-[#9AA7A0]">Strict adult ordering verification preventing improper use by unverified parties.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] space-y-1">
            <span className="text-xs font-mono-code font-bold text-[#C5A059] block">12. Direct Studio Hotline</span>
            <p className="text-xs text-[#9AA7A0]">Direct WhatsApp liaison for urgent call sheet dispatch and custom script requests.</p>
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] pt-4">
          Historical Milestones &amp; Development Timeline
        </h2>
        <div className="space-y-4 not-prose my-6">
          {BRAND.milestones.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#0D1512] border border-[#22302A]">
              <div className="px-3 py-1 rounded bg-[#1C2A24] border border-[#C5A059]/40 text-[#C5A059] font-mono-code font-bold text-xs shrink-0">
                {item.year}
              </div>
              <p className="text-xs text-[#B4C0BA] leading-relaxed pt-0.5">{item.event}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] pt-4">
          Strict Artistic &amp; Simulation Use Notice
        </h2>
        <p>
          {SITE.name} produces prop currency exclusively for artistic, theatrical, cinematic, educational, and simulation endeavors. It is an offense under the Crimes (Currency) Act 1981 to attempt to utter or pass any reproduction banknote as legal tender. Our firm cooperates fully with state and Commonwealth law enforcement authorities, and every order is logged with permanent transaction identifiers.
        </p>
      </article>

      {/* Action Footer */}
      <div className="p-8 rounded-2xl bg-[#141E1A] border border-[#2C3E36] text-center space-y-4">
        <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
          Ready to Outfit Your Next Production?
        </h3>
        <p className="text-xs text-[#9AA7A0] max-w-md mx-auto">
          Explore our complete catalog of strapped bundles, bank bricks, and locking flight cases.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 bg-gradient-to-r from-[#C5A059] to-[#E5C378] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code"
          >
            Browse Cinema Shop
          </Link>
          <Link
            href="/compliance"
            className="px-6 py-3 bg-[#1C2A24] text-[#F8F6F0] text-xs font-bold uppercase tracking-wider rounded-xl border border-[#2C3E36] font-mono-code"
          >
            Legal Compliance
          </Link>
        </div>
      </div>
    </div>
  );
};
