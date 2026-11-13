// src/config/keyword-map.js
// Internal page -> keyword map shown by <KeywordMapPanel /> on preview/dev builds ONLY
// (never rendered when VERCEL_ENV === 'production'). Intent: T / C / I / N.
// Data: Semrush AU, every keyword re-run with Update metrics on 2026-11-11 (intent, volume, KD as of that day); earlier banks 2026-10-19/20 (bulk keyword overview + Keyword Magic "Update metrics"),
// plus the 2026-09-23/10-12 banks for terms not re-pulled. null = Semrush shows no volume (under ~10 a month) or no KD.
// Golden rule: one keyword = one URL; primary T/C with the highest volume at KD 28 or below; 5 secondaries per page.
// Exceptions are listed in KEYWORD_HOLD with the reason.
const k = (keyword, intent, vol, kd) => ({ keyword, intent, vol, kd })

export const KEYWORD_PAGES = {
  '/': {
    focus: k('australian prop money', 'I/C', 720, 4),
    secondary: [k('prop money australia', 'C', 590, 27), k('props australia', 'N/C', 110, 18), k('props money', 'I/C', 50, 6), k('au props', 'C', 50, 12), k('props for sale australia', 'T', 20, 0)],
  },
  '/shop': {
    focus: k('australian prop money for sale', 'T', 30, 14),
    secondary: [k('australia prop money', 'C', 110, 0), k('aus prop money', 'I', 90, 4), k('buy prop money', 'T', 20, 6), k('buying prop money', 'T', 20, 26), k('prop money for sale', 'T', 20, 4)],
  },
  '/about': {
    focus: k('propps', 'N', 390, 25),
    secondary: [k('money props', 'C', 10, 4), k('prop shop australia', 'C', 0, 20), k('prop money store', 'C', 20, 14), k('prop money aud', 'I/C', 50, 13), k('best prop money to buy', 'C', 10, 24)],
  },
  '/contact': {
    focus: k('prop shop melbourne', 'I', 20, 19),
    secondary: [k('prop money melbourne', 'I/T', null, 27), k('prop money sydney', 'I/T', null, 21), k('contact propps', 'T/N', null, 17), k('fake money sydney', 'I/T', 30, 26)],
  },
  '/shop/new-notes': {
    // 2026-10-20: au prop money 390/KD19 is the largest easy commercial term (the .org is only #4), so it is the primary.
    focus: k('au prop money', 'C', 390, 0),
    secondary: [k('prop australian money', 'I/C', 140, 2), k('fake australian money prop', 'I/C', 140, 25), k('prop money au', 'I/C', 70, 24), k('best prop money', 'I/C', 20, 23), k('buy prop money australia', 'T', 0, 16)],
  },
  '/shop/film-and-tv-props': {
    focus: k('buy film props', 'T', 90, 17),
    secondary: [k('movie set props for sale', 'T', 90, 4), k('realistic money', 'C', 210, 28), k('movie prop money', 'T', 20, 9), k('buy movie props online australia', 'T', null, 9), k('movie props for sale australia', 'T', 40, 2)],
  },
  '/shop/money-stacks': {
    focus: k('prop money stacks', 'I/T', 20, 18),
    secondary: [k('money stack prop', 'I/C', 20, 15), k('bundle of prop money', 'T', null, 26), k('prop money bundles for sale', 'T', null, 27), k('money bundle prop', 'I/T', null, 12), k('fake stack of cash', 'I/C', 10, 22)],
  },
  '/shop/photography-props': {
    focus: k('photography props australia', 'C', 20, 3),
    secondary: [k('prop money for photoshoot', 'T', null, 19), k('prop dollar bills', 'T', 20, 9)],
  },
  '/shop/event-and-party-props': {
    focus: k('play money australia', 'C', 90, 14),
    secondary: [k('australian play money', 'C', 320, 16), k('play money', 'C', 720, 17), k('toy money', 'C', 170, 17), k('childrens play money', 'T', 90, 10), k('australia play money', 'C', 140, 9)],
  },
  '/shop/custom-and-branded-props': {
    focus: k('custom prop money', 'I/C', 20, 5),
    secondary: [k('custom money printing', 'T', 20, 10), k('custom play money', 'C', 20, 23), k('personalised play money', 'I/C', 0, 8), k('branded prop currency australia', 'I', null, 26)],
  },
  '/wholesale': {
    focus: k('wholesale prop money', 'I', 10, 23),
    secondary: [k('bulk prop money', 'T', 10, 18), k('prop money supplier', 'C', 0, 7), k('film prop supplier australia', 'C', null, 10), k('prop money manufacturer', 'C', null, 22), k('prop banknotes', 'T', 0, 9)],
  },
  '/compliance': {
    focus: k('prop money australia laws', 'I', 20, 20),
    secondary: [k('crimes currency act 1981 section 22', 'I', null, 14), k('is it legal to buy prop money', 'T', 20, 24), k('is it illegal to have prop money', 'I', 20, 13), k('rba reproduction currency guidelines', 'N', null, 27), k('prop money legal australia', 'I', null, 28)],
  },
}

