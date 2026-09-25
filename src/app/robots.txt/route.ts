import { SITE } from '../../config/site.js';

// A raw Route Handler instead of the typed app/robots.ts metadata route,
// because that typed API can't emit the Content-Signal directive or the
// agent-resources comment block below - only User-agent/Allow/Disallow/
// Sitemap fields.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Applebot',
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'Google-Extended',
  'Meta-ExternalAgent',
  'cohere-ai',
];

export function GET() {
  const base = `https://${SITE.domain}`;

  const body = `User-Agent: *
Allow: /
Disallow: /thank-you-order/
Disallow: /admin/
Disallow: /invoice/
Disallow: /confirm/
Disallow: /api/

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers - welcome to index product & content pages
${AI_CRAWLERS.map((agent) => `User-Agent: ${agent}\nAllow: /`).join('\n\n')}

# Agent-readable resources
# llms.txt: ${base}/llms.txt
# API Catalog: ${base}/.well-known/api-catalog
# Agent Skills: ${base}/.well-known/agent-skills/index.json
# MCP Server Card: ${base}/.well-known/mcp/server-card.json
# Auth: ${base}/auth.md

Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
