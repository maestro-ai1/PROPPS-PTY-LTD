import { NextResponse } from 'next/server';
import { SITE } from '../../../config/site.js';

export async function GET() {
  const base = `https://${SITE.domain}`;
  return NextResponse.json(
    {
      issuer: base,
      authorization_endpoint: null,
      token_endpoint: null,
      jwks_uri: null,
      grant_types_supported: [],
      response_types_supported: [],
      scopes_supported: [],
      note: `${SITE.name} has no protected APIs. All resources publicly accessible.`,
      public_resources: [
        `${base}/shop/`,
        `${base}/blog/`,
        `${base}/faq/`,
        `${base}/wholesale/`,
        `${base}/compliance/`,
        `${base}/llms.txt`,
        `${base}/api/products`,
        `${base}/api/categories`,
        `${base}/api/search`,
        `${base}/api/mcp`,
        `${base}/.well-known/api-catalog`,
        `${base}/.well-known/agent-skills/index.json`,
        `${base}/.well-known/mcp/server-card.json`,
      ],
      agent_auth: {
        register_uri: null,
        identity_types_supported: ['none'],
        credential_types_supported: ['none'],
        notes: 'No registration required. All content publicly accessible to agents.',
      },
    },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
