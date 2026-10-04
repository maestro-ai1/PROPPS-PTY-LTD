import { NextResponse } from 'next/server';
import { PRODUCTS, SITE } from '../../../config/site.js';

export async function GET() {
  const products = PRODUCTS.map((p) => ({
    ...p,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
    currency: SITE.currency,
  }));
  return NextResponse.json(
    { products },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
