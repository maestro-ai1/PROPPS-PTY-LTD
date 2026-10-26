// Gives every existing post its own 16:10 cover (1200x750 WebP) cut from the shop's own photographs, so no two posts share a file.
// Usage: node scripts/make-post-covers-2026-10-26.cjs [--sheet <png>]   (writes public/images/blog/<slug>.webp and prints slug->file)
const sharp = require('sharp');
const fs = require('fs');

const IMG = 'public/images/';
const SOURCES = [
  'blog/blog-100-fan-handheld.jpg',
  'blog/blog-20-50-handful.jpg',
  'blog/blog-50-fan-handheld.jpg',
  'blog/blog-bundled-stacks.jpg',
  'blog/blog-fanned-50-stack.jpg',
  'categories/new-notes.jpeg',
  'categories/photography-props.jpeg',
  'categories/event-party-props.jpeg',
  'hero/hero-1.jpg',
];
// a 16:10 window across a source at relative vertical positions (0 = top, 1 = bottom)
const POSITIONS = [0, 0.5, 1];

(async () => {
  const { POSTS } = await import('../src/config/site.js');
  const targets = POSTS.filter((p) => p.image.endsWith('.jpg') || p.image.endsWith('.jpeg'));
  const windows = [];
  for (const pos of POSITIONS) {
    for (const src of SOURCES) {
      if (src.includes('event-party') && pos === 0) continue; // top of this photo is a blank wall
      windows.push([src, pos]);
    }
  }
  const map = {};
  for (let i = 0; i < targets.length; i++) {
    const [src, pos] = windows[i];
    const m = await sharp(IMG + src).metadata();
    const width = m.width;
    const height = Math.min(m.height, Math.round(width / 1.6));
    const top = Math.round((m.height - height) * pos);
    const out = targets[i].slug + '.webp';
    await sharp(IMG + src).extract({ left: 0, top, width, height }).resize(1200, 750).webp({ quality: 76 }).toFile(IMG + 'blog/' + out);
    map[targets[i].slug] = out;
  }
  fs.writeFileSync('scripts/post-covers-map.json', JSON.stringify(map, null, 2));
  console.log(Object.keys(map).length, 'covers written');
})();
