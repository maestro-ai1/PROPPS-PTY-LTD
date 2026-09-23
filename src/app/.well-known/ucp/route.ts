import { NextResponse } from 'next/server';
import { SITE, SHOP } from '../../../config/site.js';

export async function GET() {
  const base = `https://${SITE.domain}`;
  return NextResponse.json(
    {
      ucp: '1.0',
      protocol_version: '1.0',
      spec: 'https://ucp.dev/specification/overview/',
      schema: 'https://ucp.dev/schema/v1.json',
      site: base,
      name: SITE.name,
      description: SITE.tagline,
      services: [
        { id: 'product-catalog', type: 'catalog', url: `${base}/shop/`, description: 'Australian cinema prop money catalog' },
        { id: 'mcp-server', type: 'mcp', url: `${base}/api/mcp`, description: 'MCP tools server (search, product lookup, categories, policies, order drafting)' },
        { id: 'order', type: 'commerce', url: 'https://wa.me/61420128746', description: 'Place orders via WhatsApp or Email form' },
        { id: 'wholesale', type: 'b2b', url: `${base}/wholesale/`, description: 'B2B studio wholesale supply' },
      ],
      capabilities: ['browse', 'search', 'inquiry', 'wholesale', 'content', 'mcp'],
      endpoints: {
        mcp: `${base}/api/mcp`,
        catalog: `${base}/shop/`,
        contact: `${base}/contact/`,
        agent_skills: `${base}/.well-known/agent-skills/index.json`,
        mcp_server_card: `${base}/.well-known/mcp/server-card.json`,
        api_catalog: `${base}/.well-known/api-catalog`,
        llms_txt: `${base}/llms.txt`,
      },
      currency: SITE.currency,
      minimum_order_usd: SHOP.minOrder,
      payment_methods: ['bank-transfer', 'payid', 'crypto-BTC', 'crypto-USDT', 'crypto-ETH'],
      legal: {
        age_restriction: '18+',
        product_type: 'Cinema Reproduction Currency',
        compliance: 'Crimes (Currency) Act 1981 Section 22',
      },
    },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