// Product slug -> focus + secondary keywords
export const KEYWORD_PRODUCTS = {
  '100-australian-prop-money-for-sale': {
    // 2026-11-11 option B: primary moved to the KD 27 variant (100 dollar note australia is KD 40); prop money phrase first. Over-KD variants are in the ledger as hold.
    focus: k('australian 100 dollar note', 'I', 1900, 27),
    secondary: [k('$100 prop money', 'C', 20, 21), k('australian $100 note', 'I', 880, 18), k('100 australian dollar note', 'I', 480, 28), k('100 dollar bill prop money', 'T', 10, 17), k('movie prop money 100 dollar bill', 'I/T', 10, 21)],
  },
  '50-australian-prop-money-for-sale': {
    focus: k('50 dollar note australia', 'I', 1600, 27),
    secondary: [k('$50 prop money', 'I', 20, 23), k('50 note australia', 'I', 720, 22), k('$50 note', 'I', 590, 28), k('australian 50 dollar bill', 'I/C', 590, 17)],
  },
  '20-australian-prop-money-for-sale': {
    focus: k('20 dollar note australia', 'I', 880, 17),
    secondary: [k('$20 prop money', 'C', 10, 16), k('20 dollar prop money', 'T', 10, 25), k('$20 note australia', 'I', 260, 21), k('australian 20 dollar note', 'I', 590, 16), k('20 note australia', 'I', 480, 25)],
  },
  '10-australian-prop-money-for-sale': {
    focus: k('australian 10 dollar note', 'I', 1000, 27), // was 10 dollar note australia (KD 29)
    secondary: [k('$10 prop money', 'C', null, 14), k('$10 note australia', 'I', 480, 10), k('fake money aud', 'I/C', 20, 26), k('buy prop notes', 'T', 10, 18), k('buy fake money online', 'T', 20, 17)],
  },
  '5-australian-prop-money-for-sale': {
    focus: k('5 dollar note australia', 'I', 880, 26),
    secondary: [k('$5 prop money', 'T', null, 12), k('australian 5 dollar note', 'I', 880, 25), k('5 note australia', 'I', 110, 20), k('real prop money for sale', 'T', 20, 6), k('realistic fake money australia for sale', 'T', 20, 11)],
  },
  'film-and-tv-prop-currency-pack': {
    focus: k('prop money for film', 'T', 0, 6),
    secondary: [k('film prop money', 'I/C', 20, 20), k('movie prop money australia', 'C', 0, 12), k('cinema prop currency australia', 'I', null, 26), k('movie prop money for sale', 'T', 20, 21), k('prop money aged', 'C', 10, 18)],
  },
  'bulk-money-stack-pack': {
    focus: k('bulk prop money australia', 'C', null, 26), // 2026-11-11: was 'bag of prop money'; no bag is sold. Semrush AU (refreshed): n/a volume, KD 23
    secondary: [k('stack of prop money', 'I/C', 0, 17), k('prop money briefcase', 'C', 0, 6), k('buy fake money stacks', 'T', 20, 14), k('fake cash stacks', 'C', 20, 23), k('fake cash bundles', 'T', 10, 23)],
  },
  'photography-prop-currency-set': {
    focus: k('prop money for photography', 'T', null, 13), // Semrush AU 2026-11-11 (refreshed): n/a volume, KD 27 (was recorded as 13)
    secondary: [],
  },
  'event-and-party-prop-cash-pack': {
    focus: k('kids play money', 'C', 20, 12),
    secondary: [k('play money set', 'I/T', 20, 6), k('money toy', 'I/T', 50, 6), k('$50 play money', 'I', 20, 14), k('australian toy money', 'I/C', 170, 14), k('australian play money notes', 'C', 20, 15)],
  },
  'party-cash-cannon-kit': {
    // 2026-11-13 Semrush AU (every row refreshed, all showed Now). money gun (C 1,000) is KD 30, over the rule, so it is held (KEYWORD_HOLD).
    // Primary = cash gun (C, 140, KD 28), the highest-volume T/C term at KD 28 or below. Secondaries = the five best T/C terms at KD 28 or below.
    focus: k('cash gun', 'I/C', 140, 28),
    secondary: [k('party money gun', 'I/T', 20, 19), k('cash cannon', 'I/T', 20, 20), k('best money gun', 'C', 20, 26), k('money gun shooter', 'C', 20, 23), k('money cannon', 'I/T', 20, 27)],
  },
  'custom-and-branded-prop-currency': {
    focus: k('custom prop notes', 'I/T', null, 13),
    secondary: [],
  },
}

