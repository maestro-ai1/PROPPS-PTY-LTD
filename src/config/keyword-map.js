// src/config/keyword-map.js
// Internal page -> keyword map shown by <KeywordMapPanel /> on preview/dev builds ONLY
// (never rendered when VERCEL_ENV === 'production'). Source: docs/keyword-map.md and
// docs/keyword-page-mapping-audit-2026-10-12.md. Intent: T / C / I / N. null = no data in bank.
const k = (keyword, intent, vol, kd) => ({ keyword, intent, vol, kd })

export const KEYWORD_PAGES = {
  '/': {
    focus: k('australian prop money', 'C', 720, 21),
    secondary: [],
  },
  '/shop': {
    focus: k('australian prop money for sale', 'T', 20, 19),
    secondary: [k('buy prop money', 'T', 20, 19), k('buying prop money', 'T', 20, 1), k('high quality prop money', 'T', 20, 4), k('cheap prop money', 'T', 20, 28), k('fake money (supporting)', 'C', 1600, 36), k('imitation money (supporting)', 'I', 1300, 38)],
  },
  '/about': { focus: k('propps pty ltd', 'N', null, null), secondary: [k('aus prop money', 'C', 90, 16), k('au props', 'C', 50, 4)] },
  '/contact': { focus: k('contact propps', 'N', null, null), secondary: [k('prop money au', 'C', 70, 24)] },
  '/shop/new-notes': {
    // 2026-10-20 Semrush refresh: au prop money 390/KD19 is the largest easy commercial term (.org #4), so it is the primary.
    focus: k('au prop money', 'C', 390, 19),
    secondary: [k('prop australian money', 'C', 140, 21), k('fake australian money prop', 'C', 140, 28), k('prop money au', 'C', 70, 22), k('high quality prop money', 'T', 20, 4), k('buy prop money australia', 'T', 20, null)],
  },
  '/shop/film-and-tv-props': {
    focus: k('buy film props', 'T', 90, 21),
    secondary: [k('movie set props for sale', 'T', 90, 24), k('realistic money', 'C', 210, 28), k('film props for sale', 'T', 90, 31), k('movie prop money australia', 'C', null, null), k('cinema prop currency australia', 'C', null, null)],
  },
  '/shop/money-stacks': {
    focus: k('prop bundles of money australia', 'C', null, null),
    secondary: [k('money stack australia', 'C', 20, null), k('fake money stacks', 'C', 20, null), k('bulk prop money australia', 'T', null, null)],
  },
  '/shop/photography-props': {
    focus: k('prop money for photoshoot', 'C', null, null),
    secondary: [k('fake money for photography australia', 'C', null, null), k('play money', 'C', 720, 19), k('prop dollar bills', 'C', 20, null)],
  },
  '/shop/event-and-party-props': {
    focus: k('play money australia', 'C', 90, 9),
    secondary: [k('australian play money', 'C', 320, 11), k('toy money australia', 'C', 170, 9), k('childrens play money', 'C', 90, 10), k('australia play money', 'C', 140, 10), k('toy money', 'T', 170, 19)],
  },
  '/shop/custom-and-branded-props': {
    focus: k('custom prop money printing australia', 'T', null, null),
    secondary: [k('branded prop currency australia', 'C', null, null), k('prop money online', 'T', null, null)],
  },
  '/wholesale': {
    focus: k('wholesale prop money australia', 'T', null, null),
    secondary: [k('bulk prop money australia', 'T', null, null), k('prop money supplier', 'C', null, null)],
  },
  '/compliance': {
    focus: k('prop money australia laws', 'I', 20, null),
    secondary: [k('crimes currency act 1981 section 22', 'I', null, null), k('is it legal to buy prop money', 'I', null, null)],
  },
}

