// scripts/gen-agent-files.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, CATEGORIES, PRODUCTS, POSTS, SHOP, BRAND } from '../src/config/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import the real config directly instead of regex-extracting fields from the
// raw file text - the old regex approach only ever pulled domain/name/tagline,
// which meant CATEGORIES/POSTS additions (new shop categories, new blog posts)
// silently never reached llms.txt/auth.md and those files went stale.
const DOMAIN = SITE.domain;
const NAME = SITE.name;
const TAGLINE = SITE.tagline;

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

// NOTE: robots.txt and sitemap.xml are NOT generated here — they are owned by
// src/app/robots.ts and src/app/sitemap.ts (Next.js native metadata routes),
// which read SITE.domain directly at request time. A static public/robots.txt
// would conflict with app/robots.ts at build time — never add one back.

// 2. public/llms.txt
const categoryLines = CATEGORIES.map((cat) => {
  const priceFrom = Math.min(
    ...PRODUCTS.filter((p) => p.category === cat.slug).map((p) => p.price)
  );
  return `- [${cat.name}](https://${DOMAIN}/shop/${cat.slug}/): From $${priceFrom} AUD - ${cat.description}`;
}).join('\n');

const recentPosts = [...POSTS]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5);
const blogLines = recentPosts
  .map((post) => `- [${post.title}](https://${DOMAIN}/blog/${post.slug}/): ${post.excerpt}`)
  .join('\n');

const llmsTxt = `# ${NAME}

> ${BRAND.description}

## Identity & Verification
- Brand: ${NAME}
- Location: ${BRAND.foundingLocation}
- Founding: ${BRAND.foundingYear}
- Compliance: Crimes (Currency) Act 1981 Section 22 Specimen Notes
- Disclaimers: Non-legal tender, artistic simulation, film production and training use only.

## Key Ordering Rules
- Minimum Order: $${SHOP.minOrder} AUD
- Free Express Shipping: $${SHOP.freeShippingThreshold} AUD and above via Australia Post Express with signature on delivery
- Flat Shipping: $${SHOP.shippingFee} AUD under $${SHOP.freeShippingThreshold}
- Crypto Discount: ${SHOP.cryptoDiscount}% instant deduction on Bitcoin, USDT, and Ethereum
- Checkout Channels: WhatsApp direct checkout and Email order checkout

## Prop Categories
${categoryLines}

## Wholesale
- [Wholesale Studio Supply](https://${DOMAIN}/wholesale/): Tiered discounts for production companies (10% to 30% off)

## Production Guides (Blog)
${blogLines}
- [All Guides](https://${DOMAIN}/blog/): Full production, compliance, and cinematography guide index

## Optional & Agent Specifications
- [API Catalog](https://${DOMAIN}/.well-known/api-catalog): Linkset endpoints
- [Agent Skills](https://${DOMAIN}/.well-known/agent-skills/index.json): Commerce and navigation skills
- [MCP Server Card](https://${DOMAIN}/.well-known/mcp/server-card.json): MCP tools (search, product lookup, categories, policies, order drafting)
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
| Contact | https://${DOMAIN}/contact/ |
| Products API | https://${DOMAIN}/api/products |
| Categories API | https://${DOMAIN}/api/categories |
| Search API | https://${DOMAIN}/api/search |
| MCP Server | https://${DOMAIN}/api/mcp |

## OAuth Protected Resource Metadata

This site has no protected resources requiring OAuth. Metadata is published per
RFC 9728 at [/.well-known/oauth-protected-resource](https://${DOMAIN}/.well-known/oauth-protected-resource)
and the authorization server metadata (with an \`agent_auth\` block) is at
[/.well-known/oauth-authorization-server](https://${DOMAIN}/.well-known/oauth-authorization-server).

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

// 4. public/.well-known/api-catalog is now served by
// src/app/.well-known/api-catalog/route.ts, NOT written as a static file
// here - Vercel serves extensionless static files as
// application/octet-stream regardless of vercel.json Content-Type
// overrides, which broke agent-readiness scanning. A Route Handler sets
// the header directly and it actually takes effect. Same reasoning
// applies to oauth-protected-resource, oauth-authorization-server,
// openid-configuration, and ucp below - all extensionless, all moved to
// Route Handlers.

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
    contact: { email: `dispatch@${DOMAIN}`, whatsapp: "+61420128746" }
  },
  transport: { type: "http", endpoint: `https://${DOMAIN}/api/mcp` },
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

