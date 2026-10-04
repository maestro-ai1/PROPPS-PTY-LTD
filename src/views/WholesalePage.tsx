// src/views/WholesalePage.tsx
'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, Send, MessageCircle, Truck } from 'lucide-react';
import { saveEnquiry } from '../lib/enquiryStore.js';

export const WholesaleContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Feature Film / TV Drama',
    estimatedQuantity: '10–25 Bundles',
    message: '',
    website: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await saveEnquiry({
        website: formData.website,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: 'wholesale',
        company: formData.company,
        subject: `Wholesale B2B Inquiry: ${formData.company || formData.name} (${formData.projectType})`,
        message: `Project Type: ${formData.projectType}\nEstimated Qty: ${formData.estimatedQuantity}\n\n${formData.message}`,
      });
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Enquiry could not be sent.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#D4AF37] block">
          B2B Studio &amp; Production Supply
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1A1414]">
          WHOLESALE PROP MONEY AUSTRALIA
        </h1>
        <p className="text-xs sm:text-sm text-[#4F4640] leading-relaxed">
          Supplying Australian film productions, television studios, streaming networks, commercial art departments, and law enforcement training academies with compliant reproduction currency.
        </p>
      </div>

      {/* 3 Tier Discount Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="luxury-card p-6 rounded-2xl space-y-4 border border-[#EAE3DC] bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
              Tier 1 · Studio Pack
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F9F7F2] text-[11px] font-mono-code font-bold text-[#00b67a]">
              10% OFF
            </span>
          </div>
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            5 to 10 Bundles / Items
          </h2>
          <p className="text-xs text-[#6F665F] leading-relaxed">
            Ideal for indie short films, music videos, theatrical stage productions, and escape room installations.
          </p>
          <ul className="text-xs space-y-2 text-[#4F4640] pt-2 border-t border-[#F7F4F0]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Compliant Australian bank straps</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Free Express AusPost delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Standard 24h dispatch time</span>
            </li>
          </ul>
        </div>

        <div className="luxury-card p-6 rounded-2xl space-y-4 border-2 border-[#D4AF37] relative bg-white shadow-md">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D4AF37] text-white font-mono-code text-[10px] font-black uppercase tracking-wider">
            Most Popular
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
              Tier 2 · Series Production
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F9F7F2] text-[11px] font-mono-code font-bold text-[#00b67a]">
              20% OFF
            </span>
          </div>
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            11 to 25 Bundles / Items
          </h2>
          <p className="text-xs text-[#6F665F] leading-relaxed">
            Formulated for episodic television dramas, feature film robbery sequences, and multi-location commercial shoots.
          </p>
          <ul className="text-xs space-y-2 text-[#4F4640] pt-2 border-t border-[#F7F4F0]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Custom aged or distressed finish options</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Priority Melbourne studio packing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Full tax invoicing with ACN / GST</span>
            </li>
          </ul>
        </div>

        <div className="luxury-card p-6 rounded-2xl space-y-4 border border-[#EAE3DC] bg-white shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
              Tier 3 · Heist &amp; Vault Scale
            </span>
            <span className="px-2 py-0.5 rounded bg-[#F9F7F2] text-[11px] font-mono-code font-bold text-[#00b67a]">
              30% OFF
            </span>
          </div>
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            26+ Bundles / Full Vault Bricks
          </h2>
          <p className="text-xs text-[#6F665F] leading-relaxed">
            Full vault sets, armored truck props, locking flight cases, and long-term studio rental arrangements.
          </p>
          <ul className="text-xs space-y-2 text-[#4F4640] pt-2 border-t border-[#F7F4F0]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct art director consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Courier door-to-door hand delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Same-day Victorian courier available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Wholesale Contact & Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Info Column */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1414]">
              REQUEST A PRODUCTION ESTIMATE
            </h2>
            <p className="text-xs text-[#6F665F] leading-relaxed">
              Our Melbourne fulfillment desk coordinates directly with line producers, prop masters, and art directors across Australia.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] flex items-center gap-3 shadow-sm">
              <Truck className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-xs">
                <span className="font-bold text-[#1A1414] block">Priority Australia Post Express</span>
                <span className="text-[#6F665F]">Dispatched from Eltham VIC 3093 with mandatory signature.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EAE3DC] flex items-center gap-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-xs">
                <span className="font-bold text-[#1A1414] block">Crimes Currency Act S22 Certification</span>
                <span className="text-[#6F665F]">Includes formal compliance certificate for production legal teams.</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-white border border-[#25D366]/30 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-[#00b67a]">
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold text-xs font-mono-code uppercase tracking-wider">
                Urgent Shoot Date?
              </span>
            </div>
            <p className="text-xs text-[#6F665F]">
              If you require prop currency within 24 to 48 hours for an active call sheet, message our production hotline directly on WhatsApp.
            </p>
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://wa.me/61420128746?text=Hello%20PROPPS%20PTY%20LTD,%20we%20have%20an%20urgent%20studio%20prop%20currency%20wholesale%20order',
                  '_blank'
                )
              }
              className="w-full py-3 bg-[#00b67a] hover:bg-[#008b5d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 font-mono-code cursor-pointer"
            >
              <span>WhatsApp Production Hotline</span>
            </button>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE3DC] shadow-xl">
          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F9F7F2] border-2 border-[#00b67a] flex items-center justify-center text-[#00b67a] mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="font-serif-luxury text-xl font-bold text-[#1A1414]">
                WHOLESALE INQUIRY RECEIVED
              </h2>
              <p className="text-xs text-[#4F4640] max-w-sm mx-auto leading-relaxed">
                Thank you. Our studio dispatch desk has registered your project requirements. A producer will contact you within 4 business hours with bulk pricing.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-[#F9F7F2] text-xs font-mono-code text-[#D4AF37] rounded-lg border border-[#EAE3DC]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414] mb-2">
                Production Inquiry Details
              </h2>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] placeholder-[#BDB8B0] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Production Company / Studio
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Melbourne Pictures Pty Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] placeholder-[#BDB8B0] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="producer@studio.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] placeholder-[#BDB8B0] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] placeholder-[#BDB8B0] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option>Feature Film / TV Drama</option>
                    <option>Commercial / Music Video</option>
                    <option>Theatrical Stage Production</option>
                    <option>Escape Room / Experience</option>
                    <option>Police / Security Training</option>
                    <option>Other Artistic Simulation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option>5–10 Bundles (Tier 1)</option>
                    <option>11–25 Bundles (Tier 2)</option>
                    <option>26+ Bundles / Full Bricks (Tier 3)</option>
                    <option>Turnkey Briefcase Kits</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-[#6F665F] mb-1">
                  Production Notes &amp; Shoot Dates
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail denominations needed ($100s, $50s), distress aging requests, or target call-sheet delivery dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#EAE3DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1414] placeholder-[#BDB8B0] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-[#E0533C] font-mono-code">
                  {error} You can also reach us directly on WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 white-gold-btn font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer font-mono-code border border-[#D4AF37]/50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'Transmitting Request...' : 'Submit Wholesale Inquiry'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
