import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE, CATEGORIES, PRODUCTS } from '../../../config/site.js';
import { JsonLd } from '../../../components/JsonLd.js';
import { ShopContent } from '../../../views/ShopPage.js';

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  const url = `https://${SITE.domain}/shop/${cat.slug}/`;
  const image = `/images/categories/${cat.image}`;

  return {
    title: cat.seoTitle ?? cat.name,
    description: cat.seoDescription ?? cat.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      locale: 'en_AU',
      title: cat.seoTitle ?? cat.name,
      description: cat.seoDescription ?? cat.description,
      images: [{ url: image, alt: cat.name }],
    },
    twitter: { card: 'summary_large_image', images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const products = PRODUCTS.filter((p) => p.category === cat.slug);

  return (
    <>
      <JsonLd type="category" data={{ ...cat, products }} />
      <ShopContent category={cat.slug} />
    </>
  );
}