// Product slug -> focus + secondary keywords (best mapped terms available)
export const KEYWORD_PRODUCTS = {
  '100-australian-prop-money-for-sale': {
    focus: k('100 dollar note australia', 'I/C', 1600, 18),
    secondary: [k('australian 100 dollar note', 'I/C', 1600, 17), k('$100 note', 'I/C', 1300, 22), k('100 dollar note', 'I/C', 880, 24), k('australian $100 note', 'I/C', 720, 18)],
  },
  '50-australian-prop-money-for-sale': {
    focus: k('50 dollar note australia', 'I/C', 1600, 29),
    secondary: [k('50 note australia', 'I/C', 720, 20), k('$50 note', 'I/T', 590, 24), k('australian 50 dollar bill', 'I/T', 480, 25), k('$50 australian note', 'I/T', 320, 20)],
  },
}

// Blog slug -> primary keyword
export const KEYWORD_POSTS = {
  'can-you-buy-prop-money-in-australia': k('can you buy prop money', 'T', 20, 20),
  'is-it-illegal-to-buy-prop-money-australia': k('is it illegal to buy prop money', 'T', 20, 24),
  'cheap-prop-money-what-you-are-really-paying-for': k('cheap prop money', 'T', 20, 28),
  'high-quality-prop-money-how-to-judge-it-on-camera': k('high quality prop money', 'T', 20, 4),
  'buying-prop-money-for-a-production-step-by-step': k('buying prop money', 'T', 20, 1),
  '100-dollar-prop-money-which-bundle-size': k('100 dollar prop money', 'T', 20, 25),
  'ready-prop-money-stacks-for-fast-turnaround': k('ready prop money', 'C', 30, 10),
  'prop-money-for-music-videos-australia': k('prop money for music videos australia', 'C', null, null),
  'double-sided-prop-banknotes-aud-why-both-sides-matter': k('double-sided prop banknotes aud', 'C', null, null),
  'movie-prop-cash-melbourne-and-sydney-delivery': k('movie prop cash melbourne', 'C', null, null),
  'crimes-currency-act-1981-rba-prop-money-guidelines': k('crimes currency act prop money', 'I', null, null),
  'prop-money-compliance-checklist-what-every-australian-production-must-know': k('prop money compliance checklist', 'I', null, null),
  'lighting-prop-money-for-camera-avoiding-glare': k('lighting prop money for camera', 'I', null, null),
  'art-department-guide-weathering-prop-cash': k('prop cash for film production', 'C', null, null),
  'where-to-buy-prop-money-in-australia-legally': k('where to buy prop money', 'T', null, null),
  'play-money-vs-prop-money-which-one-do-you-need': k('play money vs prop money', 'C', null, null),
  'how-much-prop-money-do-you-need-for-a-scene': k('how much prop money do you need', 'C', null, null),
  'prop-money-for-photography-realistic-cash-shots-without-the-risk': k('prop money for photography', 'C', null, null),
  'novelty-money-for-parties-and-events-whats-legal-in-australia': k('novelty prop money australia', 'C', null, null),
  'custom-and-branded-prop-currency-guide-for-agencies': k('branded prop currency for agencies', 'T', null, null),
  'wholesale-prop-money-for-production-companies-bulk-pricing-explained': k('bulk prop money pricing', 'T', null, null),
  'fake-money-vs-prop-money-the-legal-difference-in-australia': k('imitation money', 'I', 1300, 25),
  'best-australian-banknote-denominations-for-film-and-tv-scenes': k('australian banknotes', 'I', null, null),
  'brief-history-of-australian-currency-notes-for-set-designers': k('australian currency notes', 'I', null, null),
  'how-directors-use-prop-money-famous-film-and-tv-cash-scenes': k('movie money for sale australia', 'C', null, null),
  'buying-film-props-in-australia-a-checklist-for-art-departments': k('buying film props checklist', 'T', null, null),
  'film-props-for-sale-what-to-look-for-before-you-order': k('film props for sale', 'T', 90, 31),
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': k('money stack australia', 'C', 20, null),
  'prop-money-for-content-creators-social-media-and-photoshoot-guidelines': k('fake australian money', 'I', 720, 29),
  'cryptocurrency-payments-for-studios-how-the-discount-works': k('crypto discount prop money', 'I', null, null),
  'toy-money-and-play-money-for-kids-games-and-learning': k('toy money australia', 'C', 170, 9),
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': k('prop money near me', 'T', 20, null),
  'local-vs-overseas-prop-money-suppliers-compared': k('prop money for sale near me', 'C', null, null),
}
