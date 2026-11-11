// Blog on-page fix, 2026-11-11 (ebikedirect.eu approach): every post stores its `primary` keyword (from keyword-map.js)
// and its title (H1), seoTitle and meta description start with / carry that exact primary.
// Ranking posts (crimes-currency-act..., fake-money-vs-prop-money...) are left alone.
//   node scripts/onpage-blog-fix-2026-11-11.cjs
const fs = require('fs');
const file = 'src/config/site.js';
const crlf = fs.readFileSync(file, 'utf8').includes('\r\n');
let src = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

const FIX = {
  'lighting-prop-money-for-camera-avoiding-glare': { title: 'Realistic Prop Money on Camera: How Cinematographers Light It and Avoid Glare', seoTitle: 'Realistic Prop Money: Lighting It on Camera' },
  'art-department-guide-weathering-prop-cash': { title: 'Prop Cash for Sale: The Art Department Guide to Weathering for Underworld Realism', seoTitle: 'Prop Cash for Sale: Weathering Guide', excerpt: 'Prop cash for sale works best weathered: an art department guide to ageing, continuity and hero versus background notes. Plan your cash scenes today.' },
  'play-money-vs-prop-money-which-one-do-you-need': { title: 'Pretend Money vs Prop Money: Which One Do You Need?', seoTitle: 'Pretend Money vs Prop Money: Which Do You Need?' },
  'how-much-prop-money-do-you-need-for-a-scene': { title: 'Prop Money Cost: How Much Do You Need for a Scene? A Quantity Guide for Producers', seoTitle: 'Prop Money Cost: How Much Do You Need?' },
  'prop-money-for-photography-realistic-cash-shots-without-the-risk': { title: 'Photoshoot Props Australia: Realistic Prop Money Cash Shots Without the Risk', seoTitle: 'Photoshoot Props Australia: Prop Money Shots' },
  'novelty-money-for-parties-and-events-whats-legal-in-australia': { title: 'Novelty Prop Money Australia: What Is Legal for Parties and Events', seoTitle: 'Novelty Prop Money Australia: What Is Legal?' },
  'custom-and-branded-prop-currency-guide-for-agencies': { title: 'Custom Prop Money Printing Australia: A Guide for Agencies and Brand Campaigns', seoTitle: 'Custom Prop Money Printing Australia: Agency Guide' },
  'wholesale-prop-money-for-production-companies-bulk-pricing-explained': { title: 'Prop Money Price for Production Companies: Wholesale and Bulk Pricing Explained', seoTitle: 'Prop Money Price: Wholesale and Bulk Pricing' },
  'best-australian-banknote-denominations-for-film-and-tv-scenes': { title: 'Australian Banknotes for Film and TV Scenes: The Best Denominations to Use', seoTitle: 'Australian Banknotes for Film and TV Scenes' },
  'brief-history-of-australian-currency-notes-for-set-designers': { title: 'Old Australian Money Notes: A Brief History of Australian Currency for Set Designers', seoTitle: 'Old Australian Money Notes: History for Sets' },
  'buying-film-props-in-australia-a-checklist-for-art-departments': { title: 'Movie Props Australia: A Buying Checklist for Art Departments', seoTitle: 'Movie Props Australia: Buying Checklist' },
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': { title: 'Money Stack Australia: Getting the Prop Cash Volume Right for Heist and Bank Scenes', seoTitle: 'Money Stack Australia: Heist Scene Volume' },
  'toy-money-and-play-money-for-kids-games-and-learning': { title: 'Toy Money Australia: Play Money for Games and Learning', seoTitle: 'Toy Money Australia: Play Money for Kids' },
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': { title: 'Buy Prop Money Near Me: How Fast Can You Get It in Australia?', seoTitle: 'Buy Prop Money Near Me: Fast Dispatch' },
  'local-vs-overseas-prop-money-suppliers-compared': { title: 'Australian Dollar Prop Notes: Local vs Overseas Suppliers and What to Check', seoTitle: 'Australian Dollar Prop Notes: Local vs Overseas' },
  'realistic-prop-money-australia-what-realistic-should-mean': { title: 'Realistic Fake Money Australia: What Realistic Should and Should Not Mean', excerpt: 'Realistic fake money Australia buyers want props that read on camera. Learn what realistic should mean, what to avoid and how to buy marked props.' },
  'fake-money-for-parties-casino-nights-birthdays-weddings': { title: 'Fake Money for Party Nights: Casino Nights, Birthdays and Weddings in Australia', seoTitle: 'Fake Money for Party Nights: Casino and Weddings', excerpt: 'Fake money for party games works best when clearly marked. See ideas for casino nights, birthdays and weddings, how much to buy and what is legal.' },
  'australian-play-money-where-to-buy-and-what-to-check': { title: 'Australian Play Money Set: Where to Buy It and What to Check Before You Do' },
  'fake-money-for-classroom-play-money-lessons-by-year-level': { title: 'Fake Money for Classroom Maths: Play Money Lessons and Class Economies by Year Level' },
};

(async () => {
  const km = await import('../src/config/keyword-map.js');
  const slugs = Object.keys(km.KEYWORD_POSTS);
  const lines = src.split('\n');
  const idx = (s) => lines.findIndex((l) => new RegExp(`^\\s+"?slug"?:\\s*["']${s}["']`).test(l));
  let edits = 0;
  for (const slug of slugs) {
    const start = idx(slug);
    if (start < 0) throw new Error('post not found ' + slug);
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) if (/^\s+"?slug"?:\s*["']/.test(lines[i])) { end = i; break; }
    const fix = FIX[slug] || {};
    const quoted = /^\s+"slug"/.test(lines[start]);
    const fmt = (v) => (quoted ? JSON.stringify(v) : `'${v.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`);
    const key = (k) => (quoted ? `"${k}"` : k);
    let hasPrimary = false;
    for (let i = start; i < end; i++) {
      const m = /^(\s+)"?(title|seoTitle|excerpt|primary)"?:\s*/.exec(lines[i]);
      if (!m) continue;
      if (m[2] === 'primary') { hasPrimary = true; lines[i] = `${m[1]}${key('primary')}: ${fmt(km.KEYWORD_POSTS[slug].keyword)},`; edits++; continue; }
      if (fix[m[2]]) { lines[i] = `${m[1]}${key(m[2])}: ${fmt(fix[m[2]])},`; edits++; }
    }
    if (!hasPrimary) {
      for (let i = start; i < end; i++) {
        const m = /^(\s+)"?seoTitle"?:/.exec(lines[i]) || /^(\s+)"?title"?:/.exec(lines[i]);
        if (m && /seoTitle|title/.test(lines[i])) {
          // insert after the last of title/seoTitle/excerpt found, i.e. directly after seoTitle when present
        }
      }
      let at = -1, indent = '    ';
      for (let i = start; i < end; i++) { const m = /^(\s+)"?seoTitle"?:/.exec(lines[i]); if (m) { at = i; indent = m[1]; } }
      if (at < 0) for (let i = start; i < end; i++) { const m = /^(\s+)"?title"?:/.exec(lines[i]); if (m) { at = i; indent = m[1]; } }
      if (at < 0) throw new Error('no title line for ' + slug);
      lines.splice(at + 1, 0, `${indent}${key('primary')}: ${fmt(km.KEYWORD_POSTS[slug].keyword)},`);
      edits++;
    }
  }
  fs.writeFileSync(file, lines.join(crlf ? '\r\n' : '\n'));
  console.log('edits', edits, 'posts', slugs.length);
})();
