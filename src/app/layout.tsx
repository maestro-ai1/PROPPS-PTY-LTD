import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import React from 'react';
import { SITE } from '../config/site.js';
import { AppProvider } from '../context/AppContext.js';
import { Nav } from '../components/Nav.js';
import { Footer } from '../components/Footer.js';
import { AnnouncementBar } from '../components/AnnouncementBar.js';
import { CartDrawerMount } from '../components/CartDrawerMount.js';
import { SearchModalMount } from '../components/SearchModalMount.js';
import { WhatsAppLiveChat } from '../components/WhatsAppLiveChat.js';
import { ReviewPopup } from '../components/ReviewPopup.js';
import './globals.css';

const siteUrl = `https://${SITE.domain}`;

// Self-hosted via next/font/google: downloaded and served from our own
// domain at build time (no render-blocking third-party stylesheet request,
// no separate DNS/connection cost). Replaces the earlier Google Fonts
// <link> tag flagged in the Lighthouse performance audit.
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} | Australian Prop Money & Cinema Reproduction Currency`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Premium Australian prop money and cinema-grade reproduction currency for film, television, theatre, advertising, and training productions in Australia.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: SITE.name,
    locale: 'en_AU',
    images: ['/assets/propps-og-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${cinzel.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        <link rel="describedby" href="/llms.txt" />
        <link rel="service-desc" href="/.well-known/mcp/server-card.json" />
        <link rel="auth" href="/auth.md" />

        <script src="/js/webmcp.js" defer />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0b100e] text-[#e8ece9] antialiased selection:bg-[#c5a059] selection:text-[#0d1512]">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <AppProvider>
          <AnnouncementBar />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawerMount />
          <SearchModalMount />
          <WhatsAppLiveChat />
          <ReviewPopup />
        </AppProvider>
      </body>
    </html>
  );
}
