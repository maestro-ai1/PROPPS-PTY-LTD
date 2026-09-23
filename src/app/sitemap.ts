import type { MetadataRoute } from 'next';
import { SITE, CATEGORIES, PRODUCTS, POSTS } from '../config/site.js';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/shop/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/wholesale/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/videos/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/compliance/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/shipping-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/refund-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-and-conditions/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${base}/shop/${cat.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${base}/shop/${p.category}/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
