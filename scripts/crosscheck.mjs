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

// Check 1: Agent files A-N exist
const agentFiles = [
  'public/robots.txt',
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/oauth-protected-resource',
  'public/.well-known/oauth-authorization-server',
  'public/.well-known/openid-configuration',
  'public/.well-known/acp.json',
  'public/.well-known/ucp',
  'public/js/webmcp.js',
  'vercel.json'
];

for (const file of agentFiles) {
  const fullPath = path.join(rootDir, file);
  assert(fs.existsSync(fullPath), `Agent file exists: ${file}`);
}

// Check 2: auth.md first line
const authContent = fs.readFileSync(path.join(rootDir, 'public', 'auth.md'), 'utf8');
assert(authContent.startsWith('# Auth.md'), 'auth.md starts with exact "# Auth.md" heading');

// Check 3: ucp has "ucp": "1.0"
const ucpContent = JSON.parse(fs.readFileSync(path.join(rootDir, 'public', '.well-known', 'ucp'), 'utf8'));
assert(ucpContent.ucp === '1.0', '.well-known/ucp has "ucp":"1.0" field');

// Check 4: server-card.json has streamable-http transport
const serverCard = JSON.parse(fs.readFileSync(path.join(rootDir, 'public', '.well-known', 'mcp', 'server-card.json'), 'utf8'));
assert(serverCard.transport && serverCard.transport.type === 'streamable-http', 'server-card.json has streamable-http transport');

// Check 5: No secrets leaked in tracked files
const trackedCheck = ['src/config/site.js', 'src/App.tsx'];
for (const file of trackedCheck) {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  assert(!content.includes('process.env.ADMIN_PASSCODE ='), `No hardcoded passcode in ${file}`);
  assert(!content.includes('RESEND_API_KEY = "re_'), `No raw Resend key in ${file}`);
}

// Check 6: Strategy docs never in public
assert(!fs.existsSync(path.join(rootDir, 'public', 'docs')), 'Strategy docs not in public/');
assert(!fs.existsSync(path.join(rootDir, 'public', 'PROJECT.md')), 'PROJECT.md not in public/');

console.log('--------------------------------------------');
if (failed) {
  console.error(`FAILED with ${errors.length} error(s).`);
  process.exit(1);
} else {
  console.log('ALL PRE-SHIP CROSSCHECKS PASSED PERFECTLY!');
  process.exit(0);
}
