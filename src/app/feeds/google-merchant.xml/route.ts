import { SITE, PRODUCTS } from '../../../config/site.js';

// Google Merchant Center product feed (RSS 2.0 + g: namespace), generated from src/config/site.js.
// Fetch URL for Merchant Center: https://<domain>/feeds/google-merchant.xml (scheduled fetch, daily).
// Price is the product's listed starting price (the default bundle shown on the product page).
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();

export function GET() {
  const base = `https://${SITE.domain}`;
  const items = PRODUCTS.map((p) => {
    const link = `${base}/shop/${p.category}/${p.slug}/`;
    const image = `${base}/images/products/${p.images[0]}`;
    return `    <item>
      <g:id>${esc(p.slug)}</g:id>
      <title>${esc(p.name)}</title>
      <description>${esc(plain(p.description).slice(0, 4900))}</description>
      <link>${esc(link)}</link>
      <g:image_link>${esc(image)}</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:price>${p.price.toFixed(2)} AUD</g:price>
      <g:brand>PROPPS</g:brand>
      <g:identifier_exists>no</g:identifier_exists>
      <g:google_product_category>Arts &amp; Entertainment &gt; Party &amp; Celebration</g:google_product_category>
      <g:product_type>${esc(p.category)}</g:product_type>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${base}/</link>
    <description>Specimen-marked reproduction prop currency for film, television, theatre and photography. Non-legal tender.</description>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
