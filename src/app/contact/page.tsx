import type { Metadata } from 'next';
import React from 'react';
import { JsonLd } from '../../components/JsonLd.js';
import { SITE } from '../../config/site.js';
import { ContactContent } from '../../views/ContactPage.js';

export const metadata: Metadata = {
  title: 'Contact Melbourne Dispatch Desk',
  description:
    'Contact PROPPS PTY LTD in Eltham, Melbourne VIC for order status, custom film props, bulk studio invoices, or compliance documentation.',
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