// Blog slug -> primary keyword (one keyword = one URL; none of these is also a page or product keyword)
export const KEYWORD_POSTS = {
  'crimes-currency-act-1981-rba-prop-money-guidelines': k('crimes currency act prop money', 'I', null, 29),
  'fake-money-vs-prop-money-the-legal-difference-in-australia': k('fake money australia', 'I', 320, 25),
  'can-you-buy-prop-money-in-australia': k('can you buy prop money', 'T', 10, 10),
  'is-it-illegal-to-buy-prop-money-australia': k('is it illegal to buy prop money', 'T', 20, 28),
  'where-to-buy-prop-money-in-australia-legally': k('where to buy prop money', 'T', 20, 7),
  '100-dollar-prop-money-which-bundle-size': k('100 dollar prop money', 'T', 20, 25),
  'ready-prop-money-stacks-for-fast-turnaround': k('ready prop money', 'I', 20, 23),
  'high-quality-prop-money-how-to-judge-it-on-camera': k('high quality prop money', 'T', 20, 24),
  'cheap-prop-money-what-you-are-really-paying-for': k('cheap prop money', 'T', 20, 2),
  'lighting-prop-money-for-camera-avoiding-glare': k('realistic prop money', 'C', 20, 13),
  'art-department-guide-weathering-prop-cash': k('prop cash for sale', 'T', 20, 23),
  'play-money-vs-prop-money-which-one-do-you-need': k('pretend money', 'I/T', 20, 11),
  'toy-money-and-play-money-for-kids-games-and-learning': k('toy money australia', 'I/C', 170, 9),
  'novelty-money-for-parties-and-events-whats-legal-in-australia': k('novelty prop money australia', 'C', null, 17),
  'how-much-prop-money-do-you-need-for-a-scene': k('prop money cost', 'I/T', 10, 25),
  'prop-money-for-photography-realistic-cash-shots-without-the-risk': k('photoshoot props australia', 'C', null, 13),
  'custom-and-branded-prop-currency-guide-for-agencies': k('custom prop money printing australia', 'C', null, 32),
  'wholesale-prop-money-for-production-companies-bulk-pricing-explained': k('prop money price', 'T', 10, 14),
  'best-australian-banknote-denominations-for-film-and-tv-scenes': k('australian banknotes', 'I', 1000, 35),
  'brief-history-of-australian-currency-notes-for-set-designers': k('old australian money notes', 'T', 320, 18),
  'buying-film-props-in-australia-a-checklist-for-art-departments': k('movie props australia', 'I/C', 20, 3),
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': k('money stack australia', 'I', 20, 23),
  'prop-money-for-content-creators-social-media-and-photoshoot-guidelines': k('prop money for content creators', 'C', null, 14),
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': k('buy prop money near me', 'T', 20, 19),
  'local-vs-overseas-prop-money-suppliers-compared': k('australian dollar prop notes', 'I', null, 20),
  // 2026-10-26 batch (Semrush AU, same day)
  'prop-dollar-vs-prop-cash-vs-prop-money': k('prop dollar', 'I', 110, 20),
  'realistic-prop-money-australia-what-realistic-should-mean': k('realistic fake money australia', 'C', 170, 18),
  'props-for-filming-ordering-prop-currency-for-a-shoot': k('props for filming', 'I/C', 20, 44),
  'monetary-toys-and-play-money-sets-for-kids': k('monetary toys', 'C', 140, 7),
  // 2026-10-26b batch: Google Autocomplete (AU) suggestions, checked in Semrush Keyword Overview the same day.
  // Volumes are 0 to 20 a month and Semrush returns no KD for them (n/a = too small to measure), so none is measurably over 28.
  // Under the ~50 volume floor they live as blog and FAQ targets only, never as page or product primaries.
  'prop-money-for-music-videos-in-australia': k('prop money for music videos', 'C', 10, 16),
  'can-you-take-prop-money-on-a-plane-in-australia': k('can you take prop money on a plane', 'I', 0, 21),
  'how-much-is-a-million-dollars-in-prop-money': k('how much is a million dollars in prop money', 'I', null, 28),
  'fake-money-for-parties-casino-nights-birthdays-weddings': k('fake money for party', 'I/T', 20, 20),
  'australian-polymer-prop-money-vs-paper-prop-notes': k('australian polymer prop money', 'I/C', 10, 4),
  'australian-play-money-where-to-buy-and-what-to-check': k('australian play money set', 'I/T', 20, 9),
  'fake-money-for-classroom-play-money-lessons-by-year-level': k('fake money for classroom', 'T', 20, 14),
  // 2026-11-13 money gun cluster (Semrush AU, refreshed)
  'money-gun-australia-how-a-cash-cannon-works-and-party-rules': k('money gun australia', 'I', 20, 17),
}

