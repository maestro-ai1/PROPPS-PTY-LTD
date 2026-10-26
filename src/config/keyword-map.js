// src/config/keyword-map.js
// Internal page -> keyword map shown by <KeywordMapPanel /> on preview/dev builds ONLY
// (never rendered when VERCEL_ENV === 'production'). Intent: T / C / I / N.
// Data: Semrush AU database, refreshed 2026-10-19/20 (bulk keyword overview + Keyword Magic "Update metrics"),
// plus the 2026-09-23/10-12 banks for terms not re-pulled. null = Semrush shows no volume (under ~10 a month) or no KD.
// Golden rule: one keyword = one URL; primary T/C with the highest volume at KD 28 or below; 5 secondaries per page.
// Exceptions are listed in KEYWORD_HOLD with the reason.
const k = (keyword, intent, vol, kd) => ({ keyword, intent, vol, kd })

export const KEYWORD_PAGES = {
  '/': {
    focus: k('australian prop money', 'C', 720, 21),
    secondary: [k('prop money australia', 'C', 590, 27), k('props australia', 'C', 110, 25), k('props money', 'C', 50, 19), k('au props', 'C', 50, 4), k('props for sale australia', 'T', null, null)],
  },
  '/shop': {
    focus: k('australian prop money for sale', 'T', 20, 19),
    secondary: [k('australia prop money', 'C', 110, 27), k('aus prop money', 'C', 90, 16), k('buy prop money', 'T', 20, 19), k('buying prop money', 'T', 20, 1), k('prop money for sale', 'T', 20, 25)],
  },
  '/about': {
    focus: k('propps', 'N', 390, 24),
    secondary: [k('money props', 'C', 10, 5), k('prop shop australia', 'C', null, 15)],
  },
  '/contact': {
    focus: k('prop shop melbourne', 'T/N', 20, 6),
    secondary: [k('prop money melbourne', 'C', null, null), k('prop money sydney', 'C', null, null), k('contact propps', 'N', null, null)],
  },
  '/shop/new-notes': {
    // 2026-10-20: au prop money 390/KD19 is the largest easy commercial term (the .org is only #4), so it is the primary.
    focus: k('au prop money', 'C', 390, 19),
    secondary: [k('prop australian money', 'C', 140, 21), k('fake australian money prop', 'C', 140, 28), k('prop money au', 'C', 70, 22), k('best prop money', 'C', 20, 14), k('buy prop money australia', 'T', 20, null)],
  },
  '/shop/film-and-tv-props': {
    focus: k('buy film props', 'T', 90, 21),
    secondary: [k('movie set props for sale', 'T', 90, 24), k('realistic money', 'C', 210, 28), k('movie prop money', 'C', 20, 16), k('buy movie props online australia', 'T', null, 11), k('movie props for sale australia', 'T', 40, null)],
  },
  '/shop/money-stacks': {
    focus: k('prop money stacks', 'I/C', 20, 17),
    secondary: [k('money stack prop', 'T', 20, 14), k('bundle of prop money', 'T', null, 22), k('prop money bundles for sale', 'T', null, 23), k('money bundle prop', 'T', null, 13), k('cash bundle prop', 'I/T', null, 14)],
  },
  '/shop/photography-props': {
    focus: k('photography props australia', 'C', 20, 9),
    secondary: [k('prop money for photoshoot', 'C', null, 26), k('prop dollar bills', 'T', 20, 21)],
  },
  '/shop/event-and-party-props': {
    focus: k('play money australia', 'C', 90, 13),
    secondary: [k('australian play money', 'C', 320, 11), k('play money', 'C', 720, 14), k('toy money', 'C', 170, 15), k('childrens play money', 'C', 90, 10), k('australia play money', 'C', 140, 10)],
  },
  '/shop/custom-and-branded-props': {
    focus: k('custom prop money', 'I/T', 20, 5),
    secondary: [k('custom money printing', 'I', 20, 10), k('custom play money', 'C', 20, 15), k('personalised play money', 'I/T', null, 3), k('branded prop currency australia', 'C', null, null)],
  },
  '/wholesale': {
    focus: k('wholesale prop money', 'I/C', 10, 6),
    secondary: [k('bulk prop money', 'I/T', 10, 0), k('prop money supplier', 'I', null, 1), k('film prop supplier australia', 'C', null, 10), k('prop money manufacturer', 'I', null, null), k('prop banknotes', 'I/T', null, 15)],
  },
  '/compliance': {
    focus: k('prop money australia laws', 'I', 20, null),
    secondary: [k('crimes currency act 1981 section 22', 'I', null, null), k('is it legal to buy prop money', 'I', null, null), k('is it illegal to have prop money', 'I', null, null), k('rba reproduction currency guidelines', 'I', null, null), k('prop money legal australia', 'I', null, null)],
  },
}

