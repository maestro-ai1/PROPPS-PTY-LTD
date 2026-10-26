// Usage: node scripts/apply-new-posts.cjs scripts/posts-batch-<date>.cjs
// Appends the batch's posts to POSTS in src/config/site.js. A post whose slug is already there in the JSON form
// written by this script is replaced; a hand-written post with the same slug is left alone.
const fs = require('fs');
const path = require('path');

const batch = require(path.resolve(process.argv[2]));
const file = 'src/config/site.js';
let src = fs.readFileSync(file, 'utf8');

let replaced = 0;
for (const p of batch) {
  const at = src.indexOf(`"slug": "${p.slug}"`);
  if (at < 0) continue;
  const start = src.lastIndexOf('\n  {\n', at);
  const end = src.indexOf('\n  }', at) + 4;
  // drop the entry together with the comma that precedes it
  src = src.slice(0, start - 1) + src.slice(end);
  replaced++;
}

const found = /\r?\n\];\r?\n\r?\nexport const PAGES/.exec(src);
const at = found ? found.index : -1;
if (at < 0) throw new Error('POSTS end marker not found');

const fresh = batch.filter((p) => !src.includes(`slug: '${p.slug}'`));
const entries = fresh.map((p) => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n');
if (fresh.length) {
  // the last POSTS entry ends with "}" and no trailing comma
  src = src.slice(0, at) + ',\n' + entries + src.slice(at);
}
fs.writeFileSync(file, src);
console.log('replaced', replaced, 'added', fresh.length, 'of', batch.length, 'posts');
