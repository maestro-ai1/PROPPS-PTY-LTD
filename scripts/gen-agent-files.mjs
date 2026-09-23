// scripts/gen-agent-files.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read SITE and configs from site.js
const siteConfigPath = path.join(rootDir, 'src', 'config', 'site.js');
const siteConfigFile = fs.readFileSync(siteConfigPath, 'utf8');

const domainMatch = siteConfigFile.match(/domain:\s*['"]([^'"]+)['"]/);
const DOMAIN = domainMatch ? domainMatch[1] : 'propps.com.au';

const nameMatch = siteConfigFile.match(/name:\s*['"]([^'"]+)['"]/);
const NAME = nameMatch ? nameMatch[1] : 'PROPPS PTY LTD';

const taglineMatch = siteConfigFile.match(/tagline:\s*['"]([^'"]+)['"]/);
const TAGLINE = taglineMatch ? taglineMatch[1] : 'Cinema Grade Reproduction Currency';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDir(path.join(rootDir, 'public'));
ensureDir(path.join(rootDir, 'public', 'js'));
ensureDir(path.join(rootDir, 'public', '.well-known'));
ensureDir(path.join(rootDir, 'public', '.well-known', 'agent-skills'));
ensureDir(path.join(rootDir, 'public', '.well-known', 'mcp'));

// 1. public/robots.txt
const robotsTxt = `User-agent: *
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/
Disallow: /admin/
Sitemap: https://${DOMAIN}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers — welcome to index product and content pages
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

# Agent-readable resources
# llms.txt: https://${DOMAIN}/llms.txt
# API Catalog: https://${DOMAIN}/.well-known/api-catalog
# Agent Skills: https://${DOMAIN}/.well-known/agent-skills/index.json
# MCP Server Card: https://${DOMAIN}/.well-known/mcp/server-card.json
`;
fs.writeFileSync(path.join(rootDir, 'public', 'robots.txt'), robotsTxt);

// 2. public/llms.txt
const llmsTxt = `# ${NAME}

> Australia's dedicated studio for cinema-grade prop currency, reproduction banknotes, bank-strapped bundles, and director heist kits.

## Identity & Verification
- Brand: ${NAME}
- Location: Eltham, VIC 3093, Melbourne, Australia
- Founding: 2019
- Compliance: Crimes (Currency) Act 1981 Section 22 Specimen Notes
- Disclaimers: Non-legal tender, artistic simulation, film production and training use only.

## Key Ordering Rules
- Minimum Order: $300 AUD
- Free Express Shipping: $500 AUD and above via Australia Post Express with signature on delivery
- Flat Shipping: $20 AUD under $500
- Crypto Discount: 10% instant deduction on Bitcoin, USDT, and Ethereum
- Checkout Channels: WhatsApp direct checkout and Email order checkout

## Primary Prop Collections
- [Current Series AUD Prop Notes](https://${DOMAIN}/shop/next-gen-polymer-props/): $5 to $100 denominations printed on 120gsm matte archival paper
- [Bank Strapped Bundles & Bricks](https://${DOMAIN}/shop/bank-strapped-bundles/): 100-note strapped bundles and 1,000-note vault bricks
- [Film Director Heist Kits](https://${DOMAIN}/shop/film-director-kits/): Locking aluminium flight cases filled with strapped stacks
- [Vintage Australian Props](https://${DOMAIN}/shop/vintage-australian-props/): Pre-polymer paper banknote designs for period dramas
- [Custom Distressed Cash](https://${DOMAIN}/shop/custom-studio-props/): Hand-weathered, burnt, or blood-splattered props for gritty sequences
- [Wholesale Studio Supply](https://${DOMAIN}/wholesale/): Tiered discounts for production companies (10% to 30% off)

## Optional & Agent Specifications
- [API Catalog](https://${DOMAIN}/.well-known/api-catalog): Linkset endpoints
- [Agent Skills](https://${DOMAIN}/.well-known/agent-skills/index.json): Commerce and navigation skills
- [MCP Server Card](https://${DOMAIN}/.well-known/mcp/server-card.json): Streamable HTTP MCP tools
- [Auth Specification](https://${DOMAIN}/auth.md): Open public access guidelines
`;
fs.writeFileSync(path.join(rootDir, 'public', 'llms.txt'), llmsTxt);

