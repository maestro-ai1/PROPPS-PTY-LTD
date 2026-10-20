// Removes retired thin/variant posts from src/config/site.js and writes the 301 map to src/config/post-redirects.json.
// Run once (2026-10-20 blog consolidation): 28 keyword-variant posts fold into the closest full-length guide.
const fs = require('fs')
const file = 'src/config/site.js'
let src = fs.readFileSync(file, 'utf8')
const crlf = src.includes('\r\n')
src = src.replace(/\r\n/g, '\n')
const MAP = {
  'lighting-techniques-prop-australian-money-4k': 'lighting-prop-money-for-camera-avoiding-glare',
  'realistic-fake-money-australia-under-studio-lights': 'lighting-prop-money-for-camera-avoiding-glare',
  'art-departments-guide-prop-money-aging': 'art-department-guide-weathering-prop-cash',
  'au-prop-money-theatrical-productions': 'art-department-guide-weathering-prop-cash',
  'how-directors-use-prop-money-famous-film-and-tv-cash-scenes': 'art-department-guide-weathering-prop-cash',
  'film-props-for-sale-what-to-look-for-before-you-order': 'buying-film-props-in-australia-a-checklist-for-art-departments',
  'cryptocurrency-payments-for-studios-how-the-discount-works': 'where-to-buy-prop-money-in-australia-legally',
  'buying-prop-money-for-a-production-step-by-step': 'where-to-buy-prop-money-in-australia-legally',
  'prop-money-compliance-checklist-what-every-australian-production-must-know': 'crimes-currency-act-1981-rba-prop-money-guidelines',
  'legal-framework-props-money-australian-film': 'crimes-currency-act-1981-rba-prop-money-guidelines',
  'why-australian-prop-money-for-sale-needs-markings': 'crimes-currency-act-1981-rba-prop-money-guidelines',
  'prop-money-for-music-videos-australia': 'prop-money-for-content-creators-social-media-and-photoshoot-guidelines',
  'aus-prop-money-social-media-content-creation': 'prop-money-for-content-creators-social-media-and-photoshoot-guidelines',
  'double-sided-prop-banknotes-aud-why-both-sides-matter': 'high-quality-prop-money-how-to-judge-it-on-camera',
  'choosing-realistic-fake-money-australia': 'high-quality-prop-money-how-to-judge-it-on-camera',
  'movie-prop-cash-melbourne-and-sydney-delivery': 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia',
  'australian-prop-money-for-sale-melbourne-studio': 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia',
  'evolution-of-australian-prop-money-cinema': 'brief-history-of-australian-currency-notes-for-set-designers',
  'prop-australian-money-history-and-design': 'brief-history-of-australian-currency-notes-for-set-designers',
  'why-au-prop-money-essential-tabletop-scenes': 'how-much-prop-money-do-you-need-for-a-scene',
  'prop-money-aud-for-independent-filmmakers': 'how-much-prop-money-do-you-need-for-a-scene',
  'visual-impact-100-prop-money-stack': '100-dollar-prop-money-which-bundle-size',
  'difference-1-1-prop-money-novelty-notes': 'novelty-money-for-parties-and-events-whats-legal-in-australia',
  'best-practices-handling-fake-note-australia-props': 'fake-money-vs-prop-money-the-legal-difference-in-australia',
  'prop-money-australia-vs-overseas-listings': 'local-vs-overseas-prop-money-suppliers-compared',
  'realistic-fake-money-australia-photography-tips': 'prop-money-for-photography-realistic-cash-shots-without-the-risk',
  'prop-money-au-for-education-and-training': 'toy-money-and-play-money-for-kids-games-and-learning',
  'props-money-bulk-ordering-wholesale': 'wholesale-prop-money-for-production-companies-bulk-pricing-explained',
}
let removed = 0
for (const slug of Object.keys(MAP)) {
  const key = `slug: '${slug}'`
  const i = src.indexOf(key)
  if (i < 0) { console.log('already gone:', slug); continue }
  const start = src.lastIndexOf('\n  {\n', i) + 1
  // The object ends at the first "\n  }" (optionally followed by a comma) after the slug line.
  const re = /\n  \}(,?)(?=\n)/g
  re.lastIndex = i
  const m = re.exec(src)
  if (!m) throw new Error('object end not found: ' + slug)
  const isLast = !m[1]
  src = src.slice(0, start) + src.slice(m.index + m[0].length + 1)
  // Removing the last object leaves a dangling comma after the previous one.
  if (isLast) src = src.slice(0, start - 1).replace(/,\s*$/, '') + '\n' + src.slice(start)
  removed++
}
fs.writeFileSync(file, crlf ? src.replace(/\n/g, '\r\n') : src)
fs.writeFileSync('src/config/post-redirects.json', JSON.stringify(MAP, null, 2) + '\n')
console.log('removed', removed)
