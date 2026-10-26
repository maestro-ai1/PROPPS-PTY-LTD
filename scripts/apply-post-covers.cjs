// Usage: node scripts/apply-post-covers.cjs   (reads scripts/post-covers-map.json, sets each post's image in src/config/site.js)
const fs = require('fs');
const map = require('./post-covers-map.json');
let s = fs.readFileSync('src/config/site.js', 'utf8');
let n = 0;
for (const [slug, file] of Object.entries(map)) {
  const start = s.indexOf("slug: '" + slug + "'");
  if (start < 0) continue;
  const at = s.indexOf("image: '", start);
  const end = s.indexOf("'", at + 8);
  s = s.slice(0, at + 8) + file + s.slice(end);
  n++;
}
fs.writeFileSync('src/config/site.js', s);
console.log('updated', n);
