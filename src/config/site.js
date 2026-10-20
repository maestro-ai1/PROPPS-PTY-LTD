// src/config/site.js
// Single source of truth for PROPPS PTY LTD

export const SITE = {
  name: 'PROPPS PTY LTD',
  tagline: 'Cinema-Grade Reproduction Australian Prop Money for Film, Television & Visual Arts',
  domain: 'proppsptyltd.com.au',
  abn: '72 642 507 042',
  abrUrl: 'https://abr.business.gov.au/ABN/View?id=72642507042',
  locale: 'en-AU',
  currency: 'AUD',
  target: 'vercel',
  primaryColor: '#C5A059',
  gscVerification: '1qHH6DkjQ-fKpXzygDLiNTvg2E18GsdfjerP0ZsISAg',
  indexNowKey: 'propps-au-indexnow-2026',
  cartKey: 'mm-cart',
  keywords: [
    'australian prop money',
    'prop money australia',
    'prop australian money',
    'fake australian money prop',
    'realistic fake money australia',
    'au prop money',
    'fake note australia',
    'props money',
    'aus prop money',
    'prop money au',
    'australian fake money',
    'fake $100 australia',
    'fake australian dollar',
    'prop money aud',
    'prop aus money',
    '$100 prop money',
    'aud prop money',
    'australia fake money',
    'australian prop money for sale',
    'australian prop money realistic'
  ]
}

export const CONTACT = {
  abn: '72 642 507 042',
  email: 'sales&#64;proppsptyltd.com.au',
  phone: '+61 420 128 746',
  whatsapp: '+61 420 128 746',
  address: 'Suite 4, 95 Main Road, Eltham, VIC 3093, Australia',
  hq: 'Eltham, VIC 3093, Melbourne, Australia',
  country: 'Australia',
}

export const SHOP = {
  minOrder: 300,
  freeShippingThreshold: 500,
  shippingFee: 20,
  cryptoDiscount: 10,
  paymentMethods: ['bank-transfer', 'payid', 'crypto-BTC', 'crypto-USDT', 'crypto-ETH'],
}

export const FORMS = {
  provider: 'smtp',
  smtpFrom: 'sales@proppsptyltd.com.au',
  web3formsKey: '',
  resendFrom: '',
  turnstileSiteKey: '',
}

export const REPLY = {
  brand: { primary: '#C5A059', headerDark: '#0D1512' },
  currency: { code: 'AUD', symbol: '$' },
  orderPrefix: 'PP',
  headerTagline: 'Australian Prop Money · Eltham, Melbourne VIC 3093',
  dispatchLine: 'Dispatched via Australia Post Express with end-to-end tracking, fast and safe delivery. Refunded if not satisfied.',
  bizNumber: { label: 'ABN', value: '72 642 507 042' },
  channels: { email: 'sales&#64;proppsptyltd.com.au', whatsapp: '+61420128746', whatsappCountryCode: '61' },
  deadlineHours: 48,
  paymentMethods: [
    {
      id: 'bank-transfer',
      label: 'Direct Bank Deposit (EFT / Osko)',
      opening: 'Please transfer {amount} using your banking app to the verified Australian bank account below.',
      closing: 'Include your order reference {ref} in the description so our dispatch desk matches your payment immediately.',
      instantRailNote: 'Transfers via Osko or PayID clear within seconds 24/7 across all major Australian financial institutions.'
    },
    {
      id: 'payid',
      label: 'PayID (Instant Australian Clearing)',
      opening: 'Send {amount} directly to our verified Australian PayID identifier.',
      closing: 'Reference: {ref}. Funds clear instantaneously for prompt packing and same-day dispatch.',
      instantRailNote: 'Supported by CBA, ANZ, Westpac, NAB, Macquarie, Bendigo and 100+ Australian credit unions.'
    },
    {
      id: 'crypto',
      label: 'Cryptocurrency (Bitcoin / USDT TRC20 / Ethereum — 10% Discount Applied)',
      opening: 'Send the discounted balance of {amount} to our secure designated cold wallet address.',
      closing: 'A 10% crypto discount is automatically calculated on your invoice. Forward TXID or screenshot to confirm transaction clearance.',
      discount: { percent: 10, label: '10% Crypto Discount' }
    }
  ],
}

export const CHAT = {
  channels: [
    { type: 'whatsapp', value: '+61420128746' }
  ]
}

// Real receiving wallets for the 10% crypto-discount payment option.
// Single source of truth - referenced by the admin payment composer.
export const CRYPTO_WALLETS = {
  usdtTrc20: 'TXsafxfWLDFPdU8aNNec7fTZH4jkKfWYDP',
  bitcoin: 'bc1q26x7nc3r2vjzyzjvv2mzg56sudtwum4xteg3hd',
  ethereum: '0xaF80aa1ca688A1318e1F39E273cAf5895bE12749',
}

export const BRAND = {
  foundingYear: '2019',
  foundingLocation: 'Melbourne, Victoria, Australia',
  description: 'PROPPS PTY LTD is Australia\'s premier provider of cinema-grade reproduction currency and prop cash, engineered strictly in compliance with Crimes (Currency) Act 1981 Section 22 guidelines for film, television, theatre, advertising, and simulation arts.',
  milestones: [
    { year: '2019', event: 'PROPPS founded in Melbourne to serve Australian independent cinema and production crews.' },
    { year: '2021', event: 'Expanded production to custom double-sided film-grade prop currency with designated RBA specimen alterations.' },
    { year: '2023', event: 'Supplied high-density prop cash bundles for major streaming television series and nationwide stage theatre productions.' },
    { year: '2025', event: 'Launched certified Production Master Stacks and direct-to-studio bulk dispatch across Australia.' }
  ],
  differentiation: [
    'Strict legal compliance with Crimes (Currency) Act 1981 Section 22 and RBA reproduction guidelines',
    'Cinema-grade heavy-texture archival paper reproduction without reflective legal-tender polymer coatings',
    'High-definition dual-sided cinema print with authentic dimension offsets and visible SPECIMEN / REPRODUCTION identifiers',
    'Australia-wide express dispatched from Melbourne VIC 3093 with tamper-evident security strapping'
  ],
  sameAs: [
    'https://www.instagram.com/proppsptyltd',
    'https://www.linkedin.com/company/propps-pty-ltd'
  ],
  awards: []
}

export const CATEGORIES = [
  {
    slug: 'new-notes',
    name: 'New Notes',
    description: 'Our current-series Australian prop notes across all five denominations, printed double-sided on premium archival paper for film, TV, and photography production.',
    image: 'new-notes.jpeg',
    h1: 'Buy Prop Money Australia — New Notes Collection',
    seoTitle: 'Buy Prop Money Australia | New Notes',
    seoDescription: 'Buy prop money Australia across all five denominations. Realistic, specimen-marked prop notes for film, TV, and photography, dispatched fast from Melbourne.'
  },
  {
    slug: 'film-and-tv-props',
    name: 'Film & TV Props',
    description: 'Cinema and television production props engineered for on-camera realism under studio lighting.',
    image: 'film-tv-props.jpg',
    h1: 'Buy Film Props Australia — Film & TV Prop Currency',
    seoTitle: 'Buy Film Props Australia | Film & TV Props',
    seoDescription: 'Buy film props and prop cash for film production in Australia. Cinema-grade currency for movie money scenes and on-camera realism, fast Melbourne dispatch.'
  },
  {
    slug: 'money-stacks',
    name: 'Money Stacks',
    description: 'Bulk strapped stacks and bundles for scenes requiring large visible cash volumes.',
    image: 'money-stacks.jpeg',
    h1: 'Prop Bundles of Money Australia — Money Stacks',
    seoTitle: 'Prop Bundles of Money Australia | Money Stacks',
    seoDescription: 'Prop bundles of money Australia for heist, vault, and bank scenes. Bulk strapped money stacks with fast Melbourne dispatch and wholesale pricing.'
  },
  {
    slug: 'photography-props',
    name: 'Photography Props',
    description: 'Prop currency styled for print, editorial, and commercial photography shoots.',
    image: 'photography-props.jpeg',
    h1: 'Prop Money for Photoshoot — Photography Props',
    seoTitle: 'Prop Money for Photoshoot Australia',
    seoDescription: 'Prop money for photoshoot and editorial photography in Australia. Camera-accurate specimen currency styled for print and commercial shoots.'
  },
  {
    slug: 'event-and-party-props',
    name: 'Event & Party Props',
    description: 'Novelty prop cash for events, parties, and themed entertainment.',
    image: 'event-party-props.jpeg',
    h1: 'Play Money Australia — Event & Party Props',
    seoTitle: 'Play Money Australia | Event & Party Props',
    seoDescription: 'Play money Australia and novelty prop cash for parties, events, and themed entertainment. Fun, compliant prop currency dispatched fast from Melbourne.'
  },
  {
    slug: 'custom-and-branded-props',
    name: 'Custom & Branded Props',
    description: 'Bespoke and custom-branded prop currency for agencies, brands, and special productions.',
    image: 'custom-branded-props.jpeg',
    h1: 'Custom Prop Money Printing Australia',
    seoTitle: 'Custom Prop Money Printing Australia',
    seoDescription: 'Custom prop money printing Australia for agencies and brand campaigns. Bespoke branded prop currency manufactured to the same specimen compliance standard.'
  }
]

// Buyer-facing body copy shown under each category's product grid (adds the buy-intent
// content the golden rule asks for; one mapped keyword per paragraph, used once).
export const CATEGORY_BODY = {
  'new-notes': [
    'Choose a denomination from $5 to $100 and pick the bundle size that suits your scene, from a Starter Stack for a wallet shot to a 100-stack run for a vault reveal. Every note is printed double-sided on matte archival paper and carries specimen markings, so it reads well on camera and stays clearly non-tender.',
    'Orders start at $300 AUD, ship by Australia Post Express with signature on delivery, and are free to deliver from $500. Pay by bank transfer, PayID or crypto for 10% off.',
  ],
  'film-and-tv-props': [
    'If you want to buy film props that hold up under studio lighting, start here. These packs are built for art departments: matte, non-reflective paper, double-sided print and consistent bundles that match from take to take, so continuity stays simple.',
    'Film props for sale here are made and dispatched from our Eltham, Melbourne studio. Orders start at $300 AUD, dispatch usually leaves within 24 business hours of payment, and larger studio runs can be quoted on the wholesale page.',
    'Every pack carries specimen markings in line with the Crimes (Currency) Act 1981, so you can add the order to your production legal file with confidence.',
  ],
  'money-stacks': [
    'Money stacks are strapped and counted so the art department can place them rather than build them. They suit heist scenes, bank vaults, desk spreads and any frame where a big visible cash volume sells the story.',
    'Prop bundles of money come in sizes from a single stack up to full vault quantities. Larger runs qualify for wholesale tiers of 10% to 30% off, and orders over $500 ship free by Express Post.',
    'Use a stack in the foreground for close-ups and fill the background with the same bundle type to keep the look consistent across takes.',
  ],
  'photography-props': [
    'Photographers use prop money for editorial, product and advertising shoots where cash needs to look real in print without the legal risk. Our photography sets are matte, glare-free and double-sided, so they photograph cleanly under strobes and continuous light.',
    'For a prop money photoshoot, a single set of fanned notes plus one strapped stack covers most set-ups. Orders start at $300 AUD and ship by Express Post, so you can book the studio with notes in hand.',
    'All notes carry specimen markings, which keeps campaign images on the right side of the Crimes (Currency) Act.',
  ],
  'event-and-party-props': [
    'Play money for events, parties and themed entertainment should be fun, clearly not real and easy to hand around. These packs use the same print quality as our film range with visible specimen markings, so guests can throw them, stack them and take photos without any confusion.',
    'Popular uses include casino nights, proposal reveals, themed parties and kids games. For a larger run, ask about wholesale rates on the wholesale page.',
    'Orders start at $300 AUD and ship by Australia Post Express from Melbourne, with free delivery from $500.',
  ],
  'custom-and-branded-props': [
    'Custom prop money printing lets agencies and brands put their own artwork on specimen-compliant notes for campaigns, product launches, giveaways and stage sets. We handle the design brief, the compliance markings and the print run from our Melbourne studio.',
    'Typical briefs include branded currency for a launch, themed notes for a conference or stage show, and bespoke packs for a television segment. Tell us the quantity, the artwork and the deadline and we will quote.',
    'Every custom run is held to the same specimen standard as the standard range, so it stays non-legal tender and safe to use on camera.',
  ],
};

// Shared bundle-size pricing tiers, selectable on every "New Notes" product.
export const BUNDLE_TIERS = [
  { id: 'starter', label: 'Starter Stack', faceValue: 1500, price: 115 },
  { id: 'stack-1', label: '1 Stack', faceValue: 2000, price: 200 },
  { id: 'stack-5', label: '5 Stacks', faceValue: 10000, price: 850 },
  { id: 'stack-10', label: '10 Stacks', faceValue: 20000, price: 1600 },
  { id: 'stack-50', label: '50 Stacks', faceValue: 100000, price: 7500 },
  { id: 'stack-100', label: '100 Stacks', faceValue: 200000, price: 14000 }
]

function propDescription(denom) {
  return `Cinema-grade Australian $${denom} prop currency, printed double-sided on premium archival paper for authentic on-camera weight and texture. Designed for film and TV production, photography, educational training, and other legitimate simulation use. Every note carries mandatory non-legal-tender specimen markings.`
}

