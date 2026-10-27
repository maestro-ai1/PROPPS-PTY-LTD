// Builds docs/keyword-ledger-2026-10-26.csv from src/config/keyword-map.js plus the competitor pull of 2026-10-26.
// Usage: node scripts/build-keyword-ledger.cjs
// Competitor positions are Semrush AU (desktop) best position on 2026-10-26; '-' = not in the top 100 / not in the pull.
const fs = require('fs');

// keyword -> [org, propsmoney, us]   org = australianpropmoney.org, propsmoney = australianpropsmoney.com
const RANK = {
  'australian prop money': [32, 1, '-'],
  'prop money australia': [23, 1, '-'],
  'prop money': [25, 1, '-'],
  'au prop money': [4, 28, '-'],
  'prop buy': [38, '-', '-'],
  'realistic money': [24, 19, '-'],
  'realistic fake money australia': [21, 7, '-'],
  'prop australian money': [1, 27, '-'],
  'fake australian money prop': [1, 27, '-'],
  'prop dollar': [25, 22, 37],
  'australia prop money': ['-', 30, 48],
  'aus prop money': ['-', 99, '-'],
  'prop cash': [5, 35, 37],
  'prop money au': [61, 1, '-'],
  'props money': [7, 4, '-'],
  'au props': [38, 39, '-'],
  'prop american money': ['-', 21, '-'],
  'fake money': [26, 49, '-'],
  'imitation money': [35, 37, '-'],
  'fake money australia': ['-', 41, '-'],
  'buy film props': ['-', '-', 52],
  'movie set props for sale': ['-', '-', 54],
  'props australia': ['-', '-', 58],
  'prop movie': ['-', 47, '-'],
};

