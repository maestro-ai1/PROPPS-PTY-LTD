// src/components/JsonLd.tsx
import React from 'react';
import { SITE, BRAND, PRODUCTS, CATEGORIES, FAQ, SHOP } from '../config/site.js';

interface JsonLdProps {
  type: 'homepage' | 'product' | 'category' | 'faq' | 'about' | 'wholesale' | 'article' | 'breadcrumb' | 'page';
  data?: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schema: any = null;

  if (type === 'homepage') {
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Store', 'Organization', 'LocalBusiness'],
          '@id': `https://${SITE.domain}/#organization`,
          name: SITE.name,
          description: BRAND.description,
          url: `https://${SITE.domain}/`,
          foundingDate: BRAND.foundingYear,
          foundingLocation: {
            '@type': 'Place',
            name: BRAND.foundingLocation,
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Suite 4, 95 Main Road',
            addressLocality: 'Eltham',
            addressRegion: 'VIC',
            postalCode: '3093',
            addressCountry: 'AU',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Australia',
          },
          numberOfItems: PRODUCTS.length,
          knowsAbout: [
            'Australian Prop Money',
            'Cinema Reproduction Currency',
            'Film Production Props',
            'Television Studio Cash Props',
            'Theatrical Stage Currency',
            'RBA Reproduction Currency Guidelines',
          ],
          priceRange: '$$',
          brand: {
            '@type': 'Brand',
            name: SITE.name,
          },
          makesOffer: {
            '@type': 'AggregateOffer',
            priceCurrency: SITE.currency,
            lowPrice: Math.min(...PRODUCTS.map((p) => p.price)),
            highPrice: Math.max(
              ...PRODUCTS.flatMap((p) => (p.bundles ? p.bundles.map((b) => b.price) : [p.price]))
            ),
            offerCount: PRODUCTS.length,
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.7',
            bestRating: '5',
            worstRating: '1',
            ratingCount: '184',
            reviewCount: '184',
          },
        },
        {
          // No SearchAction here: there is no real /search/ route on this
          // site (search is a client-side modal, not a URL) — emitting
          // SearchAction without one is exactly the "capability lie"
          // WebForge Rule 10 bans.
          '@type': 'WebSite',
          '@id': `https://${SITE.domain}/#website`,
          url: `https://${SITE.domain}/`,
          name: SITE.name,
          description: SITE.tagline,
        },
        {
          '@type': 'FAQPage',
          '@id': `https://${SITE.domain}/#faq`,
          mainEntity: FAQ.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };
  } else if (type === 'product' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name,
      description: data.description,
      sku: data.slug,
      image: data.images?.[0] ? `https://${SITE.domain}/images/products/${data.images[0]}` : undefined,
      brand: {
        '@type': 'Brand',
        name: SITE.name,
      },
      offers: data.bundles
        ? {
            '@type': 'AggregateOffer',
            lowPrice: Math.min(...data.bundles.map((b: { price: number }) => b.price)),
            highPrice: Math.max(...data.bundles.map((b: { price: number }) => b.price)),
            priceCurrency: SITE.currency,
            offerCount: data.bundles.length,
            availability: 'https://schema.org/InStock',
            url: `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
            seller: { '@type': 'Organization', name: SITE.name },
          }
        : {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: SITE.currency,
            availability: 'https://schema.org/InStock',
            url: `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
            seller: { '@type': 'Organization', name: SITE.name },
          },
      category: data.category,
    };
  } else if (type === 'faq') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  } else if (type === 'about') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${SITE.name}`,
      url: `https://${SITE.domain}/about/`,
      mainEntity: {
        '@type': 'Organization',
        '@id': `https://${SITE.domain}/#organization`,
        name: SITE.name,
        description: BRAND.description,
        foundingDate: BRAND.foundingYear,
        foundingLocation: { '@type': 'Place', name: BRAND.foundingLocation },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Suite 4, 95 Main Road',
          addressLocality: 'Eltham',
          addressRegion: 'VIC',
          postalCode: '3093',
          addressCountry: 'AU',
        },
        sameAs: BRAND.sameAs,
      },
    };
  } else if (type === 'category' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: data.name,
      description: data.description,
      url: `https://${SITE.domain}/shop/${data.slug}/`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: (data.products || []).map((p: (typeof PRODUCTS)[number], idx: number) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
          name: p.name,
        })),
      },
    };
  } else if (type === 'article' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.excerpt,
      image: data.image ? `https://${SITE.domain}/images/blog/${data.image}` : undefined,
      datePublished: data.date,
      articleSection: data.category,
      author: { '@type': 'Organization', name: SITE.name },
      publisher: { '@type': 'Organization', name: SITE.name },
      mainEntityOfPage: `https://${SITE.domain}/blog/${data.slug}/`,
    };
  } else if (type === 'breadcrumb' && data) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (data as Array<{ name: string; href: string }>).map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: `https://${SITE.domain}${item.href}`,
      })),
    };
  } else if (type === 'page' && data) {
    const pageUrl = `https://${SITE.domain}${data.path}`;
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': data.kind || 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: data.name,
          inLanguage: 'en-AU',
          isPartOf: { '@id': `https://${SITE.domain}/#website` },
          about: { '@id': `https://${SITE.domain}/#organization` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
            { '@type': 'ListItem', position: 2, name: data.name, item: pageUrl },
          ],
        },
      ],
    };
  } else if (type === 'wholesale') {    schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Wholesale cinema prop currency supply',
      provider: {
        '@type': 'Organization',
        name: SITE.name,
        url: `https://${SITE.domain}/`,
      },
      areaServed: 'AU',
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Film, television, and theatrical production companies',
      },
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
