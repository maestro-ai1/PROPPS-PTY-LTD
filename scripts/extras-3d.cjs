// Inserts extra sections into scripts/posts-batch3d.cjs before each post's "Where to go next" block.
const fs = require('fs')
const f = 'scripts/posts-batch3d.cjs'
let s = fs.readFileSync(f, 'utf8')
const extras = {
  'best-australian-banknote-denominations-for-film-and-tv-scenes': [
    '## Reading a denomination mix from the script',
    'Start with the character. A student with a part-time job carries a few $20 notes and some coins. A tradesperson paid in cash carries a roll of $50s and $20s. A bank manager has crisp, strapped bundles. A small-time crook has a mix of everything, crumpled and folded. A retail worker has a till of small notes and a bag of coins. When the script says "he pays", ask what he is paying for. A coffee is a $5 or a $10. A used car is a bundle of $100s. The denomination is part of the story.',
    '## Denominations and the size of the sum',
    'Audiences judge the size of a sum by the size of the stack and the colour on top. A thin stack of $100s reads as a few thousand dollars. A thick stack of $20s reads as the same sum but looks a little desperate. If a scene needs to feel like a lot of money in a small space, use $100s. If it needs to feel like money scraped together, use $20s and $10s. Our [$100 bundle size guide](/blog/100-dollar-prop-money-which-bundle-size/) shows how many stacks the camera needs.',
    '## Mixing mistakes to avoid',
    '- **All one denomination.** A till or a wallet of only $100 notes looks staged.\n- **Too many large notes in everyday scenes.** A shop till rarely holds many $100s.\n- **Uniform wear.** Real notes in the same wallet have different ages.\n- **Ignoring colour in the grade.** If the grade desaturates greens, a $100 stack may lose its punch. Check the notes in the grade, not only on set.\n- **Forgetting continuity.** If a character pays with a $50 and receives change, the notes on screen should add up.',
    '## Ordering by denomination',
    'Each denomination is a separate product in the [New Notes range](/shop/new-notes/), and the stack tiers are the same across all five. For a typical drama, order the hero denominations in the larger tiers and the small ones in a Starter Stack. A single order combining several denominations also helps reach the $300 minimum and the $500 free delivery threshold. If you are unsure about the mix, send the scene list through the [contact page](/contact/) and we will suggest one.',
  ],
  'brief-history-of-australian-currency-notes-for-set-designers': [
    '## A short method for researching your era',
    '1. **Fix the year.** Write the year on the scene breakdown.\n2. **Find reference photos.** Archive photographs, adverts and film stills of the era show cash in use.\n3. **Check with a researcher.** Many productions have one, and local libraries and museums often help.\n4. **Decide the level of accuracy.** A close-up needs more than a wide.\n5. **Record the decision.** Put it on the prop schedule so the next department knows.',
    '## What to ask the director',
    'Ask how visible the money is, whether any shot is an insert on a note, how much the era matters to the story and whether the production will have audiences who know the era well. A period drama broadcast to an audience that lived through the decade will notice a wrong note. A comedy with a quick cut to a till may not. The answers set the budget and the effort.',
    '## Three period examples',
    '**A 1970s pay packet.** A brown envelope with a name on the front, a handful of notes inside and a few coins. The camera sees the envelope and a corner of paper, so the note itself matters little. Spend the effort on the envelope.',
    '**A 1990s shop till.** A drawer of mixed notes and coins, with a cash register in view. The register and the receipts carry the era. A few matching notes are enough.',
    '**A modern wallet.** The camera sees a few notes as a character pays. Use current-series notes, lightly weathered. Our [New Notes range](/shop/new-notes/) covers this.',
    '## Period mistakes to avoid',
    '- **Using a current note in a period close-up.** Anyone who remembers the era will notice.\n- **Over-ageing.** Notes in a wallet are soft, not filthy.\n- **Forgetting the supporting detail.** Wallets, envelopes, registers and receipts date a scene more than the money does.\n- **Ignoring the shot.** If the note is out of focus, do not pay for accuracy you cannot see.\n- **Skipping the paperwork.** Even period reproductions must be marked and documented. See our [compliance page](/compliance/).',
  ],
  'buying-film-props-in-australia-a-checklist-for-art-departments': [
    '## Hire or buy?',
    'Furniture, lamps and large set pieces are usually hired, because the production does not need them after the shoot. Consumables, such as cash, food and anything that will be damaged or weathered, are bought. Currency sits in the second group: weathered notes cannot go back on the shelf, and many productions want a matching reserve for pickups. If the same cash appears across a series, buying once and reusing is usually cheaper than hiring repeatedly.',
    '## Working with a supplier',
    'A good supplier makes the job easier. Send a short brief with the scenes, the quantities, the denominations and the dates. Ask for the invoice and a photo of the notes. Confirm the delivery address and who will sign. Ask about reorder options if the script changes. If you have questions about marking, packaging or timing, ask before you order, not after. A supplier who answers quickly before the sale will answer quickly after it.',
    '## Handling a late change',
    'Scripts change. A table spread becomes a vault, a second day of shooting is added, a reshoot appears. A sealed reserve is the first defence. The second is a supplier who can dispatch fast: PROPPS dispatches within 24 business hours of payment by Australia Post Express. The third is a clear order history, so you can reorder matching stock. Tell the studio what changed and when you need the notes, and we will say what is realistic.',
    '## After the shoot',
    'At wrap, count the notes, bag them and label the box with the scene, the date and the count. Decide whether to keep them for pickups, reuse them on another job or store them with the production records. Do not leave notes loose in a vehicle or a location. Keep the invoice and the log together. If the production ends, store or dispose of the notes sensibly, and never let them out into circulation.',
    '## A one-page buying checklist',
    '1. Brief written and shared.\n2. Supplier chosen and checked.\n3. Quantity sized from the shots.\n4. Reserve included.\n5. Budget approved.\n6. Delivery date and signer confirmed.\n7. Storage plan agreed.\n8. Invoice and photo filed.\n9. Daily count in place.\n10. Wrap plan agreed.',
  ],
  'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right': [
    '## Planning the shot list around the money',
    'Work with the director to list the money shots. The vault reveal, the bag being filled, the counter exchange and the final spill are all different shots with different needs. Some need volume, some need quality. A pan across shelves needs matching stacks. A close-up on a hand picking up a bundle needs a hero stack. Rank the shots by importance and spend the budget where the camera lingers.',
    '## Fire, water and special effects',
    'If a scene involves fire, water, dust or explosions near the cash, talk to your special effects supervisor early. Paper notes burn, swell and stain, so plan for duplicates and protect the stock you need for other scenes. Do not use real flame near prop notes without the supervisor and the safety plan in place, and keep a separate set of notes for the effect shots, so the hero stock stays clean.',
    '## Crowds, extras and the public',
    'A heist scene shot in public draws attention. Tell the venue and the local police beforehand, brief the extras that the notes are props and keep them under the prop master. Do not hand notes to background performers. If a member of the public asks, show the specimen markings and the invoice. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains why the markings matter.',
    '## Wrap and clean-up',
    'At the end of the day count the stacks, bag them, label the bags and lock them away. Collect spilled notes from the floor, the bags and the set. Check pockets, bags and vehicles before the crew leaves. A missing note is a small problem on a set and a bigger one on a street. Log the count and the condition, and store the weathered and clean stock separately.',
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
s = s.replace("what set designers need to know about eras, colours and wear. Plan period cash.'", "what set designers need to know about eras and wear. Plan period cash.'")
s = s.replace("briefs, suppliers, budgets, compliance and delivery for cash and currency props. Buy with confidence.'", "briefs, suppliers, budgets and delivery for cash and currency props. Buy with confidence.'")
fs.writeFileSync(f, s)
