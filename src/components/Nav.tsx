// src/components/Nav.tsx
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ShieldCheck, Lock, ChevronDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SITE, CATEGORIES } from '../config/site.js';

interface NavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Nav: React.FC<NavProps> = ({
  currentPath,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0C]/98 backdrop-blur-md border-b border-[#2C2822] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Gold & White Seal Emblem */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1C1A14] to-[#0A0A0B] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:border-white transition-colors relative overflow-hidden">
              <span className="font-serif-luxury font-black text-xl gold-gradient-text tracking-tighter">
                P
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent pointer-events-none" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-luxury font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-[#D4AF37] transition-colors">
                  {SITE.name}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono-code font-bold bg-[#D4AF37] text-[#0A0A0B] shadow-sm">
                  AU PROP
                </span>
              </div>
              <p className="text-[10px] font-mono-code text-[#D4AF37] tracking-widest uppercase">
                AUSTRALIAN CINEMA CURRENCY · VIC 3093
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links: HOME, SHOP, VIDEOS, BLOG, FAQ */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-mono-code" aria-label="Main navigation">
            {/* 1. HOME */}
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 cursor-pointer ${
                currentPath === '/'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              HOME
            </button>

            {/* 2. SHOP with Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => handleNavClick('/shop')}
                className={`flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 cursor-pointer ${
                  currentPath.startsWith('/shop')
                    ? 'text-[#D4AF37] border-[#D4AF37]'
                    : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
                }`}
              >
                <span>SHOP</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 mt-2 bg-[#141417] border border-[#2C2822] rounded-xl shadow-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 border-b border-[#23211D] mb-1 flex items-center justify-between">
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#D4AF37]">
                    Australian Prop Categories
                  </span>
                  <span className="text-[9px] font-mono-code text-[#00b67a] font-bold">100% LEGAL</span>
                </div>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleNavClick(`/shop/${cat.slug}`)}
                    className="w-full text-left p-2 rounded-lg hover:bg-[#1E1E24] transition-colors flex flex-col cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-white">{cat.name}</span>
                    <span className="text-[10px] text-[#A8A49D] truncate">{cat.description}</span>
                  </button>
                ))}
                <div className="pt-1.5 mt-1 border-t border-[#23211D]">
                  <button
                    type="button"
                    onClick={() => handleNavClick('/shop')}
                    className="w-full text-center py-1 text-[11px] font-bold text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    View All Cinema Prop Catalog →
                  </button>
                </div>
              </div>
            </div>

            {/* 3. VIDEOS */}
            <button
              type="button"
              onClick={() => handleNavClick('/videos')}
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 cursor-pointer ${
                currentPath === '/videos'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              VIDEOS
            </button>

            {/* 4. BLOG (also matches GLOG / Guides) */}
            <button
              type="button"
              onClick={() => handleNavClick('/blog')}
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 cursor-pointer ${
                currentPath.startsWith('/blog') || currentPath.startsWith('/glog')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
              title="Production Blog & Compliance Tutorials"
              data-glog="true"
            >
              BLOG
            </button>

            {/* 5. FAQ */}
            <button
              type="button"
              onClick={() => handleNavClick('/faq')}
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 cursor-pointer ${
                currentPath === '/faq'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Action Icons: Search, Cart, Admin Reply Portal, Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-[#C5BDBA] hover:text-[#D4AF37] rounded-lg hover:bg-[#1A1014] transition-colors focus:outline-none cursor-pointer"
              aria-label="Search prop products"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Admin Portal Quick Link */}
            <button
              type="button"
              onClick={() => handleNavClick('/admin')}
              className={`p-1.5 px-2.5 rounded-lg border text-xs font-mono-code flex items-center gap-1.5 transition-colors cursor-pointer ${
                currentPath.startsWith('/admin')
                  ? 'bg-[#29171D] border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-[#140D10] border-[#38242A] text-[#A69C9F] hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
              }`}
              title="Admin Reply Portal"
              aria-label="Admin Reply Portal"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[10.5px] font-bold">PORTAL</span>
            </button>

            {/* Cart Trigger with luxury Gold & White style */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 px-3 white-gold-btn font-bold rounded-xl shadow-lg border border-[#D4AF37]/50 transition-all flex items-center gap-2 focus:outline-none cursor-pointer"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5] text-[#0A0A0B]" />
              <span className="font-mono-code text-xs font-black bg-[#0A0A0B] text-[#D4AF37] border border-[#D4AF37]/40 px-1.5 py-0.2 rounded-full min-w-[20px] text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#C5BDBA] hover:text-white rounded-lg focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Official Commonwealth ABN & ABR Verification Strip under Navigation (Verified Green & Gold Theme) */}
      <div className="bg-[#07130E] border-t border-b border-[#143828] py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4 text-xs">
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
            {/* Clickable VERIFY ON ABR in Green Verified Style */}
            <a
              href={`https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00b67a]/20 hover:bg-[#00b67a]/30 text-[#00E599] hover:text-white border border-[#00b67a]/60 hover:border-[#00E599] font-mono-code text-[10.5px] font-bold uppercase tracking-wider transition-all shadow-sm group cursor-pointer"
              title="Verify PROPPS PTY LTD on the official Australian Business Register (abr.business.gov.au)"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599] group-hover:scale-110 transition-transform" />
              <span>VERIFY ON ABR</span>
              <ExternalLink className="w-3 h-3 text-[#00E599] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* ABN Display in Verified Green */}
            <div className="flex items-center gap-1.5 font-mono-code text-[11.5px]">
              <span className="text-[#8FB3A1] font-medium">ABN:</span>
              <a
                href={`https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00E599] hover:text-[#FFF] tracking-widest transition-colors select-all"
                title="Click to view registration on Australian Business Register"
              >
                {SITE.abn}
              </a>
            </div>

            <span className="hidden sm:inline-block text-[#1C4A34]">•</span>
            <span className="hidden sm:inline-block text-[11px] text-[#A7D1BD]">
              <strong className="text-[#F8F6F0] font-semibold">{SITE.name}</strong> · Active Australian Proprietary Company
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10.5px] font-mono-code text-[#00E599]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00b67a] shadow-[0_0_8px_#00b67a] animate-pulse"></span>
            <span className="font-semibold">Registered in Victoria (VIC 3093) · Verified</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120A0D] border-b border-[#38242A] px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
          <div className="p-2 border-b border-[#29171D] flex items-center justify-between">
            <span className="text-xs font-mono-code text-[#D4AF37] font-bold uppercase tracking-wider">
              Navigation Menu
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono-code text-[#00b67a]">
              <ShieldCheck className="w-3 h-3" />
              <span>100% Legal Specimen</span>
            </div>
          </div>

          {/* 1. HOME */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              currentPath === '/' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            HOME
          </button>

          {/* 2. SHOP */}
          <button
            type="button"
            onClick={() => handleNavClick('/shop')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              currentPath.startsWith('/shop') ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            SHOP
          </button>

          {/* Subcategories list on mobile */}
          <div className="pl-4 space-y-1 border-l-2 border-[#38242A]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleNavClick(`/shop/${cat.slug}`)}
                className="w-full text-left py-1 text-xs text-[#A69C9F] hover:text-[#D4AF37]"
              >
                • {cat.name}
              </button>
            ))}
          </div>

          {/* 3. VIDEOS */}
          <button
            type="button"
            onClick={() => handleNavClick('/videos')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              currentPath === '/videos' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            VIDEOS
          </button>

          {/* 4. BLOG */}
          <button
            type="button"
            onClick={() => handleNavClick('/blog')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              currentPath.startsWith('/blog') || currentPath.startsWith('/glog')
                ? 'bg-[#29171D] text-[#D4AF37]'
                : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            BLOG
          </button>

          {/* 5. FAQ */}
          <button
            type="button"
            onClick={() => handleNavClick('/faq')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              currentPath === '/faq' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            FAQ
          </button>

          {/* Mobile Reviews link & Secondary Navigation */}
          <div className="pt-2 border-t border-[#29171D] space-y-1.5">
            {/* Mobile ABR Verified Badge */}
            <a
              href={`https://abr.business.gov.au/ABN/View?id=${SITE.abn.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#07130E] border border-[#00b67a]/40 text-[#00E599] flex items-center justify-between text-xs font-mono-code transition-all"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E599]" />
                <div>
                  <div className="font-bold">VERIFIED ON ABR</div>
                  <div className="text-[10px] text-[#A7D1BD]">ABN: {SITE.abn} · Active</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#00E599]" />
            </a>

            <button
              type="button"
              onClick={() => {
                handleNavClick('/');
                setTimeout(() => {
                  document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 120);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#00b67a] hover:bg-[#1A1014] flex items-center justify-between"
            >
              <span>Verified Trustpilot Reviews</span>
              <span className="text-xs px-2 py-0.5 rounded font-mono-code bg-[#00b67a]/20 text-[#00b67a] border border-[#00b67a]/40 font-bold">
                4.7 ★
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/wholesale')}
              className="w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              Wholesale Studio &amp; B2B
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/compliance')}
              className="w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              RBA Specimen Guidelines
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/about')}
              className="w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              About PROPPS PTY LTD
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className="w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              Contact Melbourne Dispatch
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('/admin')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#D4AF37] bg-[#1A1014] border border-[#D4AF37]/40 flex items-center justify-between"
          >
            <span>Passcode Reply Portal</span>
            <Lock className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>
      )}
    </header>
  );
};
