import { NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS } from '../../../config/site.js';

export async function GET() {
  const categories = CATEGORIES.map((cat) => ({
    ...cat,
    productCount: PRODUCTS.filter((p) => p.category === cat.slug).length,
  }));
  return NextResponse.json(
    { categories },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
