import type { MetadataRoute } from 'next';
import { SITE, CATEGORIES, PRODUCTS, POSTS } from '../config/site.js';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  // Real content dates (never build time): pages edited in the 2026-10-12 SEO pass vs untouched pages.
  const edited = new Date('2026-10-12');
  const stable = new Date('2026-09-24');
  const alt = (path: string) => ({ languages: { 'en-AU': `${base}${path}`, 'x-default': `${base}${path}` } });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: edited, changeFrequency: 'weekly', priority: 1 , alternates: alt('/') },
    { url: `${base}/shop/`, lastModified: edited, changeFrequency: 'weekly', priority: 0.9 , alternates: alt('/shop/') },
    { url: `${base}/about/`, lastModified: edited, changeFrequency: 'monthly', priority: 0.6 , alternates: alt('/about/') },
    { url: `${base}/faq/`, lastModified: stable, changeFrequency: 'monthly', priority: 0.6 , alternates: alt('/faq/') },
    { url: `${base}/contact/`, lastModified: edited, changeFrequency: 'monthly', priority: 0.5 , alternates: alt('/contact/') },
    { url: `${base}/wholesale/`, lastModified: stable, changeFrequency: 'monthly', priority: 0.7 , alternates: alt('/wholesale/') },
    { url: `${base}/blog/`, lastModified: edited, changeFrequency: 'weekly', priority: 0.6 , alternates: alt('/blog/') },
    { url: `${base}/videos/`, lastModified: stable, changeFrequency: 'monthly', priority: 0.5 , alternates: alt('/videos/') },
    { url: `${base}/compliance/`, lastModified: stable, changeFrequency: 'yearly', priority: 0.5 , alternates: alt('/compliance/') },
    { url: `${base}/shipping-policy/`, lastModified: stable, changeFrequency: 'yearly', priority: 0.3 , alternates: alt('/shipping-policy/') },
    { url: `${base}/refund-policy/`, lastModified: stable, changeFrequency: 'yearly', priority: 0.3 , alternates: alt('/refund-policy/') },
    { url: `${base}/privacy-policy/`, lastModified: stable, changeFrequency: 'yearly', priority: 0.3 , alternates: alt('/privacy-policy/') },
    { url: `${base}/terms-and-conditions/`, lastModified: stable, changeFrequency: 'yearly', priority: 0.3 , alternates: alt('/terms-and-conditions/') },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${base}/shop/${cat.slug}/`,
    lastModified: edited,
    alternates: alt(`/shop/${cat.slug}/`),
    changeFrequency: 'weekly',
    priority: 0.8,
    images: [`${base}/images/categories/${cat.image}`],
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/shop/${p.category}/${p.slug}/`,
    lastModified: edited,
    alternates: alt(`/shop/${p.category}/${p.slug}/`),
    changeFrequency: 'weekly',
    priority: 0.7,
    images: p.images.map((img) => `${base}/images/products/${img}`),
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : stable,
    alternates: alt(`/blog/${post.slug}/`),
    changeFrequency: 'monthly',
    priority: 0.5,
    images: [`${base}/images/blog/${post.image}`],
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
