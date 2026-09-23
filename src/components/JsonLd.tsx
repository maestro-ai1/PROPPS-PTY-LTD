// src/components/JsonLd.tsx
import React, { useEffect } from 'react';
import { SITE, BRAND, PRODUCTS, CATEGORIES, FAQ, SHOP } from '../config/site.js';

interface JsonLdProps {
  type: 'homepage' | 'product' | 'category' | 'faq' | 'about' | 'wholesale';
  data?: any;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  let schema: any = null;

  if (type === 'homepage') {
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Store', 'Organization'],
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
          areaServed: ['AU'],
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
            lowPrice: 300,
            highPrice: 1850,
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
          '@type': 'WebSite',
          '@id': `https://${SITE.domain}/#website`,
          url: `https://${SITE.domain}/`,
          name: SITE.name,
          description: SITE.tagline,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `https://${SITE.domain}/search/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
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
      brand: {
        '@type': 'Brand',
        name: SITE.name,
      },
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: SITE.currency,
        availability: 'https://schema.org/InStock',
        url: `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
        seller: {
          '@type': 'Organization',
          name: SITE.name,
        },
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
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
