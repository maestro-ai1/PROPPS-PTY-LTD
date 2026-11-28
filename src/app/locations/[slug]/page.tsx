import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE } from '../../../config/site.js';
import { LOCATIONS, locationBySlug } from '../../../config/locations.js';
import { JsonLd } from '../../../components/JsonLd.js';
import { LocationContent } from '../../../views/LocationPage.js';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) return {};
  const url = `https://${SITE.domain}/locations/${loc.slug}/`;
  const title = `Prop Money ${loc.city} | Australian Prop Notes Delivered`;
  const description = `Buy prop money in ${loc.city}: realistic Australian prop notes for film, TV, photos and parties, sent by Express Post. Orders from $150 AUD.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, siteName: SITE.name, locale: 'en_AU', title, description },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) notFound();
  return (
    <>
      <JsonLd type="page" data={{ kind: 'WebPage', name: `Prop Money ${loc.city}`, path: `/locations/${loc.slug}/` }} />
      <LocationContent loc={loc} />
    </>
  );
}
