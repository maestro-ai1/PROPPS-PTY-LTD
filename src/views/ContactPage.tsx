// src/views/ContactPage.tsx
'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { SITE } from '../config/site.js';
import { saveEnquiry } from '../lib/enquiryStore.js';

const WHATSAPP_NUMBER = '+61420128746';
const PHONE_NUMBER = '+61420128746';

export const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await saveEnquiry({
        name: formData.name,
        email: formData.email,
        type: 'contact',
        subject: `Website message from ${formData.name}`,
        message: formData.message,
      });
      setSuccess(true);
    } catch (err) {
      console.error('Contact submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F6F0] text-center">
        CONTACT {SITE.name}
      </h1>

      {/* Contact methods */}
      <div className="space-y-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3.5 rounded-xl bg-[#141E1A] border border-[#25D366]/30 hover:border-[#25D366]/60 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
          <div>
            <span className="text-[10px] font-mono-code uppercase text-[#889690] block">WhatsApp</span>
            <span className="text-sm font-mono-code text-white font-semibold">{WHATSAPP_NUMBER}</span>
          </div>
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center gap-3 p-3.5 rounded-xl bg-[#121A16] border border-[#2C3E36] hover:border-[#C5A059]/60 transition-colors"
        >
          <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
          <div>
            <span className="text-[10px] font-mono-code uppercase text-[#889690] block">Direct Call</span>
            <span className="text-sm font-mono-code text-white font-semibold">{PHONE_NUMBER}</span>
          </div>
        </a>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#121A16] border border-[#2C3E36]">
          <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
          <div>
            <span className="text-[10px] font-mono-code uppercase text-[#889690] block">Email</span>
            <span className="text-sm font-mono-code text-[#889690]">Coming soon</span>
          </div>
        </div>
      </div>

      {/* Compact message form */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36]">
        {success ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle className="w-8 h-8 text-[#56C48B] mx-auto" />
            <p className="text-sm text-[#F8F6F0] font-semibold">Message sent</p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="text-xs font-mono-code text-[#C5A059] hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
            />
            <textarea
              rows={3}
              required
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2 font-mono-code"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
