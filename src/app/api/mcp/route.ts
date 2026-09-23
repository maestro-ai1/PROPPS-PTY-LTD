import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE, COMPLIANCE } from '../../../config/site.js';
import { waLink } from '../../../lib/whatsapp.js';

const TOOLS = [
  {
    name: 'search_products',
    description: 'Search prop money products by keyword, category, or max price',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        category: { type: 'string' },
        max_price: { type: 'number' },
      },
    },
  },
  {
    name: 'get_product',
    description: 'Get full prop product specifications by slug',
    inputSchema: {
      type: 'object',
      required: ['slug'],
      properties: { slug: { type: 'string' } },
    },
  },
  {
    name: 'list_categories',
    description: 'List all Australian prop money categories',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_policies',
    description: 'Get shipping rules, Crimes Act S22 compliance, and payment terms',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'create_order_draft',
    description:
      'Create a prefilled WhatsApp order draft. Never captures payment - a human completes the order.',
    inputSchema: {
      type: 'object',
      properties: {
        items: { type: 'array', items: { type: 'string' } },
        notes: { type: 'string' },
      },
    },
  },
];

function searchProducts(args: { query?: string; category?: string; max_price?: number }) {
  const q = args.query?.toLowerCase().trim() ?? '';
  const category = args.category?.toLowerCase().trim() ?? '';
  const maxPrice = typeof args.max_price === 'number' ? args.max_price : null;

  return PRODUCTS.filter((p) => {
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    const matchesCategory = !category || p.category.toLowerCase() === category;
    const matchesPrice = maxPrice === null || p.price <= maxPrice;
    return matchesQuery && matchesCategory && matchesPrice;
  }).map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    price: p.price,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));
}

function getProduct(args: { slug?: string }) {
  const product = PRODUCTS.find((p) => p.slug === args.slug);
  if (!product) return { error: `No product found with slug "${args.slug}"` };
  return {
    ...product,
    url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`,
  };
}

function listCategories() {
  return CATEGORIES.map((cat) => ({
    ...cat,
    url: `https://${SITE.domain}/shop/${cat.slug}/`,
    productCount: PRODUCTS.filter((p) => p.category === cat.slug).length,
  }));
}

function getPolicies() {
  return {
    minimumOrder: SHOP.minOrder,
    freeShippingThreshold: SHOP.freeShippingThreshold,
    flatShippingFee: SHOP.shippingFee,
    cryptoDiscountPercent: SHOP.cryptoDiscount,
    paymentMethods: SHOP.paymentMethods,
    currency: SITE.currency,
    compliance: COMPLIANCE,
  };
}

function createOrderDraft(args: { items?: string[]; notes?: string }) {
  const items = Array.isArray(args.items) ? args.items : [];
  const lines = [
    `Hello ${SITE.name}, I would like to order:`,
    ...items.map((item) => `- ${item}`),
    args.notes ? `Notes: ${args.notes}` : '',
    'Please confirm dispatch availability.',
  ].filter(Boolean);
  const url = waLink('61420128746', lines.join('\n'));
  return {
    url,
    note: 'This is a draft only. A human must open the link and send the message to complete the order - no payment is captured by this tool.',
  };
}

function callTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case 'search_products':
      return searchProducts(args);
    case 'get_product':
      return getProduct(args);
    case 'list_categories':
      return listCategories();
    case 'get_policies':
      return getPolicies();
    case 'create_order_draft':
      return createOrderDraft(args);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

const JSONRPC_VERSION = '2.0';

export async function POST(request: Request) {
  let body: { jsonrpc?: string; id?: number | string | null; method?: string; params?: any };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { jsonrpc: JSONRPC_VERSION, id: null, error: { code: -32700, message: 'Parse error' } },
      { status: 400 }
    );
  }

  const { id = null, method, params } = body;

  try {
    if (method === 'initialize') {
      return NextResponse.json({
        jsonrpc: JSONRPC_VERSION,
        id,
        result: {
          protocolVersion: '2024-11-05',
          serverInfo: { name: SITE.name, version: '1.0.0' },
          capabilities: { tools: {} },
        },
      });
    }

    if (method === 'tools/list') {
      return NextResponse.json({ jsonrpc: JSONRPC_VERSION, id, result: { tools: TOOLS } });
    }

    if (method === 'tools/call') {
      const toolName = params?.name;
      const args = params?.arguments ?? {};
      const result = callTool(toolName, args);
      return NextResponse.json({
        jsonrpc: JSONRPC_VERSION,
        id,
        result: { content: [{ type: 'text', text: JSON.stringify(result) }] },
      });
    }

    return NextResponse.json(
      { jsonrpc: JSONRPC_VERSION, id, error: { code: -32601, message: `Method not found: ${method}` } },
      { status: 404 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        jsonrpc: JSONRPC_VERSION,
        id,
        error: { code: -32000, message: err instanceof Error ? err.message : 'Internal error' },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    name: SITE.name,
    protocol: 'mcp',
    transport: 'http',
    note: 'POST a JSON-RPC 2.0 request. Supported methods: initialize, tools/list, tools/call.',
    tools: TOOLS.map((t) => t.name),
  });
}
