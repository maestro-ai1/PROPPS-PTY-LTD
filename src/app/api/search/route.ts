import { NextResponse } from 'next/server';
import { PRODUCTS, SITE } from '../../../config/site.js';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase().trim() ?? '';
  const category = searchParams.get('category')?.toLowerCase().trim() ?? '';
  const maxPriceParam = searchParams.get('max_price');
  const maxPrice = maxPriceParam ? Number(maxPriceParam) : null;

  const results = PRODUCTS.filter((p) => {
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    const matchesCategory = !category || p.category.toLowerCase() === category;
    const matchesPrice = maxPrice === null || Number.isNaN(maxPrice) || p.price <= maxPrice;
    return matchesQuery && matchesCategory && matchesPrice;
  }).map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    price: p.price,
    currency: SITE.currency,
    shortDescription: p.shortDescription,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));

  return NextResponse.json(
    { query: { q, category, max_price: maxPrice }, count: results.length, results },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
