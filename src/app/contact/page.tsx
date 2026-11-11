import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ContactContent } from '../../views/ContactPage.js';
import { PageTopics } from '../../components/PageTopics.js';
import { NextSteps } from '../../components/NextSteps.js';

export const metadata: Metadata = {
  title: { absolute: 'Prop Shop Melbourne: Contact PROPPS for Quotes' },
  description:
    'Prop shop Melbourne for prop money quotes and trade orders: contact PROPPS in Eltham. Replies by form, WhatsApp or email. Studio invoices welcome.',
  alternates: { canonical: `https://${SITE.domain}/contact/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'ContactPage', name: 'Contact PROPPS PTY LTD', path: '/contact/' }} />
      <ContactContent />
      <PageTopics target="/contact" name="our Melbourne prop shop" />
      <NextSteps />
    </>
  );
}
