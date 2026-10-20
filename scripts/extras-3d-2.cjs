// Second top-up for batch 3d: inserts one more section into each post before "Where to go next".
const fs = require('fs')
const f = 'scripts/posts-batch3d.cjs'
let s = fs.readFileSync(f, 'utf8')
const extras = {
  'best-australian-banknote-denominations-for-film-and-tv-scenes': [
    '## Small details that sell the cash',
    'Rubber bands, paper clips and folded receipts make a bundle look like it belongs to a person. A $5 note folded in half in a back pocket tells a different story from the same note flat in a wallet. Think about how the money is carried, not just what it is.',
  ],
  'brief-history-of-australian-currency-notes-for-set-designers': [
    '## Working with the rest of the art department',
    'Cash is only one part of a period look. Talk to the costume department about wallets and purses, to the set decorator about registers and counters and to graphics about receipts and pay packets. Agreeing the details together means the money is never the odd one out in a frame.',
  ],
  'buying-film-props-in-australia-a-checklist-for-art-departments': [
    '## Lead times and last-minute buys',
    'Good props are rarely last-minute. Allow a few days between order and first use, more if the address is remote or the delivery needs a signature from someone who is on set all day. If you must order late, tell the supplier the date and the delivery address at the start, and ask what is realistic before you pay.',
    '## Questions to ask before you pay',
    '1. Are the notes marked, and can I see a photo?\n2. When will the order dispatch, and how will it travel?\n3. Who needs to sign for it?\n4. Can I reorder matching stock later?\n5. Will I get an invoice and a written description for the production file?\n6. Is there a price break for a larger or repeat order?',
    'A supplier who answers all six in a few lines is a supplier worth using. If the answers are vague, that is information too. Keep the replies with the production file in case a question comes up after the shoot.',
  ],
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': [
    '## Reusing stock across a sequence',
    'Stacks that appear in the vault can reappear in the van, the safehouse and the final reveal, provided continuity allows. Photograph each set-up, tag the stacks and keep a movement log, so the same bundles look the same in every scene. Reuse saves money and makes the cash feel like one story rather than several props.',
    '## Budget notes for a heist sequence',
    'A heist sequence usually has more than one cash moment: the reveal, the handover, the escape and the aftermath. Budget the notes across the whole sequence, not scene by scene, and reuse stacks where the story allows. A single large order with a reserve is almost always cheaper than three small ones, and the stacks will match.',
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
