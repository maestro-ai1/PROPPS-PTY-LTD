import { NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS, SITE } from '../../../config/site.js';

export async function GET() {
  const categories = CATEGORIES.map((cat) => ({
    ...cat,
    url: `https://${SITE.domain}/shop/${cat.slug}/`,
    productCount: PRODUCTS.filter((p) => p.category === cat.slug).length,
  }));
  return NextResponse.json(
    { categories },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