// 7, 8, 9. oauth-protected-resource, oauth-authorization-server, and
// openid-configuration are now Route Handlers - see note above check 4.

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
    whatsapp: "https://wa.me/61420128746",
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

// 11. public/.well-known/ucp is now a Route Handler - see note above check 4.

// 11b. public/.well-known/ai-catalog.json (Agentic Resource Discovery / ARD).
// Has a real .json extension, so Vercel's static-file Content-Type
// detection gets it right without needing a Route Handler.
// Field names/values checked directly against the published schemas
// (ai-catalog.schema.json + ard-entry.schema.json in ards-project/ard-spec):
// specVersion is a fixed enum "1.0" (not a semver-style free string), host
// takes displayName (not name/url - additionalProperties is false), and
// each entry's unique handle is `identifier` (not `id`).
const ardCatalog = {
  specVersion: "1.0",
  host: {
    displayName: NAME,
    documentationUrl: `https://${DOMAIN}/llms.txt`
  },
  entries: [
    {
      identifier: `urn:air:${DOMAIN}:catalog:products`,
      displayName: `${NAME} Product Catalog`,
      type: "application/json",
      url: `https://${DOMAIN}/api/products`,
      representativeQueries: [
        "Show me all Australian prop money products",
        "What prop currency does PROPPS sell?",
        "List cinema prop money categories and prices"
      ]
    },
    {
      identifier: `urn:air:${DOMAIN}:catalog:categories`,
      displayName: `${NAME} Categories`,
      type: "application/json",
      url: `https://${DOMAIN}/api/categories`,
      representativeQueries: [
        "What categories of prop money are available?",
        "Browse prop currency by category"
      ]
    },
    {
      identifier: `urn:air:${DOMAIN}:catalog:search`,
      displayName: `${NAME} Product Search`,
      type: "application/json",
      url: `https://${DOMAIN}/api/search`,
      representativeQueries: [
        "Search for $100 prop notes under $200",
        "Find play money for a party"
      ]
    },
    {
      identifier: `urn:air:${DOMAIN}:mcp:server`,
      displayName: `${NAME} MCP Server`,
      type: "application/json",
      url: `https://${DOMAIN}/api/mcp`,
      representativeQueries: [
        "Connect to PROPPS PTY LTD via MCP",
        "What tools does the PROPPS MCP server expose?"
      ]
    }
  ]
};
fs.writeFileSync(path.join(rootDir, 'public', '.well-known', 'ai-catalog.json'), JSON.stringify(ardCatalog, null, 2));

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
          const url = message ? \`https://wa.me/61420128746?text=\${encodeURIComponent(message)}\` : \`https://wa.me/61420128746\`;
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
        { key: "Link", value: `</.well-known/api-catalog>; rel="api-catalog", </.well-known/ai-catalog.json>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration", </.well-known/oauth-protected-resource>; rel="resource-metadata", </.well-known/oauth-authorization-server>; rel="oauth-authorization-server"` }
      ]
    },
    // api-catalog, oauth-protected-resource, oauth-authorization-server,
    // openid-configuration, and ucp are Route Handlers now (they set their
    // own Content-Type directly) - not listed here to avoid a second,
    // possibly conflicting header rule for the same path. Only genuinely
    // static files (real .json/.md extension, correctly detected by
    // Vercel already) get an explicit override below, mainly for CORS.
    { source: "/.well-known/agent-skills/index.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/mcp/server-card.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/acp.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/ai-catalog.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/auth.md", headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/llms.txt", headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/api/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }, { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" }, { key: "Access-Control-Allow-Headers", value: "Content-Type, Accept, Mcp-Session-Id" }] }
  ]
};
fs.writeFileSync(path.join(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2));

console.log(`[gen-agent-files] All agent-ready files generated successfully for domain: ${DOMAIN}`);
