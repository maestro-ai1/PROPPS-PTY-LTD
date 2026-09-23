// scripts/crosscheck.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- RUNNING WEBFORGE PRE-SHIP CROSSCHECK ---');

let failed = false;
const errors = [];

function assert(condition, message) {
  if (!condition) {
    failed = true;
    errors.push(message);
    console.error(`❌ FAIL: ${message}`);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// Check 1: Agent files A-N exist.
// robots.txt and sitemap.xml are Next.js route handlers, not static files in
// public/ - check the route source instead of a public/robots.txt that will
// never exist on this codebase.
assert(fs.existsSync(path.join(rootDir, 'src', 'app', 'robots.txt', 'route.ts')), 'robots.txt route exists');
assert(fs.existsSync(path.join(rootDir, 'src', 'app', 'sitemap.ts')), 'sitemap.ts route exists');

// Extensionless well-known files are Route Handlers, not static files -
// Vercel serves extensionless public/ files as application/octet-stream
// regardless of vercel.json Content-Type overrides, which broke agent
// scanning. Check the route source instead.
const wellKnownRoutes = [
  'api-catalog',
  'oauth-protected-resource',
  'oauth-authorization-server',
  'openid-configuration',
  'ucp',
];
for (const route of wellKnownRoutes) {
  assert(
    fs.existsSync(path.join(rootDir, 'src', 'app', '.well-known', route, 'route.ts')),
    `.well-known/${route} route exists`
  );
}

const agentFiles = [
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/acp.json',
  'public/.well-known/ai-catalog.json',
  'public/js/webmcp.js',
  'vercel.json',
];

for (const file of agentFiles) {
  const fullPath = path.join(rootDir, file);
  assert(fs.existsSync(fullPath), `Agent file exists: ${file}`);
}

// Check 2: auth.md first line
const authContent = fs.readFileSync(path.join(rootDir, 'public', 'auth.md'), 'utf8');
assert(authContent.startsWith('# Auth.md'), 'auth.md starts with exact "# Auth.md" heading');

// Check 3: ucp route declares "ucp": "1.0"
const ucpRouteSource = fs.readFileSync(path.join(rootDir, 'src', 'app', '.well-known', 'ucp', 'route.ts'), 'utf8');
assert(/ucp:\s*'1\.0'/.test(ucpRouteSource), '.well-known/ucp route declares ucp: "1.0" field');

// Check 4: server-card.json transport matches what /api/mcp actually implements.
// This site's MCP endpoint is a plain request/response JSON-RPC handler, not a
// real streamable-http/SSE transport - declaring "streamable-http" would be
// exactly the capability lie WebForge Rule 10 bans.
const serverCard = JSON.parse(fs.readFileSync(path.join(rootDir, 'public', '.well-known', 'mcp', 'server-card.json'), 'utf8'));
assert(serverCard.transport && serverCard.transport.type === 'http', 'server-card.json declares the transport type it actually implements ("http")');

// Check 5: server-card.json tools match the live /api/mcp route's TOOLS list
// (name + required-ness), so the card never advertises a tool the endpoint
// doesn't actually serve.
const mcpRouteSource = fs.readFileSync(path.join(rootDir, 'src', 'app', 'api', 'mcp', 'route.ts'), 'utf8');
const declaredToolNames = serverCard.capabilities?.tools?.map((t) => t.name) ?? [];
for (const name of declaredToolNames) {
  assert(mcpRouteSource.includes(`case '${name}':`), `/api/mcp implements declared tool "${name}"`);
}

// Check 6: the API routes referenced by api-catalog / agent-skills / acp.json /
// ucp actually exist as real route handlers - never claim a live endpoint that
// 404s (WebForge Rule 10).
const claimedApiRoutes = ['products', 'categories', 'search', 'mcp'];
for (const route of claimedApiRoutes) {
  assert(
    fs.existsSync(path.join(rootDir, 'src', 'app', 'api', route, 'route.ts')),
    `/api/${route} route handler exists (referenced by agent-ready files)`
  );
}

// Check 7: No secrets leaked in tracked files
const trackedCheck = ['src/config/site.js'];
for (const file of trackedCheck) {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  assert(!content.includes('process.env.ADMIN_PASSCODE ='), `No hardcoded passcode in ${file}`);
  assert(!content.includes('RESEND_API_KEY = "re_'), `No raw Resend key in ${file}`);
}

// Check 8: Strategy docs never in public
assert(!fs.existsSync(path.join(rootDir, 'public', 'docs')), 'Strategy docs not in public/');
assert(!fs.existsSync(path.join(rootDir, 'public', 'PROJECT.md')), 'PROJECT.md not in public/');
assert(!fs.existsSync(path.join(rootDir, 'public', 'keyword-map.md')), 'keyword-map.md not in public/');

console.log('--------------------------------------------');
if (failed) {
  console.error(`FAILED with ${errors.length} error(s).`);
  process.exit(1);
} else {
  console.log('ALL PRE-SHIP CROSSCHECKS PASSED PERFECTLY!');
  process.exit(0);
}
