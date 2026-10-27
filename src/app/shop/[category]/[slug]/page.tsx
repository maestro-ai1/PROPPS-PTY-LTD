import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE, PRODUCTS, PRODUCT_FAQS, PRODUCT_SEO } from '../../../../config/site.js';
import { JsonLd } from '../../../../components/JsonLd.js';
import { ProductDetailContent } from '../../../../views/ProductDetailPage.js';
import { RelatedBlocks } from '../../../../components/RelatedBlocks.js';

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

  const label = product.name.replace(/ For Sale$/i, '');
  const seo = PRODUCT_SEO[product.slug];
  const what = seo?.what ?? label;
  const title = seo?.title ?? `${product.name} | Buy Online Australia`;
  const description = `Buy ${what} online from $${product.price} AUD. Specimen-marked, Express Post from Melbourne, free delivery over $500, orders from $300.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      locale: 'en_AU',
      title,
      description,
      images: [{ url: image, alt: product.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { category, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  return (
    <>
      <JsonLd type="product" data={product} />
      {PRODUCT_FAQS[product.slug] && <JsonLd type="faq" data={PRODUCT_FAQS[product.slug]} />}
      <ProductDetailContent product={product} />
      <RelatedBlocks hostHref={`/shop/${product.category}/${product.slug}/`} kind="product" slug={product.slug} />
    </>
  );
}
