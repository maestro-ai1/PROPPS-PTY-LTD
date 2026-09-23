import React from 'react';
import { JsonLd } from '../components/JsonLd.js';
import { HomeContent } from '../views/HomePage.js';

export default function Page() {
  return (
    <>
      <JsonLd type="homepage" />
      <HomeContent />
    </>
  );
}