(async () => {
  const km = await import('../src/config/keyword-map.js');
  const rows = [];
  const add = (keyword, intent, vol, kd, dest, url) => rows.push({ keyword, intent, vol, kd, dest, url });
  for (const [url, v] of Object.entries(km.KEYWORD_PAGES)) {
    add(v.focus.keyword, v.focus.intent, v.focus.vol, v.focus.kd, 'page primary', url + '/');
    v.secondary.forEach((s) => add(s.keyword, s.intent, s.vol, s.kd, 'page secondary', url + '/'));
  }
  for (const [slug, v] of Object.entries(km.KEYWORD_PRODUCTS)) {
    add(v.focus.keyword, v.focus.intent, v.focus.vol, v.focus.kd, 'product primary', '/shop/*/' + slug + '/');
    v.secondary.forEach((s) => add(s.keyword, s.intent, s.vol, s.kd, 'product secondary', '/shop/*/' + slug + '/'));
  }
  for (const [slug, v] of Object.entries(km.KEYWORD_POSTS)) add(v.keyword, v.intent, v.vol, v.kd, 'blog primary', '/blog/' + slug + '/');
  for (const h of km.KEYWORD_HOLD) add(h.keyword, h.intent, h.vol, h.kd, h.type === 'excluded' ? 'excluded' : 'hold', h.reason);
  add('prop cash', 'I', 90, 26, 'blog secondary', '/blog/prop-dollar-vs-prop-cash-vs-prop-money/');
  add('prop.cash', 'I', 90, 28, 'excluded', 'Betting-site domain query, not ours');
  // Google Autocomplete (AU, hl=en gl=au) clusters reviewed 2026-10-26; volumes unverified. Full list: docs/google-autocomplete-au-2026-10-26.txt
  [
    ['fake money for classroom / teachers / teaching / math / counting', 'C', 20, null, 'blog', '/blog/fake-money-for-classroom-play-money-lessons-by-year-level/ (Semrush AU: fake money for classroom 20, for kids 20, for learning 20, money for classroom 20, teaching 10, classroom economy money 10)'],
    ['fake money for photos / photoshoot / pictures / vlogging', 'C', null, null, 'page secondary', '/shop/photography-props/ and /blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/'],
    ['fake money for casino party / decoration / birthday / wedding', 'C', null, null, 'blog', '/blog/fake-money-for-parties-casino-nights-birthdays-weddings/'],
    ['how much does prop money cost / how much is prop money / 1 million in prop money', 'I', null, null, 'blog + FAQ', '/blog/how-much-is-a-million-dollars-in-prop-money/ and the homepage FAQ'],
    ['does prop money feel real / how realistic is prop money', 'I', null, null, 'blog + FAQ', 'Realistic post, polymer vs paper post and the homepage FAQ'],
    ['can you spend prop money / can you buy stuff with prop money', 'I', null, null, 'FAQ', 'Homepage FAQ and /compliance/ (answer: no, never spendable)'],
    ['australian play money kmart / big w / officeworks / coins / notes / pack', 'C', null, null, 'blog', '/blog/australian-play-money-where-to-buy-and-what-to-check/ (neutral comparison, no affiliation)'],
    ['australian play money printable / free pdf / to print', 'I', null, null, 'excluded', 'DIY intent; one H2 in the play money post explains printable vs ready-made'],
    ['how to make prop money / custom prop money template / is it legal to print prop money', 'I', null, null, 'excluded', 'DIY and legal-risk intent; the opposite of a sale'],
    ['prop money canada / uk / usd / euro / pound / cad', 'C', null, null, 'excluded', 'No stock (AUD only); goes to the to-source list'],
    ['fake money for money gun / bouquet / cakes / nail art / halloween', 'C', null, null, 'hold', 'No stock or craft use; money gun 1,000/28 is the owner stock decision'],
    ['fake money for dementia / elderly / alzheimers / aged care', 'I', null, null, 'hold', 'Care-setting claims; needs owner review before any copy'],
    ['best prop money for music videos / fake money for music video / rap videos', 'C', null, null, 'blog', '/blog/prop-money-for-music-videos-in-australia/'],
    ['can you take prop money on a plane / is it legal to carry prop money', 'I', null, null, 'blog', '/blog/can-you-take-prop-money-on-a-plane-in-australia/'],
    ['australian polymer prop money (for sale)', 'C', null, null, 'blog', '/blog/australian-polymer-prop-money-vs-paper-prop-notes/ (we sell paper, so the page explains why)'],
  ].forEach(([k, i, v, d, t, r]) => add(k, i, v, d, t, r));
  // Tags (2026-10-27): bank keywords that are not a primary or secondary become indexable tag pages (src/config/tags.js).
  // Volume/KD from the 2026-10-12 Semrush export where it lists the keyword; the rest come from the Google AU autocomplete bank (unverified).
  const tg = await import('../src/config/tags.js');
  const TAGVOL = { 'fake money props': [20, 23], 'fake money prop money': [30, 18], 'fake australian money prop for sale': [20, 20], 'paper notes money': [50, 28], '$100 prop money': [20, 26] };
  tg.TAGS.forEach((t) => add(t.kw, 'C', (TAGVOL[t.kw] || [])[0] ?? null, (TAGVOL[t.kw] || [])[1] ?? null, 'tag', '/tags/' + t.slug + '/ (links to ' + t.target.href + ')'));
  // competitor keywords that were reviewed and deliberately not mapped
  [
    ['counterfeit money / how to spot fake cash / counterfeit aud cluster', 'I', 2400, 51, 'excluded', 'Counterfeit-detection audience and brand-safety risk; the .org ranks 18 to 56 on these, we do not compete'],
    ['money fake money', 'I/C', 1300, 37, 'hold', 'KD 37, over the rule; supporting copy only'],
    ['fake 100 dollars / fake 100 bill', 'I', 200, 28, 'excluded', 'Crime-adjacent phrasing, wrong audience'],
    ['prop movie', 'I', 50, 23, 'hold', 'Ambiguous (film titled Prop), no stock fit'],
  ].forEach(([k, i, v, d, t, r]) => add(k, i, v, d, t, r));

  const esc = (x) => '"' + String(x ?? '').replace(/"/g, '""') + '"';
  const head = 'keyword,intent,volume,kd,destination,url_or_reason,org_pos,propsmoney_pos,our_pos,status';
  const lines = rows.map((r) => {
    const rk = RANK[r.keyword] || ['', '', ''];
    const kdOk = r.kd == null ? 'KD n/a (too small to measure)' : r.kd <= 28 ? 'KD ok' : 'KD over 28';
    return [r.keyword, r.intent, r.vol ?? '', r.kd ?? '', r.dest, r.url, ...rk, kdOk].map(esc).join(',');
  });
  fs.writeFileSync('docs/keyword-ledger-2026-10-26.csv', [head, ...lines].join('\n') + '\n');
  console.log(rows.length, 'ledger rows');
  const mapped = new Set(rows.map((r) => r.keyword));
  const missing = Object.keys(RANK).filter((k) => !mapped.has(k));
  console.log('competitor keywords not in the ledger:', missing.length ? missing.join(', ') : 'none');
})();