// 3. public/auth.md (Must start with exactly # Auth.md)
const authMd = `# Auth.md

## Site: ${NAME} — Australian Cinema Prop Currency

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://${DOMAIN}/shop/ |
| Production Guides | https://${DOMAIN}/blog/ |
| FAQ | https://${DOMAIN}/faq/ |
| Wholesale Studio Supply | https://${DOMAIN}/wholesale/ |
| Compliance Guidelines | https://${DOMAIN}/compliance/ |

## Authentication

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All catalog resources are public."
  }
}
\`\`\`

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed by an adult human via WhatsApp or the checkout order form. Minimum order $300 AUD.
`;
fs.writeFileSync(path.join(rootDir, 'public', 'auth.md'), authMd);

// 4. public/.well-known/api-catalog
const apiCatalog = {
  linkset: [
    { anchor: `https://${DOMAIN}/`, "https://www.iana.org/assignments/link-relations/service-doc": [{ href: `https://${DOMAIN}/faq/` }], title: `${NAME} — ${TAGLINE}` },
    { anchor: `https://${DOMAIN}/shop/`, type: "text/html", title: `${NAME} Product Catalog` },
    { anchor: `https://${DOMAIN}/wholesale/`, type: "text/html", title: `${NAME} Wholesale` },
    { anchor: `https://${DOMAIN}/api/products`, type: "application/json", title: `${NAME} Products API` },
    { anchor: `https://${DOMAIN}/api/categories`, type: "application/json", title: `${NAME} Categories API` },
    { anchor: `https://${DOMAIN}/api/search`, type: "application/json", title: `${NAME} Search API` },
    { anchor: `https://${DOMAIN}/api/mcp`, type: "application/json", "https://www.iana.org/assignments/link-relations/service-desc": [{ href: `https://${DOMAIN}/.well-known/mcp/server-card.json` }], title: `${NAME} MCP Server` }
  ]
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'api-catalog'), JSON.stringify(apiCatalog, null, 2));

// 5. public/.well-known/agent-skills/index.json
const agentSkills = {
  $schema: "https://agentskills.io/schema/v0.2.0/index.json",
  name: NAME,
  url: `https://${DOMAIN}`,
  description: TAGLINE,
  skills: [
    { name: "search-products", type: "commerce", description: "Search cinema prop cash by denomination, category, or price", url: `https://${DOMAIN}/api/mcp`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "browse-catalog", type: "navigation", description: "Browse the full Australian prop money catalog", url: `https://${DOMAIN}/shop/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "order-draft", type: "commerce", description: "Create prefilled order draft for film production. Adult human completes.", url: `https://${DOMAIN}/api/mcp`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "wholesale-inquiry", type: "commerce", description: "B2B studio wholesale bulk rates for television and film sets", url: `https://${DOMAIN}/wholesale/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "product-education", type: "content", description: "Cinematography lighting and camera advice for prop currency", url: `https://${DOMAIN}/blog/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "contact", type: "support", description: "Contact Melbourne fulfillment desk for dispatch", url: `https://${DOMAIN}/contact/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" }
  ]
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'agent-skills', 'index.json'), JSON.stringify(agentSkills, null, 2));

// 6. public/.well-known/mcp/server-card.json
const serverCard = {
  $schema: "https://modelcontextprotocol.io/schemas/server-card/v1.json",
  serverInfo: {
    name: NAME,
    version: "1.0.0",
    description: TAGLINE,
    homepage: `https://${DOMAIN}`,
    contact: { email: `dispatch@${DOMAIN}`, whatsapp: "+61400000000" }
  },
  transport: { type: "streamable-http", endpoint: `https://${DOMAIN}/api/mcp` },
  capabilities: {
    tools: [
      { name: "search_products", description: "Search cinema prop cash by keyword, category, max_price", inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } } },
      { name: "get_product", description: "Get full prop product specifications by slug", inputSchema: { type: "object", required: ["slug"], properties: { slug: { type: "string" } } } },
      { name: "list_categories", description: "List all Australian prop money categories", inputSchema: { type: "object", properties: {} } },
      { name: "get_policies", description: "Get shipping rules, Crimes Act S22 compliance, and payment terms", inputSchema: { type: "object", properties: {} } },
      { name: "create_order_draft", description: "Create prefilled order URL. Human completes — never captures payment directly.", inputSchema: { type: "object", properties: { items: { type: "array" }, notes: { type: "string" } } } }
    ],
    resources: [
      { name: "product-catalog", description: "Full prop currency catalog", uri: `https://${DOMAIN}/shop/` },
      { name: "wholesale", description: "Studio B2B wholesale pricing tiers", uri: `https://${DOMAIN}/wholesale/` },
      { name: "blog", description: "Cinematography lighting and camera guide", uri: `https://${DOMAIN}/blog/` }
    ],
    commerce: {
      ordering: "human-assisted-whatsapp-or-form",
      payment: ["bank-transfer", "payid", "crypto-BTC", "crypto-USDT", "crypto-ETH"],
      currency: "AUD",
      minimumOrder: 300,
      freeShipping: 500
    }
  },
  legal: {
    ageRestriction: "18+",
    productType: "Cinema Reproduction Currency / Prop Money",
    compliance: "Crimes (Currency) Act 1981 Section 22 Specimen Notes"
  }
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'mcp', 'server-card.json'), JSON.stringify(serverCard, null, 2));

