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
    const kdOk = r.kd == null ? 'KD unverified' : r.kd <= 28 ? 'KD ok' : 'KD over 28';
    return [r.keyword, r.intent, r.vol ?? '', r.kd ?? '', r.dest, r.url, ...rk, kdOk].map(esc).join(',');
  });
  fs.writeFileSync('docs/keyword-ledger-2026-10-26.csv', [head, ...lines].join('\n') + '\n');
  console.log(rows.length, 'ledger rows');
  const mapped = new Set(rows.map((r) => r.keyword));
  const missing = Object.keys(RANK).filter((k) => !mapped.has(k));
  console.log('competitor keywords not in the ledger:', missing.length ? missing.join(', ') : 'none');
})();
