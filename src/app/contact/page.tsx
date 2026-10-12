import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ContactContent } from '../../views/ContactPage.js';

export const metadata: Metadata = {
  title: { absolute: 'Contact PROPPS | Prop Money Quotes & Trade Orders' },
  description:
    'Request a prop money quote or trade order from PROPPS in Eltham, Melbourne. Replies by form, WhatsApp or email. Wholesale and studio invoices welcome.',
  alternates: { canonical: `https://${SITE.domain}/contact/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'ContactPage', name: 'Contact PROPPS PTY LTD', path: '/contact/' }} />
      <ContactContent />
    </>
  );
}