export const PRODUCTS = [
  {
    slug: '5-australian-prop-money-for-sale',
    name: '5 Australian Prop Money For Sale',
    price: BUNDLE_TIERS[0].price,
    category: 'new-notes',
    badge: 'New',
    featured: true,
    images: ['5-dollar-prop-note.webp'],
    shortDescription: 'Double-sided Australian $5 prop notes on premium archival paper — for film, TV, and photography productions.',
    description: propDescription(5),
    bundles: BUNDLE_TIERS,
    details: {
      denomination: '$5 AUD design',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      availability: 'Available from Starter Stack up to 100-Stack bulk sizes'
    }
  },
  {
    slug: '10-australian-prop-money-for-sale',
    name: '10 Australian Prop Money For Sale',
    price: BUNDLE_TIERS[0].price,
    category: 'new-notes',
    badge: 'New',
    featured: true,
    images: ['10-dollar-prop-note.webp'],
    shortDescription: 'Double-sided Australian $10 prop notes on premium archival paper — for film, TV, and photography productions.',
    description: propDescription(10),
    bundles: BUNDLE_TIERS,
    details: {
      denomination: '$10 AUD design',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      availability: 'Available from Starter Stack up to 100-Stack bulk sizes'
    }
  },
  {
    slug: '20-australian-prop-money-for-sale',
    name: '20 Australian Prop Money For Sale',
    price: BUNDLE_TIERS[0].price,
    category: 'new-notes',
    badge: 'New',
    featured: true,
    images: ['20-dollar-prop-note.webp'],
    shortDescription: 'Double-sided Australian $20 prop notes on premium archival paper — for film, TV, and photography productions.',
    description: propDescription(20),
    bundles: BUNDLE_TIERS,
    details: {
      denomination: '$20 AUD design',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      availability: 'Available from Starter Stack up to 100-Stack bulk sizes'
    }
  },
  {
    slug: '50-australian-prop-money-for-sale',
    name: '50 Australian Prop Money For Sale',
    price: BUNDLE_TIERS[0].price,
    category: 'new-notes',
    badge: 'Popular Choice',
    featured: true,
    images: ['50-dollar-prop-note.webp'],
    shortDescription: 'Double-sided Australian $50 prop notes on premium archival paper — for film, TV, and photography productions.',
    description: propDescription(50),
    bundles: BUNDLE_TIERS,
    details: {
      denomination: '$50 AUD design',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      availability: 'Available from Starter Stack up to 100-Stack bulk sizes'
    }
  },
  {
    slug: '100-australian-prop-money-for-sale',
    name: '100 Australian Prop Money For Sale',
    price: BUNDLE_TIERS[0].price,
    category: 'new-notes',
    badge: 'Best Seller',
    featured: true,
    images: ['100-dollar-prop-note.webp'],
    shortDescription: 'Double-sided Australian $100 prop notes on premium archival paper — for film, TV, and photography productions.',
    description: propDescription(100),
    bundles: BUNDLE_TIERS,
    details: {
      denomination: '$100 AUD design',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      availability: 'Available from Starter Stack up to 100-Stack bulk sizes'
    }
  },
  {
    slug: 'film-and-tv-prop-currency-pack',
    name: 'Film & TV Prop Currency Pack',
    price: BUNDLE_TIERS[0].price,
    category: 'film-and-tv-props',
    badge: 'Production Ready',
    featured: false,
    images: ['film-tv-props.jpg'],
    shortDescription: 'Cinema-grade prop currency curated for film and television productions, ready for cash-handling and transaction scenes.',
    description: 'Cinema-grade prop currency curated for film and television productions. Designed for authentic on-camera texture and weight in scenes involving cash handling, transactions, and reveals. Every note carries mandatory non-legal-tender specimen markings.',
    bundles: BUNDLE_TIERS,
    details: {
      'use case': 'Film & television production',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'bulk-money-stack-pack',
    name: 'Bulk Money Stack Pack',
    price: BUNDLE_TIERS[0].price,
    category: 'money-stacks',
    badge: 'High Volume',
    featured: false,
    images: ['money-stacks.jpeg'],
    shortDescription: 'Bulk strapped prop currency stacks for scenes requiring large visible cash volumes.',
    description: 'Bulk strapped prop currency stacks for scenes requiring large visible cash volumes, ideal for heist sequences, vault reveals, and bank scenes. Every note carries mandatory non-legal-tender specimen markings.',
    bundles: BUNDLE_TIERS,
    details: {
      'use case': 'Heist, vault & bank scenes',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'photography-prop-currency-set',
    name: 'Photography Prop Currency Set',
    price: BUNDLE_TIERS[0].price,
    category: 'photography-props',
    badge: 'Studio Favourite',
    featured: false,
    images: ['photography-props.jpeg'],
    shortDescription: 'Prop currency styled for editorial and commercial photography shoots — realistic on camera, specimen-marked, dispatched from Melbourne.',
    description: 'Prop currency styled for print, editorial, and commercial photography shoots, delivering a realistic look for camera close-ups. Every note carries mandatory non-legal-tender specimen markings.',
    bundles: BUNDLE_TIERS,
    details: {
      'use case': 'Editorial & commercial photography',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'event-and-party-prop-cash-pack',
    name: 'Event & Party Prop Cash Pack',
    price: BUNDLE_TIERS[0].price,
    category: 'event-and-party-props',
    badge: 'Crowd Favourite',
    featured: false,
    images: ['event-party-props.jpeg'],
    shortDescription: 'Novelty prop cash designed for events, parties, and themed entertainment.',
    description: 'Novelty prop cash designed for events, parties, and themed entertainment experiences. Every note carries mandatory non-legal-tender specimen markings.',
    bundles: BUNDLE_TIERS,
    details: {
      'use case': 'Events, parties & themed entertainment',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'custom-and-branded-prop-currency',
    name: 'Custom & Branded Prop Currency',
    price: BUNDLE_TIERS[0].price,
    category: 'custom-and-branded-props',
    badge: 'Made To Order',
    featured: false,
    images: ['custom-branded-props.jpeg'],
    shortDescription: 'Bespoke prop currency available with custom branding for agencies, brands, and special productions.',
    description: 'Bespoke and custom-branded prop currency for agencies, brands, and special productions. Contact our studio to discuss custom denominations, artwork, and branding. Every note carries mandatory non-legal-tender specimen markings.',
    bundles: BUNDLE_TIERS,
    details: {
      'use case': 'Agencies, brands & special productions',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  }
]

export const POSTS = [
  {
    slug: 'crimes-currency-act-1981-rba-prop-money-guidelines',
    title: 'Crimes (Currency) Act 1981 & RBA Prop Money Rules Explained for Australian Filmmakers',
    seoTitle: 'Prop Money Australia Laws: Crimes Act & RBA',
    excerpt: 'Prop money Australia laws in plain English: Crimes (Currency) Act 1981 Section 22, RBA rules and the markings that keep prop notes lawful. Read the guide.',
    category: 'Compliance & Legal',
    date: '2026-02-15',
    readTime: '9 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop money australia laws — bundled specimen prop currency stacks compliant with the Crimes (Currency) Act 1981',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: "If you are buying prop money for a shoot, a stage show or a training exercise, the law is the first thing your producer, insurer or legal team will ask about. This guide sets out the prop money Australia laws that matter in plain English, how the Reserve Bank of Australia (RBA) approaches reproductions of banknotes, and the practical steps an art department can take so the paperwork holds up. It is general information, not legal advice. For a specific production, check the current text of the legislation and speak to your own lawyer.\n\n## The short answer\n\nMaking, using or passing off imitation currency as real money is a serious offence in Australia. Buying and using clearly marked reproduction notes for a legitimate production purpose is a normal part of screen, stage and photographic work. The difference comes down to four things: how the notes are marked, how they differ from genuine banknotes, how they are marketed, and what you do with them afterwards.\n\n## What the Crimes (Currency) Act 1981 is aimed at\n\nThe Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) sits alongside the Criminal Code and deals with offences relating to currency. Its purpose is to protect the integrity of Australian money. In practice that means it targets counterfeit currency, and reproductions that could realistically be accepted by a reasonable person as the real thing.\n\nSection 22 is the provision our compliance standard is built around. In summary, it is concerned with making or possessing things that look like Australian currency without a lawful basis. A reproduction that is clearly and permanently marked, and that differs from a genuine note in ways a reasonable person would notice, is treated very differently from a note that has been made to deceive. Always read the current wording of the Act on the official legislation site, because amendments happen and a blog post is never a substitute for the text.\n\nTwo points are worth stating clearly:\n\n- The offence is about deception and misuse, not about the existence of a prop. Film, television, theatre and photography have used reproduction currency for as long as those industries have existed.\n- Intent matters, but intent alone is not a defence. A prop that looks identical to a real note and is carried in a wallet is a problem regardless of what the owner meant.\n\n## What the RBA says about reproductions\n\nThe [Reserve Bank of Australia](https://www.rba.gov.au/banknotes/) is responsible for Australian banknotes and publishes guidance on reproducing banknote images. The guidance exists because banknotes carry security features, and because convincing copies cause real problems for shops, banks and the public. The RBA's position, in broad terms, is that reproductions must be clearly distinguishable from genuine notes, for example through changes in size, one-sided printing, or prominent markings, and must not be used in a way that could mislead.\n\nThe RBA updates its guidance when new banknote series are released, so check its banknote pages before you finalise a brief. If your production needs something the standard guidance does not cover, such as a close-up hero shot of a new-series note, the RBA is the body to ask, and the answer should go on your production file.\n\n## How PROPPS builds notes to the standard\n\nEvery product PROPPS PTY LTD sells is a non-legal tender reproduction prop made solely for motion pictures, television, theatre, visual arts and simulation training. We have been supplying Australian productions from Eltham, Victoria since 2019, and more than 500 film, television and theatrical productions have used our work. The compliance standard behind every note is simple:\n\n1. **Specimen markings on every note.** Each note carries permanent specimen markings so that no one could mistake it for legal tender at a glance or in the hand.\n2. **Paper, not polymer.** Genuine Australian banknotes are printed on polymer. Our notes are printed on non-reflective archival paper, so the feel is different the moment someone picks one up.\n3. **Deliberate differences from a genuine note.** We design reproductions to deviate from the real thing in material and treatment, not just in a label.\n4. **Honest marketing.** We never describe prop notes as spendable, undetectable or interchangeable with real money. Our pages say what the product is and what it is for.\n5. **Traceable dispatch.** Orders ship by Australia Post Express with a mandatory signature on delivery, so every parcel has a named recipient.\n\nYou can read the same standard on our [compliance page](/compliance/), which is the page to send to a producer or insurer who wants it in one place.\n\n## A compliance checklist for productions\n\nUse this list when you brief the art department or prepare a production file. It takes about ten minutes and answers most of the questions an insurer or location owner will raise.\n\n1. Name the purpose of the notes in the call sheet or prop schedule, for example \"reproduction currency for scene 14, bank counter\".\n2. Keep a copy of the supplier's invoice and the specimen marking details on the production file.\n3. Store prop notes with the prop master or art department, not loose in a costume pocket or a personal bag.\n4. Brief the cast and background performers: the notes are for the camera and they are never spent, shown off or posted as real cash.\n5. If you shoot in a public place, tell the venue or local police beforehand, and keep a copy of the supplier details on set.\n6. Return, destroy or securely store unused notes at wrap. Do not leave them in a location or hire car.\n7. Keep close-up hero shots of any note under your own control and check the RBA's current guidance before you publish stills or trailers.\n\n## Red flags when you choose a supplier\n\nProp currency is sold by a mix of professional studios and anonymous sellers. A few signals should make you stop and ask questions:\n\n- **Claims of \"government clearance\", \"RBA approved\" or \"100% compliant\" with no source.** Regulators do not hand out approvals for individual prop sellers. If a claim has no link to a document, treat it as a sales line.\n- **Language about passing detection tests.** Anything that suggests the notes could fool a pen, a scanner or a cashier is describing the wrong product.\n- **Discreet or unmarked shipping offered as a feature.** Legitimate props do not need to hide. Traceable, signed-for delivery is the safer arrangement for everyone.\n- **No Australian business details.** An ABN, a physical address and a contact number are the minimum. You should be able to confirm who you are paying.\n- **Overseas listings of polymer notes that closely copy current Australian notes.** These sit much closer to the legal line and can be held up at the border.\n\nFor more on weighing up local and overseas options, see our guide to [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).\n\n## Using prop money on set and in public\n\nMost compliance problems happen after the camera stops, not in the shot. A few habits prevent them:\n\n- Do not hand prop notes to anyone outside the production, including as a joke or a tip.\n- Do not use them at a shop, ATM, taxi or vending machine, even as a test.\n- Do not post unmarked close-ups to social media with captions implying the cash is real.\n- Do not leave notes visible in a parked car on location.\n- If a member of the public or an officer asks, show the specimen markings and the supplier invoice. That is what they are for.\n\n## Special cases\n\n**Content creators and advertising.** The same rules apply to a social media video as to a feature film. If the clip is meant to look like a real cash giveaway, the risk is the presentation, not the prop. Read our guide to [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/).\n\n**Training and simulation.** Banks, retailers and security trainers use reproduction notes for cash-handling exercises. Keep the notes in the training room and record their return.\n\n**Theatre.** Stage use is low risk because the audience is at a distance, but backstage handling still needs control. Our [theatre-friendly range](/shop/event-and-party-props/) is built for that.\n\n## Where to go next\n\nIf you want specimen-marked notes that your legal team can sign off, start with the [New Notes range](/shop/new-notes/), compare the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, or read our guides on [whether it is illegal to buy prop money](/blog/is-it-illegal-to-buy-prop-money-australia/) and [the legal difference between fake money and prop money](/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/). Orders start at $300 AUD, delivery is free from $500, and crypto payments receive a 10% discount.\n\nThis article is general information. It is not legal advice and it does not replace the Act, the RBA's published guidance or advice from your own solicitor.",
    faqs: [
      {
        "q": "What is Section 22 of the Crimes (Currency) Act 1981?",
        "a": "In summary, Section 22 deals with making or possessing items that look like Australian currency without a lawful basis. Clearly marked reproductions that differ from genuine notes are treated very differently from notes made to deceive. Always read the current text on [legislation.gov.au](https://www.legislation.gov.au/) and see our [compliance page](/compliance/) for the standard PROPPS builds to."
      },
      {
        "q": "Is prop money legal in Australia?",
        "a": "Clearly marked, non-legal tender reproduction notes bought for film, television, theatre, photography or training are a normal and lawful part of production work. Using them as payment, or making them look real enough to deceive, is not. Browse the [New Notes range](/shop/new-notes/) to see specimen-marked product."
      },
      {
        "q": "What do the RBA reproduction guidelines require?",
        "a": "The RBA expects reproductions to be clearly distinguishable from genuine banknotes, through size, printing or prominent markings, and not to be used in a way that could mislead. The guidance changes with new banknote series, so check the [RBA banknote pages](https://www.rba.gov.au/banknotes/) before you brief your art department."
      },
      {
        "q": "Do I need paperwork to use prop money on a film set?",
        "a": "No licence is needed, but keep the supplier invoice and a note of the specimen markings on your production file. Insurers, location owners and police can then see at a glance what the notes are. Our [guide to buying prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/) lists what to ask for."
      },
      {
        "q": "Can prop money be shipped by Australia Post?",
        "a": "Yes. PROPPS dispatches by Australia Post Express with a mandatory signature on delivery, so every parcel has a named recipient. See our [shipping and dispatch guide](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for timing."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'lighting-prop-money-for-camera-avoiding-glare',
    title: 'How Cinematographers Light Prop Money on Camera to Eliminate Glare',
    seoTitle: 'Lighting Prop Money on Camera Without Glare',
    excerpt: 'Practical lighting techniques for Director of Photography crews shooting close-up cash counting and tabletop exchanges.',
    category: 'Cinematography & Lighting',
    date: '2026-01-20',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Lighting prop money for camera — fanned $100 specimen prop notes for glare-free filming',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: [
      '100-australian-prop-money-for-sale',
      '50-australian-prop-money-for-sale',
      'film-and-tv-prop-currency-pack'
    ],
    content: `Shooting prop money under bright studio lighting presents unique optical challenges. Real polymer [Australian banknotes](https://www.rba.gov.au/) reflect high-output LED panels and Fresnel fixtures, creating blown-out specular highlights that ruin close-up focus.\n\nPROPPS PTY LTD engineered our cinema series prop notes specifically to overcome this obstacle. Our 120gsm matte finish absorbs harsh incident light while maintaining vivid saturation for the emerald greens of the $100 and the rich ochre gold of the $50.\n\nDP Pro Tips:\n- Use soft, diffused side lighting (cross-key) rather than direct top-down lighting to highlight note texture without glare.\n- Incorporate subtle back-rim lighting to define the edges of strapped bundles against dark mahogany desks or metal vault surfaces.\n- In high-speed slow-motion shots (120fps+), our matte paper maintains crisp micro-contrast as notes flutter through the air.`
  },
  {
    slug: 'art-department-guide-weathering-prop-cash',
    title: 'The Art Department Guide: Weathering Prop Cash for Underworld Realism',
    seoTitle: 'Weathering Prop Cash: Art Department Guide',
    excerpt: 'How scenic artists create believable, weathered street currency without destroying props.',
    category: 'Art Department',
    date: '2025-11-10',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop cash for film production — weathered bundled specimen prop currency stacks',
    relatedCategories: ['film-and-tv-props', 'money-stacks'],
    relatedProducts: ['film-and-tv-prop-currency-pack', 'bulk-money-stack-pack'],
    content: `Pristine, crisp banknotes right out of the wrapper can immediately pull viewers out of a gritty crime thriller or street-level drama. Genuine circulated cash is softened, creased, and carries subtle patina from countless human transactions.\n\nTo achieve organic aging:\n- Mechanical Tumbling: Run stacks through clean cloth tumblers or gently crumple and re-flatten individual notes by hand.\n- Coffee & Tea Washes: Dilute instant dark roast coffee to create a warm, non-toxic staining wash applied with a soft atomizer spray.\n- Edge Burnishing: Lightly drag graphite or fine charcoal along the edges of the bundle to simulate years of friction in wallets and cash drawers.\n\nPROPPS PTY LTD also offers pre-distressed bundles prepared by professional Melbourne scenic artists, saving your art department dozens of prep hours. Industry bodies like [Screen Australia](https://www.screenaustralia.gov.au/) publish broader art department resources worth reviewing alongside your prop list.`
  },
  {
    slug: 'where-to-buy-prop-money-in-australia-legally',
    title: 'Where to Buy Prop Money in Australia (Legally)',
    seoTitle: 'Where to Buy Prop Money in Australia (Legally)',
    excerpt: 'Where to buy prop money in Australia legally: how to pick a local studio, check specimen markings and avoid risky overseas listings. Order with confidence.',
    category: 'Buying Guide',
    date: '2026-03-01',
    readTime: '9 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Buy prop money australia — fanned $50 specimen prop note stack',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: "Search for \"buy prop money Australia\" and the results are a mixed bag: overseas marketplaces, unmarked novelty listings, forum posts and the occasional professional studio. Not all of it is lawful to import, carry or use on an Australian set. This guide explains where to buy prop money in Australia legally, how to compare your options, what to check before you pay and what a sensible order looks like. It is general information, not legal advice.\n\n## The short answer\n\nBuy marked, non-legal tender reproduction notes from an Australian business you can identify, with an ABN, a physical address, clear product descriptions and traceable delivery. That combination gives you an invoice for the production file, a local contact if something goes wrong and notes that are built to the standard in the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) and the Reserve Bank's reproduction guidance. You can read the detail in our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/).\n\n## Your five options for buying prop money\n\nMost buyers end up choosing between these five routes. Each has a different risk profile.\n\n### 1. A local prop currency studio\n\nA specialist Australian studio is the best fit for film, television, theatre and advertising work. You get notes made for the screen, specimen markings on every note, an invoice, local support and Australia Post Express delivery. PROPPS PTY LTD works this way from Eltham, Victoria, and has supplied more than 500 Australian film, television and theatrical productions since 2019. Browse the [New Notes range](/shop/new-notes/) to see the product.\n\n### 2. A general prop hire house\n\nSome hire houses stock a few bundles of stage cash. This works for a single day of theatre, but selection is limited, notes may be reused and finishes vary. It is a reasonable fallback for tiny jobs, not a plan for a series.\n\n### 3. Party and novelty shops\n\nNovelty and party shops sell play money that looks nothing like real currency. That is safe and suits children's games, fundraisers and classrooms, but it will not hold up in a close-up. Our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) explains where the line sits.\n\n### 4. Overseas marketplaces\n\nOverseas listings are where most trouble starts. Sellers often ship polymer notes that copy current Australian designs closely, with faint or no specimen markings, long delivery times and no one to contact. Parcels can be held at the border. Our comparison of [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) goes through the differences in detail.\n\n### 5. Making your own\n\nDo not print your own. A home-printed copy has no safeguards, no markings and no paperwork, and a convincing copy is exactly what the law is written to catch.\n\n## What to check before you buy\n\nSpend five minutes on this checklist before you place an order with any seller.\n\n1. **Specimen markings.** Every note should carry permanent, prominent markings. Ask for a close-up photo of the front and back of an actual note, not a render.\n2. **Material.** Real Australian banknotes are polymer. Reproductions printed on matte paper are easy to tell apart by touch. PROPPS notes are printed double-sided on 120gsm archival paper.\n3. **Business details.** Look for an ABN, a physical address and a working phone number. You should be able to say who you paid.\n4. **Honest descriptions.** The product page should say the notes are non-legal tender props made for film, television, theatre, visual arts or training. Treat any claim of \"government clearance\", \"undetectable\" quality or \"unmarked\" delivery as a warning.\n5. **Delivery.** Traceable shipping with a signature on delivery is the sensible standard. PROPPS ships by [Australia Post](https://auspost.com.au/) Express with a mandatory signature.\n6. **Policies.** A real supplier publishes shipping, refund and privacy policies and a compliance page.\n7. **Paperwork.** You should receive an invoice you can keep on the production file.\n\n## Why local matters\n\nBuying from an Australian studio changes a number of small things that add up on a production:\n\n- **Speed.** Express dispatch from Melbourne takes days, not weeks. A late change to the call sheet is manageable.\n- **Recourse.** If a parcel is damaged or a count is wrong, you can ring someone.\n- **Paperwork.** A local invoice answers questions from insurers and location owners.\n- **Currency fit.** A local studio keeps up with changes to the real note designs, so your on-screen cash looks current.\n- **Lower legal risk.** Local specimen-marked notes avoid the border and compliance questions that come with overseas polymer copies.\n\n## How much to expect to pay\n\nPrices depend on denomination, bundle size and finish. At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount. Notes are sold in stacks, from a Starter Stack up to 100 Stacks for large scenes. For help matching quantity to the shot, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/). If you are watching the budget, our [cheap prop money guide](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains where a low price usually comes from.\n\n## A simple buying process\n\n1. **List the scenes.** Write down which scenes show cash, which denominations are visible and whether any shot is a close-up.\n2. **Choose the denominations.** Start with the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, then add $20, $10 and $5 notes for tills and wallets.\n3. **Choose stack sizes.** Match stack size to what the camera sees. Our guide to [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/) shows how.\n4. **Order early enough.** Express dispatch is quick, but a signature is required, so plan who will be at the address.\n5. **File the paperwork.** Keep the invoice and a note of the specimen markings with the production file.\n6. **Control the notes on set.** Store them with the prop master and count them in and out each day.\n\n## Buying for different uses\n\nThe right order depends on the job, and so does what you should ask the supplier.\n\n- **Film and television.** You need volume, matching stacks and fast dispatch. Ask about wholesale rates if the order will repeat across a season, and keep the invoice with the production file.\n- **Theatre.** Notes are seen from a distance, but they are handled backstage every night. Ask about durability and how many notes a run needs. Our [event and party props](/shop/event-and-party-props/) suit lighter stage use.\n- **Photography.** Close-ups show print detail and paper finish. Matte stock avoids glare under strobes. See our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/).\n- **Advertising and branded content.** Agencies often want a branded or custom look. Our [custom and branded props](/shop/custom-and-branded-props/) cover that, and the legal checklist still applies.\n- **Training and simulation.** Cash-handling trainers need notes they can reuse and account for. Keep them in the training room and record their return.\n- **Events and parties.** Marked novelty notes are enough. Keep them out of circulation and away from shops and taxis.\n\n## Warning signs in a listing\n\nA few phrases tell you a listing is written for the wrong reason. Be cautious of copy that promises notes which pass detection tests, describes the product as \"real looking\" without mentioning markings, offers discreet or unmarked delivery as a feature, or claims government clearance without linking to a document. A professional studio describes what the product is, who it is for and how it is marked. It does not need to sound like a secret.\n\nBe equally careful with listings that hide the seller. If there is no ABN, no address, no phone number and no policies, there is nobody to hold responsible when a parcel goes missing or a count is short. Those are the same details an insurer or location owner will want to see.\n\n## What not to do after you buy\n\nThe law is mostly concerned with what happens after the purchase. Never spend prop notes, never hand them out as tips or gifts, never cover or crop the markings in publicity stills and never post unmarked close-ups that suggest the cash is real. If someone asks about a note, show the specimen markings and the invoice. Our guide to [whether it is illegal to buy prop money](/blog/is-it-illegal-to-buy-prop-money-australia/) goes through the common situations that cause problems, and the [Reserve Bank of Australia](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions.\n\n## Where to go next\n\nIf you are ready to order, start with the [New Notes range](/shop/new-notes/). If your production needs larger quantities, see [Money Stacks](/shop/money-stacks/) and our [wholesale page](/wholesale/), or [contact the studio](/contact/) with your shot list. If a legal team is reviewing the purchase, send them to the [compliance page](/compliance/).\n\nThis article is general information, not legal advice.",
    faqs: [
      {
        "q": "Where is the best place to buy prop money in Australia?",
        "a": "A local prop currency studio with an ABN, specimen-marked notes, an invoice and signed-for delivery is the safest choice for film, TV, theatre and photography. Browse the [New Notes range](/shop/new-notes/) to see what a compliant order looks like."
      },
      {
        "q": "Can I buy prop money from overseas?",
        "a": "You can, but overseas listings often ship polymer notes that copy Australian designs closely, with weak markings and long delivery, and parcels can be held at the border. Compare the options in [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/)."
      },
      {
        "q": "How do I know a prop money seller is legitimate?",
        "a": "Check for an ABN, a physical address, specimen markings on every note, honest product descriptions, published policies and traceable delivery. Our [compliance page](/compliance/) sets out what we expect from our own notes."
      },
      {
        "q": "Is there a minimum order for prop money?",
        "a": "At PROPPS, orders start at $300 AUD and delivery is free from $500 AUD. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) to size an order to the shot."
      },
      {
        "q": "Can I buy prop money near me?",
        "a": "PROPPS is based in Eltham, Melbourne and dispatches across Australia by Australia Post Express with signature on delivery. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for timing in your state."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'play-money-vs-prop-money-which-one-do-you-need',
    title: 'Play Money vs Prop Money: Which One Do You Need?',
    seoTitle: 'Play Money vs Prop Money: Which Do You Need?',
    excerpt: 'Board-game play money and cinema-grade prop money look similar in photos but serve very different jobs on set or on camera.',
    category: 'Buying Guide',
    date: '2026-03-11',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Play money australia vs prop money — handful of $20 and $50 specimen prop notes',
    relatedCategories: ['event-and-party-props', 'photography-props'],
    relatedProducts: ['event-and-party-prop-cash-pack', 'photography-prop-currency-set'],
    content: `"Play money" and "prop money" get used interchangeably online, but they're built for different jobs. Board-game play money is a toy — thin card stock, cartoonish colours, sized for children's hands, and regulated under Australia's general toy and [product safety standards](https://www.productsafety.gov.au/) rather than currency law.\n\nProp money is closer to the genuine article in size, weight, and print detail, which is exactly why it needs the stricter specimen-marking treatment under the Crimes (Currency) Act rather than toy safety rules. If you're planning a kids' party game night, [play money style products](/shop/event-and-party-props/) with bold novelty branding are the right (and cheapest) choice. If you're shooting a close-up cash-counting scene, a photo booth backdrop, or an Instagram unboxing video where the cash needs to read as real on camera, you want cinema-grade [prop money for photography](/shop/photography-props/) instead.\n\nMixing the two up is the single most common mistake we see from first-time buyers — a stack of toy play money will not survive a macro lens the way archival-paper prop notes do.`
  },
  {
    slug: 'how-much-prop-money-do-you-need-for-a-scene',
    title: 'How Much Prop Money Do You Need for a Scene? A Quantity Guide for Producers',
    seoTitle: 'How Much Prop Money Do You Need for a Scene?',
    excerpt: 'A practical breakdown of bundle sizes, face values, and camera coverage to help line producers budget the right amount of prop cash.',
    category: 'Production Planning',
    date: '2026-03-21',
    readTime: '5 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop bundles of money australia — stacked specimen prop currency bundles for film scenes',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack', '100-australian-prop-money-for-sale'],
    content: `Under-ordering prop cash is one of the most common last-minute production scrambles — a duffel bag that reads as "half full" on a wide shot rarely fixes itself with clever framing. Before you place an order, work backwards from the shot list.\n\nRules of thumb our studio uses with production designers:\n- Close-up counting scenes: 1–2 [strapped stacks](/shop/money-stacks/) is usually enough — the camera only ever sees the top and edges.\n- Duffel bag or briefcase reveals: budget 10–20 stacks depending on bag size, since empty space reads immediately on camera.\n- Vault or heist wide shots: 50+ stacks, often supplemented with background-only "filler" bundles that never get a close-up.\n- Table-toss or "money rain" sequences: order in bulk and expect some wear — this is the one scenario where cheaper stock is actually the right call.\n\nOur [bundle-size selector](/shop/new-notes/) scales from a Starter Stack right up to 100-Stack bulk orders, and organisations like [Ausfilm](https://ausfilm.com.au/) publish general Australian production-budgeting resources worth reviewing alongside your prop list if this is your first local shoot.`
  },
  {
    slug: 'prop-money-for-photography-realistic-cash-shots-without-the-risk',
    title: 'Prop Money for Photography: Getting Realistic Cash Shots Without the Risk',
    seoTitle: 'Prop Money for Photography: Realistic Shots',
    excerpt: 'How editorial and commercial photographers get camera-convincing cash shots while staying clear of currency-reproduction law.',
    category: 'Photography',
    date: '2026-03-31',
    readTime: '4 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Prop money for photoshoot — handheld fan of $50 specimen prop notes',
    relatedCategories: ['photography-props'],
    relatedProducts: ['photography-prop-currency-set'],
    content: `Editorial and commercial photographers shooting finance, lifestyle, or "wealth" concept imagery face a narrower problem than filmmakers: a still frame gives the viewer far longer to scrutinise a note than 24 frames a second does. Colour accuracy and print sharpness matter more here than they do on a moving-camera set.\n\nOur [photography prop currency](/shop/photography-props/) range is printed dual-sided at high resolution specifically for macro and studio lighting setups, where a blurry or flat-toned prop note is immediately obvious to a trained eye. Reference the [Reserve Bank of Australia](https://www.rba.gov.au/) banknote design pages if you want to understand exactly which security features and colour bands to deliberately avoid replicating — genuine notes carry features like the see-through window and tactile bars that reproduction props must never imitate.\n\nAs with every product on this site, our photography props carry visible specimen markings, so even a full-bleed close-up crop stays compliant.`
  },
  {
    slug: 'novelty-money-for-parties-and-events-whats-legal-in-australia',
    title: "Novelty Money for Parties and Events: What's Legal in Australia",
    seoTitle: "Novelty Money for Parties: What's Legal in AU",
    excerpt: 'A quick compliance primer for event planners ordering novelty cash for bucks nights, birthdays, and themed parties.',
    category: 'Compliance & Legal',
    date: '2026-04-10',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Novelty prop money australia — mixed $20 and $50 specimen prop notes for party props',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    content: `Novelty cash for a bucks night, milestone birthday, or casino-themed party sits in a legal grey area in a lot of buyers' minds — but the rule is actually simple. Under the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/), the same specimen-marking requirements apply whether the notes end up on a film set or scattered across a party table.\n\nWhat this means practically for event planners:\n- Confirm every note is clearly and permanently marked "SPECIMEN" or equivalent, not just a sticker that can be peeled off.\n- Avoid any product marketed as "looks 100% real" or "undetectable" — that framing itself can indicate non-compliant stock, and the [ACCC](https://www.accc.gov.au/) treats misleading product claims seriously regardless of the product category.\n- Keep quantities and use reasonable — novelty cash is for photos, games, and decoration, never for handing to venues, vendors, or guests as if it were payment.\n\nOur [Event & Party Props](/shop/event-and-party-props/) range is built to this standard from the outset, so you can focus on the party, not the paperwork.`
  },
  {
    slug: 'custom-and-branded-prop-currency-guide-for-agencies',
    title: 'Custom & Branded Prop Currency: A Guide for Agencies and Brand Campaigns',
    seoTitle: 'Custom & Branded Prop Currency for Agencies',
    excerpt: 'What agencies need to plan for when commissioning custom-branded prop currency for campaigns, launches, or in-store activations.',
    category: 'Custom Production',
    date: '2026-04-20',
    readTime: '5 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Custom prop money printing australia — fanned specimen $50 prop note stack',
    relatedCategories: ['custom-and-branded-props'],
    relatedProducts: ['custom-and-branded-prop-currency'],
    content: `Branded "prop cash" — think a giant novelty cheque's smaller cousin — is a recurring ask from marketing agencies running promotions, product launches, or social content that plays on the "cash prize" visual without an actual cash giveaway. Because it borrows currency-style layout and colour, it still falls under the same specimen-marking rules as film props.\n\nBefore commissioning custom artwork, confirm with your studio:\n- The client's logo and campaign typography are cleared for use — if you're referencing another brand's trademark alongside currency styling, check with [IP Australia](https://www.ipaustralia.gov.au/) on trademark boundaries first.\n- The design still carries a visible non-legal-tender marking, even with custom branding layered over it.\n- Turnaround time accounts for a design-approval round before print — custom runs take longer than our standard [New Notes](/shop/new-notes/) denominations.\n\nOur [Custom & Branded Props](/shop/custom-and-branded-props/) service handles agency and brand campaign runs directly — [get in touch](/contact/) with your campaign brief and target quantity for a quote.`
  },
  {
    slug: 'wholesale-prop-money-for-production-companies-bulk-pricing-explained',
    title: 'Wholesale Prop Money for Production Companies: Bulk Pricing Explained',
    seoTitle: 'Wholesale Prop Money: Bulk Pricing Explained',
    excerpt: 'How wholesale tiers work for production companies ordering prop currency across multiple projects or a full shooting season.',
    category: 'Wholesale',
    date: '2026-04-30',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Wholesale prop money australia — bulk bundled specimen prop currency stacks',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack'],
    content: `Production companies running multiple projects, or a full season of a returning series, typically outgrow one-off retail orders fast. Buying prop cash per-scene instead of per-season usually costs more overall once express shipping fees are added up.\n\nOur wholesale program is built for exactly this pattern: bulk [Money Stacks](/shop/money-stacks/) pricing that scales down the per-note cost as order volume increases, plus a dedicated studio contact so reorders between shoot blocks don't need to go through the standard checkout each time. This mirrors how [Screen Australia](https://www.screenaustralia.gov.au/)-supported productions typically structure their broader vendor relationships — one negotiated account instead of many ad hoc purchases.\n\nIf your production slate includes more than one project this year, our [wholesale page](/wholesale/) has current tiered pricing, or you can [contact our studio desk](/contact/) directly for a custom quote against your specific shot list.`
  },
  {
    slug: 'fake-money-vs-prop-money-the-legal-difference-in-australia',
    title: 'Fake Money vs Prop Money: Understanding the Legal Difference in Australia',
    seoTitle: 'Fake Money vs Prop Money in Australia: Is It Legal?',
    excerpt: 'Fake money vs prop money in Australia: what the Crimes (Currency) Act 1981 allows, what it bans, and the markings that keep prop notes legal. Read the guide.',
    category: 'Compliance & Legal',
    date: '2026-05-10',
    readTime: '9 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Imitation money vs prop money — fanned $100 specimen prop notes',
    relatedCategories: ['new-notes'],
    relatedProducts: ['5-australian-prop-money-for-sale', '10-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: "Search for \"fake money\" in Australia and you will find everything from board game tokens to listings that cross a legal line. The phrase covers too much ground to be useful, and the difference between lawful imitation money for a production and an offence under Commonwealth law is not a matter of taste. This guide explains the vocabulary, the tests that separate prop money from counterfeit currency, and the questions to ask before you buy. It is general information, not legal advice.\n\n## Why the words matter\n\nPeople use \"fake money\", \"imitation money\", \"play money\", \"toy money\", \"prop money\", \"replica notes\" and \"counterfeit\" as if they were interchangeable. They are not, and a supplier who uses them loosely is telling you something about how careful they are.\n\n- **Play money and toy money** are obviously not real. They are brightly coloured, different in size and designed for games, classrooms and children. They carry almost no legal risk.\n- **Prop money** is reproduction currency made for motion pictures, television, theatre, photography and training. It is designed to look right on camera while remaining clearly marked and clearly different in the hand.\n- **Imitation money** is the broad everyday term for any of the above. On its own it tells you nothing about legality.\n- **Counterfeit currency** is made or used to deceive. It is a criminal matter, and nothing in this article describes how to make it or where to get it.\n\n## The legal line in one paragraph\n\nThe Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) protects Australian currency. The law cares about whether an item could deceive a reasonable person into accepting it as genuine, and about what someone does with it. A reproduction with clear, permanent specimen markings, a different material and size or treatment, and honest marketing sits on the lawful side. A note made to pass at a till does not. Our [compliance page](/compliance/) explains how PROPPS builds to Section 22 and the Reserve Bank's reproduction guidance.\n\n## Four tests that separate prop money from counterfeit\n\nUse these four tests on any supplier, including us.\n\n### 1. Is it marked?\n\nEvery note should carry permanent, prominent markings such as SPECIMEN or a statement that it is for motion picture use only. Markings that can be rubbed off, cropped out or hidden in fine print do not count. Ask for a photo of the note's front and back before you order.\n\n### 2. Is it different from a genuine note?\n\nReal Australian banknotes are printed on polymer and carry layered security features. A prop that is also polymer and copies every feature is not a prop in any sense that matters. PROPPS prints on non-reflective archival paper, which reads correctly on camera and feels different in the hand.\n\n### 3. Is the marketing honest?\n\nA legitimate seller describes the product as a prop, names the permitted uses and states that it is not legal tender. Warning signs include phrases about passing detection tests, \"undetectable\" quality, unmarked or discreet delivery, and unsourced claims of government clearance. Honest copy never suggests you can spend the product.\n\n### 4. Is the intended use legitimate?\n\nFilm, television, theatre, advertising, photography, art and simulation training are all clear uses. A \"prank\" at a restaurant, a social media stunt that presents prop cash as real, or any attempt to pay for something is misuse, whatever the notes were bought for.\n\n## Comparing the options\n\nHere is how the common categories line up for a buyer:\n\n- **Board game and toy money:** safe, but looks wrong on camera and is not made for production use. Our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) covers the choice.\n- **Marked prop currency from a local studio:** the right choice for a scene that needs realism and a paper trail.\n- **Unmarked \"realistic\" notes from marketplace sellers:** the highest risk. They may be held at the border, and a buyer who cannot show specimen markings has nothing to show a police officer or an insurer.\n- **Anything described as counterfeit or sold to be spent:** illegal. Do not buy it.\n\n## What this looks like on a real production\n\nA drama set in a bank needs a few hundred $100 notes in the drawer and one hero stack on the counter. The art department orders marked notes from an Australian supplier, files the invoice, stores the notes with the prop master and counts them in and out each shooting day. When a location owner asks what the cash is, the answer is a one-page supplier statement and a note in the call sheet.\n\nA photographer shooting a lifestyle campaign uses a fanned handful of $50 notes. The notes are marked, the shoot is in a studio, and nothing leaves the building. Compare that with a content creator who films themselves handing prop cash to strangers: the notes are identical, but the use is not.\n\nRead more on the creator side in our [guide to prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) and our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/).\n\n## Questions to ask before you buy\n\n1. Are the notes marked, and can I see a photo of the markings?\n2. Is the supplier an Australian business with an ABN and a physical address?\n3. What material are the notes printed on?\n4. How are they delivered, and is a signature required?\n5. Does the seller state what the notes may and may not be used for?\n6. Will I get an invoice and a written description I can put on the production file?\n\n## Common myths\n\n**\"If it is clearly a prop, nothing can go wrong.\"** The markings protect you only when they are on the note and you can show them. A prop kept in a wallet, spent or posted as real cash loses the protection that the markings and the invoice give you.\n\n**\"A disclaimer in the listing is enough.\"** A line of small print on a website does not travel with the note. The marking has to be on the note itself, where anyone who picks it up can read it.\n\n**\"Overseas notes are the same, only cheaper.\"** They often are not. Polymer notes that copy current Australian designs closely are the category most likely to be stopped at the border, and you will have no local supplier to call if something goes wrong.\n\n**\"Everyone knows it is a prop on a film set.\"** The crew do. A bank teller, a shopkeeper or a passer-by watching a street shoot does not. Briefing the venue first is part of using prop money responsibly.\n\n**\"Only big productions need to worry.\"** The rules do not scale with budget. A student short and a feature film both need marked notes, a supplier invoice and a sensible plan for who holds the cash. Smaller crews often have less legal back-up, so a clean paper trail matters more, not less.\n\n## Why we avoid the word \"fake\" on our product pages\n\nBuyers do search for \"fake money\", and our guides use that phrase where it helps people find accurate information. But we do not describe products as fake, spendable or lookalike cash, because it frames the product as something it is not. Our notes are reproduction props. They are specimen-marked, they are paper rather than polymer, and they are made for the screen, the stage and the classroom.\n\n## Where to go next\n\nBrowse the [New Notes range](/shop/new-notes/), read the guide on [whether it is illegal to buy prop money](/blog/is-it-illegal-to-buy-prop-money-australia/), or see the full [Section 22 explainer](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/). Orders start at $300 AUD, delivery is free from $500, and every parcel ships Australia Post Express with signature on delivery.\n\nThis article is general information, not legal advice. Check the current legislation and the RBA's guidance, and ask your own lawyer about a specific production.",
    faqs: [
      {
        "q": "What is the difference between fake money and prop money?",
        "a": "\"Fake money\" is an informal term that covers toys, props and counterfeit currency. Prop money is reproduction currency made for production use, with permanent specimen markings and clear differences from genuine notes. See our [compliance page](/compliance/) for the standard we build to."
      },
      {
        "q": "Is imitation money legal in Australia?",
        "a": "Imitation money that is clearly marked and used for legitimate purposes such as film, theatre, photography or training is lawful. Imitation money made to deceive, or used as payment, is not. The [New Notes range](/shop/new-notes/) is specimen-marked for production use."
      },
      {
        "q": "Can I use prop money as real money?",
        "a": "No. Prop notes are non-legal tender and must never be spent, handed over as payment or presented as real cash. Doing so can lead to criminal charges under Commonwealth law. Read our guide to [whether it is illegal to buy prop money](/blog/is-it-illegal-to-buy-prop-money-australia/)."
      },
      {
        "q": "How can I tell prop money from counterfeit currency?",
        "a": "Look for permanent specimen markings, a different material from the real polymer notes, and honest product descriptions that state the notes are not legal tender. If a seller promises notes that pass detection tests, walk away. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) lists more red flags."
      },
      {
        "q": "Is play money the same as prop money?",
        "a": "No. Play money is designed for games and learning, and looks obviously unlike real notes. Prop money is made to look right on camera while staying marked and different in the hand. Our [play money vs prop money guide](/blog/play-money-vs-prop-money-which-one-do-you-need/) helps you choose."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'best-australian-banknote-denominations-for-film-and-tv-scenes',
    title: 'The Best Australian Banknote Denominations for Film & TV Scenes',
    seoTitle: 'Best Australian Banknotes for Film & TV Scenes',
    excerpt: 'Why $50 and $100 prop notes dominate Australian screen production, and when the smaller denominations actually matter more.',
    category: 'Cinematography',
    date: '2026-05-20',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Australian banknotes for film scenes — $20 and $50 specimen prop note denominations',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    content: `Australian screen productions lean heavily on $50 and $100 prop notes, and it's not just because they look impressive in a stack. The [Reserve Bank of Australia](https://www.rba.gov.au/) uses distinct, saturated colourways for each denomination — vivid ochre-gold for the $50, deep emerald-green for the $100 — and those two colours read strongest on camera under both natural and studio lighting.\n\nThat said, smaller denominations earn their place in specific scenes:\n- $5 and $10 notes for register-drawer or till-float shots, where mixed denominations look more natural than an all-$100 drawer.\n- $20 notes for everyday retail or hospitality scenes where realism matters more than visual impact.\n- A deliberate mix across all five denominations for any scene involving someone counting or sorting cash by hand.\n\nOur [full New Notes range](/shop/new-notes/) covers all five current Australian denominations, each printed double-sided with the correct proportional colour balance for camera-accurate results.`
  },
  {
    slug: 'brief-history-of-australian-currency-notes-for-set-designers',
    title: 'A Brief History of Australian Currency Notes for Set Designers',
    seoTitle: 'Australian Currency History for Set Designers',
    excerpt: "A quick primer on Australia's currency history for production designers dressing period sets accurately.",
    category: 'Art Department',
    date: '2026-05-30',
    readTime: '5 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Australian currency notes history — fanned $50 specimen prop note stack for set designers',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: `Getting the cash right in a period piece is a small detail that seasoned viewers notice immediately. Australia moved from pounds, shillings, and pence to decimal currency in February 1966 — any production set before that date should never feature dollar notes on screen, a mistake that shows up more often than it should in lower-budget period productions.\n\nThe [National Museum of Australia](https://www.nma.gov.au/) holds an extensive currency and social history collection worth reviewing if your production spans a specific decade — the note designs, paper stock colour, and even typography shifted noticeably across the 1970s, 80s, and the transition to polymer notes in the 1990s.\n\nOur current [Film & TV Props](/shop/film-and-tv-props/) range is built around the modern polymer-era note designs. If your production is set in a specific historical period and needs a matching older design, mention it when you [contact our studio](/contact/) — we take custom period requests on a case-by-case basis.`
  },
  {
    slug: 'how-directors-use-prop-money-famous-film-and-tv-cash-scenes',
    title: 'How Directors Use Prop Money: Famous Film & TV Cash Scenes',
    seoTitle: 'How Directors Use Prop Money in Film & TV',
    excerpt: 'What makes an iconic on-screen cash scene work, from the volume of notes on camera to how they move and sound.',
    category: 'Cinematography',
    date: '2026-06-09',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Movie money for sale australia — fanned $100 specimen prop notes for film scenes',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: `The most memorable on-screen cash scenes — a briefcase reveal, a table covered in stacked bills, a duffel bag thrown onto a getaway car seat — share a few production details that are easy to miss on a first watch. Volume is deliberately exaggerated beyond what the plot strictly requires, because a "realistic" amount of cash almost always reads as underwhelming on camera.\n\nSound design also matters more than most first-time producers expect: the distinctive riffle and snap of notes being counted is usually recorded and layered in post rather than captured live, since prop notes (by design, to stay legally compliant) don't always sound identical to genuine polymer currency.\n\nIndustry bodies like [Ausfilm](https://ausfilm.com.au/) showcase Australian-shot productions that lean on this kind of practical prop work rather than VFX cash, which tends to read as less tactile on screen. If you're planning a similar sequence, our [Film & TV Props](/shop/film-and-tv-props/) range is designed specifically for high-volume, camera-heavy scenes like these.`
  },
  {
    slug: 'buying-film-props-in-australia-a-checklist-for-art-departments',
    title: 'Buying Film Props in Australia: A Checklist for Art Departments',
    seoTitle: 'Buying Film Props in Australia: A Checklist',
    excerpt: 'A practical pre-order checklist for art department buyers sourcing prop currency and cash-handling props for an Australian shoot.',
    category: 'Art Department',
    date: '2026-06-19',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Buy film props australia — bundled specimen prop currency stacks checklist',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: `Art department buyers juggling a full prop list often leave cash props until late in pre-production, then discover express dispatch windows are tighter than expected. A short checklist before you order:\n\n1. Confirm the scene's shot list — close-up, mid, or wide — since that determines how many notes and stacks you actually need.\n2. Check your production's compliance or legal sign-off process early; most Australian productions require specimen-marked props as standard, so build the paperwork in from day one rather than after wrap.\n3. Order slightly more than your shot list suggests — reshoots and pickup days happen, and re-ordering mid-schedule costs more in express fees than ordering a buffer upfront.\n4. Confirm dispatch and delivery timing against your build/prep schedule, not your shoot date — props need art department prep time before they're camera-ready.\n\nOur [Film & TV Props](/shop/film-and-tv-props/) range ships via Australia Post Express with signature on delivery, and [Screen Australia](https://www.screenaustralia.gov.au/) publishes broader pre-production planning resources worth cross-referencing against your prop schedule.`
  },
  {
    slug: 'film-props-for-sale-what-to-look-for-before-you-order',
    title: 'Film Props for Sale: What to Look for Before You Order',
    seoTitle: 'Film Props for Sale: What to Check First',
    excerpt: "A buyer's checklist for evaluating film prop currency listings before committing to an order for your production.",
    category: 'Buying Guide',
    date: '2026-06-29',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Film props for sale — handful of $20 and $50 specimen prop notes',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: `Not every "film props for sale" listing is built for actual production use — a lot of novelty sellers use the phrase loosely to describe products meant for social media photos rather than sustained on-set handling. Before ordering, check for a few production-specific details:\n\n- **Handling durability:** will the notes survive repeated takes, being counted by hand, or thrown across a table without visibly degrading?\n- **Consistent print quality across a full bundle:** a single sample photo doesn't guarantee every note in a 100-count stack looks identical on camera.\n- **Local stock and dispatch:** an Australian-based supplier avoids customs delays that can sink a tight production schedule.\n- **Specimen compliance documentation:** ask if the seller can confirm compliance with the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) in writing — a legitimate prop house will have this ready.\n\nOur [Film & TV Props](/shop/film-and-tv-props/) pack is built and stocked specifically for production handling, not just still photography, and ships same-day from our Melbourne studio.`
  },
  {
    slug: 'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right',
    title: 'Prop Cash for Heist and Bank Scenes: Getting the Volume Right',
    seoTitle: 'Prop Cash for Heist & Bank Scenes: How Much?',
    excerpt: 'How to plan bulk prop cash volume for vault reveals, bank robbery sequences, and other high-visibility cash scenes.',
    category: 'Production Planning',
    date: '2026-07-09',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Money stack australia — bundled specimen prop currency stacks for heist scenes',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack'],
    content: `Heist and bank-vault scenes are the single biggest driver of bulk prop cash orders we see, and the most common planning mistake is under-ordering for the wide shot while over-preparing for the close-up. A vault reveal needs volume that reads convincingly from a distance — empty shelf space or thin stacking is immediately obvious even in a quick cut.\n\nA practical approach: order your true "hero" stacks — the ones that will get close-up handling — at full print quality, then supplement background volume with additional [Money Stack](/shop/money-stacks/) bundles that only need to read correctly from further back. This keeps cost proportional to what the camera actually resolves in each shot.\n\nFor multi-day shoots, factor in some natural wear on handled stacks — bulk ordering with a small buffer avoids a scramble for reorders mid-schedule, particularly if your shoot falls over a weekend when express dispatch windows are tighter.`
  },
  {
    slug: 'prop-money-for-content-creators-social-media-and-photoshoot-guidelines',
    title: 'Prop Money for Content Creators: Social Media & Photoshoot Guidelines',
    seoTitle: 'Prop Money for Content Creators: Guidelines',
    excerpt: 'What independent content creators and small studios need to know before featuring prop cash in photos or video content.',
    category: 'Photography',
    date: '2026-07-19',
    readTime: '4 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Fake australian money for content creators — handheld fan of $50 specimen prop notes',
    relatedCategories: ['photography-props'],
    relatedProducts: ['photography-prop-currency-set'],
    content: `Independent content creators shooting "wealth" or lifestyle content face the same compliance rules as a major studio — the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) doesn't distinguish between a feature film budget and a single-camera home studio. The specimen-marking requirement applies equally.\n\nA few platform-specific considerations worth knowing:\n- Some social platforms independently flag or remove content that appears to depict real currency being handled unusually (thrown, burned, shredded) regardless of whether it's prop money — factor this into how you frame a shot.\n- Visible specimen markings protect you if a platform or viewer questions the content's legality, since the marking itself demonstrates compliant intent.\n- Avoid captions or framing that describes the props as "real cash" for shock value — that framing undermines the legal protection the specimen marking provides.\n\nOur [Photography Props](/shop/photography-props/) range is priced and packaged for smaller individual orders, not just studio-scale bulk buyers, so a single content shoot doesn't require a wholesale-size commitment.`
  },
  {
    slug: 'cryptocurrency-payments-for-studios-how-the-discount-works',
    title: 'Cryptocurrency Payments for Studios: How the 10% Discount Works',
    seoTitle: 'Crypto Payments for Studios: 10% Discount',
    excerpt: 'A quick guide to paying for prop money orders with Bitcoin, USDT, or Ethereum and the automatic 10% discount that applies.',
    category: 'Ordering & Payment',
    date: '2026-07-29',
    readTime: '3 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Crypto discount prop money payments — fanned $100 specimen prop notes',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    content: `International productions and independent studios increasingly prefer to settle vendor invoices in cryptocurrency rather than wait on cross-border bank transfers. We support Bitcoin, USDT (TRC20), and Ethereum as payment options specifically to remove that friction for out-of-state and overseas productions ordering from Australia.\n\nHow it works at checkout:\n1. Select your order and proceed to the crypto payment option.\n2. A 10% discount is automatically applied to the invoice total when paying via Bitcoin, USDT, or Ethereum.\n3. Send the discounted amount to the wallet address provided, referencing your order number.\n4. Forward the transaction ID to our studio desk to confirm clearance and trigger dispatch.\n\nThis is the same discount structure outlined on our [shop pages](/shop/) at checkout — no separate code or account needed. Bank transfer and PayID remain available for productions that prefer standard Australian payment rails instead.`
  },
  {
    slug: 'toy-money-and-play-money-for-kids-games-and-learning',
    title: "Toy Money and Play Money for Kids' Games and Learning",
    seoTitle: "Toy Money & Play Money for Kids' Games",
    excerpt: "Why toy and play money designed for children's games and classroom learning is a different product to cinema prop money.",
    category: 'Buying Guide',
    date: '2026-08-08',
    readTime: '3 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Toy money australia for kids games — handful of $20 and $50 specimen prop notes',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    content: `Parents and teachers searching for toy or play money are usually after something quite different from a film production buyer — durability for repeated handling by children, bright and obviously "fake" colouring, and a low price point for classroom sets or family game nights, rather than camera-accurate realism.\n\nAustralian toy products, including play money, fall under general [product safety standards](https://www.productsafety.gov.au/) covering choking hazards, non-toxic printing, and age-appropriate design — a different regulatory lane entirely from the currency-reproduction rules that apply to cinema-grade prop money.\n\nIf you're stocking a classroom "shop" activity, a board game replacement set, or party favours for a kids' event, our [Event & Party Props](/shop/event-and-party-props/) range leans toward the novelty end of that spectrum, while our [New Notes](/shop/new-notes/) range is built for the realism end — production and photography use, not children's play.`
  },
  {
    slug: 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia',
    title: 'Shipping and Dispatch: How Fast Can You Get Prop Money in Australia?',
    seoTitle: 'Prop Money Shipping in Australia: How Fast?',
    excerpt: 'What to expect for dispatch timing, tracking, and delivery when ordering prop money for a tight production schedule.',
    category: 'Ordering & Payment',
    date: '2026-08-18',
    readTime: '3 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Prop money near me fast dispatch — fanned $50 specimen prop note stack',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    content: `Production schedules rarely leave much room for shipping delays, which is why dispatch speed is one of the first questions we get from new studio clients. Orders placed before our 2:00pm AEST cutoff go out same-day via [Australia Post Express](https://auspost.com.au/), with full tracking and mandatory signature on delivery for every consignment.\n\nA few scheduling notes worth building into your production calendar:\n- Same-day dispatch only applies to orders placed before the daily cutoff — orders placed after 2:00pm go out the following business day.\n- Signature-on-delivery is a fixed policy across every order, not optional, so make sure someone is available to receive the parcel at the nominated address.\n- Regional and interstate addresses may add a day or two to Australia Post Express's standard metro timeframe — build this into your prep schedule rather than your shoot date.\n\nFor productions ordering close to a hard deadline, [contact our studio desk via WhatsApp](/contact/) before placing the order so we can flag any timing risk before it becomes a problem.`
  },
  {
    slug: 'prop-money-compliance-checklist-what-every-australian-production-must-know',
    title: 'Prop Money Compliance Checklist: What Every Australian Production Must Know',
    seoTitle: 'Prop Money Compliance Checklist for Australia',
    excerpt: 'A condensed compliance checklist covering the Crimes (Currency) Act 1981 requirements every Australian production should confirm before filming.',
    category: 'Compliance & Legal',
    date: '2026-09-15',
    readTime: '5 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop money australia laws compliance checklist — bundled specimen prop currency stacks',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: `Legal and insurance sign-off on prop currency is a standard, non-negotiable step for most Australian productions — and it's far easier to satisfy upfront than to fix during a shoot. Here's the condensed checklist our studio recommends to every new production client.\n\n1. **Specimen markings present on both sides** — every note should carry clear, indelible "SPECIMEN" or "REPRODUCTION" text, not a removable sticker.\n2. **Material and dimension deviation from genuine notes** — confirmed by the supplier, not just visually assumed.\n3. **Supplier documentation on request** — a legitimate Australian prop house should be able to confirm compliance with the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) in writing for your production's legal file.\n4. **No marketing language claiming the props are "undetectable" or "spendable"** — this framing itself signals non-compliant intent regardless of the physical product.\n5. **Local dispatch and ABN-registered supplier** — simplifies invoicing, tax documentation, and any warranty or replacement claims.\n\nOur [compliance page](/compliance/) covers each of these points in full detail, and our [New Notes range](/shop/new-notes/) is manufactured to satisfy every item on this list as standard, not as an upgrade.\n\nReady to order? Browse the [New Notes range](/shop/new-notes/), or see the [full catalog](/shop/). Every note carries specimen markings, ships by Express Post with signature on delivery, and orders start at $300 AUD.`
  },
  {
    slug: 'local-vs-overseas-prop-money-suppliers-compared',
    title: 'Local vs Overseas Prop Money Suppliers: What Australian Productions Should Check',
    seoTitle: 'Local vs Overseas Prop Money Suppliers',
    excerpt: 'Why sourcing prop money from an Australian supplier avoids the compliance, customs, and dispatch risks that come with overseas listings.',
    category: 'Buying Guide',
    date: '2026-09-22',
    readTime: '4 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Realistic prop money for sale — fanned Australian $50 specimen prop notes from a local Melbourne supplier',
    relatedCategories: ['new-notes'],
    relatedProducts: ['50-australian-prop-money-for-sale', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: `A "realistic prop money for sale" search turns up plenty of overseas marketplace listings alongside Australian suppliers, and the price difference can look tempting — until you factor in what an overseas listing usually can't guarantee.\n\nWhat local sourcing gets you that an overseas import often doesn't:\n1. **Confirmed compliance with Australian law.** A supplier based here builds every note around the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) from the first print run — an overseas seller has no obligation to.\n2. **No customs delay risk.** Reproduction currency can be flagged at the border, which is the last thing you want two days before a shoot.\n3. **Local recourse.** An ABN-registered Australian business gives you a real point of contact for reorders, replacements, or a compliance letter for your production's legal file — not a support ticket into a different time zone.\n4. **Faster, trackable dispatch.** [Australia Post Express](https://auspost.com.au/) with signature on delivery beats waiting on an international parcel with no local tracking.\n\nOur [New Notes range](/shop/new-notes/) is manufactured and dispatched entirely from our Melbourne, VIC studio — see our [compliance page](/compliance/) for the full specimen-marking standard every note is held to.`
  },
  {
    slug: 'evolution-of-australian-prop-money-cinema',
    title: 'The Evolution of Australian Prop Money in Modern Cinema',
    seoTitle: 'Evolution of Australian Prop Money in Cinema',
    excerpt: 'How the transition from novelty notes to realistic fake money Australia has changed the visual language of crime thrillers.',
    category: 'Cinematography',
    date: '2026-10-01',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    tags: ['australian prop money', 'prop money australia', 'realistic fake money australia', 'au prop money', 'props money'],
    relatedCategories: ['new-notes', 'film-and-tv-props'],
    content: `In the early days of Australian filmmaking, "stage money" was often crude and obviously artificial. However, with the advent of 4K and 8K digital sensors, the demand for realistic fake money Australia has skyrocketed. Modern directors require australian prop money that can withstand extreme close-ups without revealing its non-legal-tender nature to the viewer.\n\nAt PROPPS PTY LTD, we have tracked this evolution by moving away from standard paper to premium 120gsm archival stocks that mimic the weight and handling of real notes. This au prop money is now a staple in high-budget streaming series where the props money handles the same as circulated currency, allowing actors to perform counting scenes with natural fluidity. Whether it is aus prop money for a quick exchange or a full vault of australian fake money, the standard for realism has never been higher.`
  },
  {
    slug: 'choosing-realistic-fake-money-australia',
    title: 'How to Choose the Most Realistic Fake Money Australia for Your Next Shoot',
    seoTitle: 'Choosing Realistic Fake Money for Australian Shoots',
    excerpt: 'A guide to selecting the right fake australian money prop denominations and bundle sizes for maximum on-screen impact.',
    category: 'Buying Guide',
    date: '2026-10-02',
    readTime: '6 min read',
    image: 'blog-fanned-50-stack.jpg',
    tags: ['realistic fake money australia', 'fake australian money prop', 'australian fake money', 'prop money au', 'au prop money'],
    relatedCategories: ['new-notes', 'money-stacks'],
    content: `When sourcing a fake australian money prop, the first consideration is the camera distance. For background filler, a standard bundle might suffice, but for "hero" shots, you need realistic fake money australia that features high-definition dual-sided printing. Many productions opt for australian prop money in the $50 and $100 denominations, as these provide the most visual "pop" under studio lights.\n\nSelecting prop money au that photographs convincingly yet stays compliant with the Crimes Act is a delicate balance. Our au prop money is engineered to look identical on camera while remaining clearly non-legal tender to the touch. When buying $100 prop money, consider the bundle size—a "Starter Stack" of aud prop money might be perfect for a wallet shot, while a "100 Stack" is necessary for a heist reveal. Always ensure your australia prop money comes from a reputable Melbourne studio to ensure local compliance.`
  },
  {
    slug: 'why-au-prop-money-essential-tabletop-scenes',
    title: 'Why AU Prop Money is Essential for High-Stakes Tabletop Scenes',
    seoTitle: 'Why AU Prop Money is Essential for Scenes',
    excerpt: 'Why professional au prop money and prop money au outperform standard novelty notes in close-up cinematography.',
    category: 'Cinematography & Lighting',
    date: '2026-10-03',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['au prop money', 'prop money au', 'australian prop money', 'fake note australia', 'prop australian money'],
    relatedCategories: ['photography-props', 'new-notes'],
    content: `Tabletop scenes, such as high-stakes poker games or shady underworld deals, put au prop money under the literal microscope. Using a low-quality fake note australia can break the immersion immediately if the texture or colour is off. This is why professional prop money au uses matte-finish paper that absorbs light rather than reflecting it, unlike real polymer notes or cheap artificial money.\n\nWhen a character fans out a fake $100 australia note, the camera captures the micro-details of the print. Our prop australian money is designed to maintain these details while ensuring the mandatory "SPECIMEN" markings are visible but not distracting to the narrative. For any production using prop money aud, the handling feel is just as important as the look—actors need australian prop money realistic enough to count and toss without hesitation.\n\nOn a tabletop the notes sit within a metre of the lens, so print detail and paper finish matter more than quantity. A single fanned $100 note with two or three stacked behind it usually reads better than a large pile, and it leaves the budget for the denominations that appear closest to camera.`
  },
  {
    slug: 'legal-framework-props-money-australian-film',
    title: 'Understanding the Legal Framework for Props Money in Australian Film',
    seoTitle: 'Legal Props Money Framework Australia',
    excerpt: 'A deep dive into why prop money au and aus prop money must adhere to strict RBA specimen guidelines.',
    category: 'Compliance & Legal',
    date: '2026-10-04',
    readTime: '7 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['props money', 'prop money au', 'aus prop money', 'australian prop money', 'australia fake money'],
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    content: `The term props money might sound like a simple toy, but in Australia, it is a highly regulated product. The Crimes (Currency) Act 1981 specifies that any australian fake money must not be capable of deceiving a reasonable person into believing it is genuine legal tender. This is why every prop money au note we produce features prominent, indelible specimen markings.\n\nWhether you are using aus prop money for a TV commercial or a theatrical play, the legal responsibility lies with the production company. Using non-compliant australia fake money can lead to severe legal complications. Our prop aus money is designed to satisfy both the aesthetic needs of the director and the legal requirements of the RBA. When you source your prop note australia from PROPPS PTY LTD, you receive a product that is certified for legitimate artistic use.`
  },
  {
    slug: 'visual-impact-100-prop-money-stack',
    title: 'Creating Visual Impact with a $100 Prop Money Stack',
    seoTitle: 'Visual Impact with $100 Prop Money Stacks',
    excerpt: 'How to use a $100 prop money stack and fake $100 australia notes to signify wealth and power on screen.',
    category: 'Art Department',
    date: '2026-10-05',
    readTime: '4 min read',
    image: 'blog-100-fan-handheld.jpg',
    tags: ['$100 prop money', 'fake $100 australia', 'australian prop money', 'realistic fake money australia', 'au prop money'],
    relatedCategories: ['money-stacks', 'new-notes'],
    content: `Nothing says "high stakes" like a fanned fake $100 australia note or a thick $100 prop money stack. In the visual arts, the $100 denomination is a powerful symbol of wealth, power, and risk. To achieve this look, many art directors choose professionally printed prop notes that sit naturally in wallets, briefcases, and safes while staying clearly marked as non-legal tender.\n\nWhen stacking australian prop money, the band or "strap" used to hold the notes together adds to the authenticity. We provide realistic fake money australia bundles that come pre-strapped with compliant bank bands. This saves the art department hours of prep time and ensures the prop australian money looks like it just came from a secure vault. For scenes requiring massive volume, mixing au prop money with filler bundles can create the illusion of millions of dollars at a fraction of the cost.`
  },
  {
    slug: 'difference-1-1-prop-money-novelty-notes',
    title: 'Professional Prop Notes vs Novelty Notes: What Cameras Actually Pick Up',
    seoTitle: 'Prop Notes vs Novelty Notes Australia',
    excerpt: 'How professionally printed, specimen-marked prop notes differ from novelty play money on camera, and why the difference matters for film and TV sets.',
    category: 'Buying Guide',
    date: '2026-10-06',
    readTime: '5 min read',
    image: 'blog-20-50-handful.jpg',
    tags: ['australian prop money', 'prop money au', 'novelty notes', 'specimen markings', 'film props'],
    relatedCategories: ['new-notes', 'event-and-party-props'],
    content: `Novelty play money and professional prop notes can look similar at arm's length, but a camera is less forgiving. Novelty notes are often smaller, single-sided, or printed on glossy paper that throws glare under lights. Professional prop notes are printed in high definition on both sides on matte archival paper, so they read well in a close-up and handle naturally in a counting scene.\n\nThere is also a compliance difference. Every PROPPS note carries clear specimen markings and is made to stay clearly non-legal tender in line with the Crimes (Currency) Act 1981, which keeps a production on the right side of the law. Novelty money sold without markings gives you none of that.\n\nFor any scene where the money is a central plot point, spend on professional notes for the hero shots and use simpler stacks for the background. See the [New Notes range](/shop/new-notes/) or the [Event & Party range](/shop/event-and-party-props/) if the money is for a game or a party rather than a shoot.`,
  },
  {
    slug: 'best-practices-handling-fake-note-australia-props',
    title: 'Best Practices for Handling Fake Note Australia Props on Set',
    seoTitle: 'Handling Fake Note Australia Props on Set',
    excerpt: 'Essential tips for art departments and actors when using fake note australia and australian fake money.',
    category: 'Art Department',
    date: '2026-10-07',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['fake note australia', 'australian fake money', 'prop money au', 'au prop money', 'australian prop money'],
    relatedCategories: ['film-and-tv-props'],
    content: `When fake note australia props arrive on set, they should be treated as high-value assets. Even though they are australian fake money, losing them or having them found by the public can cause unnecessary concern or legal inquiry. We recommend that the Prop Master maintains a "sign-out" sheet for all prop money au used during the day's shoot.\n\nActors should also be briefed on the handling of au prop money. While our australian prop money is durable, excessive crumpling can wear down the print over multiple takes. For scenes where the props money needs to look weathered, we recommend our "Distressed" bundles rather than trying to age them on set with water or chemicals, which can damage the archival paper. By following these best practices, your prop money australia will stay camera-ready throughout the entire production schedule.`
  },
  {
    slug: 'why-australian-prop-money-for-sale-needs-markings',
    title: 'Why Australian Prop Money for Sale Online Needs Specimen Markings',
    seoTitle: 'Why Prop Money Australia Needs Markings',
    excerpt: 'The critical importance of specimen markings on australian prop money for sale and prop money australia.',
    category: 'Compliance & Legal',
    date: '2026-10-08',
    readTime: '6 min read',
    image: 'blog-fanned-50-stack.jpg',
    tags: ['australian prop money for sale', 'prop money australia', 'australian prop money', 'realistic fake money australia', 'au prop money'],
    relatedCategories: ['new-notes'],
    content: `You may see **australian prop money for sale** on various marketplaces that claims to be "unmarked" or "100% realistic." Beware—selling or owning such items in Australia is a direct violation of federal law. Legitimate **prop money australia** must always feature permanent markings like "SPECIMEN" or "REPRODUCTION" to ensure it cannot be mistaken for a **fake australian dollar** meant for circulation.\n\nThese markings are not just for the seller's protection; they protect you, the buyer. If a set of **realistic fake money australia** is found during a routine police stop or a studio audit, the presence of these markings immediately identifies it as a legal artistic prop. At PROPPS PTY LTD, our **australian prop money** is designed so these markings are clear to the human eye but often fall into the shadows or out of focus on camera, preserving your production's realism while keeping you 100% compliant.`
  },
  {
    slug: 'lighting-techniques-prop-australian-money-4k',
    title: 'Lighting Techniques for Prop Australian Money in 4K Productions',
    seoTitle: 'Lighting Prop Australian Money for 4K',
    excerpt: 'Mastering the art of lighting prop australian money and fake australian money prop for high-resolution digital cameras.',
    category: 'Cinematography & Lighting',
    date: '2026-10-09',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    tags: ['prop australian money', 'fake australian money prop', 'realistic fake money australia', 'au prop money', 'australian prop money'],
    relatedCategories: ['photography-props'],
    content: `Filming prop australian money in 4K resolution requires a different approach than standard video. High-resolution sensors pick up every fibre of the paper, meaning your fake australian money prop needs to have a superior print quality. The main challenge is managing reflections—polymer notes are notoriously difficult to light because of their glossy surface. Our realistic fake money australia solves this by using a matte-finish archival paper.\n\nTo make your au prop money look even more convincing, use soft, directional lighting. A side-light will catch the subtle texture of our australian prop money, creating shadows that mimic the intaglio printing of real banknotes. If you are using a prop note australia in a dark scene, a small rim light can help define the edges of the note against the background. Always do a test shot with your prop money aud during pre-production to ensure the colours calibrate correctly with your camera's LUT.`
  },
  {
    slug: 'art-departments-guide-prop-money-aging',
    title: 'The Art Department\'s Guide to Australian Prop Money Realistic Aging',
    seoTitle: 'Realistic Aging Guide for Prop Money Australia',
    excerpt: 'How to achieve a used look for australian prop money realistic bundles and prop money au.',
    category: 'Art Department',
    date: '2026-10-10',
    readTime: '5 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['australian prop money realistic', 'prop money au', 'au prop money', 'australian prop money', 'realistic fake money australia'],
    relatedCategories: ['money-stacks', 'film-and-tv-props'],
    content: `A brand new, crisp australian prop money realistic stack can sometimes look too perfect for a gritty underworld scene. Art departments often need their prop money au to look like it has been "around the block." While we offer pre-distressed bundles, achieving your own custom aging for au prop money can be done with a few professional secrets.\n\nOne common technique is the "hand-roll"—gently rolling individual australian prop money notes in your palms to break the paper's stiffness without creating sharp creases. For a stained look, a very light misting of tea or coffee can add a subtle yellowing to a fake note australia, though this must be done sparingly to avoid soaking the archival paper. Our aus prop money is designed to take these modifications well, allowing your team to create the exact level of wear needed for the character's backstory. Remember to always keep a few pristine realistic fake money australia notes for "mint condition" shots.`
  },
  {
    slug: 'prop-money-australia-vs-overseas-listings',
    title: 'Prop Money Australia vs. Overseas Listings: The Hidden Risks',
    seoTitle: 'Prop Money Australia vs Overseas Listings',
    excerpt: 'Why local prop money australia is the safer, faster choice for domestic productions.',
    category: 'Buying Guide',
    date: '2026-10-11',
    readTime: '4 min read',
    image: 'blog-fanned-50-stack.jpg',
    tags: ['prop money australia', 'australian prop money', 'realistic fake money australia', 'au prop money', 'australia fake money'],
    relatedCategories: ['new-notes'],
    content: `When searching for prop money australia, you will inevitably encounter overseas sellers offering "cheap" alternatives. However, importing australia fake money carries significant risks, including customs seizure and non-compliance with the Crimes Act. Professional productions always choose local au prop money because it guarantees 100% legal compliance and fast, trackable dispatch.\n\nOur australian prop money is manufactured right here in Melbourne, meaning no international wait times or border issues. When you buy prop money au from an Australian studio, you are also supporting the local film industry. For those needing realistic fake money australia on a deadline, our aus prop money is dispatched via Express Post, arriving long before an overseas parcel would even clear customs.\n\nA quick way to compare: ask each seller for the dispatch location, a close-up photo of the actual notes and a written statement of the markings. A local studio can answer all three in one email. Overseas listings often cannot, and the cost of a returned or held parcel before a shoot day is usually larger than any saving on the notes. If the schedule is tight, a local supplier with Express Post and signature on delivery removes most of that risk.`
  },
  {
    slug: 'realistic-fake-money-australia-photography-tips',
    title: 'Realistic Fake Money Australia: 5 Pro Photography Tips',
    seoTitle: 'Realistic Fake Money Australia Photography Tips',
    excerpt: 'How to make your realistic fake money australia and fake note australia look like a million bucks.',
    category: 'Photography',
    date: '2026-10-12',
    readTime: '5 min read',
    image: 'blog-50-fan-handheld.jpg',
    tags: ['realistic fake money australia', 'fake note australia', 'australian prop money', 'prop money australia', 'au prop money'],
    relatedCategories: ['photography-props'],
    content: `Capturing realistic fake money australia on camera requires an eye for detail. The first tip is to avoid direct flash; the matte surface of our australian prop money is designed to look best under diffused, naturalistic light. If you are shooting a fake note australia in a macro setup, try using a shallow depth of field to keep the "SPECIMEN" markings in the soft-focus areas.\n\nWhen arranging your prop money australia, fanning the notes manually creates a more organic look than a perfect machine-stacked pile. For a high-impact shot, placing a prop $100 australia note in the foreground can lead the viewer's eye. Our au prop money is specifically engineered for these types of high-resolution shoots, ensuring your prop money aud looks authentic even in the tightest of close-ups.\n\nFor stills, set the notes on a matte surface and light from the side rather than straight on, which keeps the paper from throwing a hot spot. Shoot a few frames with the notes slightly fanned so the print detail on both sides shows. If the notes will appear in an advertisement, keep the specimen markings visible in at least one frame so the image stays on the right side of the Crimes (Currency) Act.`
  },
  {
    slug: 'au-prop-money-theatrical-productions',
    title: 'Using AU Prop Money in Modern Theatrical Productions',
    seoTitle: 'AU Prop Money for Theatre and Stage',
    excerpt: 'Why au prop money and props money are preferred by Australian stage managers and prop masters.',
    category: 'Art Department',
    date: '2026-10-13',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    tags: ['au prop money', 'props money', 'australian prop money', 'prop australian money', 'realistic fake money australia'],
    relatedCategories: ['film-and-tv-props', 'event-and-party-props'],
    content: `In theatre, props must be durable enough for nightly use while being clearly identifiable from the back of the house. AU prop money from PROPPS PTY LTD is the industry standard for Australian stage productions. Unlike cheap paper, our props money has the right thickness to be fanned, counted, and thrown during a performance without tearing or losing its shape.\n\nStage managers appreciate that our australian prop money is non-reflective, ensuring it doesn't glare under heavy stage lighting. Whether the script calls for a single prop australian money note or a suitcase full of aus prop money, we provide the volume and quality needed. Furthermore, our prop money au is strictly compliant, giving production companies peace of mind that their realistic fake money australia won't be mistaken for anything other than a professional prop.`
  },
  {
    slug: 'prop-money-au-for-education-and-training',
    title: 'The Role of Prop Money AU in Financial and Police Training',
    seoTitle: 'Prop Money AU for Training and Education',
    excerpt: 'How prop money au and realistic fake money australia are used for training simulations.',
    category: 'Compliance & Legal',
    date: '2026-10-14',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['prop money au', 'realistic fake money australia', 'australian prop money', 'au prop money', 'fake note australia'],
    relatedCategories: ['new-notes'],
    content: `Beyond the screen, prop money au plays a vital role in professional training simulations. Financial institutions use realistic fake money australia to train staff in cash handling and fraud detection, while police academies use australian prop money for crime scene investigations. The accuracy of our au prop money ensures that these simulations are as close to reality as possible.\n\nDuring a training exercise, a fake note australia must have the correct weight and dimensions to be effective. We supply prop money aud that helps trainees identify the visual differences between props and real currency, emphasizing the importance of specimen markings. Our prop $100 australia stacks are particularly popular for larger scale drills, providing a cost-effective way to simulate high-value assets without the risk of using real cash.\n\nTraining and education uses are growing: banking and retail trainers use prop notes for till exercises, schools use them for maths and enterprise lessons, and security trainers use them in simulation drills. In each case the markings matter, because learners should always be able to tell a reproduction from legal tender. PROPPS notes are double-sided and handle like paper, so they survive repeated classroom use.`
  },
  {
    slug: 'aus-prop-money-social-media-content-creation',
    title: 'Elevating Social Media Content with Aus Prop Money',
    seoTitle: 'Aus Prop Money for Social Media Content',
    excerpt: 'Using aus prop money and prop money au to create viral "lifestyle" and "wealth" content legally.',
    category: 'Photography',
    date: '2026-10-15',
    readTime: '3 min read',
    image: 'blog-100-fan-handheld.jpg',
    tags: ['aus prop money', 'prop money au', 'australian prop money', 'realistic fake money australia', 'au prop money'],
    relatedCategories: ['photography-props'],
    content: `For content creators, aus prop money is an essential tool for "lifestyle" and "wealth" themed content. Whether you're filming a skit or a luxury-themed photoshoot, using high-quality prop money au adds an immediate layer of production value. Our australian prop money looks incredible on Instagram and TikTok, providing that visual "flex" without any of the legal risks associated with unmarked notes.\n\nUsing realistic fake money australia protects your account from being flagged for misleading content, as the "SPECIMEN" markings are clearly visible to platforms. We recommend fanning out a stack of au prop money to create a sense of abundance. Our props money is priced for independent creators, and a single order of fake $100 australia notes can be reused for dozens of different shoots, making it a smart investment for any serious studio.\n\nA few habits keep creator content on the right side of the rules: keep the specimen markings visible in at least one shot, never present the notes as real money in a caption or a giveaway, and avoid filming them being handed to the public. Short clips with the notes fanned, stacked or counted tend to perform well and stay clearly a prop.`
  },
  {
    slug: 'australian-prop-money-for-sale-melbourne-studio',
    title: 'Why Buy Australian Prop Money for Sale from a Melbourne Studio?',
    seoTitle: 'Australian Prop Money for Sale: Melbourne Advantage',
    excerpt: 'The benefits of sourcing australian prop money for sale from a local Melbourne fulfillment desk.',
    category: 'Buying Guide',
    date: '2026-10-16',
    readTime: '4 min read',
    image: 'blog-fanned-50-stack.jpg',
    tags: ['australian prop money for sale', 'prop money australia', 'australian prop money', 'realistic fake money australia', 'au prop money'],
    relatedCategories: ['new-notes', 'money-stacks'],
    content: `When you see australian prop money for sale online, check where it is shipping from. Sourcing your prop money australia from our Melbourne studio offers unparalleled advantages. First, you get the benefit of local customer support—we understand the specific needs of the Australian production community. Second, our australian prop money is already in stock and ready for immediate dispatch via AusPost Express.\n\nBuying realistic fake money australia locally also means you have a direct contact for custom requests or wholesale quotes. Our au prop money is trusted by local art directors because we stand by the quality of every note. Whether you are looking for prop money au or aus prop money, choosing a local supplier ensures your production stays on track and within legal guidelines. Shop our full range of australian prop money for sale today for the fastest domestic delivery.`
  },
  {
    slug: 'props-money-bulk-ordering-wholesale',
    title: 'Props Money: A Guide to Bulk Ordering and Wholesale Studio Rates',
    seoTitle: 'Props Money Bulk and Wholesale Guide',
    excerpt: 'How to save on production costs with bulk props money and wholesale australian prop money.',
    category: 'Wholesale',
    date: '2026-10-17',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['props money', 'australian prop money', 'prop money australia', 'realistic fake money australia', 'au prop money'],
    relatedCategories: ['wholesale'],
    content: `For large-scale productions, buying props money individually isn't cost-effective. We offer tiered wholesale rates for australian prop money that can save your production thousands. Our bulk prop money australia packages are designed for heist movies, vault scenes, and music videos where massive volumes of cash are required. The more realistic fake money australia you order, the lower the per-note cost becomes.\n\nOur studio dispatch desk works with line producers to create custom au prop money orders that fit their specific budget. We can provide mix-and-match bundles of aus prop money, combining different denominations to create a varied, realistic look. When you order prop money au in bulk, you also get priority packing and shipping. If your production needs props money in high volume, contact our Melbourne desk for a tailored wholesale quote today.\n\nFor bulk runs, send the quantity, the denominations and your delivery date in one message and we will confirm the tier and the dispatch window. Matching stacks ordered together stay consistent across a multi-week shoot, which is the main practical reason to order the whole quantity at once.`
  },
  {
    slug: 'realistic-fake-money-australia-under-studio-lights',
    title: 'Performance of Realistic Fake Money Australia Under Studio Lights',
    seoTitle: 'Realistic Fake Money Australia: Studio Lighting',
    excerpt: 'Why realistic fake money australia matte paper is the superior choice for high-end studio lighting setups.',
    category: 'Cinematography & Lighting',
    date: '2026-10-18',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    tags: ['realistic fake money australia', 'au prop money', 'australian prop money', 'prop money australia', 'fake note australia'],
    relatedCategories: ['photography-props', 'new-notes'],
    content: `Standard polymer currency is a cinematographer's nightmare due to its highly reflective surface. This is where realistic fake money australia from PROPPS PTY LTD shines—or rather, doesn't shine. Our au prop money is printed on 120gsm matte archival paper specifically chosen for its ability to look authentic without creating distracting flares or hotspots. This makes it the only choice for professional studio lighting.\n\nUnder bright LED or HMI lights, our australian prop money maintains its colour saturation and texture. Even in a high-contrast scene, the prop money australia looks like real circulated cash. When a character pulls out a fake note australia, the matte finish ensures the camera focus stays on the action, not the glare. Art directors consistently choose our prop australian money because it is "camera-ready" straight out of the box. For your next high-key shoot, trust only prop money aud engineered for the studio environment.`
  },
  {
    slug: 'prop-australian-money-history-and-design',
    title: 'Prop Australian Money: Respecting History and Design Standards',
    seoTitle: 'Prop Australian Money History and Design',
    excerpt: 'The design philosophy behind our prop australian money and au prop money collections.',
    category: 'Art Department',
    date: '2026-10-19',
    readTime: '4 min read',
    image: 'blog-fanned-50-stack.jpg',
    tags: ['prop australian money', 'au prop money', 'australian prop money', 'realistic fake money australia', 'prop money au'],
    relatedCategories: ['new-notes'],
    content: `Creating prop australian money is about more than just copying a design; it's about respecting the visual history of our currency while adhering to modern legal standards. Our au prop money collection is inspired by the vibrant colours and intricate patterns of Australian banknotes, from the $5 to the $100. We ensure that our australian prop money captures the "spirit" of the currency while being clearly marked as a reproduction.\n\nThis balance is what makes our realistic fake money australia so effective in period pieces and modern dramas alike. Our design team carefully places the specimen markings to be visible to the user but subtle enough for the lens. When you handle our prop money au, you feel the effort that went into its creation. For art departments that care about historical accuracy and design integrity, our aus prop money and props money offer the perfect solution. Every note in our prop australian money range is a tribute to the world-class design of Australian currency.`
  },
  {
    slug: 'prop-money-aud-for-independent-filmmakers',
    title: 'Prop Money AUD: Professional Solutions for Independent Filmmakers',
    seoTitle: 'Prop Money AUD for Indie Filmmakers',
    excerpt: 'How independent filmmakers can get high-quality prop money aud on an indie budget.',
    category: 'Buying Guide',
    date: '2026-10-20',
    readTime: '4 min read',
    image: 'blog-bundled-stacks.jpg',
    tags: ['prop money aud', 'au prop money', 'australian prop money', 'realistic fake money australia', 'prop money au'],
    relatedCategories: ['new-notes', 'money-stacks'],
    content: `Independent filmmakers often operate on tight budgets where every dollar counts. However, skimping on prop money aud is a common mistake that can lower the perceived quality of a production. We offer "Starter Stacks" of au prop money specifically for indie creators, providing a small but high-quality selection of notes for key scenes. Our australian prop money gives your film a professional edge without breaking the bank.\n\nIndie directors can also use realistic fake money australia to create the illusion of larger sums by placing the hero notes on top of filler paper in a briefcase. Our prop money au is durable enough to survive a full indie shoot and several reshoots. By using aus prop money that is compliant and high-quality, you avoid any potential legal delays that could derail a low-budget production. For indie crews, our props money is the most reliable and affordable way to get prop money aud that looks like a million bucks on screen.`
  },
  // ---- 2026-10-12 golden-rule batch: 10 posts, one primary keyword each, no stuffing ----
  {
    slug: 'can-you-buy-prop-money-in-australia',
    title: 'Can You Buy Prop Money in Australia? What You Can Order and What to Check',
    seoTitle: 'Can You Buy Prop Money in Australia?',
    excerpt: 'Can you buy prop money in Australia? Yes, when it is specimen-marked and made for production use. See what to check, what it costs and how to order.',
    category: 'Buying Guide',
    date: '2026-10-04',
    readTime: '9 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Fanned $50 specimen prop notes marked for motion picture use, ready to order in Australia',
    relatedCategories: ['new-notes'],
    relatedProducts: ['50-australian-prop-money-for-sale', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/new-notes', label: 'Shop New Notes prop money' },
    content: "Can you buy prop money in Australia? Yes. Production companies, photographers, theatres, advertising agencies and training providers buy marked reproduction notes every week. The legal point is not whether you can buy them but what you are buying and what you do with it. This guide explains who buys prop money, what a legitimate order looks like, how to check a supplier, what it costs and how to place an order, in plain English. It is general information, not legal advice.\n\n## The short answer\n\nYou can buy prop money in Australia from a local supplier when the notes are clearly marked as reproductions, differ from genuine notes in material and treatment, and are sold for legitimate purposes. You cannot use prop money as payment, and you should not buy notes that are marketed as spendable, undetectable or \"real looking\" with no markings. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the law behind that line.\n\n## Who buys prop money\n\nProp money has a surprisingly wide customer base. The most common buyers are:\n\n- **Film and television productions:** art departments dressing bank, casino, crime and street scenes.\n- **Theatre companies:** stage cash that reads from the back row without needing to be genuine.\n- **Photographers and content studios:** lifestyle, fashion and advertising shoots where cash is a visual element.\n- **Advertising and event agencies:** branded prop currency for campaigns and launches.\n- **Training providers:** cash-handling and security exercises where real money is not appropriate.\n- **Event organisers:** parties, fundraisers and casino nights, where marked novelty notes are enough.\n\nDifferent buyers need different things. A feature film needs hundreds of notes in realistic bundles. A party host needs a few marked stacks. Our [New Notes range](/shop/new-notes/) covers the five denominations used on screen, and our [event and party props](/shop/event-and-party-props/) suit lighter use.\n\n## What a legitimate order looks like\n\nA lawful order has four features, and you can check all four before you pay:\n\n1. **Visible specimen markings on every note.** Ask for a photo of the front and back. The marking should be permanent and prominent, not a faint watermark.\n2. **A local supplier with an ABN.** You can then see who you are paying, get an invoice and contact someone if there is a problem.\n3. **Paper, not polymer.** Real Australian banknotes are polymer. Reproductions on matte paper are easy to tell apart by touch. PROPPS prints on non-reflective archival paper.\n4. **A clear use.** The product page states what the notes are for: film, television, theatre, photography, art or training.\n\n## How to check a prop money supplier\n\nA few minutes of checking separates a studio you can rely on from an anonymous seller:\n\n- **Business details.** Look for an ABN, a physical address and a working phone number. PROPPS PTY LTD is based in Eltham, Victoria, and has supplied Australian productions since 2019.\n- **Product descriptions.** The copy should say the notes are non-legal tender props. Be wary of any listing that describes them as spendable or able to pass tests.\n- **Dispatch.** Traceable shipping with a signature is a good sign. Offers of \"discreet\" or unmarked packaging are a bad one.\n- **Track record.** Look for named productions, a physical studio, policies for returns and shipping, and a compliance page that quotes the law accurately.\n- **Overseas marketplaces.** Listings that ship polymer notes copying current Australian designs sit close to the legal line and can be stopped at the border. Our guide to [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) compares the options.\n\n## What prop money costs\n\nPrices vary with note count, denomination and how closely the finish matches the shot you need. At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD, and payments in cryptocurrency receive a 10% discount. Stack products are sized by face value, so you can scale from a single hero stack to a full bank vault.\n\nA few rules of thumb:\n\n- **A single scene with one hero stack** is usually covered by the minimum order.\n- **A bank or casino scene** needs many bundles but only a few hero notes. Mix quantities to match what the camera sees.\n- **A season of a series** costs less per scene when you order once, which is what our [wholesale page](/wholesale/) is for.\n\nFor more on matching volume to the shot, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) and [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/).\n\n## How to order, step by step\n\n1. **Decide the use.** Write down the scene, the denominations and roughly how many bundles are visible.\n2. **Pick the notes.** Start with the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, which dominate Australian screen work, and add smaller denominations for tills and wallets.\n3. **Check the minimum and delivery threshold.** Orders start at $300 AUD and delivery is free from $500 AUD.\n4. **Place the order.** You can pay at checkout, including by crypto for the 10% discount.\n5. **Receive it.** Orders are dispatched by [Australia Post](https://auspost.com.au/) Express with a mandatory signature on delivery, so make sure someone is at the delivery address.\n6. **File the paperwork.** Keep the invoice and the specimen marking details with the production file.\n\n## Choosing denominations and bundle sizes\n\nAustralian screen work leans on the $50 and $100 notes because their colours read strongly on camera, but a believable cash scene usually mixes denominations. Use $100 and $50 notes for hero stacks and close-ups. Add $20, $10 and $5 notes for tills, wallets and counter exchanges, where an all-$100 drawer would look wrong. Our guide to the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) shows how to split a budget across them.\n\nBundle size matters as much as denomination. The camera sees the top note and the edges of a stack, so a heavy-looking bundle does not always need a heavy order. Many art departments buy a handful of hero stacks and fill the rest of the frame with filler paper behind them. If you are unsure, [contact the studio](/contact/) with the shot list and we will suggest a quantity.\n\n## Common mistakes when buying prop money\n\n- **Ordering from the cheapest listing.** A low price often means no markings, no invoice and no one to call. Our guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains where the saving really goes.\n- **Leaving it to the last week.** Express dispatch is fast, but a signature is required, so allow time to arrange someone at the delivery address.\n- **Forgetting storage.** Decide who holds the notes between shooting days before they arrive.\n- **Skipping the paperwork.** An invoice and the marking details take two minutes to file and answer most questions later.\n\n## Buying for a one-off event versus a production\n\nA one-off buyer, such as someone dressing a casino night or a photo shoot, usually needs a small order and no wholesale terms. A production company buying for a series needs consistency between orders, so the notes in episode six match the notes in episode one. If that is you, mention it when you [contact the studio](/contact/), because repeat orders can be planned and priced together. Either way, the legal checklist is the same: marked notes, an Australian supplier, an invoice and signed-for delivery.\n\n## What you cannot do with prop money\n\nBuying is lawful when the notes are marked and the purpose is legitimate. These are not:\n\n- Spending prop notes, even once, as a test or a joke.\n- Handing prop notes to anyone as a tip, a gift or a payment.\n- Posting close-ups that suggest the cash is real.\n- Removing or covering the specimen markings.\n- Selling prop notes as genuine currency.\n\nIf a police officer or a shop assistant asks about a note, show the specimen marking and the invoice. That is what they are for. The [Australian Federal Police](https://www.afp.gov.au/) is the right contact for concerns about counterfeit currency, and the RBA publishes guidance on banknote reproductions.\n\n## Where to go next\n\nIf you are ready to order, start with the [New Notes range](/shop/new-notes/). If you need help picking quantities, [contact the studio](/contact/) with your shot list. If you want the legal background first, read [is it illegal to buy prop money in Australia](/blog/is-it-illegal-to-buy-prop-money-australia/) or visit our [compliance page](/compliance/).\n\nThis article is general information, not legal advice.",
    faqs: [
      {
        "q": "Can you buy prop money in Australia legally?",
        "a": "Yes. Clearly marked, non-legal tender reproduction notes bought for film, television, theatre, photography or training are lawful to buy. Using them as payment is not. See the [New Notes range](/shop/new-notes/) for specimen-marked product."
      },
      {
        "q": "Where can I buy prop money in Australia?",
        "a": "Buy from a local studio with an ABN, a physical address and specimen-marked notes, so you can get an invoice and delivery you can trace. Our guide to [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) lists what to check."
      },
      {
        "q": "How much does prop money cost in Australia?",
        "a": "At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD and crypto payments get 10% off. The total depends on denominations and quantity. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) to size an order."
      },
      {
        "q": "Do I need a licence or permit to buy prop money?",
        "a": "No licence is needed for marked prop notes bought for a legitimate purpose, but you should keep the invoice and specimen marking details on file. Our [compliance page](/compliance/) sets out the standard."
      },
      {
        "q": "How is prop money delivered in Australia?",
        "a": "PROPPS ships by Australia Post Express with a mandatory signature on delivery, so a named person must receive the parcel. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for timing."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'is-it-illegal-to-buy-prop-money-australia',
    title: 'Is It Illegal to Buy Prop Money in Australia? The Plain-English Answer',
    seoTitle: 'Is It Illegal to Buy Prop Money in Australia?',
    excerpt: 'Is it illegal to buy prop money in Australia? Buying marked prop notes for production use is lawful. See where the Crimes (Currency) Act applies.',
    category: 'Compliance & Legal',
    date: '2026-10-05',
    readTime: '9 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Bundled specimen prop currency stacks carrying compliance markings',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full compliance guide' },
    content: "Is it illegal to buy prop money in Australia? In most cases, no. Buying clearly marked reproduction notes for a film, a stage show, a photo shoot or a training exercise is a normal business purchase. What is illegal is making, using or passing off notes that could deceive someone into accepting them as real money. This guide separates the two, explains the situations where people get into trouble, and gives you a plain checklist. It is general information, not legal advice.\n\n## The short answer\n\nBuying prop money is lawful when the notes are clearly marked as reproductions, differ from genuine notes, and are bought for a legitimate purpose. The risk comes from what happens after the purchase: spending prop notes, presenting them as real, removing the markings or buying notes that were never marked in the first place. The Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) is the law that applies, and Section 22 is the provision our compliance standard is built around.\n\n## Buying, using and making are three different things\n\nMost confusion comes from treating these as one question.\n\n- **Buying** marked reproduction notes from a local supplier for production use is routine.\n- **Using** them means handling them on set, in a studio or in a training room. That is lawful when the notes are marked, controlled and not offered as payment.\n- **Making** reproductions yourself is where people fall into trouble, because a home-printed note that looks convincing has none of the safeguards a professional studio builds in. Do not make your own.\n\n## What keeps a prop lawful\n\nThree things carry most of the weight, and a supplier should be able to show you each of them.\n\n1. **It is marked.** Every PROPPS note carries permanent specimen markings in line with Section 22 and the Reserve Bank's reproduction guidance.\n2. **It is different.** Real Australian banknotes are polymer. Our reproductions are printed on non-reflective archival paper, so they are easy to tell apart by touch.\n3. **It is honestly sold.** The product description states that the notes are non-legal tender props made for film, television, theatre, visual arts and simulation training.\n\nRead more about how this works in our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and on our [compliance page](/compliance/).\n\n## Situations that cause problems\n\nThe notes are rarely the problem. The situations around them are.\n\n- **Spending a prop note.** Handing a prop note to a shop, a taxi driver or an ATM, even as a joke, is the fastest route to a police report.\n- **Pranks and stunts.** A video of someone \"paying\" with prop cash can be treated as an attempt to deceive, whatever the caption says.\n- **Covering the markings.** Removing, cropping or hiding the specimen markings changes the legal position of the notes.\n- **Buying unmarked notes.** Notes with no markings, or with markings so faint they are easy to miss, are the main cause of trouble for buyers.\n- **Careless storage.** Loose prop notes left in a car, a costume pocket or a rental can end up in the wrong hands.\n- **Cash giveaways.** Content that suggests real cash is being given away, using prop notes, can mislead viewers and attract complaints.\n\n## Shooting in public places\n\nIf your scene is shot in a street, shop or bank, tell the venue or local police beforehand and keep the supplier's invoice on set. Staff and members of the public cannot tell what is a prop from a distance. A short written note from the production company and a call to the local station can prevent a long afternoon.\n\nTwo further habits help. First, keep notes under the prop master's control and count them in and out each shooting day. Second, never let background performers keep souvenir notes. Even a single marked note in a wallet can turn into a question that nobody wants to answer.\n\n## What if you are asked about a prop note?\n\nStay calm and show the markings. Explain that the note is a reproduction made for production use and show the supplier invoice. If you are speaking to police, it is reasonable to offer the supplier's details and the production file. Buying from a local, ABN-registered studio makes this simple. Overseas sellers on marketplace sites usually cannot supply any of it. For concerns about counterfeit currency, the [Australian Federal Police](https://www.afp.gov.au/) is the point of contact.\n\n## Crossing borders with prop money\n\nCarrying prop notes into or out of Australia raises extra questions. Customs officers see a bundle of banknote-like paper and have to decide what it is. Declare the notes, carry the invoice and keep the markings visible. If you are travelling for a shoot, ask the production's customs broker or legal adviser before you pack. Shipping from a local supplier with traceable dispatch is almost always simpler than carrying notes in luggage. Read about our [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) options.\n\n## What insurers and location owners usually ask for\n\nInsurers and location owners are not lawyers, and they rarely ask for legal analysis. They want to know three things: what the notes are, who supplied them and who is responsible for them. A short file covers all three:\n\n- The supplier's invoice, with the business name, ABN and address.\n- A photo of the front and back of a note, showing the specimen markings.\n- A line in the call sheet or prop schedule naming the scene and the person in charge of the notes.\n\nBring the same file to any public location shoot. It turns a long conversation with a nervous venue manager into a short one.\n\n## Common myths\n\n**\"It is only illegal if you spend it.\"** Spending is the clearest problem, but removing the markings, presenting prop cash as real or buying unmarked notes also create risk.\n\n**\"Prop money is illegal everywhere.\"** It is not. Marked reproductions are a normal supply item in the Australian film, theatre and photography industries.\n\n**\"A home-printed note is cheaper and just as safe.\"** It is neither. A home-printed copy has no specimen markings and no supplier paperwork, and a convincing copy is exactly what the law is written to catch.\n\n## Why we publish this guide\n\nPROPPS PTY LTD supplies prop currency to Australian productions, and the question we hear most often is whether the purchase itself is a problem. We would rather answer it plainly on a public page than leave buyers to guess from forum posts or from sellers who have a reason to say \"no problem at all\". If you read nothing else, remember the order of operations: buy marked notes from a supplier you can identify, keep the paperwork, control the notes on set and never offer them as payment.\n\n## Is it illegal to buy play money or party money?\n\nBuying play money, toy money or novelty party notes is not illegal. They are designed to look nothing like real currency. If you want something a little more realistic for a themed event, choose marked notes from a local supplier and keep them out of circulation. Our [novelty money guide](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/) and [event and party props](/shop/event-and-party-props/) suit that use.\n\n## A practical checklist before you buy\n\n1. Confirm the notes carry permanent specimen markings, and ask for a photo of the front and back.\n2. Buy from an Australian business with an ABN and a physical address.\n3. Check the notes are paper, not polymer.\n4. Make sure the product page states the notes are non-legal tender props.\n5. Choose signed-for delivery.\n6. File the invoice and a note of the production use.\n7. Brief everyone who will touch the notes: never spend them, show them off as real cash or post unmarked close-ups.\n\n## Where to go next\n\nIf you are ready to order, start with the [New Notes range](/shop/new-notes/) or the [$100 product](/shop/new-notes/100-australian-prop-money-for-sale/). If you want to know whether you can buy prop money in the first place, read [can you buy prop money in Australia](/blog/can-you-buy-prop-money-in-australia/). Orders start at $300 AUD, delivery is free from $500 AUD, and every parcel ships Australia Post Express with signature on delivery.\n\nThis article is general information, not legal advice. Check the current Act, the RBA's guidance and your own legal adviser for a specific production.",
    faqs: [
      {
        "q": "Is it illegal to buy prop money in Australia?",
        "a": "No, buying clearly marked, non-legal tender reproduction notes for production use is lawful. Spending them, presenting them as real or removing the markings is where the law applies. See the [New Notes range](/shop/new-notes/) for specimen-marked product."
      },
      {
        "q": "Is it illegal to have prop money?",
        "a": "Owning marked prop notes for a legitimate purpose is not illegal. Carrying unmarked, realistic notes in a wallet or offering them as payment can cause serious problems. Keep the invoice and read our [compliance page](/compliance/)."
      },
      {
        "q": "Can I get in trouble for using prop money in a video?",
        "a": "Using marked prop notes in a video is normal. The risk is a video that presents prop cash as real, such as a giveaway or a prank in a shop. Read our [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/)."
      },
      {
        "q": "Is it illegal to buy prop money online from overseas?",
        "a": "Overseas listings of polymer notes that closely copy Australian designs sit near the legal line and can be stopped at the border. A local, ABN-registered studio with traceable dispatch is the safer route. Compare options in [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/)."
      },
      {
        "q": "What should I do if police ask about my prop money?",
        "a": "Stay calm, show the specimen markings and the supplier invoice, and explain the production use. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains what the markings are for."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'cheap-prop-money-what-you-are-really-paying-for',
    title: 'Cheap Prop Money: What You Are Really Paying For (and What You Give Up)',
    seoTitle: 'Cheap Prop Money: What You Are Paying For',
    excerpt: 'Cheap prop money can be fine for the background of a shot. Here is where the price difference shows up on camera.',
    category: 'Buying Guide',
    date: '2026-10-06',
    readTime: '4 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'A handful of $20 and $50 specimen prop notes showing print detail',
    relatedCategories: ['new-notes', 'money-stacks'],
    relatedProducts: ['20-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/money-stacks', label: 'See money stacks' },
    content: `Cheap prop money has a place. For a drawer that never opens or a bundle sitting far from lens, a basic print is enough.\n\nThe gap shows up when the camera gets close:\n1. **Print resolution.** Low-resolution scans go soft in a close-up.\n2. **Paper finish.** Glossy stock throws glare under lights; matte archival paper does not.\n3. **One side only.** Single-sided notes give themselves away the moment someone flips a stack.\n4. **Compliance.** Imitation money from an overseas listing may have no specimen markings at all.\n\nA sensible approach is to buy premium notes for the hero shot and a simpler stack for filler. Our [Money Stacks](/shop/money-stacks/) range is built for the volume end, and the [$50](/shop/new-notes/50-australian-prop-money-for-sale/) and [$100](/shop/new-notes/100-australian-prop-money-for-sale/) notes are made for the close-up.\n\nBefore you decide, work out which shots actually need premium notes. A background drawer or a stack on a far shelf rarely does, while a hand-to-hand exchange or a counting scene always does. Splitting the order this way keeps the total sensible and puts the quality where the camera looks. Whatever you buy, check that the markings are present and visible.`
  },
  {
    slug: 'high-quality-prop-money-how-to-judge-it-on-camera',
    title: 'High Quality Prop Money: How to Judge It Before Your Shoot',
    seoTitle: 'High Quality Prop Money: How to Judge It',
    excerpt: 'High quality prop money: the print, paper, edge and handling checks that show whether notes will hold up on camera. Learn what to ask before you order.',
    category: 'Cinematography & Lighting',
    date: '2026-10-07',
    readTime: '9 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Handheld fan of $50 specimen prop notes shown for print quality',
    relatedCategories: ['new-notes', 'film-and-tv-props'],
    relatedProducts: ['50-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/film-and-tv-props', label: 'Browse Film & TV props' },
    content: "High quality prop money is easy to spot once you know what to look for, and just as easy to miss if you judge it from a product photo. A render can hide soft print, glare-prone paper and edges that curl after two takes. This guide gives you a practical way to judge prop money before your shoot: four checks for the notes themselves, tests you can run under your own lights, questions to put to a supplier and the red flags that tell you to walk away. It is written for art departments, photographers and directors. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nJudge prop money on four things: print detail, paper, double-sided finish and handling. Then test a sample under the lighting you will actually use, both at arm's length and up close. Quality is not about looking identical to a real banknote. It is about reading correctly on camera while staying clearly marked and different in the hand.\n\n## Check 1: Print detail\n\nFine line work is the first thing to fail in a cheap print. Hold a note at arm's length: the main design, portrait and colour blocks should look clean. Then bring it close: fine lines should stay crisp rather than turning into a blur or showing visible dots. If you are shooting a close-up of a hand counting notes, the lens will see the fine detail. If the print softens at your working distance, it will soften on camera.\n\nLook at colour as well as detail. Saturated colourways such as the gold of the $50 and the green of the $100 should read as deep, even colours, not flat or patchy. Check that the colours match across a stack, because two print runs that do not match are a continuity problem.\n\n## Check 2: Paper\n\nPaper decides how a note behaves under lights. A glossy or reflective stock throws hot spots into the lens, and a thin stock looks flimsy as soon as an actor handles it. Matte, non-reflective stock handles naturally and avoids glare under studio lighting. PROPPS notes are printed on 120gsm archival paper, which is heavy enough to feel like a note and matte enough to stay out of trouble with a lighting rig. Our guide to [lighting prop money on camera without glare](/blog/lighting-prop-money-for-camera-avoiding-glare/) goes through the lighting side.\n\nPaper also matters for compliance. Genuine Australian banknotes are polymer, so a reproduction on paper is easy to tell apart by touch. That is a deliberate feature, not a compromise.\n\n## Check 3: Both sides\n\nMany cheap prints are one-sided or have a rough reverse. That matters whenever an actor fans, flips or counts notes, because the camera will see the back. Check that both sides carry the same print quality, and that the reverse is aligned with the front. Our notes are printed double-sided, so a fanned or flipped stack looks right.\n\n## Check 4: Handling\n\nA scene may need ten takes. Notes should survive repeated handling without curling, creasing badly or tearing. Test a sample note by folding it once, fanning it and counting it through your fingers a dozen times. Look at the corners and edges. If the corners round off or the edges fray in a few minutes, the notes will not last a day on set.\n\n## A simple on-set test\n\nBefore you commit to a large order, run this five-minute test with a sample:\n\n1. **Light it as you will shoot it.** Use your actual key light, practicals and any bounce.\n2. **Check at working distance.** View the note through the lens or monitor at the distance of your wide, medium and close shots.\n3. **Tilt it.** Rotate the note slowly and watch for hot spots and reflections.\n4. **Handle it.** Fan, flip, count and fold it a dozen times.\n5. **Compare to your other props.** Put it next to the wallet, the bag or the desk it will sit on.\n6. **Take photos on the camera you will use.** The monitor lies less than a product page does.\n\n## Questions to ask a supplier\n\nGood suppliers answer these directly. Evasive answers are a warning.\n\n1. Can I see a close-up photo of an actual note, front and back?\n2. What is the paper stock and weight?\n3. Are the notes printed on both sides?\n4. Are the specimen markings permanent, and where are they?\n5. Can I order a sample or see a hand-held video?\n6. How are the notes counted and strapped?\n7. Do I get an invoice and written product description for the production file?\n8. How is the order delivered, and is a signature required?\n\n## Red flags\n\nQuality and honesty tend to travel together. Walk away if you see:\n\n- **Renders instead of photos.** If every image is a mock-up, the real product may not match.\n- **No specimen markings.** Unmarked notes are the biggest risk for buyers.\n- **Claims of undetectable quality or passing tests.** That is the wrong promise for a prop.\n- **Government clearance claims with no source.** Regulators do not approve individual prop sellers.\n- **Unmarked or discreet packaging as a selling point.** Legitimate props do not need to hide.\n- **No Australian business details.** You should be able to see an ABN and an address.\n\nFor more on weighing up suppliers, read [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) and [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).\n\n## What quality means for different shoots\n\nThe same note is judged differently depending on the job:\n\n- **A feature film close-up** needs crisp fine detail, accurate colour and a natural feel in the actor's hand. Judge the note at working distance and check both sides.\n- **A television drama** often shoots fast with multiple set-ups, so handling and matching stacks matter as much as print detail.\n- **Theatre** is viewed from a distance, so colour and durability matter more than the finest line work. Notes get handled every night.\n- **Photography** shows everything at high resolution and under controlled lighting, so paper finish and glare control matter most. Read our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/).\n- **Content creators** shoot on phones and small cameras, where bright, saturated colour and clear markings read well. See the [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/).\n\n## Keeping prop money in good condition\n\nEven good notes can be ruined by poor storage. Keep them flat, dry and out of direct sun. Avoid leaving them in a hot car, where edges curl. Keep them strapped and in the box until the scene. Handle them by the edges, and keep a few spare notes for hero shots so the best ones are not handled more than needed. At wrap, count the notes in and store them with the prop master, never loose in a bag or costume.\n\n## Quality is not the same as cost\n\nA higher price does not guarantee quality, and a low price does not always mean poor quality. What matters is whether the price covers the things you cannot see on a product page: paper weight, double-sided alignment, consistent colour between runs, counting and strapping, paperwork and delivery. Our guide to [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/) goes through the trade-offs. At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount.\n\n## Match quality to the shot\n\nNot every shot needs the same level of detail. A close-up of a hand counting notes needs hero-quality print and handling. A wide of a vault needs volume, and a shallow depth of field will blur the bundles at the back. Put your best notes where the camera is close and use stacks for the rest. Our guide to [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/) shows how to split an order between hero and background stacks.\n\n## Compliance still matters\n\nHigh quality does not mean realistic enough to deceive. Every note we sell carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender prop for motion pictures, television, theatre, visual arts and simulation training. Keep the notes under the prop master's control, never spend them and never post unmarked close-ups that suggest the cash is real. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/) for the full standard.\n\n## Where to go next\n\nSee the print for yourself in the [$50 product](/shop/new-notes/50-australian-prop-money-for-sale/) or the [Film & TV props range](/shop/film-and-tv-props/), or [contact the studio](/contact/) with your lighting setup and we will help you pick.",
    faqs: [
      {
        "q": "How can I tell if prop money is high quality?",
        "a": "Check print detail at arm's length and up close, matte paper, double-sided finish and how the notes handle after repeated takes. Browse the [New Notes range](/shop/new-notes/) to see the PROPPS print."
      },
      {
        "q": "What paper is best for prop money on camera?",
        "a": "A matte, non-reflective stock avoids hot spots under studio lights. PROPPS notes are printed on 120gsm archival paper. See [lighting prop money without glare](/blog/lighting-prop-money-for-camera-avoiding-glare/) for lighting tips."
      },
      {
        "q": "Does high quality prop money need to look exactly like real money?",
        "a": "No. Quality means reading correctly on camera while staying clearly marked and different in the hand. Our notes carry permanent specimen markings and are printed on paper, not polymer. Read the [compliance page](/compliance/) for the standard."
      },
      {
        "q": "Can I get a sample before ordering prop money?",
        "a": "Ask the supplier for close-up photos of an actual note, front and back, and a hand-held video. [Contact the studio](/contact/) with your lighting setup if you want advice before you order."
      },
      {
        "q": "Is expensive prop money always better?",
        "a": "Not always. Price should cover paper weight, print alignment, colour consistency, counting, paperwork and delivery. Our guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains what you are paying for."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'buying-prop-money-for-a-production-step-by-step',
    title: 'Buying Prop Money for a Production: A Step-by-Step Order Guide',
    seoTitle: 'Buying Prop Money for a Production: Step by Step',
    excerpt: 'From working out how much you need to dispatch and payment, here is how a typical production order runs, step by step, from Melbourne.',
    category: 'Buying Guide',
    date: '2026-10-08',
    readTime: '5 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Bundled prop money stacks packed for a production order',
    relatedCategories: ['new-notes', 'money-stacks'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop', label: 'Start your order' },
    content: `Buying prop money for a production takes about ten minutes when you know the steps.\n\n1. **Count the shots.** Decide what appears on camera: a wallet, a table spread or a full vault.\n2. **Pick denominations.** $50 and $100 notes read best on screen; smaller notes suit tills and tips.\n3. **Choose bundle sizes.** Starter Stacks suit close-ups, larger stacks suit reveals.\n4. **Order.** Minimum order is $300 AUD and delivery is free from $500. Pay by bank transfer, PayID or crypto (10% off).\n5. **Dispatch.** Orders go by Australia Post Express with signature on delivery, usually within 24 business hours of payment.\n\nIf you would rather talk it through, [contact the studio](/contact/) or go straight to the [shop](/shop/).\n\nTwo practical tips: order a little more than your shot list says, because retakes and continuity swaps use up notes faster than expected, and keep a few loose notes separate from the stacks for close-ups. If you are working to a budget, put the higher denominations in the foreground and fill the background with simpler stacks, which keeps the cost down without hurting the frame.`
  },
  {
    slug: '100-dollar-prop-money-which-bundle-size',
    title: '100 Dollar Prop Money: Which Bundle Size Suits Which Scene',
    seoTitle: '100 Dollar Prop Money: Choosing a Bundle Size',
    excerpt: '100 dollar prop money: how to choose a bundle size for wallet shots, desk spreads and vault reveals, with stack prices. Plan your order before you shoot.',
    category: 'Buying Guide',
    date: '2026-10-09',
    readTime: '9 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Handheld fan of $100 specimen prop notes',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/new-notes/100-australian-prop-money-for-sale', label: 'Buy $100 prop notes' },
    content: "For most Australian productions, 100 dollar prop money does the heavy lifting. The denomination reads clearly on camera, signals value at a glance and holds its colour under both natural and studio light. The harder question is how much to order. Too little and the scene looks thin. Too much and the budget goes on bundles the lens never sees. This guide shows how to pick a bundle size for wallet shots, desk spreads, bag reveals and vault scenes, with the real stack sizes and prices, and a few tricks that let a small order read as a large one. All our notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nMatch the stack size to what the camera actually sees. A hand or wallet shot needs a Starter Stack. A desk or table spread needs one or two stacks. A bag or briefcase scene needs five. A vault or heist reveal needs ten or more, and a full bank vault scene is where 50 and 100 stack orders come in. Use hero stacks of $100 notes where the camera is close, and fill the rest of the frame with cheaper material.\n\n## The bundle sizes and what they cost\n\nEvery product in the [New Notes range](/shop/new-notes/) is sold in the same stack tiers. Stack sizes are described by face value, and prices are in AUD:\n\n- **Starter Stack:** $1,500 face value, $115\n- **1 Stack:** $2,000 face value, $200\n- **5 Stacks:** $10,000 face value, $850\n- **10 Stacks:** $20,000 face value, $1,600\n- **50 Stacks:** $100,000 face value, $7,500\n- **100 Stacks:** $200,000 face value, $14,000\n\nOrders start at $300 AUD, so a Starter Stack on its own does not clear the minimum. A Starter Stack plus a 1 Stack, or a single 5 Stacks order, is the usual way to start. Delivery is free from $500 AUD, and payments in cryptocurrency receive a 10% discount. You can see the current prices on the [$100 product page](/shop/new-notes/100-australian-prop-money-for-sale/).\n\n## Match the bundle to the shot\n\n### Wallet or hand shot\n\nA close shot of a hand counting notes or a wallet opening only shows a few notes. One Starter Stack covers it, with plenty left over for continuity. Spend the saved budget on a clean, uncreased hero note that you keep for the close-up.\n\n### Table spread or desk scene\n\nA pile on a table, a desk or a car bonnet needs volume without depth. One or two stacks give a natural-looking spread. Let the notes fall loosely and vary the angles. A neat grid looks staged.\n\n### Bag, briefcase or handover\n\nA handover scene shows a bag opening and a thick bundle at the top. Five stacks usually fill a briefcase to the lip. Put $100 notes on top of the bundles that show, and place filler underneath. If the scene shows the same bag twice, order enough matching stacks so you are not rebuilding them between set-ups.\n\n### Heist or vault reveal\n\nA vault, a safe or a cash room is where the camera pulls back. This is where 10 stacks and above come in. Count the shelves, the pallets and the bags in the frame, then work out how many bundles each one holds. For the biggest scenes our [Money Stacks category](/shop/money-stacks/) and [wholesale page](/wholesale/) are the right place to start. Our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) goes through the maths in detail.\n\n## Make a small order look big\n\nArt departments rarely buy a full vault of hero notes. These are the usual tricks:\n\n1. **Hero on top, filler underneath.** The camera sees the top note and the stack edges. Put $100 notes at the visible faces and cheaper material behind them.\n2. **Fan the notes.** A fanned handful reads as a thicker stack than a flat one.\n3. **Vary the denominations.** An all-$100 drawer looks wrong. Mix in $50 and $20 notes, as our guide to the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) explains.\n4. **Use depth of field.** A shallow focus blurs bundles in the background, so you do not need hero quality there.\n5. **Break the line.** Open a strap, spill a few notes and leave one stack at an angle. Perfect order looks fake.\n6. **Keep spares.** Hold one stack unopened as a reserve for late changes.\n\n## Continuity and re-takes\n\nContinuity is the quiet cost of a cash scene. If the same money appears before and after a handover, you need matching stacks for both sides of the cut. Notes are double-sided, so a flipped stack still looks right. Order the full quantity for a block of shooting in one go, so the notes in scene 12 match the notes in scene 3. If you need a repeat order, [contact the studio](/contact/) and mention the earlier order.\n\n## Worked examples\n\nThese three examples show how the same tiers stretch across different scenes. Quantities are a starting point. Always count what your own shot list shows.\n\n### A bank counter scene\n\nThe camera starts on a teller counting a bundle, then cuts to a wide of the counter with a few stacks. One 5 Stacks order covers the hero stacks, the teller's drawer and a reserve. Put $100 and $50 notes on the visible faces of the bundles and use $20 and $10 notes in the drawer. Total: $850, which also clears the order minimum and delivery threshold.\n\n### A kitchen-table handover\n\nA character slides a bundle across a table, and the camera holds on the money for two seconds. One stack in a close-up is enough, and a Starter Stack plus a 1 Stack ($315 together) clears the minimum with room for a second take and a reserve. If the scene is shot twice from different angles, the second stack lets the art department reset instantly without rebuilding the first.\n\n### A vault reveal\n\nA heist or security scene pulls back to show shelves of bundles. A 10 Stacks order ($1,600) fills a modest vault. A larger set with pallets and open bags suits 50 Stacks ($7,500). A full cash room is where 100 Stacks ($14,000) and a wholesale conversation make sense. In every case, put hero stacks at the front and let depth of field handle the back.\n\n## Common mistakes with bundle sizes\n\n- **Ordering for the whole frame instead of the visible faces.** The camera sees the top of a stack, not its core.\n- **Forgetting the second set-up.** Matching stacks for a second angle save more time than they cost.\n- **Buying only $100 notes.** A drawer or wallet with a single denomination looks staged.\n- **No reserve.** A single unopened stack is cheaper than a rush order on the morning of the shoot.\n- **Leaving it late.** Express dispatch is fast, but it needs someone at the address to sign.\n\n## Why $100 notes dominate screen work\n\nThe Reserve Bank's current $100 note is a strong, saturated green that reads on camera under most lighting, and the denomination signals value instantly. That is why productions lean on $100 and $50 notes for hero stacks and use $20, $10 and $5 notes for tills, wallets and counters. If you are choosing between denominations, read our [guide to the $50 and $100 range](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) and browse the [$50 product](/shop/new-notes/50-australian-prop-money-for-sale/) alongside the $100.\n\n## Compliance and handling\n\nEvery note carries permanent specimen markings, and every product is a non-legal tender reproduction made for motion pictures, television, theatre, visual arts and simulation training. Keep the notes with the prop master, count them in and out each day, keep the invoice on file and never spend them or hand them out. For the legal background read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/). The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes its own guidance on banknote reproductions.\n\n## Where to go next\n\nStart with the [$100 prop notes](/shop/new-notes/100-australian-prop-money-for-sale/), compare the [Money Stacks](/shop/money-stacks/), or read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) if you are still sizing the order.",
    faqs: [
      {
        "q": "How much 100 dollar prop money do I need for a scene?",
        "a": "A wallet shot needs a Starter Stack, a desk spread one or two stacks, a briefcase five, and a vault ten or more. Match the order to what the camera sees. See the [$100 product](/shop/new-notes/100-australian-prop-money-for-sale/) for current prices."
      },
      {
        "q": "What bundle sizes are available for $100 prop notes?",
        "a": "Starter Stack ($115), 1 Stack ($200), 5 Stacks ($850), 10 Stacks ($1,600), 50 Stacks ($7,500) and 100 Stacks ($14,000), all in AUD. Browse the [New Notes range](/shop/new-notes/) to choose."
      },
      {
        "q": "Can I order a single Starter Stack?",
        "a": "Orders start at $300 AUD, so a Starter Stack on its own does not clear the minimum. Add a 1 Stack or choose 5 Stacks. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) before you order."
      },
      {
        "q": "Are $100 prop notes double-sided?",
        "a": "Yes, notes are printed on both sides, so a flipped or fanned stack still looks right on camera. See [high quality prop money and how to judge it](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) for what to check."
      },
      {
        "q": "Can I get a bulk price for a vault scene?",
        "a": "Yes. For 50 and 100 stack scenes and for repeat orders across a season, use the [wholesale page](/wholesale/) or [contact the studio](/contact/) with your shot list."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'ready-prop-money-stacks-for-fast-turnaround',
    title: 'Ready Prop Money: Stacks That Arrive Set-Ready for Fast Turnarounds',
    seoTitle: 'Ready Prop Money for Fast Turnarounds',
    excerpt: 'Ready prop money means counted, strapped stacks you can place on set. Learn how pre-strapped stacks save prep time and simplify continuity. Plan your order.',
    category: 'Art Department',
    date: '2026-10-10',
    readTime: '9 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Strapped specimen prop money stacks ready for set',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack'],
    relatedPage: { href: '/shop/money-stacks', label: 'Shop money stacks' },
    content: "Call sheets change. A scene moves a day earlier, a table spread becomes a vault reveal, or the director adds a second take of a handover with a different bag. When cash is in the shot, the art department is the department that feels it first. Ready prop money, meaning stacks that are already counted, strapped and sized, takes the preparation out of a late change. This guide explains what ready stacks are, when they save time, how to size and store them, and how to order them for a fast turnaround. Every note we sell is a specimen-marked, non-legal tender prop.\n\n## The short answer\n\nReady prop money is supplied as pre-counted, strapped stacks, so the art department can place them instead of building them. It saves prep hours, keeps stacks matching across set-ups and makes late changes manageable. Orders dispatch from our Melbourne studio by Australia Post Express, with a signature required on delivery. Browse the [Money Stacks category](/shop/money-stacks/) to see what is available.\n\n## What ready stacks are\n\nA ready stack is a bundle of notes that has been counted and strapped at the studio. The art department opens the box, checks the count and places the stack. Nothing needs to be banded, squared or counted on the morning of the shoot. Stack sizes are standard, so you can plan around them. Our stack tiers run from a Starter Stack through 1, 5, 10, 50 and 100 stacks, which covers anything from a wallet shot to a full vault.\n\n## Why ready stacks help on a tight schedule\n\n1. **Less prep.** There is no counting or banding on the day. A prop master with a small team can dress a scene in minutes instead of an hour.\n2. **Consistent look.** Matching stacks make continuity simpler between takes and between set-ups.\n3. **Fewer mistakes.** A strapped stack has a known count, so you can track it in and out at the end of the day.\n4. **Easier handover.** The second unit or a new art department assistant can pick up the stacks and place them without a briefing.\n5. **Faster dispatch.** Orders leave our Melbourne studio by Express Post within 24 business hours of payment.\n\n## When ready stacks matter most\n\nReady stacks pay off whenever time is the scarcest resource:\n\n- **Late scene changes.** A move from a table spread to a vault reveal needs more stacks, not more preparation.\n- **Multi-camera days.** Two cameras and three set-ups need identical stacks in several places at once.\n- **Series work.** Episode six has to match episode one. Order once, and use the same size and strapping throughout.\n- **Small crews.** Student films and independent productions rarely have a spare person to count and band notes.\n- **Photography.** A studio shoot with an hourly rate benefits from stacks that go straight on the set.\n\nFor a longer look at how to match volume to scene, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/).\n\n## How to size a ready-stack order\n\nUse a simple process:\n\n1. **Count the visible stacks.** Walk the shot list and count how many stacks the camera sees in each scene.\n2. **Add the hidden ones.** Add stacks that sit behind hero bundles, under bags or in the background. The lens may blur them, but they still need to be there.\n3. **Allow for continuity.** If the same money appears twice in a scene, double the count for the second set-up.\n4. **Add a reserve.** Keep one stack unopened as a spare for late changes.\n5. **Round up to the nearest tier.** The tiers are Starter ($115), 1 Stack ($200), 5 Stacks ($850), 10 Stacks ($1,600), 50 Stacks ($7,500) and 100 Stacks ($14,000), in AUD.\n\nOrders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount. For larger or repeat runs, ask about wholesale rates on our [wholesale page](/wholesale/).\n\n## Choosing denominations for ready stacks\n\nReady stacks work best when the denomination mix fits the scene. Use $100 and $50 notes on the visible faces of hero stacks, because those colours read strongly on camera. Add $20, $10 and $5 stacks for tills, wallets and counters. See our [$100 bundle size guide](/blog/100-dollar-prop-money-which-bundle-size/) for how to size the biggest stacks, and the guide to the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) for the mix.\n\n## A worked example: a three-day shoot\n\nImagine a short drama with a bank scene on day one, a car handover on day two and a kitchen-table scene on day three, all using the same money. The art department needs hero stacks for the bank counter, a bag for the car and a close-up bundle for the table.\n\nWith ready stacks the plan is simple. Order 5 Stacks for the bank counter and drawer, add a 1 Stack and a Starter Stack for the handover and the table, and keep one stack sealed as a reserve. Because every stack is strapped and counted, the prop master can reset the bag between takes in a minute, track the count at wrap each day and hand the same stacks to the next location. Without ready stacks, each of those resets means banding, squaring and counting by hand while the crew waits.\n\n## Common mistakes with ready stacks\n\n- **Opening everything on day one.** Keep the reserve sealed until it is needed.\n- **Ordering different sizes for the same scene.** Matching stacks protect continuity, so keep sizes consistent across a scene.\n- **Not counting at wrap.** A quick count at the end of the day is the cheapest way to avoid a missing-stack surprise.\n- **Leaving the notes unattended.** Assign one person and a secure place before the parcel arrives.\n- **Waiting until the night before.** Ready stacks are fast, but a signature is required on delivery and weekends and remote addresses take longer.\n\n## Storing and handling ready stacks on set\n\nA stack that is ready to place should stay that way. A few simple rules keep the notes in good shape and keep the paperwork clean:\n\n- **Keep them in the box until the scene.** A strap protects the edges and keeps the count.\n- **Assign one person.** The prop master or art department assistant is responsible for the notes, in and out, each day.\n- **Count at wrap.** A quick count at the end of the day catches anything missing before it leaves the location.\n- **Keep one stack sealed.** A reserve for late changes is cheaper than a rush order.\n- **Protect from moisture and heat.** Archival paper handles normally, but damp conditions and hot cars curl edges.\n- **Never leave notes in a car or on a location overnight.** Store them securely.\n\n## Ordering for a fast turnaround\n\nThe fastest way to get ready stacks on set is to plan the order a few days before the shoot:\n\n1. Choose your stack tiers and denominations in the [Money Stacks category](/shop/money-stacks/).\n2. Place the order and pay at checkout. If you pay in crypto, the 10% discount applies.\n3. Orders dispatch from Melbourne by [Australia Post](https://auspost.com.au/) Express within 24 business hours of payment.\n4. A signature is required on delivery, so make sure someone is at the address.\n5. On arrival, check the count, file the invoice and store the stacks with the prop master.\n\nIf your shoot date is very close, [contact the studio](/contact/) and we will tell you what is realistic for your state. Our guide to [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) shows typical timings.\n\n## Compliance and responsible use\n\nReady stacks are still props. Every note carries permanent specimen markings, and every product is a non-legal tender reproduction made for motion pictures, television, theatre, visual arts and simulation training. They must never be spent, handed out as gifts or tips, or presented as real cash. Keep the invoice on the production file, control the notes on set and brief the cast and crew. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/) for the full standard.\n\n## Where to go next\n\nBrowse [Money Stacks](/shop/money-stacks/), compare the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, or send your shot list through the [contact page](/contact/) for a quantity suggestion.",
    faqs: [
      {
        "q": "What is ready prop money?",
        "a": "Ready prop money is supplied as pre-counted, strapped stacks, so the art department can place them without counting or banding on the day. Browse the [Money Stacks category](/shop/money-stacks/) to see the sizes."
      },
      {
        "q": "How fast can ready prop money stacks be delivered?",
        "a": "Orders leave our Melbourne studio by Australia Post Express within 24 business hours of payment, with a signature required on delivery. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for typical timings."
      },
      {
        "q": "How many stacks do I need for a scene?",
        "a": "Count the stacks the camera sees, add the hidden ones, double for repeat set-ups and add a reserve. [How much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows examples."
      },
      {
        "q": "Can I get a better price on a large ready-stack order?",
        "a": "Yes. For 50 and 100 stack runs and repeat orders across a season, ask about rates on the [wholesale page](/wholesale/)."
      },
      {
        "q": "Are ready stacks legal to use on set?",
        "a": "Yes, as long as they are used as props. Every note carries specimen markings and is a non-legal tender reproduction. Never spend them. Read our [compliance page](/compliance/) for the standard."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'prop-money-for-music-videos-australia',
    title: 'Prop Money for Music Videos in Australia: What Works on Camera',
    seoTitle: 'Prop Money for Music Videos in Australia',
    excerpt: 'Music video shoots are quick and close-up. Here is which prop notes work on camera, how to light them and how to keep it compliant.',
    category: 'Production Guide',
    date: '2026-10-11',
    readTime: '4 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Fanned $50 specimen prop notes suited to music video shoots',
    relatedCategories: ['photography-props', 'event-and-party-props'],
    relatedProducts: ['photography-prop-currency-set'],
    relatedPage: { href: '/shop/photography-props', label: 'Shop photography props' },
    content: `Prop money for music videos has to look good fast. Shoots are short, framing is tight and notes are often thrown, fanned or held to camera.\n\nWhat tends to work:\n1. **Double-sided notes** that survive being flipped and fanned.\n2. **Matte paper** that avoids glare under LED and strobe lighting.\n3. **Loose notes plus one stack**, so there is enough to throw without running out.\n\nKeep the markings visible and never hand notes to the public as real money. For stills and clips, our [photography range](/shop/photography-props/) is the place to start.\n\nBecause music video shoots are fast and often outdoors, take care with handling: notes thrown into the air or fanned in front of a fan will spread quickly, so brief the crew to collect them between takes. Keep a spare set for the hero shot, and avoid handing notes to members of the public as props in a public location, where someone could mistake them for real money.`
  },
  {
    slug: 'double-sided-prop-banknotes-aud-why-both-sides-matter',
    title: 'Double-Sided Prop Banknotes (AUD): Why Both Sides Matter on Set',
    seoTitle: 'Double-Sided Prop Banknotes AUD: Why It Matters',
    excerpt: 'A note that is blank or wrong on the back gives itself away. Here is when double-sided printing earns its keep.',
    category: 'Cinematography & Lighting',
    date: '2026-10-11',
    readTime: '3 min read',
    image: 'blog-20-50-handful.jpg',
    imageAlt: 'Double-sided $20 and $50 specimen prop banknotes',
    relatedCategories: ['new-notes'],
    relatedProducts: ['20-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/new-notes', label: 'See double-sided notes' },
    content: `Double-sided prop banknotes cost slightly more to make, and they pay for themselves the first time a note is flipped on camera.\n\nWhere both sides matter:\n- **Counting scenes**, where the back is visible as notes are fanned.\n- **Handoffs**, where a note is turned over in a hand.\n- **Close-ups** at 4K, where a blank back is obvious.\n\nPROPPS notes are printed on both sides in high definition and carry specimen markings throughout. See the [New Notes range](/shop/new-notes/) for every denomination.\n\nDouble-sided printing also helps with continuity. When an actor turns a note over between takes, the back should match from one take to the next, and a printed reverse makes that automatic. It is a small detail, but it is one of the first things a close-up or a freeze-frame exposes, and it is the difference between a note that reads as real on screen and one that does not.`
  },
  {
    slug: 'movie-prop-cash-melbourne-and-sydney-delivery',
    title: 'Movie Prop Cash in Melbourne and Sydney: Ordering and Delivery',
    seoTitle: 'Movie Prop Cash: Melbourne and Sydney Delivery',
    excerpt: 'Based in Melbourne and shipping Australia-wide: how movie prop cash gets to your set in Melbourne, Sydney or beyond.',
    category: 'Buying Guide',
    date: '2026-10-12',
    readTime: '3 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Specimen prop cash notes packed for dispatch from Melbourne',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    relatedPage: { href: '/shop/film-and-tv-props', label: 'Shop Film & TV props' },
    content: `Movie prop cash ordered from PROPPS is made and packed in Eltham, Melbourne, then sent by Australia Post Express with signature on delivery.\n\nWhat that means for your schedule:\n1. **Melbourne productions** get the shortest transit from our studio.\n2. **Sydney and interstate sets** are covered by the same Express service.\n3. **Dispatch** usually leaves within 24 business hours of payment confirmation.\n4. **Order size.** $300 AUD minimum, free delivery from $500.\n\nPlan the order a few days ahead of your shoot, pick your denominations in the [Film & TV range](/shop/film-and-tv-props/), and [contact us](/contact/) if you need a quote for a larger run.\n\nFor a Melbourne shoot, collection is not offered, so plan for Express Post delivery to your set or production office. For Sydney and other states the same service applies, with signature on delivery so the parcel is handed to a named person. If your call time is close, tell us the date when you place the order and we will confirm whether the dispatch window fits.`
  }
];

export const PAGES = {
  about: true,
  faq: true,
  blog: true,
  wholesale: true,
  tracking: false,
  compare: false,
  search: true,
}

export const FAQ = [
  {
    question: 'Is prop money legal to buy and use in Australia?',
    answer: 'Yes. Prop currency is completely legal to purchase and use in Australia for legitimate motion picture, television, theatrical, commercial, and training productions provided it adheres to the Crimes (Currency) Act 1981 and Reserve Bank of Australia reproduction guidelines, featuring prominent non-negotiable reproduction markings.'
  },
  {
    question: 'Can this prop money be spent or circulated as legal tender?',
    answer: 'Absolutely not. PROPPS PTY LTD reproduction currency is strictly non-legal tender. Attempting to spend, circulate, or deceive any person or machine with prop currency is a severe criminal offence under Commonwealth law carrying substantial prison penalties.'
  },
  {
    question: 'What materials are used for your Australian prop banknotes?',
    answer: 'Our prop currency is printed on specialized 120gsm high-grade matte archival paper rather than polymer film. This matte finish prevents studio camera reflections, handles realistically during counting scenes, and ensures clear distinction from genuine legal currency.'
  },
  {
    question: 'What is the minimum order requirement and shipping cost?',
    answer: 'Our minimum order value is $300 AUD. Orders of $500 AUD and above qualify for free Australia-wide express shipping. Orders below $500 incur a flat $20 AUD Australia Post Express shipping fee with mandatory signature on delivery.'
  },
  {
    question: 'How does the 10% cryptocurrency discount work?',
    answer: 'When selecting cryptocurrency payment (Bitcoin, USDT TRC20, or Ethereum), a 10% discount is automatically deducted from your order subtotal. You will receive transfer instructions and can confirm your transaction with a TXID.'
  },
  {
    question: 'Do you offer bulk wholesale pricing for film production studios?',
    answer: 'Yes. We supply major streaming studios, theatre companies, escape rooms, and financial training institutions across Australia with custom bulk quantities, specialised serial numbers, and custom vault bricks with tiered wholesale discounts.'
  },
  {
    question: 'Where are you based and how fast is dispatch?',
    answer: 'We are based in Melbourne, Victoria (Eltham, VIC 3093). All orders are packaged discreetly in tamper-evident security boxes and dispatched via Express Australia Post within 24 business hours of payment confirmation.'
  }
]

// Product-page and video-page FAQs. Each product gets 5 questions built around
// DIFFERENT low-KD / high-volume keywords from the keyword bank (see
// docs/keyword-map.md). Numbers come from SHOP/BUNDLE_TIERS so they never drift.
const legal = (what) => `Yes. Buying ${what} for legitimate film, television, theatre, photography, advertising or training use is legal in Australia when the notes are clearly marked and never made to deceive. Every PROPPS note carries mandatory SPECIMEN markings in line with Crimes (Currency) Act 1981 Section 22 and RBA reproduction guidelines. It is non-legal tender and must never be spent or passed off as real money.`
const FAQ_SHIP = `Orders ship by Australia Post Express with signature on delivery from Eltham, Melbourne VIC 3093, usually within 24 business hours of payment confirmation. The minimum order is $${SHOP.minOrder} AUD. Delivery is free at $${SHOP.freeShippingThreshold} AUD and above, or a flat $${SHOP.shippingFee} AUD below that.`
const FAQ_PAY = `Pay by bank transfer (EFT/Osko), PayID or cryptocurrency (Bitcoin, USDT TRC20 or Ethereum). Crypto payments get an automatic ${SHOP.cryptoDiscount}% discount. After you order, we email an invoice with an "Open invoice & pay" page where each payment detail can be copied with one tap or scanned as a QR code.`
const FAQ_BUNDLES = `Pick a bundle size on this page, from a Starter Stack ($${BUNDLE_TIERS[0].faceValue.toLocaleString('en-AU')} face value, $${BUNDLE_TIERS[0].price} AUD) up to ${BUNDLE_TIERS[5].label} ($${BUNDLE_TIERS[5].faceValue.toLocaleString('en-AU')} face value, $${BUNDLE_TIERS[5].price.toLocaleString('en-AU')} AUD). Different denominations can be combined on one order. For studio-scale quantities, ask about wholesale tiers of 10% to 30% off.`

export const PRODUCT_FAQS = {
  '5-australian-prop-money-for-sale': [
    {
      question: 'What is an Australian five dollar note prop used for?',
      answer: `Our Australian five dollar note prop is a double-sided, non-legal-tender reproduction made for film, television, theatre, photography and training scenes where small cash exchanges need to look right on camera. It suits till drawers, tip jars, market stalls and pocket money moments. Every note carries mandatory SPECIMEN markings.`
    },
    {
      question: 'Is it legal to buy a 5 dollar note Australia prop?',
      answer: legal('a 5 dollar note prop')
    },
    {
      question: 'What is the Australian $5 note prop printed on?',
      answer: `The Australian $5 note prop is printed double-sided on matte archival paper rather than polymer. The matte finish avoids glare under studio lighting, handles naturally in counting scenes, and stays clearly distinguishable from genuine currency.`
    },
    {
      question: 'How do bundles work for the Australian 5 dollar note?',
      answer: FAQ_BUNDLES
    },
    {
      question: 'Can I order five dollar note Australia props online with express delivery?',
      answer: `Yes, order online or via WhatsApp. ${FAQ_SHIP}`
    }
  ],
  '10-australian-prop-money-for-sale': [
    {
      question: 'What is a 10 dollar Australian note prop used for?',
      answer: `The 10 dollar Australian note prop is a non-legal-tender, double-sided reproduction for productions that need everyday cash: bar tabs, taxi fares, market purchases and small payoffs. It is made for film, TV, theatre, photography and training use only, with SPECIMEN markings on every note.`
    },
    {
      question: 'Is an Australian $10 note prop legal to own and film with?',
      answer: legal('an Australian $10 note prop')
    },
    {
      question: 'Can I buy 10 dollar notes Australia props in bulk?',
      answer: `Yes. ${FAQ_BUNDLES}`
    },
    {
      question: 'How realistic is the $10 note Australia prop on camera?',
      answer: `It is printed in high-definition on both sides on matte archival paper, so it reads as convincing cash in close-ups without the reflective sheen that causes glare under lights. It is deliberately not made of polymer, which keeps it clearly a prop.`
    },
    {
      question: 'How fast can 10$ note Australia props be delivered?',
      answer: FAQ_SHIP
    }
  ],
  '20-australian-prop-money-for-sale': [
    {
      question: 'What is the Australian twenty dollar prop note for?',
      answer: `The Australian twenty dollar prop note is a double-sided, non-legal-tender reproduction for scenes with mid-range cash: payments, tips, deals and wallet shots. It is supplied for film, television, theatre, photography and training productions, with SPECIMEN markings on every note.`
    },
    {
      question: 'Is the Australian 20 dollar note prop legal tender?',
      answer: `No. It is strictly non-legal tender and must never be spent, circulated or used to deceive anyone. It is legal to own as a marked prop for production use, and every note carries SPECIMEN markings in line with Crimes (Currency) Act 1981 Section 22.`
    },
    {
      question: 'What does the Australian $20 note prop look like on camera?',
      answer: `It has a high-definition double-sided print on premium matte archival paper, which photographs cleanly under studio and location lighting without the glare that polymer notes can cause. The specimen markings keep it compliant while it still reads as realistic cash on screen.`
    },
    {
      question: 'Can I get aus 20 dollar note props for a stage or theatre show?',
      answer: `Yes. Our aus 20 dollar note props suit stage use because the matte paper does not glare under stage lighting. Order a Starter Stack for a small cast, or larger bundles for long runs. Studio and theatre buyers can also ask about wholesale tiers.`
    },
    {
      question: 'How do I pay for Australian 20 dollar bill props?',
      answer: FAQ_PAY
    }
  ],
  '50-australian-prop-money-for-sale': [
    {
      question: 'What is the 50 dollar note Australia prop used for?',
      answer: `The 50 dollar note Australia prop is a go-to denomination for deals, payoffs and cash-handling scenes in film, television, theatre and photography. It is a non-legal-tender, double-sided reproduction with SPECIMEN markings on every note.`
    },
    {
      question: 'Is buying an aus 50 dollar note prop legal?',
      answer: legal('an aus 50 dollar note prop')
    },
    {
      question: 'How is the Australian 50 dollar note prop different from real money?',
      answer: `It is printed on matte archival paper instead of polymer and carries prominent non-negotiable SPECIMEN markings, so it cannot pass as genuine currency. That difference is what keeps it compliant with Crimes (Currency) Act 1981 Section 22 and RBA reproduction guidelines.`
    },
    {
      question: 'Do you sell a 50 dollar bill Australia prop for photo shoots?',
      answer: `Yes. Photographers and content creators buy the 50 dollar bill Australia prop for editorial, commercial and social media shoots. It is made for photography and other legitimate simulation use, not for spending. Choose a bundle size on this page, from a Starter Stack up to studio-scale quantities.`
    },
    {
      question: 'What is the minimum order for Australian $50 note props?',
      answer: FAQ_SHIP
    }
  ],
  '100-australian-prop-money-for-sale': [
    {
      question: 'What is a 100 dollar note Australia prop?',
      answer: `The 100 dollar note Australia prop is a double-sided, non-legal-tender reproduction of a $100 design, made for film, television, theatre, photography and training scenes. It is our best-selling denomination for large payoffs, heist reveals and stacked cash, with SPECIMEN markings on every note.`
    },
    {
      question: 'Are Australian 100 dollar note props legal to buy?',
      answer: legal('Australian 100 dollar note props')
    },
    {
      question: 'Why is the aus 100 dollar note prop so popular with productions?',
      answer: `Higher denominations fill a frame with visible value quickly, so art departments use the aus 100 dollar note prop for briefcase, table and stack shots. The double-sided print and matte archival paper look convincing on camera and avoid glare.`
    },
    {
      question: 'What bundle sizes are available for the Australian 100 dollar banknote prop?',
      answer: FAQ_BUNDLES
    },
    {
      question: 'Can I pay for Australian $100 note props with crypto?',
      answer: FAQ_PAY
    }
  ],
  'film-and-tv-prop-currency-pack': [
    {
      question: 'Where can I buy film props in Australia for a cash scene?',
      answer: `You can buy film props online from PROPPS PTY LTD in Melbourne. The Film & TV Prop Currency Pack is curated for cash-handling, transaction and reveal scenes, with non-legal-tender SPECIMEN markings on every note. ${FAQ_SHIP}`
    },
    {
      question: 'Are your film props for sale or for prop hire in Melbourne?',
      answer: `We sell prop currency rather than hiring it out. Buying means the notes are yours to dress, handle and reshoot with, and you never have to return cash that gets worn or marked during a shoot. Production companies can request wholesale pricing for larger orders.`
    },
    {
      question: 'Do you have movie set props for sale beyond cash?',
      answer: `Our specialty is cinema-grade Australian prop currency, so we focus on cash for scenes rather than general furniture or set dressing. If your art department needs notes in volume, we supply single stacks through to studio-scale quantities.`
    },
    {
      question: 'Is movie prop money Australia safe to use on camera?',
      answer: `Yes, when it is clearly marked. Our movie prop money carries mandatory SPECIMEN indicators and is printed on matte archival paper that avoids reflections. Use it only for production, never as real money.`
    },
    {
      question: 'Can production companies get film props for sale in bulk?',
      answer: `Yes. Film and TV productions can order bulk quantities with tiered wholesale discounts of 10% to 30% off. ${FAQ_BUNDLES}`
    }
  ],
  'bulk-money-stack-pack': [
    {
      question: 'What is a stack of Australian money prop?',
      answer: `It is a bundle of non-legal-tender prop notes strapped together the way cash is banded for bank and vault scenes. The Bulk Money Stack Pack gives production designers large visible cash volumes for heist, vault and bank sequences, with SPECIMEN markings on every note.`
    },
    {
      question: 'How many stacks of Australian money do I need for a heist scene?',
      answer: `It depends on the shot. Hero stacks visible in close-up need only a few, while a vault wall or a briefcase full of cash needs many more, because most of the volume sits in the background. Start with a Starter Stack, then scale up to 5, 10 or 50 Stacks for wide shots.`
    },
    {
      question: 'Are prop bundles of money Australia strapped like real bank bundles?',
      answer: `They are supplied as strapped stacks for a realistic on-camera look, while still being obviously non-legal tender. Every note carries SPECIMEN markings, and the paper is matte archival stock rather than polymer.`
    },
    {
      question: 'Can I order bulk prop money in Australia for an escape room or theatre?',
      answer: `Yes. Escape rooms, theatres, training providers and studios order bulk prop money regularly. ${FAQ_BUNDLES}`
    },
    {
      question: 'Is a money stack Australia prop legal to own?',
      answer: legal('a money stack prop')
    }
  ],
  'photography-prop-currency-set': [
    {
      question: 'Can I use prop money for a photoshoot?',
      answer: `Yes. The Photography Prop Currency Set is made for editorial, commercial, product and social media shoots. Use it as clearly marked prop currency, never as real money, and keep the SPECIMEN markings visible.`
    },
    {
      question: 'Will prop dollar bills look real in close-up photography?',
      answer: `They are printed in high definition on both sides on matte archival paper, so they hold detail in close-ups and avoid the reflections that spoil shots. The SPECIMEN markings are part of the design and keep the set compliant.`
    },
    {
      question: 'Is imitation money legal for commercial and social media content?',
      answer: `Imitation money is legal for content when it is clearly marked and not used to deceive. Our set carries SPECIMEN markings. Creators should avoid presenting it as real cash in a misleading way, for example in giveaway or scam-style videos.`
    },
    {
      question: 'What makes realistic money good for photography?',
      answer: `Matte, non-reflective paper with a sharp double-sided print. Glossy or polymer-like surfaces catch strobes and window light. Our archival paper stays even under flash, so a fanned stack or a single note photographs cleanly.`
    },
    {
      question: 'How do I get prop cash for a shoot on a tight deadline?',
      answer: `Order online or by WhatsApp and choose Australia Post Express. ${FAQ_SHIP}`
    }
  ],
  'event-and-party-prop-cash-pack': [
    {
      question: 'Where can I buy play money Australia for a party or event?',
      answer: `The Event & Party Prop Cash Pack is novelty prop cash for parties, themed events and entertainment. Order online from Melbourne. ${FAQ_SHIP}`
    },
    {
      question: 'Is this Australian play money suitable for childrens play money games?',
      answer: `It is realistic-looking prop cash designed for events and themed entertainment, not a toy for unsupervised young children. For kids' games and learning, read our guide to toy and play money, and keep any prop currency for adult-supervised use.`
    },
    {
      question: 'Is toy money Australia the same as prop money?',
      answer: `Not quite. Australian toy money is usually brightly coloured and clearly unlike real notes, while prop money is a realistic reproduction for productions. Both must be clearly non-legal tender. Our pack sits at the realistic end, with SPECIMEN markings on every note.`
    },
    {
      question: 'Can I use Australia play money as a bucks-night or party prop?',
      answer: `Yes, as a prop only. Never spend it or hand it to a business or machine as real cash, and keep the SPECIMEN markings visible.`
    },
    {
      question: 'Can I order novelty prop money Australia in bulk for an event?',
      answer: `Yes. Event planners can order larger bundles for themed nights, festivals and promotions. ${FAQ_BUNDLES}`
    }
  ],
  'custom-and-branded-prop-currency': [
    {
      question: 'Can you do custom prop money printing in Australia?',
      answer: `Yes. We produce custom and branded prop currency for agencies, brands and special productions. Contact our studio with your idea, and we will discuss denominations, artwork and branding. Every custom note keeps mandatory non-legal-tender markings.`
    },
    {
      question: 'What is branded prop currency for campaigns?',
      answer: `Branded prop currency is made-to-order cash with your artwork, logo or campaign theme, used for promotions, events, product launches and film-style content. It is designed to be clearly a prop, never a copy that could be mistaken for genuine currency.`
    },
    {
      question: 'Is custom prop money legal in Australia?',
      answer: `Yes, provided it is not made to deceive and follows Crimes (Currency) Act 1981 Section 22 and RBA reproduction guidelines. We will not produce anything that could pass as genuine legal tender. Every design keeps mandatory specimen markings.`
    },
    {
      question: 'How do I order prop money online for a custom job?',
      answer: `Send a message through our contact form or WhatsApp with your concept, quantity and deadline. We reply with a quote and next steps. Standard orders have a $${SHOP.minOrder} AUD minimum, and payment options include bank transfer, PayID and crypto.`
    },
    {
      question: 'Can I buy branded prop money for an agency in bulk?',
      answer: `Yes. Agencies and brands can request quantity pricing. ${FAQ_BUNDLES}`
    }
  ]
}

export const BLOG_FAQ = [
  {
    question: 'Is it legal to own australian prop money?',
    answer: 'Yes, owning reproduction currency for legitimate artistic, theatrical, or cinematic use is legal in Australia provided the notes follow RBA specimen guidelines and the Crimes (Currency) Act 1981, featuring prominent non-legal-tender markings.'
  },
  {
    question: 'Where can I find the most realistic fake money australia for filming?',
    answer: 'Professional productions source their props from dedicated studios like PROPPS PTY LTD, which uses matte archival paper and high-definition dual-sided printing to ensure camera realism without the reflective glare of polymer.'
  },
  {
    question: 'What are the requirements for a fake australian money prop to be compliant?',
    answer: 'Compliant props must carry prominent "SPECIMEN" or "REPRODUCTION" markings on both sides, use non-polymer archival materials, and differ in texture or scale from genuine tender to prevent any possibility of deception.'
  },
  {
    question: 'Why do cinematographers prefer au prop money over standard novelty notes?',
    answer: 'High-quality au prop money is engineered for the lens; its colour calibration and matte texture allow it to read as authentic cash under studio lighting, unlike glossy or single-sided novelty alternatives.'
  },
  {
    question: 'How fast is dispatch for prop money australia orders?',
    answer: 'Orders from our Melbourne studio are dispatched via Australia Post Express within 24 hours of payment, ensuring fast, trackable delivery across Australia for tight production schedules.'
  },
  {
    question: 'Can I use aus prop money for social media content creation?',
    answer: 'Yes, aus prop money is frequently used by content creators for lifestyle skits and photography. Using compliant props with visible specimen indicators protects your accounts from being flagged for circulating illegal content.'
  },
  {
    question: 'What denominations are available in your props money collection?',
    answer: 'Our props money collection includes all current Australian denominations—$5, $10, $20, $50, and $100—plus specialized production master stacks for high-volume bank and heist sequences.'
  }
];

export const VIDEO_FAQS = [
  {
    question: 'Which denominations are shown in the prop money video?',
    answer: `The video reviews every Australian prop note denomination we supply: the $5, $10, $20, $50 and $100. Each is a double-sided, non-legal-tender reproduction with SPECIMEN markings, made for film, TV, theatre, photography and training use.`
  },
  {
    question: 'What is props money and who uses it?',
    answer: `Props money is reproduction currency made for productions rather than spending. Film and TV art departments, theatre companies, photographers, content creators and training providers use it whenever a scene needs cash that looks right on camera.`
  },
  {
    question: 'How realistic does Australian prop money look on camera?',
    answer: `Australian prop money from PROPPS is printed in high definition on both sides on matte archival paper, so it reads as convincing cash in close-ups without glare. The mandatory SPECIMEN markings keep it clearly non-legal tender.`
  },
  {
    question: 'Where can I buy the prop cash shown in the video?',
    answer: `You can buy every denomination in the video online at PROPPS PTY LTD, straight from our shop. ${FAQ_SHIP}`
  },
  {
    question: 'Are the notes in the video legal tender or just prop dollars?',
    answer: `They are prop dollars only. They are non-legal tender, must never be spent, and are supplied strictly for motion picture, television, theatre, photography and training use, with SPECIMEN markings on every note.`
  }
]

export const COMPLIANCE = {
  bannedTerms: [
    'counterfeit',
    'fake money for spending',
    'spendable',
    'clone bills',
    'atm test',
    'pass real',
    'pass as real',
    'dupe cash',
    'buy fake notes'
  ],
  requiredFramings: [
    'For motion picture, television, advertising, theatrical, and training use only',
    'Non-legal tender reproduction prop money',
    'Compliant with Crimes (Currency) Act 1981 Section 22 and RBA reproduction guidelines',
    'Features non-negotiable legal specimen indicators'
  ],
  prohibitedClaims: [
    'Can be passed as legal tender',
    'Works in ATM or vending machines',
    'Undetectable by UV or counterfeit pens'
  ],
  ageGate: true,
  ageMinimum: 18,
  disclaimer: ''
}
