// src/views/LocationPage.tsx
// City landing pages: /locations/ (hub) and /locations/<slug>/ (one Australian city, delivery and local copy, five FAQs).
import React from 'react';
import Link from 'next/link';
import { LOCATIONS, locationFaqs } from '../config/locations.js';
import { SITE } from '../config/site.js';
import { Breadcrumb } from '../components/Breadcrumb.js';

const LINK = 'text-[#D4AF37] underline hover:text-[#C5A059] transition-colors';
const CHIP = 'inline-block px-3 py-1.5 rounded-lg text-xs bg-[#F9F7F2] text-[#6F665F] border border-[#EAE3DC] hover:border-[#D4AF37]';
type Loc = (typeof LOCATIONS)[number];

export const LocationsHubContent: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
    <Breadcrumb items={[{ name: 'Delivery locations', href: '/locations' }]} />
    <header className="space-y-3 border-b border-[#EAE3DC] pb-6">
      <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">Prop Money Delivery Across Australia</h1>
      <p className="text-sm text-[#6F665F] leading-relaxed">
        PROPPS packs every order in Eltham, Melbourne and sends it by Australia Post Express with tracking and a signature on delivery. Pick your city below for local delivery notes, or browse the <Link href="/shop/" className={LINK}>full shop</Link>.
      </p>
    </header>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {LOCATIONS.map((l) => (
        <li key={l.slug} className="rounded-xl border border-[#EAE3DC] bg-white p-4 space-y-1">
          <h2 className="font-serif-luxury text-base font-bold text-[#1A1414]">
            <Link href={`/locations/${l.slug}/`} className="hover:text-[#D4AF37] transition-colors">Prop Money {l.city}</Link>
          </h2>
          <p className="text-xs text-[#6F665F] leading-relaxed">{l.lead.slice(0, 130).replace(/\s+\S*$/, '')}...</p>
        </li>
      ))}
    </ul>
  </div>
);

export const LocationContent: React.FC<{ loc: Loc }> = ({ loc }) => {
  const faqs = locationFaqs(loc);
  const others = LOCATIONS.filter((l) => l.slug !== loc.slug);
  const url = `https://${SITE.domain}/locations/${loc.slug}/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Prop money delivery to ${loc.city}`,
        serviceType: 'Prop money supply and delivery',
        provider: { '@id': `https://${SITE.domain}/#organization` },
        areaServed: { '@type': 'City', name: loc.city, containedInPlace: { '@type': 'AdministrativeArea', name: loc.state } },
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      },
    ],
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ name: 'Delivery locations', href: '/locations' }, { name: loc.city, href: `/locations/${loc.slug}` }]} />
      <header className="space-y-3 border-b border-[#EAE3DC] pb-6">
        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#1A1414] leading-tight">Prop Money {loc.city}: Australian Prop Notes Delivered to {loc.city}, {loc.state}</h1>
        <p className="text-sm text-[#6F665F] leading-relaxed">{loc.lead}</p>
      </header>

      <section className="space-y-3" aria-labelledby="loc-who">
        <h2 id="loc-who" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Film prop money {loc.city} productions and hosts order</h2>
        {loc.local.map((p) => (
          <p key={p.slice(0, 24)} className="text-sm text-[#6F665F] leading-relaxed">{p}</p>
        ))}
      </section>

      <section className="space-y-3" aria-labelledby="loc-buy">
        <h2 id="loc-buy" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Buy prop money {loc.city}: what to order</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-[#6F665F] leading-relaxed">
          <li><Link href="/shop/new-notes/" className={LINK}>Australian prop notes</Link> from $5 to $100, sold as starter stacks and bulk quantities.</li>
          <li><Link href="/shop/film-and-tv-props/" className={LINK}>Film and TV prop currency</Link> for scenes that need cash on camera.</li>
          <li><Link href="/shop/money-stacks/" className={LINK}>Ready money stacks</Link> and the <Link href="/shop/money-stacks/bulk-money-stack-pack/" className={LINK}>bulk stack pack</Link> for heist, bank and set dressing.</li>
          <li><Link href="/shop/photography-props/" className={LINK}>Photography prop sets</Link> and <Link href="/shop/event-and-party-props/" className={LINK}>event and party cash</Link>, including the <Link href="/shop/event-and-party-props/party-cash-cannon-kit/" className={LINK}>Party Cash Cannon Kit</Link>.</li>
        </ul>
      </section>

      <section className="space-y-3" aria-labelledby="loc-fake">
        <h2 id="loc-fake" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Fake money {loc.city}: prop notes for film, photos and parties</h2>
        <p className="text-sm text-[#6F665F] leading-relaxed">
          Plenty of {loc.city} buyers search for fake money when they mean prop money. PROPPS sells exactly that: realistic Australian prop notes for film, television, photography and events, each carrying specimen markings. If you are comparing sellers, read our guides to <Link href="/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/" className={LINK}>fake money vs prop money</Link> and <Link href="/blog/where-to-buy-prop-money-in-australia-legally/" className={LINK}>where to buy prop money in Australia</Link>.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="loc-delivery">
        <h2 id="loc-delivery" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Prop money delivery {loc.city}</h2>
        <p className="text-sm text-[#6F665F] leading-relaxed">{loc.order}</p>
        <p className="text-sm text-[#6F665F] leading-relaxed">
          Orders start at $150 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Larger productions can ask about <Link href="/wholesale/" className={LINK}>wholesale tiers of 10% to 30% off</Link>. See the <Link href="/shipping-policy/" className={LINK}>shipping policy</Link> and <Link href="/refund-policy/" className={LINK}>refund policy</Link>, or <Link href="/contact/" className={LINK}>contact the studio</Link> with your {loc.city} shoot dates.
        </p>
      </section>

      <section className="space-y-4" aria-labelledby="loc-faq">
        <h2 id="loc-faq" className="font-serif-luxury text-xl font-bold text-[#1A1414]">Prop money {loc.city} questions</h2>
        {faqs.map((f) => (
          <div key={f.question} className="space-y-1">
            <h3 className="font-serif-luxury text-base font-bold text-[#1A1414]">{f.question}</h3>
            <p className="text-sm text-[#6F665F] leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3 border-t border-[#EAE3DC] pt-6" aria-labelledby="loc-other">
        <h2 id="loc-other" className="font-serif-luxury text-base font-bold text-[#1A1414]">We also deliver to</h2>
        <ul className="flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/locations/${o.slug}/`} className={CHIP}>Prop money {o.city}</Link>
            </li>
          ))}
          <li><Link href="/locations/" className="inline-block px-3 py-1.5 rounded-lg text-xs text-[#D4AF37] underline">All locations</Link></li>
        </ul>
      </section>
    </div>
  );
};