// Product slug -> focus + secondary keywords
export const KEYWORD_PRODUCTS = {
  '100-australian-prop-money-for-sale': {
    focus: k('100 dollar note australia', 'I/C', 1600, 18),
    secondary: [k('australian 100 dollar note', 'I/C', 1600, 17), k('$100 note', 'I/C', 1300, 22), k('100 dollar note', 'I/C', 880, 24), k('australian $100 note', 'I/C', 720, 18), k('100 australian dollar note', 'I/C', 480, 17)],
  },
  '50-australian-prop-money-for-sale': {
    focus: k('50 dollar note australia', 'I/C', 1600, 29),
    secondary: [k('50 note australia', 'I/C', 720, 20), k('$50 note', 'I/T', 590, 24), k('australian 50 dollar bill', 'I/T', 480, 25), k('$50 australian note', 'I/T', 320, 20), k('$50 prop money', 'T', 20, 14)],
  },
  '20-australian-prop-money-for-sale': {
    focus: k('20 dollar note australia', 'I', 880, 22),
    secondary: [k('$20 note australia', 'I/C', 260, 17), k('$20 prop money', 'T', 10, 25), k('20 dollar prop money', 'T', null, null), k('australian 20 dollar note', 'I', null, null), k('20 note australia', 'I', null, null)],
  },
  '10-australian-prop-money-for-sale': {
    focus: k('10 dollar note australia', 'I', 880, 27),
    secondary: [k('$10 note australia', 'I', 480, 18), k('10 dollar prop money', 'T', null, null), k('australian 10 dollar note', 'I', null, null), k('10 note australia', 'I', null, null), k('$10 prop money', 'T', null, null)],
  },
  '5-australian-prop-money-for-sale': {
    focus: k('5 dollar note australia', 'I', 880, 21),
    secondary: [k('$5 prop money', 'T', null, 12), k('5 dollar prop money', 'T', null, null), k('australian 5 dollar note', 'I', null, null), k('5 note australia', 'I', null, null), k('new 5 dollar note australia', 'I', null, null)],
  },
  'film-and-tv-prop-currency-pack': {
    focus: k('prop money for film', 'T', null, 12),
    secondary: [k('film prop money', 'T', 20, 25), k('movie prop money australia', 'C', null, null), k('cinema prop currency australia', 'C', null, null)],
  },
  'bulk-money-stack-pack': {
    focus: k('bag of prop money', 'I/C', null, 12),
    secondary: [k('stack of prop money', 'T', null, 14), k('prop money briefcase', 'C', null, 6)],
  },
  'photography-prop-currency-set': {
    focus: k('prop money for photography', 'T', null, 13),
    secondary: [],
  },
  'event-and-party-prop-cash-pack': {
    focus: k('kids play money', 'C', 20, 14),
    secondary: [k('money for pretend play', 'T', null, 14), k('money toy', 'I/T', 50, 7), k('$50 play money', 'C', 20, null), k('australian toy money', 'C', 170, 10), k('australian play money notes', 'C', 20, null)],
  },
  'custom-and-branded-prop-currency': {
    focus: k('custom prop notes', 'C', null, 10),
    secondary: [],
  },
}

