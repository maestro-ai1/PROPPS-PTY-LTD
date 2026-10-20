// Top-up sections for batch 3e, inserted before each post's "Where to go next" block. Safe to re-run.
const fs = require('fs')
const f = 'scripts/posts-batch3e.cjs'
let s = fs.readFileSync(f, 'utf8')
const extras = {
  'prop-money-for-content-creators-social-media-and-photoshoot-guidelines': [
    '## Working with brands and sponsors',
    'If a brand sponsors your content, tell them how the money will be used. Brands care about how a video looks next to their name, and some have rules about showing cash. Agree the caption, the on-screen text and the way the notes are handled before you shoot. A short written note covering "marked prop notes, never spent, never offered as a prize" avoids misunderstandings later.',
    '## Handling comments and questions',
    'Viewers ask whether the money is real. Answer plainly. A pinned comment or a reply that says the notes are specimen-marked props takes the heat out of the thread. If someone suggests the clip is a scam, correct it early and keep a screenshot of the markings and the invoice. A calm, factual reply protects your channel and your sponsors.',
    '## A simple shoot-day routine',
    '1. Count the notes in and photograph them.\n2. Brief everyone on set about the notes.\n3. Shoot the money shots first, while the notes are fresh.\n4. Keep the notes on a tray, not in pockets.\n5. Count out at the end and bag them.\n6. Store the bag with the shoot kit, not in a bag you carry around town.',
  ],
  'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia': [
    '## A sample timeline for a Friday shoot',
    'Imagine a cash scene on Friday. Order on Monday, so payment is confirmed early in the week. Dispatch leaves Melbourne within 24 business hours of payment. Express Post then carries the parcel, and a signature is required. If everything goes smoothly, the notes arrive mid-week, which leaves a day to check the count and weather the stock. If the address is regional, or the signer is hard to reach, order a day or two earlier. The aim is simple: no scene should depend on the last possible delivery.',
    '## Choosing the right delivery address',
    'The best address is one where someone is present during business hours: a production office, a studio, a prop room or a trusted contact. Avoid addresses where nobody will be home, such as a locked location. If the shoot is at a private home, ask the owner to sign or to be available. If you are travelling, send the order ahead to the production base, and carry only what you need on the day.',
    '## Delivery for events, schools and photographers',
    'The same plan works for non-film buyers. A school fair needs the notes before the stall day, and a teacher or office staff member can sign. A photographer working from a studio can ask the studio manager to hold the parcel. An event company can send the notes to the venue contact. Tell the studio your date, give a name and a mobile number, and plan a day of slack.',
    '## What affects delivery time',
    '- **Distance from Melbourne.** Interstate and regional routes take longer.\n- **Public holidays and weekends.** Express Post follows the Australia Post calendar.\n- **Payment timing.** Dispatch starts once payment is confirmed, so pay early.\n- **The signature requirement.** A missed delivery adds a day or more.\n- **Address accuracy.** A wrong unit number or postcode costs time.',
  ],
  'local-vs-overseas-prop-money-suppliers-compared': [
    '## Questions to ask any supplier, local or overseas',
    '1. Where are the notes printed, and by whom?\n2. Can I see a photo of an actual note, front and back, showing the markings?\n3. What is the paper or material?\n4. What is the delivery method, and what happens if the parcel is held?\n5. Do I get an invoice that names the product?\n6. Who do I contact if the count is wrong?\n7. Can I reorder matching stock?',
    'Local studios usually answer these in a line or two. Overseas sellers often cannot, or do not.',
    '## A short story to illustrate the risk',
    'Picture a producer who orders a large pack of polymer notes from an overseas marketplace to save money. The parcel is held at the border for weeks, the shoot date passes and a replacement order is placed with a local studio at a rush price. The savings are gone, the schedule slipped and the producer has no paperwork for the first order. The lesson is not that every overseas order fails. It is that the cost of failure is much larger than the saving.',
    '## Supporting local makers',
    'Buying from a local studio keeps jobs and skills in the industry, and it means the supplier understands the Australian rules on reproductions. A local maker is also easier to hold to account. If a note is wrong, a call or a message gets a reply on the same day, not a week later.',
    '## How to switch suppliers safely',
    'If you have used an overseas supplier before, run a small test order with a local studio first. Compare the print, the paper, the markings and the delivery. Check the paperwork. If the test passes, move the whole order across. Keep both invoices on the file for a few months, so you can show the change if anyone asks.',
  ],
  'cheap-prop-money-what-you-are-really-paying-for': [
    '## A worked comparison',
    'Imagine two quotes for the same scene. The first is a low-cost listing: thin glossy notes, loose in a bag, one-sided print, no invoice, delivered in three weeks. The second is a local studio order: matte double-sided notes, counted and strapped, specimen-marked, with an invoice and signed-for delivery in days. The first looks cheaper. Then add the crew hours to count and band the notes, the cost of replacing notes that read badly on camera, the rush delivery for a missed date and the lack of paperwork. The second is often the cheaper job overall, and it carries far less risk.',
    '## Hidden costs to watch for',
    '- **Minimum order and shipping.** A low unit price with a high postage fee is not a bargain.\n- **Currency conversion.** An overseas price in another currency moves with the exchange rate.\n- **Customs and handling.** Charges can appear on arrival.\n- **Time.** Slow delivery can force a rush order elsewhere.\n- **Quality drift.** A repeat order may not match the first.',
    '## Cheap play money versus cheap prop money',
    'The cheapest option for a party or a classroom is often play money, which is designed to look unlike real notes and costs far less to make. That is a good choice for games. It is not a substitute for prop money in a close-up. If your budget is tight and your shot is a wide, play money in the background and a small hero stack of marked notes in the foreground is a sensible split. Our [play money vs prop money guide](/blog/play-money-vs-prop-money-which-one-do-you-need/) shows how to choose.',
    '## Saving money by planning',
    'The most reliable way to cut cost is not a cheaper note but a better plan. Count what the camera sees, reuse stacks across scenes, weather only what is handled and order once. Our guides to [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/) and [heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) show how a small order can look large on screen. A good plan can cut the quantity by a third without the audience noticing.',
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
s = s.replace("'Prop money for content creators: how to use marked prop notes in music videos, social media and photo shoots without misleading viewers. Create with confidence.'", "'Prop money for content creators: how to use marked prop notes in music videos, social posts and photo shoots without misleading viewers. Create safely.'")
s = s.replace("'Buy prop money near me: how PROPPS dispatches from Melbourne by Express Post with signature, what to expect Australia wide and how to plan delivery for a shoot.'", "'Buy prop money near me: how PROPPS dispatches from Melbourne by Express Post with signature, and how to plan delivery for your shoot. Order early.'")
s = s.replace("'Australian dollar prop notes: local studio or overseas marketplace? Compare markings, paper, delivery, paperwork and risk before you buy. Choose with confidence.'", "'Australian dollar prop notes: local studio or overseas marketplace? Compare markings, paper, delivery and risk before you buy. Choose with confidence.'")
fs.writeFileSync(f, s)