// Keywords researched on 2026-10-20 that are deliberately NOT mapped, with the reason (nothing omitted).
// type: pool = big demand that needs a product or authority first; excluded = brand safety or wrong audience.
export const KEYWORD_HOLD = [
  // 2026-11-13 money gun cluster (Semrush AU, refreshed). Product mapped: /shop/event-and-party-props/party-cash-cannon-kit/
  { keyword: 'money gun', intent: 'C', vol: 1000, kd: 30, type: 'pool', reason: 'KD 30, over the rule (was 28 on 2026-10-20). Used as natural wording on the money gun kit page; the page primary is cash gun (140/28). Revisit if KD drops to 28' },
  { keyword: 'confetti cannon', intent: 'I/C', vol: 1300, kd: 9, type: 'pool', reason: 'Informational, and we do not stock confetti cannons (to-source list)' },
  { keyword: 'money gun party / money gun toy / money shooter / money spray gun / fake money gun / make it rain money gun / toy money gun / money gun australia / prop money gun', intent: 'I/T', vol: 30, kd: 28, type: 'copy', reason: '10 to 30 searches each, same meaning as the mapped secondaries; copy wording only' },
  { keyword: 'buy money gun / cash cannon australia / money gun for sale / money gun for party / money gun for kids / money gun kit', intent: 'T', vol: 0, kd: 22, type: 'copy', reason: 'Under 10 searches; copy wording only' },
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
  // 2026-11-13 Google AU suggestions pass (docs/google-suggest-au-2026-11-13-report.md): kept as copy wording only, no slot.
  { keyword: 'australian play money coins', intent: 'C', vol: 20, kd: 8, type: 'copy', reason: 'Every secondary slot on the play money pages is taken by higher-volume terms; used as wording in the event pack and play money post copy' },
  { keyword: '20 dollar bill prop money', intent: 'I/T', vol: 10, kd: 24, type: 'copy', reason: 'Near-duplicate of 20 dollar prop money (mapped on the $20 note page); copy wording only' },
  { keyword: 'money for pretend play', intent: 'C', vol: null, kd: 25, type: 'copy', reason: 'Swapped out of the event pack secondaries for play money set (20/6); copy wording only' },
  { keyword: 'cash bundle prop', intent: 'I', vol: null, kd: 31, type: 'copy', reason: 'KD 31, swapped out of the money stacks secondaries for fake stack of cash (10/22); copy wording only' },
  { keyword: 'alibaba prop money', intent: 'C', vol: 20, kd: 19, type: 'excluded', reason: 'Competitor brand query' },
]
