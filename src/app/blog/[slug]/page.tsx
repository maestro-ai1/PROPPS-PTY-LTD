import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE, POSTS } from '../../../config/site.js';
import { JsonLd } from '../../../components/JsonLd.js';
import { BlogPostContent } from '../../../views/BlogPage.js';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://${SITE.domain}/blog/${post.slug}/`;
  const image = `/images/blog/${post.image}`;

  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      siteName: SITE.name,
      locale: 'en_AU',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: image, alt: post.imageAlt ?? post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [image] },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd type="article" data={post} />
      <BlogPostContent post={post} />
    </>
  );
}