// Blog slug -> primary keyword (one keyword = one URL; none of these is also a page or product keyword)
export const KEYWORD_POSTS = {
  'crimes-currency-act-1981-rba-prop-money-guidelines': k('crimes currency act prop money', 'I', null, null),
  'fake-money-vs-prop-money-the-legal-difference-in-australia': k('fake money australia', 'I', 320, 27),
  'can-you-buy-prop-money-in-australia': k('can you buy prop money', 'T', 20, 20),
  'is-it-illegal-to-buy-prop-money-australia': k('is it illegal to buy prop money', 'T', 20, 24),
  'where-to-buy-prop-money-in-australia-legally': k('where to buy prop money', 'T', 20, null),
  '100-dollar-prop-money-which-bundle-size': k('100 dollar prop money', 'T', 20, 25),
  'ready-prop-money-stacks-for-fast-turnaround': k('ready prop money', 'C', 30, 10),
  'high-quality-prop-money-how-to-judge-it-on-camera': k('high quality prop money', 'T', 20, 4),
  'cheap-prop-money-what-you-are-really-paying-for': k('cheap prop money', 'T', 20, 28),
  'lighting-prop-money-for-camera-avoiding-glare': k('realistic prop money', 'C', 20, 5),
  'art-department-guide-weathering-prop-cash': k('prop cash for sale', 'T', 20, 18),
  'play-money-vs-prop-money-which-one-do-you-need': k('pretend money', 'T', 20, 22),
  'toy-money-and-play-money-for-kids-games-and-learning': k('toy money australia', 'C', 170, 9),
  'novelty-money-for-parties-and-events-whats-legal-in-australia': k('novelty prop money australia', 'C', null, null),
  'how-much-prop-money-do-you-need-for-a-scene': k('prop money cost', 'T', 10, 25),
  'prop-money-for-photography-realistic-cash-shots-without-the-risk': k('photoshoot props australia', 'C', null, 17),
  'custom-and-branded-prop-currency-guide-for-agencies': k('custom prop money printing australia', 'T', null, null),
  'wholesale-prop-money-for-production-companies-bulk-pricing-explained': k('prop money price', 'T', 10, 18),
  'best-australian-banknote-denominations-for-film-and-tv-scenes': k('australian banknotes', 'I', 1000, 28),
  'brief-history-of-australian-currency-notes-for-set-designers': k('old australian money notes', 'I/C', 320, 21),
  'buying-film-props-in-australia-a-checklist-for-art-departments': k('movie props australia', 'C', 20, 1),
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': k('money stack australia', 'C', 20, null),
  'prop-money-for-content-creators-social-media-and-photoshoot-guidelines': k('prop money for content creators', 'C', null, 11),
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': k('buy prop money near me', 'T', 20, 7),
  'local-vs-overseas-prop-money-suppliers-compared': k('australian dollar prop notes', 'C', null, 27),
  // 2026-10-26 batch (Semrush AU, same day)
  'prop-dollar-vs-prop-cash-vs-prop-money': k('prop dollar', 'I', 110, 28),
  'realistic-prop-money-australia-what-realistic-should-mean': k('realistic fake money australia', 'C', 170, 23),
  'props-for-filming-ordering-prop-currency-for-a-shoot': k('props for filming', 'C', 50, 28),
  'monetary-toys-and-play-money-sets-for-kids': k('monetary toys', 'C', 170, 8),
  // 2026-10-26b batch: Google Autocomplete (AU) suggestions, checked in Semrush Keyword Overview the same day.
  // Volumes are 0 to 20 a month and Semrush returns no KD for them (n/a = too small to measure), so none is measurably over 28.
  // Under the ~50 volume floor they live as blog and FAQ targets only, never as page or product primaries.
  'prop-money-for-music-videos-in-australia': k('prop money for music videos', 'C', 10, null),
  'can-you-take-prop-money-on-a-plane-in-australia': k('can you take prop money on a plane', 'I', 0, null),
  'how-much-is-a-million-dollars-in-prop-money': k('how much is a million dollars in prop money', 'I', null, null),
  'fake-money-for-parties-casino-nights-birthdays-weddings': k('fake money for party', 'C', 20, null),
  'australian-polymer-prop-money-vs-paper-prop-notes': k('australian polymer prop money', 'C', 10, null),
  'australian-play-money-where-to-buy-and-what-to-check': k('australian play money set', 'C', 20, null),
}

