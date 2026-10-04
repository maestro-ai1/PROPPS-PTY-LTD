// src/components/admin/PasscodeGate.tsx
import React, { useState } from 'react';
import { Lock, KeyRound, ShieldAlert, ArrowRight } from 'lucide-react';
import { SITE } from '../../config/site.js';

interface PasscodeGateProps {
  onUnlock: (passcode: string) => boolean | Promise<boolean>;
  error?: string | null;
}

export const PasscodeGate: React.FC<PasscodeGateProps> = ({ onUnlock, error }) => {
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUnlock(passcode);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-[#EAE3DC] rounded-2xl p-6 sm:p-8 shadow-2xl relative text-center">
        {/* Lock Icon */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#F9F7F2] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
          <Lock className="w-7 h-7" />
        </div>

        <h2 className="font-serif-luxury text-xl font-bold text-[#1A1414] mb-1">
          {SITE.name} REPLY PORTAL
        </h2>
        <p className="text-xs text-[#6F665F] mb-6 font-mono-code">
          PASSCODE-PROTECTED DISPATCH &amp; REPLIES DASHBOARD
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6F665F] mb-1.5 font-mono-code">
              Security Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-white border border-[#EAE3DC] rounded-xl px-4 py-3 text-[#1A1414] placeholder-[#BDB8B0] font-mono-code focus:border-[#D4AF37] focus:outline-none"
              />
              <KeyRound className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-3.5" />
            </div>
            {error && (
              <p className="text-xs text-[#E0533C] mt-2 flex items-center gap-1 font-mono-code">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 white-gold-btn font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer font-mono-code border border-[#D4AF37]/50"
          >
            <span>Unlock Dashboard Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
