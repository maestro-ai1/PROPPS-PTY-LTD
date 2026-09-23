import { SITE } from '../../../config/site.js';

export async function GET() {
  const base = `https://${SITE.domain}`;
  const body = {
    linkset: [
      {
        anchor: `${base}/`,
        'https://www.iana.org/assignments/link-relations/service-doc': [{ href: `${base}/faq/` }],
        title: `${SITE.name} — ${SITE.tagline}`,
      },
      { anchor: `${base}/shop/`, type: 'text/html', title: `${SITE.name} Product Catalog` },
      { anchor: `${base}/wholesale/`, type: 'text/html', title: `${SITE.name} Wholesale` },
      { anchor: `${base}/api/products`, type: 'application/json', title: `${SITE.name} Products API` },
      { anchor: `${base}/api/categories`, type: 'application/json', title: `${SITE.name} Categories API` },
      { anchor: `${base}/api/search`, type: 'application/json', title: `${SITE.name} Search API` },
      {
        anchor: `${base}/api/mcp`,
        type: 'application/json',
        'https://www.iana.org/assignments/link-relations/service-desc': [{ href: `${base}/.well-known/mcp/server-card.json` }],
        title: `${SITE.name} MCP Server`,
      },
    ],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
