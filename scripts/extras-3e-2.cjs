// Second top-up for batch 3e. Safe to re-run.
const fs = require('fs')
const f = 'scripts/posts-batch3e.cjs'
let s = fs.readFileSync(f, 'utf8')
const extras = {
  'prop-money-for-content-creators-social-media-and-photoshoot-guidelines': [
    '## Keeping your channel safe',
    'Platforms respond to complaints quickly. Keep the invoice, a photo of the markings and a note of the shoot date in a folder, so you can answer a query in minutes. Avoid thumbnails that show a stack with a claim of a win. A calm, clear explanation usually settles a dispute.',
  ],
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': [
    '## Tracking and communication',
    'Once the parcel is dispatched, you receive tracking details. Check them each morning in the week of the shoot. If the status looks stuck, contact Australia Post first, then the studio. Keep your phone near you on delivery day, because the courier may call. A small amount of attention at this stage avoids most missed deliveries, and it keeps the cash scene on schedule.',
    '## Returns and exchanges',
    'If a delivery arrives damaged or the count is wrong, tell us the same day with photos of the parcel, the packing and the notes. Keep the original packaging. We will arrange the right fix, whether that is a replacement stack or a correction. Because every order is invoiced and signed for, there is a clear record for both sides.',
  ],
  'local-vs-overseas-prop-money-suppliers-compared': [
    '## What local studios should be able to show you',
    'A good local studio can show a photo of a marked note on request, a clear description of the paper, a named business with an ABN, published shipping and refund policies and a recent order history. It can also explain how its notes are built to the Section 22 standard, in plain language. If a studio cannot do these things, keep looking. The same test applies to any overseas seller you consider.',
    '## A final word on risk',
    'Risk is the part of the price that never appears on a listing. A small saving on the unit price can be wiped out by one held parcel, one missed date or one awkward question from a venue. Weigh the whole picture, ask the questions above and choose the supplier you would be comfortable explaining to your producer.',
  ],
  'cheap-prop-money-what-you-are-really-paying-for': [
    '## What to ask for before you accept a low price',
    'If a low price tempts you, ask for a photo of an actual note, a description of the paper, confirmation that the markings are on every note, the delivery method and an invoice. A seller who answers clearly and quickly has probably earned the price. A seller who avoids the questions has probably cut the corners you cannot see. Check before you pay, because refunds from distant sellers are slow, and a missed shoot cannot be undone.',
    '## A budget-friendly plan that still looks right',
    'Spend on the notes the camera sees closely: the hero stack, the fan, the insert. Use matching but simpler stock for the background. Weather only what is handled, and reuse stacks between set-ups. Order once, keep a reserve and ask about tiers. That plan keeps the cost down and the screen quality up, without leaning on the cheapest listing you can find.',
  ],
}
for (const [slug, blocks] of Object.entries(extras)) {
  const i = s.indexOf(`slug: '${slug}'`)
  if (i < 0) throw new Error('slug ' + slug)
  const marker = '      `## Where to go next`,'
  const j = s.indexOf(marker, i)
  if (j < 0) throw new Error('marker ' + slug)
  if (s.slice(i, j).includes(blocks[0])) { console.log('already', slug); continue }
  const ins = blocks.map((b) => '      `' + b.replace(/`/g, '\\`') + '`,\n').join('')
  s = s.slice(0, j) + ins + s.slice(j)
}
fs.writeFileSync(f, s)
