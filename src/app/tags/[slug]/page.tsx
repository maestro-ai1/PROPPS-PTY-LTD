import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE } from '../../../config/site.js';
import { TAGS, tagBySlug } from '../../../config/tags.js';
import { JsonLd } from '../../../components/JsonLd.js';
import { TagContent } from '../../../views/TagPage.js';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return TAGS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = tagBySlug(slug);
  if (!tag) return {};
  const url = `https://${SITE.domain}/tags/${tag.slug}/`;
  const withBrand = `${tag.title} | PROPPS`;
  return {
    title: { absolute: withBrand.length <= 60 ? withBrand : tag.title },
    description: tag.desc,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, siteName: SITE.name, locale: 'en_AU', title: tag.title, description: tag.desc },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const tag = tagBySlug(slug);
  if (!tag) notFound();
  return (
    <>
      <JsonLd type="page" data={{ kind: 'CollectionPage', name: tag.title, path: `/tags/${tag.slug}/` }} />
      <TagContent tag={tag} />
    </>
  );
}
