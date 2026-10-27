// src/config/tags.js
// Tags for the keywords in the bank that are NOT a page, product or blog primary and NOT a secondary.
// Each tag is a real landing page (/tags/<slug>/) listing the products, categories and guides that genuinely match it,
// with its own copy, and it always links on to the page that owns the closest primary keyword (`target`).
// Thin-page guard: a tag with fewer than MIN_ITEMS matches (or no guide) is never built, linked or put in the sitemap.
// Excluded and held keywords (counterfeit, DIY printing, no-stock lines, prank use) are never tags.
import { PRODUCTS, CATEGORIES, POSTS } from './site.js';

export const MIN_ITEMS = 3;
const MAX_POSTS = 6;

const NOTE = 'All PROPPS notes are specimen-marked reproduction props, not legal tender, made for film, television, theatre, photography and teaching.';

// terms: lowercase phrases searched in product and guide text. cats: categories that always belong to the tag.
const DEFS = [
  {
    kw: 'movie grade prop money', title: 'Movie Grade Prop Money: Australian Film Notes',
    desc: 'Movie grade prop money in Australian denominations, specimen-marked and camera ready. Compare the film range and guides, then order from Melbourne.',
    paras: ['Movie grade prop money is the term art departments use for notes that hold up in a close shot: sharp print, believable paper weight, the right colours and sizes for each Australian denomination. It is the opposite of a toy note that gives itself away in the first frame.', 'Every PROPPS note is a specimen-marked reproduction made for the screen. The pages below show the film range, the guides on judging quality on camera and the packs production companies order most.'],
    target: { href: '/shop/film-and-tv-props/', label: 'Shop the Film & TV range' },
    terms: ['on camera', 'film-grade', 'film grade', 'cinema', 'art department', 'close-up', 'close up'], cats: ['film-and-tv-props'], related: ['money-props-for-movies', 'most-realistic-prop-money', 'aged-movie-prop-money'],
  },
  {
    kw: 'money props for movies', title: 'Money Props for Movies: Australian Prop Currency',
    desc: 'Money props for movies and TV: Australian notes in every denomination, bundled for the scene. Read the ordering guides, then buy from PROPPS in Melbourne.',
    paras: ['Money props for movies range from a single note on a counter to a table of stacked bundles in a heist scene. The right choice depends on what the camera sees, how long it stays in frame and how many takes the scene needs.', 'This page collects the film products and the planning guides for working out volume, bundle sizes and delivery time before the shoot day.'],
    target: { href: '/shop/film-and-tv-props/', label: 'Shop the Film & TV range' },
    terms: ['film', 'movie', 'scene', 'production', 'set designer'], cats: ['film-and-tv-props', 'money-stacks'], related: ['movie-grade-prop-money', 'movie-prop-money-bulk', 'australian-prop-money-for-movies'],
  },
  {
    kw: 'aged movie prop money', title: 'Aged Movie Prop Money: Weathered Cash for Sets',
    desc: 'Aged movie prop money for period and gritty scenes. How art departments weather prop notes safely, plus the stacks and packs to start from.',
    paras: ['Aged movie prop money is crisp prop cash that has been softened, creased or lightly stained so it reads as handled. Art departments do this to a few notes at a time and keep a clean spare so continuity holds across takes.', 'The guides below explain how to weather prop cash without damaging the specimen markings, and the products are the clean stock to start from.'],
    target: { href: '/blog/art-department-guide-weathering-prop-cash/', label: 'Read the weathering guide' },
    terms: ['weather', 'aged', 'worn', 'period', 'history', 'old australian'], cats: ['film-and-tv-props'], related: ['movie-grade-prop-money', 'close-up-realistic-prop-money'],
  },
  {
    kw: 'australian prop money for movies', title: 'Australian Prop Money for Movies and TV Productions',
    desc: 'Australian prop money for movies, TV and streaming: all five denominations, film packs and ordering guides. Specimen-marked and shipped from Melbourne.',
    paras: ['Australian productions need Australian notes: the right colours, sizes and security-feature artwork for $5, $10, $20, $50 and $100, so a local audience believes the scene. Overseas stock rarely passes that test.', 'Browse the denominations and film packs below, then read the guides on which notes suit which scene and how to order for a shoot.'],
    target: { href: '/shop/new-notes/', label: 'Shop Australian prop notes' },
    terms: ['denomination', 'australian production', 'film and tv', 'local', 'set designer'], cats: ['new-notes', 'film-and-tv-props'], related: ['money-props-for-movies', 'australian-dollar-prop-money'],
  },
  {
    kw: 'most realistic prop money', title: 'Most Realistic Prop Money: What Realistic Means',
    desc: 'Most realistic prop money for Australian film and photo work: what to judge, what to avoid and which PROPPS notes and guides to start with.',
    paras: ['The most realistic prop money is judged by what it does under lights: how the paper takes glare, how the colours hold at distance and whether the print survives a tight lens. Claims on a listing mean little until you have checked those three things.', 'These guides set out a practical test, and the products are the notes we recommend when realism is the brief.'],
    target: { href: '/blog/realistic-prop-money-australia-what-realistic-should-mean/', label: 'Read the realism guide' },
    terms: ['realistic', 'looks real', 'camera', 'glare'], cats: ['new-notes'], related: ['close-up-realistic-prop-money', 'movie-grade-prop-money', 'buy-realistic-prop-money'],
  },
  {
    kw: 'close up realistic prop money', title: 'Close Up Realistic Prop Money for Macro Shots',
    desc: 'Close up realistic prop money for tight shots: print detail, paper finish and lighting tips so notes hold up on a macro lens.',
    paras: ['A close-up shot of a note shows print detail, edges and paper grain that a wide shot never reveals. For macro work choose sharp print, a believable finish and denominations that match the scene.', 'The lighting and judging guides below cover glare, angle and exposure, and the products are the denominations most often hired for insert shots.'],
    target: { href: '/blog/lighting-prop-money-for-camera-avoiding-glare/', label: 'Read the lighting guide' },
    terms: ['close-up', 'close up', 'glare', 'lighting', 'lens'], cats: ['film-and-tv-props'], related: ['most-realistic-prop-money', 'aged-movie-prop-money'],
  },
  {
    kw: 'best australian prop money', title: 'Best Australian Prop Money: How to Choose',
    desc: 'Best Australian prop money explained: what separates a good note from a bad one, with the PROPPS range and buying guides in one place.',
    paras: ['The best Australian prop money matches the real note in colour and size, carries clear specimen markings and arrives on time. Price matters, but a cheap note that fails on camera costs more in reshoots.', 'Use the guides below to compare suppliers and quality, then pick a denomination or a bundle from the range.'],
    target: { href: '/shop/new-notes/', label: 'Shop Australian prop notes' },
    terms: ['best', 'quality', 'compare', 'supplier', 'checklist'], cats: ['new-notes'], related: ['buy-realistic-prop-money', 'most-realistic-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: 'buy realistic prop money', title: 'Buy Realistic Prop Money in Australia',
    desc: 'Buy realistic prop money in Australia: legal, specimen-marked notes shipped by Express Post with signature. Orders from $300 AUD.',
    paras: ['Buying realistic prop money online should be simple and legal. PROPPS sells specimen-marked reproduction notes, invoices with an ABN and dispatches from Melbourne by Express Post with signature on delivery.', 'The guides below explain the legal position, how to order and what to check before you pay, so there are no surprises at checkout.'],
    target: { href: '/shop/', label: 'Browse the full shop' },
    terms: ['buy', 'order', 'where to', 'legal', 'checkout'], cats: ['new-notes'], related: ['best-australian-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: 'australian dollar prop money', title: 'Australian Dollar Prop Money: All Five Notes',
    desc: 'Australian dollar prop money in $5, $10, $20, $50 and $100 denominations, specimen-marked for film, TV and photography. Order from Melbourne.',
    paras: ['Australian dollar prop money covers the five notes people recognise instantly. Each denomination is a separate product so you can order exactly what the scene needs, and bundles are priced by quantity.', 'The guides below cover which denominations suit which scenes, a short history of the notes and what the law allows.'],
    target: { href: '/shop/new-notes/', label: 'Shop Australian prop notes' },
    terms: ['denomination', 'australian dollar', 'banknote', 'currency notes'], cats: ['new-notes'], related: ['100-prop-money', '50-bill-prop-money', '20-bill-prop-money'],
  },
  {
    kw: '$100 prop money', title: '$100 Prop Money: Australian Hundred Dollar Notes',
    desc: '$100 prop money in Australia: specimen-marked hundred dollar notes in bundles for film, photos and events. See sizes, prices and the bundle guide.',
    paras: ['The hundred dollar note is the one cameras love, because a stack of them reads as serious money from across a room. PROPPS sells it in bundle sizes from a few notes up to full stacks.', 'Use the guides below to choose a bundle size and to plan how many notes a scene really needs.'],
    target: { href: '/shop/new-notes/100-australian-prop-money-for-sale/', label: 'View the $100 prop note' },
    terms: ['$100', '100 dollar', 'hundred'], cats: [], related: ['50-bill-prop-money', '20-bill-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: '$50 bill prop money', title: '$50 Bill Prop Money: Australian Fifty Dollar Notes',
    desc: '$50 bill prop money in Australia: specimen-marked fifty dollar notes for film, TV and photography, in bundle sizes to suit the scene.',
    paras: ['The fifty dollar note is Australia’s most used banknote, which makes it a natural fit for everyday cash on screen: wallets, tills, envelopes and handovers.', 'The product and guides below show bundle sizes, how the note looks on camera and how to order.'],
    target: { href: '/shop/new-notes/50-australian-prop-money-for-sale/', label: 'View the $50 prop note' },
    terms: ['$50', '50 dollar', 'fifty'], cats: [], related: ['100-prop-money', '20-bill-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: '$20 bill prop money', title: '$20 Bill Prop Money: Australian Twenty Dollar Notes',
    desc: '$20 bill prop money in Australia: specimen-marked twenty dollar notes for pocket cash, tips and shop scenes. Bundles and ordering guides inside.',
    paras: ['The twenty dollar note is the working note of small transactions: tips, taxi fares, market stalls and bar tabs. It is the denomination that makes background cash look lived-in.', 'Pick a bundle from the product below and read the guides to plan quantities.'],
    target: { href: '/shop/new-notes/20-australian-prop-money-for-sale/', label: 'View the $20 prop note' },
    terms: ['$20', '20 dollar', 'twenty'], cats: [], related: ['50-bill-prop-money', '100-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: 'australian play money for kids', title: 'Australian Play Money for Kids: Notes for Learning',
    desc: 'Australian play money for kids: clearly marked notes for shop games, maths lessons and pretend play. Class and party quantities from Melbourne.',
    paras: ['Australian play money for kids works best when it looks like the notes children see their parents use, so counting and change-making feel real. Clear play markings keep it firmly in the game.', 'The pack and guides below cover pretend shops, classroom lessons and party games, plus what to check on age and safety.'],
    target: { href: '/shop/event-and-party-props/event-and-party-prop-cash-pack/', label: 'View the play cash pack' },
    terms: ['kids', 'children', 'classroom', 'toy money', 'play money', 'learning'], cats: ['event-and-party-props'], related: ['fake-money-for-kids', 'fake-money-for-birthday-party'],
  },
  {
    kw: 'fake money for kids', title: 'Fake Money for Kids: Safe Play Notes for Games',
    desc: 'Fake money for kids that is clearly marked play money: shop games, school lessons and pretend play. See the pack, guides and class quantities.',
    paras: ['Fake money for kids should be unmistakably play money: marked as such, never used as payment and sturdy enough for daily use. That is the line between a teaching tool and a problem.', 'These pages cover classroom lessons, toy and play money sets and the rules worth sharing with children and families.'],
    target: { href: '/shop/event-and-party-props/', label: 'Shop play money' },
    terms: ['kids', 'children', 'classroom', 'toy money', 'monetary toys', 'play money'], cats: ['event-and-party-props'], related: ['australian-play-money-for-kids', 'fake-money-for-birthday-party'],
  },
  {
    kw: 'fake money for birthday party', title: 'Fake Money for Birthday Party Games and Decor',
    desc: 'Fake money for birthday party games, photo booths and casino themes. Marked, party-safe notes and the guide to using them legally in Australia.',
    paras: ['Birthday parties use play cash for casino nights, treasure hunts, photo booths and goodie bags. The notes need to be clearly marked and used as decor or game tokens only.', 'The party guide below covers themes, quantities and what is legal, and the pack is the easiest way to start.'],
    target: { href: '/blog/fake-money-for-parties-casino-nights-birthdays-weddings/', label: 'Read the party guide' },
    terms: ['party', 'birthday', 'casino', 'event'], cats: ['event-and-party-props'], related: ['fake-money-for-wedding', 'fake-money-for-kids'],
  },
  {
    kw: 'fake money for wedding', title: 'Fake Money for Wedding Photos, Games and Decor',
    desc: 'Fake money for wedding photo props, dollar dances and decor: clearly marked notes and the legal guide for Australian couples and planners.',
    paras: ['Weddings use play cash for photo props, themed tables and games. Choose clearly marked notes and keep them as decoration so there is never confusion with real money.', 'The guides below cover what is legal, how many notes a table or photo setup needs and where to order.'],
    target: { href: '/shop/event-and-party-props/', label: 'Shop event and party props' },
    terms: ['wedding', 'party', 'event', 'photo'], cats: ['event-and-party-props', 'photography-props'], related: ['fake-money-for-birthday-party', 'fake-money-for-photos'],
  },
  {
    kw: 'fake money for photos', title: 'Fake Money for Photos: Prop Cash for Shoots',
    desc: 'Fake money for photos and photoshoots: specimen-marked prop notes, lighting tips and the rules creators and photographers should know.',
    paras: ['Photographers and creators use prop cash for product shots, lifestyle scenes and social posts. The notes need to look right in frame and carry markings so the image stays on the right side of the rules.', 'The set and guides below cover glare, composition and content guidelines.'],
    target: { href: '/shop/photography-props/', label: 'Shop photography props' },
    terms: ['photo', 'content creator', 'social media', 'shoot'], cats: ['photography-props'], related: ['close-up-realistic-prop-money', 'fake-money-for-wedding'],
  },
  {
    kw: 'fake money props', title: 'Fake Money Props: Marked Prop Currency',
    desc: 'Fake money props that are clearly marked specimens, not tender: film, photo and play notes in Australian denominations, with the legal guide.',
    paras: ['People search fake money props when they want cash for a scene, a shoot or a game. The responsible version is a reproduction that carries visible specimen markings and is never used as payment.', 'The guides below explain the legal difference between a prop and a counterfeit, and the range shows what is available.'],
    target: { href: '/shop/', label: 'Browse the full shop' },
    terms: ['fake money', 'legal difference', 'novelty', 'what is legal'], cats: [], related: ['fake-money-prop-money', 'fake-australian-money-prop-for-sale'],
  },
  {
    kw: 'fake money prop money', title: 'Fake Money Prop Money: Marked Australian Notes',
    desc: 'Fake money prop money in Australia: specimen-marked notes for film, photography and events, with the compliance guide and ordering details.',
    paras: ['Fake money and prop money are often used as the same phrase, but only one is lawful: a clearly marked reproduction made for production use. This page collects the compliance explainers and the products that meet that standard.', 'If you are unsure what is allowed, start with the legal guides before you order.'],
    target: { href: '/compliance/', label: 'Read our compliance page' },
    terms: ['legal', 'illegal', 'compliance', 'crimes currency', 'reserve bank'], cats: [], related: ['fake-money-props', 'fake-australian-money-prop-for-sale'],
  },
  {
    kw: 'fake australian money prop for sale', title: 'Fake Australian Money Prop for Sale (Marked Notes)',
    desc: 'Fake Australian money prop for sale as clearly marked specimen notes. Film, TV and photo packs from PROPPS Melbourne, shipped with signature.',
    paras: ['A fake Australian money prop for sale should always be a marked reproduction with a clear production purpose. PROPPS notes are made for screen, stage and photography and carry specimen markings.', 'Browse the denominations and read the buying guides for the legal position and delivery times.'],
    target: { href: '/shop/new-notes/', label: 'Shop Australian prop notes' },
    terms: ['fake australian', 'where to buy', 'buy prop money', 'legally'], cats: ['new-notes'], related: ['fake-money-props', 'best-australian-prop-money'],
  },
  {
    kw: 'paper notes money', title: 'Paper Notes Money: Prop Notes vs Polymer',
    desc: 'Paper notes money explained for prop use: why prop notes are paper, how that differs from polymer banknotes and what it means on camera.',
    paras: ['Australian banknotes are polymer, but prop notes are printed on paper, because polymer reproduction is restricted. Paper is also easier to weather and light on set.', 'The guide below explains the difference in detail, and the products show the paper notes we make.'],
    target: { href: '/blog/australian-polymer-prop-money-vs-paper-prop-notes/', label: 'Read the polymer vs paper guide' },
    terms: ['polymer', 'paper'], cats: ['new-notes'], related: ['most-realistic-prop-money', 'australian-dollar-prop-money'],
  },
  {
    kw: 'movie prop money bulk', title: 'Movie Prop Money in Bulk: Stacks and Wholesale',
    desc: 'Movie prop money in bulk: stacks, bundles and wholesale pricing for productions that need volume. Quotes and planning guides inside.',
    paras: ['Bulk movie prop money suits heist scenes, bank vaults and large set dressing. Ordering volume early saves time, and bundle sizes make the maths simple.', 'The stacks and wholesale guides below help you estimate quantity and budget, and the product is the ready-made option.'],
    target: { href: '/shop/money-stacks/', label: 'Shop money stacks' },
    terms: ['bulk', 'wholesale', 'stack', 'heist', 'volume', 'million'], cats: ['money-stacks'], related: ['money-props-for-movies', 'movie-grade-prop-money'],
  },
];


// Products shown on each tag page (explicit, so a tag never lists a product that does not fit it).
const D = (n) => `${n}-australian-prop-money-for-sale`;
const FILM = 'film-and-tv-prop-currency-pack';
const STACK = 'bulk-money-stack-pack';
const PHOTO = 'photography-prop-currency-set';
const PLAY = 'event-and-party-prop-cash-pack';
const PRODUCT_MAP = {
  'movie grade prop money': [FILM, D(100), D(50)],
  'money props for movies': [FILM, STACK, D(100)],
  'aged movie prop money': [FILM, D(50)],
  'australian prop money for movies': [FILM, D(100), D(50), D(20)],
  'most realistic prop money': [D(100), D(50), FILM],
  'close up realistic prop money': [FILM, PHOTO],
  'best australian prop money': [D(100), D(50), D(20)],
  'buy realistic prop money': [D(100), D(50), D(20)],
  'australian dollar prop money': [D(5), D(10), D(20), D(50), D(100)],
  '$100 prop money': [D(100)],
  '$50 bill prop money': [D(50)],
  '$20 bill prop money': [D(20)],
  'australian play money for kids': [PLAY],
  'fake money for kids': [PLAY],
  'fake money for birthday party': [PLAY],
  'fake money for wedding': [PLAY, PHOTO],
  'fake money for photos': [PHOTO],
  'fake money props': [FILM, PLAY],
  'fake money prop money': [D(100), D(50)],
  'fake australian money prop for sale': [D(100), D(50), D(20), D(10), D(5)],
  'paper notes money': [D(100), D(50)],
  'movie prop money bulk': [STACK, FILM],
};

const slugify = (s) => s.toLowerCase().replace(/\$/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const count = (hay, term) => {
  let n = 0;
  let i = hay.indexOf(term);
  while (i !== -1 && n < 5) { n++; i = hay.indexOf(term, i + term.length); }
  return n;
};

const postText = (p) => `${p.title} ${p.excerpt} ${p.content}`.toLowerCase();

function build() {
  const tags = DEFS.map((d) => {
    const slug = slugify(d.kw);
    const posts = POSTS.map((p) => {
      const title = `${p.title} ${p.excerpt}`.toLowerCase();
      const body = postText(p);
      const score = d.terms.reduce((s, t) => s + (title.includes(t) ? 3 : 0) + count(body, t), 0)
        + (p.relatedCategories ?? []).filter((c) => d.cats.includes(c)).length * 2;
      return { p, score };
    }).filter((x) => x.score >= 4).sort((a, b) => b.score - a.score || (b.p.date < a.p.date ? -1 : 1)).slice(0, MAX_POSTS).map((x) => x.p);
    const products = (PRODUCT_MAP[d.kw] ?? []).map((sl) => PRODUCTS.find((p) => p.slug === sl)).filter(Boolean);
    const categories = CATEGORIES.filter((c) => d.cats.includes(c.slug));
    return { ...d, slug, posts, products, categories, items: posts.length + products.length + categories.length };
  });
  return tags;
}

const ALL = build();
/** Tags with enough real content to be a page. Anything thinner is dropped everywhere (page, chips, sitemap). */
export const TAGS = ALL.filter((t) => t.items >= MIN_ITEMS && t.posts.length >= 1);
export const DROPPED_TAGS = ALL.filter((t) => !TAGS.includes(t)).map((t) => ({ kw: t.kw, items: t.items, posts: t.posts.length }));
export const TAG_NOTE = NOTE;

export const tagBySlug = (slug) => TAGS.find((t) => t.slug === slug);
export const tagHref = (t) => `/tags/${t.slug}/`;
export const relatedTags = (t) => t.related.map((s) => tagBySlug(s)).filter(Boolean);

// Chips are balanced across tags: each page shows the (up to 4) matching tags that have the fewest chips so far,
// so every tag page gets a healthy number of inbound links instead of the first tags in the list taking them all.
const MAX_CHIPS = 4;
const CHIPS = new Map();
{
  const load = new Map(TAGS.map((t) => [t.slug, 0]));
  const hosts = [
    ...POSTS.map((p) => ['post', p.slug, TAGS.filter((t) => t.posts.some((x) => x.slug === p.slug))]),
    ...PRODUCTS.map((p) => ['product', p.slug, TAGS.filter((t) => t.products.some((x) => x.slug === p.slug))]),
    ...CATEGORIES.map((c) => ['category', c.slug, TAGS.filter((t) => t.categories.some((x) => x.slug === c.slug))]),
  ];
  for (const [kind, slug, cands] of hosts) {
    const pick = cands.map((t, idx) => ({ t, idx })).sort((a, b) => load.get(a.t.slug) - load.get(b.t.slug) || a.idx - b.idx).slice(0, MAX_CHIPS).map((x) => x.t);
    pick.forEach((t) => load.set(t.slug, load.get(t.slug) + 1));
    CHIPS.set(kind + ':' + slug, pick);
  }
}

/** Tags to show as chips on a post, product or category page. */
export const tagsForPost = (slug) => CHIPS.get('post:' + slug) ?? [];
export const tagsForProduct = (slug) => CHIPS.get('product:' + slug) ?? [];
export const tagsForCategory = (slug) => CHIPS.get('category:' + slug) ?? [];
