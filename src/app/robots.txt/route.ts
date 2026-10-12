import { SITE } from '../../config/site.js';

// A raw Route Handler instead of the typed app/robots.ts metadata route,
// because that typed API can't emit the Content-Signal directive or the
// agent-resources comment block below - only User-agent/Allow/Disallow/
// Sitemap fields.

// Search engines (ranking + classic results), kept separate from AI agents.
const SEARCH_CRAWLERS = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot'];

// AI answer / retrieval agents: these decide whether the site is cited in AI answers.
const AI_SEARCH_AGENTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Claude-SearchBot',
  'Claude-User',
  'Claude-Web',
  'Amazonbot',
  'Meta-ExternalFetcher',
];

// AI training / dataset crawlers.
const AI_TRAINING_CRAWLERS = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'CCBot',
  'cohere-ai',
  'Bytespider',
  'Meta-ExternalAgent',
];

// A crawler that matches a specific group ignores the "*" group, so every group
// repeats the private-path Disallows (otherwise GPTBot etc. could crawl /admin/).
const PRIVATE = ['/thank-you-order/', '/admin/', '/invoice/', '/confirm/', '/api/'];

const disallows = PRIVATE.map((p) => `Disallow: ${p}`).join('\n');
const group = (agents: string[]) =>
  `${agents.map((a) => `User-Agent: ${a}`).join('\n')}\nAllow: /\n${disallows}`;

export function GET() {
  const base = `https://${SITE.domain}`;

  const body = `User-Agent: *
Allow: /
${disallows}

Content-Signal: search=yes, ai-input=yes, ai-train=no

# Search engine crawlers
${group(SEARCH_CRAWLERS)}

# AI search / answer agents (citations in AI answers)
${group(AI_SEARCH_AGENTS)}

# AI training crawlers
${group(AI_TRAINING_CRAWLERS)}

# Agent-readable resources
# llms.txt: ${base}/llms.txt
# llms-full.txt: ${base}/llms-full.txt
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
