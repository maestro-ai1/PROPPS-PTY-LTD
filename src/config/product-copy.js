// src/config/product-copy.js
// Keyword-bearing copy blocks for product pages (golden rule: secondary keywords used once, naturally; outbound
// authority links; inbound links to category, sibling products and guides). Added 2026-10-26.
// Links use [label](href) and render through <InlineLinks />.
const RBA = 'https://www.rba.gov.au/banknotes/';
const LAW = 'https://www.legislation.gov.au/';
const AUSPOST = 'https://auspost.com.au/';

const SHIP = `Every order ships from Eltham, Melbourne by [Australia Post Express](${AUSPOST}) with a signature on delivery, and the [shipping policy](/shipping-policy/) lists times by region. If anything arrives damaged, our [refund policy](/refund-policy/) gives a refund or replacement within 3 to 8 business days.`
const LEGAL = `Like every PROPPS note, it is a non-legal tender reproduction made for film, television, theatre, photography and training. The specimen marking follows the Crimes (Currency) Act 1981 (see [legislation.gov.au](${LAW})) and the Reserve Bank's [banknote reproduction guidance](${RBA}). Read the standard on our [compliance page](/compliance/).`

const denom = (n, a, b, c, guide) => [
  {
    h2: `About the ${n} dollar prop note`,
    paras: [
      `${a} It is printed double-sided on matte archival paper, so it holds detail in a close-up and does not throw glare under studio lights. ${b}`,
      `Pair it with other denominations from the [New Notes range](/shop/new-notes/), or build a full look with a [money stack](/shop/money-stacks/). ${guide}`,
    ],
  },
  {
    h2: `Ordering ${n} dollar prop money in Australia`,
    paras: [
      `${c} Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. For studio quantities, ask about [wholesale prop money](/wholesale/) tiers of 10% to 30% off.`,
      `${LEGAL} ${SHIP}`,
    ],
  },
]

