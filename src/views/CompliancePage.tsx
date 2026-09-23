// src/views/CompliancePage.tsx
import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { SITE } from '../config/site.js';

export const ComplianceContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Title */}
      <div className="border-b border-[#1E2B25] pb-6 space-y-2 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2A24] border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-mono-code font-bold uppercase mb-2">
          <Scale className="w-3.5 h-3.5" />
          <span>Commonwealth Legal Framework</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          PROP MONEY AUSTRALIA LAWS &amp; COMPLIANCE
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-2xl mx-auto leading-relaxed">
          Comprehensive legal guidelines governing the design, manufacture, purchase, and on-camera utilization of reproduction Australian currency props.
        </p>
      </div>

      {/* Mandatory Statutory Warning Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#14120E] border-2 border-[#E0533C] space-y-4">
        <div className="flex items-center gap-3 text-[#E0533C]">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h2 className="font-serif-luxury text-base sm:text-lg font-bold uppercase tracking-wider text-white">
            STATUTORY CRIMINAL PROHIBITION NOTICE
          </h2>
        </div>
        <p className="text-xs text-[#D8CDC5] leading-relaxed">
          It is an indictable Commonwealth criminal offense under Part II of the <strong>Crimes (Currency) Act 1981</strong> to manufacture, possess, utter, tender, or attempt to pass any counterfeit or reproduction currency with the intention of defrauding any person, financial institution, or merchant.
        </p>
        <p className="text-xs text-[#D8CDC5] leading-relaxed">
          {SITE.name} products are classified strictly as <strong>NON-LEGAL TENDER CINEMATOGRAPHIC PROPS</strong>. They carry no monetary value whatsoever, cannot be redeemed at any bank or treasury, and are sold exclusively to adults aged 18 and over for verified film, theatrical, educational, or training endeavors.
        </p>
      </div>

      {/* How Our Props Comply with Section 22 */}
      <div className="space-y-6">
        <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
          How Our Props Adhere to Crimes (Currency) Act Section 22
        </h3>
        <p className="text-xs text-[#B4C0BA] leading-relaxed">
          Section 22 of the Act establishes strict criteria under which reproductions of Australian banknotes are permissible. Our production facility adheres to every required safeguard:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#121A16] border border-[#22302A] space-y-2">
            <div className="flex items-center gap-2 text-[#56C48B]">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <h4 className="font-serif-luxury text-sm font-bold text-white">
                Prominent Disclaimers
              </h4>
            </div>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Every note bears unambiguous, indelible specimen wording stating: <em>"THIS NOTE IS NOT LEGAL TENDER - FOR CINEMATIC USE ONLY"</em> printed conspicuously across both sides.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#121A16] border border-[#22302A] space-y-2">
            <div className="flex items-center gap-2 text-[#56C48B]">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <h4 className="font-serif-luxury text-sm font-bold text-white">
                Archival Paper vs Polymer
              </h4>
            </div>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Real Australian currency is printed on specialized bi-axially oriented polymer. Our props are printed on 120gsm high-grade wood-pulp matte paper, ensuring instant tactile distinction in hand.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#121A16] border border-[#22302A] space-y-2">
            <div className="flex items-center gap-2 text-[#56C48B]">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <h4 className="font-serif-luxury text-sm font-bold text-white">
                Omission of OVD Features
              </h4>
            </div>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Our props deliberately omit holographic optically variable devices (OVDs), clear top-to-bottom windows, tactile braille bumps, and rolling-colour metallic threads.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#121A16] border border-[#22302A] space-y-2">
            <div className="flex items-center gap-2 text-[#56C48B]">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <h4 className="font-serif-luxury text-sm font-bold text-white">
                Modified Typography &amp; Portraits
              </h4>
            </div>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Historical portraits, micro-printed poetry, and Governor signatures are re-drawn and stylized with deliberate artistic discrepancies to prevent optical scanning recognition.
            </p>
          </div>
        </div>
      </div>

      {/* Guidelines for Studio Crews on Set */}
      <div className="p-6 rounded-2xl bg-[#0D1512] border border-[#2C3E36] space-y-4">
        <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0] flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-[#C5A059]" />
          <span>On-Set Handling Protocols for Prop Masters &amp; Art Departments</span>
        </h3>
        <ul className="text-xs space-y-2 text-[#B4C0BA]">
          <li className="flex items-start gap-2">
            <span className="text-[#C5A059] font-bold">•</span>
            <span>
              <strong>Secure Storage:</strong> Maintain prop currency under lock and key between takes to prevent accidental loss or misplacement outside the filming location.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#C5A059] font-bold">•</span>
            <span>
              <strong>Public Locations:</strong> When filming in public venues, notify local Victoria Police / relevant state constabulary that replica currency will be utilized on set.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#C5A059] font-bold">•</span>
            <span>
              <strong>No Off-Set Distribution:</strong> Cast and background extras must return all prop notes immediately following the call of "wrap".
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#C5A059] font-bold">•</span>
            <span>
              <strong>Production Log:</strong> Keep a copy of your {SITE.name} invoice and certificate of simulation within the art department production bible.
            </span>
          </li>
        </ul>
      </div>

      {/* Contact Legal / Compliance */}
      <div className="text-center pt-6 border-t border-[#1E2B25] space-y-3">
        <p className="text-xs text-[#889690] font-mono-code">
          Questions regarding legal documentation or compliance paperwork for your insurer?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2.5 bg-[#1C2A24] hover:bg-[#263830] text-xs font-mono-code text-[#C5A059] rounded-lg border border-[#2C3E36]"
        >
          Contact Legal &amp; Dispatch Desk →
        </Link>
      </div>
    </div>
  );
};