// 7. public/.well-known/oauth-protected-resource
const oauthProtectedResource = {
  resource: `https://${DOMAIN}`,
  resource_name: `${NAME} Public Catalog`,
  authorization_servers: [],
  scopes_supported: [],
  bearer_methods_supported: [],
  resource_documentation: `https://${DOMAIN}/auth.md`,
  resource_policy_uri: `https://${DOMAIN}/compliance/`,
  tls_client_certificate_bound_access_tokens: false,
  note: `All resources on ${DOMAIN} are publicly accessible. No OAuth tokens required.`
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'oauth-protected-resource'), JSON.stringify(oauthProtectedResource, null, 2));

// 8. public/.well-known/oauth-authorization-server
const oauthAuthServer = {
  issuer: `https://${DOMAIN}`,
  authorization_endpoint: null,
  token_endpoint: null,
  jwks_uri: null,
  grant_types_supported: [],
  response_types_supported: [],
  scopes_supported: [],
  note: `${NAME} has no protected APIs. All resources publicly accessible.`,
  public_resources: [
    `https://${DOMAIN}/shop/`,
    `https://${DOMAIN}/blog/`,
    `https://${DOMAIN}/faq/`,
    `https://${DOMAIN}/wholesale/`,
    `https://${DOMAIN}/compliance/`,
    `https://${DOMAIN}/llms.txt`,
    `https://${DOMAIN}/.well-known/api-catalog`,
    `https://${DOMAIN}/.well-known/agent-skills/index.json`,
    `https://${DOMAIN}/.well-known/mcp/server-card.json`
  ],
  agent_auth: {
    register_uri: null,
    identity_types_supported: ["none"],
    credential_types_supported: ["none"],
    notes: "No registration required. All content publicly accessible to agents."
  }
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'oauth-authorization-server'), JSON.stringify(oauthAuthServer, null, 2));

// 9. public/.well-known/openid-configuration
const openidConfig = {
  issuer: `https://${DOMAIN}`,
  note: `${NAME} does not operate an OpenID Connect provider. All resources publicly accessible.`,
  public_site: true,
  authorization_endpoint: null,
  token_endpoint: null,
  userinfo_endpoint: null,
  jwks_uri: null,
  scopes_supported: [],
  response_types_supported: [],
  grant_types_supported: [],
  subject_types_supported: [],
  id_token_signing_alg_values_supported: []
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'openid-configuration'), JSON.stringify(openidConfig, null, 2));

// 10. public/.well-known/acp.json
const acpJson = {
  protocol: { name: "acp", version: "0.1.0" },
  name: NAME,
  description: TAGLINE,
  api_base_url: `https://${DOMAIN}`,
  homepage: `https://${DOMAIN}`,
  transports: ["https"],
  capabilities: {
    services: ["product-catalog", "wholesale", "blog", "faq", "mcp-server"],
    ordering: "human-assisted",
    payment_methods: ["bank-transfer", "payid", "crypto-BTC", "crypto-USDT", "crypto-ETH"],
    currency: "AUD",
    minimum_order_usd: 300,
    free_shipping_threshold_usd: 500
  },
  contact: {
    whatsapp: "https://wa.me/61400000000",
    email: `dispatch@${DOMAIN}`
  },
  legal: {
    age_restriction: "18+",
    region: "Australia",
    ships_to: ["AU"],
    product_type: "Cinema Reproduction Currency",
    compliance: "Crimes (Currency) Act 1981 Section 22"
  }
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'acp.json'), JSON.stringify(acpJson, null, 2));

