import { NextRequest, NextResponse } from 'next/server';
import { SITE, BRAND, CATEGORIES, PRODUCTS, POSTS, SHOP, FAQ } from './config/site.js';

// Markdown for Agents (Cloudflare's emerging content-negotiation standard):
// a request with `Accept: text/markdown` gets a markdown rendition of the
// same content instead of full HTML - cheaper for an LLM to parse, no DOM
// noise. HTML stays the default for everything else. Real content only,
// built from the same data the pages themselves render from - never a
// fabricated summary.
function wantsMarkdown(req: NextRequest): boolean {
  return (req.headers.get('accept') ?? '').includes('text/markdown');
}

function buildMarkdown(pathname: string): string | null {
  const base = `https://${SITE.domain}`;
  const clean = pathname.replace(/\/$/, '') || '/';

  if (clean === '/') {
    const categoryLines = CATEGORIES.map(
      (c) => `- [${c.name}](${base}/shop/${c.slug}/): ${c.description}`
    ).join('\n');
    return `# ${SITE.name}\n\n> ${BRAND.description}\n\n## Categories\n${categoryLines}\n\n## Ordering\n- Minimum order: $${SHOP.minOrder} AUD\n- Free express shipping over $${SHOP.freeShippingThreshold} AUD\n- Crypto discount: ${SHOP.cryptoDiscount}%\n\n## More\n- [Full Shop](${base}/shop/)\n- [Wholesale](${base}/wholesale/)\n- [Blog](${base}/blog/)\n- [FAQ](${base}/faq/)\n`;
  }

  if (clean === '/shop') {
    const lines = CATEGORIES.map((c) => `- [${c.name}](${base}/shop/${c.slug}/): ${c.description}`).join('\n');
    return `# Shop Prop Money Australia\n\n${lines}\n`;
  }

  const categoryMatch = clean.match(/^\/shop\/([^/]+)$/);
  if (categoryMatch) {
    const cat = CATEGORIES.find((c) => c.slug === categoryMatch[1]);
    if (!cat) return null;
    const lines = PRODUCTS.filter((p) => p.category === cat.slug)
      .map((p) => `- [${p.name}](${base}/shop/${p.category}/${p.slug}/): From $${p.price} AUD - ${p.shortDescription}`)
      .join('\n');
    return `# ${cat.name}\n\n> ${cat.description}\n\n## Products\n${lines}\n`;
  }

  const productMatch = clean.match(/^\/shop\/([^/]+)\/([^/]+)$/);
  if (productMatch) {
    const product = PRODUCTS.find((p) => p.category === productMatch[1] && p.slug === productMatch[2]);
    if (!product) return null;
    const bundleLines = product.bundles
      ? product.bundles.map((b) => `- ${b.label}: $${b.price} AUD ($${b.faceValue.toLocaleString()} face value)`).join('\n')
      : '';
    return `# ${product.name}\n\n${product.description}\n\n## Price\nFrom $${product.price} AUD (10% off paying with crypto)\n\n${bundleLines ? `## Bundle Sizes\n${bundleLines}\n` : ''}`;
  }

  if (clean === '/blog') {
    const lines = POSTS.map((p) => `- [${p.title}](${base}/blog/${p.slug}/): ${p.excerpt}`).join('\n');
    return `# Prop & Production Journal\n\n${lines}\n`;
  }

  const blogMatch = clean.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = POSTS.find((p) => p.slug === blogMatch[1]);
    if (!post) return null;
    return `# ${post.title}\n\n> ${post.excerpt}\n\n${post.content}\n`;
  }

  if (clean === '/faq') {
    const lines = FAQ.map((f) => `**${f.question}**\n\n${f.answer}`).join('\n\n');
    return `# Frequently Asked Questions\n\n${lines}\n`;
  }

  if (clean === '/wholesale') {
    return `# Wholesale Prop Money Australia\n\nTiered wholesale discounts (10%-30%) on Australian cinema prop currency for film, TV, and theatrical production companies.\n\nMinimum order: $${SHOP.minOrder} AUD. [Contact us](${base}/contact/) for a production estimate.\n`;
  }

  if (clean === '/compliance') {
    return `# Prop Money Australia Laws & Compliance\n\nAll ${SITE.name} products comply with Section 22 of the Crimes (Currency) Act 1981 and Reserve Bank of Australia reproduction currency guidelines. Every note carries mandatory non-legal-tender specimen markings.\n`;
  }

  if (clean === '/about') {
    return `# About ${SITE.name}\n\n${BRAND.description}\n\n## Milestones\n${BRAND.milestones.map((m) => `- ${m.year}: ${m.event}`).join('\n')}\n`;
  }

  return null;
}

export function middleware(request: NextRequest) {
  if (wantsMarkdown(request)) {
    const content = buildMarkdown(request.nextUrl.pathname);
    if (content) {
      return new NextResponse(content, {
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api/|_next/|images/|js/|\\.well-known/|favicon\\.ico|robots\\.txt|sitemap\\.xml|llms\\.txt|auth\\.md).*)',
  ],
};
