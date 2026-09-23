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
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await saveEnquiry({
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
      console.error('Wholesale enquiry error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          B2B Studio &amp; Production Supply
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#F8F6F0]">
          WHOLESALE CINEMA PROP SUPPLY
        </h1>
        <p className="text-xs sm:text-sm text-[#B4C0BA] leading-relaxed">
          Supplying Australian film productions, television studios, streaming networks, commercial art departments, and law enforcement training academies with compliant reproduction currency.
        </p>
      </div>

      {/* 3 Tier Discount Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="luxury-card p-6 rounded-2xl space-y-4 border border-[#22302A]">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#C5A059] font-bold uppercase tracking-wider">
              Tier 1 · Studio Pack
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1C2A24] text-[11px] font-mono-code font-bold text-[#56C48B]">
              10% OFF
            </span>
          </div>
          <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            5 to 10 Bundles / Items
          </h3>
          <p className="text-xs text-[#9AA7A0] leading-relaxed">
            Ideal for indie short films, music videos, theatrical stage productions, and escape room installations.
          </p>
          <ul className="text-xs space-y-2 text-[#B4C0BA] pt-2 border-t border-[#1E2B25]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Compliant Australian bank straps</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Free Express AusPost delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Standard 24h dispatch time</span>
            </li>
          </ul>
        </div>

        <div className="luxury-card p-6 rounded-2xl space-y-4 border-2 border-[#C5A059] relative bg-gradient-to-b from-[#16231D] to-[#0E1513]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#C5A059] text-[#0D1512] font-mono-code text-[10px] font-black uppercase tracking-wider">
            Most Popular
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#C5A059] font-bold uppercase tracking-wider">
              Tier 2 · Series Production
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1C2A24] text-[11px] font-mono-code font-bold text-[#56C48B]">
              20% OFF
            </span>
          </div>
          <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            11 to 25 Bundles / Items
          </h3>
          <p className="text-xs text-[#9AA7A0] leading-relaxed">
            Formulated for episodic television dramas, feature film robbery sequences, and multi-location commercial shoots.
          </p>
          <ul className="text-xs space-y-2 text-[#B4C0BA] pt-2 border-t border-[#1E2B25]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Custom aged or distressed finish options</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Priority Melbourne studio packing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Full tax invoicing with ACN / GST</span>
            </li>
          </ul>
        </div>

        <div className="luxury-card p-6 rounded-2xl space-y-4 border border-[#22302A]">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono-code text-[#C5A059] font-bold uppercase tracking-wider">
              Tier 3 · Heist &amp; Vault Scale
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1C2A24] text-[11px] font-mono-code font-bold text-[#56C48B]">
              30% OFF
            </span>
          </div>
          <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            26+ Bundles / Full Vault Bricks
          </h3>
          <p className="text-xs text-[#9AA7A0] leading-relaxed">
            Full vault sets, armored truck props, locking flight cases, and long-term studio rental arrangements.
          </p>
          <ul className="text-xs space-y-2 text-[#B4C0BA] pt-2 border-t border-[#1E2B25]">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Direct art director consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Courier door-to-door hand delivery</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
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
            <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0]">
              REQUEST A PRODUCTION ESTIMATE
            </h3>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Our Melbourne fulfillment desk coordinates directly with line producers, prop masters, and art directors across Australia.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#C5A059]" />
              <div className="text-xs">
                <span className="font-bold text-[#F8F6F0] block">Priority Australia Post Express</span>
                <span className="text-[#9AA7A0]">Dispatched from Eltham VIC 3093 with mandatory signature.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#121A16] border border-[#22302A] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
              <div className="text-xs">
                <span className="font-bold text-[#F8F6F0] block">Crimes Currency Act S22 Certification</span>
                <span className="text-[#9AA7A0]">Includes formal compliance certificate for production legal teams.</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-[#141E1A] border border-[#25D366]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#25D366]">
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold text-xs font-mono-code uppercase tracking-wider">
                Urgent Shoot Date?
              </span>
            </div>
            <p className="text-xs text-[#9AA7A0]">
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
              className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 font-mono-code cursor-pointer"
            >
              <span>WhatsApp Production Hotline</span>
            </button>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121A16] border border-[#2C3E36] shadow-xl">
          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1C2A24] border-2 border-[#56C48B] flex items-center justify-center text-[#56C48B] mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                WHOLESALE INQUIRY RECEIVED
              </h3>
              <p className="text-xs text-[#B4C0BA] max-w-sm mx-auto leading-relaxed">
                Thank you. Our studio dispatch desk has registered your project requirements. A producer will contact you within 4 business hours with bulk pricing.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-[#1C2A24] text-xs font-mono-code text-[#C5A059] rounded-lg border border-[#2C3E36]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0] mb-2">
                Production Inquiry Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Production Company / Studio
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Melbourne Pictures Pty Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="producer@studio.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#C5A059] focus:outline-none"
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
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                  >
                    <option>5–10 Bundles (Tier 1)</option>
                    <option>11–25 Bundles (Tier 2)</option>
                    <option>26+ Bundles / Full Bricks (Tier 3)</option>
                    <option>Turnkey Briefcase Kits</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                  Production Notes &amp; Shoot Dates
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail denominations needed ($100s, $50s), distress aging requests, or target call-sheet delivery dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer font-mono-code"
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
