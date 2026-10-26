// Cuts unique 16:10 covers (1200x750 WebP) for the 2026-10-26b posts from the shop's own photographs.
// Usage: node scripts/make-blog-covers-2026-10-26b.cjs
const sharp = require('sharp');

const IMG = 'public/images/';
// [output slug, source file, relative vertical position 0..1]
const COVERS = [
  ['prop-money-for-music-videos-in-australia', 'blog/blog-100-fan-handheld.jpg', 0.3],
  ['can-you-take-prop-money-on-a-plane-in-australia', 'blog/blog-50-fan-handheld.jpg', 0.75],
  ['how-much-is-a-million-dollars-in-prop-money', 'blog/blog-bundled-stacks.jpg', 0.25],
  ['fake-money-for-parties-casino-nights-birthdays-weddings', 'hero/hero-1.jpg', 0.9],
  ['australian-polymer-prop-money-vs-paper-prop-notes', 'categories/new-notes.jpeg', 0.25],
  ['australian-play-money-where-to-buy-and-what-to-check', 'categories/event-party-props.jpeg', 0.75],
];

(async () => {
  for (const [slug, src, pos] of COVERS) {
    const m = await sharp(IMG + src).metadata();
    const height = Math.min(m.height, Math.round(m.width / 1.6));
    const top = Math.round((m.height - height) * pos);
    const file = IMG + 'blog/' + slug + '.webp';
    await sharp(IMG + src).extract({ left: 0, top, width: m.width, height }).resize(1200, 750).webp({ quality: 76 }).toFile(file);
    console.log(slug, (await sharp(file).metadata()).width + 'x750');
  }
})();