export const PRODUCT_COPY = {
  '5-australian-prop-money-for-sale': denom(
    '5',
    'The $5 prop note is the smallest denomination in the range, and the one art departments use for tills, tips and everyday purchases.',
    'People searching for the new 5 dollar note Australia often want the real note; this is the specimen-marked prop version for productions, never for spending.',
    'Searching for $5 prop money or a 5 dollar prop money bundle? Choose a bundle size above and add other denominations for a natural mix.',
    'See [the best denominations for film and TV scenes](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) for how to mix them.'
  ),
  '10-australian-prop-money-for-sale': denom(
    '10',
    'The $10 prop note suits cafe counters, taxi fares and small deals, where a lower denomination keeps a scene believable.',
    'If you looked up the $10 note Australia design, note that this is a reproduction prop with a clear specimen marking.',
    'Buyers of $10 prop money and 10 dollar prop money usually mix them with $20 and $50 notes. Pick a bundle size above.',
    'Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) helps you count.'
  ),
  '20-australian-prop-money-for-sale': denom(
    '20',
    'The $20 prop note is the working note of most cash scenes: wallets, bar tabs and street handovers.',
    'Whether you searched for the australian 20 dollar note or a $20 note Australia reference, this is the prop reproduction, made only for productions.',
    'Looking for $20 prop money or 20 dollar prop money in bulk? Choose a bundle above and combine it with higher denominations.',
    'For ageing and handling, read the [art department guide to weathering prop cash](/blog/art-department-guide-weathering-prop-cash/).'
  ),
  '50-australian-prop-money-for-sale': denom(
    '50',
    'The $50 prop note photographs in a warm yellow-gold that reads well in low light, which is why it is a favourite for dealing, payoff and heist scenes.',
    'Buyers who searched for the 50 dollar note Australia or an australian 50 dollar bill will find a specimen-marked prop here, not a spendable note.',
    'Looking for $50 prop money or a $50 australian note for a shoot? Choose your bundle above; most orders pair $50 with $100.',
    'See [prop money for a $100 scene](/blog/100-dollar-prop-money-which-bundle-size/) for the bundle logic that applies to every denomination.'
  ),
  '100-australian-prop-money-for-sale': denom(
    '100',
    'The $100 prop note is the cinema favourite: a distinctive green, an obvious value, and the note most audiences read instantly as a large sum.',
    'If you searched for the 100 dollar note Australia or the australian $100 note, this is the prop reproduction with permanent specimen markings.',
    'Searching for 100 dollar prop money or $100 prop money? Choose a bundle size above, from a Starter Stack to a vault-sized run.',
    'For a first order, the [guide to choosing a $100 bundle size](/blog/100-dollar-prop-money-which-bundle-size/) saves overspending.'
  ),
  'film-and-tv-prop-currency-pack': [
    {
      h2: 'Prop money for film and TV productions',
      paras: [
        'The Film & TV Prop Currency Pack is prop money for film built for continuity: matte, non-reflective paper, double-sided print and consistent bundles that match from take to take. Art departments use it as film prop money for desks, safes, bags and bank counters.',
        'Looking for movie prop money Australia wide, or cinema prop currency Australian crews can order in one parcel? This pack is that product. For a single close-up, add a hero denomination from the [New Notes range](/shop/new-notes/).',
      ],
    },
    {
      h2: 'Ordering film props with lead time',
      paras: [
        'Plan the order from the script breakdown. Our step-by-step guide to [props for filming](/blog/props-for-filming-ordering-prop-currency-for-a-shoot/) covers counts, margins and paperwork, and the [art department checklist](/blog/buying-film-props-in-australia-a-checklist-for-art-departments/) covers the rest. Browse the full [film and TV props](/shop/film-and-tv-props/) category.',
        `${LEGAL} ${SHIP}`,
      ],
    },
  ],
  'bulk-money-stack-pack': [
    {
      h2: 'A bag of prop money, strapped and counted',
      paras: [
        'The Bulk Money Stack Pack is a bag of prop money for the frames where volume sells the story: vaults, briefcases, tables and getaway bags. Each stack of prop money is strapped and counted, so the art department places it rather than builds it.',
        'Buyers of a prop money briefcase fill or a bundle of prop money usually add a few loose hero notes from the [New Notes range](/shop/new-notes/) for the close-up. See [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) for volume per shot.',
      ],
    },
    {
      h2: 'Bulk pricing and delivery',
      paras: [
        'Larger runs qualify for wholesale tiers of 10% to 30% off; see [wholesale prop money](/wholesale/) and the [bulk pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/). Browse every [money stack](/shop/money-stacks/).',
        `${LEGAL} ${SHIP}`,
      ],
    },
  ],
  'photography-prop-currency-set': [
    {
      h2: 'Prop money for photography',
      paras: [
        'The Photography Prop Currency Set is prop money for photography: matte, glare-free notes that photograph cleanly under strobes and window light. A fanned set and one strapped stack cover most editorial, product and advertising set-ups, and it works as prop dollar bills for a flat-lay or a hand shot.',
        'Planning a photoshoot with cash in frame? Read [realistic cash shots without the risk](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/) and the [content creator guidelines](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) before you publish.',
      ],
    },
    {
      h2: 'Ordering for a photoshoot',
      paras: [
        'Browse all [photography props](/shop/photography-props/). To test light and angle, our guide to [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/) gives a quick method.',
        `${LEGAL} ${SHIP}`,
      ],
    },
  ],
  'event-and-party-prop-cash-pack': [
    {
      h2: 'Kids play money and party cash',
      paras: [
        'The Event & Party Prop Cash Pack is kids play money for games, classrooms and themed parties. It works as money for pretend play, a casino night prop or a table decoration, and it is clearly marked so no one mistakes it for real cash. If you searched for Australian play money for sale, or want to buy kids play money in a pack that lasts, this is the set.',
        'If you are choosing between toy sets and film-grade notes, read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) and the guide to [monetary toys and play money sets](/blog/monetary-toys-and-play-money-sets-for-kids/). Comparing shops? See [where to buy Australian play money and what to check](/blog/australian-play-money-where-to-buy-and-what-to-check/). More ideas are in [toy money for kids games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/).',
      ],
    },
    {
      h2: 'Ordering for a school or event',
      paras: [
        'Browse the full [play money range](/shop/event-and-party-props/). For party rules, see [novelty money for parties and events](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/).',
        `${LEGAL} ${SHIP}`,
      ],
    },
  ],
  'custom-and-branded-prop-currency': [
    {
      h2: 'Custom prop notes for brands and agencies',
      paras: [
        'Custom and Branded Prop Currency puts your artwork on specimen-compliant custom prop notes for campaigns, product launches, giveaways and stage sets. We handle the design brief, the compliance marking and the print run in Melbourne.',
        'Agencies searching for custom prop money printing in Australia can read the [guide for agencies](/blog/custom-and-branded-prop-currency-guide-for-agencies/) before briefing us. Browse [custom and branded props](/shop/custom-and-branded-props/).',
      ],
    },
    {
      h2: 'How a custom order works',
      paras: [
        'Tell us the quantity, the artwork and the deadline on the [contact page](/contact/) and we will quote. Custom runs are refundable only for defects or damage; see the [refund policy](/refund-policy/).',
        `${LEGAL} ${SHIP}`,
      ],
    },
  ],
}
