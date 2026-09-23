import { NextResponse } from 'next/server';
import { SITE } from '../../../config/site.js';

// Route Handler instead of a static file in public/.well-known/ - Vercel's
// static-file server ignores the Content-Type override in vercel.json for
// extensionless files and serves them as application/octet-stream, which
// fails agent-readiness scanners expecting application/json. A Route
// Handler lets us set the header directly and have it actually take effect.
export async function GET() {
  const base = `https://${SITE.domain}`;
  return NextResponse.json(
    {
      resource: base,
      resource_name: `${SITE.name} Public Catalog`,
      authorization_servers: [],
      scopes_supported: [],
      bearer_methods_supported: [],
      resource_documentation: `${base}/auth.md`,
      resource_policy_uri: `${base}/compliance/`,
      tls_client_certificate_bound_access_tokens: false,
      note: `All resources on ${SITE.domain} are publicly accessible. No OAuth tokens required.`,
    },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
