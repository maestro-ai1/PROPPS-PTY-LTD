import type { MetadataRoute } from 'next';
import { SITE } from '../config/site.js';

export default function robots(): MetadataRoute.Robots {
  const base = `https://${SITE.domain}`;
  const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Applebot',
    'Amazonbot',
    'Bytespider',
    'CCBot',
    'Google-Extended',
    'Meta-ExternalAgent',
    'cohere-ai',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you-order/', '/admin/'],
      },
      ...aiCrawlers.map((agent) => ({ userAgent: agent, allow: '/' })),
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