// Keywords researched on 2026-10-20 that are deliberately NOT mapped, with the reason (nothing omitted).
// type: pool = big demand that needs a product or authority first; excluded = brand safety or wrong audience.
export const KEYWORD_HOLD = [
  { keyword: 'money gun', intent: 'C', vol: 1000, kd: 28, type: 'pool', reason: 'No stock. Biggest unlocked pool: add a cash cannon / money gun product, then map it to /shop/event-and-party-props/' },
  { keyword: 'prop american money', intent: 'C', vol: 110, kd: 17, type: 'pool', reason: 'We sell AUD only. USD prop line would unlock this plus fake american money prop and british prop money' },
  { keyword: 'prop hire melbourne', intent: 'C', vol: 170, kd: 15, type: 'pool', reason: 'We sell, not hire. A short-hire service would unlock this and prop hire sydney (140/29)' },
  { keyword: 'prop money', intent: 'C', vol: 480, kd: 33, type: 'pool', reason: 'KD over 28. Supporting copy now; target after the head terms rank and links build' },
  { keyword: 'imitation money', intent: 'I', vol: 1300, kd: 38, type: 'pool', reason: 'KD 38 (was 25). Supporting copy only' },
  { keyword: 'fake money', intent: 'C', vol: 1600, kd: 36, type: 'pool', reason: 'KD over 28 and ambiguous intent. Supporting copy only' },
  { keyword: '$5 note australia', intent: 'I', vol: 320, kd: 44, type: 'pool', reason: 'KD 44. Covered by 5 dollar note australia (880/21)' },
  { keyword: 'movie props', intent: 'C', vol: 260, kd: 49, type: 'pool', reason: 'KD 49 and generic props we do not stock' },
  { keyword: 'money for teaching', intent: 'I', vol: 70, kd: 35, type: 'pool', reason: 'KD 35' },
  { keyword: 'movie money', intent: 'I', vol: 30, kd: 44, type: 'pool', reason: 'KD 44' },
  { keyword: 'money forgery', intent: 'I', vol: 1600, kd: 39, type: 'excluded', reason: 'Crime-intent informational term, brand-safety risk' },
  { keyword: 'counterfeit / detector / how-to-spot cluster', intent: 'I', vol: null, kd: null, type: 'excluded', reason: 'Wrong audience; excluded since 2026-09-23' },
  { keyword: 'fake money printable / template / to print', intent: 'I', vol: 40, kd: 25, type: 'excluded', reason: 'DIY intent, the opposite of a sale' },
  { keyword: 'theatrical props / stage prop', intent: 'C', vol: 140, kd: 37, type: 'pool', reason: 'KD 37 on stage prop; theatrical props 110/18 is generic props we do not stock beyond currency. Held for an owner stock decision' },
  { keyword: 'fake $100 australia / fake note australia', intent: 'I', vol: 110, kd: 21, type: 'excluded', reason: 'Counterfeit-detection and crime intent; wrong audience' },
  { keyword: 'prop buy', intent: 'T', vol: 320, kd: 5, type: 'excluded', reason: 'Likely prop-trading intent, not props. Not used' },
  { keyword: 'alibaba prop money', intent: 'C', vol: 20, kd: 19, type: 'excluded', reason: 'Competitor brand query' },
]
