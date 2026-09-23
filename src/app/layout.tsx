import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../config/site.js';
import { AppProvider } from '../context/AppContext.js';
import { Nav } from '../components/Nav.js';
import { Footer } from '../components/Footer.js';
import { AnnouncementBar } from '../components/AnnouncementBar.js';
import { CartDrawerMount } from '../components/CartDrawerMount.js';
import { SearchModalMount } from '../components/SearchModalMount.js';
import './globals.css';

const siteUrl = `https://${SITE.domain}`;

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
    <html lang="en-AU">
      <head>
        <link rel="api-catalog" href="/.well-known/api-catalog" />
        <link rel="describedby" href="/llms.txt" />
        <link rel="service-desc" href="/.well-known/mcp/server-card.json" />
        <link rel="auth" href="/auth.md" />

        {/* TODO(follow-up): self-host these woff2 files per WebForge performance
            standard instead of a Google Fonts <link> — tracked as a known
            residual item from the Next.js migration, not fixed in this pass. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

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
        </AppProvider>
      </body>
    </html>
  );
}
