// Posts built from Google Autocomplete (AU) suggestions, 2026-10-26. Volumes unverified (Semrush hourly limit hit); see the ledger.
//   node scripts/apply-new-posts.cjs scripts/posts-batch-2026-10-26b.cjs
const B = (...blocks) => blocks.join('\n\n');
const LAW = 'https://www.legislation.gov.au/';
const RBA = 'https://www.rba.gov.au/banknotes/';
const AUSPOST = 'https://auspost.com.au/';
const ABF = 'https://www.abf.gov.au/';
const AUSTRAC = 'https://www.austrac.gov.au/';
const ACCC = 'https://www.accc.gov.au/consumers/buying-products-and-services/consumer-guarantees';
const CLOSE = `Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](${AUSPOST}) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.`;

const POSTS_B = [
  // ---------------------------------------------------------------- 1
  {
    slug: 'prop-money-for-music-videos-in-australia',
    title: 'Prop Money for Music Videos in Australia: What to Buy, How Much and How to Shoot It',
    seoTitle: 'Prop Money for Music Videos in Australia: A Buyer Guide',
    excerpt: 'Prop money for music videos needs the right look, volume and paperwork. See what to buy, how much to order and how to shoot cash safely in Australia.',
    category: 'Production Planning',
    date: '2026-10-26',
    readTime: '9 min read',
    image: 'prop-money-for-music-videos-in-australia.webp',
    imageAlt: 'Prop money for music videos: fanned $100 specimen prop notes held in a hand',
    relatedCategories: ['money-stacks', 'photography-props'],
    relatedProducts: ['bulk-money-stack-pack', 'photography-prop-currency-set'],
    relatedPage: { href: '/shop/money-stacks/', label: 'Shop prop money stacks for video shoots' },
    content: B(
      `Cash is a music video staple: a fan of notes in a hand, a table of stacks, money thrown in the air. Searches like "best prop money for music videos" and "fake money for music video" come from artists, directors and small crews who need cash that looks right on camera and does not cause trouble afterwards. This guide explains what prop money for music videos should look like, how much to order, and how to shoot it safely in Australia.`,
      `It is general production advice, not legal advice. Every PROPPS note is a non-legal tender reproduction made for film, television, theatre, photography and training, and it carries specimen markings.`,
      `## What makes prop money work in a music video`,
      `Music videos are shot fast, often handheld, often with colour grading. That changes what matters:`,
      `- **Colour that survives grading.** Strong, distinct denominations ($100 green, $50 yellow-gold) hold up when the colourist pushes saturation.\n- **Matte paper.** Gloss throws highlights under LED panels and phone lights. Matte archival paper reads cleanly.\n- **Straps and stacks.** A strapped stack reads as a sum of money at any distance, so you need fewer notes for the same look.\n- **Durability.** Throwing, fanning and rain-of-cash shots damage notes quickly. Order more than you think.`,
      `For judging quality before you buy, read [how to judge high quality prop money on camera](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) and [how cinematographers light prop money](/blog/lighting-prop-money-for-camera-avoiding-glare/).`,
      `## How much to order`,
      `Count by shot type, then add a margin.`,
      `| Shot | What to order |\n|---|---|\n| Fan of notes in a hand | A bundle of one denomination from the [New Notes range](/shop/new-notes/) |\n| Table or bed covered in cash | Strapped stacks from the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/) |\n| Money thrown in the air | Loose notes, plus about 50% extra for damage |\n| Close-up of a single note | A hero note such as the [$100 prop note](/shop/new-notes/100-australian-prop-money-for-sale/) |\n| Social clip and stills | The [photography prop currency set](/shop/photography-props/photography-prop-currency-set/) |`,
      `Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) walks through the counting method, and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers large volumes.`,
      `## Shooting money safely and lawfully`,
      `The law cares about intent and presentation, not the camera. The Commonwealth [Crimes (Currency) Act 1981](${LAW}) targets making or possessing items that look like Australian currency without a lawful basis, and the Reserve Bank publishes [guidance on reproducing banknotes](${RBA}). In practice, a few habits keep a video clean:`,
      `1. **Keep the notes marked.** Never remove or hide the specimen markings.\n2. **Never spend the notes.** Not as a joke, not as a test.\n3. **Do not frame it as real cash in captions.** A giveaway-style post with prop money invites complaints from platforms and police.\n4. **Keep the invoice.** Show it with the notes if you are asked on location.\n5. **Control the notes on set.** One person counts them out and in.`,
      `Content creators should also read [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) before publishing.`,
      `## Shooting tips for artists and small crews`,
      `**Light for the paper, not the print.** Keep the key light off-axis so the notes do not flare. A single soft source from the side shows texture and avoids glare.`,
      `**Dress the notes.** Fresh notes look like a bank vault. For a street or party look, age them slightly. The [art department weathering guide](/blog/art-department-guide-weathering-prop-cash/) shows how.`,
      `**Mix denominations.** A stack of all $100 notes can look staged. Mix $50 and $20 notes in the background and keep the hero denomination in the foreground. See [the best denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/).`,
      `**Test before the day.** Shoot a few frames of the notes under your lights. Twenty minutes saves a reshoot.`,
      `## Budget and ordering for a video shoot`,
      `A small music video usually needs one bulk stack plus a few hero notes. Larger productions with several set-ups can ask about wholesale tiers of 10% to 30% off, explained in the [wholesale pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/). ${CLOSE}`,
      `Order before you need the notes in hand. A late parcel is the most common reason a shoot day starts without cash. Our guide to [ordering props for filming](/blog/props-for-filming-ordering-prop-currency-for-a-shoot/) gives a week-by-week schedule that works for a music video too.`,
      `## Common mistakes in music video cash scenes`,
      `- Ordering exactly the number of notes the shot shows, with no margin for throws and retakes.\n- Using glossy novelty notes that glare under LED lights.\n- Shooting a close-up with a note whose printing is blurred.\n- Leaving the specimen marking out of frame in every shot, then posting stills that imply real cash.\n- Collecting the notes from a prop house on the morning of the shoot instead of ordering ahead.`
    ),
    faqs: [
      { q: 'What is the best prop money for music videos?', a: 'Matte, double-sided notes in strong denominations such as $100 and $50, supplied as strapped stacks plus a few hero notes. See the [New Notes range](/shop/new-notes/) and [money stacks](/shop/money-stacks/).' },
      { q: 'Can I use fake money in a music video in Australia?', a: 'Yes, when the notes are clearly marked reproductions used as props and never as payment or to deceive. Keep the invoice and read our [compliance page](/compliance/).' },
      { q: 'How much prop money do I need for a music video?', a: 'A fan or table scene usually needs one bulk stack plus loose notes. Add about 50% extra for throws and retakes. Our [quantity guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) has examples.' },
      { q: 'Will prop money look good on camera under LED lights?', a: 'Matte paper avoids glare under LED panels and phone lights. Test a few frames before the shoot day. See [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/).' },
      { q: 'How fast can I get prop money for a shoot?', a: 'Paid orders usually leave Melbourne within 24 business hours by Express Post, with delivery by region in the [shipping policy](/shipping-policy/). Order before the shoot week.' }
    ],
    updated: '2026-10-26',
  },

  // ---------------------------------------------------------------- 2
  {
    slug: 'can-you-take-prop-money-on-a-plane-in-australia',
    title: 'Can You Take Prop Money on a Plane in Australia? Domestic and International Rules',
    seoTitle: 'Can You Take Prop Money on a Plane? Australian Guide',
    excerpt: 'Can you take prop money on a plane? Learn how to pack and declare prop notes on domestic and international flights from Australia and what to carry.',
    category: 'Compliance & Legal',
    date: '2026-10-26',
    readTime: '8 min read',
    image: 'can-you-take-prop-money-on-a-plane-in-australia.webp',
    imageAlt: 'Can you take prop money on a plane: strapped specimen prop notes packed for travel',
    relatedCategories: ['new-notes', 'film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our specimen compliance standard' },
    content: B(
      `Productions and photographers often fly with cash props between cities, and the question comes up every time: can you take prop money on a plane? In most cases yes, on a domestic flight, as long as the notes are clearly marked reproductions, packed sensibly and accompanied by paperwork. International travel adds customs rules and different laws overseas. This guide sets out how to travel with prop money from Australia without delays.`,
      `It is general information, not legal advice. Airline and border rules change, so check the sources linked below before you fly.`,
      `## The short answer`,
      `You can generally carry marked prop money in checked or cabin luggage on a domestic flight in Australia. Carry the supplier invoice, keep the specimen markings visible and expect the notes may be inspected at security. For international flights, check customs rules for both countries first. Some countries restrict reproduction currency, and a large stack of notes can draw questions even when it is a prop.`,
      `## Domestic flights: how to pack and what to carry`,
      `1. **Keep the notes in the original strapped stacks.** A neat, counted stack explains itself at the X-ray.\n2. **Carry the invoice and a one-line letter.** "Reproduction currency for [production name], supplied by PROPPS PTY LTD" is enough.\n3. **Check the airline's carry-on and checked rules.** Weight, size and valuables policies vary. The airline's website is the authority.\n4. **Do not scatter loose notes in a bag.** A crumpled, mixed pile looks like real cash.\n5. **Keep notes in your control.** Do not put a large stack in a bag you will leave unattended.`,
      `If a security officer asks, show the specimen markings and the invoice. That is what they are for. Our [compliance page](/compliance/) sets out the markings on every PROPPS note, and the guide to [prop money laws in Australia](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the legal background.`,
      `## International flights: check both ends`,
      `Travelling outside Australia is different. Three things to check:`,
      `- **Australian outbound rules.** The Australian Border Force explains what you must declare on [its travel pages](${ABF}). AUSTRAC explains [cross-border currency reporting](${AUSTRAC}), which applies to genuine physical currency at or above a set threshold. A prop is not currency, but a large face value invites questions, so carry the invoice and the letter.\n- **Destination rules.** Some countries restrict or ban reproduction banknotes, particularly polymer designs that closely copy local notes. Check the destination's customs website.\n- **Return trip.** Re-entering Australia, declare the notes honestly and carry the same paperwork.`,
      `If you are unsure, the safer option is to ship the props to the shoot location with a tracked courier instead of carrying them. [Australia Post](${AUSPOST}) and other carriers can deliver to a production address with signature.`,
      `## Shipping instead of flying with it`,
      `For many productions, posting the notes ahead is easier than carrying them. PROPPS ships from Eltham, Melbourne by Australia Post Express with a mandatory signature on delivery, usually within 24 business hours of payment. Delivery takes 1 day to Melbourne, 1 to 2 days to Sydney, Canberra, Brisbane and Adelaide, 2 to 3 days to Perth, Hobart and Darwin, and 3 to 5 days to remote sites. See the [shipping policy](/shipping-policy/) for detail, and our guide to [how fast you can get prop money in Australia](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/).`,
      `## Why markings and paperwork matter at airports`,
      `Airports are full of people whose job is to ask questions. A clearly marked specimen note and an invoice answer most of them in seconds. A note with no marking, bought from an anonymous overseas seller, does not. This is one reason we recommend [buying prop money from an Australian supplier you can identify](/blog/where-to-buy-prop-money-in-australia-legally/) and avoiding unmarked overseas listings, which are covered in our [local vs overseas comparison](/blog/local-vs-overseas-prop-money-suppliers-compared/).`,
      `## A travel checklist for prop money`,
      `| Item | Why |\n|---|---|\n| Supplier invoice | Proof of purpose and source |\n| One-line production letter | Explains the notes at a glance |\n| Notes in strapped stacks | Reads as a prop at X-ray |\n| Specimen markings visible | Shows it is a reproduction |\n| Airline policy checked | Avoids surprises at the gate |\n| Destination customs checked (international) | Some countries restrict reproductions |`,
      `${CLOSE}`
    ),
    faqs: [
      { q: 'Can you take prop money on a plane in Australia?', a: 'Generally yes on a domestic flight, if the notes are clearly marked reproductions, packed as strapped stacks and carried with the invoice. Check your airline rules before you fly.' },
      { q: 'Do I need to declare prop money at customs?', a: 'For international travel, check the Australian Border Force and destination customs rules, and carry the invoice. A prop is not currency, but a large face value can draw questions. See our [compliance page](/compliance/).' },
      { q: 'Should I post prop money instead of carrying it?', a: 'Often yes. Express Post with signature delivers to a production address and avoids airport questions. See the [shipping policy](/shipping-policy/) for times by region.' },
      { q: 'What paperwork should I carry with prop money?', a: 'The supplier invoice and a one-line production letter naming the project and supplier. Keep the specimen markings visible. Our [legal guide](/blog/is-it-illegal-to-buy-prop-money-australia/) explains why.' },
      { q: 'Is it illegal to carry prop money in public?', a: 'Carrying clearly marked props for production use is lawful, but never use them as payment or show them as real cash. Read [can you buy prop money in Australia](/blog/can-you-buy-prop-money-in-australia/).' }
    ],
    updated: '2026-10-26',
  },

  // ---------------------------------------------------------------- 3
  {
    slug: 'how-much-is-a-million-dollars-in-prop-money',
    title: 'How Much Is a Million Dollars in Prop Money? Face Value, Stacks and Cost in Australia',
    seoTitle: 'How Much Is a Million Dollars in Prop Money?',
    excerpt: 'How much is a million dollars in prop money? See stacks, face value and cost from our published price tiers, plus ways to cut the cost.',
    category: 'Ordering & Payment',
    date: '2026-10-26',
    readTime: '8 min read',
    image: 'how-much-is-a-million-dollars-in-prop-money.webp',
    imageAlt: 'How much is a million dollars in prop money: strapped specimen prop stacks of Australian notes',
    relatedCategories: ['money-stacks', 'new-notes'],
    relatedProducts: ['bulk-money-stack-pack', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/wholesale/', label: 'Ask about wholesale prop money tiers' },
    content: B(
      `"How much is a million dollars in prop money?" is a question every heist film, bank scene and music video eventually asks. The answer has two parts: how much a stack of prop notes costs, and how many stacks it takes to fill the frame with a million dollars of face value. This guide uses our published price tiers to answer both, then shows how to get the look for less.`,
      `The face value on a prop note is not real money. Our notes are non-legal tender reproductions and must never be spent. The "million dollars" is the sum the audience sees on screen, nothing more.`,
      `## The short answer`,
      `At our published tiers, 100 Stacks carries $200,000 of face value for $14,000 AUD. A million dollars of face value is therefore five of those runs: 500 stacks, or about $70,000 AUD before any wholesale discount. Cryptocurrency payments receive a further 10% off, and studio-scale orders can ask about wholesale tiers of 10% to 30% off.`,
      `## Our price tiers at a glance`,
      `| Bundle | Face value | Price (AUD) | Price per $1,000 of face value |\n|---|---|---|---|\n| Starter Stack | $1,500 | $115 | about $77 |\n| 1 Stack | $2,000 | $200 | $100 |\n| 5 Stacks | $10,000 | $850 | $85 |\n| 10 Stacks | $20,000 | $1,600 | $80 |\n| 50 Stacks | $100,000 | $7,500 | $75 |\n| 100 Stacks | $200,000 | $14,000 | $70 |`,
      `The bigger the run, the lower the cost per $1,000 of face value. The largest published bundle costs $70 per $1,000, so a million dollars of face value is about $70,000 at list price. Check the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/) for current prices.`,
      `## How many notes is that?`,
      `The note count depends on the denomination. A million dollars in $100 notes is 10,000 notes. In $50 notes it is 20,000. In $20 notes it is 50,000. Mixed stacks fall in between. This is why the denomination matters as much as the bundle size.`,
      `| Denomination | Notes for $1,000,000 face value |\n|---|---|\n| $100 | 10,000 |\n| $50 | 20,000 |\n| $20 | 50,000 |\n| $10 | 100,000 |\n| $5 | 200,000 |`,
      `Most productions choose $100 and $50 notes for a million-dollar look, because fewer notes fill a bag or table. Compare them in the [New Notes range](/shop/new-notes/) and read [the best denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/).`,
      `## Do you really need a million dollars of face value?`,
      `Usually not. The camera sees the front stacks and the first layer of notes, not what is underneath. A common trick is a "hero" layer of real prop stacks on top and cheaper fillers underneath. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows how to count what is actually visible, and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers vaults and bags in detail.`,
      `A briefcase holds far less than people expect. A scene that needs "one million in a case" often needs only a few stacks arranged to fill the lid. Plan the shot first, then order.`,
      `## Ways to bring the cost down`,
      `1. **Count the visible stacks only.** Fill the rest with cheaper filler.\n2. **Pay with cryptocurrency.** It earns a 10% discount.\n3. **Ask about wholesale tiers.** Larger runs qualify for 10% to 30% off; see the [wholesale pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/).\n4. **Mix denominations.** A $100-heavy top layer and $20s underneath is a normal real-world mix.\n5. **Reuse across scenes.** Keep the notes organised and count them back in at wrap.`,
      `For what the price includes, see [cheap prop money: what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/).`,
      `## Paperwork and delivery for a large order`,
      `A large order is a good reason to keep the supplier invoice with the production file and to plan delivery. Parcels ship from Eltham by [Australia Post Express](${AUSPOST}) with signature on delivery. For orders of this size we recommend contacting us first so the packing, the delivery address and the lead time are agreed. Use the [contact page](/contact/) or the [wholesale page](/wholesale/).`,
      `${CLOSE}`
    ),
    faqs: [
      { q: 'How much is a million dollars in prop money?', a: 'At our published tiers, 500 stacks carry $1,000,000 of face value, about $70,000 AUD at list price before wholesale or crypto discounts. See the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/).' },
      { q: 'How many $100 notes make a million dollars?', a: 'A million dollars of face value is 10,000 notes of $100. In $50 notes it is 20,000. See the [New Notes range](/shop/new-notes/) for denominations.' },
      { q: 'Can I get a discount on a large prop money order?', a: 'Yes. Cryptocurrency payments receive 10% off and studio-scale orders can ask about wholesale tiers of 10% to 30% off. See the [wholesale page](/wholesale/).' },
      { q: 'Do I need the full face value on camera?', a: 'Usually not. The lens sees the front stacks and top layer, so most scenes need far fewer notes. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/).' },
      { q: 'Is a million dollars of prop money real cash?', a: 'No. The face value is only what appears on screen. Prop notes are non-legal tender and must never be spent. See our [compliance page](/compliance/).' }
    ],
    updated: '2026-10-26',
  },

  // ---------------------------------------------------------------- 4
  {
    slug: 'fake-money-for-parties-casino-nights-birthdays-weddings',
    title: 'Fake Money for Parties in Australia: Casino Nights, Birthdays and Weddings',
    seoTitle: 'Fake Money for Parties: Casino Nights and Weddings',
    excerpt: 'Fake money for parties works best when clearly marked. See ideas for casino nights, birthdays and weddings, how much to buy and what is legal.',
    category: 'Buying Guide',
    date: '2026-10-26',
    readTime: '8 min read',
    image: 'fake-money-for-parties-casino-nights-birthdays-weddings.webp',
    imageAlt: 'Fake money for party use: clearly marked specimen prop notes fanned on a table',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    relatedPage: { href: '/shop/event-and-party-props/', label: 'Shop play money for events and parties' },
    content: B(
      `Fake money for a party is one of the easiest ways to lift a theme: poker chips need a bankroll, a casino night needs a cash prize, a wedding photo needs a bouquet of notes. The trick is picking money that looks great in photos but is clearly a prop. This guide covers ideas for casino nights, birthdays and weddings, how much to buy, and what the rules say in Australia.`,
      `It is general information, not legal advice. Every note we sell is a non-legal tender reproduction with specimen markings, which is what keeps party props on the right side of the law.`,
      `## Party ideas that use fake money`,
      `- **Casino night.** Give each guest a starting stack and let them play. Winners swap their winnings for a prize at the end of the night.\n- **Birthday party.** Use notes as table decoration, a treasure-hunt reward or a themed backdrop for photos.\n- **Wedding and hens or bucks nights.** Notes work as photo props, a "dollar dance" theme, or decor for a retro casino table. Keep them away from real tips and gifts so no one mixes them up.\n- **Kids and teen parties.** A pretend shop or bank game with play money keeps younger guests busy. See [monetary toys and play money sets](/blog/monetary-toys-and-play-money-sets-for-kids/).\n- **Fundraisers and raffles.** A table of notes sets the tone for a themed auction.`,
      `## What to look for in party fake money`,
      `1. **Clear markings.** A visible specimen marking makes it obvious the notes are not real.\n2. **Sturdy paper.** Party notes get dealt, folded and spilled. Matte archival paper survives longer than thin novelty stock.\n3. **A mix of denominations.** Casino games need small notes for betting and large ones for the cash-out.\n4. **Enough quantity.** Plan a stack per player at a casino table.\n5. **A supplier with an ABN and an invoice.** Venues and councils sometimes ask where the props came from.`,
      `Our [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/) is built for this, and the full [play money range](/shop/event-and-party-props/) shows other sizes.`,
      `## How much to buy`,
      `A simple rule: one mixed stack per player for a casino night, one bundle per table for decoration, and a small bundle per child for a pretend shop. For a 40-guest casino evening with five tables, plan about eight stacks in total (one per table for the house, plus player stacks). Order a margin for lost and damaged notes.`,
      `| Party | Suggested quantity |\n|---|---|\n| Casino night, 20 guests | 20 player stacks plus 2 house stacks |\n| Birthday decoration | 1 bundle per table |\n| Wedding photos | 1 fan plus 1 strapped stack |\n| Kids' pretend shop | 1 small bundle per child |`,
      `## What the rules say in Australia`,
      `Reproducing Australian banknotes is regulated. The Reserve Bank explains how reproductions must differ from genuine notes on its [banknote pages](${RBA}), and the offences sit in the Commonwealth [Crimes (Currency) Act 1981](${LAW}). For parties, three habits keep things simple:`,
      `- Use marked notes only.\n- Never use fake money as payment, a tip or a gift.\n- Keep party props out of tills, taxis and vending machines.`,
      `Read more in our guide to [novelty money for parties and events](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/) and the [compliance page](/compliance/).`,
      `## Photo and decor tips`,
      `Fan notes in a hand for a quick photo, or stack them in a glass bowl as a centrepiece. Matte notes photograph without glare, even with flash. For a wall display, tape a few notes inside a frame with a "specimen" marking visible. Avoid stuffing party props in a real wallet or handbag, where they can be mistaken for genuine cash.`,
      `If you are shooting a themed party for social media, read [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) first.`,
      `## Ordering for an event`,
      `Order two weeks before the party if you can. ${CLOSE} For a large venue or a series of events, ask about [wholesale rates](/wholesale/).`,
      `## Play money or prop money for a party?`,
      `Toy sets suit young children and classroom-style games. Film-grade specimen notes suit adult casino nights and photo shoots because they look better at arm's length. Our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) helps you choose.`
    ),
    faqs: [
      { q: 'Is fake money legal to use at a party in Australia?', a: 'Yes, when it is clearly marked and used as a prop only. Never use it as payment, a tip or a gift. See [novelty money for parties](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/).' },
      { q: 'How much fake money do I need for a casino night?', a: 'Plan one mixed stack per player plus a house stack for each table. Add a margin for lost and damaged notes. Browse the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/).' },
      { q: 'Can I use fake money at a wedding?', a: 'Yes, as decor, a photo prop or a casino-table theme. Keep it away from real gifts and tips. See the [play money range](/shop/event-and-party-props/).' },
      { q: 'What is the difference between play money and prop money?', a: 'Play money is for games and learning, while prop money is a film-grade reproduction for photos and productions. Both must be clearly marked. Read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/).' },
      { q: 'How do I order party money in Australia?', a: 'Order online from an Australian supplier with an ABN. PROPPS ships from Melbourne by Express Post with signature. See the [shipping policy](/shipping-policy/).' }
    ],
    updated: '2026-10-26',
  },

  // ---------------------------------------------------------------- 5
  {
    slug: 'australian-polymer-prop-money-vs-paper-prop-notes',
    title: 'Australian Polymer Prop Money vs Paper Prop Notes: Which Is Safer to Buy?',
    seoTitle: 'Australian Polymer Prop Money vs Paper Prop Notes',
    excerpt: 'Australian polymer prop money copies real notes closely and carries more legal risk. See how paper prop notes differ and what to check before you buy.',
    category: 'Compliance & Legal',
    date: '2026-10-26',
    readTime: '9 min read',
    image: 'australian-polymer-prop-money-vs-paper-prop-notes.webp',
    imageAlt: 'Australian polymer prop money compared with paper specimen prop notes in a hand',
    relatedCategories: ['new-notes', 'film-and-tv-props'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'See how our paper specimen notes are marked' },
    content: B(
      `Search for "Australian polymer prop money" and you will find overseas sellers offering polymer notes that copy real Australian banknotes. They look impressive in photos. They also sit much closer to the legal line than a paper prop with a clear specimen marking. This guide explains the difference between polymer and paper prop notes in Australia, why it matters for a production, and what to check before you buy.`,
      `It is general information, not legal advice. For a specific project, read the legislation and speak to your own lawyer.`,
      `## The short answer`,
      `For most film, television, theatre and photography work, a paper reproduction with permanent specimen markings is the safer choice. Genuine Australian banknotes are polymer. A prop made of the same material and printed to copy the real design is much harder to tell apart from the real thing, which is exactly what the law and the Reserve Bank's guidance are concerned about.`,
      `## Why material matters`,
      `The [Reserve Bank](${RBA}) publishes guidance on reproducing banknotes, and the offences are in the Commonwealth [Crimes (Currency) Act 1981](${LAW}). Both focus on whether a reproduction could be mistaken for a genuine note. Material is one of the clearest differences a person can feel in the hand:`,
      `| | Paper specimen prop note | Polymer lookalike |\n|---|---|---|\n| Feels like | Paper | Plastic, close to a real note |\n| Specimen marking | Permanent, prominent | Often faint, small or missing |\n| Distinct from real notes | Yes, by material and marking | Much less |\n| Overseas shipping risk | Lower | Higher; parcels can be held at the border |\n| Typical use | Film, TV, theatre, photography | Often marketed with misleading claims |`,
      `## Red flags in polymer prop listings`,
      `- Claims that notes "pass the pen test", are "undetectable" or "indistinguishable".\n- Specimen markings described as "optional" or removable.\n- No Australian ABN, address or phone number.\n- Discreet or unmarked packaging sold as a benefit.\n- Delivery from overseas with no tracking or signature.`,
      `Any one of these is a reason to walk away. Our guide to [the legal difference between fake money and prop money](/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/) explains why, and [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) compares the options.`,
      `## What a compliant paper prop looks like`,
      `A PROPPS note is printed double-sided on matte archival paper and carries permanent specimen markings. The size, material and treatment deliberately differ from a genuine note, so the prop reads as money on camera and as a reproduction in the hand. You can see the standard on our [compliance page](/compliance/), and the guide to [Crimes Act and RBA prop money rules](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) goes into detail.`,
      `Compare the notes yourself in the [New Notes range](/shop/new-notes/), from the [$5](/shop/new-notes/5-australian-prop-money-for-sale/) to the [$100](/shop/new-notes/100-australian-prop-money-for-sale/).`,
      `## Will paper look real enough on camera?`,
      `Yes. Cameras see colour, print detail and mass, not polymer. A matte paper note reads cleanly under studio and LED lights, and it avoids the glare polymer can throw. Read [how to judge high quality prop money on camera](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) and [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/).`,
      `## Overseas polymer: the shipping and customs problem`,
      `Polymer lookalikes ordered from overseas can be seized or held at the border, delaying a shoot. Local supply avoids this, and an Australian supplier gives you an invoice, a contact and recourse if a count is wrong. Our post on [where to buy prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/) sets out the steps.`,
      `## A buyer checklist`,
      `1. Ask for a close-up photo of an actual note, front and back, with the marking visible.\n2. Confirm the material and how it differs from a genuine note.\n3. Check for an ABN, a physical address and a phone number.\n4. Confirm signed-for delivery and an invoice.\n5. Read the refund terms.`,
      `${CLOSE}`
    ),
    faqs: [
      { q: 'Is Australian polymer prop money legal?', a: 'It depends on how closely it copies real notes and how it is marked. Polymer lookalikes carry more legal risk than paper reproductions with clear specimen markings. Read our [compliance page](/compliance/).' },
      { q: 'Why are PROPPS notes paper and not polymer?', a: 'Genuine Australian notes are polymer, so paper with a specimen marking keeps the prop clearly distinct. It also avoids glare on camera. See the [New Notes range](/shop/new-notes/).' },
      { q: 'Will paper prop money look real on camera?', a: 'Yes. Cameras see colour, detail and mass, and matte paper avoids glare. Read [how to judge high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/).' },
      { q: 'Can overseas polymer prop money be stopped at the border?', a: 'Yes, lookalike reproductions can be held by customs, delaying a shoot. An Australian supplier avoids that risk. See [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).' },
      { q: 'What markings should a legal prop note have?', a: 'Permanent, prominent specimen markings and clear differences from a genuine note. The Reserve Bank explains its approach on its [banknote pages](https://www.rba.gov.au/banknotes/).' }
    ],
    updated: '2026-10-26',
  },

  // ---------------------------------------------------------------- 6
  {
    slug: 'australian-play-money-where-to-buy-and-what-to-check',
    title: 'Australian Play Money: Where to Buy It and What to Check Before You Do',
    seoTitle: 'Australian Play Money Set: Where to Buy and What to Check',
    excerpt: 'Looking for an Australian play money set? Compare toy shops, school suppliers and specialist makers and see what to check on notes and packs.',
    category: 'Buying Guide',
    date: '2026-10-26',
    readTime: '8 min read',
    image: 'australian-play-money-where-to-buy-and-what-to-check.webp',
    imageAlt: 'Australian play money set: specimen-marked play notes fanned in a hand for kids games',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    relatedPage: { href: '/shop/event-and-party-props/', label: 'Shop Australian play money' },
    content: B(
      `Parents, teachers and party hosts search for an Australian play money set for the same reason: they want notes and coins that look Australian, feel sturdy and are clearly toys. Big retailers carry basic sets, school suppliers carry classroom packs and specialist makers carry film-grade notes. This guide compares where to buy Australian play money, and what to check on the notes, the pack and the markings before you spend.`,
      `It is general buying advice from a prop studio that makes specimen-marked notes. We are not affiliated with any retailer named below, and range and prices at shops change often, so check each store.`,
      `## The main places to buy play money in Australia`,
      `| Where | Typical strengths | Typical limits |\n|---|---|---|\n| Big-box toy and discount stores such as Kmart, Big W and Target | Low price, easy to find, good for a single child | Small packs, thin stock, limited denominations |\n| Office and stationery stores such as Officeworks | Classroom and teaching supplies | Often generic, not always Australian designs |\n| Educational suppliers | Class sets, durable coins | Higher price, school-only ranges |\n| Online marketplaces | Wide choice | Variable quality, unclear markings, slow overseas shipping |\n| Specialist makers such as PROPPS | Heavier paper, Australian denominations, clear markings, bulk quantities, invoice | Orders start at $300 AUD, so best for groups, events and schools |`,
      `Your choice depends on the group size. One child's pretend shop is a toy-aisle purchase. A class, a fundraiser or a themed event usually needs more notes than a retail pack offers.`,
      `## What to check on the notes`,
      `1. **A clear play or specimen marking.** This makes the notes safe to use in games and classrooms. Reproductions of banknotes are regulated; the Reserve Bank explains its approach on its [banknote pages](${RBA}).\n2. **Australian denominations.** A set with $5, $10, $20, $50 and $100 notes lets children practise change-making in dollars.\n3. **Paper weight.** Thin notes tear in the first game.\n4. **Print quality.** Clear numbers and bright colours help young children tell values apart.\n5. **Pack size.** Count the notes per pack, not just the pack price.`,
      `## What to check on the seller`,
      `- An ABN and a physical address.\n- A clear return policy. Ours is set out on the [refund policy](/refund-policy/) page with refunds in 3 to 8 business days.\n- A stated delivery time and tracking. We dispatch by [Australia Post Express](${AUSPOST}) with signature.\n- An invoice for schools and councils.`,
      `## Play money by age and use`,
      `**Under 5.** Chunky coins and thick notes of low value. Keep small coins away from toddlers because they can be a choking hazard; see [Product Safety Australia](https://www.productsafety.gov.au/).`,
      `**Ages 6 to 8.** A full mixed set for shop and cafe games.`,
      `**Ages 9 to 12.** Larger quantities for budgeting, auctions and market-day maths. Our guide to [toy money and play money for kids' games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/) has lesson ideas.`,
      `**Parties and events.** Bulk packs for casino nights and treasure hunts. See [fake money for parties](/blog/fake-money-for-parties-casino-nights-birthdays-weddings/).`,
      `## Printable play money: when it makes sense`,
      `Many families search for printable play money. A printout is free and fine for a single lesson, but it is flimsy, uses colour ink, and needs cutting. If you run the activity more than once, a ready-made set is cheaper in the long run and lasts for years. A printout is also a poor fit for anything where the notes will be handled by a group.`,
      `## Choosing between play money and prop money`,
      `Play money is made for games and learning. Prop money is made for film, television, theatre and photography. Both must be clearly marked and never spent. If you want a more realistic look for a school production or a themed event, see [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) and [monetary toys and play money sets for kids](/blog/monetary-toys-and-play-money-sets-for-kids/).`,
      `## How to order from PROPPS`,
      `Browse the [play money range](/shop/event-and-party-props/) and the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/). ${CLOSE}`
    ),
    faqs: [
      { q: 'Where can I buy Australian play money?', a: 'Toy and discount stores sell small sets, school suppliers sell class packs, and specialist makers sell heavier, clearly marked sets in bulk. See our [play money range](/shop/event-and-party-props/).' },
      { q: 'Is Australian play money legal?', a: 'Yes, when it is clearly marked as play money or a specimen and never used as payment. The Reserve Bank explains its approach on its [banknote pages](https://www.rba.gov.au/banknotes/).' },
      { q: 'What should an Australian play money set include?', a: 'Notes in $5, $10, $20, $50 and $100 denominations, sturdy paper and a clear play marking. Read [monetary toys and play money sets](/blog/monetary-toys-and-play-money-sets-for-kids/).' },
      { q: 'Is printable play money a good option?', a: 'It is fine for one lesson, but it is flimsy and needs cutting. A ready-made set lasts longer. See [toy money for kids games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/).' },
      { q: 'Can schools order play money in bulk?', a: 'Yes. PROPPS invoices with an ABN and ships by Express Post, with orders from $300 AUD. See the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/).' }
    ],
    updated: '2026-10-26',
  },
];

const EXTRA = require('./posts-extra-2026-10-26b.cjs');
const EXTRA2 = require('./posts-extra2-2026-10-26b.cjs');
for (const p of POSTS_B) {
  const extra = [EXTRA[p.slug], EXTRA2[p.slug]].filter(Boolean).join('\n\n');
  if (!extra) continue;
  const blocks = p.content.split('\n\n');
  blocks.splice(blocks.length - 1, 0, ...extra.split('\n\n'));
  p.content = blocks.join('\n\n');
}
module.exports = POSTS_B;
