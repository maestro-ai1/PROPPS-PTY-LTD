// src/components/Footer.tsx
import React from 'react';
import { Mail, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0A0507] text-[#C5BDBA] border-t-2 border-[#29171D] pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#29171D]">
          {/* Col 1: Brand & Headquarters */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#24131A] to-[#140C0F] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif-luxury font-bold">
                P
              </div>
              <span className="font-serif-luxury font-bold text-base text-[#F8F6F0]">
                {SITE.name}
              </span>
            </div>
            <p className="text-[11.5px] text-[#A69C9F] leading-relaxed">
              Australia's premier supplier of cinema-grade reproduction currency and prop cash for film, television, theatre, and training productions.
            </p>
            <div className="space-y-1 text-xs font-mono-code text-[#C5BDBA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Eltham, VIC 3093 Australia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span dangerouslySetInnerHTML={{ __html: CONTACT.email }} />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#00b67a]/15 border border-[#00b67a]/40 text-[#00E599] hover:bg-[#00b67a]/25 hover:text-white transition-all shadow-sm"
                  title="Verify PROPPS PTY LTD on Australian Business Register"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
                  <span className="font-bold tracking-wider">ABN: {SITE.abn}</span>
                  <ExternalLink className="w-3 h-3 text-[#00E599]" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>Navigation</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Home Page</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/shop')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Shop Props</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/videos')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Prop Videos Showcase</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#00b67a] text-white text-[9px] font-mono-code font-bold">4K</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/wholesale')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Wholesale &amp; Bulk Quotes</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Our Mission</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Production Blog &amp; Tutorials</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Information */}
          <div>
            <h5 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]"></span>
              <span>Information</span>
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/shipping-policy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Shipping Policy</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Express</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/refund-policy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Refund Policy</span>
                  <span className="text-[10px] font-mono-code text-[#00E599]">30-Day ACL</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy-policy')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Cth 1988</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/terms-and-conditions')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Terms &amp; Conditions</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Statutory</span>
                </button>
              </li>
              <li className="pt-2 border-t border-[#29171D]">
                <button
                  type="button"
                  onClick={() => onNavigate('/compliance')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left w-full text-[11px] text-[#A69C9F]"
                >
                  RBA Specimen Guidelines
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('/');
                    setTimeout(() => {
                      document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#00b67a] transition-colors flex items-center justify-between w-full cursor-pointer text-left text-[11px] text-[#00b67a]"
                >
                  <span>Verified Trustpilot Reviews</span>
                  <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#00b67a]/20 border border-[#00b67a]/40 font-bold">4.7 ★</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/admin')}
                  className="hover:text-[#D4AF37] transition-colors font-mono-code text-[#D4AF37] cursor-pointer text-left text-[11px]"
                >
                  Reply Portal Login →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Order Rules & Dispatch */}
          <div>
            <h5 className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5">
              Order &amp; Delivery Rules
            </h5>
            <div className="p-3.5 bg-[#140C0F] rounded-xl border border-[#2B181E] space-y-1.5 text-xs">
              <p className="font-mono-code text-[#D4AF37]">
                <strong>Minimum Order:</strong> $300 AUD
              </p>
              <p className="font-mono-code text-[#C5BDBA]">
                <strong>Free Express Shipping:</strong> $500+ AUD
              </p>
              <p className="font-mono-code text-[#FF8591]">
                <strong>Crypto Discount:</strong> 10% Off BTC / USDT
              </p>
              <p className="text-[11px] text-[#A69C9F] pt-1.5 border-t border-[#29171D]">
                Dispatched via Australia Post Express with end-to-end tracking, fast and safe delivery. Refunded if not satisfied.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#8C7D82] space-y-3 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</span>
            <span>·</span>
            <a
              href={`https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-[#00E599] hover:underline transition-colors flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]" />
              <span>ABN: {SITE.abn} (Active · Registered Melbourne VIC 3093)</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono-code">
            <span className="text-[#00E599]">VERIFIED CINEMA PROPS</span>
            <span>·</span>
            <span>AUSTRALIA WIDE EXPRESS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
