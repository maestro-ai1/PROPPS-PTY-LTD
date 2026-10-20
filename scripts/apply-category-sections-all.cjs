// Replaces CATEGORY_SECTIONS and CATEGORY_FAQS in src/config/site.js with copy for all six categories
// (2026-10-20 keyword expansion). Safe to re-run.
const fs = require('fs')
const file = 'src/config/site.js'
let src = fs.readFileSync(file, 'utf8')
const crlf = src.includes('\r\n')
src = src.replace(/\r\n/g, '\n')

const S = (h2, ...paras) => ({ h2, paras })
const F = (q, a, href, label) => ({ q, a, link: { href, label } })

const sections = {
  'new-notes': [
    S('AU prop money for film, TV, theatre and photography',
      'AU prop money from PROPPS is made in Melbourne for the people who actually put cash on screen: art departments, photographers, theatre companies and trainers. The New Notes range covers all five current Australian denominations, so you can dress a till, a wallet, a briefcase or a vault from one order.',
      'Prop Australian money only works on camera when it reads correctly at working distance and stays obviously a reproduction in the hand. Ours is printed double-sided on matte archival paper, carries permanent specimen markings and is never polymer, so it is easy to tell apart from a genuine note by touch.'),
    S('Which denomination to buy',
      'Hero stacks and close-ups usually use $100 and $50 notes because their colours read strongly on camera. Tills, wallets and counter exchanges look more natural with $20, $10 and $5 notes mixed in. Most orders combine two or three denominations rather than a single one.'),
    S('The best prop money reads correctly on camera',
      "The best prop money has crisp fine print at arm's length, matte paper that avoids hot spots under studio lights, matching print on both sides and notes that survive repeated takes. Every PROPPS note is checked against that list, so stacks match from take to take.",
      'Searching for prop money au usually means a deadline. Orders start at $300 AUD, dispatch leaves our Melbourne studio within 24 business hours of payment by Australia Post Express, and delivery is free from $500 AUD.'),
    S('Specimen-marked, never spendable',
      'Some buyers search for fake Australian money prop. To be clear about what we sell: these are non-legal tender reproduction props made solely for motion pictures, television, theatre, visual arts and simulation training. They are never to be spent, handed over as payment or presented as real cash. Read the compliance guide for the standard each note is built to.'),
  ],
  'film-and-tv-props': [
    S('Buy film props for the cash scene',
      'Cash scenes are where a production most often needs props that survive a close-up. These packs give the art department counted, strapped prop currency in standard sizes, so a bank counter, a handover or a vault can be dressed without building bundles on the day.',
      'Because the stacks are consistent, the second take and the second camera see the same money as the first. That is the difference between a set that resets in a minute and one that waits while someone re-counts.'),
    S('Movie set props for sale: currency for the shot',
      'We are a currency specialist, not a general prop house. The movie set props for sale here are prop money packs for scenes that show cash, in bundle sizes from a single stack to vault quantities. You can buy movie props online in Australia for the cash scene from one supplier and keep the rest of the set dressing with a general prop house.',
      'Movie prop money and prop money for movies are the same product on this page: specimen-marked notes made for the camera, not for spending.'),
    S('Realistic money that holds up under studio lights',
      'Realistic money for film does not need to look identical to a real note. It needs to read correctly through the lens while staying clearly marked and different in the hand. Matte, non-reflective paper avoids glare, and double-sided print means a fanned or flipped stack still looks right.'),
    S('Orders for series and studios',
      'Ordering the full quantity for a block of shooting keeps stacks matching across episodes. Orders start at $300 AUD, free delivery applies from $500 AUD, and larger or repeat runs can be quoted on the wholesale page. Every pack carries specimen markings and is a non-legal tender prop.'),
  ],
  'money-stacks': [
    S('Prop money stacks for bank, vault and heist scenes',
      'Prop money stacks arrive counted and strapped, so the art department places them instead of building them. They suit heist scenes, bank vaults, desk spreads and any frame where a big visible cash volume sells the story.',
      'A money stack prop is sold by size, from a Starter Stack for a wallet shot up to 100 Stacks for a full vault. Pick the size from what the camera sees, not from the whole room.'),
    S('Bundle of prop money: sizes and when to use them',
      'A bundle of prop money in the foreground carries the close-up, and matching bundles behind it fill the frame. Prop money bundles for sale here follow the same tiers as our notes: Starter, 1, 5, 10, 50 and 100 Stacks. Each money bundle prop is strapped the same way, so continuity holds from take to take.'),
    S('Cash bundle prop and large runs',
      'A cash bundle prop looks best when the top bundle is hero quality and the rest of the set is matching stock. Larger runs qualify for wholesale tiers of 10% to 30% off, and orders over $500 ship free by Express Post.'),
  ],
  'photography-props': [
    S('Photography props Australia: prop money that photographs cleanly',
      'Photographers use prop money for editorial, product and advertising shoots where cash has to look real in print without the legal risk. Our photography sets are matte, glare-free and double-sided, so they photograph cleanly under strobes and continuous light.',
      'For a prop money photoshoot, a single set of fanned notes plus one strapped stack covers most set-ups. Orders start at $300 AUD and ship by Express Post, so you can book the studio with notes in hand.'),
    S('Photoshoot props and prop money for photography',
      'Photoshoot props Australia buyers usually need a few things: fanned notes for a flat lay, a strapped stack for a table shot and a handful of loose notes for continuity. Prop money for photography should be matte so the highlights stay clean, and double-sided so a flipped note still looks right.'),
    S('Prop dollar bills and dollar bills prop sets',
      'Prop dollar bills for a campaign are specimen-marked reproductions, never spendable. That keeps campaign images on the right side of the Crimes (Currency) Act and keeps your client comfortable with the shoot.'),
  ],
  'event-and-party-props': [
    S('Play money Australia for parties, events and classrooms',
      'Play money for events, parties and themed entertainment should be fun, clearly not real and easy to hand around. These packs use the same print quality as our film range with visible specimen markings, so guests can throw them, stack them and take photos without any confusion.',
      'Australian play money suits casino nights, proposal reveals, themed parties and kids games. Toy money and kids play money are the same packs: bright, marked and made for play.'),
    S('Play money vs prop money for events',
      'Play money is designed to look obviously unlike real notes. Prop money is built to read as real on camera while staying marked. If your event is a photo or video shoot, choose the prop notes. If it is a game or a fundraiser, play money is the better fit and the safer one.'),
    S('Ordering for a party or event',
      'Orders start at $300 AUD and ship by Australia Post Express from Melbourne, with free delivery from $500. For a larger run, ask about wholesale rates on the wholesale page. Every pack is a non-legal tender prop.'),
  ],
  'custom-and-branded-props': [
    S('Custom prop money for brands and agencies',
      'Custom prop money lets agencies and brands put their own artwork on specimen-compliant notes for campaigns, product launches, giveaways and stage sets. We handle the design brief, the compliance markings and the print run from our Melbourne studio.',
      'Typical briefs include branded currency for a launch, themed notes for a conference or stage show, and bespoke packs for a television segment. Tell us the quantity, the artwork and the deadline and we will quote.'),
    S('Custom money printing, done to the specimen standard',
      'Custom money printing for a brand still has to stay on the right side of the law. Every run carries permanent specimen markings, uses paper rather than polymer and is sold as a non-legal tender prop. Custom prop notes are never made to pass as real currency.'),
    S('Custom play money and personalised notes',
      'Custom play money and personalised play money suit school fairs, loyalty promotions and events. They use the same print quality as the standard range and clear markings, so they are safe to hand out.'),
  ],
}

