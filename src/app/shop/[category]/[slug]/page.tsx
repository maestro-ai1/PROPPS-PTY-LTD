import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE, PRODUCTS } from '../../../../config/site.js';
import { JsonLd } from '../../../../components/JsonLd.js';
import { ProductDetailContent } from '../../../../views/ProductDetailPage.js';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) return {};
  const url = `https://${SITE.domain}/shop/${product.category}/${product.slug}/`;
  const image = `/images/products/${product.images[0]}`;

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      locale: 'en_AU',
      title: product.name,
      description: product.shortDescription,
      images: [{ url: image, alt: product.name }],
    },
    twitter: { card: 'summary_large_image', title: product.name, description: product.shortDescription, images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { category, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  return (
    <>
      <JsonLd type="product" data={product} />
      <ProductDetailContent product={product} />
    </>
  );
}
