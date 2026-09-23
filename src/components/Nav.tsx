// src/components/Nav.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Search, Menu, X, ShieldCheck, Lock, ChevronDown } from 'lucide-react';
import { SITE, CATEGORIES } from '../config/site.js';
import { useApp } from '../context/AppContext.js';

export const Nav: React.FC = () => {
  const pathname = usePathname() || '/';
  const { cartCount, openCart, openSearch } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0C]/98 backdrop-blur-md border-b border-[#2C2822] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Navigation Links: HOME, SHOP, VIDEOS, BLOG, FAQ */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-mono-code" aria-label="Main navigation">
            {/* 1. HOME */}
            <Link
              href="/"
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                pathname === '/'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              HOME
            </Link>

            {/* 2. SHOP with Dropdown */}
            <div className="relative group">
              <Link
                href="/shop"
                className={`flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                  pathname.startsWith('/shop')
                    ? 'text-[#D4AF37] border-[#D4AF37]'
                    : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
                }`}
              >
                <span>SHOP</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Mega Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 mt-2 bg-[#141417] border border-[#2C2822] rounded-xl shadow-2xl p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 border-b border-[#23211D] mb-1 flex items-center justify-between">
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#D4AF37]">
                    Australian Prop Categories
                  </span>
                  <span className="text-[9px] font-mono-code text-[#00b67a] font-bold">100% LEGAL</span>
                </div>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop/${cat.slug}`}
                    className="w-full text-left p-2 rounded-lg hover:bg-[#1E1E24] transition-colors flex flex-col"
                  >
                    <span className="text-xs font-semibold text-white">{cat.name}</span>
                    <span className="text-[10px] text-[#A8A49D] truncate">{cat.description}</span>
                  </Link>
                ))}
                <div className="pt-1.5 mt-1 border-t border-[#23211D]">
                  <Link
                    href="/shop"
                    className="block w-full text-center py-1 text-[11px] font-bold text-[#D4AF37] hover:underline"
                  >
                    View All Cinema Prop Catalog →
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. VIDEOS */}
            <Link
              href="/videos"
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                pathname === '/videos'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              VIDEOS
            </Link>

            {/* 4. BLOG (also matches GLOG / Guides) */}
            <Link
              href="/blog"
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                pathname.startsWith('/blog')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
              title="Production Blog & Compliance Tutorials"
            >
              BLOG
            </Link>

            {/* 5. FAQ */}
            <Link
              href="/faq"
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                pathname === '/faq'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              FAQ
            </Link>

            {/* 6. CONTACT */}
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-widest font-bold transition-all py-1.5 border-b-2 ${
                pathname === '/contact'
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-[#C5BDBA] border-transparent hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Action Icons: Search, Cart, Admin Reply Portal, Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={openSearch}
              className="p-2 text-[#C5BDBA] hover:text-[#D4AF37] rounded-lg hover:bg-[#1A1014] transition-colors focus:outline-none cursor-pointer"
              aria-label="Search prop products"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Admin Portal Quick Link */}
            <Link
              href="/admin"
              className={`p-1.5 px-2.5 rounded-lg border text-xs font-mono-code flex items-center gap-1.5 transition-colors ${
                pathname.startsWith('/admin')
                  ? 'bg-[#29171D] border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-[#140D10] border-[#38242A] text-[#A69C9F] hover:text-[#D4AF37] hover:border-[#D4AF37]/50'
              }`}
              title="Admin Reply Portal"
              aria-label="Admin Reply Portal"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[10.5px] font-bold">PORTAL</span>
            </Link>

            {/* Cart Trigger with luxury Gold & White style */}
            <button
              type="button"
              onClick={openCart}
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

          <Link
            href="/"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname === '/' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            HOME
          </Link>

          <Link
            href="/shop"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname.startsWith('/shop') ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            SHOP
          </Link>

          <div className="pl-4 space-y-1 border-l-2 border-[#38242A]">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                onClick={closeMobile}
                className="block w-full text-left py-1 text-xs text-[#A69C9F] hover:text-[#D4AF37]"
              >
                • {cat.name}
              </Link>
            ))}
          </div>

          <Link
            href="/videos"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname === '/videos' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            VIDEOS
          </Link>

          <Link
            href="/blog"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname.startsWith('/blog') ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            BLOG
          </Link>

          <Link
            href="/faq"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname === '/faq' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            onClick={closeMobile}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold font-mono-code transition-colors ${
              pathname === '/contact' ? 'bg-[#29171D] text-[#D4AF37]' : 'text-[#C5BDBA] hover:bg-[#1A1014]'
            }`}
          >
            CONTACT
          </Link>

          <div className="pt-2 border-t border-[#29171D] space-y-1.5">
            <Link
              href="/#reviews-section"
              onClick={closeMobile}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#00b67a] hover:bg-[#1A1014] flex items-center justify-between"
            >
              <span>Verified Trustpilot Reviews</span>
              <span className="text-xs px-2 py-0.5 rounded font-mono-code bg-[#00b67a]/20 text-[#00b67a] border border-[#00b67a]/40 font-bold">
                4.7 ★
              </span>
            </Link>

            <Link
              href="/wholesale"
              onClick={closeMobile}
              className="block w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              Wholesale Studio &amp; B2B
            </Link>

            <Link
              href="/compliance"
              onClick={closeMobile}
              className="block w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              RBA Specimen Guidelines
            </Link>

            <Link
              href="/about"
              onClick={closeMobile}
              className="block w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              About PROPPS PTY LTD
            </Link>

            <Link
              href="/contact"
              onClick={closeMobile}
              className="block w-full text-left px-3 py-1.5 text-xs text-[#A69C9F] hover:text-[#FFF]"
            >
              Contact Melbourne Dispatch
            </Link>
          </div>

          <Link
            href="/admin"
            onClick={closeMobile}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#D4AF37] bg-[#1A1014] border border-[#D4AF37]/40 flex items-center justify-between"
          >
            <span>Passcode Reply Portal</span>
            <Lock className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      )}
    </header>
  );
};
