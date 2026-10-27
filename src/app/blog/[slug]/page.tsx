import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { SITE, POSTS } from '../../../config/site.js';
import { JsonLd } from '../../../components/JsonLd.js';
import { BlogPostContent } from '../../../views/BlogPage.js';
import { RelatedBlocks } from '../../../components/RelatedBlocks.js';
import { autoLinkContent } from '../../../config/keyword-links.js';

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
  // Golden rule: title 60 or fewer (brand suffix only if it fits), meta 110-158 characters.
  const baseTitle = post.seoTitle ?? post.title;
  const withBrand = `${baseTitle} | PROPPS`;
  const seoTitle = withBrand.length <= 60 ? withBrand : baseTitle;
  const padded = post.excerpt.length >= 110 ? post.excerpt : `${post.excerpt} Practical guidance from PROPPS, the Melbourne prop currency studio.`;
  const seoDescription = padded.length > 158 ? `${padded.slice(0, 155).replace(/\s+\S*$/, '')}...` : padded;

  return {
    title: { absolute: seoTitle },
    description: seoDescription,
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
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd type="faq" data={post.faqs.map((f) => ({
            question: f.q,
            answer: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, ''),
          }))} />
      )}
      <BlogPostContent post={{ ...post, content: autoLinkContent(post.content, `/blog/${post.slug}/`) }} />
      <RelatedBlocks hostHref={`/blog/${post.slug}/`} kind="post" slug={post.slug} narrow />
    </>
  );
}
