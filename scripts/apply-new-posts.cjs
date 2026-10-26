// Usage: node scripts/apply-new-posts.cjs scripts/posts-batch-<date>.cjs
// Appends the batch's posts to POSTS in src/config/site.js (skips slugs that already exist).
const fs = require('fs');
const path = require('path');

const batch = require(path.resolve(process.argv[2]));
const file = 'src/config/site.js';
let src = fs.readFileSync(file, 'utf8');

const found = /\r?\n\];\r?\n\r?\nexport const PAGES/.exec(src);
const at = found ? found.index : -1;
if (at < 0) throw new Error('POSTS end marker not found');

const fresh = batch.filter((p) => !src.includes(`slug: '${p.slug}'`));
const entries = fresh.map((p) => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n');
if (fresh.length) {
  // the last POSTS entry ends with "}" and no trailing comma
  src = src.slice(0, at) + ',\n' + entries + src.slice(at);
  fs.writeFileSync(file, src);
}
console.log('added', fresh.length, 'of', batch.length, 'posts');