const faqs = {
  'new-notes': [
    F('Where can I buy AU prop money?', 'You can buy AU prop money online from PROPPS, a Melbourne studio supplying Australian productions since 2019. Choose a denomination from $5 to $100 and a stack size, then pay by bank transfer, PayID or crypto.', '/shop/new-notes/100-australian-prop-money-for-sale/', 'See the $100 notes'),
    F('What is prop Australian money made of?', 'Our notes are printed double-sided on matte archival paper, not polymer, and carry permanent specimen markings. Real Australian banknotes are polymer, so the difference is obvious by touch.', '/compliance/', 'Read the compliance guide'),
    F('Is prop money au legal to buy?', 'Buying clearly marked, non-legal tender reproduction notes for film, television, theatre, photography or training is lawful. Spending them or presenting them as real money is not.', '/blog/is-it-illegal-to-buy-prop-money-australia/', 'Is it illegal to buy prop money?'),
    F('What makes the best prop money?', "Crisp print at arm's length, matte non-reflective paper, matching print on both sides and notes that hold up through repeated takes. Ask any supplier for photos of an actual note, front and back.", '/blog/high-quality-prop-money-how-to-judge-it-on-camera/', 'How to judge it on camera'),
    F('Is fake Australian money prop the same as your prop money?', 'Our product is a specimen-marked reproduction prop for production use, not fake currency. Every note is marked, printed on paper and sold as non-legal tender.', '/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/', 'Fake money vs prop money'),
  ],
  'film-and-tv-props': [
    F('Where can I buy film props in Australia?', 'PROPPS supplies film and television art departments with prop currency from its Eltham, Melbourne studio. Orders start at $300 AUD and ship by Australia Post Express with signature on delivery.', '/blog/buying-film-props-in-australia-a-checklist-for-art-departments/', 'Buying film props checklist'),
    F('Are these movie set props for sale only prop money?', 'Yes. We specialise in prop currency for cash scenes. For furniture, costume or general set dressing, use a general prop supplier or hire house.', '/shop/', 'Browse the full catalog'),
    F('How realistic is the money on camera?', 'It is printed on matte, non-reflective paper with double-sided print, so it reads correctly through the lens without glare. It stays clearly marked as a specimen.', '/blog/lighting-prop-money-for-camera-avoiding-glare/', 'Lighting prop money without glare'),
    F('How fast can film props be delivered?', 'Orders dispatch from Melbourne within 24 business hours of payment by Australia Post Express, signature required on delivery.', '/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/', 'Shipping and dispatch'),
    F('Can I get a better price for a series or studio order?', 'Yes. Larger and repeat runs can be quoted on the wholesale page, and ordering the whole block at once keeps stacks matching.', '/wholesale/', 'Wholesale pricing'),
  ],
  'money-stacks': [
    F('What are prop money stacks?', 'Prop money stacks are counted, strapped bundles of specimen-marked notes that the art department can place on set without building them. Sizes run from a Starter Stack to 100 Stacks.', '/blog/ready-prop-money-stacks-for-fast-turnaround/', 'Ready stacks for fast turnarounds'),
    F('How many stacks do I need for a scene?', 'Count the stacks the camera sees, add the hidden ones, double for repeat set-ups and keep one sealed as a reserve. A wallet shot needs a Starter Stack, a desk spread one or two stacks, a vault ten or more.', '/blog/how-much-prop-money-do-you-need-for-a-scene/', 'How much prop money you need'),
    F('Is a money stack prop legal to use on set?', 'Yes. Every stack carries specimen markings and is a non-legal tender prop for film, television, theatre, photography and training. Never spend it.', '/compliance/', 'Read the compliance guide'),
    F('Where can I buy a bundle of prop money?', 'You can buy a bundle of prop money from PROPPS in Melbourne. Orders start at $300 AUD, ship by Australia Post Express with signature, and are free to deliver from $500 AUD.', '/blog/where-to-buy-prop-money-in-australia-legally/', 'Where to buy prop money'),
    F('Do larger money bundle prop orders get a discount?', 'Yes. Larger runs qualify for wholesale tiers of 10% to 30% off. Ask on the wholesale page with your quantity.', '/wholesale/', 'Wholesale pricing'),
  ],
  'photography-props': [
    F('What are the best photography props for a cash shot?', 'Fanned notes for a flat lay and one strapped stack cover most set-ups. Matte, double-sided notes avoid glare and look right when flipped.', '/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/', 'Prop money for photography'),
    F('Can I use prop money for a photoshoot?', 'Yes, as long as the notes are specimen-marked and used as props, not presented as real cash. Our notes carry permanent markings and are printed on paper.', '/compliance/', 'Read the compliance guide'),
    F('How do I avoid glare on prop money?', 'Use matte, non-reflective stock, angle the key light off the notes and test at working distance before the shoot.', '/blog/lighting-prop-money-for-camera-avoiding-glare/', 'Lighting prop money'),
    F('How fast can I get photoshoot props delivered?', 'Orders dispatch from Melbourne within 24 business hours of payment by Australia Post Express, signature required.', '/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/', 'Shipping and dispatch'),
    F('Are prop dollar bills the same as real currency?', 'No. Prop dollar bills are reproductions with specimen markings and are never legal tender. They must never be spent.', '/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/', 'Fake money vs prop money'),
  ],
  'event-and-party-props': [
    F('Where can I buy play money in Australia?', 'You can buy play money Australia wide from PROPPS. Packs are clearly marked, printed to a film-grade standard and shipped by Australia Post Express from Melbourne.', '/blog/toy-money-and-play-money-for-kids-games-and-learning/', 'Toy money and play money for kids'),
    F('What is the difference between play money and prop money?', 'Play money looks obviously unlike real notes and suits games and parties. Prop money is built to read as real on camera while staying marked.', '/blog/play-money-vs-prop-money-which-one-do-you-need/', 'Play money vs prop money'),
    F('Is kids play money safe to hand out?', 'Yes. Our packs carry visible markings and are non-legal tender, so they are safe for games, classrooms and parties.', '/compliance/', 'Read the compliance guide'),
    F('Do you sell toy money and Australian play money in bulk?', 'Yes. Larger runs for schools, fundraisers and events can be quoted on the wholesale page.', '/wholesale/', 'Wholesale pricing'),
    F('Can I use these for a proposal or themed party?', 'Yes. They are popular for casino nights, proposal reveals and themed events.', '/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/', 'Novelty money for parties'),
  ],
  'custom-and-branded-props': [
    F('Can you make custom prop money for my brand?', 'Yes. We handle the design brief, the compliance markings and the print run in Melbourne. Send the quantity, artwork and deadline for a quote.', '/contact/', 'Request a quote'),
    F('Is custom money printing legal in Australia?', 'It is lawful when the notes carry permanent specimen markings, differ from genuine currency and are sold as non-legal tender props. Custom prop notes are never made to pass as real money.', '/blog/custom-and-branded-prop-currency-guide-for-agencies/', 'Custom prop currency guide'),
    F('How long does custom prop money take?', 'Timing depends on artwork and quantity. Tell us your deadline when you enquire and we will confirm what is realistic.', '/contact/', 'Contact the studio'),
    F('Do you make custom play money?', 'Yes. Custom play money and personalised play money suit schools, loyalty promotions and events.', '/shop/event-and-party-props/', 'See event and party props'),
    F('Is there a minimum order for custom prop notes?', 'Standard orders start at $300 AUD. Custom runs are quoted per job, and larger runs can use the wholesale tiers.', '/wholesale/', 'Wholesale pricing'),
  ],
}