// 11. public/.well-known/ucp (CRITICAL: "ucp": "1.0" is mandatory)
const ucp = {
  ucp: "1.0",
  protocol_version: "1.0",
  spec: "https://ucp.dev/specification/overview/",
  schema: "https://ucp.dev/schema/v1.json",
  site: `https://${DOMAIN}`,
  name: NAME,
  description: TAGLINE,
  services: [
    { id: "product-catalog", type: "catalog", url: `https://${DOMAIN}/shop/`, description: "Australian cinema prop money catalog" },
    { id: "mcp-server", type: "mcp", url: `https://${DOMAIN}/api/mcp`, description: "MCP Streamable HTTP server" },
    { id: "order", type: "commerce", url: "https://wa.me/61400000000", description: "Place orders via WhatsApp or Email form" },
    { id: "wholesale", type: "b2b", url: `https://${DOMAIN}/wholesale/`, description: "B2B studio wholesale supply" }
  ],
  capabilities: ["browse", "search", "inquiry", "wholesale", "content", "mcp"],
  endpoints: {
    mcp: `https://${DOMAIN}/api/mcp`,
    catalog: `https://${DOMAIN}/shop/`,
    contact: `https://${DOMAIN}/contact/`,
    agent_skills: `https://${DOMAIN}/.well-known/agent-skills/index.json`,
    mcp_server_card: `https://${DOMAIN}/.well-known/mcp/server-card.json`,
    api_catalog: `https://${DOMAIN}/.well-known/api-catalog`,
    llms_txt: `https://${DOMAIN}/llms.txt`
  },
  currency: "AUD",
  minimum_order_usd: 300,
  payment_methods: ["bank-transfer", "payid", "crypto-BTC", "crypto-USDT", "crypto-ETH"],
  legal: {
    age_restriction: "18+",
    product_type: "Cinema Reproduction Currency",
    compliance: "Crimes (Currency) Act 1981 Section 22"
  }
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'ucp'), JSON.stringify(ucp, null, 2));

// 12. public/js/webmcp.js
const webmcpJs = `(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search ${NAME} prop money products by keyword, category, or price",
        inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } },
        execute: async ({ query, category, max_price }) => {
          const params = new URLSearchParams();
          if (query) params.set('q', query);
          if (category) params.set('category', category);
          if (max_price) params.set('max_price', max_price);
          const res = await fetch(\`https://${DOMAIN}/api/search?\${params}\`);
          return res.json();
        }
      },
      {
        name: "browse_products",
        description: "Browse cinema props by category",
        inputSchema: { type: "object", properties: { category: { type: "string" } } },
        execute: async ({ category }) => {
          const url = category ? \`https://${DOMAIN}/shop/\${category}/\` : \`https://${DOMAIN}/shop/\`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Initiate a WhatsApp prop order. Minimum order $300 AUD. Human completes.",
        inputSchema: { type: "object", properties: { message: { type: "string" } } },
        execute: async ({ message }) => {
          const url = message ? \`https://wa.me/61400000000?text=\${encodeURIComponent(message)}\` : \`https://wa.me/61400000000\`;
          window.open(url, '_blank');
          return { url };
        }
      },
      {
        name: "get_wholesale_info",
        description: "Get studio wholesale bulk pricing tiers",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = \`https://${DOMAIN}/wholesale/\`;
          return { url: \`https://${DOMAIN}/wholesale/\` };
        }
      },
      {
        name: "contact",
        description: "Contact ${NAME} Melbourne fulfillment desk",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = \`https://${DOMAIN}/contact/\`;
          return { url: \`https://${DOMAIN}/contact/\` };
        }
      }
    ]
  });
})();
`;
fs.writeFileSync(path.join(rootDir, 'public', 'js', 'webmcp.js'), webmcpJs);

// 13. vercel.json
const vercelJson = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  trailingSlash: true,
  redirects: [
    {
      source: "/:path*",
      has: [{ type: "host", value: `www.${DOMAIN}` }],
      destination: `https://${DOMAIN}/:path*`,
      permanent: true
    }
  ],
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
        { key: "Link", value: `</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration"` }
      ]
    },
    { source: "/.well-known/api-catalog", headers: [{ key: "Content-Type", value: "application/linkset+json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/agent-skills/index.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/mcp/server-card.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/oauth-protected-resource", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/oauth-authorization-server", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/openid-configuration", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/acp.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/ucp", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/auth.md", headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/llms.txt", headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/api/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }, { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" }, { key: "Access-Control-Allow-Headers", value: "Content-Type, Accept, Mcp-Session-Id" }] }
  ]
};
fs.writeFileSync(path.join(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2));

console.log(`[gen-agent-files] All agent-ready files generated successfully for domain: ${DOMAIN}`);
