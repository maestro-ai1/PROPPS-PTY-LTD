// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE, CONTACT, CATEGORIES } from '../config/site.js';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0507] text-[#C5BDBA] border-t-2 border-[#29171D] pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#29171D]">
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
            <p className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>Navigation</span>
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Home Page</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Shop Props</span>
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Prop Videos Showcase</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#00b67a] text-white text-[9px] font-mono-code font-bold">4K</span>
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Wholesale &amp; Bulk Quotes</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">About Our Mission</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Production Blog &amp; Tutorials</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Shop Categories */}
          <div>
            <p className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>Shop Categories</span>
            </p>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/shop/${cat.slug}`}
                    className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Information */}
          <div>
            <p className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]"></span>
              <span>Information</span>
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shipping-policy" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Shipping Policy</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Express</span>
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Refund Policy</span>
                  <span className="text-[10px] font-mono-code text-[#00E599]">30-Day ACL</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Cth 1988</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#D4AF37] transition-colors text-left w-full flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Terms &amp; Conditions</span>
                  <span className="text-[10px] font-mono-code text-[#A69C9F]">Statutory</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-[#29171D]">
                <Link href="/compliance" className="hover:text-[#D4AF37] transition-colors text-left w-full text-[11px] text-[#A69C9F] block">
                  RBA Specimen Guidelines
                </Link>
              </li>
              <li>
                <Link href="/#reviews-section" className="hover:text-[#00b67a] transition-colors flex items-center justify-between w-full text-left text-[11px] text-[#00b67a]">
                  <span>Verified Trustpilot Reviews</span>
                  <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#00b67a]/20 border border-[#00b67a]/40 font-bold">4.7 ★</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Order Rules & Dispatch */}
          <div>
            <p className="font-serif-luxury text-xs font-bold text-[#F8F6F0] tracking-wider uppercase mb-3.5">
              Order &amp; Delivery Rules
            </p>
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
