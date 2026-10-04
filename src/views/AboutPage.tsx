// src/views/AboutPage.tsx
import React from 'react';
import Link from 'next/link';
import { Scale, CheckCircle2, ExternalLink } from 'lucide-react';
import { SITE, BRAND } from '../config/site.js';

export const AboutContent: React.FC = () => {
  const abrUrl = `https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Title & Entity Header */}
      <div className="text-center space-y-3 border-b border-[#F7F4F0] pb-8">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block">
          Australian Cinema Provenance · Founded 2019
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A1414]">
          ABOUT {SITE.name}
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F] max-w-2xl mx-auto leading-relaxed">
          The authorized standard in cinema-grade reproduction currency, bespoke theatrical bank props, and law enforcement training specimens across the Commonwealth of Australia.
        </p>
      </div>

      {/* ABN / ABR Verification */}
      <div className="p-5 rounded-2xl bg-white border border-[#00b67a]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#00b67a] shrink-0" />
          <div className="text-sm">
            <span className="font-bold text-[#1A1414] block">{SITE.name} · Active Australian Proprietary Company</span>
            <span className="text-xs text-[#6F665F] font-mono-code">
              ABN: <span className="font-bold text-[#00b67a]">{SITE.abn}</span> · Registered in Victoria (VIC 3093)
            </span>
          </div>
        </div>
        <a
          href={abrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00b67a]/10 hover:bg-[#00b67a]/20 text-[#00b67a] hover:text-[#008b5d] border border-[#00b67a]/40 hover:border-[#00b67a] font-mono-code text-[10.5px] font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
          title="Verify PROPPS PTY LTD on the official Australian Business Register (abr.business.gov.au)"
        >
          <span>Verify on ABR</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Main Narrative Article (700+ Words Entity-Rich) */}
      <article className="prose prose-slate max-w-none text-[#4F4640] text-sm leading-relaxed space-y-6">
        <div className="p-6 rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] not-prose flex flex-col sm:flex-row items-center gap-4 text-xs font-mono-code text-[#C5A059] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#D4AF37] flex items-center justify-center shrink-0 text-[#D4AF37]">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <strong className="text-[#1A1414] block uppercase">
              Commonwealth Legal Mandate &amp; Production Integrity
            </strong>
            <span>
              All reproduction currency manufactured by PROPPS PTY LTD is engineered strictly in accordance with Section 22 of the Crimes (Currency) Act 1981 and Reserve Bank of Australia (RBA) guidelines.
            </span>
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414] pt-4">
          Our Foundation in Australian Motion Pictures
        </h2>
        <p>
          Founded in 2019 in Eltham, Victoria (postcode 3093), {SITE.name} was established to solve a critical challenge confronting the Australian film, television, and theatrical production industry: the acute need for hyper-realistic visual currency props that maintain impeccable fidelity under modern 4K, 6K, and 8K cinema camera sensors while strictly adhering to Commonwealth counterfeit deterrence legislation.
        </p>
        <p>
          Prior to the development of our specialized cinema series, art directors and prop masters were frequently forced to compromise between sub-standard generic "play money" that looks unconvincing on high-definition close-ups, or navigating opaque legal frameworks surrounding currency reproduction. By consulting directly with legal experts in Commonwealth currency law and working hand-in-hand with leading Australian directors of photography, {SITE.name} engineered a purpose-built proprietary reproduction process that delivers authentic visual weight, texture, and coloration on camera while incorporating all statutory specimen markings.
        </p>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414] pt-4">
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

        <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414] pt-4">
          The 12 Brand Authority Pillars of {SITE.name}
        </h2>
        <p>
          Our operations across Australia are guided by uncompromising standards of production excellence, verified institutional compliance, and ethical studio distribution:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">1. Founding Provenance</span>
            <p className="text-xs text-[#6F665F]">Established 2019 in Eltham, Victoria as an incorporated proprietary limited enterprise.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">2. Victorian Headquarters</span>
            <p className="text-xs text-[#6F665F]">Operating from Suite 4, 95 Main Road, Eltham VIC 3093 with secure packing facilities.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">3. Quantifiable Scale</span>
            <p className="text-xs text-[#6F665F]">Over 500 Australian productions supplied, spanning feature films to theatrical tours.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">4. Crimes Act S22 Adherence</span>
            <p className="text-xs text-[#6F665F]">Every specimen note engineered to prevent any potential confusion with legal tender.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">5. Historical Milestones</span>
            <p className="text-xs text-[#6F665F]">From bespoke pilot orders in 2019 to nationwide express studio distribution in 2026.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">6. Nationwide Dispatch</span>
            <p className="text-xs text-[#6F665F]">Australia Post Express tracked courier dispatch with mandatory signature on delivery.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">7. Non-Glare Inks</span>
            <p className="text-xs text-[#6F665F]">Formulated specifically for ARRI, RED, Sony Venice, and Blackmagic cinema sensors.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">8. Complete Denomination Suite</span>
            <p className="text-xs text-[#6F665F]">Accurately representing $5, $10, $20, $50, and $100 denominations plus vintage series.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">9. Bank-Strapped Authentication</span>
            <p className="text-xs text-[#6F665F]">Heavy kraft paper straps featuring authentic simulation reserve banking typography.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">10. Vault-Grade Heist Hardware</span>
            <p className="text-xs text-[#6F665F]">Aluminium locking flight cases and shrink-wrapped bricks for major cinematic climaxes.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">11. Age-Gated 18+ Access</span>
            <p className="text-xs text-[#6F665F]">Strict adult ordering verification preventing improper use by unverified parties.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] space-y-1 shadow-sm">
            <span className="text-xs font-mono-code font-bold text-[#D4AF37] block">12. Direct Studio Hotline</span>
            <p className="text-xs text-[#6F665F]">Direct WhatsApp liaison for urgent call sheet dispatch and custom script requests.</p>
          </div>
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414] pt-4">
          Historical Milestones &amp; Development Timeline
        </h2>
        <div className="space-y-4 not-prose my-6">
          {BRAND.milestones.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#F9F7F2] border border-[#EAE3DC] shadow-sm">
              <div className="px-3 py-1 rounded bg-white border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code font-bold text-xs shrink-0">
                {item.year}
              </div>
              <p className="text-xs text-[#4F4640] leading-relaxed pt-0.5">{item.event}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414] pt-4">
          Strict Artistic &amp; Simulation Use Notice
        </h2>
        <p>
          {SITE.name} produces prop currency exclusively for artistic, theatrical, cinematic, educational, and simulation endeavors. It is an offense under the Crimes (Currency) Act 1981 to attempt to utter or pass any reproduction banknote as legal tender. Our firm cooperates fully with state and Commonwealth law enforcement authorities, and every order is logged with permanent transaction identifiers.
        </p>
      </article>

      {/* Action Footer */}
      <div className="p-8 rounded-2xl bg-[#F9F7F2] border border-[#EAE3DC] text-center space-y-4 shadow-sm">
        <h3 className="font-serif-luxury text-xl font-bold text-[#1A1414]">
          Ready to Outfit Your Next Production?
        </h3>
        <p className="text-xs text-[#6F665F] max-w-md mx-auto">
          Explore our complete catalog of strapped bundles, bank bricks, and locking flight cases.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 white-gold-btn font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code border border-[#D4AF37]/50"
          >
            Browse Cinema Shop
          </Link>
          <Link
            href="/compliance"
            className="px-6 py-3 bg-white text-[#1A1414] text-xs font-bold uppercase tracking-wider rounded-xl border border-[#EAE3DC] font-mono-code shadow-sm"
          >
            Legal Compliance
          </Link>
        </div>
      </div>
    </div>
  );
};
