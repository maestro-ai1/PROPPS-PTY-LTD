import { NextResponse } from 'next/server';
import { SITE, SHOP } from '@/config/site.js';

export async function GET() {
  const base = `https://${SITE.domain}`;
  return NextResponse.json(
    {
      services: [
        {
          id: 'product-catalog',
          type: 'catalog',
          url: `${base}/shop/`,
          description: 'Australian cinema prop money catalog',
        },
        {
          id: 'mcp-server',
          type: 'mcp',
          url: `${base}/api/mcp`,
          description: 'MCP tools server (search, product lookup, categories, policies, order drafting)',
        },
        {
          id: 'order',
          type: 'commerce',
          url: 'https://wa.me/61420128746',
          description: 'Place orders via WhatsApp or Email form',
        },
        {
          id: 'wholesale',
          type: 'b2b',
          url: `${base}/wholesale/`,
          description: 'B2B studio wholesale supply',
        },
      ],
      capabilities: ['browse', 'search', 'inquiry', 'wholesale', 'content', 'mcp'],
      currency: SITE.currency,
      minimum_order_usd: SHOP.minOrder,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    }
  );
}
