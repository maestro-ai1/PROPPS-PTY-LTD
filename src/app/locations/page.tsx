import type { Metadata } from 'next';
import React from 'react';
import { SITE } from '../../config/site.js';
import { JsonLd } from '../../components/JsonLd.js';
import { LocationsHubContent } from '../../views/LocationPage.js';

export const metadata: Metadata = {
  title: { absolute: 'Prop Money Delivery Australia | Sydney, Melbourne, Brisbane' },
  description:
    'Prop money delivered across Australia: Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra and the Gold Coast by Australia Post Express. Orders from $150 AUD.',
  alternates: { canonical: `https://${SITE.domain}/locations/` },
};

export default function Page() {
  return (
    <>
      <JsonLd type="page" data={{ kind: 'CollectionPage', name: 'Prop Money Delivery Australia', path: '/locations/' }} />
      <LocationsHubContent />
    </>
  );
}
