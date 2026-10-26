// Cuts unique 16:10 blog covers (1200x750 WebP) from the shop's own photographs for the 2026-10-26 posts.
// Usage: node scripts/make-blog-covers-2026-10-26.cjs   (writes public/images/blog/<slug>.webp)
const sharp = require('sharp');

const IMG = 'public/images/';
// [output name, source file, left, top, width, height] in source pixels; every crop is 16:10.
const COVERS = [
  ['prop-dollar-vs-prop-cash-vs-prop-money.webp', 'hero/hero-1.jpg', 0, 40, 2048, 1280],
  ['realistic-prop-money-australia-what-realistic-should-mean.webp', 'blog/blog-fanned-50-stack.jpg', 0, 250, 960, 600],
  ['props-for-filming-ordering-prop-currency-for-a-shoot.webp', 'blog/blog-20-50-handful.jpg', 0, 0, 1200, 750],
  ['monetary-toys-and-play-money-sets-for-kids.webp', 'categories/event-party-props.jpeg', 0, 500, 655, 409],
];

(async () => {
  for (const [out, src, left, top, width, height] of COVERS) {
    const file = IMG + 'blog/' + out;
    await sharp(IMG + src).extract({ left, top, width, height }).resize(1200, 750).webp({ quality: 78 }).toFile(file);
    const m = await sharp(file).metadata();
    console.log(out, m.width + 'x' + m.height, m.size, 'bytes');
  }
})();
