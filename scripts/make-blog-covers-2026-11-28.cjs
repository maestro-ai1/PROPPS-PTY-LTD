// Cuts unique 16:10 covers (1200x750 WebP) for the 2026-11-28 posts from the shop's own photographs (no watermarks).
const sharp = require('sharp');
const IMG = 'public/images/';
const COVERS = [
  ['play-money-kmart-vs-a-prop-money-supplier-what-to-buy-in-australia', 'hero/hero-2.jpg', 0.5],
  ['play-money-printouts-australia-print-at-home-or-buy-a-ready-made-set', 'categories/event-party-props.jpeg', 0.95],
  ['monopoly-money-vs-australian-play-money-what-to-use-for-board-games-and-parties', 'blog/blog-20-50-handful.jpg', 0.5],
  ['how-much-money-do-you-start-with-in-the-monopoly-game-and-how-to-play-with-more', 'blog/blog-fanned-50-stack.jpg', 0.5],
  ['buy-movie-props-in-australia-prop-money-and-where-to-find-it', 'categories/film-tv-props.jpg', 0.5],
  ['toy-shop-money-games-play-money-for-pretend-shops-and-kids-learning', 'hero/hero-3.jpg', 0.5],
  ['bundle-of-money-prop-cash-bundles-and-stacks-for-film-photos-and-events', 'categories/money-stacks.jpeg', 0.5],
  ['fake-money-for-film-what-productions-should-use-and-how-to-buy-it-legally', 'blog/blog-50-fan-handheld.jpg', 0.5],
  ['night-at-the-casino-party-play-money-games-and-setup-for-a-casino-night', 'hero/hero-1.jpg', 0.5],
  ['monopoly-money-amounts-every-denomination-and-how-many-notes-are-in-the-bank', 'categories/new-notes.jpeg', 0.6],
];
(async () => {
  for (const [slug, src, pos] of COVERS) {
    const m = await sharp(IMG + src).metadata();
    const height = Math.min(m.height, Math.round(m.width / 1.6));
    const top = Math.round((m.height - height) * pos);
    const file = IMG + 'blog/' + slug + '.webp';
    await sharp(IMG + src).extract({ left: 0, top, width: m.width, height }).resize(1200, 750).webp({ quality: 76 }).toFile(file);
    console.log(slug.slice(0, 40), (await sharp(file).metadata()).width + 'x750');
  }
})();