const block = `// Extra H2 sections and FAQs shown on category pages (keyword expansion, 2026-10-20).
export const CATEGORY_SECTIONS = ${JSON.stringify(sections, null, 2)}

export const CATEGORY_FAQS = ${JSON.stringify(faqs, null, 2)}

`
const start = src.indexOf('// Extra H2 sections and FAQs shown on')
const end = src.indexOf('// Shared bundle-size pricing tiers')
if (start < 0 || end < 0) throw new Error('markers not found')
src = src.slice(0, start) + block + src.slice(end)

// Category meta/h1 for the four categories that were not yet on a data-backed primary.
const setCat = (slug, fields) => {
  const i = src.indexOf(`slug: '${slug}',`)
  if (i < 0) throw new Error('category not found ' + slug)
  const j = src.indexOf('\n  }', i)
  let obj = src.slice(i, j)
  for (const [key, value] of Object.entries(fields)) {
    const re = new RegExp(`(\\n    ${key}: ).*(,?)(?=\\n|$)`)
    obj = obj.replace(re, (_, a) => a + JSON.stringify(value).replace(/^"|"$/g, "'").replace(/\\"/g, '"') + (key === 'seoDescription' ? '' : ','))
  }
  src = src.slice(0, i) + obj + src.slice(j)
}
setCat('money-stacks', {
  h1: 'Prop Money Stacks — Money Stack Prop Bundles Australia',
  seoTitle: 'Prop Money Stacks Australia | Money Stack Prop',
  seoDescription: 'Prop money stacks Australia: strapped, counted money stack prop bundles for bank, vault and heist scenes. Specimen-marked, shipped from Melbourne. From $300.',
})
setCat('photography-props', {
  h1: 'Photography Props Australia — Prop Money for Photoshoot',
  seoTitle: 'Photography Props Australia | Prop Money for Photoshoot',
  seoDescription: 'Photography props Australia: prop money for photoshoot and editorial shoots. Matte, glare-free, specimen-marked notes shipped from Melbourne. From $300.',
})
setCat('event-and-party-props', {
  seoDescription: 'Play money Australia for parties and events: Australian play money, toy money and kids play money, clearly marked and shipped from Melbourne. From $300.',
})
setCat('custom-and-branded-props', {
  h1: 'Custom Prop Money — Custom Money Printing Australia',
  seoTitle: 'Custom Prop Money | Custom Money Printing Australia',
  seoDescription: 'Custom prop money and custom money printing in Australia for agencies and brands. Branded, specimen-marked prop notes made in Melbourne. Get a quote today.',
})

fs.writeFileSync(file, crlf ? src.replace(/\n/g, '\r\n') : src)
