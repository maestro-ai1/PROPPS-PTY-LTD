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

  return {
    title: cat.seoTitle ?? cat.name,
    description: cat.seoDescription ?? cat.description,
    alternates: { canonical: `https://${SITE.domain}/shop/${cat.slug}/` },
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
