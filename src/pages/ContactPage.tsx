// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';
import { saveEnquiry } from '../lib/enquiryStore.js';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        type: 'contact',
        subject: formData.subject || `General Inquiry from ${formData.name}`,
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#1E2B25] pb-6 space-y-2 text-center">
        <span className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Melbourne Fulfillment Desk
        </span>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F8F6F0]">
          CONTACT {SITE.name}
        </h1>
        <p className="text-xs sm:text-sm text-[#9AA7A0] max-w-2xl mx-auto leading-relaxed">
          Connect with our production dispatch team for order status, custom film props, bulk studio invoices, or legal compliance documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info & Studio Location */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] space-y-4">
            <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
              Melbourne Studio &amp; Dispatch Facility
            </h3>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              All orders are packaged in discreet tamper-evident packaging and dispatched with signature on delivery directly from our Melbourne warehouse.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono-code text-[#B4C0BA]">
              <div className="flex items-start gap-3 p-3 bg-[#0D1512] rounded-xl border border-[#22302A]">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Victorian Headquarters</strong>
                  <span>Suite 4, 95 Main Road, Eltham, VIC 3093, Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#0D1512] rounded-xl border border-[#22302A]">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Dispatch Email</strong>
                  <span dangerouslySetInnerHTML={{ __html: CONTACT.email }} />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-[#141E1A] border border-[#25D366]/30 space-y-3">
            <div className="flex items-center gap-2 text-[#25D366]">
              <MessageCircle className="w-5 h-5" />
              <h4 className="font-bold text-xs font-mono-code uppercase tracking-wider">
                Instant WhatsApp Dispatch Support
              </h4>
            </div>
            <p className="text-xs text-[#9AA7A0] leading-relaxed">
              Need immediate confirmation for an urgent filming deadline? Message our dispatch desk on WhatsApp for live updates.
            </p>
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://wa.me/61400000000?text=Hello%20PROPPS%20PTY%20LTD,%20I%20have%20an%20inquiry%20regarding%20an%20order',
                  '_blank'
                )
              }
              className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 font-mono-code cursor-pointer"
            >
              <span>Launch WhatsApp Chat</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#121A16] border border-[#2C3E36] shadow-xl">
          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1C2A24] border-2 border-[#56C48B] flex items-center justify-center text-[#56C48B] mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                MESSAGE DISPATCHED
              </h3>
              <p className="text-xs text-[#B4C0BA] max-w-sm mx-auto leading-relaxed">
                Thank you for contacting {SITE.name}. Our dispatch coordinator will reply via email or phone shortly.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-[#1C2A24] text-xs font-mono-code text-[#C5A059] rounded-lg border border-[#2C3E36]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0] mb-2">
                Send an Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Evans"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Phone / Mobile *
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

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="liam@production.com.au"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Order dispatch, compliance paperwork, custom props..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our Melbourne team assist your production?"
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
                <span>{submitting ? 'Sending Message...' : 'Transmit Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
