// src/components/AgeGateModal.tsx
import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, ExternalLink } from 'lucide-react';
import { SITE, COMPLIANCE } from '../config/site.js';

export const AgeGateModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const verified = localStorage.getItem('propps_age_verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('propps_age_verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com.au';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="max-w-lg w-full bg-[#121A16] border-2 border-[#C5A059] rounded-2xl p-6 sm:p-8 shadow-2xl relative text-center">
        {/* Seal */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1C2A24] border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059]">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0] mb-2 tracking-wide">
          COMMONWEALTH COMPLIANCE &amp; AGE VERIFICATION
        </h2>

        <p className="text-xs font-mono-code text-[#C5A059] mb-4 uppercase tracking-wider">
          CRIMES (CURRENCY) ACT 1981 SECTION 22 &amp; RBA GUIDELINES
        </p>

        <div className="p-4 bg-[#0A0F0D] rounded-xl border border-[#23332B] text-xs text-[#B4C0BA] leading-relaxed text-left mb-6 space-y-2">
          <p>
            You are entering the official catalog of <strong className="text-white">{SITE.name}</strong>, a certified supplier of reproduction currency and prop cash designed strictly for motion picture, television, theatrical, commercial, artistic, and educational simulation productions.
          </p>
          <p className="font-semibold text-[#E5C378]">
            ⚠️ ALL PRODUCTS ARE NON-LEGAL TENDER PROPS. ATTEMPTING TO CIRCULATE OR SPEND REPRODUCTION CURRENCY IS A SEVERE CRIMINAL OFFENCE UNDER AUSTRALIAN COMMONWEALTH LAW.
          </p>
          <p>
            By entering, you confirm you are at least 18 years of age and intend to use these items solely for legitimate artistic or training purposes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <CheckCircle className="w-4 h-4" />
            <span>I Am 18+ &amp; Agree</span>
          </button>

          <button
            type="button"
            onClick={handleDecline}
            className="py-3 px-6 bg-[#1A2520] hover:bg-[#23332B] text-[#9AA7A0] hover:text-white font-medium text-sm rounded-xl border border-[#2C3E36] transition-colors cursor-pointer"
          >
            Exit Site
          </button>
        </div>
      </div>
    </div>
  );
};
