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
  // Same address as ethereum: USDT on the ERC20 (Ethereum) network.
  usdtErc20: '0xaF80aa1ca688A1318e1F39E273cAf5895bE12749',
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
    h1: 'AU Prop Money — Buy Prop Money Australia, New Notes Collection',
    seoTitle: 'AU Prop Money | Buy Prop Money Australia',
    seoDescription: 'Buy AU prop money in all five denominations, $5 to $100. Specimen-marked prop notes for film, TV and photography, dispatched from Melbourne. Orders from $300.'
  },
  {
    slug: 'film-and-tv-props',
    name: 'Film & TV Props',
    description: 'Cinema and television production props engineered for on-camera realism under studio lighting.',
    image: 'film-tv-props.jpg',
    h1: 'Buy Film Props Australia — Film & TV Prop Currency',
    seoTitle: 'Buy Film Props Australia | Film & TV Prop Currency',
    seoDescription: 'Buy film props in Australia: cinema-grade prop currency for movie set cash scenes. Specimen-marked, matte, double-sided, shipped from Melbourne. From $300.'
  },
  {
    slug: 'money-stacks',
    name: 'Money Stacks',
    description: 'Bulk strapped stacks and bundles for scenes requiring large visible cash volumes.',
    image: 'money-stacks.jpeg',
    h1: 'Prop Money Stacks — Money Stack Prop Bundles Australia',
    seoTitle: 'Prop Money Stacks Australia | Money Stack Prop',
    seoDescription: 'Prop money stacks Australia: strapped, counted money stack prop bundles for bank, vault and heist scenes. Specimen-marked, shipped from Melbourne. From $300.'
  },
  {
    slug: 'photography-props',
    name: 'Photography Props',
    description: 'Prop currency styled for print, editorial, and commercial photography shoots.',
    image: 'photography-props.jpeg',
    h1: 'Photography Props Australia — Prop Money for Photoshoot',
    seoTitle: 'Photography Props Australia | Prop Money for Photoshoot',
    seoDescription: 'Photography props Australia: prop money for photoshoot and editorial shoots. Matte, glare-free, specimen-marked notes shipped from Melbourne. From $300.'
  },
  {
    slug: 'event-and-party-props',
    name: 'Event & Party Props',
    description: 'Novelty prop cash for events, parties, and themed entertainment.',
    image: 'event-party-props.jpeg',
    h1: 'Play Money Australia — Event & Party Props',
    seoTitle: 'Play Money Australia | Event & Party Props',
    seoDescription: 'Play money Australia for parties and events: Australian play money, toy money and kids play money, clearly marked and shipped from Melbourne. From $300.'
  },
  {
    slug: 'custom-and-branded-props',
    name: 'Custom & Branded Props',
    description: 'Bespoke and custom-branded prop currency for agencies, brands, and special productions.',
    image: 'custom-branded-props.jpeg',
    h1: 'Custom Prop Money — Custom Money Printing Australia',
    seoTitle: 'Custom Prop Money | Custom Money Printing Australia',
    seoDescription: 'Custom prop money and custom money printing in Australia for agencies and brands. Branded, specimen-marked prop notes made in Melbourne. Get a quote today.'
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

// Extra H2 sections and FAQs shown on category pages (keyword expansion, 2026-10-20).
export const CATEGORY_SECTIONS = {
  "new-notes": [
    {
      "h2": "AU prop money for film, TV, theatre and photography",
      "paras": [
        "AU prop money from PROPPS is made in Melbourne for the people who actually put cash on screen: art departments, photographers, theatre companies and trainers. The New Notes range covers all five current Australian denominations, so you can dress a till, a wallet, a briefcase or a vault from one order.",
        "Prop Australian money only works on camera when it reads correctly at working distance and stays obviously a reproduction in the hand. Ours is printed double-sided on matte archival paper, carries permanent specimen markings and is never polymer, so it is easy to tell apart from a genuine note by touch."
      ]
    },
    {
      "h2": "Which denomination to buy",
      "paras": [
        "Hero stacks and close-ups usually use $100 and $50 notes because their colours read strongly on camera. Tills, wallets and counter exchanges look more natural with $20, $10 and $5 notes mixed in. Most orders combine two or three denominations rather than a single one."
      ]
    },
    {
      "h2": "The best prop money reads correctly on camera",
      "paras": [
        "The best prop money has crisp fine print at arm's length, matte paper that avoids hot spots under studio lights, matching print on both sides and notes that survive repeated takes. Every PROPPS note is checked against that list, so stacks match from take to take.",
        "Searching for prop money au usually means a deadline. Orders start at $300 AUD, dispatch leaves our Melbourne studio within 24 business hours of payment by Australia Post Express, and delivery is free from $500 AUD."
      ]
    },
    {
      "h2": "Specimen-marked, never spendable",
      "paras": [
        "Some buyers search for fake Australian money prop. To be clear about what we sell: these are non-legal tender reproduction props made solely for motion pictures, television, theatre, visual arts and simulation training. They are never to be spent, handed over as payment or presented as real cash. Read the compliance guide for the standard each note is built to."
      ]
    },
    {
      "h2": "Prop Australian money versus a real banknote",
      "paras": [
        "Prop Australian money from PROPPS is built to be convincing on camera and obviously a reproduction in the hand. Genuine Australian banknotes are polymer with embedded security features. Ours are printed on matte archival paper, carry permanent specimen markings and are never spendable. The Reserve Bank explains how reproductions must differ on its [banknote pages](https://www.rba.gov.au/banknotes/), and our [compliance page](/compliance/) sets out the markings on every note.",
        "The offences sit in the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/). For the full plain-English version, read [Crimes Act and RBA prop money rules explained](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the guide to [the legal difference between fake money and prop money](/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/)."
      ]
    },
    {
      "h2": "Prop money AU: pricing, delivery and payment",
      "paras": [
        "Orders for prop money AU wide start at $300 AUD and delivery is free from $500 AUD. Pay by bank transfer, PayID or cryptocurrency, which receives a 10% discount. Parcels leave our Eltham, Melbourne depot by [Australia Post Express](https://auspost.com.au/) with a signature on delivery, usually within 24 business hours of payment. See the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for refunds within 3 to 8 business days.",
        "Not sure which denomination you need? Compare the [$5](/shop/new-notes/5-australian-prop-money-for-sale/), [$10](/shop/new-notes/10-australian-prop-money-for-sale/), [$20](/shop/new-notes/20-australian-prop-money-for-sale/), [$50](/shop/new-notes/50-australian-prop-money-for-sale/) and [$100](/shop/new-notes/100-australian-prop-money-for-sale/) notes, or read [which denominations suit film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/)."
      ]
    },
    {
      "h2": "Realistic prop money for Australian productions",
      "paras": [
        "Buyers who search for realistic fake money in Australia usually want props that read well on a lens. That is a lighting, print and finish question, and our guide to [what realistic should and should not mean](/blog/realistic-prop-money-australia-what-realistic-should-mean/) answers it. To judge quality before you buy, use the [on-camera quality checklist](/blog/high-quality-prop-money-how-to-judge-it-on-camera/)."
      ]
    }
  ],
  "film-and-tv-props": [
    {
      "h2": "Buy film props for the cash scene",
      "paras": [
        "Cash scenes are where a production most often needs props that survive a close-up. These packs give the art department counted, strapped prop currency in standard sizes, so a bank counter, a handover or a vault can be dressed without building bundles on the day.",
        "Because the stacks are consistent, the second take and the second camera see the same money as the first. That is the difference between a set that resets in a minute and one that waits while someone re-counts."
      ]
    },
    {
      "h2": "Movie set props for sale: currency for the shot",
      "paras": [
        "We are a currency specialist, not a general prop house. The movie set props for sale here are prop money packs for scenes that show cash, in bundle sizes from a single stack to vault quantities. You can buy movie props online in Australia for the cash scene from one supplier and keep the rest of the set dressing with a general prop house.",
        "Movie prop money and prop money for movies are the same product on this page: specimen-marked notes made for the camera, not for spending."
      ]
    },
    {
      "h2": "Realistic money that holds up under studio lights",
      "paras": [
        "Realistic money for film does not need to look identical to a real note. It needs to read correctly through the lens while staying clearly marked and different in the hand. Matte, non-reflective paper avoids glare, and double-sided print means a fanned or flipped stack still looks right."
      ]
    },
    {
      "h2": "Orders for series and studios",
      "paras": [
        "Ordering the full quantity for a block of shooting keeps stacks matching across episodes. Orders start at $300 AUD, free delivery applies from $500 AUD, and larger or repeat runs can be quoted on the wholesale page. Every pack carries specimen markings and is a non-legal tender prop."
      ]
    }
  ],
  "money-stacks": [
    {
      "h2": "Prop money stacks for bank, vault and heist scenes",
      "paras": [
        "Prop money stacks arrive counted and strapped, so the art department places them instead of building them. They suit heist scenes, bank vaults, desk spreads and any frame where a big visible cash volume sells the story.",
        "A money stack prop is sold by size, from a Starter Stack for a wallet shot up to 100 Stacks for a full vault. Pick the size from what the camera sees, not from the whole room."
      ]
    },
    {
      "h2": "Bundle of prop money: sizes and when to use them",
      "paras": [
        "A bundle of prop money in the foreground carries the close-up, and matching bundles behind it fill the frame. Prop money bundles for sale here follow the same tiers as our notes: Starter, 1, 5, 10, 50 and 100 Stacks. Each money bundle prop is strapped the same way, so continuity holds from take to take."
      ]
    },
    {
      "h2": "Cash bundle prop and large runs",
      "paras": [
        "A cash bundle prop looks best when the top bundle is hero quality and the rest of the set is matching stock. Larger runs qualify for wholesale tiers of 10% to 30% off, and orders over $500 ship free by Express Post."
      ]
    }
  ],
  "photography-props": [
    {
      "h2": "Photography props Australia: prop money that photographs cleanly",
      "paras": [
        "Photographers use prop money for editorial, product and advertising shoots where cash has to look real in print without the legal risk. Our photography sets are matte, glare-free and double-sided, so they photograph cleanly under strobes and continuous light.",
        "For a prop money photoshoot, a single set of fanned notes plus one strapped stack covers most set-ups. Orders start at $300 AUD and ship by Express Post, so you can book the studio with notes in hand."
      ]
    },
    {
      "h2": "Photoshoot props and prop money for photography",
      "paras": [
        "Photoshoot props Australia buyers usually need a few things: fanned notes for a flat lay, a strapped stack for a table shot and a handful of loose notes for continuity. Prop money for photography should be matte so the highlights stay clean, and double-sided so a flipped note still looks right."
      ]
    },
    {
      "h2": "Prop dollar bills and dollar bills prop sets",
      "paras": [
        "Prop dollar bills for a campaign are specimen-marked reproductions, never spendable. That keeps campaign images on the right side of the Crimes (Currency) Act and keeps your client comfortable with the shoot."
      ]
    }
  ],
  "event-and-party-props": [
    {
      "h2": "Play money Australia for parties, events and classrooms",
      "paras": [
        "Play money for events, parties and themed entertainment should be fun, clearly not real and easy to hand around. These packs use the same print quality as our film range with visible specimen markings, so guests can throw them, stack them and take photos without any confusion.",
        "Australian play money suits casino nights, proposal reveals, themed parties and kids games. Toy money and kids play money are the same packs: bright, marked and made for play."
      ]
    },
    {
      "h2": "Play money vs prop money for events",
      "paras": [
        "Play money is designed to look obviously unlike real notes. Prop money is built to read as real on camera while staying marked. If your event is a photo or video shoot, choose the prop notes. If it is a game or a fundraiser, play money is the better fit and the safer one."
      ]
    },
    {
      "h2": "Ordering for a party or event",
      "paras": [
        "Orders start at $300 AUD and ship by Australia Post Express from Melbourne, with free delivery from $500. For a larger run, ask about wholesale rates on the wholesale page. Every pack is a non-legal tender prop."
      ]
    }
  ],
  "custom-and-branded-props": [
    {
      "h2": "Custom prop money for brands and agencies",
      "paras": [
        "Custom prop money lets agencies and brands put their own artwork on specimen-compliant notes for campaigns, product launches, giveaways and stage sets. We handle the design brief, the compliance markings and the print run from our Melbourne studio.",
        "Typical briefs include branded currency for a launch, themed notes for a conference or stage show, and bespoke packs for a television segment. Tell us the quantity, the artwork and the deadline and we will quote."
      ]
    },
    {
      "h2": "Custom money printing, done to the specimen standard",
      "paras": [
        "Custom money printing for a brand still has to stay on the right side of the law. Every run carries permanent specimen markings, uses paper rather than polymer and is sold as a non-legal tender prop. Custom prop notes are never made to pass as real currency."
      ]
    },
    {
      "h2": "Custom play money and personalised notes",
      "paras": [
        "Custom play money and personalised play money suit school fairs, loyalty promotions and events. They use the same print quality as the standard range and clear markings, so they are safe to hand out."
      ]
    }
  ]
}

export const CATEGORY_FAQS = {
  "new-notes": [
    {
      "q": "Where can I buy AU prop money?",
      "a": "You can buy AU prop money online from PROPPS, a Melbourne studio supplying Australian productions since 2019. Choose a denomination from $5 to $100 and a stack size, then pay by bank transfer, PayID or crypto.",
      "link": {
        "href": "/shop/new-notes/100-australian-prop-money-for-sale/",
        "label": "See the $100 notes"
      }
    },
    {
      "q": "What is prop Australian money made of?",
      "a": "Our notes are printed double-sided on matte archival paper, not polymer, and carry permanent specimen markings. Real Australian banknotes are polymer, so the difference is obvious by touch.",
      "link": {
        "href": "/compliance/",
        "label": "Read the compliance guide"
      }
    },
    {
      "q": "Is prop money au legal to buy?",
      "a": "Buying clearly marked, non-legal tender reproduction notes for film, television, theatre, photography or training is lawful. Spending them or presenting them as real money is not.",
      "link": {
        "href": "/blog/is-it-illegal-to-buy-prop-money-australia/",
        "label": "Is it illegal to buy prop money?"
      }
    },
    {
      "q": "What makes the best prop money?",
      "a": "Crisp print at arm's length, matte non-reflective paper, matching print on both sides and notes that hold up through repeated takes. Ask any supplier for photos of an actual note, front and back.",
      "link": {
        "href": "/blog/high-quality-prop-money-how-to-judge-it-on-camera/",
        "label": "How to judge it on camera"
      }
    },
    {
      "q": "Is fake Australian money prop the same as your prop money?",
      "a": "Our product is a specimen-marked reproduction prop for production use, not fake currency. Every note is marked, printed on paper and sold as non-legal tender.",
      "link": {
        "href": "/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/",
        "label": "Fake money vs prop money"
      }
    }
  ],
  "film-and-tv-props": [
    {
      "q": "Where can I buy film props in Australia?",
      "a": "PROPPS supplies film and television art departments with prop currency from its Eltham, Melbourne studio. Orders start at $300 AUD and ship by Australia Post Express with signature on delivery.",
      "link": {
        "href": "/blog/buying-film-props-in-australia-a-checklist-for-art-departments/",
        "label": "Buying film props checklist"
      }
    },
    {
      "q": "Are these movie set props for sale only prop money?",
      "a": "Yes. We specialise in prop currency for cash scenes. For furniture, costume or general set dressing, use a general prop supplier or hire house.",
      "link": {
        "href": "/shop/",
        "label": "Browse the full catalog"
      }
    },
    {
      "q": "How realistic is the money on camera?",
      "a": "It is printed on matte, non-reflective paper with double-sided print, so it reads correctly through the lens without glare. It stays clearly marked as a specimen.",
      "link": {
        "href": "/blog/lighting-prop-money-for-camera-avoiding-glare/",
        "label": "Lighting prop money without glare"
      }
    },
    {
      "q": "How fast can film props be delivered?",
      "a": "Orders dispatch from Melbourne within 24 business hours of payment by Australia Post Express, signature required on delivery.",
      "link": {
        "href": "/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/",
        "label": "Shipping and dispatch"
      }
    },
    {
      "q": "Can I get a better price for a series or studio order?",
      "a": "Yes. Larger and repeat runs can be quoted on the wholesale page, and ordering the whole block at once keeps stacks matching.",
      "link": {
        "href": "/wholesale/",
        "label": "Wholesale pricing"
      }
    }
  ],
  "money-stacks": [
    {
      "q": "What are prop money stacks?",
      "a": "Prop money stacks are counted, strapped bundles of specimen-marked notes that the art department can place on set without building them. Sizes run from a Starter Stack to 100 Stacks.",
      "link": {
        "href": "/blog/ready-prop-money-stacks-for-fast-turnaround/",
        "label": "Ready stacks for fast turnarounds"
      }
    },
    {
      "q": "How many stacks do I need for a scene?",
      "a": "Count the stacks the camera sees, add the hidden ones, double for repeat set-ups and keep one sealed as a reserve. A wallet shot needs a Starter Stack, a desk spread one or two stacks, a vault ten or more.",
      "link": {
        "href": "/blog/how-much-prop-money-do-you-need-for-a-scene/",
        "label": "How much prop money you need"
      }
    },
    {
      "q": "Is a money stack prop legal to use on set?",
      "a": "Yes. Every stack carries specimen markings and is a non-legal tender prop for film, television, theatre, photography and training. Never spend it.",
      "link": {
        "href": "/compliance/",
        "label": "Read the compliance guide"
      }
    },
    {
      "q": "Where can I buy a bundle of prop money?",
      "a": "You can buy a bundle of prop money from PROPPS in Melbourne. Orders start at $300 AUD, ship by Australia Post Express with signature, and are free to deliver from $500 AUD.",
      "link": {
        "href": "/blog/where-to-buy-prop-money-in-australia-legally/",
        "label": "Where to buy prop money"
      }
    },
    {
      "q": "Do larger money bundle prop orders get a discount?",
      "a": "Yes. Larger runs qualify for wholesale tiers of 10% to 30% off. Ask on the wholesale page with your quantity.",
      "link": {
        "href": "/wholesale/",
        "label": "Wholesale pricing"
      }
    }
  ],
  "photography-props": [
    {
      "q": "What are the best photography props for a cash shot?",
      "a": "Fanned notes for a flat lay and one strapped stack cover most set-ups. Matte, double-sided notes avoid glare and look right when flipped.",
      "link": {
        "href": "/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/",
        "label": "Prop money for photography"
      }
    },
    {
      "q": "Can I use prop money for a photoshoot?",
      "a": "Yes, as long as the notes are specimen-marked and used as props, not presented as real cash. Our notes carry permanent markings and are printed on paper.",
      "link": {
        "href": "/compliance/",
        "label": "Read the compliance guide"
      }
    },
    {
      "q": "How do I avoid glare on prop money?",
      "a": "Use matte, non-reflective stock, angle the key light off the notes and test at working distance before the shoot.",
      "link": {
        "href": "/blog/lighting-prop-money-for-camera-avoiding-glare/",
        "label": "Lighting prop money"
      }
    },
    {
      "q": "How fast can I get photoshoot props delivered?",
      "a": "Orders dispatch from Melbourne within 24 business hours of payment by Australia Post Express, signature required.",
      "link": {
        "href": "/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/",
        "label": "Shipping and dispatch"
      }
    },
    {
      "q": "Are prop dollar bills the same as real currency?",
      "a": "No. Prop dollar bills are reproductions with specimen markings and are never legal tender. They must never be spent.",
      "link": {
        "href": "/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/",
        "label": "Fake money vs prop money"
      }
    }
  ],
  "event-and-party-props": [
    {
      "q": "Where can I buy play money in Australia?",
      "a": "You can buy play money Australia wide from PROPPS. Packs are clearly marked, printed to a film-grade standard and shipped by Australia Post Express from Melbourne.",
      "link": {
        "href": "/blog/toy-money-and-play-money-for-kids-games-and-learning/",
        "label": "Toy money and play money for kids"
      }
    },
    {
      "q": "What is the difference between play money and prop money?",
      "a": "Play money looks obviously unlike real notes and suits games and parties. Prop money is built to read as real on camera while staying marked.",
      "link": {
        "href": "/blog/play-money-vs-prop-money-which-one-do-you-need/",
        "label": "Play money vs prop money"
      }
    },
    {
      "q": "Is kids play money safe to hand out?",
      "a": "Yes. Our packs carry visible markings and are non-legal tender, so they are safe for games, classrooms and parties.",
      "link": {
        "href": "/compliance/",
        "label": "Read the compliance guide"
      }
    },
    {
      "q": "Do you sell toy money and Australian play money in bulk?",
      "a": "Yes. Larger runs for schools, fundraisers and events can be quoted on the wholesale page.",
      "link": {
        "href": "/wholesale/",
        "label": "Wholesale pricing"
      }
    },
    {
      "q": "Can I use these for a proposal or themed party?",
      "a": "Yes. They are popular for casino nights, proposal reveals and themed events.",
      "link": {
        "href": "/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/",
        "label": "Novelty money for parties"
      }
    }
  ],
  "custom-and-branded-props": [
    {
      "q": "Can you make custom prop money for my brand?",
      "a": "Yes. We handle the design brief, the compliance markings and the print run in Melbourne. Send the quantity, artwork and deadline for a quote.",
      "link": {
        "href": "/contact/",
        "label": "Request a quote"
      }
    },
    {
      "q": "Is custom money printing legal in Australia?",
      "a": "It is lawful when the notes carry permanent specimen markings, differ from genuine currency and are sold as non-legal tender props. Custom prop notes are never made to pass as real money.",
      "link": {
        "href": "/blog/custom-and-branded-prop-currency-guide-for-agencies/",
        "label": "Custom prop currency guide"
      }
    },
    {
      "q": "How long does custom prop money take?",
      "a": "Timing depends on artwork and quantity. Tell us your deadline when you enquire and we will confirm what is realistic.",
      "link": {
        "href": "/contact/",
        "label": "Contact the studio"
      }
    },
    {
      "q": "Do you make custom play money?",
      "a": "Yes. Custom play money and personalised play money suit schools, loyalty promotions and events.",
      "link": {
        "href": "/shop/event-and-party-props/",
        "label": "See event and party props"
      }
    },
    {
      "q": "Is there a minimum order for custom prop notes?",
      "a": "Standard orders start at $300 AUD. Custom runs are quoted per job, and larger runs can use the wholesale tiers.",
      "link": {
        "href": "/wholesale/",
        "label": "Wholesale pricing"
      }
    }
  ]
}

// Product SEO: H1, title and meta phrase carry each product's mapped primary keyword (2026-10-20).
export const PRODUCT_SEO = {
  "5-australian-prop-money-for-sale": {
    "h1": "5 Dollar Note Australia — Prop Money for Sale",
    "title": "5 Dollar Note Australia | Prop Money for Sale",
    "what": "5 dollar note Australia prop notes"
  },
  "10-australian-prop-money-for-sale": {
    "h1": "10 Dollar Note Australia — Prop Money for Sale",
    "title": "10 Dollar Note Australia | Prop Money for Sale",
    "what": "10 dollar note Australia prop notes"
  },
  "20-australian-prop-money-for-sale": {
    "h1": "20 Dollar Note Australia — Prop Money for Sale",
    "title": "20 Dollar Note Australia | Prop Money for Sale",
    "what": "20 dollar note Australia prop notes"
  },
  "50-australian-prop-money-for-sale": {
    "h1": "50 Dollar Note Australia — Prop Money for Sale",
    "title": "50 Dollar Note Australia | Prop Money for Sale",
    "what": "50 dollar note Australia prop notes"
  },
  "100-australian-prop-money-for-sale": {
    "h1": "100 Dollar Note Australia — Prop Money for Sale",
    "title": "100 Dollar Note Australia | Prop Money for Sale",
    "what": "100 dollar note Australia prop notes"
  },
  "film-and-tv-prop-currency-pack": {
    "h1": "Prop Money for Film — Film & TV Prop Currency Pack",
    "title": "Prop Money for Film | Film & TV Prop Currency Pack",
    "what": "prop money for film and TV"
  },
  "bulk-money-stack-pack": {
    "h1": "Bulk Prop Money — Bulk Money Stack Pack",
    "title": "Bulk Prop Money | Bulk Money Stack Pack",
    "what": "bulk prop money stacks"
  },
  "photography-prop-currency-set": {
    "h1": "Prop Money for Photoshoot — Photography Prop Currency Set",
    "title": "Prop Money for Photoshoot | Photography Prop Set",
    "what": "prop money for photoshoot sets"
  },
  "event-and-party-prop-cash-pack": {
    "h1": "Kids Play Money — Event & Party Prop Cash Pack",
    "title": "Kids Play Money | Event & Party Prop Cash Pack",
    "what": "kids play money and party prop cash"
  },
  "custom-and-branded-prop-currency": {
    "h1": "Custom Prop Notes — Custom & Branded Prop Currency",
    "title": "Custom Prop Notes | Custom & Branded Prop Currency",
    "what": "custom prop notes"
  }
}

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
    image: 'crimes-currency-act-1981-rba-prop-money-guidelines.webp',
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
    excerpt: 'Realistic prop money only reads on camera if the lighting is right. Learn how to light prop notes, avoid glare and test before the shoot. Plan your cash shot.',
    category: 'Cinematography & Lighting',
    date: '2026-01-20',
    readTime: '9 min read',
    image: 'lighting-prop-money-for-camera-avoiding-glare.webp',
    imageAlt: 'Lighting prop money for camera — fanned $100 specimen prop notes for glare-free filming',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: [
      '100-australian-prop-money-for-sale',
      '50-australian-prop-money-for-sale',
      'film-and-tv-prop-currency-pack'
    ],
    content: "Cash is one of the hardest props to light. It is small, it is printed in fine detail, it is often handled by an actor in a close-up, and the paper reflects light in ways that a script supervisor will never notice but a lens always will. Realistic prop money can look flat, shiny or fake purely because of how it was lit, even when the notes themselves are excellent. This guide is written for directors of photography, gaffers and art departments. It covers what makes notes catch light, how to place the key and fill, how to test before the day, and the handling habits that keep a stack looking right across a long shoot. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nUse soft, large, angled light, keep reflections off the lens axis, test the exact notes under the exact lights at working distance, and choose matte paper so there is less glare to fight in the first place. If a note shows a hot spot in your test, change the angle of the light before you change the note.\n\n## Why prop money reads badly on camera\n\nThree things go wrong most often.\n\n- **Specular glare.** A glossy or lightly coated stock acts like a small mirror. A single hard source produces a bright patch that hides the print and flags the note as a prop.\n- **Flat, even lighting.** A bank of diffused fill from the front removes the subtle shadows between notes in a stack. A stack then reads as a single block of paper rather than a bundle of notes.\n- **Wrong colour balance.** Banknote inks are saturated. Mixed colour temperatures, for example a tungsten practical beside a daylight window, push the greens and golds in different directions and the cash stops matching the rest of the frame.\n\nRealistic prop money starts with the paper. PROPPS notes are printed double-sided on 120gsm matte archival paper, which removes most specular glare before a light is switched on. That is a deliberate choice for the camera, and it is also why the notes are easy to tell apart from genuine polymer notes by touch.\n\n## Choosing the light\n\n### Soft and large\n\nA large soft source close to the subject wraps around a stack and keeps highlights gentle. A softbox, a bounced source or a window with diffusion all work. A small hard source is the quickest way to create a hot spot.\n\n### Angle it off the lens axis\n\nReflections follow the angle of incidence. Place the key so that light striking the note bounces away from the camera, not into it. A useful starting point is to put the key at roughly 45 degrees to the table and to the side of the camera, then adjust while watching the monitor.\n\n### Use negative fill to keep the print dark where it should be\n\nBanknote print is detailed. Too much fill lifts the shadows and flattens the engraving. A black flag or a dark card opposite the key restores depth and makes the stack read as three-dimensional.\n\n### Keep practicals honest\n\nIf a lamp in the frame is warm, match the key to it or gel the key. Cash looks wrong when the colour of the light on the notes does not match the colour of the light on the actor.\n\n## Close-ups, inserts and hero notes\n\nA hero note for an insert needs more care than a stack in the background.\n\n1. Choose the cleanest, flattest note from the order and keep it separate from the working stock.\n2. Light it on a table first, with the camera at the planned lens height, before the actor's hand is in the shot.\n3. Check both sides, because many scenes flip or fan notes. PROPPS prints both sides to the same standard.\n4. Keep fingerprints off the surface. Oil from the skin picks up as shine under a low angle.\n5. Replace the hero note after a few takes. Handling softens the corners and the camera will see it.\n\n## Stacks, bundles and the money shot\n\nA stack has to look like many notes, not one. Light from the side so the edges of the notes show as fine lines, and let a little shadow fall between bundles. For a vault or a table spread, treat the money as a texture: raking light shows the layers, while flat frontal light hides them. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) explains how many stacks the camera actually sees, which saves you lighting more than you need to.\n\nUse hero stacks of $100 and $50 notes in the foreground, because their colours read strongly, and mix in smaller denominations for tills and wallets. The [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) guide shows how to choose.\n\n## A five-minute test before the shoot\n\nRun this test on the day before, or at the start of the call.\n\n1. Set up the actual lights, flags and practicals for the scene.\n2. Place the notes where they will sit, at the planned height.\n3. Look through the lens or on the monitor at the planned distance for wide, medium and close.\n4. Tilt the stack slowly and watch for hot spots.\n5. Fan a note and flip it, as the actor will.\n6. Photograph it on the camera you will use and check the result on the monitor, not on a phone.\n7. Adjust the light, not the notes, until the print reads cleanly.\n\n## Lenses, cameras and sensor differences\n\nA long lens compresses a stack and exaggerates the effect of a single reflection, while a wide lens shows more of the table and more of the light stand reflections. Shooting at a high resolution reveals paper grain and print detail that a lower resolution hides, so test at the delivery resolution. If you shoot on a camera with limited dynamic range, keep the highlights on the notes under control, because a clipped highlight on a white border cannot be recovered. A fast lens at a shallow depth of field softens background stacks, which lets you spend less on them.\n\n## Colour and exposure tips\n\n- Expose for skin and let the notes fall where they fall. Cash that is brighter than the face pulls the eye away from the actor.\n- Keep the notes within one stop of the surface they sit on, so they do not glow.\n- If you are shooting a green or gold dominant frame, check that the note colours are not being absorbed into the background.\n- Match colour temperature across the frame and avoid mixed sources on the cash.\n- If you use a polariser, test it. A polariser can cut reflections, but it can also change the apparent saturation of the print.\n\n## Handling and continuity\n\nRealistic prop money only keeps looking realistic if it is handled with care. Store the notes flat, dry and out of direct heat, because paper that has been in a hot car curls at the edges and catches light differently. Keep a spare stack sealed. Use gloves for hero notes. For repeated takes, rotate the stock so the same notes are not handled every time. For ageing and weathering, read our [art department guide](/blog/art-department-guide-weathering-prop-cash/).\n\n## Compliance on set\n\nLighting a note so it looks real is part of the job, but the notes must stay clearly marked props. Every PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Never spend them or present them as real cash in publicity material. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions, and our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the standard.\n\n## Where to go next\n\nSee how the notes look in the [New Notes range](/shop/new-notes/), compare the print quality in our [guide to judging high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/), or [contact the studio](/contact/) with your lighting setup and we will help you choose.",
    faqs: [
      {
        "q": "How do I stop prop money looking shiny on camera?",
        "a": "Use matte paper, large soft light and an angle that bounces reflections away from the lens. Test the exact notes under the exact lights before the shoot. See the [New Notes range](/shop/new-notes/) for matte, double-sided stock."
      },
      {
        "q": "What is the best light for a cash close-up?",
        "a": "A large soft source at around 45 degrees to the table, with negative fill on the opposite side, keeps highlights gentle and shows the fine print. Check hero notes on a table before the actor is in frame."
      },
      {
        "q": "Does realistic prop money need a special lighting setup?",
        "a": "No special rig is needed, but cash is detailed and reflective, so test at working distance. Our [guide to high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) lists what to check."
      },
      {
        "q": "How many stacks do I need to light for a vault scene?",
        "a": "Light what the camera sees. Count visible stacks, add a few hidden ones and keep one sealed as a reserve. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Are lit-up prop notes still legal to use?",
        "a": "Yes, as long as they are specimen-marked props and are never presented as real cash. See our [compliance page](/compliance/) for the standard PROPPS builds to."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'art-department-guide-weathering-prop-cash',
    title: 'The Art Department Guide: Weathering Prop Cash for Underworld Realism',
    seoTitle: 'Weathering Prop Cash: Art Department Guide',
    excerpt: 'Art department guide to dressing prop cash on screen: weathering, ageing, continuity and hero versus background notes. Plan your cash scenes today.',
    category: 'Art Department',
    date: '2025-11-10',
    readTime: '9 min read',
    image: 'art-department-guide-weathering-prop-cash.webp',
    imageAlt: 'Prop cash for film production — weathered bundled specimen prop currency stacks',
    relatedCategories: ['film-and-tv-props', 'money-stacks'],
    relatedProducts: ['film-and-tv-prop-currency-pack', 'bulk-money-stack-pack'],
    content: "Brand-new notes straight from the box rarely look right on screen. Real cash has been in pockets, bags, drawers and tills. It has creases, a little grime on the edges and a slight curl. An art department that dresses prop cash for sale on screen has to decide how worn each stack should be, how to keep the wear consistent across takes and how to avoid damaging the notes that need to stay clean for the hero shot. This guide is written for prop masters, art directors and set decorators. It covers weathering and ageing methods that are safe for paper notes, continuity rules, how to plan hero and background stock, and the compliance habits that protect the production. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nAge the background, protect the hero, and keep a log. Weather a limited number of stacks to a consistent standard, keep a clean reserve for close-ups and for reshoots, and record what you did so the next day of shooting matches. Never age a note in a way that removes or covers its specimen markings.\n\n## Why weathering matters\n\nCash tells the audience who a character is. A freshly strapped bundle on a mobster's table says something different from a roll of soft, creased notes in a market stallholder's apron. The details the camera sees are the top note, the edges of a stack and the way a note bends when it is counted. Getting those right makes a scene look lived in without anyone noticing why.\n\n## What the camera sees\n\nBefore you weather anything, work out what will be seen.\n\n- **Top note and edges.** These are the parts that carry the story. A stack is a surface and a side, not a block of paper.\n- **Hands.** When an actor counts or fans notes, the notes bend, and the camera picks up creases and corners.\n- **Depth.** In a wide shot, a bundle of notes in the background reads as colour and shape. It does not need the same treatment as the hero stack.\n\nThat is why a prop master rarely weathers every note. Weather the notes that will be handled and seen, and leave the rest clean.\n\n## Weathering methods that work on paper notes\n\nPROPPS notes are printed on matte archival paper, which takes light weathering well. These methods are common in art departments. Always test on a spare note first.\n\n1. **Handling and rolling.** Fold, crease and roll the notes by hand. This is the safest and most natural method and it keeps the print intact.\n2. **Light edge toning.** A dry tea or coffee wash, applied sparingly with a cloth, adds warmth to the edges. Let it dry fully before stacking.\n3. **Dry dust and grime.** A fine, dry pigment on the edges mimics the dirt that gathers in a till. Seal nothing and keep it light.\n4. **Corner softening.** Rub the corners gently with fine paper to round them off. Real notes round at the corners first.\n5. **Bundling and strapping wear.** Leave a strapped stack in place for a day so the strap leaves a faint line, and the stack gains a slight memory of its shape.\n\nAvoid anything that obscures the printed specimen markings, anything wet enough to curl the paper permanently and anything that could stain a hero note you still need clean.\n\n## Plan hero stock and background stock\n\nA simple way to organise a scene is to split the cash into three groups.\n\n- **Hero notes.** Clean, flat and handled as little as possible. These are for inserts and close-ups. Keep a spare.\n- **Working stock.** Lightly weathered notes for hands, drawers and counting.\n- **Background stock.** Strapped stacks and bundles used for volume. Matching stacks keep continuity simple. Our [ready prop money stacks](/blog/ready-prop-money-stacks-for-fast-turnaround/) arrive counted and strapped for this.\n\nTag the groups so no one swaps a hero note into the working pile. For how many stacks to order, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/).\n\n## Continuity rules\n\nCash scenes are shot in pieces, often over several days, so continuity is the main risk.\n\n1. **Photograph the stack** before the first take, from the angles the camera uses.\n2. **Weather in batches.** Treat the whole quantity for a scene at the same time, so it matches.\n3. **Log the process.** Note the method, the date and the quantity. A reshoot a month later will need it.\n4. **Count in and out.** Count the notes at the start and end of each day. This is good practice for continuity and for compliance.\n5. **Keep a sealed reserve.** A clean spare lets you replace a damaged hero note without a rush order.\n\n## A weathering workflow for a one-day shoot\n\nWhen there is only one day, keep the process short and repeatable.\n\n1. **Morning before call:** weather the working stock by hand. Roll, crease and soften corners on the notes that will be counted or fanned.\n2. **At the first set-up:** photograph a hero stack and a working stack from the camera angle, and tag them.\n3. **Between set-ups:** reset stacks from the same batch, not from new stock. Swap in clean notes only for the hero insert.\n4. **At lunch:** check the working stock for damage and replace anything torn.\n5. **At wrap:** count, bag and label the notes, and write down what was used.\n\n## Common weathering mistakes\n\n- **Over-ageing.** Notes that look filthy read as costume jewellery. Real cash is mostly just soft.\n- **Ageing everything.** The background does not need it and the clean notes are your safety net.\n- **Wet methods that curl the paper.** Curl does not reverse and the camera will see it.\n- **Skipping the log.** A reshoot without a record means guessing what the notes looked like.\n- **Covering the markings.** Never age a note in a way that hides its specimen markings.\n\n## Stage and theatre use\n\nTheatre cash is seen from a distance and handled nightly, so it needs to survive repeated use rather than look perfectly aged. Choose durable notes, weather lightly and expect to replace stock during a run. The same count-in, count-out habit applies backstage. Our [event and party props](/shop/event-and-party-props/) suit lighter stage use.\n\n## Period and set dressing details\n\nPeriod work adds another layer. A scene set decades ago may need older-looking notes, different bundle styles and different wear patterns. Talk to the set decorator about what the character would plausibly carry, and match the wear to the setting: soft, folded notes in a worn wallet, crisp strapped bundles from a bank, loose notes in a tin. Small touches such as a rubber band, a paper clip or a folded receipt make a stack read as belonging to a person rather than to a props department.\n\nThink about the end of the scene too. When the shoot wraps, decide what happens to the weathered notes: keep them as a ready set for a pickup day, retire them, or return them to the studio. Weathered notes cannot be made new again, so label the box clearly and keep the log with it.\n\n## Directing the cash scene\n\nDirectors use cash to shape a scene: a bag of notes opened slowly, a stack slid across a table, a till drawer that is almost empty. Talk to the art department early about what the camera will see, how the money moves and how many takes there will be. The answers decide how many stacks to buy and how much to weather. If you shoot a reveal, such as a vault or a briefcase of cash, read our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/).\n\n## Compliance while you work\n\nWeathering is a creative step, but the notes are still reproductions. Every PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender prop for motion pictures, television, theatre, visual arts and simulation training. Keep the markings visible, keep the notes under the prop master's control, keep the invoice on file and never spend them. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [compliance page](/compliance/) for the full standard.\n\n## Where to go next\n\nOrder notes for your hero and working stock from the [New Notes range](/shop/new-notes/), add counted stacks from [Money Stacks](/shop/money-stacks/), or [contact the studio](/contact/) with your shot list.",
    faqs: [
      {
        "q": "How do I weather prop cash for sale on screen?",
        "a": "Fold, roll and handle the notes, tone the edges lightly and soften the corners. Test on a spare note and never cover the specimen markings. See the [New Notes range](/shop/new-notes/) for matte paper notes that take light weathering."
      },
      {
        "q": "Should every note in a stack be weathered?",
        "a": "No. Weather the notes the camera sees and handles, and leave the background clean. Keep a clean hero note and a sealed reserve."
      },
      {
        "q": "How do I keep weathered prop money consistent across takes?",
        "a": "Weather the whole quantity in one batch, photograph the stack and log the method. Count notes in and out each day. Our [ready stacks guide](/blog/ready-prop-money-stacks-for-fast-turnaround/) shows how matching stacks help."
      },
      {
        "q": "Can I age prop money without breaking compliance?",
        "a": "Yes, as long as the specimen markings stay visible and the notes are never presented as real cash. Read our [compliance page](/compliance/)."
      },
      {
        "q": "How many notes should I age for a heist scene?",
        "a": "Age the stacks in the foreground and leave the background clean. Our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) explains the volume."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'where-to-buy-prop-money-in-australia-legally',
    title: 'Where to Buy Prop Money in Australia (Legally)',
    seoTitle: 'Where to Buy Prop Money in Australia (Legally)',
    excerpt: 'Where to buy prop money in Australia legally: how to pick a local studio, check specimen markings and avoid risky overseas listings. Order with confidence.',
    category: 'Buying Guide',
    date: '2026-03-01',
    readTime: '9 min read',
    image: 'where-to-buy-prop-money-in-australia-legally.webp',
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
    excerpt: 'Pretend money or prop money? Learn how play money and prop money differ for games, parties and film, and which suits your job. Choose with confidence.',
    category: 'Buying Guide',
    date: '2026-03-11',
    readTime: '9 min read',
    image: 'play-money-vs-prop-money-which-one-do-you-need.webp',
    imageAlt: 'Play money australia vs prop money — handful of $20 and $50 specimen prop notes',
    relatedCategories: ['event-and-party-props', 'photography-props'],
    relatedProducts: ['event-and-party-prop-cash-pack', 'photography-prop-currency-set'],
    content: "Pretend money and prop money look similar in a product listing, but they are made for different jobs. One is designed to look obviously unlike real currency so children can play and adults can run a game. The other is designed to read correctly on camera while staying marked and different in the hand. Buy the wrong one and you either get a shot that looks cheap or a party prop that is more realistic than it needs to be. This guide explains the difference between play money and prop money, how to choose for a game, a party, a classroom, a shoot or a stage show, what each costs and what the law cares about. It is general information, not legal advice.\n\n## The short answer\n\nChoose play money for games, classrooms and parties, where it should look clearly not real. Choose prop money for film, television, theatre and photography, where the money has to read as real through a lens. Prop money is always specimen-marked, printed on paper and never spendable, and play money is designed so there is no chance of confusing it with real notes.\n\n## What play money is for\n\nPlay money, also sold as pretend money and toy money, is built for imagination and learning. Typical features:\n\n- **Bright, obviously different colours and designs.** Nobody mistakes it for real currency.\n- **Simple, durable stock.** It is meant to be handled, thrown and counted by children.\n- **Low cost and large quantities.** A classroom or a party needs hundreds of notes.\n- **No attempt to match real notes.** There is no need for fine print or accurate colour.\n\nPlay money suits board games, shop role-play, school fairs, fundraisers and casino-style party nights. If you only need the money to be fun and clearly pretend, it is the right choice and the lowest-risk one. Our [event and party props](/shop/event-and-party-props/) include play money in packs that are clearly marked.\n\n## What prop money is for\n\nProp money is reproduction currency made for scenes where the audience must believe the cash. Typical features:\n\n- **Print detail that holds up at working distance.** Fine lines stay crisp through a lens.\n- **Colours that match the denomination on camera.** Saturated golds and greens read correctly under studio light.\n- **Matte paper.** It avoids glare. PROPPS prints on 120gsm archival paper.\n- **Specimen markings.** Every note carries permanent markings so it is a prop, not a decoy.\n- **Double-sided print.** A flipped or fanned stack still looks right.\n\nProp money suits film, television, theatre, photography and training. Browse the [New Notes range](/shop/new-notes/) to see it.\n\n## Side by side\n\n- **Look.** Play money looks like a game. Prop money looks like cash on camera.\n- **Legal risk.** Play money is very low. Prop money is low when it is specimen-marked and used as a prop, and it must never be spent.\n- **Durability.** Play money is built for rough play. Prop money is built for takes and handling by actors.\n- **Price per note.** Play money is cheaper. Prop money costs more because of print quality and paper.\n- **Use.** Play money for games and learning. Prop money for the screen and the stage.\n\n## How to choose for your job\n\n### A children's game or classroom\n\nChoose play money. It is designed for the purpose and nobody could mistake it for real currency. Our guide to [toy money and play money for kids](/blog/toy-money-and-play-money-for-kids-games-and-learning/) covers games and learning.\n\n### A party or event\n\nChoose play money for casino nights, fundraisers and games. If you want a more realistic look for photos, choose marked prop money and keep it out of circulation. Our [novelty money guide](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/) explains what is safe.\n\n### A film, TV or stage scene\n\nChoose prop money. The camera will show the print and the colour, and a play money note will look wrong in a close-up. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) to size the order.\n\n### A photo shoot or social video\n\nChoose prop money, and read the [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) so you present it as a prop, not as real cash.\n\n## Five buying scenarios\n\n**1. A school fair stall.** A teacher needs a few hundred notes for a shop role-play. Play money is the right choice: it is cheap, obviously pretend and designed for small hands. Nobody needs fine print.\n\n**2. A casino night fundraiser.** Guests will stack, bet and bank chips of play money. Bright, bold notes in several colours work well. If you want photos that look glamorous, a small stack of marked prop notes for the winners' table can be added without risk, as long as it never leaves the venue.\n\n**3. A short film with a bank scene.** The camera will show a teller counting notes in close-up. Choose prop money. The detail, colour and paper are what make the scene believable, and a play money note will look like a toy.\n\n**4. A product photo shoot.** The cash is a visual element in a studio. Choose matte, glare-free prop money so the highlights stay clean under strobes. Our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/) explains how.\n\n**5. A stage show.** The audience is at a distance, so colour and durability matter more than fine print. Prop money is the safer choice for visual impact, while play money can work for comedic or children's productions.\n\n## Safety and handling\n\nKeep both types of money in the control of one person during an event or a shoot, count it in and out, and store it away from the public. Play money that is left lying around is harmless. Prop money that is left in a pocket or a bag is the kind of thing that can cause a misunderstanding. Brief everyone who will touch the notes, and keep the supplier invoice with the production file.\n\n## What the law cares about\n\nThe Commonwealth Crimes (Currency) Act 1981 is aimed at counterfeit currency and at reproductions that could deceive a reasonable person. Play money rarely raises a question because it looks nothing like real notes. Prop money is lawful when it is clearly marked, differs from genuine notes and is used for a legitimate purpose. Never spend either. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [compliance page](/compliance/) for how PROPPS builds to the standard.\n\n## What each costs\n\nPlay money is sold in large, low-cost packs because the print is simple and the paper is basic. Prop money is priced on print quality, paper weight, double-sided alignment, counting and strapping, paperwork and delivery. At PROPPS, orders start at $300 AUD and delivery is free from $500 AUD, with stacks sized from a Starter Stack up to 100 Stacks. If you only need a few hundred notes for a game, play money is far cheaper. If you need a hero stack that reads in a close-up, the extra cost buys the detail the camera sees. Our guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains the trade-offs.\n\n## When to use both\n\nSome jobs call for both. A film set might use play money in the background of a children's party scene and prop money for the hero stack on the kitchen table. A fundraiser might use play money for the games and marked prop notes for a photo wall. Keep them in separate containers and label them so nobody mixes them up.\n\n## Common mistakes\n\n- **Using play money in a close-up.** It will read as a toy.\n- **Using prop money as a party favour.** It is more realistic than a party needs and may be mistaken for real money by someone who does not know the context.\n- **Spending either.** Neither should ever be offered as payment.\n- **Removing markings.** Do not cut, crop or cover specimen markings.\n- **Ordering at the last minute.** Express Post is fast, but a signature is required on delivery.\n\n## Ordering\n\nPROPPS orders start at $300 AUD, ship by Australia Post Express with signature on delivery and are free to deliver from $500 AUD. Crypto payments receive a 10% discount. For larger runs, see the [wholesale page](/wholesale/).\n\n## Where to go next\n\nFor games and parties, see [event and party props](/shop/event-and-party-props/). For film, television, theatre and photography, see the [New Notes range](/shop/new-notes/). If you are unsure, [contact the studio](/contact/) and tell us the job.",
    faqs: [
      {
        "q": "What is the difference between play money and prop money?",
        "a": "Play money looks obviously unlike real notes and suits games, classrooms and parties. Prop money reads as real on camera while staying specimen-marked. See the [event and party props](/shop/event-and-party-props/) for play money and the [New Notes range](/shop/new-notes/) for prop money."
      },
      {
        "q": "Is pretend money safe for kids?",
        "a": "Yes. Pretend money is designed to look clearly unlike real currency. Our packs carry visible markings and are non-legal tender."
      },
      {
        "q": "Can I use play money in a film?",
        "a": "Only for background shots where it will not be seen closely. For close-ups, use prop money. Our [guide to realistic prop money lighting](/blog/lighting-prop-money-for-camera-avoiding-glare/) explains why."
      },
      {
        "q": "Is prop money more expensive than play money?",
        "a": "Yes, because of print quality, paper and specimen marking. Prop money orders start at $300 AUD with PROPPS. See [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/)."
      },
      {
        "q": "Is it legal to buy play money or prop money?",
        "a": "Yes, when it is clearly marked or obviously not real, and used for a legitimate purpose. Never spend either. Read our [compliance page](/compliance/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'how-much-prop-money-do-you-need-for-a-scene',
    title: 'How Much Prop Money Do You Need for a Scene? A Quantity Guide for Producers',
    seoTitle: 'How Much Prop Money Do You Need for a Scene?',
    excerpt: 'Prop money cost and quantity guide: how much prop money you need for a wallet shot, table spread or vault, with stack prices. Size your order today.',
    category: 'Production Planning',
    date: '2026-03-21',
    readTime: '11 min read',
    image: 'how-much-prop-money-do-you-need-for-a-scene.webp',
    imageAlt: 'Prop bundles of money australia — stacked specimen prop currency bundles for film scenes',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack', '100-australian-prop-money-for-sale'],
    content: "Ordering too little prop money leaves a scene looking thin. Ordering too much puts budget into bundles the lens never sees. The answer is not a single number. It depends on what the camera shows, how many takes and set-ups there are, how many days you shoot and how closely the shots match. This guide gives you a method for sizing prop money for any scene, with the real stack sizes and prices, worked examples for common scenes and tips for stretching a small budget on an independent production. It is written for art departments, line producers and independent filmmakers. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nCount the stacks the camera sees, add the hidden ones that sit behind them, double the count for any repeat set-up and add one sealed reserve. A wallet shot needs a Starter Stack, a desk spread one or two stacks, a briefcase five, and a vault ten or more. Prop money cost is driven by stack size, and orders start at $300 AUD.\n\n## The stack sizes and prices\n\nEvery product in the [New Notes range](/shop/new-notes/) uses the same stack tiers. Sizes are described by face value, and prices are in AUD.\n\n- **Starter Stack:** $1,500 face value, $115\n- **1 Stack:** $2,000 face value, $200\n- **5 Stacks:** $10,000 face value, $850\n- **10 Stacks:** $20,000 face value, $1,600\n- **50 Stacks:** $100,000 face value, $7,500\n- **100 Stacks:** $200,000 face value, $14,000\n\nOrders start at $300 AUD, so a Starter Stack alone does not clear the minimum. Delivery is free from $500 AUD, and crypto payments receive a 10% discount. Prices come from the live range, so check the product page before you order.\n\n## A five-step method\n\n1. **Break the scene into shots.** List every shot that shows money: wide, medium, insert and close-up.\n2. **Count the visible stacks in each shot.** Include stacks in the foreground and the background.\n3. **Add the hidden ones.** Stacks behind hero bundles, under a bag or on a shelf out of focus still need to be there.\n4. **Allow for repeat set-ups.** If the same money appears before and after a handover, you need matching stacks for both sides of the cut.\n5. **Add a reserve.** One sealed stack is cheaper than a rush order on the morning of the shoot.\n\n## How much for common scenes\n\n### A wallet or hand shot\n\nThe camera sees a few notes. One Starter Stack covers it, with plenty for continuity. Spend the saved budget on a clean hero note for the close-up.\n\n### A table spread or desk scene\n\nA pile on a table needs volume without depth. One or two stacks give a natural-looking spread. Let notes fall loosely and vary the angles.\n\n### A bag, briefcase or handover\n\nA bag opening shows a thick bundle at the top. Five stacks usually fill a briefcase to the lip. Put $100 and $50 notes on the visible faces and filler beneath. If the scene shows the same bag twice, order enough matching stacks to avoid rebuilding between set-ups.\n\n### A heist, vault or cash room\n\nA vault is where the camera pulls back. Count the shelves, pallets and bags in the frame and work out how many bundles each holds. Ten stacks fills a modest vault. A larger set with pallets suits 50 Stacks, and a full cash room is where 100 Stacks and a wholesale conversation make sense. Read our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) for more.\n\n### A till or shop counter\n\nA till drawer needs a mix of denominations and a few bundles under the tray. A Starter Stack plus a 1 Stack usually covers a till and a counter, and the combined $315 clears the order minimum.\n\n## Prop money cost: what drives it\n\nProp money cost is driven by four things.\n\n1. **Stack size.** The tiers above scale the price, and larger tiers lower the price per dollar of face value.\n2. **Denomination mix.** A scene that needs $100 and $50 hero stacks plus smaller denominations for tills may need more than one product.\n3. **Finish.** Matte, double-sided paper with consistent print costs more than a basic print.\n4. **Delivery and paperwork.** Free from $500 AUD, and the invoice goes on your production file.\n\nOur guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains where cheaper listings save money, and our [wholesale guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/) covers larger runs.\n\n## Making a small budget look big\n\nIndependent productions rarely buy a full vault of hero notes. These methods stretch a small order.\n\n1. **Hero on top, filler underneath.** The camera sees the top note and the edges of a stack. Put $100 notes at the visible faces and cheaper material behind.\n2. **Fan the notes.** A fanned handful reads as a thicker stack than a flat one.\n3. **Vary the denominations.** An all-$100 drawer looks staged. Mix in $50 and $20 notes. The [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) guide shows how.\n4. **Use depth of field.** A shallow focus blurs bundles in the background, so they do not need to be hero quality.\n5. **Break the line.** Open a strap, spill a few notes and leave one stack at an angle. Perfect order looks fake.\n6. **Reuse the same stacks.** Reshoot angles with the same stacks, and move them around the set.\n\nFor a longer look at a single denomination, read [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/).\n\n## Reading the script for cash\n\nBefore the first order, read the script and the shot list for every mention of money. Mark each scene where cash appears, note whether it is held, counted, hidden or thrown, and write down how many bundles are visible. A scene that says only \"he pays\" needs a wallet and a few notes. A scene that says \"the vault is full\" needs a very different order. Doing this once, early, is the cheapest way to avoid both a thin scene and an overspend.\n\n## Questions to ask the director and DOP\n\nAsk before you order, not after.\n\n1. Which shots show money, and which are close-ups?\n2. Is any shot a hero insert that needs a clean note?\n3. Does the same money appear in two places in the story?\n4. Will the notes be handled, thrown or dropped?\n5. How many takes and set-ups are planned?\n6. Is there a pickup day or reshoot allowance?\n\nThe answers decide quantity, finish and how many spares you need. A ten-minute chat before the order usually saves a rush delivery later.\n\n## Planning over several shooting days\n\nIf cash appears across several days, order the whole quantity once. The stacks match, the paperwork is one invoice and the delivery is one signature. Keep a log of which stacks went where, count them in and out each day and store them with the prop master. Our [ready stacks guide](/blog/ready-prop-money-stacks-for-fast-turnaround/) covers strapped stacks for fast resets.\n\n## A worked budget example\n\nImagine a short film with three cash scenes: a bank counter, a car handover and a kitchen table. The bank counter needs a till and three hero bundles. The car handover needs a briefcase of cash. The kitchen table needs one stack in a close-up.\n\nA practical order is 5 Stacks for the bank counter and the briefcase, which are shot on different days and can be reused, plus a Starter Stack and a 1 Stack for the kitchen table and the till. That comes to $850 plus $115 plus $200, which is $1,165 in AUD, clears the order minimum and qualifies for free delivery. Keep one stack sealed as a reserve and count them in and out on each day.\n\n## Compliance\n\nEvery PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Keep the notes under the prop master's control, keep the invoice on file and never spend them. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [Reserve Bank guidance](https://www.rba.gov.au/banknotes/) for the full picture.\n\n## Where to go next\n\nStart with the [New Notes range](/shop/new-notes/), see [Money Stacks](/shop/money-stacks/) for counted bundles, or [contact the studio](/contact/) with your shot list and we will suggest a quantity.",
    faqs: [
      {
        "q": "How much prop money do I need for a scene?",
        "a": "Count the visible stacks, add hidden ones, double for repeat set-ups and keep one reserve. A wallet shot needs a Starter Stack, a desk spread one or two, a briefcase five and a vault ten or more. See the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "What is the prop money cost per stack?",
        "a": "Starter Stack $115, 1 Stack $200, 5 Stacks $850, 10 Stacks $1,600, 50 Stacks $7,500 and 100 Stacks $14,000, all in AUD. Orders start at $300 AUD."
      },
      {
        "q": "Can I stretch a small prop money budget?",
        "a": "Yes. Put hero notes on top, fan them, vary denominations and use depth of field. Read [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/)."
      },
      {
        "q": "Should I order all the prop money at once?",
        "a": "Yes, for a block of shooting. It keeps stacks matching and gives you one invoice and one delivery. See [ready prop money stacks](/blog/ready-prop-money-stacks-for-fast-turnaround/)."
      },
      {
        "q": "Is there a discount for large orders?",
        "a": "Larger runs can be quoted on the [wholesale page](/wholesale/), and crypto payments receive a 10% discount."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'prop-money-for-photography-realistic-cash-shots-without-the-risk',
    title: 'Prop Money for Photography: Getting Realistic Cash Shots Without the Risk',
    seoTitle: 'Prop Money for Photography: Realistic Shots',
    excerpt: 'Photoshoot props Australia: how to style prop money for editorial, product and advertising photography without legal risk. Get clean, glare-free cash shots.',
    category: 'Photography',
    date: '2026-03-31',
    readTime: '11 min read',
    image: 'prop-money-for-photography-realistic-cash-shots-without-the-risk.webp',
    imageAlt: 'Prop money for photoshoot — handheld fan of $50 specimen prop notes',
    relatedCategories: ['photography-props'],
    relatedProducts: ['photography-prop-currency-set'],
    content: "Cash is a powerful visual in photography. A fanned handful of notes says success, a stack on a desk says business, a scatter on a bed says excess. For editorial, product and advertising shoots, photoshoot props Australia wide often include prop money, because real cash is risky to carry, expensive to tie up and easy to damage. This guide is written for photographers, stylists, producers and creative directors. It covers how to choose prop money for a photoshoot, how to light and style it, how to avoid glare and clutter, how to stay on the right side of the law and what to order. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nChoose matte, double-sided, specimen-marked notes. Style them in simple, deliberate groups: a fan, a stack and a few loose notes. Light them softly from the side to avoid glare. Keep the notes clearly props in the shot and in the caption, and keep them in the studio. A single set of fanned notes plus one strapped stack covers most set-ups.\n\n## Why photographers use prop money\n\nReal cash is a poor studio prop. It is attached to a risk, because someone must hold it, insure it and count it. It is hard to match across a series of shots, because notes vary in age and wear. It cannot be weathered, marked or cut for a creative idea. Prop money solves all of this. It is consistent, replaceable and safe to handle, and it can be styled to match a brief.\n\nFor photography the print has to hold up in high resolution. A camera at a modern resolution will show fine line work and paper grain, so poor print quality is visible in a way it never is on a phone. That is why our [guide to high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) is useful before you order.\n\n## What to look for in prop money for photography\n\n- **Matte, non-reflective paper.** Glossy stock throws hot spots under strobes and continuous light. PROPPS prints on 120gsm matte archival paper.\n- **Crisp print at close range.** Fine line work should stay clean at the working distance for your lens.\n- **Double-sided print.** A flipped or fanned note shows its back.\n- **Consistent colour across the order.** Notes from different runs can differ slightly, which shows in a flat lay.\n- **Specimen markings.** Every note should carry permanent markings. Ask for a photo of the front and back before you order.\n- **Denominations that suit the brief.** $100 and $50 notes read strongly, while smaller denominations suit a lifestyle or retail story. Our guide to the [best Australian banknote denominations](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) helps you choose.\n\n## Styling cash for the camera\n\n### The fan\n\nA fan of notes is the classic cash shot. Hold the notes by one end and spread them in a gentle arc. Keep the spread even, and avoid fanning too many notes or the edges lose definition. Eight to twelve notes make a clean fan.\n\n### The stack\n\nA strapped stack reads as money at a glance. Square the edges, keep the strap flat and let the top note show. A stack on its side shows the layered edges, which is often more convincing than a flat top view.\n\n### The scatter\n\nA scatter of loose notes suggests abundance or chaos. Drop the notes from a short height and let them fall, then adjust a few by hand. Avoid a perfect pattern. Photograph in bursts, because the best scatter is rarely the first.\n\n### The flat lay\n\nA flat lay on a table or a coloured surface needs careful alignment. Use a ruler or a grid on the table, keep the notes parallel, and watch the shadows between them. Soft overhead light from a large source keeps shadows gentle.\n\n### The hand shot\n\nA model holding or counting notes needs a clean, uncreased hero note and a few working notes. Keep fingerprints off the surface and replace hero notes between sets.\n\n## Lighting prop money\n\nLight for the notes the way you light skin: large, soft and angled. Place the key at roughly 45 degrees to the table, away from the lens axis, use a flag or a dark card for negative fill and watch the highlights on the paper. Our guide to [lighting prop money on camera without glare](/blog/lighting-prop-money-for-camera-avoiding-glare/) goes through this in detail. If you shoot tethered, check a note at 100 percent on the screen, because glare and print softness show up there first.\n\n## Props that pair well with cash\n\nCash works best with a small number of well-chosen companions. A leather wallet, a briefcase, a watch, a pair of sunglasses, a sleek phone, a paper bag, a champagne glass and a pile of receipts all suggest a story. Keep the palette simple. A neutral background lets the green and gold of the notes carry the image, while a bright background competes with them.\n\n## Working with a stylist and creative director\n\nAgree the look before the shoot day. Share a mood board that shows how the cash should appear: crisp and new, creased and used, or scattered and chaotic. Decide who handles the notes, because a stylist who arranges stacks all day will want clean gloves and a tray. Agree the denominations, the quantity and the number of hero shots, so nobody is surprised by a request for a second vault on the day. A short call before the shoot saves time on set.\n\n## Retouching and post-production\n\nRetouching cash is easier when the capture is clean. Fix stray dust, fingerprints and creases in post, but do not remove or alter the specimen markings on the notes, and do not edit a note to look more like a real banknote. If an image will be used in advertising, keep a copy of the supplier invoice and the order description with the job file, so the client can show what the notes are if anyone asks.\n\n## Keeping the shoot on the right side of the law\n\nPhotographs of cash get shared widely, so presentation matters. A few habits protect the client and the photographer.\n\n1. **Use marked notes.** Every PROPPS note carries permanent specimen markings and is printed on paper rather than polymer.\n2. **Keep the markings visible in at least some frames, or caption the image.** A line such as \"prop money\" removes ambiguity.\n3. **Do not photograph notes in a way that suggests a real payment or a giveaway.** A shot of a hand passing notes to the camera with a caption about a prize is the kind of image that attracts complaints.\n4. **Keep the notes in the studio.** Count them in and out.\n5. **Never spend them.** Not as a test, not as a joke.\n\nOur [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the law behind these habits, and the [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions. For creators posting on social media, read the [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/).\n\n## What to order for a photoshoot\n\nThe right order depends on the brief.\n\n- **A single hero image:** one set of fanned notes and one strapped stack.\n- **A campaign with several set-ups:** two or three stacks of the same denomination, so every image matches, plus a few loose notes.\n- **A lifestyle series with tills, wallets and counters:** a Starter Stack plus a 1 Stack, with a mix of denominations.\n- **A big visual, such as a bed of cash or a vault:** 5 or 10 Stacks, with hero stacks on top.\n\nPROPPS orders start at $300 AUD, ship by [Australia Post](https://auspost.com.au/) Express with signature on delivery and are free to deliver from $500 AUD. Crypto payments receive a 10% discount. Browse the [photography props](/shop/photography-props/) range, or read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) to size an order.\n\n## A pre-shoot checklist\n\n1. Confirm the denominations and quantity with the creative director.\n2. Order early enough to allow for a signature on delivery.\n3. Test a note under your lights and at your lens distance.\n4. Pack gloves, a lint roller and a spare stack.\n5. Count the notes in at the start of the day and out at the end.\n6. Caption the final images so the notes read as props.\n\n## Where to go next\n\nSee the [photography props range](/shop/photography-props/), the [New Notes range](/shop/new-notes/), or [contact the studio](/contact/) with your brief and we will help you choose.",
    faqs: [
      {
        "q": "What are the best photoshoot props for a cash shot?",
        "a": "A fan of notes, one strapped stack and a few loose notes cover most set-ups. Use matte, double-sided, specimen-marked notes. Browse the [photography props range](/shop/photography-props/)."
      },
      {
        "q": "How do I avoid glare on prop money in photos?",
        "a": "Use matte paper, a large soft light at an angle that bounces reflections away from the lens and check at 100 percent on screen. Read our [lighting guide](/blog/lighting-prop-money-for-camera-avoiding-glare/)."
      },
      {
        "q": "Can I publish photos of prop money?",
        "a": "Yes, when the notes are clearly props and the presentation does not suggest real cash. Caption the images and keep the markings visible in some frames. See our [compliance page](/compliance/)."
      },
      {
        "q": "How much prop money do I need for a photoshoot?",
        "a": "One fan and one stack for a single image; two or three matching stacks for a campaign. See [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Can I use real cash for a photo shoot instead?",
        "a": "You can, but real cash carries risk and cost, and it cannot be weathered or matched across a series. Prop money is consistent and replaceable."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'novelty-money-for-parties-and-events-whats-legal-in-australia',
    title: "Novelty Money for Parties and Events: What's Legal in Australia",
    seoTitle: "Novelty Money for Parties: What's Legal in AU",
    excerpt: 'Novelty prop money Australia: what is safe and legal for parties, casino nights and events, and how to keep it marked and controlled. Plan your event.',
    category: 'Compliance & Legal',
    date: '2026-04-10',
    readTime: '10 min read',
    image: 'novelty-money-for-parties-and-events-whats-legal-in-australia.webp',
    imageAlt: 'Novelty prop money australia — mixed $20 and $50 specimen prop notes for party props',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    content: "A stack of cash on a party table, a \"money rain\" at a themed event, a casino night with a prize wall of notes: novelty money makes events more fun and more photogenic. It also raises the question hosts rarely think about until a guest asks: is this legal? This guide covers novelty prop money in Australia for parties and events. It explains what is generally fine, where the risks are, how to choose between play money and marked prop notes, how to run an event so the notes stay controlled, and what to do afterwards. It is general information, not legal advice. All PROPPS products are specimen-marked, non-legal tender props.\n\n## The short answer\n\nNovelty money is fine at an event when it is clearly marked or obviously not real, when it is used only as a prop and when it stays inside the event. Problems come from realistic unmarked notes, from guests taking them away, from using them as payment and from posting images that suggest the cash is real. Marked notes and a simple control plan solve almost all of it.\n\n## What counts as novelty money\n\nNovelty money covers a wide range.\n\n- **Play money and toy money.** Obviously not real and the safest choice. See [toy money and play money for kids](/blog/toy-money-and-play-money-for-kids-games-and-learning/).\n- **Marked prop notes.** Realistic enough to look good in photos, with permanent specimen markings and printed on paper. See the [New Notes range](/shop/new-notes/).\n- **Custom branded notes.** Notes with a brand or event name on them. See [custom and branded props](/shop/custom-and-branded-props/).\n- **Money guns, confetti cannons and cash-themed decorations.** These use notes in a throwaway way and need extra care, because notes end up in the crowd.\n\n## Where the law comes in\n\nThe Commonwealth Crimes (Currency) Act 1981 is aimed at counterfeit currency and reproductions that could deceive a reasonable person. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions. In broad terms, notes that are clearly marked and clearly different from genuine currency, and that are used as props, are treated very differently from notes made to pass as real. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) for how PROPPS builds to the standard, and check the current legislation for anything specific to your event.\n\n## Play money or marked prop notes?\n\nChoose by the job.\n\n- **A game or fundraiser where guests handle the money:** play money. It is cheap, obviously pretend and safe if a note leaves the room.\n- **A photo wall, a prize table or a themed backdrop:** marked prop notes, kept in one place and counted at the end.\n- **A brand activation with giveaways:** custom play money, clearly marked and clearly different from real notes.\n- **A proposal or a surprise:** marked prop notes in a stack or a box, kept with the host.\n\nOur guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) goes into more detail.\n\n## An event control plan\n\nA simple plan keeps novelty money from causing trouble.\n\n1. **Choose one person to hold the stock.** They count the notes in at the start and out at the end.\n2. **Hand out only what is needed.** Give guests a fixed amount of play money, not a bowl to help themselves from.\n3. **Brief the staff.** Bar staff, door staff and caterers should know the notes are props and must not be accepted as payment.\n4. **Mark the area.** A sign at the casino table or prize wall saying \"prop money, not legal tender\" removes doubt.\n5. **Collect at the end.** Count, bag and store the notes. Do not let guests take marked prop notes home as souvenirs.\n6. **Keep the invoice.** If the venue or the insurer asks, you can show what the notes are.\n\n## Money rain and cash cannons\n\nCash cannons, confetti guns and \"money rain\" effects are popular for stage reveals and dance floors. They are also where novelty money most often leaves the venue. If you use them, use clearly pretend play notes, not realistic prop notes, because the notes will end up in pockets and bags. Sweep the floor, count what you can, and warn the crowd that the notes are novelty. Realistic prop notes are a poor choice for anything that scatters.\n\n## Social media and photography\n\nPhotos of cash get shared widely. A picture of a person holding a fan of realistic notes with a caption suggesting a win, a gift or a payment is the kind of post that causes complaints. If you are photographing an event, make it obvious the money is a prop: a sign in the shot, a caption that says so, or notes that are clearly play money. Our [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) explains how to present prop money honestly.\n\n## Planning quantities\n\nThe right quantity depends on the activity.\n\n- **Casino night:** a starting stack per guest, plus extra for the bank.\n- **Game stall:** enough to cover prizes and change for the expected crowd.\n- **Photo wall or prize table:** a few stacks or a handful of fanned notes, not a vault.\n- **Proposal or reveal:** one hero stack or box.\n\nPROPPS orders start at $300 AUD, ship by Australia Post Express with signature on delivery and are free to deliver from $500 AUD. For larger events and school or charity runs, see the [wholesale page](/wholesale/). Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) also helps you size a stack.\n\n## Five quick event plans\n\n**Birthday casino night.** Give each guest the same starting stack of play money, run three or four table games, and finish with a prize table. Count all the notes back in before guests leave.\n\n**School or club fundraiser.** Sell tickets for play money, run game stalls and let children spend at a prize table. A volunteer holds the cash box and counts notes in and out.\n\n**Corporate themed night.** Use custom play money with the company name, clearly marked, for team games. Collect it at the end and use it as a prize draw.\n\n**Photo wall or backdrop.** A few fanned marked prop notes and one stack make a good photo prop. Keep them on the wall, not on the guests.\n\n**Proposal or reveal.** One stack or box of marked prop notes, held by the host and returned to storage afterwards.\n\n## Choosing a theme and keeping it fun\n\nA good theme makes the money part of the fun rather than the point of it. A roaring twenties night suits stacks of notes and a prize wall. A pirate party suits treasure chests and gold-coloured play money. A school fair suits simple tickets and small notes. Whichever theme you pick, keep the rules simple, hand out equal amounts, and make sure the prizes are worth more than the effort of counting.\n\n## Questions venues and insurers ask\n\nVenues and insurers usually ask three things: what is the money, who is responsible for it and will it leave the building. Be ready with the answers. The money is novelty play money or marked prop notes, one named person looks after it, and it is counted in and out. Having the supplier invoice and a one-line description of the plan on hand answers most questions in seconds.\n\n## After the event\n\nCount the notes back in, store them dry and flat and keep them in a labelled box. Marked notes can be reused for the next event. If you do not need them, keep them with the paperwork rather than throwing them loose in the bin or giving them to guests. Play money can be reused in classrooms and games.\n\n## Common mistakes\n\n- **Using realistic notes in a scattering effect.** They will leave the venue.\n- **Letting guests keep marked notes.** One note in a wallet can turn into a question later.\n- **Skipping the briefing.** Bar and door staff need to know the notes are props.\n- **Using notes as payment, even as a joke.** Never.\n- **Removing the markings for a better photo.** Do not cut, crop or cover them.\n\n## Where to go next\n\nBrowse [event and party props](/shop/event-and-party-props/), see marked notes in the [New Notes range](/shop/new-notes/), or [contact the studio](/contact/) with your event details.",
    faqs: [
      {
        "q": "Is novelty prop money legal at parties in Australia?",
        "a": "Yes, when it is clearly marked or obviously not real, used only as a prop and kept inside the event. Never use it as payment. See our [compliance page](/compliance/)."
      },
      {
        "q": "Can I use realistic prop money for a casino night?",
        "a": "You can, but play money is cheaper and safer for games where guests handle the notes. Marked prop notes suit a prize table or photo wall. Read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/)."
      },
      {
        "q": "Can guests take novelty money home?",
        "a": "Play money is fine to take home. Keep marked prop notes with the host and count them back in. See [event and party props](/shop/event-and-party-props/) for options."
      },
      {
        "q": "Is a cash cannon safe to use with prop money?",
        "a": "Use clearly pretend play notes, not realistic prop notes, because the notes will scatter into the crowd. Sweep up and warn guests that the notes are novelty."
      },
      {
        "q": "How much novelty money do I need for an event?",
        "a": "A starting stack per guest for a casino night, a few stacks for a prize table or photo wall, and one hero stack for a reveal. See [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'custom-and-branded-prop-currency-guide-for-agencies',
    title: 'Custom & Branded Prop Currency: A Guide for Agencies and Brand Campaigns',
    seoTitle: 'Custom & Branded Prop Currency for Agencies',
    excerpt: 'Custom prop money printing Australia guide for agencies and brands: briefs, artwork, compliance markings, quantities and timing. Plan your branded notes.',
    category: 'Custom Production',
    date: '2026-04-20',
    readTime: '11 min read',
    image: 'custom-and-branded-prop-currency-guide-for-agencies.webp',
    imageAlt: 'Custom prop money printing australia — fanned specimen $50 prop note stack',
    relatedCategories: ['custom-and-branded-props'],
    relatedProducts: ['custom-and-branded-prop-currency'],
    content: "Branded currency is an old and effective marketing idea. A note with a logo, a mascot or a campaign slogan is memorable, shareable and fun to hand out. Agencies use it for product launches, conference giveaways, loyalty promotions and television segments. The difficulty is that real currency is protected by law, so custom prop money printing in Australia has to be done carefully. This guide is written for agencies, brand teams and event producers. It covers what custom prop money is, how a brief works, how to prepare artwork, what compliance markings are required, how to plan quantities and timing and what to avoid. It is general information, not legal advice. All PROPPS custom runs are specimen-marked, non-legal tender props.\n\n## The short answer\n\nCustom prop money is lawful when it carries permanent specimen markings, differs clearly from genuine currency and is used as a prop or promotional item, never as payment. Give the studio a clear brief, the artwork and the quantity, allow time for proofs and plan how the notes will be distributed. Never ask for a design that copies a real note closely.\n\n## What custom prop money is\n\nCustom prop money, also called branded currency, branded prop notes or custom play money, is printed with your artwork instead of a standard design. Typical examples include:\n\n- **Branded launch notes.** A product launch where each guest receives a note carrying the product name and a QR code.\n- **Conference currency.** Notes used as tokens at a stand or as prizes in a game.\n- **Loyalty and promotion notes.** A retail campaign where customers collect notes for discounts.\n- **Television and stage props.** A game show or a sketch needing bespoke cash with a fictional bank or character.\n- **Custom play money.** Playful notes with an event or school logo for fairs and fundraisers.\n\n## What the law cares about\n\nThe Commonwealth Crimes (Currency) Act 1981 is aimed at counterfeit currency and at reproductions that could deceive a reasonable person. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions. Branded notes that are clearly different from genuine currency, clearly marked and used as promotional props sit on the right side of the line. Notes that closely copy a real note and could be passed off as one do not. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains how PROPPS builds to the standard, and you should check the current legislation and speak to a lawyer for anything unusual.\n\n## How a custom brief works\n\nA good brief saves time and money. It usually includes:\n\n1. **The purpose.** Why are the notes needed, and how will they be used?\n2. **The audience.** Who will receive them, and where?\n3. **The artwork.** Logos, characters, colours, slogans and any QR codes or URLs.\n4. **The format.** Size, denominations or values, and whether the notes are single or double-sided.\n5. **The quantity.** How many of each design.\n6. **The deadline.** The launch date or event date, with a buffer.\n7. **The budget.** An approximate range, so the studio can suggest options.\n\nTell the studio your concept through the [contact page](/contact/) or on WhatsApp. We reply with a quote and next steps.\n\n## Preparing artwork\n\nGood artwork makes a good note.\n\n- **Supply vector files where possible.** Logos should be crisp at any size.\n- **Keep important content away from the edges.** Trimming varies slightly.\n- **Use readable type.** A note is small, so avoid fine print for the key message.\n- **Leave room for the markings.** Specimen markings are part of the design, so do not crowd them out.\n- **Avoid copying real note designs.** Use your own illustration, colour scheme and layout. A custom note should look like your brand, not like a bank.\n- **Think about both sides.** The back is a chance for a call to action or a code.\n\n## Compliance markings\n\nEvery custom run is held to the same specimen standard as our standard range. That means permanent, prominent markings on every note, paper stock rather than polymer and a clear statement that the notes are not legal tender. These markings are not optional and they are not negotiable, because they are what keeps a custom run lawful. We do not remove or reduce them for a design, and we do not print notes that are intended to pass as real currency.\n\n## Quantities, timing and cost\n\nQuantity drives cost and lead time. Small runs for a launch or a television segment are quicker. Larger runs for a national campaign need more planning. As a rule of thumb:\n\n- **Plan for proofs.** Allow time for at least one round of changes.\n- **Add a buffer.** Event dates are fixed, and printing and delivery add days.\n- **Order a spare box.** Notes get lost, damaged or taken.\n- **Ask about wholesale tiers.** Larger runs may qualify for better pricing. See the [wholesale page](/wholesale/) and our [wholesale guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/).\n\nStandard PROPPS orders start at $300 AUD and ship by [Australia Post](https://auspost.com.au/) Express with signature on delivery. Custom runs are quoted per job.\n\n## Campaign ideas that work\n\nBranded notes work best when the idea is simple. A launch where each guest gets a note with a unique code to redeem. A pop-up where notes buy small items at a stand. A loyalty scheme where collecting a set earns a reward. A television segment where contestants play for branded cash. A retail promotion where a note acts as a voucher. In each case, the note supports the story, rather than being the story. Keep the message short, the branding bold and the markings visible.\n\n## Proofs and approvals\n\nPlan for at least one proof. The studio prepares a layout showing the artwork, the markings and the trim. Check spelling, logos, colours and any codes. Ask who needs to approve it, from the brand manager to legal, and get sign-off in writing. Changes after printing are costly, so use the proof stage to catch problems. If a code or URL is on the note, test it before the run.\n\n## Custom or standard: which suits the job?\n\nStandard notes suit film, television, theatre and photography, where the money has to look like real cash on camera. Custom notes suit promotions and events, where the point is to carry a brand. If a scene needs realistic cash, choose standard notes from the [New Notes range](/shop/new-notes/). If a campaign needs something people keep and share, choose custom. Many projects use both.\n\n## Distributing branded notes\n\nHow you hand out the notes matters as much as how they are printed.\n\n1. **Give them context.** A card or a sign that says what the notes are removes confusion.\n2. **Do not hand them out near shops or taxi ranks.** A note in a pocket can end up at a till.\n3. **Brief staff.** Event staff should know the notes are promotional props.\n4. **Make them clearly branded.** A note with your logo is hard to mistake for real currency.\n5. **Keep a count.** Know how many were printed and how many were given out.\n\n## Social media and PR\n\nBranded notes are made to be photographed. When you share images, make it obvious that the notes are promotional props. A caption such as \"our launch notes\" is enough. Avoid images that suggest a real cash giveaway unless it really is one and you are following the relevant rules. Our [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) explains how to present prop money honestly.\n\n## Working with an agency timeline\n\nA typical custom job runs in four stages: brief and quote, artwork and proof, print and finish, then dispatch. Build a week of slack into each stage if the date is fixed, and tell the studio the event date at the start. If your client is slow to approve, say so early. A realistic timeline protects the launch, because a late note is worth nothing at the party. Keep one point of contact on each side, and keep all approvals in one email thread.\n\n## What to put in the quote request\n\nTo get an accurate quote quickly, include the quantity, the number of designs, the format, any special finish, the delivery address and the date. Attach artwork if you have it, or a description if you do not. Mention whether the notes will be handed out in public or used on camera, because that affects how the markings are placed. The more detail you give, the fewer questions we need to ask.\n\n## Common mistakes\n\n- **Copying a real note.** It is both a legal risk and a poor brand idea.\n- **Leaving too little time.** Printing, proofs and delivery all take days.\n- **Forgetting the back.** A blank back is a missed chance.\n- **Skipping the briefing.** Event staff and guests need to know what the notes are.\n- **Printing without a spare.** Notes disappear.\n\n## Where to go next\n\nSee [custom and branded props](/shop/custom-and-branded-props/) for the range, read the [compliance page](/compliance/) for the standard, or [contact the studio](/contact/) with your brief.",
    faqs: [
      {
        "q": "Is custom money printing legal in Australia?",
        "a": "It is lawful when the notes carry permanent specimen markings, differ clearly from genuine currency and are used as props or promotional items. Notes made to pass as real money are not. See our [compliance page](/compliance/)."
      },
      {
        "q": "Can I get custom prop money with my logo?",
        "a": "Yes. PROPPS prints branded notes in Melbourne. Send your concept, artwork, quantity and deadline through the [contact page](/contact/) for a quote."
      },
      {
        "q": "How long does custom prop money take?",
        "a": "Timing depends on artwork, proofs and quantity. Tell us your deadline when you enquire and we will confirm what is realistic."
      },
      {
        "q": "Can I make custom play money for a school or event?",
        "a": "Yes. Custom play money suits fairs, fundraisers and events. See [custom and branded props](/shop/custom-and-branded-props/)."
      },
      {
        "q": "Is there a minimum order for custom notes?",
        "a": "Standard orders start at $300 AUD and custom runs are quoted per job. Larger runs can use tiers on the [wholesale page](/wholesale/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'wholesale-prop-money-for-production-companies-bulk-pricing-explained',
    title: 'Wholesale Prop Money for Production Companies: Bulk Pricing Explained',
    seoTitle: 'Wholesale Prop Money: Bulk Pricing Explained',
    excerpt: 'Prop money price and bulk pricing explained for production companies: stack tiers, wholesale discounts and how to plan a season order. Get a quote today.',
    category: 'Wholesale',
    date: '2026-04-30',
    readTime: '11 min read',
    image: 'wholesale-prop-money-for-production-companies-bulk-pricing-explained.webp',
    imageAlt: 'Wholesale prop money australia — bulk bundled specimen prop currency stacks',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack'],
    content: "Production companies rarely buy prop money once. A series has multiple episodes, a feature has several cash scenes, and a studio may run more than one project at a time. Buying prop cash per scene usually costs more once shipping, handling and mismatched stacks are counted, and it gives the art department a continuity problem. This guide explains the prop money price structure at PROPPS, how bulk and wholesale pricing works, how to plan a season-long order, how to compare quotes fairly and what to ask a supplier. It is written for line producers, production managers, prop masters and accountants. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nThe prop money price at PROPPS starts with stack tiers, from $115 for a Starter Stack to $14,000 for 100 Stacks, with orders from $300 AUD and free delivery from $500 AUD. Larger and repeat runs qualify for wholesale tiers of 10% to 30% off, and crypto payments receive a 10% discount. Order the full quantity for a block of shooting to keep stacks matching and keep paperwork simple.\n\n## The standard price tiers\n\nEvery product in the [New Notes range](/shop/new-notes/) is sold in the same tiers. Sizes are described by face value, and prices are in AUD.\n\n- **Starter Stack:** $1,500 face value, $115\n- **1 Stack:** $2,000 face value, $200\n- **5 Stacks:** $10,000 face value, $850\n- **10 Stacks:** $20,000 face value, $1,600\n- **50 Stacks:** $100,000 face value, $7,500\n- **100 Stacks:** $200,000 face value, $14,000\n\nThe price per dollar of face value falls as the tier rises, so one large order costs less than several small ones. Orders start at $300 AUD, and delivery is free from $500 AUD.\n\n## What wholesale adds\n\nWholesale pricing is for production companies and agencies that order in volume or repeatedly. It typically offers:\n\n- **Tiered discounts.** Larger runs qualify for 10% to 30% off the standard price.\n- **A named contact.** Reorders do not need to go through the standard checkout each time.\n- **Matching stock.** Stacks from the same run match from episode to episode.\n- **Planned dispatch.** Deliveries can be scheduled around shooting blocks.\n- **One invoice.** A single invoice or a clear schedule simplifies production accounting.\n\nOur [wholesale page](/wholesale/) has the form, and our [money stacks range](/shop/money-stacks/) shows the sizes.\n\n## Why buying per scene costs more\n\nBuying cash one scene at a time looks cheap, but the costs add up.\n\n1. **Repeated minimum orders.** Each order has a minimum, so several small orders pay it several times.\n2. **Shipping and signatures.** Each delivery needs someone at the address to sign.\n3. **Mismatched stacks.** Notes from different runs can differ slightly in colour and finish.\n4. **Rush fees.** A late scene change forces an urgent order.\n5. **Admin time.** Each order is a purchase order, an invoice and a reconciliation.\n\nOrdering once for a block of shooting removes most of these. It also lets the art department weather and plan the cash as a single set, as our [art department guide](/blog/art-department-guide-weathering-prop-cash/) explains.\n\n## Questions your accountant will ask\n\nProduction accountants usually want to know the total cost, when it is due, what is included and what the paperwork looks like. Prepare answers: the price per tier, the minimum order and the free delivery threshold, the payment methods, the tax treatment on the invoice and the delivery schedule. A clear quote makes budgeting and cashflow easier, and an invoice that names the notes as specimen-marked props makes the file complete.\n\n## Scheduling deliveries across a shoot block\n\nA single order can still be delivered in stages. Tell the studio when each scene is shot and which stacks are needed first. Dispatch leaves our Melbourne studio within 24 business hours of payment, and Australia Post Express delivery needs a signature, so nominate someone at each address. If a second location is interstate, plan a day for travel. A short schedule sent with the order avoids a missed delivery.\n\n## Storage and security for larger orders\n\nA pallet of stacks is a valuable item for a production, even though the notes are props. Store it in a locked room or cage, give one person the key and keep a movement log. Count in and out each day. Do not leave stacks in vehicles or on location overnight. Treat the notes as production property, because losing a stack mid-shoot costs time even when it costs little money.\n\n## Planning a season order\n\nUse this method to size a wholesale order.\n\n1. **List every scene with cash across the season.** Use the scripts or the breakdown.\n2. **Count the visible stacks per scene.** Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) explains how.\n3. **Identify reusable stacks.** Stacks that appear in several scenes can be bought once.\n4. **Group by denomination.** $100 and $50 hero stacks, plus smaller denominations for tills.\n5. **Add a reserve of 10% to 15%.** Damage, loss and reshoots happen.\n6. **Round to the nearest tier.** Compare the price of two tiers, because a bigger tier can be cheaper than the sum of small ones.\n\n## Comparing quotes fairly\n\nNot every quote is comparable. Ask each supplier the same questions.\n\n- **Are the notes specimen-marked on every note?** Ask for a photo.\n- **What is the paper and the weight?** PROPPS uses 120gsm matte archival paper.\n- **Is print double-sided and consistent across runs?**\n- **Are stacks counted and strapped?**\n- **Is delivery traceable with a signature?** PROPPS uses Australia Post Express with signature.\n- **Is there an invoice and paperwork for the production file?**\n- **What is the lead time and the reorder process?**\n\nOur guides to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) and [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) explain why the cheapest quote is not always the lowest cost.\n\n## Payment and paperwork\n\nWholesale buyers usually need clear paperwork. PROPPS provides an invoice for each order, accepts bank transfer, PayID and crypto, and gives a 10% discount on crypto payments. Keep the invoice on the production file together with a note of the specimen markings. That answers most questions from insurers, location owners and legal teams. Our [compliance page](/compliance/) and [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) set out the standard.\n\n## A worked example\n\nA six-episode series has a bank scene in episode one, a briefcase handover in episode three and a vault scene in episode six, plus recurring tills and wallets in every episode. The line producer plans 5 Stacks for the bank and briefcase scenes, which are reused, 10 Stacks for the vault, and a Starter Stack and 1 Stack per episode for tills and wallets, with a reserve. At standard prices, that comes to roughly $850 plus $1,600 plus six Starter Stacks and six 1 Stacks, before any wholesale discount. Ordering the whole quantity once keeps every stack matched, and the wholesale tier lowers the total further. Tell the studio your breakdown and we will quote.\n\n## Reading a quote line by line\n\nA wholesale quote should show the quantity, the tier, the price, the delivery cost, the payment terms and the estimated dispatch date. If any of these is missing, ask. Check that the quantity matches your plan, that the finish is the one you tested and that the tax treatment is shown. Keep the quote with the production file, because it records what was promised if a problem comes up later.\n\n## Wholesale for agencies and events\n\nWholesale is not only for film. Agencies buying branded or themed prop notes for several clients, event companies stocking casino-night kits and schools ordering for a whole year can all use the same approach: plan the whole quantity, order once and keep the stock together. Ask about tiers when you send your enquiry, and mention if the order will repeat, because repeat business is part of what wholesale pricing rewards.\n\n## Reordering mid-season\n\nIf the script changes or a reshoot is added, reorder from the same run where possible so the new stacks match the old ones. Tell the studio the original order reference and the quantity, and ask about timing. Keep a small reserve from the start, because it is the cheapest insurance against a late change.\n\n## Compliance and handling\n\nEvery note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. On a larger order, assign one person to hold the stock, count it in and out each day and keep it in a secure place. Never spend the notes. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions.\n\n## Where to go next\n\nSend your breakdown through the [wholesale page](/wholesale/), see [money stacks](/shop/money-stacks/) for counted bundles or [contact the studio](/contact/) and we will quote your season.",
    faqs: [
      {
        "q": "What is the prop money price for bulk orders?",
        "a": "Standard tiers run from $115 for a Starter Stack to $14,000 for 100 Stacks, and larger or repeat runs qualify for wholesale tiers of 10% to 30% off. Send your quantity through the [wholesale page](/wholesale/)."
      },
      {
        "q": "Is there a minimum order for wholesale?",
        "a": "Orders start at $300 AUD and delivery is free from $500 AUD. Wholesale tiers apply to larger and repeat runs."
      },
      {
        "q": "Why order a whole season at once?",
        "a": "It keeps stacks matching across episodes, avoids repeated minimums and shipping, and gives you one invoice. See [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Can I pay by crypto or bank transfer?",
        "a": "Yes. PROPPS accepts bank transfer, PayID and crypto, and crypto payments receive a 10% discount."
      },
      {
        "q": "What paperwork do I get for a wholesale order?",
        "a": "An invoice for the production file. Our [compliance page](/compliance/) sets out the specimen standard behind every note."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'fake-money-vs-prop-money-the-legal-difference-in-australia',
    title: 'Fake Money vs Prop Money: Understanding the Legal Difference in Australia',
    seoTitle: 'Fake Money vs Prop Money in Australia: Is It Legal?',
    excerpt: 'Fake money vs prop money in Australia: what the Crimes (Currency) Act 1981 allows, what it bans, and the markings that keep prop notes legal. Read the guide.',
    category: 'Compliance & Legal',
    date: '2026-05-10',
    readTime: '9 min read',
    image: 'fake-money-vs-prop-money-the-legal-difference-in-australia.webp',
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
    excerpt: 'Australian banknotes on screen: which of the five denominations to use for hero stacks, tills, wallets and vaults, with colour notes. Choose the right notes.',
    category: 'Cinematography',
    date: '2026-05-20',
    readTime: '12 min read',
    image: 'best-australian-banknote-denominations-for-film-and-tv-scenes.webp',
    imageAlt: 'Australian banknotes for film scenes — $20 and $50 specimen prop note denominations',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    content: "Australian banknotes are a visual language. The colours, the sizes and the stacks tell an audience at a glance whether a character is rich or struggling, whether a scene is a legitimate sale or a back-alley deal, and whether the money is a lot or a little. Choosing the right denominations for a scene is one of the quiet decisions an art department makes, and it affects how believable the cash looks. This guide explains the five current Australian denominations, how each reads on camera, which to use for hero stacks, tills and wallets, how to mix them, and how to order the right quantity. All PROPPS notes are specimen-marked, non-legal tender props printed on matte paper, never polymer.\n\n## The short answer\n\nUse $100 and $50 notes for hero stacks and close-ups, because their colours read strongly on camera and signal value at a glance. Use $20, $10 and $5 notes for tills, wallets, tips and everyday purchases, where an all-$100 drawer would look staged. Most scenes use two or three denominations rather than one, and a believable cash scene always mixes them.\n\n## The five current denominations at a glance\n\nThe [Reserve Bank of Australia](https://www.rba.gov.au/banknotes/) issues five banknotes in the current series, each with its own colour and design. This summary describes how they work on screen, not how to identify genuine notes.\n\n- **$5 note.** The smallest note, used for tips, coffee, newspapers and small change. Its pinkish-purple tone reads softly and sits naturally in a pocket.\n- **$10 note.** A blue-toned note that suits small purchases, lunches and pocket money.\n- **$20 note.** A red-orange note, the everyday workhorse in wallets, till drawers and ATM scenes.\n- **$50 note.** A gold and yellow note that carries weight on camera and suits bigger purchases, bills and payments.\n- **$100 note.** A green note that signals real money. It is the denomination most associated with bundles, heists and big payments.\n\nColours vary slightly under different light, so check them on the monitor. Our guide to [lighting prop money on camera](/blog/lighting-prop-money-for-camera-avoiding-glare/) explains how to keep them accurate.\n\n## How each denomination reads on camera\n\n### $100 notes\n\nThe $100 note is the star of a cash scene. A stack of green reads clearly at a distance and under most lighting. It suits briefcases, tables, vaults and handovers. The risk is overuse: a drawer or wallet of only $100 notes looks like a prop department made it. See the [$100 product](/shop/new-notes/100-australian-prop-money-for-sale/), and our guide to [$100 bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/).\n\n### $50 notes\n\nThe $50 note's gold reads warmly and gives a stack a rich look. It works well as the top layer of a bundle with lower denominations beneath, and in bills, bribes and payments. See the [$50 product](/shop/new-notes/50-australian-prop-money-for-sale/).\n\n### $20 notes\n\nThe $20 note is the everyday note. It belongs in wallets, till drawers and ATM scenes. A handful of $20 notes reads as ordinary money, which makes a scene feel real. See the [$20 product](/shop/new-notes/20-australian-prop-money-for-sale/).\n\n### $10 notes\n\nTens suit small purchases, lunch money and tips. They add variety in a till and a sense of realism in a wallet. See the [$10 product](/shop/new-notes/10-australian-prop-money-for-sale/).\n\n### $5 notes\n\nFives are for tips, small change and children's pocket money. A few in a wallet or a tip jar completes the picture. See the [$5 product](/shop/new-notes/5-australian-prop-money-for-sale/).\n\n## Mixing denominations by scene\n\nHere are common scenes and a sensible mix.\n\n- **A bank counter:** strapped bundles of $100 and $50 on the counter, with $20 and $10 notes in the teller's drawer.\n- **A shop till:** a mix of $50, $20, $10 and $5 notes in the tray, with a few $100 notes under the tray.\n- **A wallet or handbag:** two or three $20 notes, a $10 and a $5, with one $50 for variety.\n- **A briefcase or handover:** $100 and $50 on the visible faces, with filler beneath.\n- **A vault or cash room:** $100 stacks in the foreground, with a mix behind.\n- **A kitchen table or bedroom stash:** a loose mix of $50, $20 and $10, creased and unevenly stacked.\n- **A tip jar or busker's hat:** $5, $10 and a few coins.\n\n## Realism tips\n\n1. **Match the character.** A character who carries $20s is a different person from one who carries $100s.\n2. **Weather the everyday notes.** Small notes are handled more. Our [art department guide](/blog/art-department-guide-weathering-prop-cash/) shows how.\n3. **Use strapped stacks for banks and criminals.** Loose notes suggest someone who spends cash daily.\n4. **Do not match the stack too neatly.** Real money is slightly irregular.\n5. **Keep the same notes for the same story.** If money appears before and after a handover, match the stacks.\n\n## Planning quantities\n\nThe right quantity depends on what the camera sees. A wallet needs a few notes. A till needs a handful of each denomination. A vault needs stacks. Our [how much prop money guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) explains the method, and the stack tiers run from a Starter Stack at $115 to 100 Stacks at $14,000. Orders start at $300 AUD and delivery is free from $500 AUD, with a 10% discount for crypto payments.\n\n## Period and international notes\n\nProductions set in earlier decades sometimes need older note designs, which have different colours and sizes. If your story is set in the past, tell the art department early, and read our [history of Australian currency notes for set designers](/blog/brief-history-of-australian-currency-notes-for-set-designers/). Productions shooting overseas stories may need other currencies, which PROPPS does not currently supply. We make Australian dollar props only.\n\n## Compliance\n\nEvery PROPPS note carries permanent specimen markings, is printed on matte paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Never spend them, and keep them under the prop master's control. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [compliance page](/compliance/) for the full standard.\n\n## Reading a denomination mix from the script\n\nStart with the character. A student with a part-time job carries a few $20 notes and some coins. A tradesperson paid in cash carries a roll of $50s and $20s. A bank manager has crisp, strapped bundles. A small-time crook has a mix of everything, crumpled and folded. A retail worker has a till of small notes and a bag of coins. When the script says \"he pays\", ask what he is paying for. A coffee is a $5 or a $10. A used car is a bundle of $100s. The denomination is part of the story.\n\n## Denominations and the size of the sum\n\nAudiences judge the size of a sum by the size of the stack and the colour on top. A thin stack of $100s reads as a few thousand dollars. A thick stack of $20s reads as the same sum but looks a little desperate. If a scene needs to feel like a lot of money in a small space, use $100s. If it needs to feel like money scraped together, use $20s and $10s. Our [$100 bundle size guide](/blog/100-dollar-prop-money-which-bundle-size/) shows how many stacks the camera needs.\n\n## Mixing mistakes to avoid\n\n- **All one denomination.** A till or a wallet of only $100 notes looks staged.\n- **Too many large notes in everyday scenes.** A shop till rarely holds many $100s.\n- **Uniform wear.** Real notes in the same wallet have different ages.\n- **Ignoring colour in the grade.** If the grade desaturates greens, a $100 stack may lose its punch. Check the notes in the grade, not only on set.\n- **Forgetting continuity.** If a character pays with a $50 and receives change, the notes on screen should add up.\n\n## Ordering by denomination\n\nEach denomination is a separate product in the [New Notes range](/shop/new-notes/), and the stack tiers are the same across all five. For a typical drama, order the hero denominations in the larger tiers and the small ones in a Starter Stack. A single order combining several denominations also helps reach the $300 minimum and the $500 free delivery threshold. If you are unsure about the mix, send the scene list through the [contact page](/contact/) and we will suggest one.\n\n## Small details that sell the cash\n\nRubber bands, paper clips and folded receipts make a bundle look like it belongs to a person. A $5 note folded in half in a back pocket tells a different story from the same note flat in a wallet. Think about how the money is carried, not just what it is.\n\n## Where to go next\n\nBrowse the [New Notes range](/shop/new-notes/), compare the individual denominations above or [contact the studio](/contact/) with your scene list.",
    faqs: [
      {
        "q": "Which Australian banknotes are best for film and TV scenes?",
        "a": "Use $100 and $50 notes for hero stacks and close-ups, and $20, $10 and $5 notes for tills and wallets. Browse the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "How many denominations should a cash scene use?",
        "a": "Two or three is typical. A drawer or wallet of one denomination looks staged. See [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Can PROPPS supply older Australian note designs?",
        "a": "Our range covers the five current denominations. For period work, read our [history of Australian currency notes](/blog/brief-history-of-australian-currency-notes-for-set-designers/) and contact the studio."
      },
      {
        "q": "Do the colours read the same under different lights?",
        "a": "No. Check on the monitor and adjust the light, not the notes. Our [lighting guide](/blog/lighting-prop-money-for-camera-avoiding-glare/) explains how."
      },
      {
        "q": "Are the notes legal to use on set?",
        "a": "Yes, as marked, non-legal tender props. Never spend them. See our [compliance page](/compliance/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'brief-history-of-australian-currency-notes-for-set-designers',
    title: 'A Brief History of Australian Currency Notes for Set Designers',
    seoTitle: 'Australian Currency History for Set Designers',
    excerpt: 'Old Australian money notes for period sets: a short history of Australian banknotes and what set designers need to know about eras and wear. Plan period cash.',
    category: 'Art Department',
    date: '2026-05-30',
    readTime: '12 min read',
    image: 'brief-history-of-australian-currency-notes-for-set-designers.webp',
    imageAlt: 'Australian currency notes history — fanned $50 specimen prop note stack for set designers',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: "A period drama set in the 1970s does not want a crisp note from last year in the till. A story set in the 1960s may need a different currency altogether. Getting old Australian money notes right on screen takes a little knowledge of the history, because the colours, sizes, designs and even the materials of Australian currency have changed several times. This guide is a short history of Australian banknotes written for set designers, art directors and prop masters. It is not a collectors' catalogue and not a guide to identifying genuine notes. It explains the main eras, what changed and how to dress period cash on screen. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nAustralia moved from pounds to dollars in 1966, issued paper notes for several decades, introduced polymer banknotes from 1988 and has been updating its designs ever since. For a period set, work out the year of the scene, check what was in circulation and agree the level of accuracy with the director. Many productions choose a plausible look and weathering rather than an exact match, and always keep the notes clearly marked as props.\n\n## Before decimal currency\n\nBefore 1966, Australia used pounds, shillings and pence. Notes were issued in pound denominations and were larger and plainer than modern notes. A scene set before the mid-1960s needs a different currency entirely, so the dollar notes in our range are not suitable. For these stories, talk to a specialist prop house and the production's researcher.\n\n## The move to dollars\n\nDecimal currency was introduced in February 1966. The first dollar notes were printed on paper, with a family of colours that made each denomination easy to tell apart. For scenes set from the late 1960s through the 1980s, paper notes with these older looks would have been in the till. These notes are different in size, colour and design from modern notes, so a period set that uses a modern note will look wrong to anyone who remembers the era.\n\n## The polymer era\n\nAustralia was an early adopter of polymer banknotes, with the first issued in 1988 for the bicentenary, and a full polymer series followed in the 1990s. Polymer notes last longer, have clear windows and are harder to copy. For scenes set in the 1990s and 2000s, the notes in a wallet would be polymer, with the designs of that series.\n\n## The current series\n\nThe Reserve Bank has updated the designs in recent years, introducing new security features and new artwork across the denominations. The current series is what appears in contemporary stories. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes information on its banknotes. Our range covers the five current denominations: $5, $10, $20, $50 and $100. See the [New Notes range](/shop/new-notes/).\n\n## What this means for set design\n\n1. **Decide the year of each scene.** A story that jumps between decades may need different cash in each timeline.\n2. **Work out what is visible.** Many scenes show only a corner of a note, which makes accuracy less critical.\n3. **Match the wear to the era.** Old paper notes were soft and often creased. Polymer notes keep their shape longer.\n4. **Choose accuracy to suit the shot.** A close-up on a note needs more care than a background till.\n5. **Ask for advice.** A researcher, a dialogue coach or a prop house with period experience can save a lot of time.\n\n## Dressing period cash with current notes\n\nIf a production cannot source period notes, an art department sometimes dresses current-style notes to suggest age. This is a compromise, and it only works when the notes are in the background or the shot is wide. Our notes are matte paper with a soft finish, and they take weathering well. Read our [art department guide to weathering prop cash](/blog/art-department-guide-weathering-prop-cash/) for methods. Avoid close-ups of a note that is visibly the wrong era.\n\n## Colours and denominations over time\n\nDenominations have changed along with the designs. The mix of notes that a character would carry in 1975 is not the mix a character would carry today. The $100 note is now associated with large payments, but in earlier decades the largest note in everyday use was lower, and a bundle of the top denomination would look different on screen. When in doubt, ask your researcher what the character would plausibly carry in the year of the scene.\n\n## Period details that matter more than the note\n\nOften the details around the money say more about the era than the note itself. A leather purse, a brown envelope, a pay packet with a name on the front, a cash register with mechanical keys, a coin tray, an old wallet with a worn crease: these are the details the camera picks up. Spend time on them, and the notes will sit comfortably alongside.\n\n## Planning quantities for a period scene\n\nPeriod scenes often use less cash than modern ones, because people carried smaller sums and used fewer large notes. A pay packet might hold a handful of notes. A shop till might hold a drawer of small denominations. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) explains how to count what the camera sees.\n\n## Compliance\n\nWhatever era you dress, the notes must be clearly marked props. Every PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Never spend them. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [compliance page](/compliance/).\n\n## Delivery and ordering\n\nPROPPS orders start at $300 AUD, ship by [Australia Post](https://auspost.com.au/) Express with signature on delivery and are free to deliver from $500 AUD. Crypto payments receive a 10% discount.\n\n## A short method for researching your era\n\n1. **Fix the year.** Write the year on the scene breakdown.\n2. **Find reference photos.** Archive photographs, adverts and film stills of the era show cash in use.\n3. **Check with a researcher.** Many productions have one, and local libraries and museums often help.\n4. **Decide the level of accuracy.** A close-up needs more than a wide.\n5. **Record the decision.** Put it on the prop schedule so the next department knows.\n\n## What to ask the director\n\nAsk how visible the money is, whether any shot is an insert on a note, how much the era matters to the story and whether the production will have audiences who know the era well. A period drama broadcast to an audience that lived through the decade will notice a wrong note. A comedy with a quick cut to a till may not. The answers set the budget and the effort.\n\n## Three period examples\n\n**A 1970s pay packet.** A brown envelope with a name on the front, a handful of notes inside and a few coins. The camera sees the envelope and a corner of paper, so the note itself matters little. Spend the effort on the envelope.\n\n**A 1990s shop till.** A drawer of mixed notes and coins, with a cash register in view. The register and the receipts carry the era. A few matching notes are enough.\n\n**A modern wallet.** The camera sees a few notes as a character pays. Use current-series notes, lightly weathered. Our [New Notes range](/shop/new-notes/) covers this.\n\n## Period mistakes to avoid\n\n- **Using a current note in a period close-up.** Anyone who remembers the era will notice.\n- **Over-ageing.** Notes in a wallet are soft, not filthy.\n- **Forgetting the supporting detail.** Wallets, envelopes, registers and receipts date a scene more than the money does.\n- **Ignoring the shot.** If the note is out of focus, do not pay for accuracy you cannot see.\n- **Skipping the paperwork.** Even period reproductions must be marked and documented. See our [compliance page](/compliance/).\n\n## Working with the rest of the art department\n\nCash is only one part of a period look. Talk to the costume department about wallets and purses, to the set decorator about registers and counters and to graphics about receipts and pay packets. Agreeing the details together means the money is never the odd one out in a frame.\n\n## Where to go next\n\nSee the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/), browse the [New Notes range](/shop/new-notes/) or [contact the studio](/contact/) with your period and your scene list.",
    faqs: [
      {
        "q": "Do you sell old Australian money notes for period sets?",
        "a": "Our range covers the five current denominations. For period work, [contact the studio](/contact/) to talk through what is possible, and see the [New Notes range](/shop/new-notes/) for the notes we make."
      },
      {
        "q": "When did Australia switch to dollars?",
        "a": "Decimal currency was introduced in February 1966, replacing pounds, shillings and pence. Scenes set earlier need a different currency."
      },
      {
        "q": "When did polymer notes start?",
        "a": "Australia issued its first polymer banknote in 1988, with a full polymer series following in the 1990s. See the [Reserve Bank banknote pages](https://www.rba.gov.au/banknotes/)."
      },
      {
        "q": "Can I age current notes for a period scene?",
        "a": "For background shots, yes. Close-ups of a visibly wrong-era note will not hold up. Read our [art department guide](/blog/art-department-guide-weathering-prop-cash/)."
      },
      {
        "q": "Are prop notes legal to use in a period drama?",
        "a": "Yes, as marked, non-legal tender props. See our [compliance page](/compliance/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'buying-film-props-in-australia-a-checklist-for-art-departments',
    title: 'Buying Film Props in Australia: A Checklist for Art Departments',
    seoTitle: 'Buying Film Props in Australia: A Checklist',
    excerpt: 'Movie props Australia buying checklist for art departments: briefs, suppliers, budgets and delivery for cash and currency props. Buy with confidence.',
    category: 'Art Department',
    date: '2026-06-19',
    readTime: '12 min read',
    image: 'buying-film-props-in-australia-a-checklist-for-art-departments.webp',
    imageAlt: 'Buy film props australia — bundled specimen prop currency stacks checklist',
    relatedCategories: ['film-and-tv-props'],
    relatedProducts: ['film-and-tv-prop-currency-pack'],
    content: "Buying props for a screen production in Australia is a mix of planning, sourcing and paperwork. Furniture can be hired, costumes can be made, but cash and currency need special care, because the law treats reproductions of banknotes differently from a chair or a lamp. This guide is a buying checklist for art departments, prop masters and line producers. It covers how to brief, where movie props in Australia come from, what to check before you order, how to budget, how to handle delivery and storage and how to keep the paperwork in order, with a focus on currency props. It is general information, not legal advice. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nList every cash scene, count what the camera sees, choose a specialist supplier with marked notes, an ABN and signed-for delivery, order the full quantity once, and file the invoice. For currency, the supplier matters as much as the price, because markings, paper and paperwork are what keep the props lawful and the production protected.\n\n## Step one: write the brief\n\nA clear brief prevents most buying problems. For each cash scene, note:\n\n1. **What is shown.** A wallet, a till, a briefcase, a vault.\n2. **How it is handled.** Held, counted, thrown, hidden or left on a table.\n3. **The camera distance.** Wide, medium, close-up or insert.\n4. **The number of takes and set-ups.**\n5. **The look.** New, used or aged.\n6. **The era.** Contemporary or period.\n7. **The date.** When the notes must be on set.\n\nShare the brief with the director and the DOP, and keep a copy on the production file.\n\n## Step two: choose where to buy\n\nMovie props Australia wide come from several sources.\n\n- **A prop hire house.** Good for furniture and general set dressing. Currency stock is usually limited.\n- **A specialist currency studio.** Best for cash scenes that need volume, matching stacks and paperwork. PROPPS is one, based in Eltham, Melbourne, supplying Australian productions since 2019.\n- **A general prop shop.** Useful for small items and last-minute needs.\n- **Overseas marketplaces.** Cheap and fast to find, but with weaker markings, longer delivery and more legal risk. See [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).\n- **Making your own.** Not recommended for currency.\n\nYou can buy movie props online in Australia for the cash scene from a specialist, and keep the rest of the set dressing with a general supplier. See [film and TV props](/shop/film-and-tv-props/) for our currency packs.\n\n## Step three: check the supplier\n\nBefore you order currency props, check:\n\n1. **Specimen markings on every note.** Ask for a photo of the front and back of a real note.\n2. **Paper.** Genuine Australian banknotes are polymer. Reproductions on paper are easy to tell apart by touch. PROPPS prints on 120gsm matte archival paper.\n3. **Business details.** An ABN, a physical address and a working phone number.\n4. **Honest descriptions.** The listing should say the notes are non-legal tender props.\n5. **Delivery.** Traceable shipping with a signature.\n6. **Policies.** Published shipping, refund and privacy policies.\n7. **Paperwork.** An invoice for the production file.\n\nOur guide to [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) goes through these in detail.\n\n## Step four: size the order\n\nCount the stacks the camera sees, add the hidden ones, double for repeat set-ups and keep one sealed as a reserve. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) gives examples, and the stack tiers run from a Starter Stack at $115 to 100 Stacks at $14,000. Orders start at $300 AUD.\n\n## Step five: set the budget\n\nA currency budget has four lines.\n\n- **Notes.** Priced by stack tier and denomination.\n- **Delivery.** Free from $500 AUD at PROPPS.\n- **Weathering and prep.** Art department time and materials.\n- **Reserve.** A sealed stack for late changes.\n\nIf the production will need cash across a season, ask about wholesale tiers. See the [wholesale guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/) and the [wholesale page](/wholesale/).\n\n## Step six: plan delivery and storage\n\nExpress Post needs a signature, so nominate someone at the delivery address. Dispatch leaves our Melbourne studio within 24 business hours of payment. Plan delivery a few days before the first cash scene, not the morning of. On arrival, check the count and the condition, file the invoice and store the notes with the prop master in a secure, dry place. Read [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for timing.\n\n## Step seven: keep the paperwork\n\nA simple production file covers most questions from insurers, location owners and police:\n\n- The supplier's invoice, with the business name, ABN and address.\n- A photo of the front and back of a note.\n- A line in the call sheet or prop schedule naming the scene and the person responsible.\n- A log of notes in and out each day.\n\nOur [compliance page](/compliance/) and [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explain the standard behind the markings.\n\n## Common buying mistakes\n\n- **Leaving it until the week of the shoot.** Express dispatch is fast, but a late order costs more.\n- **Choosing on price alone.** A cheap listing often means no markings, no invoice and no one to call.\n- **Forgetting the reserve.** A late change forces a rush.\n- **No storage plan.** Notes left in a car or on location are a risk.\n- **No paperwork.** A reshoot or an insurance question needs the file.\n\n## Hire or buy?\n\nFurniture, lamps and large set pieces are usually hired, because the production does not need them after the shoot. Consumables, such as cash, food and anything that will be damaged or weathered, are bought. Currency sits in the second group: weathered notes cannot go back on the shelf, and many productions want a matching reserve for pickups. If the same cash appears across a series, buying once and reusing is usually cheaper than hiring repeatedly.\n\n## Working with a supplier\n\nA good supplier makes the job easier. Send a short brief with the scenes, the quantities, the denominations and the dates. Ask for the invoice and a photo of the notes. Confirm the delivery address and who will sign. Ask about reorder options if the script changes. If you have questions about marking, packaging or timing, ask before you order, not after. A supplier who answers quickly before the sale will answer quickly after it.\n\n## Handling a late change\n\nScripts change. A table spread becomes a vault, a second day of shooting is added, a reshoot appears. A sealed reserve is the first defence. The second is a supplier who can dispatch fast: PROPPS dispatches within 24 business hours of payment by Australia Post Express. The third is a clear order history, so you can reorder matching stock. Tell the studio what changed and when you need the notes, and we will say what is realistic.\n\n## After the shoot\n\nAt wrap, count the notes, bag them and label the box with the scene, the date and the count. Decide whether to keep them for pickups, reuse them on another job or store them with the production records. Do not leave notes loose in a vehicle or a location. Keep the invoice and the log together. If the production ends, store or dispose of the notes sensibly, and never let them out into circulation.\n\n## A one-page buying checklist\n\n1. Brief written and shared.\n2. Supplier chosen and checked.\n3. Quantity sized from the shots.\n4. Reserve included.\n5. Budget approved.\n6. Delivery date and signer confirmed.\n7. Storage plan agreed.\n8. Invoice and photo filed.\n9. Daily count in place.\n10. Wrap plan agreed.\n\n## Questions to ask before you pay\n\n1. Are the notes marked, and can I see a photo?\n2. When will the order dispatch, and how will it travel?\n3. Who needs to sign for it?\n4. Can I reorder matching stock later?\n5. Will I get an invoice and a written description for the production file?\n6. Is there a price break for a larger or repeat order?\n\nA supplier who answers all six in a few lines is a supplier worth using. If the answers are vague, that is information too. Keep the replies with the production file in case a question comes up after the shoot.\n\n## Lead times and last-minute buys\n\nGood props are rarely last-minute. Allow a few days between order and first use, more if the address is remote or the delivery needs a signature from someone who is on set all day. If you must order late, tell the supplier the date and the delivery address at the start, and ask what is realistic before you pay.\n\n## Questions to ask before you pay\n\n1. Are the notes marked, and can I see a photo?\n2. When will the order dispatch, and how will it travel?\n3. Who needs to sign for it?\n4. Can I reorder matching stock later?\n5. Will I get an invoice and a written description for the production file?\n6. Is there a price break for a larger or repeat order?\n\nA supplier who answers all six in a few lines is a supplier worth using. If the answers are vague, that is information too. Keep the replies with the production file in case a question comes up after the shoot.\n\n## Where to go next\n\nBrowse [film and TV props](/shop/film-and-tv-props/), the [New Notes range](/shop/new-notes/), or [contact the studio](/contact/) with your brief.",
    faqs: [
      {
        "q": "Where can I buy movie props in Australia?",
        "a": "Furniture and general dressing come from hire houses and prop shops. For cash and currency, use a specialist studio with marked notes, such as PROPPS. See [film and TV props](/shop/film-and-tv-props/)."
      },
      {
        "q": "What should I check before buying currency props?",
        "a": "Specimen markings on every note, paper rather than polymer, an ABN and address, honest descriptions, signed-for delivery and an invoice. See [where to buy prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/)."
      },
      {
        "q": "How much should I budget for cash scenes?",
        "a": "Size the order from what the camera sees, then price by stack tier. Orders start at $300 AUD. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Do I need paperwork for prop currency?",
        "a": "Keep the supplier invoice, a photo of a note and a log of notes in and out. See our [compliance page](/compliance/)."
      },
      {
        "q": "Can I buy movie props online for a series?",
        "a": "Yes. For a season, ask about wholesale tiers on the [wholesale page](/wholesale/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right',
    title: 'Prop Cash for Heist and Bank Scenes: Getting the Volume Right',
    seoTitle: 'Prop Cash for Heist & Bank Scenes: How Much?',
    excerpt: 'Money stack Australia guide for heist and bank scenes: how to size vaults, bags and counters, and fill the frame without overspending. Plan your cash reveal.',
    category: 'Production Planning',
    date: '2026-07-09',
    readTime: '12 min read',
    image: 'prop-cash-for-heist-and-bank-scenes-getting-the-volume-right.webp',
    imageAlt: 'Money stack australia — bundled specimen prop currency stacks for heist scenes',
    relatedCategories: ['money-stacks'],
    relatedProducts: ['bulk-money-stack-pack'],
    content: "Heist films live and die on the money shot. The vault door opens, the camera pans across rows of bundled cash, and the audience believes the stakes. Getting the volume wrong in either direction hurts: too little and the vault looks half-empty, too much and the budget disappears into bundles the lens never sees. This guide shows how to plan a money stack Australia productions can afford for heist, bank and cash-room scenes. It covers how to count what the camera sees, how to build a vault, how to dress bags, counters and tables, how to use depth and filler, and how to plan quantities, delivery and reuse. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nCount shelves, pallets and bags in the frame, work out how many bundles each holds, put hero stacks at the front and let depth and filler handle the rest. A modest vault is about 10 stacks, a larger set with pallets suits 50 Stacks and a full cash room is where 100 Stacks and a wholesale conversation make sense. Order once, keep a reserve and keep notes under the prop master's control.\n\n## What the camera really sees\n\nA vault is mostly shape. The camera sees the front face of each bundle, the colour and the pattern of stacks, not the cash behind. That is why hero stacks at the front matter and the rest can be matching stock or filler. Think of the set as layers.\n\n- **Foreground.** Hero stacks, held or placed within reach of the actor. These are the notes in close-up.\n- **Midground.** Bundles on shelves, tables and in open bags. Matching stacks keep continuity.\n- **Background.** Depth of field blurs these. Colour and shape matter more than detail.\n\n## Sizing a vault, step by step\n\n1. **Measure the set.** Count shelves, bays, pallets, cages and open bags.\n2. **Estimate bundles per unit.** How many bundles does a shelf hold? How many does a pallet hold?\n3. **Multiply.** Bundles per unit times units gives total bundles.\n4. **Convert to stacks.** Our stack tiers are Starter, 1, 5, 10, 50 and 100 Stacks. Find the nearest tier.\n5. **Split by layer.** Put hero stock in the foreground and matching stock behind.\n6. **Add a reserve.** One sealed stack is cheap insurance.\n\nFor the tiers and prices, see [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/) and [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/).\n\n## Bags, briefcases and counters\n\n### A bag or briefcase\n\nA briefcase opened to the camera shows a thick bundle on top and stacks packed tight. Five stacks usually fill a briefcase to the lip. Put $100 and $50 notes on the visible faces and filler beneath.\n\n### A bank counter\n\nA teller counter needs a handful of hero bundles on the surface and a mix of denominations in the drawer. A Starter Stack plus a 1 Stack often covers a counter and a till. Mix in $20 and $10 notes for the drawer, as the [banknote denominations guide](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) explains.\n\n### A table spread\n\nA table needs volume without depth. One or two stacks, loosely arranged, read as a natural pile. Avoid a perfect grid.\n\n### A duffel or sports bag\n\nA bag unzipped shows the top layer of bundles. Pack a few hero bundles on top and fill the rest with filler. Add a few loose notes at the opening for a lived-in look.\n\n## Depth, filler and tricks\n\nArt departments rarely fill a whole vault with hero notes. These are the usual tricks.\n\n1. **Hero faces, cheap cores.** Wrap hero notes around filler blocks so the faces read as cash.\n2. **Repeat stacks.** The same stack moved between shots reads as a larger pile on screen.\n3. **Use depth of field.** Blur hides detail.\n4. **Mix colours.** Strapped $100 and $50 bundles together look richer than one colour.\n5. **Break the order.** Spilled notes and a half-open bag add realism.\n6. **Frame tight.** A tight shot needs fewer stacks than a wide.\n\n## Weathering and continuity\n\nA bank vault is clean, a getaway bag is rough. Weather the notes that are handled, leave the vault bundles crisp and keep a log of what went where. Our [art department guide](/blog/art-department-guide-weathering-prop-cash/) covers the methods. Photograph the set-up before the first take, and reset to the photo for every take. Count the stacks in and out at the end of each day.\n\n## Lighting a vault\n\nA vault is a hard set to light, because shelves and cages cast shadows and metal throws reflections. Keep light soft, flag the key off the lens axis and test the notes at working distance. Our [lighting guide](/blog/lighting-prop-money-for-camera-avoiding-glare/) goes through it. Matte paper helps, because it avoids hot spots.\n\n## Planning quantities, delivery and reuse\n\nOrder the full quantity once for a block of shooting. PROPPS orders start at $300 AUD, ship by [Australia Post](https://auspost.com.au/) Express with signature on delivery and are free to deliver from $500 AUD, with a 10% discount for crypto payments. For larger orders, ask about wholesale tiers of 10% to 30% off on the [wholesale page](/wholesale/). After the shoot, keep the stacks for pickups and reshoots, or reuse them in another scene.\n\n## Safety and compliance on a heist set\n\nA heist scene is the kind of scene that attracts attention, especially on location. If you shoot in or near a bank or a shop, tell the venue and the local police beforehand, and keep the supplier invoice on set. Keep notes under the prop master's control, never leave them in a vehicle, and never let background performers keep souvenirs. Every PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [Reserve Bank guidance](https://www.rba.gov.au/banknotes/).\n\n## Planning the shot list around the money\n\nWork with the director to list the money shots. The vault reveal, the bag being filled, the counter exchange and the final spill are all different shots with different needs. Some need volume, some need quality. A pan across shelves needs matching stacks. A close-up on a hand picking up a bundle needs a hero stack. Rank the shots by importance and spend the budget where the camera lingers.\n\n## Fire, water and special effects\n\nIf a scene involves fire, water, dust or explosions near the cash, talk to your special effects supervisor early. Paper notes burn, swell and stain, so plan for duplicates and protect the stock you need for other scenes. Do not use real flame near prop notes without the supervisor and the safety plan in place, and keep a separate set of notes for the effect shots, so the hero stock stays clean.\n\n## Crowds, extras and the public\n\nA heist scene shot in public draws attention. Tell the venue and the local police beforehand, brief the extras that the notes are props and keep them under the prop master. Do not hand notes to background performers. If a member of the public asks, show the specimen markings and the invoice. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains why the markings matter.\n\n## Wrap and clean-up\n\nAt the end of the day count the stacks, bag them, label the bags and lock them away. Collect spilled notes from the floor, the bags and the set. Check pockets, bags and vehicles before the crew leaves. A missing note is a small problem on a set and a bigger one on a street. Log the count and the condition, and store the weathered and clean stock separately.\n\n## Budget notes for a heist sequence\n\nA heist sequence usually has more than one cash moment: the reveal, the handover, the escape and the aftermath. Budget the notes across the whole sequence, not scene by scene, and reuse stacks where the story allows. A single large order with a reserve is almost always cheaper than three small ones, and the stacks will match.\n\n## Reusing stock across a sequence\n\nStacks that appear in the vault can reappear in the van, the safehouse and the final reveal, provided continuity allows. Photograph each set-up, tag the stacks and keep a movement log, so the same bundles look the same in every scene. Reuse saves money and makes the cash feel like one story rather than several props.\n\n## Budget notes for a heist sequence\n\nA heist sequence usually has more than one cash moment: the reveal, the handover, the escape and the aftermath. Budget the notes across the whole sequence, not scene by scene, and reuse stacks where the story allows. A single large order with a reserve is almost always cheaper than three small ones, and the stacks will match.\n\n## Where to go next\n\nBrowse [money stacks](/shop/money-stacks/), the [New Notes range](/shop/new-notes/) or [contact the studio](/contact/) with your vault dimensions and shot list.",
    faqs: [
      {
        "q": "How much prop cash do I need for a vault scene?",
        "a": "About 10 stacks for a modest vault, 50 Stacks for a larger set and 100 Stacks for a full cash room. Count shelves and pallets first. See [money stacks](/shop/money-stacks/)."
      },
      {
        "q": "How do I make a small money stack order look bigger?",
        "a": "Put hero notes at the front, use filler behind, repeat stacks between shots and use depth of field. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "What denominations suit a heist scene?",
        "a": "Strapped $100 and $50 bundles for the vault and a mix of smaller notes for tills. See the [denominations guide](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/)."
      },
      {
        "q": "Can I get a bulk price for a vault set?",
        "a": "Yes. For 50 and 100 stack runs and repeat orders, use the [wholesale page](/wholesale/)."
      },
      {
        "q": "Is it safe to shoot a heist scene on location with prop cash?",
        "a": "Tell the venue and local police beforehand, keep the invoice on set and never leave notes unattended. See our [compliance page](/compliance/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'prop-money-for-content-creators-social-media-and-photoshoot-guidelines',
    title: 'Prop Money for Content Creators: Social Media & Photoshoot Guidelines',
    seoTitle: 'Prop Money for Content Creators: Guidelines',
    excerpt: 'Prop money for content creators: how to use marked prop notes in music videos, social posts and photo shoots without misleading viewers. Create safely.',
    category: 'Photography',
    date: '2026-07-19',
    readTime: '13 min read',
    image: 'prop-money-for-content-creators-social-media-and-photoshoot-guidelines.webp',
    imageAlt: 'Fake australian money for content creators — handheld fan of $50 specimen prop notes',
    relatedCategories: ['photography-props'],
    relatedProducts: ['photography-prop-currency-set'],
    content: "Cash looks great on camera. A fan of notes in a music video, a stack on a desk in a business reel, a scatter on a bed in a fashion shoot: prop money is a staple of content creation. It is also the kind of image that gets shared, screenshotted and misunderstood. A clip that looks like a real giveaway, a real payment or a real stash can attract complaints, platform strikes and uncomfortable questions. This guide is written for content creators, music video directors, social media managers and photographers. It explains how to use prop money for content creators safely, how to present it honestly, how to light and style it, how much to buy and what to avoid. It is general information, not legal advice. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nUse marked prop notes, keep them clearly props in the frame or the caption, never present them as real cash, a real giveaway or a real payment, keep them inside the shoot and never spend them. A fan, a stack and a few loose notes cover most content. Buy matte, double-sided notes so they read well on camera.\n\n## Why creators use prop money\n\nReal cash is a poor choice for content. It is risky to carry, hard to insure and impossible to match across a series of shots. It cannot be weathered, thrown or cut. Prop money is consistent, replaceable and safe to handle, and it can be styled to match the brief. For music videos, which often use cash as a visual shorthand for success, and for social media, where a quick cash shot grabs attention, prop notes are the practical option.\n\n## What counts as honest presentation\n\nThe risk with cash content is not the notes. It is the message. A few simple rules keep the message honest.\n\n1. **Do not suggest the money is real if it is not.** A caption such as \"I just won\" over a stack of prop notes is misleading.\n2. **Do not run a cash giveaway with prop money.** A giveaway promises something real. If you are giving away real money, use real money and follow the platform and legal rules for competitions.\n3. **Do not pay anyone with prop notes.** Not as a joke, not as a test.\n4. **Do not hand prop notes to strangers on camera.** A clip of a stranger accepting a bundle looks like a real gift.\n5. **Caption it.** \"Prop money\" or \"specimen notes\" removes doubt.\n6. **Show the markings sometimes.** A close-up of the specimen marking in one frame makes the prop obvious.\n\n## Music videos\n\nMusic videos use cash for texture, status and story. A few practical points:\n\n- **Plan the money shots.** A fan for a close-up, a stack on a table, a bag for a scene that ends in a getaway.\n- **Choose denominations for colour.** $100 and $50 notes read strongly on camera. Our guide to the [best Australian banknote denominations](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) helps.\n- **Light it softly.** Cash under hard light shows glare. Read our guide to [lighting prop money](/blog/lighting-prop-money-for-camera-avoiding-glare/).\n- **Brief the cast and crew.** Dancers, extras and friends in the shot need to know the notes are props and must not be taken home.\n- **Shoot in controlled places.** A studio or a private location is safer than a public street. If you shoot in public, tell the venue and the local police beforehand.\n- **Count in and out.** One person holds the notes and counts them at the end of the day.\n\n## Social media content\n\nShort videos and photos travel fast and lose their context quickly. A clip with prop cash may be shared without the caption. A few extra steps help:\n\n1. **Put the context in the video, not only the caption.** A line of on-screen text saying \"prop money\" survives a share.\n2. **Avoid titles that imply a real payout.** A title such as \"I gave away $10,000\" is a claim, and platforms and regulators may treat it as one.\n3. **Show the setup.** A behind-the-scenes shot with the notes on a prop table makes the context clear.\n4. **Check platform rules.** Some platforms have policies about depicting money, giveaways and scams.\n5. **Respond to comments.** If a viewer asks whether the money is real, say it is a prop.\n\n## Photo shoots\n\nA photo shoot is the easiest place to use prop money well, because it happens in a controlled environment. Use a fan, a stack and a few loose notes. Light them from the side to avoid glare. Keep fingerprints off the surface. Our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/) goes through styling and lighting in detail.\n\n## What to buy\n\nA single creator or small crew needs less than a film set. Plan on:\n\n- **One hero set.** A fan of notes and a strapped stack.\n- **A few loose notes.** For scatter and continuity.\n- **A reserve.** A sealed stack in case a note is damaged.\n\nPROPPS orders start at $300 AUD, ship by [Australia Post](https://auspost.com.au/) Express with signature on delivery and are free to deliver from $500 AUD. Crypto payments receive a 10% discount. A Starter Stack plus a 1 Stack clears the minimum at $315 and covers most creator needs. Our guide to [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/) helps you size an order, and the [New Notes range](/shop/new-notes/) shows the options.\n\n## What the law cares about\n\nThe Commonwealth Crimes (Currency) Act 1981 is aimed at counterfeit currency and at reproductions that could deceive a reasonable person. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions. Marked prop notes used as props are treated very differently from notes made to pass as real. Never spend prop notes, never offer them as payment and never present them in a way that could mislead. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [compliance page](/compliance/) for the standard PROPPS builds to. If you have a concern about counterfeit currency, the [Australian Federal Police](https://www.afp.gov.au/) is the contact.\n\n## Common creator mistakes\n\n- **Running a fake giveaway.** Not worth the risk.\n- **Leaving notes in a car or a bag.** They end up where they should not.\n- **Cropping out the markings.** Keep them visible in some frames.\n- **Posting without context.** A caption saves trouble.\n- **Letting friends keep notes.** One note in a wallet becomes a question.\n- **Using play money for a close-up.** It looks like a toy. See [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/).\n\n## A creator checklist\n\n1. Marked notes ordered with an invoice.\n2. One person in charge of the notes.\n3. Cast and crew briefed.\n4. Context planned for the caption and the video.\n5. Lighting tested.\n6. Notes counted in and out.\n7. Notes stored safely after the shoot.\n\n## Working with brands and sponsors\n\nIf a brand sponsors your content, tell them how the money will be used. Brands care about how a video looks next to their name, and some have rules about showing cash. Agree the caption, the on-screen text and the way the notes are handled before you shoot. A short written note covering \"marked prop notes, never spent, never offered as a prize\" avoids misunderstandings later.\n\n## Handling comments and questions\n\nViewers ask whether the money is real. Answer plainly. A pinned comment or a reply that says the notes are specimen-marked props takes the heat out of the thread. If someone suggests the clip is a scam, correct it early and keep a screenshot of the markings and the invoice. A calm, factual reply protects your channel and your sponsors.\n\n## A simple shoot-day routine\n\n1. Count the notes in and photograph them.\n2. Brief everyone on set about the notes.\n3. Shoot the money shots first, while the notes are fresh.\n4. Keep the notes on a tray, not in pockets.\n5. Count out at the end and bag them.\n6. Store the bag with the shoot kit, not in a bag you carry around town.\n\n## Keeping your channel safe\n\nPlatforms respond to complaints quickly. Keep the invoice, a photo of the markings and a note of the shoot date in a folder, so you can answer a query in minutes. Avoid thumbnails that show a stack with a claim of a win. A calm, clear explanation usually settles a dispute.\n\n## Where to go next\n\nSee the [photography props range](/shop/photography-props/), the [New Notes range](/shop/new-notes/) or [contact the studio](/contact/) with your brief.",
    faqs: [
      {
        "q": "Can I use prop money in a music video?",
        "a": "Yes, when the notes are marked props and you keep them controlled on set. Never spend them or hand them to strangers. See the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "Can I post prop money on social media?",
        "a": "Yes, with context. Caption it as prop money, avoid titles that imply a real payout and show the markings in some frames. Read our [compliance page](/compliance/)."
      },
      {
        "q": "Can I do a cash giveaway with prop money?",
        "a": "No. A giveaway promises something real, and prop notes are not legal tender. Use real money and follow the platform and legal rules if you want to run a giveaway."
      },
      {
        "q": "How much prop money does a creator need?",
        "a": "A fan, a stack and a few loose notes cover most content. A Starter Stack plus a 1 Stack clears the order minimum. See [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "How do I keep prop money from glaring on camera?",
        "a": "Use matte paper, soft light at an angle off the lens axis and test before the shoot. See our [lighting guide](/blog/lighting-prop-money-for-camera-avoiding-glare/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'toy-money-and-play-money-for-kids-games-and-learning',
    title: "Toy Money and Play Money for Kids' Games and Learning",
    seoTitle: "Toy Money & Play Money for Kids' Games",
    excerpt: 'Toy money Australia guide: how to choose play money for kids, classrooms and games, what to look for and how to teach with it. Find the right pack today.',
    category: 'Buying Guide',
    date: '2026-08-08',
    readTime: '10 min read',
    image: 'toy-money-and-play-money-for-kids-games-and-learning.webp',
    imageAlt: 'Toy money australia for kids games — handful of $20 and $50 specimen prop notes',
    relatedCategories: ['event-and-party-props'],
    relatedProducts: ['event-and-party-prop-cash-pack'],
    content: "Toy money is one of the oldest teaching tools in the classroom and one of the most popular props for children's games. A pile of bright notes turns a lounge room into a shop, a bank or a casino, and it teaches counting, addition, change and the basics of budgeting without any real cash on the table. This guide explains how to choose toy money in Australia, what separates a good pack from a poor one, how to use it for learning and games, how much to buy and what safety and legal points to keep in mind. It is general information, not legal advice. All PROPPS products are non-legal tender props, and our play money packs carry visible markings.\n\n## The short answer\n\nChoose toy money that is clearly not real, durable enough for small hands, easy to count in round denominations and sold in quantities that match the activity. For games and classrooms, bright and simple beats realistic. If you need money that has to look real on camera, you want prop money instead, and our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) explains the difference.\n\n## What toy money is used for\n\nTeachers, parents, party hosts and community groups use toy money for a wide range of things.\n\n- **Maths and money skills.** Counting notes, giving change and comparing prices are far easier with something to hold.\n- **Role-play.** Shop, bank, cafe and market games help children practise conversation and negotiation.\n- **Board and card games.** Home-made and commercial games both use notes as a scoring and trading system.\n- **Classroom economies.** Some teachers run a classroom currency to reward effort and teach saving and spending.\n- **Parties and fundraisers.** Casino nights, game stalls and school fairs often use play money in place of real stakes.\n- **Drama and school productions.** A stage cash scene with children usually uses play money, because it is safe and obviously pretend.\n\n## What to look for in toy money\n\n### Clearly not real\n\nGood toy money is designed so nobody could mistake it for genuine currency. Bright colours, simple designs and obvious differences in size are all useful. That is a safety feature as well as a teaching feature: it removes any chance of a child, or an adult, treating the notes as real.\n\n### Durable stock\n\nNotes that tear after one game are frustrating and wasteful. Look for heavier paper or a laminated or coated finish for classroom sets that will be used for years. Rounded corners help younger children.\n\n### Sensible denominations\n\nA set that includes small and large values makes a better teaching tool. Notes of 1, 5, 10, 20, 50 and 100 let children practise adding and giving change. Avoid sets that are all high values, which make arithmetic harder and games quicker to end.\n\n### Enough notes\n\nA class of thirty children running a market needs far more notes than a family board game. As a rule of thumb, plan on a few dozen notes per child for a shop role-play, and more for a classroom economy that runs over weeks.\n\n## Toy money, play money and pretend money: are they the same?\n\nIn everyday use, toy money, play money and pretend money all describe the same thing: notes made for games and learning. Retailers may use one term over another, but the product is the same. What matters is not the label but the features: clearly marked, clearly different from real notes and made to handle.\n\nOur [event and party props](/shop/event-and-party-props/) include play money packs that carry visible markings and use the same print quality as our film range, so they photograph well at a party and cannot be mistaken for the real thing.\n\n## Teaching with toy money\n\nHere are five activities that work in a classroom or at home.\n\n1. **The class shop.** Set up a pretend shop with price tags. Children take turns as shopkeeper and customer, practise paying with exact money and then with change.\n2. **Bank and savings.** One child is the bank. Others deposit notes and learn about saving, interest and borrowing in a simple form.\n3. **Budget challenge.** Give each child a fixed amount and a list of items with prices. They plan what to buy.\n4. **Market day.** Children make something, price it and sell it to classmates using toy money, learning supply and demand without any real cost.\n5. **Round the table.** At home, let children handle the weekly pocket money jar with play notes first, then move to real coins once they understand.\n\nKeep the notes in labelled envelopes by value, and make counting them back in part of the lesson. That teaches sorting and responsibility as well.\n\n## Games and parties\n\nFor a casino night, a fundraiser or a themed party, toy money does the job and keeps the stakes pretend. Hand out an equal amount to each guest, run the games, and finish with a prize table where the winners swap notes for items. Collect all the notes at the end so none leave the room. For a more polished look for photos, some hosts add a small stack of clearly marked prop notes to the prize table, kept out of circulation. Our guide to [novelty money for parties and events](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/) explains what is sensible.\n\n## Running a term-long classroom economy\n\nSome teachers run a classroom currency for a whole term. Children earn notes for effort and kindness, pay rent for their desks, save towards a class party and spend at a weekly shop. It works best with a few simple rules: pay on a fixed day each week, keep a class bank that records balances, and set prices so that saving for a week is possible but spending everything is also a real choice. Order enough notes for the whole term in one go, in round denominations, and store them in a labelled box so nothing is lost between lessons. At the end of the term, count what is left, reuse the notes next year and keep a spare set for replacement.\n\n## Teaching tips that make toy money work harder\n\nStart small. Introduce one or two denominations first, then add more as children gain confidence. Let children make mistakes with change and talk through the answer. Mix real prices with pretend ones, so a pencil costs a few dollars and a toy costs a few more. Rotate roles so that every child plays shopkeeper, customer and banker. Finish each session with a short recap of what was learned, and keep a tidy-up routine so counting the notes back in becomes part of the lesson.\n\n## A buying checklist\n\n1. Are the notes clearly not real, with obvious differences in colour and design?\n2. Are they durable enough for repeated handling?\n3. Do the denominations suit the maths you want to teach?\n4. Is the quantity right for the number of children or guests?\n5. Do the notes carry visible markings, so anyone who finds one knows what it is?\n6. Can you get an invoice for the school or the committee?\n\n## Safety and legal points\n\nToy money is very low risk. A few simple habits keep it that way.\n\n- **Never use toy money as payment.** It is not legal tender and a shop assistant is entitled to refuse it.\n- **Keep it away from the very young.** Small notes can be a choking hazard for toddlers, so supervise young children.\n- **Do not let children carry it out of the house or school.** A pocket of play notes in a real shop causes confusion.\n- **Choose marked notes.** Packs with visible markings make the purpose obvious to anyone who finds one.\n- **Check realism.** If a set looks very close to real banknotes, treat it like prop money: keep it controlled and marked. Our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the law, and the [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions.\n\n## How much to buy and what it costs\n\nThe right quantity depends on the activity. A family game needs a few dozen notes. A classroom shop for twenty-five children needs several hundred. A school fair stall may need more. PROPPS orders start at $300 AUD, ship by Australia Post Express with signature on delivery and are free to deliver from $500 AUD. That minimum suits schools, fundraising committees and event hosts ordering for a whole term or a whole event. For larger runs, ask about wholesale rates on the [wholesale page](/wholesale/).\n\n## Where to go next\n\nBrowse [event and party props](/shop/event-and-party-props/) for play money, read about [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) if you are unsure which you need, or [contact the studio](/contact/) with your quantity and deadline.",
    faqs: [
      {
        "q": "Where can I buy toy money in Australia?",
        "a": "PROPPS sells marked play money packs from its Melbourne studio and ships Australia wide by Express Post. Browse [event and party props](/shop/event-and-party-props/) to see the range."
      },
      {
        "q": "Is toy money safe for kids?",
        "a": "Yes, when it is clearly not real and supervised for young children, since small notes can be a choking hazard. Our packs carry visible markings and are non-legal tender."
      },
      {
        "q": "What is the difference between toy money and prop money?",
        "a": "Toy money is made for games and learning and looks obviously unlike real notes. Prop money is made to read as real on camera. See [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/)."
      },
      {
        "q": "How much toy money do I need for a classroom?",
        "a": "Plan on a few dozen notes per child for a shop role-play, and more for a classroom economy. Larger orders can be quoted on the [wholesale page](/wholesale/)."
      },
      {
        "q": "Can I spend toy money?",
        "a": "No. Toy money is not legal tender and must never be offered as payment. Read our [compliance page](/compliance/) for the standard behind our notes."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia',
    title: 'Shipping and Dispatch: How Fast Can You Get Prop Money in Australia?',
    seoTitle: 'Prop Money Shipping in Australia: How Fast?',
    excerpt: 'Buy prop money near me: how PROPPS dispatches from Melbourne by Express Post with signature, and how to plan delivery for your shoot. Order early.',
    category: 'Ordering & Payment',
    date: '2026-08-18',
    readTime: '12 min read',
    image: 'shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia.webp',
    imageAlt: 'Prop money near me fast dispatch — fanned $50 specimen prop note stack',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale'],
    content: "When a shoot is booked and the cash scene is on Thursday, the question is not only where to buy prop money but how quickly it can arrive and who needs to be at the door. Searching for prop money near you usually means a deadline. This guide explains how PROPPS dispatches orders from Melbourne, how Australia Post Express and the signature requirement work, what to expect for Melbourne, Sydney and the rest of the country, how to plan delivery around a shoot and what to do if something goes wrong. It is general information. Delivery times depend on Australia Post and the destination, so check their estimates for your address. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nPROPPS dispatches from its Eltham, Melbourne studio within 24 business hours of payment, by Australia Post Express with a mandatory signature on delivery. Orders start at $300 AUD and delivery is free from $500 AUD. Tell the studio your shoot date when you order, nominate someone to sign and allow a few days between order and first use.\n\n## How dispatch works\n\n1. **You order and pay.** Add items to the cart and pay by bank transfer, PayID or crypto, which receives a 10% discount.\n2. **We confirm.** You receive an invoice and a confirmation.\n3. **We pack and dispatch.** Orders leave the Melbourne studio within 24 business hours of payment.\n4. **Australia Post Express carries it.** The parcel is tracked.\n5. **Someone signs.** A signature is mandatory on delivery. If nobody is there, the parcel goes to a collection point or a redelivery is arranged.\n6. **You check and file.** Count the notes, check the condition and file the invoice.\n\n## Why a signature is required\n\nEvery parcel of prop currency ships with a mandatory signature on delivery. That means a named person receives it, the delivery is recorded and the notes do not sit unattended on a doorstep. It protects the production and it protects us. For a shoot, nominate someone who will be at the address, and give their name and a mobile number at checkout. If the address is a location, a production office or a studio, tell the receptionist or the security desk to expect the parcel.\n\n## Melbourne, Sydney and the rest of Australia\n\nPROPPS is based in Eltham, Melbourne, so Melbourne orders have the shortest distance to travel. Sydney, Brisbane, Adelaide, Perth, Hobart, Darwin and Canberra are all served by Express Post, with delivery times set by Australia Post for each route. Regional and remote addresses usually take longer. We cannot promise a specific day for every address, so check [Australia Post's delivery estimates](https://auspost.com.au/) for your postcode, and allow extra time before a fixed shoot date.\n\n## Planning delivery around a shoot\n\nA simple plan avoids stress.\n\n1. **Order early.** Aim for a few days before the first cash scene, more for regional addresses.\n2. **Tell us the date.** Mention your shoot date when you order, so we can flag it.\n3. **Choose the address carefully.** A production office or a prop room with a person on site is better than a location that moves.\n4. **Name the signer.** Give a name and a mobile number.\n5. **Plan for a miss.** If the first delivery attempt fails, know where the parcel will go and who can collect it.\n6. **Keep a spare.** Have a reserve stack in case a scene changes.\n\nOur [buying checklist for art departments](/blog/buying-film-props-in-australia-a-checklist-for-art-departments/) explains the wider buying process.\n\n## Delivering to a location or hotel\n\nShoots move. If you are travelling, do not send notes to a hotel unless the hotel can hold and sign for a parcel. A production office, a studio or a trusted contact is a safer address. Never ask for a parcel to be left unattended. If the shoot is interstate, ask the studio about delivering to a local production address ahead of the crew.\n\n## What is in the box\n\nNotes are counted and strapped, packed securely and sent in packaging that protects the edges. An invoice goes with the order or is emailed. The parcel is tracked. We do not offer unmarked or discreet packaging as a feature, because legitimate props do not need to hide, and traceable, signed-for delivery is the safer arrangement for everyone.\n\n## Checking your order on arrival\n\n1. Check the parcel for damage before signing, and note any damage on the delivery receipt.\n2. Open it with the person who signed, and count the stacks against the invoice.\n3. Check a note front and back for the specimen markings.\n4. Photograph the contents and keep the photos with the invoice.\n5. Store the notes with the prop master in a secure, dry place.\n6. Contact the studio straight away if anything is wrong.\n\n## If something goes wrong\n\nIf a parcel is late, check the tracking and contact Australia Post, then let us know. If a delivery is missed, arrange a redelivery or a pickup. If a count is wrong or a note is damaged, tell us with photos on the day of delivery, and we will sort it out. Our [contact page](/contact/) and WhatsApp are the fastest routes.\n\n## Compliance and handling\n\nEvery PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction. Keep the notes under the prop master's control, keep the invoice on file and never spend them. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/), the [compliance page](/compliance/) and the [Reserve Bank guidance](https://www.rba.gov.au/banknotes/) for the standard.\n\n## A sample timeline for a Friday shoot\n\nImagine a cash scene on Friday. Order on Monday, so payment is confirmed early in the week. Dispatch leaves Melbourne within 24 business hours of payment. Express Post then carries the parcel, and a signature is required. If everything goes smoothly, the notes arrive mid-week, which leaves a day to check the count and weather the stock. If the address is regional, or the signer is hard to reach, order a day or two earlier. The aim is simple: no scene should depend on the last possible delivery.\n\n## Choosing the right delivery address\n\nThe best address is one where someone is present during business hours: a production office, a studio, a prop room or a trusted contact. Avoid addresses where nobody will be home, such as a locked location. If the shoot is at a private home, ask the owner to sign or to be available. If you are travelling, send the order ahead to the production base, and carry only what you need on the day.\n\n## Delivery for events, schools and photographers\n\nThe same plan works for non-film buyers. A school fair needs the notes before the stall day, and a teacher or office staff member can sign. A photographer working from a studio can ask the studio manager to hold the parcel. An event company can send the notes to the venue contact. Tell the studio your date, give a name and a mobile number, and plan a day of slack.\n\n## What affects delivery time\n\n- **Distance from Melbourne.** Interstate and regional routes take longer.\n- **Public holidays and weekends.** Express Post follows the Australia Post calendar.\n- **Payment timing.** Dispatch starts once payment is confirmed, so pay early.\n- **The signature requirement.** A missed delivery adds a day or more.\n- **Address accuracy.** A wrong unit number or postcode costs time.\n\n## Tracking and communication\n\nOnce the parcel is dispatched, you receive tracking details. Check them each morning in the week of the shoot. If the status looks stuck, contact Australia Post first, then the studio. Keep your phone near you on delivery day, because the courier may call. A small amount of attention at this stage avoids most missed deliveries, and it keeps the cash scene on schedule.\n\n## Returns and exchanges\n\nIf a delivery arrives damaged or the count is wrong, tell us the same day with photos of the parcel, the packing and the notes. Keep the original packaging. We will arrange the right fix, whether that is a replacement stack or a correction. Because every order is invoiced and signed for, there is a clear record for both sides.\n\n## Where to go next\n\nBrowse the [New Notes range](/shop/new-notes/), see [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) or [contact the studio](/contact/) with your shoot date and address.",
    faqs: [
      {
        "q": "How fast does PROPPS dispatch prop money?",
        "a": "Orders leave the Melbourne studio within 24 business hours of payment, by Australia Post Express with a mandatory signature. See the [New Notes range](/shop/new-notes/) to order."
      },
      {
        "q": "Why do I need to sign for prop money?",
        "a": "A signature means a named person receives the parcel, which protects the production and the studio. Nominate someone at the address when you order."
      },
      {
        "q": "Can I buy prop money near me in Sydney or Brisbane?",
        "a": "PROPPS is based in Melbourne and ships Australia wide by Express Post. Check Australia Post estimates for your postcode and see the [contact page](/contact/) for help with timing."
      },
      {
        "q": "Is delivery free?",
        "a": "Delivery is free from $500 AUD. Orders start at $300 AUD. Crypto payments receive a 10% discount."
      },
      {
        "q": "What should I do if my delivery is missed?",
        "a": "Check the tracking, arrange a redelivery or pickup with Australia Post and let us know. See our [contact page](/contact/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'local-vs-overseas-prop-money-suppliers-compared',
    title: 'Local vs Overseas Prop Money Suppliers: What Australian Productions Should Check',
    seoTitle: 'Local vs Overseas Prop Money Suppliers',
    excerpt: 'Australian dollar prop notes: local studio or overseas marketplace? Compare markings, paper, delivery and risk before you buy. Choose with confidence.',
    category: 'Buying Guide',
    date: '2026-09-22',
    readTime: '13 min read',
    image: 'local-vs-overseas-prop-money-suppliers-compared.webp',
    imageAlt: 'Realistic prop money for sale — fanned Australian $50 specimen prop notes from a local Melbourne supplier',
    relatedCategories: ['new-notes'],
    relatedProducts: ['50-australian-prop-money-for-sale', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance/', label: 'Read our full RBA specimen compliance guide' },
    content: "Search for Australian dollar prop notes and the results mix local studios with overseas marketplaces, listings with photos that look the same and prices that differ wildly. The cheapest option is often overseas, and the pitch is simple: the same notes for less. The truth is more complicated. Prop money is a product where the details that matter, such as markings, paper, paperwork and delivery, are the ones a listing hides. This guide compares local and overseas suppliers across the factors that matter to an art department, producer or event host, explains the risks of each and gives you a checklist for choosing. It is general information, not legal advice. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nFor film, television, theatre, photography and any job that needs paperwork, buy from a local studio with marked notes, an ABN, signed-for delivery and an invoice. Overseas listings can be cheaper, but they often ship polymer notes that closely copy Australian designs, with weak markings, long delivery, uncertain paperwork and the risk of being held at the border.\n\n## What the two options look like\n\n### Local studio\n\nA local studio is an Australian business that designs, prints and ships prop currency to Australian buyers. PROPPS is one, based in Eltham, Melbourne, supplying Australian productions since 2019. Typical features: specimen markings on every note, matte paper, an ABN, a physical address, an invoice, traceable Express Post delivery and a contact you can call.\n\n### Overseas marketplace\n\nAn overseas marketplace listing is a seller, often in another country, who ships prop notes by international post. Typical features: a low price per pack, large minimum quantities, long delivery, polymer notes that match Australian designs closely, weak or missing markings and no local contact.\n\n## Side by side\n\n- **Markings.** Local: permanent on every note. Overseas: faint, partial or absent.\n- **Material.** Local: matte paper. Overseas: often polymer, which is the same material as real Australian notes.\n- **Legal position.** Local: built to Section 22 and the RBA guidance. Overseas: often unclear.\n- **Delivery.** Local: Australia Post Express in days, with a signature. Overseas: weeks, with customs risk.\n- **Paperwork.** Local: an invoice for the production file. Overseas: a marketplace receipt, if that.\n- **Recourse.** Local: a phone number. Overseas: a message to a seller in another time zone.\n- **Consistency.** Local: matching stock across orders. Overseas: variable.\n- **Price.** Local: higher per note. Overseas: lower, until you add the risks.\n\n## Why polymer copies are the biggest risk\n\nAustralian banknotes are printed on polymer. A reproduction that is also polymer and closely copies the design is the kind of item the law is concerned about, because it can feel and look like the real thing. A paper reproduction with permanent markings is easy to tell apart by touch and by eye. That is why PROPPS prints on paper and marks every note. If you buy polymer copies from overseas, you take on the risk that they are held at the border, questioned by a venue or mistaken for real money. The [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on banknote reproductions, and our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the law in plain English.\n\n## Delivery and timing\n\nA shoot has a date. A local studio dispatches within 24 business hours of payment by [Australia Post](https://auspost.com.au/) Express, and the parcel is tracked and signed for. An overseas order can take weeks, can be held at customs and cannot be rushed. If a scene changes, the local studio can send a new stack. The overseas seller cannot. Our guide to [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) explains the local process.\n\n## Paperwork and insurance\n\nInsurers, location owners and police ask what the notes are and where they came from. A local invoice with an ABN, a photo of a marked note and a line in the call sheet answers all three. An overseas marketplace receipt with a seller handle does not. If a question comes up months later, the local paper trail is still there. Our [compliance page](/compliance/) sets out the standard.\n\n## Price: the real comparison\n\nThe price on an overseas listing is only part of the cost. Add shipping, customs and handling, the risk of a delay, the cost of a replacement if the notes are wrong and the crew time spent sorting loose notes. A local order at a higher unit price is often the cheaper job overall. Our guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) goes through the trade-offs, and our [how much prop money guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) helps you avoid overbuying.\n\n## A checklist for choosing\n\n1. **Specimen markings on every note.** Ask for a photo of the front and back of an actual note.\n2. **Paper, not polymer.**\n3. **Australian business details.** ABN, address and phone number.\n4. **Honest product description.** It should say non-legal tender prop.\n5. **Signed-for, traceable delivery.**\n6. **An invoice.**\n7. **A way to reorder matching stock.**\n8. **A plan for what to do if something is wrong.**\n\n## When overseas might make sense\n\nThere are cases where an overseas order is reasonable: a small, non-visible background item, a different currency we do not supply, or a very large order where a local quote is out of reach. Even then, check the markings, plan for delays and keep the paperwork. PROPPS makes Australian dollar props only. If you need another currency, a specialist overseas supplier may be the right choice.\n\n## Compliance\n\nEvery PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Never spend them, and keep them under the prop master's control. If you have concerns about counterfeit currency, contact the [Australian Federal Police](https://www.afp.gov.au/).\n\n## Questions to ask any supplier, local or overseas\n\n1. Where are the notes printed, and by whom?\n2. Can I see a photo of an actual note, front and back, showing the markings?\n3. What is the paper or material?\n4. What is the delivery method, and what happens if the parcel is held?\n5. Do I get an invoice that names the product?\n6. Who do I contact if the count is wrong?\n7. Can I reorder matching stock?\n\nLocal studios usually answer these in a line or two. Overseas sellers often cannot, or do not.\n\n## A short story to illustrate the risk\n\nPicture a producer who orders a large pack of polymer notes from an overseas marketplace to save money. The parcel is held at the border for weeks, the shoot date passes and a replacement order is placed with a local studio at a rush price. The savings are gone, the schedule slipped and the producer has no paperwork for the first order. The lesson is not that every overseas order fails. It is that the cost of failure is much larger than the saving.\n\n## Supporting local makers\n\nBuying from a local studio keeps jobs and skills in the industry, and it means the supplier understands the Australian rules on reproductions. A local maker is also easier to hold to account. If a note is wrong, a call or a message gets a reply on the same day, not a week later.\n\n## How to switch suppliers safely\n\nIf you have used an overseas supplier before, run a small test order with a local studio first. Compare the print, the paper, the markings and the delivery. Check the paperwork. If the test passes, move the whole order across. Keep both invoices on the file for a few months, so you can show the change if anyone asks.\n\n## What local studios should be able to show you\n\nA good local studio can show a photo of a marked note on request, a clear description of the paper, a named business with an ABN, published shipping and refund policies and a recent order history. It can also explain how its notes are built to the Section 22 standard, in plain language. If a studio cannot do these things, keep looking. The same test applies to any overseas seller you consider.\n\n## A final word on risk\n\nRisk is the part of the price that never appears on a listing. A small saving on the unit price can be wiped out by one held parcel, one missed date or one awkward question from a venue. Weigh the whole picture, ask the questions above and choose the supplier you would be comfortable explaining to your producer.\n\n## Where to go next\n\nSee the [New Notes range](/shop/new-notes/), read [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) or [contact the studio](/contact/) with your quantity and date.",
    faqs: [
      {
        "q": "Are overseas Australian dollar prop notes legal?",
        "a": "It depends on the markings and the material. Polymer copies with weak markings sit close to the legal line and can be held at the border. See our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/)."
      },
      {
        "q": "Why buy prop money from a local studio?",
        "a": "Local studios supply marked paper notes, an invoice, traceable Express delivery and a contact you can call. Browse the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "Is overseas prop money cheaper?",
        "a": "The unit price can be lower, but shipping, delays, replacement and risk often make the total higher. Read [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/)."
      },
      {
        "q": "How fast can I get prop money from a local supplier?",
        "a": "PROPPS dispatches within 24 business hours of payment by Australia Post Express with signature. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/)."
      },
      {
        "q": "Do you supply other currencies?",
        "a": "No. PROPPS makes Australian dollar props only. For other currencies, use a specialist supplier and check the markings."
      }
    ],
    updated: '2026-10-20',
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
    image: 'can-you-buy-prop-money-in-australia.webp',
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
    image: 'is-it-illegal-to-buy-prop-money-australia.webp',
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
    excerpt: 'Cheap prop money can work for the background, but low prices hide trade-offs in print, paper, markings and paperwork. See what you are really paying for.',
    category: 'Buying Guide',
    date: '2026-10-06',
    readTime: '12 min read',
    image: 'cheap-prop-money-what-you-are-really-paying-for.webp',
    imageAlt: 'A handful of $20 and $50 specimen prop notes showing print detail',
    relatedCategories: ['new-notes', 'money-stacks'],
    relatedProducts: ['20-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/shop/money-stacks', label: 'See money stacks' },
    content: "Everyone wants a good price, and prop money is no exception. A listing that says cheap prop money looks like a bargain, especially on a small budget. Sometimes it is. Often the saving is paid for somewhere you cannot see on a product page: in the paper, the print, the markings, the paperwork or the delivery. This guide explains what drives the price of prop money, where cheap listings cut corners, when cheap is fine, when it is not and how to get a fair price without taking a risk. It is written for art departments, producers, photographers and event hosts. All PROPPS notes are specimen-marked, non-legal tender props.\n\n## The short answer\n\nCheap prop money is fine for the far background of a shot and for casual events. For anything the camera sees closely, or anything that needs paperwork, the saving usually costs more than it saves. Judge a price against what is included: markings, paper, print quality, counting, strapping, invoice and traceable delivery.\n\n## What drives the price of prop money\n\nSeven things set the price of a stack of notes.\n\n1. **Paper.** Heavier matte archival paper costs more than thin gloss stock. PROPPS uses 120gsm matte archival paper.\n2. **Print quality.** Crisp fine print, accurate colour and consistent runs cost more than a basic print.\n3. **Double-sided alignment.** Both sides aligned and matched takes care.\n4. **Specimen markings.** Permanent, prominent markings are part of the design and the compliance standard.\n5. **Counting and strapping.** A counted, strapped stack saves art department time.\n6. **Paperwork.** An invoice and a written description for the production file.\n7. **Delivery.** Traceable, signed-for shipping costs more than a postage stamp.\n\n## Where cheap listings cut corners\n\nHere are the places a low price usually comes from.\n\n- **Thin or glossy paper.** It reflects light, curls and feels cheap in the hand.\n- **Soft or off-colour print.** It looks fine in a thumbnail and poor at working distance.\n- **One-sided or misaligned prints.** A flipped note shows a blank or a blurred back.\n- **Weak or missing markings.** This is the biggest risk, because markings are what make a note a prop.\n- **No counting.** Loose notes mean prep time and uncertain quantities.\n- **No invoice.** You have nothing for the production file.\n- **Slow, untracked delivery.** You cannot plan around it.\n- **Overseas origin.** Polymer copies of Australian designs, weak markings and border delays. See [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).\n\n## The real cost of a cheap order\n\nA low price can turn into a higher cost.\n\n- **Rework.** If the notes look wrong on camera, you reorder or reshoot.\n- **Rush fees.** A late replacement costs more than the original.\n- **Lost time.** Counting, banding and sorting loose notes takes crew hours.\n- **Compliance risk.** Notes without clear markings can cause problems with venues, insurers or police.\n- **No recourse.** If the order is wrong, you may have nobody to contact.\n\n## When cheap is fine\n\nThere are good uses for lower-cost notes.\n\n1. **The far background.** A bundle at the back of a shelf that the lens will blur.\n2. **Casual events.** A party where play money is the right choice. See [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/).\n3. **Rehearsals and tests.** A cheap stack for blocking and testing light.\n4. **Filler.** Stock beneath hero notes in a bag or a stack.\n\n## When cheap is a bad idea\n\nAvoid low-cost notes for:\n\n- **Close-ups and inserts.** The camera sees the print and the paper.\n- **Hero stacks.** These carry the scene.\n- **Public shoots.** You need marked notes and paperwork.\n- **Anything that will be published.** A weak note shows in a still.\n- **Repeat orders.** You need matching stock.\n\n## How to get a fair price\n\nGood value is not the same as the lowest price. These steps help.\n\n1. **Size the order properly.** Do not buy more than the camera sees. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows how.\n2. **Put hero quality where the camera is close.** Use matching stock behind it.\n3. **Order once.** One order saves minimums, shipping and mismatches.\n4. **Ask about wholesale tiers.** Larger and repeat runs may be 10% to 30% off. See the [wholesale page](/wholesale/).\n5. **Use the crypto discount if it suits you.** PROPPS gives 10% off crypto payments.\n6. **Reuse stacks across scenes.** Matching stacks can appear more than once.\n\n## What PROPPS prices look like\n\nAt PROPPS, orders start at $300 AUD and delivery is free from $500 AUD. Stacks run from $115 for a Starter Stack to $14,000 for 100 Stacks. Every note is specimen-marked, printed double-sided on matte archival paper and sold with an invoice. Our guide to [high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) shows what to check in any listing.\n\n## A quick price check\n\nBefore you buy from anyone, ask:\n\n1. Can I see a photo of an actual note, front and back?\n2. Is the specimen marking on every note?\n3. What is the paper?\n4. Are the stacks counted and strapped?\n5. Will I get an invoice?\n6. How is it delivered, and is a signature required?\n7. Can I reorder matching stock?\n\nIf a seller dodges these, the low price is telling you something.\n\n## Compliance\n\nEvery PROPPS note carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender reproduction for motion pictures, television, theatre, visual arts and simulation training. Never spend them. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and the [Reserve Bank guidance](https://www.rba.gov.au/banknotes/).\n\n## A worked comparison\n\nImagine two quotes for the same scene. The first is a low-cost listing: thin glossy notes, loose in a bag, one-sided print, no invoice, delivered in three weeks. The second is a local studio order: matte double-sided notes, counted and strapped, specimen-marked, with an invoice and signed-for delivery in days. The first looks cheaper. Then add the crew hours to count and band the notes, the cost of replacing notes that read badly on camera, the rush delivery for a missed date and the lack of paperwork. The second is often the cheaper job overall, and it carries far less risk.\n\n## Hidden costs to watch for\n\n- **Minimum order and shipping.** A low unit price with a high postage fee is not a bargain.\n- **Currency conversion.** An overseas price in another currency moves with the exchange rate.\n- **Customs and handling.** Charges can appear on arrival.\n- **Time.** Slow delivery can force a rush order elsewhere.\n- **Quality drift.** A repeat order may not match the first.\n\n## Cheap play money versus cheap prop money\n\nThe cheapest option for a party or a classroom is often play money, which is designed to look unlike real notes and costs far less to make. That is a good choice for games. It is not a substitute for prop money in a close-up. If your budget is tight and your shot is a wide, play money in the background and a small hero stack of marked notes in the foreground is a sensible split. Our [play money vs prop money guide](/blog/play-money-vs-prop-money-which-one-do-you-need/) shows how to choose.\n\n## Saving money by planning\n\nThe most reliable way to cut cost is not a cheaper note but a better plan. Count what the camera sees, reuse stacks across scenes, weather only what is handled and order once. Our guides to [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/) and [heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) show how a small order can look large on screen. A good plan can cut the quantity by a third without the audience noticing.\n\n## What to ask for before you accept a low price\n\nIf a low price tempts you, ask for a photo of an actual note, a description of the paper, confirmation that the markings are on every note, the delivery method and an invoice. A seller who answers clearly and quickly has probably earned the price. A seller who avoids the questions has probably cut the corners you cannot see. Check before you pay, because refunds from distant sellers are slow, and a missed shoot cannot be undone.\n\n## A budget-friendly plan that still looks right\n\nSpend on the notes the camera sees closely: the hero stack, the fan, the insert. Use matching but simpler stock for the background. Weather only what is handled, and reuse stacks between set-ups. Order once, keep a reserve and ask about tiers. That plan keeps the cost down and the screen quality up, without leaning on the cheapest listing you can find.\n\n## Where to go next\n\nSee the [New Notes range](/shop/new-notes/), read [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) or [contact the studio](/contact/) for a quote.",
    faqs: [
      {
        "q": "Is cheap prop money any good?",
        "a": "It can be fine for the far background and casual events, but not for close-ups or anything that needs markings and paperwork. See the [New Notes range](/shop/new-notes/) for marked, matte notes."
      },
      {
        "q": "Why is some prop money so much cheaper?",
        "a": "Lower prices usually mean thinner paper, weaker print, one-sided prints, weak markings, no counting and no invoice. See our guide to [high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/)."
      },
      {
        "q": "How can I save money on prop money without risk?",
        "a": "Size the order properly, put hero notes in the foreground, order once and ask about wholesale tiers. See [how much prop money you need](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Does PROPPS offer a discount?",
        "a": "Crypto payments receive 10% off, and larger or repeat runs can be quoted on the [wholesale page](/wholesale/)."
      },
      {
        "q": "Is cheap overseas prop money legal?",
        "a": "Overseas notes often have weak markings and can be held at the border. See [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) and our [compliance page](/compliance/)."
      }
    ],
    updated: '2026-10-20',
  },
  {
    slug: 'high-quality-prop-money-how-to-judge-it-on-camera',
    title: 'High Quality Prop Money: How to Judge It Before Your Shoot',
    seoTitle: 'High Quality Prop Money: How to Judge It',
    excerpt: 'High quality prop money: the print, paper, edge and handling checks that show whether notes will hold up on camera. Learn what to ask before you order.',
    category: 'Cinematography & Lighting',
    date: '2026-10-07',
    readTime: '9 min read',
    image: 'high-quality-prop-money-how-to-judge-it-on-camera.webp',
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
    slug: '100-dollar-prop-money-which-bundle-size',
    title: '100 Dollar Prop Money: Which Bundle Size Suits Which Scene',
    seoTitle: '100 Dollar Prop Money: Choosing a Bundle Size',
    excerpt: '100 dollar prop money: how to choose a bundle size for wallet shots, desk spreads and vault reveals, with stack prices. Plan your order before you shoot.',
    category: 'Buying Guide',
    date: '2026-10-09',
    readTime: '9 min read',
    image: '100-dollar-prop-money-which-bundle-size.webp',
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
    image: 'ready-prop-money-stacks-for-fast-turnaround.webp',
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
    "slug": "prop-dollar-vs-prop-cash-vs-prop-money",
    "title": "Prop Dollar vs Prop Cash vs Prop Money: What Each Term Means in Australia",
    "seoTitle": "Prop Dollar vs Prop Cash vs Prop Money Explained",
    "excerpt": "Prop dollar, prop cash and prop money are not the same thing. See what each term means in Australia, which suits your shoot and how to order marked notes.",
    "category": "Buying Guide",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "prop-dollar-vs-prop-cash-vs-prop-money.webp",
    "imageAlt": "Prop dollar notes fanned in a hand, specimen prop currency for film in Australia",
    "relatedCategories": [
      "new-notes",
      "money-stacks"
    ],
    "relatedProducts": [
      "50-australian-prop-money-for-sale",
      "bulk-money-stack-pack"
    ],
    "relatedPage": {
      "href": "/compliance/",
      "label": "Read our specimen compliance standard"
    },
    "content": "If you are searching for a prop dollar, prop cash or prop money, you could be looking for three different things. A prop dollar is one note. Prop cash is the loose, handled look of money on screen. Prop money is the product category that covers both. Getting the terms straight saves you from ordering the wrong quantity, the wrong finish or the wrong denomination, and it helps an insurer or production manager read your brief the same way you do.\n\nThis guide sets out what each term means for Australian film, television, theatre and photography work, how the three differ in practice, and how to turn the words into an order. It is general information about props, not legal advice.\n\n## Quick answer: how the three terms differ\n\n- **Prop dollar:** a single reproduction note, usually described by its denomination, for example a $50 prop dollar. It is what you hold in a close-up.\n- **Prop cash:** money as it reads in a scene, meaning bundles, rolls, fanned notes and loose handfuls that look used rather than fresh from the printer.\n- **Prop money:** the umbrella term for every non-legal tender reproduction note made for productions, from one note to a pallet.\n\nIn practice a prop dollar is the unit, prop cash is the look and prop money is the product. Most orders mix all three: a few hero notes for the close-up and enough stacks to fill the frame.\n\n## What is a prop dollar?\n\nA prop dollar is one reproduction banknote. On a call sheet it appears as \"hero note\", \"insert note\" or by denomination. The hero note is the one the camera sees, so it gets the most attention: crisp printing, even colour and clear specimen markings. Australia's notes are polymer, and our reproductions are paper-based, which is one of the deliberate differences that keeps them clearly distinct from genuine currency.\n\nIf you need a close-up of a single note, start with the denomination pages: the [$5](/shop/new-notes/5-australian-prop-money-for-sale/), [$10](/shop/new-notes/10-australian-prop-money-for-sale/), [$20](/shop/new-notes/20-australian-prop-money-for-sale/), [$50](/shop/new-notes/50-australian-prop-money-for-sale/) and [$100](/shop/new-notes/100-australian-prop-money-for-sale/) products each carry the specimen markings required by our standard.\n\n## What is prop cash?\n\nProp cash is the on-screen impression of money. A single crisp note says \"new\". A handful of slightly bent notes in a coat pocket says \"this has been spent\". Art departments talk about prop cash when they plan texture, wear and volume rather than a single note. That is why the [art department guide to weathering prop cash](/blog/art-department-guide-weathering-prop-cash/) matters: the same stack looks different depending on how it has been handled.\n\nProp cash is usually bought in stacks. A [money stack](/shop/money-stacks/) is a bundled quantity of one denomination or a mix, strapped the way a bank would strap them, so it reads as a real sum even at a distance. If you are planning how many you need, our guide on [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) gives a counting method by shot type.\n\n## What is prop money?\n\nProp money is the broad category: reproduction notes sold for motion pictures, television, theatre, photography and training. When someone asks \"can I buy prop money in Australia\", they mean the whole category, and the answer is yes when the notes are clearly marked and not used to deceive. Our post on [whether you can buy prop money in Australia](/blog/can-you-buy-prop-money-in-australia/) walks through it, and the [New Notes range](/shop/new-notes/) is where the marked reproductions live.\n\n## Side by side\n\n| Term | What it is | Typical quantity | Best for |\n|---|---|---|---|\n| Prop dollar | One reproduction note | 1 to 20 | Close-ups, inserts, hero notes |\n| Prop cash | The handled, lived-in look | Loose notes to small stacks | Pockets, wallets, tables, bar tops |\n| Prop money | The full category | Any | Briefing, budgeting and ordering |\n\n## Which one do you actually need?\n\nMatch the term to the shot rather than the other way round.\n\n1. **Close-up of a single note.** You need a prop dollar in the right denomination. Check the artwork at the size the camera will see it.\n2. **A hand counting notes.** You need prop cash: a stack of the same denomination, lightly aged, with the strap on.\n3. **A suitcase or table of money.** You need prop money in volume. Buy more than you think, because notes get damaged and reshoots happen.\n4. **A party or classroom.** You probably want play money, not specimen reproductions. Read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) first.\n\n## How the terms show up on a prop schedule\n\nArt departments rarely write \"prop cash\" on a schedule without a number beside it. A tidy prop line reads like \"Scene 14, bank counter, 3 x strapped stacks of $100 prop dollars, 6 loose hero notes\". That one line carries all three ideas: the denomination (the prop dollar), the volume (the stacks) and the finish (the loose hero notes that have been handled). Writing it this way makes ordering quick, because your supplier can read the quantities straight off the line.\n\nA useful habit is to give every money line three details: the **denomination**, the **count** and the **condition**. Denomination tells you which product page to start from. Count tells you whether you need a single note, a stack or a bulk pack. Condition tells you whether to request notes that look fresh, lightly handled or heavily worn.\n\n## Common mix-ups to avoid\n\n- **Ordering one note when you meant a stack.** \"A prop dollar\" is one note. If the script says \"a wad of cash\", you need a strapped stack.\n- **Treating \"prop cash\" as a different product.** It is the same reproduction notes, styled and aged. You do not need a separate supplier for it.\n- **Using \"prop money\" to mean play money.** The two are made for different jobs. Play money is a toy, while prop money is a film-grade reproduction. Check which one your brief needs.\n- **Mixing denominations without a reason.** A real till holds a mix, but a bank-vault shot usually uses one denomination per strap. Decide the look first.\n- **Forgetting the marking.** Whatever you call the notes, they must carry a clear specimen marking.\n\n## Examples by production type\n\n**Short film or student project.** A handful of prop dollars for insert shots, plus one or two stacks. Orders start at $300 AUD, so most small shoots buy a mixed stack and use it across scenes.\n\n**Television drama.** Prop cash in volume: stacks of $50 and $100 for deals and payoffs, with a few hero notes. Series work often reorders for each block, so keep the supplier invoice and the count from the last order.\n\n**Theatre.** Prop dollars used as stage cash, usually in a prop wallet or bundle. The audience is further away, so denomination colour matters more than fine print detail.\n\n**Photography and content.** A fan of prop dollars or a stack on a table. The shot is often a close-up, so check the print quality, and read our guide to [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) before you publish.\n\n## What stays the same whichever word you use\n\nWhatever you call it, the legal position does not change. A reproduction must be clearly distinguishable from a genuine note, marked, and used only as a prop. The Reserve Bank publishes its [banknote reproduction guidance](https://www.rba.gov.au/banknotes/), and the offences sit in the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/). Our [compliance page](/compliance/) explains the specimen markings on every PROPPS note, and the longer guide to the [Crimes (Currency) Act and RBA rules](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) covers the detail.\n\nThree habits keep any prop dollar or stack of prop cash on the right side of the line:\n\n- Keep notes with the art department, not in a wallet.\n- Never spend them, hand them over or post them as if they were real cash.\n- Keep the supplier invoice on the production file.\n\n## How to order\n\nPick the denominations for your close-ups first, then add stacks for the volume. Orders start at $300 AUD, delivery is free from $500 AUD, and payments in cryptocurrency receive a 10% discount. Parcels leave our Eltham, Melbourne depot by Australia Post Express with a mandatory signature, usually within 24 business hours of payment. For studio-scale quantities, ask about the [wholesale tiers](/wholesale/) of 10% to 30% off.\n\n## Next step\n\nChoose your hero denomination from the [New Notes range](/shop/new-notes/), then add a [bulk money stack](/shop/money-stacks/bulk-money-stack-pack/) for the volume. If you are unsure of quantities, send us the scene breakdown from the [contact page](/contact/) and we will suggest a count.",
    "faqs": [
      {
        "q": "What is a prop dollar?",
        "a": "A prop dollar is a single reproduction banknote made for a production, usually named by denomination. It is non-legal tender, carries specimen markings and is used for close-ups. See the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "Is prop cash the same as prop money?",
        "a": "Not exactly. Prop money is the whole category of reproduction notes, while prop cash describes the lived-in look of money on screen. Most scenes use both. Our [art department weathering guide](/blog/art-department-guide-weathering-prop-cash/) explains how to age it."
      },
      {
        "q": "How many prop dollars do I need for a scene?",
        "a": "A single close-up needs only a few notes, but a table or suitcase needs full stacks. Count by shot, then add about 20% for damage and reshoots. Our [quantity guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows examples."
      },
      {
        "q": "Can I spend prop money?",
        "a": "No. Prop money is non-legal tender and must never be spent, handed over as payment or shown as real cash. Keep the notes with the art department and read our [compliance page](/compliance/)."
      },
      {
        "q": "Where can I buy prop money in Australia?",
        "a": "Buy from an Australian supplier with an ABN, clear specimen markings and traceable delivery. PROPPS ships from Melbourne by Express Post with signature. See [where to buy prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "realistic-prop-money-australia-what-realistic-should-mean",
    "title": "Realistic Prop Money in Australia: What \"Realistic\" Should and Should Not Mean",
    "seoTitle": "Realistic Fake Money Australia: A Prop Buyer Guide",
    "excerpt": "Searching for realistic fake money in Australia? Learn what realistic should mean for prop notes, what to avoid and how to buy marked props for camera.",
    "category": "Buying Guide",
    "date": "2026-10-26",
    "readTime": "9 min read",
    "image": "realistic-prop-money-australia-what-realistic-should-mean.webp",
    "imageAlt": "Realistic fake money Australia buyers search for: fanned $50 specimen prop notes shot in natural light",
    "relatedCategories": [
      "new-notes",
      "film-and-tv-props"
    ],
    "relatedProducts": [
      "100-australian-prop-money-for-sale",
      "film-and-tv-prop-currency-pack"
    ],
    "relatedPage": {
      "href": "/compliance/",
      "label": "See how specimen markings keep props lawful"
    },
    "content": "People who type \"realistic fake money Australia\" into a search box usually want one of two things: prop notes that look convincing on camera, or something that could pass as the real thing. The first is a normal production need. The second is the opposite of what a legitimate prop supplier sells, and it is the one that causes legal trouble. This guide explains what \"realistic\" should mean when you are buying prop money in Australia, and what it must never mean.\n\nRealistic, in the prop world, means realistic to a lens. It does not mean realistic to a cashier. The difference is the whole point of a compliant prop: it reads as money at the distance and angle of the shot, and it is still obviously a reproduction when someone holds it. This is general information, not legal advice.\n\n## What realistic means on camera\n\nCinematographers and prop masters judge realism by what the sensor sees, not by what a hand feels. Four things carry it:\n\n- **Colour.** Each denomination has a recognisable colour family. Reproductions should hold it under tungsten, daylight and LED, which is why our guide to [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/) is worth reading before a shoot.\n- **Print detail.** Portraits, text and patterns should stay sharp in a medium close-up. Muddy printing is the quickest way to lose a viewer.\n- **Finish.** A non-reflective surface avoids glare. Gloss reads as plastic and pulls the eye.\n- **Handling.** Slight wear, soft edges and straps make a stack feel used. The [weathering guide](/blog/art-department-guide-weathering-prop-cash/) covers it.\n\nOur notes are printed on non-reflective archival paper in the proportions a camera expects, with the specimen marking built into the design. For judging quality before you buy, see [how to judge high quality prop money on camera](/blog/high-quality-prop-money-how-to-judge-it-on-camera/).\n\n## What realistic must not mean\n\nA legitimate prop is made to be seen as a prop up close. That is the line the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) and the Reserve Bank's [reproduction guidance](https://www.rba.gov.au/banknotes/) are built around. Anything marketed as able to fool a shop, a pen or a scanner has crossed it. Watch for these warning signs in a listing:\n\n1. Claims that notes are \"undetectable\", \"pass the pen test\" or \"indistinguishable\".\n2. No visible specimen marking, or markings described as \"optional\".\n3. Discreet or unmarked packaging sold as a feature.\n4. No ABN, physical address or contact number.\n5. Polymer notes that closely copy current Australian designs, shipped from overseas.\n\nAny one of these is a reason to walk away. The longer guide to [the legal difference between fake money and prop money](/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/) explains why.\n\n## The realistic-but-lawful checklist\n\nUse this when you compare suppliers:\n\n| Check | Why it matters |\n|---|---|\n| Specimen marking visible on every note | Keeps the note a clear reproduction |\n| Paper, not polymer | A deliberate difference from genuine notes |\n| Honest product copy | No \"spendable\" or \"undetectable\" language |\n| Australian ABN and address | Someone you can contact |\n| Signed-for delivery | Every parcel has a named recipient |\n| Invoice for the production file | Proof of purpose for insurers and locations |\n\n## Choosing denominations for realism\n\nThe denomination changes how real a scene reads. A $100 note is the cinema favourite because the green is distinctive and the value is obvious. A $50 gives a warmer, yellow-gold stack that photographs well in low light. Mixed stacks look the most natural because real cash drawers hold a mix. Our guide to [the best Australian denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) goes through each.\n\nIf your scene is a close-up of a note, start with the [$100 prop note](/shop/new-notes/100-australian-prop-money-for-sale/) or compare the full [New Notes range](/shop/new-notes/). If you are building a whole set, the [film and TV prop currency pack](/shop/film-and-tv-props/film-and-tv-prop-currency-pack/) is made for it.\n\n## Testing realism before the shoot\n\nThe only reliable test is to put a sample in front of your own camera. Order a small mixed set early, light it the way you plan to light the scene and shoot a few frames on the lens you will use. Look at the footage on a monitor, not just the viewfinder. This takes twenty minutes and answers three questions:\n\n1. Does the colour hold under your lights, or does it shift towards orange or green?\n2. Does the surface throw glare at the angle of your key light?\n3. Can you read the denomination and the specimen marking at the size the shot will show them?\n\nIf the answer to any of those is no, change the angle, the diffusion or the notes before the day. A sample is much cheaper than a reshoot, and it gives the director and DOP something concrete to approve. If you are shooting stills, the same test applies with your lens and flash, and our [photography props](/shop/photography-props/) category has notes suited to close work.\n\n## Realistic at different distances\n\nRealism is a function of distance. A wide shot of a table of cash needs the right colours and the right mass, and almost nothing else. A medium shot adds the need for crisp straps and believable stacking. A close-up adds portraits, patterns and edge detail. Buy for the closest shot in the scene and the rest will take care of itself.\n\nThat is also why one set of notes can serve a whole production. Hero notes go in the insert shots and the rest of the stock fills the wide shots. You do not need a more expensive product for the wide shot, because the lens cannot see the difference.\n\n## Realistic does not mean cheap, and cheap does not mean realistic\n\nPrint detail and paper cost money. Very low prices usually mean thin printing, wrong colours or no marking, and that is a false economy when a reshoot costs more than the notes. Our post on [what you are really paying for in cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) breaks down the trade-offs.\n\n## What a compliant supplier tells you up front\n\nA professional prop studio answers these questions before you ask them, and puts the answers in writing:\n\n- What markings are on each note, and where they sit.\n- What the notes are printed on, and how that differs from a genuine note.\n- Where the business is based and how to contact it.\n- How the parcel is sent, and who signs for it.\n- What happens if the notes arrive damaged or the count is wrong.\n\nIf a seller dodges any of these, treat it as a warning. A realistic look is something you can see in a photo. The paperwork is something you can only get from a supplier that is happy to be identified. Our [local vs overseas supplier comparison](/blog/local-vs-overseas-prop-money-suppliers-compared/) shows how the two differ in practice.\n\n## Terms people confuse with realistic\n\n- **Authentic:** not a prop word at all. A prop is never authentic currency.\n- **Replica:** fine for a film prop, as long as it is marked and is not marketed as spendable.\n- **High quality:** about print and finish, not about passing as real.\n- **Aged or weathered:** about wear and handling, which makes a prop look lived-in without making it look genuine.\n\nKeeping these straight helps you write a clear brief and helps a supplier give you the right product.\n\n## Using realistic props responsibly\n\nEven the best prop note must stay a prop. Keep notes with the art department, brief the cast and extras, never use them to pay for anything and never post unmarked close-ups with captions that imply real cash. If a member of the public or an officer asks, show the specimen markings and the supplier invoice. Our [compliance page](/compliance/) sets out the standard in one place.\n\n## Ordering\n\nOrders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by Australia Post Express with signature on delivery. See the [shipping policy](/shipping-policy/) for timing, or read [how fast you can get prop money in Australia](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/).",
    "faqs": [
      {
        "q": "What does realistic fake money mean for a production?",
        "a": "It means notes that look convincing on camera at the distance of the shot, while staying clearly marked as reproductions when held. It never means notes that could pass in a shop. See our [compliance page](/compliance/)."
      },
      {
        "q": "Is realistic prop money legal in Australia?",
        "a": "Clearly marked, non-legal tender reproductions used for film, television, theatre or photography are a normal part of production work. Using them as payment or to deceive is not. Read the [Crimes Act guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/)."
      },
      {
        "q": "How do I tell a good prop note from a poor one?",
        "a": "Check print sharpness, colour under your lighting and surface finish, and make sure the specimen marking is clear. Our [on-camera quality guide](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) gives a simple test."
      },
      {
        "q": "Which denomination looks most realistic on screen?",
        "a": "The $100 and $50 notes photograph best because their colours are distinctive. Mixed stacks look most natural. See [the best denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/)."
      },
      {
        "q": "Can I buy realistic prop money for a photoshoot?",
        "a": "Yes. Photographers use specimen-marked notes for cash-style shots, and the same rules apply as on a film set. See [prop money for photography](/shop/photography-props/) and the guide to [realistic cash shots without the risk](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "props-for-filming-ordering-prop-currency-for-a-shoot",
    "title": "Props for Filming: How to Order Prop Currency for a Shoot, Step by Step",
    "seoTitle": "Props for Filming: Ordering Prop Currency Step by Step",
    "excerpt": "Props for filming need lead time, counts and paperwork. Follow this guide to ordering prop currency for a shoot in Australia, from brief to delivery.",
    "category": "Production Planning",
    "date": "2026-10-26",
    "readTime": "9 min read",
    "image": "props-for-filming-ordering-prop-currency-for-a-shoot.webp",
    "imageAlt": "Props for filming: fanned $50 and $20 prop currency notes ready for a shoot",
    "relatedCategories": [
      "film-and-tv-props",
      "money-stacks"
    ],
    "relatedProducts": [
      "film-and-tv-prop-currency-pack",
      "bulk-money-stack-pack"
    ],
    "relatedPage": {
      "href": "/shop/film-and-tv-props/",
      "label": "Buy film props: prop currency for productions"
    },
    "content": "Props for filming are easy to underestimate. A stack of cash looks like one line in the prop schedule, until the order is late, the count is short or the notes do not match the script. This guide takes you through ordering prop currency for a shoot in seven steps, from reading the script to wrapping the notes, so the art department is not chasing a parcel on the morning of the shoot.\n\nIt is written for Australian film, television, theatre and advertising productions and applies to a student short as much as a feature. PROPPS has supplied more than 500 Australian productions from Eltham, Melbourne since 2019, and the same questions come up every time.\n\n## Step 1: Break down the script\n\nGo through the script and mark every scene where money is seen, counted, handed over or carried. For each, note the denomination, the quantity visible and the shot type: a wide, a medium or an insert close-up. A bag on a table in a wide shot needs bulk. A hand counting notes in an insert needs a few clean notes and a strapped stack.\n\n## Step 2: Count the notes\n\nWork out quantity per scene, then add a margin. The simple rule is to add about 20% for damage, reshoots and continuity swaps. Our guide on [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) gives worked examples, and the post on [heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers the large-volume case.\n\n## Step 3: Choose denominations and finish\n\nPick the denomination for each scene. The $100 and $50 notes carry the most visual weight, while $20 and $10 notes suit everyday transactions. Decide whether you want clean notes or aged ones. Fresh notes suit a bank vault. Soft, handled notes suit a street deal. See [the best Australian denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) and [how to weather prop cash](/blog/art-department-guide-weathering-prop-cash/).\n\n## Step 4: Check the paperwork\n\nBefore you order, confirm the supplier will give you an invoice and that the notes carry specimen markings. Put both on the production file with a line describing the purpose of the notes. Insurers, location owners and, occasionally, police want to see it. Our [compliance page](/compliance/) sets out the standard we build to, and the legal background sits in the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) and the Reserve Bank's [banknote guidance](https://www.rba.gov.au/banknotes/).\n\n## Step 5: Place the order with lead time\n\nOrder before you need the notes in the department, not on the day. Parcels leave our Eltham depot by Australia Post Express, usually within 24 business hours of payment, and the delivery times by region are in the [shipping policy](/shipping-policy/). Add a buffer for remote locations. Delivery needs a signature, so give an address that will be staffed.\n\nOrders start at $300 AUD and delivery is free from $500 AUD. Payments in cryptocurrency receive a 10% discount. Production companies buying in quantity can ask about [wholesale tiers](/wholesale/) of 10% to 30% off, and the [wholesale pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/) explains how they work.\n\n## Step 6: Check the delivery on arrival\n\nOpen the parcel in the art department, count the stacks and compare them with the invoice. If anything is damaged, photograph it and email us within 48 hours of delivery. Our [refund policy](/refund-policy/) sets out the 3 to 8 business day refund window and the replacement process.\n\n## Step 7: Control the notes on set and at wrap\n\nProp currency needs a custodian. Give it to the prop master or props buyer, count it out and in each day, and keep it out of pockets, bags and cars. Brief the cast and extras that the notes are never spent or handed over. At wrap, return or securely store what is left. This habit, more than any other, is what keeps a production file clean.\n\n## A sample schedule: three weeks out\n\nHere is how a small production might plan its prop currency, working back from the first shoot day.\n\n| When | Task |\n|---|---|\n| 3 weeks out | Script breakdown done, money scenes listed with denomination and count |\n| 2 weeks out | Order placed, invoice saved to the production file |\n| 10 days out | Parcel delivered and counted by the props buyer |\n| 3 days out | Hero notes tested under the planned lighting |\n| Shoot days | Notes counted out in the morning and back in at wrap |\n| Wrap | Unused notes returned to storage or disposed of securely |\n\nThis timeline leaves a week of slack for a late script change or a delivery to a remote location. Remote and regional addresses take longer than Melbourne, Sydney or Brisbane, so build in the extra days.\n\n## Who orders what on a production\n\nOn a larger crew the money line is spread across several people. The **production designer** sets the look and the budget. The **art director** and **props buyer** place the order and keep the paperwork. The **prop master** is the custodian on set. The **script supervisor** tracks continuity, which matters because the stack on the table in shot A must match the stack in shot B. On a small crew one person does all four jobs, so keep the checklist short and write it down.\n\n## Props for filming beyond money\n\nCash is only one prop. If your film also needs other specialist items, plan them on the same schedule and ask early. We focus on prop currency, which is why the [film and TV props](/shop/film-and-tv-props/) category is built around banknotes, bundles and packs. Anything outside that range is better sourced from a general prop house, and our checklist for art departments covers how to compare them.\n\n## What to buy for a typical shoot\n\n| Scene | What to order |\n|---|---|\n| Insert of one note | A few notes of the denomination, from the [New Notes range](/shop/new-notes/) |\n| Hand counting cash | One or two strapped stacks of the same denomination |\n| Table or bag of money | The [bulk money stack](/shop/money-stacks/bulk-money-stack-pack/) |\n| Whole set dressing | The [film and TV prop currency pack](/shop/film-and-tv-props/film-and-tv-prop-currency-pack/) |\n\nIf you need other prop currency lines, see our [film and TV props](/shop/film-and-tv-props/) category, and for a wider look at the process read [buying film props in Australia: a checklist for art departments](/blog/buying-film-props-in-australia-a-checklist-for-art-departments/).\n\n## Special cases to plan for\n\n**Night shoots and low light.** Dim light flattens colour, so test the notes under your actual lights. Warm tungsten makes yellow-gold notes glow, while cool LED can wash out the greens.\n\n**Period pieces.** Australia changed from pounds to dollars in 1966, and the notes have been redesigned several times since. If your story is set before the current series, read our guide to the [history of Australian currency notes for set designers](/blog/brief-history-of-australian-currency-notes-for-set-designers/) before you choose a denomination.\n\n**Action and stunts.** Notes that will be thrown, burned in camera or dropped from height need a larger margin. Order extra and brief the stunt coordinator, because damaged notes cannot be reused in close-ups.\n\n**Multiple units.** If two units shoot money scenes in different places, split the order and the custodian. One count per unit keeps continuity clean.\n\n**Rehearsals and tests.** Camera tests and rehearsals use notes too. Keep a separate small set for them so the notes in the main stock stay clean for the actual shoot days, and so a test does not eat into your margin.\n\n## Budgeting for prop currency\n\nProp currency is usually a small line in a production budget, but it is easy to under-order and expensive to fix on the day. Budget for the notes, the 20% margin and delivery. If your total reaches $500 AUD, delivery is free. If you pay with cryptocurrency you receive a 10% discount, and buying at studio scale opens the wholesale tiers. Compare these before you place the order, and keep the invoice with your production accounts.\n\n## Common mistakes\n\n- Ordering exactly the on-screen count with no margin.\n- Waiting for a late script change before ordering.\n- Skipping the invoice and specimen photo for the production file.\n- Sending a parcel to an unattended address.\n- Reusing damaged notes in a close-up.",
    "faqs": [
      {
        "q": "How far ahead should I order props for filming?",
        "a": "Order as soon as the script breakdown is locked. Paid orders usually leave Melbourne within 24 business hours, and delivery is 1 to 5 business days by region. See the [shipping policy](/shipping-policy/) for timing."
      },
      {
        "q": "How much prop money do I need for a scene?",
        "a": "Count the visible notes per shot, then add about 20% for damage and reshoots. Our [quantity guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows examples for inserts, tables and bags."
      },
      {
        "q": "Do I need paperwork for prop currency on set?",
        "a": "No licence is needed, but keep the supplier invoice and a note of the specimen markings on the production file. See our [compliance page](/compliance/) and the guide to [buying prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/)."
      },
      {
        "q": "Can I get a discount for a big production?",
        "a": "Yes. Studio-scale orders can ask about wholesale tiers of 10% to 30% off, and cryptocurrency payments receive a further 10% discount. See the [wholesale page](/wholesale/)."
      },
      {
        "q": "What if my props arrive damaged?",
        "a": "Photograph the parcel and email us within 48 hours of delivery. We send a replacement or refund within 3 to 8 business days. Read the full [refund policy](/refund-policy/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "monetary-toys-and-play-money-sets-for-kids",
    "title": "Monetary Toys and Play Money Sets: What Australian Parents and Teachers Should Look For",
    "seoTitle": "Monetary Toys: Play Money Sets for Kids in Australia",
    "excerpt": "Monetary toys and play money sets help kids learn counting and shop play. See what to look for, which notes suit each age and how to order in Australia.",
    "category": "Buying Guide",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "monetary-toys-and-play-money-sets-for-kids.webp",
    "imageAlt": "Monetary toys and play money: fanned $50 specimen notes held in a hand for pretend play",
    "relatedCategories": [
      "event-and-party-props"
    ],
    "relatedProducts": [
      "event-and-party-prop-cash-pack"
    ],
    "relatedPage": {
      "href": "/shop/event-and-party-props/",
      "label": "Shop play money for events and games"
    },
    "content": "Monetary toys are play sets that let children handle money in pretend games: shops, banks, cafes and classroom markets. For parents and teachers they are a simple way to teach counting, addition and the idea of value. For party hosts and fundraisers they add a game to the room. This guide explains what to look for in monetary toys and play money sets, which notes suit each age and how to buy them in Australia.\n\nIt is general buying advice, written by a prop studio that makes specimen-marked notes for film and for events. Choosing the right set takes a few minutes and avoids the two common mistakes: money that is too fragile for small hands, and money that looks too much like the real thing.\n\n## What counts as a monetary toy?\n\nMonetary toys cover plastic coins, card notes, cash registers with play money and printed sets that mimic Australian denominations. They range from chunky toddler coins to printed notes for older children. The common thread is that they are made for play, not for spending.\n\nThat last point matters. Play money should look like play money. If you want to understand the difference between toy notes and film-grade reproductions, our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) explains how each is made and used.\n\n## What to look for in a play money set\n\n1. **Age-suitable size and material.** Toddlers need coins and thick card they cannot tear. Older children can use paper notes in full sets.\n2. **A full range of denominations.** A set with $5, $10, $20, $50 and $100 notes lets a child practise change-making, not just counting.\n3. **Clear, bright artwork.** Bright colours help children tell values apart quickly.\n4. **Clear play markings.** A good set says it is play money or carries a specimen marking, so no one mistakes it for cash.\n5. **Durability.** Notes get folded, counted and dropped. Heavier stock lasts longer.\n6. **Enough quantity.** A group game needs more notes than a single child's till.\n\n## Which notes suit which age\n\n| Age | What to look for |\n|---|---|\n| 3 to 5 | Large, sturdy notes of low value, simple counting and sorting |\n| 6 to 8 | A full set with $5 to $100 notes, shop play and change-making |\n| 9 to 12 | Larger quantities for market-day maths, budgeting games and classroom economies |\n| Teachers and party hosts | Bulk packs that cover a whole group |\n\n## Ideas that use monetary toys\n\n- **Classroom shop.** Label items with prices and let students buy, sell and give change. See our guide to [toy money and play money for kids' games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/) for lesson ideas.\n- **Pretend cafe.** Children take orders and handle payment, which builds speaking and counting skills together.\n- **Budget game.** Give each child a set sum to spend on a list of items.\n- **Party games.** Casino nights, treasure hunts and raffles work well with clearly marked play notes. See [novelty money for parties and events](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/).\n- **Fundraiser raffles.** A bundle of notes as a table decoration or prize adds to the theme.\n\n## How much play money you need\n\nCounting out a set before a lesson saves a lot of confusion. As a guide, plan one full mixed set per pair of children for a shop game, and a separate float of small notes for whoever plays the shopkeeper. For a whole-class market day with 24 children, twelve sets plus a teacher float is a sensible start. For a party, a single bundle per table works as both decoration and game material.\n\nKeep the denominations realistic for the age group. Younger children find $5 and $10 notes enough, because adding and subtracting small values builds confidence. Older children can handle $50 and $100 notes and larger sums, which suits budgeting games and percentage lessons.\n\n## Looking after your set\n\nPlay money gets a lot of use. A few habits keep it going:\n\n- Store it in a labelled zip bag or a small box, sorted by denomination.\n- Count it at the end of each lesson, so missing notes show up early.\n- Keep it away from water, which curls paper stock.\n- Replace torn notes rather than taping them, because tape makes them thicker and easier to tell apart in a pile.\n- Keep a master list of what is in the set, so students can check their own tills.\n\n## Monetary toys or real prop notes?\n\nSome teachers and event hosts ask whether they should buy a toy set or a film-grade reproduction. For young children and everyday games, a play set is cheaper and the right size. For a school drama production, a play with a bank scene or a themed casino night, specimen-marked notes look better on stage and at a distance. Both are clearly marked, and both are for pretend use only. If you are unsure, our team can suggest a fit from the [contact page](/contact/).\n\n## Safety and the law\n\nPlay money should never be mistaken for real currency. Reproductions of banknotes are regulated, and the Reserve Bank publishes guidance on reproducing banknote images on its [banknote pages](https://www.rba.gov.au/banknotes/). Choose sets that are clearly marked, never use them to pay for anything and keep very small coins away from toddlers because they can be a choking hazard. Check the product age labelling and read the [ACCC's product safety information](https://www.productsafety.gov.au/) if you are buying for young children.\n\nOur play notes carry specimen markings in line with Crimes (Currency) Act 1981 Section 22, which is why they are safe for a classroom or party. You can read the full standard on our [compliance page](/compliance/).\n\n## Five play money games that work every time\n\n1. **Shop and shopkeeper.** One child prices a few household items, the others buy with a set budget. Change-making is the real lesson.\n2. **Pay day.** Each player earns a \"wage\" for a task, then decides what to save and what to spend.\n3. **Auction.** The teacher sells small items to the highest bidder, which teaches comparison and limits.\n4. **Restaurant bill.** Groups add up a menu order and split the bill, practising addition and division.\n5. **Savings jar.** Children set a goal and save a little each day in a jar, tracking progress on a chart.\n\nEach one uses the same set of notes, so one purchase covers a term of lessons. The key is to sort the notes by denomination before the game starts, so children spend their time counting and not hunting for a $10.\n\n## What to avoid\n\n- Sets with no clear play or specimen marking.\n- Notes that closely copy current Australian designs without any marking.\n- Tiny coins for under-threes, which are a choking hazard.\n- Very thin paper that tears on the first game.\n- Sellers with no ABN, no address and no invoice.\n\n## Buying for schools, venues and event companies\n\nBulk buyers have different needs from a parent buying one set. A school wants enough notes for a full class and a way to reuse them year after year. A venue or event company wants a themed look, such as a casino night or a game show, and a supplier who can invoice a business. Ask for an invoice with the ABN, because schools and councils usually need one for their records.\n\nIf your event has a brand or a logo, our [custom and branded props](/shop/custom-and-branded-props/) range can carry it, and the [guide for agencies](/blog/custom-and-branded-prop-currency-guide-for-agencies/) explains how a custom order works. For regular large orders, the [wholesale page](/wholesale/) lists the tiers.\n\n## Buying play money in Australia\n\nThe [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/) is a clearly marked set for games, parties and learning. For larger needs, browse the full [play money and event props](/shop/event-and-party-props/) range. Orders start at $300 AUD, which suits schools, venues and event companies buying for a group. Delivery is free from $500 AUD, and cryptocurrency payments receive a 10% discount.\n\nParcels ship from Eltham, Melbourne by Australia Post Express with a signature on delivery. If anything arrives damaged, read our [refund policy](/refund-policy/) for the 3 to 8 business day refund and replacement process.\n\n## Quick buying checklist\n\n- Clear play or specimen marking on every note\n- A full set of denominations\n- Sturdy stock for the age group\n- Enough notes for the whole group\n- A supplier with an ABN, an address and an invoice",
    "faqs": [
      {
        "q": "What are monetary toys?",
        "a": "Monetary toys are play sets with coins, notes or tills that let children practise counting and shop games. They are made for play and are never meant to be spent. See our [play money range](/shop/event-and-party-props/)."
      },
      {
        "q": "What age is play money suitable for?",
        "a": "Chunky coins suit ages 3 to 5, while paper notes and full denomination sets suit ages 6 and up. Always check age labels and keep small parts from toddlers. Our [learning guide](/blog/toy-money-and-play-money-for-kids-games-and-learning/) has ideas."
      },
      {
        "q": "Is play money safe to use at parties and in classrooms?",
        "a": "Yes, when it is clearly marked and not used as payment. Our notes carry specimen markings under the Crimes (Currency) Act 1981. See [novelty money for parties](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/)."
      },
      {
        "q": "How much play money does a classroom need?",
        "a": "Plan a full mixed set per pair of students, plus a bank float for the teacher. Bulk packs work well for whole-class shop games. Browse the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/)."
      },
      {
        "q": "What is the difference between play money and prop money?",
        "a": "Play money is made for games and learning, while prop money is a film-grade reproduction for productions. Both must be clearly marked and never spent. Read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "prop-money-for-music-videos-in-australia",
    "title": "Prop Money for Music Videos in Australia: What to Buy, How Much and How to Shoot It",
    "seoTitle": "Prop Money for Music Videos in Australia: A Buyer Guide",
    "excerpt": "Prop money for music videos needs the right look, volume and paperwork. See what to buy, how much to order and how to shoot cash safely in Australia.",
    "category": "Production Planning",
    "date": "2026-10-26",
    "readTime": "9 min read",
    "image": "prop-money-for-music-videos-in-australia.webp",
    "imageAlt": "Prop money for music videos: fanned $100 specimen prop notes held in a hand",
    "relatedCategories": [
      "money-stacks",
      "photography-props"
    ],
    "relatedProducts": [
      "bulk-money-stack-pack",
      "photography-prop-currency-set"
    ],
    "relatedPage": {
      "href": "/shop/money-stacks/",
      "label": "Shop prop money stacks for video shoots"
    },
    "content": "Cash is a music video staple: a fan of notes in a hand, a table of stacks, money thrown in the air. Searches like \"best prop money for music videos\" and \"fake money for music video\" come from artists, directors and small crews who need cash that looks right on camera and does not cause trouble afterwards. This guide explains what prop money for music videos should look like, how much to order, and how to shoot it safely in Australia.\n\nIt is general production advice, not legal advice. Every PROPPS note is a non-legal tender reproduction made for film, television, theatre, photography and training, and it carries specimen markings.\n\n## What makes prop money work in a music video\n\nMusic videos are shot fast, often handheld, often with colour grading. That changes what matters:\n\n- **Colour that survives grading.** Strong, distinct denominations ($100 green, $50 yellow-gold) hold up when the colourist pushes saturation.\n- **Matte paper.** Gloss throws highlights under LED panels and phone lights. Matte archival paper reads cleanly.\n- **Straps and stacks.** A strapped stack reads as a sum of money at any distance, so you need fewer notes for the same look.\n- **Durability.** Throwing, fanning and rain-of-cash shots damage notes quickly. Order more than you think.\n\nFor judging quality before you buy, read [how to judge high quality prop money on camera](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) and [how cinematographers light prop money](/blog/lighting-prop-money-for-camera-avoiding-glare/).\n\n## How much to order\n\nCount by shot type, then add a margin.\n\n| Shot | What to order |\n|---|---|\n| Fan of notes in a hand | A bundle of one denomination from the [New Notes range](/shop/new-notes/) |\n| Table or bed covered in cash | Strapped stacks from the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/) |\n| Money thrown in the air | Loose notes, plus about 50% extra for damage |\n| Close-up of a single note | A hero note such as the [$100 prop note](/shop/new-notes/100-australian-prop-money-for-sale/) |\n| Social clip and stills | The [photography prop currency set](/shop/photography-props/photography-prop-currency-set/) |\n\nOur guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) walks through the counting method, and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers large volumes.\n\n## Shooting money safely and lawfully\n\nThe law cares about intent and presentation, not the camera. The Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) targets making or possessing items that look like Australian currency without a lawful basis, and the Reserve Bank publishes [guidance on reproducing banknotes](https://www.rba.gov.au/banknotes/). In practice, a few habits keep a video clean:\n\n1. **Keep the notes marked.** Never remove or hide the specimen markings.\n2. **Never spend the notes.** Not as a joke, not as a test.\n3. **Do not frame it as real cash in captions.** A giveaway-style post with prop money invites complaints from platforms and police.\n4. **Keep the invoice.** Show it with the notes if you are asked on location.\n5. **Control the notes on set.** One person counts them out and in.\n\nContent creators should also read [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) before publishing.\n\n## Shooting tips for artists and small crews\n\n**Light for the paper, not the print.** Keep the key light off-axis so the notes do not flare. A single soft source from the side shows texture and avoids glare.\n\n**Dress the notes.** Fresh notes look like a bank vault. For a street or party look, age them slightly. The [art department weathering guide](/blog/art-department-guide-weathering-prop-cash/) shows how.\n\n**Mix denominations.** A stack of all $100 notes can look staged. Mix $50 and $20 notes in the background and keep the hero denomination in the foreground. See [the best denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/).\n\n**Test before the day.** Shoot a few frames of the notes under your lights. Twenty minutes saves a reshoot.\n\n## Budget and ordering for a video shoot\n\nA small music video usually needs one bulk stack plus a few hero notes. Larger productions with several set-ups can ask about wholesale tiers of 10% to 30% off, explained in the [wholesale pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/). Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.\n\nOrder before you need the notes in hand. A late parcel is the most common reason a shoot day starts without cash. Our guide to [ordering props for filming](/blog/props-for-filming-ordering-prop-currency-for-a-shoot/) gives a week-by-week schedule that works for a music video too.\n\n## Common mistakes in music video cash scenes\n\n## Planning the shoot day around the cash\n\nCash scenes eat time. Notes need to be counted out, arranged, restacked and counted back in, and every retake means resetting the pile. Build that into the schedule. A table set-up with a few strapped stacks takes about 15 minutes to dress. A bed covered in notes takes much longer, because each layer has to look natural from the camera angle. If you have a short location window, dress the cash set-up first and rehearse the performance after.\n\nKeep one person responsible for the notes. On a small music video that is usually the producer or the art director. They count the notes out in the morning, count them in at lunch and again at wrap. A discrepancy of a few notes is normal after throw shots, but a missing stack should be found before anyone leaves the location.\n\n## Lighting and lens choices that flatter cash\n\nA shallow depth of field makes a pile of notes look bigger, because the foreground stack stays sharp and the background melts into colour. A longer lens compresses the stacks so they look taller. For handheld fans of notes, a wide lens close to the hand exaggerates the fan and makes the notes look more plentiful. Use a soft source slightly above the notes to bring out texture without glare.\n\nIf you are shooting on a phone, watch autofocus. A fan of notes confuses it, and the focus can hunt between the notes and the background. Lock focus on the front note before the take. Our guide to [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/) goes deeper into the lighting side.\n\n## Location and public-place rules\n\nShooting cash in a public place raises questions from members of the public and sometimes the police. Tell the venue, and keep the supplier invoice and the specimen markings on hand. Do not shoot scenes that show prop notes being handed to strangers who are not part of the crew. Do not film in or near a bank, an ATM or a shop counter without the owner's permission. If a council permit is needed for the location, check it covers what you plan to do, and read the local guidance for film permits in your city.\n\nAvoid leaving notes visible in a parked car or an unattended bag on location. It is a safety habit as much as a legal one, because loose cash attracts attention even when it is a prop.\n\n## After the shoot: storing, reusing and disposing\n\nCount the notes back in and store them flat in the original bags. Notes that have been thrown, rained on or stepped on are best kept for background work. Notes you do not plan to reuse should be destroyed securely, not left at the location or put in a public bin. Keep the unused notes with the supplier invoice, because the next shoot will probably want the same look. If you plan to reorder, our [wholesale page](/wholesale/) lists tiers that reward repeat orders.\n\n## Quick reference for music video cash\n\nPick one hero denomination, buy strapped stacks for volume, order 50% extra for throw shots, test the notes under your lights and keep the invoice with the notes. If you follow those five steps, cash scenes run smoothly and the video looks the part.\n\n- Ordering exactly the number of notes the shot shows, with no margin for throws and retakes.\n- Using glossy novelty notes that glare under LED lights.\n- Shooting a close-up with a note whose printing is blurred.\n- Leaving the specimen marking out of frame in every shot, then posting stills that imply real cash.\n- Collecting the notes from a prop house on the morning of the shoot instead of ordering ahead.",
    "faqs": [
      {
        "q": "What is the best prop money for music videos?",
        "a": "Matte, double-sided notes in strong denominations such as $100 and $50, supplied as strapped stacks plus a few hero notes. See the [New Notes range](/shop/new-notes/) and [money stacks](/shop/money-stacks/)."
      },
      {
        "q": "Can I use fake money in a music video in Australia?",
        "a": "Yes, when the notes are clearly marked reproductions used as props and never as payment or to deceive. Keep the invoice and read our [compliance page](/compliance/)."
      },
      {
        "q": "How much prop money do I need for a music video?",
        "a": "A fan or table scene usually needs one bulk stack plus loose notes. Add about 50% extra for throws and retakes. Our [quantity guide](/blog/how-much-prop-money-do-you-need-for-a-scene/) has examples."
      },
      {
        "q": "Will prop money look good on camera under LED lights?",
        "a": "Matte paper avoids glare under LED panels and phone lights. Test a few frames before the shoot day. See [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/)."
      },
      {
        "q": "How fast can I get prop money for a shoot?",
        "a": "Paid orders usually leave Melbourne within 24 business hours by Express Post, with delivery by region in the [shipping policy](/shipping-policy/). Order before the shoot week."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "can-you-take-prop-money-on-a-plane-in-australia",
    "title": "Can You Take Prop Money on a Plane in Australia? Domestic and International Rules",
    "seoTitle": "Can You Take Prop Money on a Plane? Australian Guide",
    "excerpt": "Can you take prop money on a plane? Learn how to pack and declare prop notes on domestic and international flights from Australia and what to carry.",
    "category": "Compliance & Legal",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "can-you-take-prop-money-on-a-plane-in-australia.webp",
    "imageAlt": "Can you take prop money on a plane: strapped specimen prop notes packed for travel",
    "relatedCategories": [
      "new-notes",
      "film-and-tv-props"
    ],
    "relatedProducts": [
      "film-and-tv-prop-currency-pack",
      "100-australian-prop-money-for-sale"
    ],
    "relatedPage": {
      "href": "/compliance/",
      "label": "Read our specimen compliance standard"
    },
    "content": "Productions and photographers often fly with cash props between cities, and the question comes up every time: can you take prop money on a plane? In most cases yes, on a domestic flight, as long as the notes are clearly marked reproductions, packed sensibly and accompanied by paperwork. International travel adds customs rules and different laws overseas. This guide sets out how to travel with prop money from Australia without delays.\n\nIt is general information, not legal advice. Airline and border rules change, so check the sources linked below before you fly.\n\n## The short answer\n\nYou can generally carry marked prop money in checked or cabin luggage on a domestic flight in Australia. Carry the supplier invoice, keep the specimen markings visible and expect the notes may be inspected at security. For international flights, check customs rules for both countries first. Some countries restrict reproduction currency, and a large stack of notes can draw questions even when it is a prop.\n\n## Domestic flights: how to pack and what to carry\n\n1. **Keep the notes in the original strapped stacks.** A neat, counted stack explains itself at the X-ray.\n2. **Carry the invoice and a one-line letter.** \"Reproduction currency for [production name], supplied by PROPPS PTY LTD\" is enough.\n3. **Check the airline's carry-on and checked rules.** Weight, size and valuables policies vary. The airline's website is the authority.\n4. **Do not scatter loose notes in a bag.** A crumpled, mixed pile looks like real cash.\n5. **Keep notes in your control.** Do not put a large stack in a bag you will leave unattended.\n\nIf a security officer asks, show the specimen markings and the invoice. That is what they are for. Our [compliance page](/compliance/) sets out the markings on every PROPPS note, and the guide to [prop money laws in Australia](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) explains the legal background.\n\n## International flights: check both ends\n\nTravelling outside Australia is different. Three things to check:\n\n- **Australian outbound rules.** The Australian Border Force explains what you must declare on [its travel pages](https://www.abf.gov.au/). AUSTRAC explains [cross-border currency reporting](https://www.austrac.gov.au/), which applies to genuine physical currency at or above a set threshold. A prop is not currency, but a large face value invites questions, so carry the invoice and the letter.\n- **Destination rules.** Some countries restrict or ban reproduction banknotes, particularly polymer designs that closely copy local notes. Check the destination's customs website.\n- **Return trip.** Re-entering Australia, declare the notes honestly and carry the same paperwork.\n\nIf you are unsure, the safer option is to ship the props to the shoot location with a tracked courier instead of carrying them. [Australia Post](https://auspost.com.au/) and other carriers can deliver to a production address with signature.\n\n## Shipping instead of flying with it\n\nFor many productions, posting the notes ahead is easier than carrying them. PROPPS ships from Eltham, Melbourne by Australia Post Express with a mandatory signature on delivery, usually within 24 business hours of payment. Delivery takes 1 day to Melbourne, 1 to 2 days to Sydney, Canberra, Brisbane and Adelaide, 2 to 3 days to Perth, Hobart and Darwin, and 3 to 5 days to remote sites. See the [shipping policy](/shipping-policy/) for detail, and our guide to [how fast you can get prop money in Australia](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/).\n\n## Why markings and paperwork matter at airports\n\nAirports are full of people whose job is to ask questions. A clearly marked specimen note and an invoice answer most of them in seconds. A note with no marking, bought from an anonymous overseas seller, does not. This is one reason we recommend [buying prop money from an Australian supplier you can identify](/blog/where-to-buy-prop-money-in-australia-legally/) and avoiding unmarked overseas listings, which are covered in our [local vs overseas comparison](/blog/local-vs-overseas-prop-money-suppliers-compared/).\n\n## A travel checklist for prop money\n\n| Item | Why |\n|---|---|\n| Supplier invoice | Proof of purpose and source |\n| One-line production letter | Explains the notes at a glance |\n| Notes in strapped stacks | Reads as a prop at X-ray |\n| Specimen markings visible | Shows it is a reproduction |\n| Airline policy checked | Avoids surprises at the gate |\n| Destination customs checked (international) | Some countries restrict reproductions |\n\n## What happens at airport security\n\nAirport screening looks at shape, density and contents on the X-ray. A bag with several strapped stacks of paper shows up as a dense, uniform block. That can prompt a hand search, and a security officer may ask what the notes are. The calm, quick answer is to say they are marked reproduction notes for a production, and to show the invoice and the specimen marking. Do not joke about the notes being real cash. Do not hide the stacks in a lining or a shoe.\n\nAllow extra time at the gate when you travel with a large volume of notes. A bag that needs a hand search is normal and not a sign of a problem. A traveller who has the paperwork ready and answers plainly is usually through in a few minutes.\n\n## Carrying notes for a photoshoot or a content shoot\n\nThe same rules apply to photographers and content creators who fly to a location. Carry a small, counted set in a sealed bag, with the invoice in the same bag. Do not mix the prop notes with real cash in a wallet or a handbag, because it creates two problems: the risk of spending a prop by mistake, and the risk of confusion if you are asked to show your cash. Our [photography prop currency set](/shop/photography-props/photography-prop-currency-set/) is sized for exactly this kind of trip, and the guide to [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) covers publishing the results.\n\n## What to do if you are questioned\n\nStay calm and give short, factual answers. Say what the notes are, who supplied them and why you are carrying them. Show the invoice and point to the specimen marking on a note. If the officer wants to keep the notes for a check, ask for the officer's name and the reference of any record they keep, and contact the supplier. PROPPS can confirm an order by email if an officer asks. You do not need to argue. Marked, documented props are a normal part of film and photography work, and officers deal with them regularly.\n\n## Insurance and the production file\n\nIf you are travelling for a production, put a line about the notes in the production file or the call sheet, with the number of notes, the denominations and the supplier. Insurers and production managers like a record of what was carried, who carried it and when it was returned. It also makes the return trip easier, because you know the count you started with.\n\n## Packing tips\n\n- Use a hard, closable case or a sturdy bag, so the stacks keep their shape.\n- Keep a copy of the invoice inside and a second copy on your phone.\n- Photograph the notes and the markings before you leave, in case you need to show the condition later.\n- Carry the notes in your cabin bag if the shoot cannot go ahead without them, so a lost checked bag does not stop the day.\n- Never leave the bag unattended at a gate or in a taxi.\n\n## Special cases: theatre tours, events and training\n\nTheatre companies on tour often carry stage cash from city to city. Keep a master count in the tour bible, put the notes in a lockable prop box and carry the supplier invoice on the first page. Event companies that fly with casino-night or game-show props should treat the notes the same way, and trainers who run cash-handling exercises should record what leaves and returns with each course.\n\nFor a regular touring schedule, it can be cheaper to order a second set at the destination than to carry a set around. If you tour frequently, talk to us about delivery to venues along the route using the [contact page](/contact/).\n\nOrders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.",
    "faqs": [
      {
        "q": "Can you take prop money on a plane in Australia?",
        "a": "Generally yes on a domestic flight, if the notes are clearly marked reproductions, packed as strapped stacks and carried with the invoice. Check your airline rules before you fly."
      },
      {
        "q": "Do I need to declare prop money at customs?",
        "a": "For international travel, check the Australian Border Force and destination customs rules, and carry the invoice. A prop is not currency, but a large face value can draw questions. See our [compliance page](/compliance/)."
      },
      {
        "q": "Should I post prop money instead of carrying it?",
        "a": "Often yes. Express Post with signature delivers to a production address and avoids airport questions. See the [shipping policy](/shipping-policy/) for times by region."
      },
      {
        "q": "What paperwork should I carry with prop money?",
        "a": "The supplier invoice and a one-line production letter naming the project and supplier. Keep the specimen markings visible. Our [legal guide](/blog/is-it-illegal-to-buy-prop-money-australia/) explains why."
      },
      {
        "q": "Is it illegal to carry prop money in public?",
        "a": "Carrying clearly marked props for production use is lawful, but never use them as payment or show them as real cash. Read [can you buy prop money in Australia](/blog/can-you-buy-prop-money-in-australia/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "how-much-is-a-million-dollars-in-prop-money",
    "title": "How Much Is a Million Dollars in Prop Money? Face Value, Stacks and Cost in Australia",
    "seoTitle": "How Much Is a Million Dollars in Prop Money?",
    "excerpt": "How much is a million dollars in prop money? See stacks, face value and cost from our published price tiers, plus ways to cut the cost.",
    "category": "Ordering & Payment",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "how-much-is-a-million-dollars-in-prop-money.webp",
    "imageAlt": "How much is a million dollars in prop money: strapped specimen prop stacks of Australian notes",
    "relatedCategories": [
      "money-stacks",
      "new-notes"
    ],
    "relatedProducts": [
      "bulk-money-stack-pack",
      "100-australian-prop-money-for-sale"
    ],
    "relatedPage": {
      "href": "/wholesale/",
      "label": "Ask about wholesale prop money tiers"
    },
    "content": "\"How much is a million dollars in prop money?\" is a question every heist film, bank scene and music video eventually asks. The answer has two parts: how much a stack of prop notes costs, and how many stacks it takes to fill the frame with a million dollars of face value. This guide uses our published price tiers to answer both, then shows how to get the look for less.\n\nThe face value on a prop note is not real money. Our notes are non-legal tender reproductions and must never be spent. The \"million dollars\" is the sum the audience sees on screen, nothing more.\n\n## The short answer\n\nAt our published tiers, 100 Stacks carries $200,000 of face value for $14,000 AUD. A million dollars of face value is therefore five of those runs: 500 stacks, or about $70,000 AUD before any wholesale discount. Cryptocurrency payments receive a further 10% off, and studio-scale orders can ask about wholesale tiers of 10% to 30% off.\n\n## Our price tiers at a glance\n\n| Bundle | Face value | Price (AUD) | Price per $1,000 of face value |\n|---|---|---|---|\n| Starter Stack | $1,500 | $115 | about $77 |\n| 1 Stack | $2,000 | $200 | $100 |\n| 5 Stacks | $10,000 | $850 | $85 |\n| 10 Stacks | $20,000 | $1,600 | $80 |\n| 50 Stacks | $100,000 | $7,500 | $75 |\n| 100 Stacks | $200,000 | $14,000 | $70 |\n\nThe bigger the run, the lower the cost per $1,000 of face value. The largest published bundle costs $70 per $1,000, so a million dollars of face value is about $70,000 at list price. Check the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/) for current prices.\n\n## How many notes is that?\n\nThe note count depends on the denomination. A million dollars in $100 notes is 10,000 notes. In $50 notes it is 20,000. In $20 notes it is 50,000. Mixed stacks fall in between. This is why the denomination matters as much as the bundle size.\n\n| Denomination | Notes for $1,000,000 face value |\n|---|---|\n| $100 | 10,000 |\n| $50 | 20,000 |\n| $20 | 50,000 |\n| $10 | 100,000 |\n| $5 | 200,000 |\n\nMost productions choose $100 and $50 notes for a million-dollar look, because fewer notes fill a bag or table. Compare them in the [New Notes range](/shop/new-notes/) and read [the best denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/).\n\n## Do you really need a million dollars of face value?\n\nUsually not. The camera sees the front stacks and the first layer of notes, not what is underneath. A common trick is a \"hero\" layer of real prop stacks on top and cheaper fillers underneath. Our guide to [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows how to count what is actually visible, and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers vaults and bags in detail.\n\nA briefcase holds far less than people expect. A scene that needs \"one million in a case\" often needs only a few stacks arranged to fill the lid. Plan the shot first, then order.\n\n## Ways to bring the cost down\n\n1. **Count the visible stacks only.** Fill the rest with cheaper filler.\n2. **Pay with cryptocurrency.** It earns a 10% discount.\n3. **Ask about wholesale tiers.** Larger runs qualify for 10% to 30% off; see the [wholesale pricing guide](/blog/wholesale-prop-money-for-production-companies-bulk-pricing-explained/).\n4. **Mix denominations.** A $100-heavy top layer and $20s underneath is a normal real-world mix.\n5. **Reuse across scenes.** Keep the notes organised and count them back in at wrap.\n\nFor what the price includes, see [cheap prop money: what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/).\n\n## Paperwork and delivery for a large order\n\nA large order is a good reason to keep the supplier invoice with the production file and to plan delivery. Parcels ship from Eltham by [Australia Post Express](https://auspost.com.au/) with signature on delivery. For orders of this size we recommend contacting us first so the packing, the delivery address and the lead time are agreed. Use the [contact page](/contact/) or the [wholesale page](/wholesale/).\n\n## What a million dollars of notes looks like physically\n\nTen thousand $100 notes make a stack roughly a metre tall if piled flat, and the weight is in the order of ten kilograms. Notes in strapped bundles of 100 make 100 bundles, which fit in a medium duffel bag or two small suitcases. These figures matter for the shot: a hero bag with a million dollars of $100 notes is physically heavy and bulky, and actors need to handle it believably. A bag filled with lighter filler and a top layer of real stacks looks the same on camera and is far easier to carry.\n\nIf your scene has an actor carrying the bag, test it first. A bag that looks heavy but is light, or one that is actually heavy but is carried like a light one, gives the game away. Our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) covers how to plan weight and bulk.\n\n## Worked examples\n\n**A briefcase scene.** A standard briefcase holds only a handful of strapped bundles of 100 notes in a single layer, which is a few tens of thousands of dollars of face value in $100 notes. For a \"one million in a case\" line of dialogue, stage the case with four rows of stacks and let the dialogue do the rest. No one counts.\n\n**A vault shelf.** A shelf of strapped $100 bundles reads as a large sum. To suggest a million, fill several shelves with the same bundle and place the hero stack at the front where the camera can see the strap.\n\n**A duffel bag.** A duffel bag filled with a top layer of strapped $100 stacks and a lower layer of filler reads as millions. The first ten bundles are what the camera sees.\n\n**A table of cash.** A table covered in bundles photographs as a large sum with about 20 to 30 stacks, depending on the lens and the angle, and you can test it in a few minutes.\n\n## Mixing denominations to cut the cost\n\nA real cash drawer holds a mix of notes, and a mix looks more natural on screen than a single denomination. Use $100 notes for the stacks the camera sees most, and $50 and $20 notes in the secondary stacks. The face value of the whole pile may be lower than a million, but the look is the same. For help choosing, see [the best denominations for film and TV scenes](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) and the guide to [choosing a $100 bundle size](/blog/100-dollar-prop-money-which-bundle-size/).\n\n## Is the price per stack the same for every denomination?\n\nOur published tiers set the price by bundle size, and the face value in each tier is what the audience reads. You can mix denominations within an order. For custom quantities beyond the published tiers, or for a specific mix, contact us on the [contact page](/contact/) and we will quote. Always check the live prices on the product page before you plan a budget, because prices and tiers can change.\n\n## Planning a budget in four steps\n\n1. **Decide what the camera will see.** Count the stacks in frame, not the total in the story.\n2. **Choose the denomination.** Use the table above to see how many notes each option needs.\n3. **Match a bundle size.** Use the price tiers to pick the nearest bundle, then add a margin of about 20% for damage and reshoots.\n4. **Apply discounts.** Check cryptocurrency and wholesale options before you finalise.\n\nA worked example: a heist scene needs a bag that reads as $500,000 in $100 notes. The camera sees about 12 strapped stacks in the open bag. Order one 5 Stacks bundle ($10,000 face value, $850) as a hero set plus a few extra bundles for the top layer, and fill the rest of the bag with filler. The cost is a small fraction of a literal $500,000 of face value and the shot looks identical.\n\nOrders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.",
    "faqs": [
      {
        "q": "How much is a million dollars in prop money?",
        "a": "At our published tiers, 500 stacks carry $1,000,000 of face value, about $70,000 AUD at list price before wholesale or crypto discounts. See the [bulk money stack pack](/shop/money-stacks/bulk-money-stack-pack/)."
      },
      {
        "q": "How many $100 notes make a million dollars?",
        "a": "A million dollars of face value is 10,000 notes of $100. In $50 notes it is 20,000. See the [New Notes range](/shop/new-notes/) for denominations."
      },
      {
        "q": "Can I get a discount on a large prop money order?",
        "a": "Yes. Cryptocurrency payments receive 10% off and studio-scale orders can ask about wholesale tiers of 10% to 30% off. See the [wholesale page](/wholesale/)."
      },
      {
        "q": "Do I need the full face value on camera?",
        "a": "Usually not. The lens sees the front stacks and top layer, so most scenes need far fewer notes. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/)."
      },
      {
        "q": "Is a million dollars of prop money real cash?",
        "a": "No. The face value is only what appears on screen. Prop notes are non-legal tender and must never be spent. See our [compliance page](/compliance/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "fake-money-for-parties-casino-nights-birthdays-weddings",
    "title": "Fake Money for Parties in Australia: Casino Nights, Birthdays and Weddings",
    "seoTitle": "Fake Money for Parties: Casino Nights and Weddings",
    "excerpt": "Fake money for parties works best when clearly marked. See ideas for casino nights, birthdays and weddings, how much to buy and what is legal.",
    "category": "Buying Guide",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "fake-money-for-parties-casino-nights-birthdays-weddings.webp",
    "imageAlt": "Fake money for party use: clearly marked specimen prop notes fanned on a table",
    "relatedCategories": [
      "event-and-party-props"
    ],
    "relatedProducts": [
      "event-and-party-prop-cash-pack"
    ],
    "relatedPage": {
      "href": "/shop/event-and-party-props/",
      "label": "Shop play money for events and parties"
    },
    "content": "Fake money for a party is one of the easiest ways to lift a theme: poker chips need a bankroll, a casino night needs a cash prize, a wedding photo needs a bouquet of notes. The trick is picking money that looks great in photos but is clearly a prop. This guide covers ideas for casino nights, birthdays and weddings, how much to buy, and what the rules say in Australia.\n\nIt is general information, not legal advice. Every note we sell is a non-legal tender reproduction with specimen markings, which is what keeps party props on the right side of the law.\n\n## Party ideas that use fake money\n\n- **Casino night.** Give each guest a starting stack and let them play. Winners swap their winnings for a prize at the end of the night.\n- **Birthday party.** Use notes as table decoration, a treasure-hunt reward or a themed backdrop for photos.\n- **Wedding and hens or bucks nights.** Notes work as photo props, a \"dollar dance\" theme, or decor for a retro casino table. Keep them away from real tips and gifts so no one mixes them up.\n- **Kids and teen parties.** A pretend shop or bank game with play money keeps younger guests busy. See [monetary toys and play money sets](/blog/monetary-toys-and-play-money-sets-for-kids/).\n- **Fundraisers and raffles.** A table of notes sets the tone for a themed auction.\n\n## What to look for in party fake money\n\n1. **Clear markings.** A visible specimen marking makes it obvious the notes are not real.\n2. **Sturdy paper.** Party notes get dealt, folded and spilled. Matte archival paper survives longer than thin novelty stock.\n3. **A mix of denominations.** Casino games need small notes for betting and large ones for the cash-out.\n4. **Enough quantity.** Plan a stack per player at a casino table.\n5. **A supplier with an ABN and an invoice.** Venues and councils sometimes ask where the props came from.\n\nOur [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/) is built for this, and the full [play money range](/shop/event-and-party-props/) shows other sizes.\n\n## How much to buy\n\nA simple rule: one mixed stack per player for a casino night, one bundle per table for decoration, and a small bundle per child for a pretend shop. For a 40-guest casino evening with five tables, plan about eight stacks in total (one per table for the house, plus player stacks). Order a margin for lost and damaged notes.\n\n| Party | Suggested quantity |\n|---|---|\n| Casino night, 20 guests | 20 player stacks plus 2 house stacks |\n| Birthday decoration | 1 bundle per table |\n| Wedding photos | 1 fan plus 1 strapped stack |\n| Kids' pretend shop | 1 small bundle per child |\n\n## What the rules say in Australia\n\nReproducing Australian banknotes is regulated. The Reserve Bank explains how reproductions must differ from genuine notes on its [banknote pages](https://www.rba.gov.au/banknotes/), and the offences sit in the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/). For parties, three habits keep things simple:\n\n- Use marked notes only.\n- Never use fake money as payment, a tip or a gift.\n- Keep party props out of tills, taxis and vending machines.\n\nRead more in our guide to [novelty money for parties and events](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/) and the [compliance page](/compliance/).\n\n## Photo and decor tips\n\nFan notes in a hand for a quick photo, or stack them in a glass bowl as a centrepiece. Matte notes photograph without glare, even with flash. For a wall display, tape a few notes inside a frame with a \"specimen\" marking visible. Avoid stuffing party props in a real wallet or handbag, where they can be mistaken for genuine cash.\n\nIf you are shooting a themed party for social media, read [prop money for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/) first.\n\n## Ordering for an event\n\nOrder two weeks before the party if you can. Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window. For a large venue or a series of events, ask about [wholesale rates](/wholesale/).\n\n## Play money or prop money for a party?\n\n## Running a casino night with fake money\n\nA good casino night follows a few simple rules. Give every player the same starting stack, so the game is fair. Set a clear exchange: for example, a stack of notes buys 20 chips from the house. Use a banker at each table to keep the counting honest. At the end of the night, winners swap their chips or notes for raffle tickets or prizes, and the notes are collected back for reuse. Do not allow real money to be bet or exchanged, because gambling laws apply to real stakes, and a prop-only game keeps things simple.\n\nGive each table a small float of low denominations for change. Mixed notes keep the game moving and make the table look right in photos. A neat stack of $100 notes at the dealer's position adds to the theme without being handled by players.\n\n## Birthday and themed party ideas\n\n- **Gangster and roaring-twenties themes.** Fan notes in a cigar box, stack them under a glass cloche as a centrepiece or tuck a few into a costume pocket.\n- **Treasure hunt.** Hide strapped bundles as the final prize, with a note inside as a clue.\n- **Dress-up and photo booth.** A fan of notes and a few stacks make a quick photo prop for guests.\n- **Milestone birthdays.** A banner or cake topper with a few notes folded around it gives a themed look without a lot of cost.\n\n## Weddings and hens and bucks events\n\nAt weddings, fake money is usually a photo prop or a game prize. A \"dollar dance\" theme works well with prop notes for the photos, but the real gifts should go in a separate, secure place so no one mixes the two. Hens and bucks nights use fake money for dares, auctions and mock casinos. Keep prop notes clearly separated from real cash and gifts, and keep a person in charge of the notes.\n\nIf your event is photographed professionally, tell the photographer the notes are props. The same rules apply as in any shoot, and our guide to [prop money for photography](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/) has tips for lighting and presentation.\n\n## Keep it safe and keep it fun\n\nParty props get handled by many people and sometimes by guests who have had a drink. Three simple rules reduce risk. First, use marked notes only. Second, collect them at the end of the night, so no stray notes leave the venue. Third, never use them to pay for anything, even as a joke. A guest who tries to pay a taxi driver with a prop note is the exact situation the law is concerned about, so brief your guests when you hand them out.\n\n## Reusing and storing party props\n\nMatte archival paper survives several events if stored flat and dry. Count the notes after each event, bag them by denomination and keep the invoice. If you run themed events regularly, a bulk order costs less per note than repeated small orders. See [wholesale prop money](/wholesale/) for tiers.\n\n## Budget and timing for party fake money\n\nPlan the number of stacks first, then choose a bundle size that covers it with a small margin. Order at least two weeks before the event, because a late parcel is the most common reason a themed party loses its centrepiece. If the party is a recurring event, such as a monthly casino night at a venue, buy a bulk set once and reuse it. Matte archival paper handles dozens of games if it is stored flat and dry.\n\nDo not buy for a single guest list and nothing more. Guest numbers change, and a few spare stacks cost far less than running out mid-game. Keep the extra stacks sealed so they stay clean for the next event.\n\n## A simple casino night timeline\n\n| Time | What happens |\n|---|---|\n| Arrival | Guests receive a starting stack and a score card |\n| First hour | Tables open and games run |\n| Midway | A short break for food, notes counted by the bankers |\n| Final hour | Prize auction, using the notes as the only currency |\n| End | Notes collected, counted and stored for the next event |\n\nToy sets suit young children and classroom-style games. Film-grade specimen notes suit adult casino nights and photo shoots because they look better at arm's length. Our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) helps you choose.",
    "faqs": [
      {
        "q": "Is fake money legal to use at a party in Australia?",
        "a": "Yes, when it is clearly marked and used as a prop only. Never use it as payment, a tip or a gift. See [novelty money for parties](/blog/novelty-money-for-parties-and-events-whats-legal-in-australia/)."
      },
      {
        "q": "How much fake money do I need for a casino night?",
        "a": "Plan one mixed stack per player plus a house stack for each table. Add a margin for lost and damaged notes. Browse the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/)."
      },
      {
        "q": "Can I use fake money at a wedding?",
        "a": "Yes, as decor, a photo prop or a casino-table theme. Keep it away from real gifts and tips. See the [play money range](/shop/event-and-party-props/)."
      },
      {
        "q": "What is the difference between play money and prop money?",
        "a": "Play money is for games and learning, while prop money is a film-grade reproduction for photos and productions. Both must be clearly marked. Read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/)."
      },
      {
        "q": "How do I order party money in Australia?",
        "a": "Order online from an Australian supplier with an ABN. PROPPS ships from Melbourne by Express Post with signature. See the [shipping policy](/shipping-policy/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "australian-polymer-prop-money-vs-paper-prop-notes",
    "title": "Australian Polymer Prop Money vs Paper Prop Notes: Which Is Safer to Buy?",
    "seoTitle": "Australian Polymer Prop Money vs Paper Prop Notes",
    "excerpt": "Australian polymer prop money copies real notes closely and carries more legal risk. See how paper prop notes differ and what to check before you buy.",
    "category": "Compliance & Legal",
    "date": "2026-10-26",
    "readTime": "9 min read",
    "image": "australian-polymer-prop-money-vs-paper-prop-notes.webp",
    "imageAlt": "Australian polymer prop money compared with paper specimen prop notes in a hand",
    "relatedCategories": [
      "new-notes",
      "film-and-tv-props"
    ],
    "relatedProducts": [
      "100-australian-prop-money-for-sale",
      "50-australian-prop-money-for-sale"
    ],
    "relatedPage": {
      "href": "/compliance/",
      "label": "See how our paper specimen notes are marked"
    },
    "content": "Search for \"Australian polymer prop money\" and you will find overseas sellers offering polymer notes that copy real Australian banknotes. They look impressive in photos. They also sit much closer to the legal line than a paper prop with a clear specimen marking. This guide explains the difference between polymer and paper prop notes in Australia, why it matters for a production, and what to check before you buy.\n\nIt is general information, not legal advice. For a specific project, read the legislation and speak to your own lawyer.\n\n## The short answer\n\nFor most film, television, theatre and photography work, a paper reproduction with permanent specimen markings is the safer choice. Genuine Australian banknotes are polymer. A prop made of the same material and printed to copy the real design is much harder to tell apart from the real thing, which is exactly what the law and the Reserve Bank's guidance are concerned about.\n\n## Why material matters\n\nThe [Reserve Bank](https://www.rba.gov.au/banknotes/) publishes guidance on reproducing banknotes, and the offences are in the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/). Both focus on whether a reproduction could be mistaken for a genuine note. Material is one of the clearest differences a person can feel in the hand:\n\n| | Paper specimen prop note | Polymer lookalike |\n|---|---|---|\n| Feels like | Paper | Plastic, close to a real note |\n| Specimen marking | Permanent, prominent | Often faint, small or missing |\n| Distinct from real notes | Yes, by material and marking | Much less |\n| Overseas shipping risk | Lower | Higher; parcels can be held at the border |\n| Typical use | Film, TV, theatre, photography | Often marketed with misleading claims |\n\n## Red flags in polymer prop listings\n\n- Claims that notes \"pass the pen test\", are \"undetectable\" or \"indistinguishable\".\n- Specimen markings described as \"optional\" or removable.\n- No Australian ABN, address or phone number.\n- Discreet or unmarked packaging sold as a benefit.\n- Delivery from overseas with no tracking or signature.\n\nAny one of these is a reason to walk away. Our guide to [the legal difference between fake money and prop money](/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/) explains why, and [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) compares the options.\n\n## What a compliant paper prop looks like\n\nA PROPPS note is printed double-sided on matte archival paper and carries permanent specimen markings. The size, material and treatment deliberately differ from a genuine note, so the prop reads as money on camera and as a reproduction in the hand. You can see the standard on our [compliance page](/compliance/), and the guide to [Crimes Act and RBA prop money rules](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) goes into detail.\n\nCompare the notes yourself in the [New Notes range](/shop/new-notes/), from the [$5](/shop/new-notes/5-australian-prop-money-for-sale/) to the [$100](/shop/new-notes/100-australian-prop-money-for-sale/).\n\n## Will paper look real enough on camera?\n\nYes. Cameras see colour, print detail and mass, not polymer. A matte paper note reads cleanly under studio and LED lights, and it avoids the glare polymer can throw. Read [how to judge high quality prop money on camera](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) and [lighting prop money for camera](/blog/lighting-prop-money-for-camera-avoiding-glare/).\n\n## Overseas polymer: the shipping and customs problem\n\nPolymer lookalikes ordered from overseas can be seized or held at the border, delaying a shoot. Local supply avoids this, and an Australian supplier gives you an invoice, a contact and recourse if a count is wrong. Our post on [where to buy prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/) sets out the steps.\n\n## A buyer checklist\n\n1. Ask for a close-up photo of an actual note, front and back, with the marking visible.\n2. Confirm the material and how it differs from a genuine note.\n3. Check for an ABN, a physical address and a phone number.\n4. Confirm signed-for delivery and an invoice.\n5. Read the refund terms.\n\n## What the law and the RBA focus on\n\nThe Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) deals with making and possessing items that look like Australian currency without a lawful basis. The Reserve Bank's guidance on reproducing banknote images exists for a practical reason: genuine Australian notes have security features, and convincing copies cause problems for shops and banks. The factors that matter are how closely a reproduction copies a real note, how clearly it is marked, how it is described and what it is used for.\n\nA paper reproduction with a permanent marking does well on each factor. A polymer lookalike that copies the design closely, with faint marking and sales copy that boasts about realism, does badly on each. This is the plain reason we do not sell polymer notes and recommend against buying them online from unknown sellers.\n\n## What productions ask for, and what they actually need\n\nMany art departments ask for \"polymer so it feels real\". It is a reasonable instinct, but it solves a problem the camera does not have. A lens sees colour, print detail and the way light falls on the surface. It does not see polymer. The feel in the hand matters for a close-up when an actor handles the note, and a matte paper note handles convincingly in that situation too, because audiences do not hold the note themselves.\n\nIf a scene needs an actor to flick through a wad of notes, the sound can matter. Paper notes make a soft riffling sound that reads as cash on set microphones. A stack of plastic notes sounds different and can be picked up as \"wrong\" on a well-recorded track. Test the sound with your sound recordist before the day.\n\n## Insurance, locations and public places\n\nInsurers and location owners ask about the props that will be on set. A paper note with a clear marking and an invoice from an Australian supplier is a simple answer. A polymer note from an overseas listing with no invoice is a complicated one. Productions that shoot in banks, shops or public places should be especially careful, because staff and members of the public may see the notes and have no context. Keep the notes under control, brief the crew and keep the supplier details on hand.\n\n## Buying checklist for polymer claims\n\nIf you are still considering a polymer lookalike, ask the seller in writing: Where is the marking and how large is it? Who is the business and what is its ABN? How is the parcel shipped and who signs for it? What happens if it is held at the border? Honest sellers answer quickly and in detail. If the answers are vague, you have your answer.\n\nFor a clear alternative, our notes are available from the [$5](/shop/new-notes/5-australian-prop-money-for-sale/) to the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and in strapped stacks. The [film and TV prop currency pack](/shop/film-and-tv-props/film-and-tv-prop-currency-pack/) covers a full set.\n\n## Which one should your production choose?\n\nFor nearly all film, television, theatre and photography work, choose paper with a clear specimen marking from a supplier you can identify. It looks right on camera, handles well, ships without drama and makes the paperwork simple. Polymer lookalikes add legal and shipping risk with no benefit the lens can see. If a director insists on a feel-in-hand test, order a small sample set first and let the art department handle it. Most teams decide within a minute.\n\n## A short decision guide\n\n| Your situation | Best choice |\n|---|---|\n| Film, TV or theatre with insurance and a production file | Paper with specimen marking and an invoice |\n| Photoshoot or content shoot | Paper set from a local supplier |\n| Tight deadline in Australia | Local paper stock, shipped by Express Post |\n| Overseas listing with no marking or invoice | Walk away |\n| Anything marketed as undetectable | Walk away |\n\n## Summary\n\nPolymer is what real Australian notes are made of, and that is exactly why a polymer prop is risky. Paper reproductions with permanent specimen markings give productions the look they need and keep everyone, from the art department to the insurer, comfortable. Our [compliance page](/compliance/) and the guide to [where to buy prop money legally](/blog/where-to-buy-prop-money-in-australia-legally/) explain how to check any supplier.\n\nOrders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.",
    "faqs": [
      {
        "q": "Is Australian polymer prop money legal?",
        "a": "It depends on how closely it copies real notes and how it is marked. Polymer lookalikes carry more legal risk than paper reproductions with clear specimen markings. Read our [compliance page](/compliance/)."
      },
      {
        "q": "Why are PROPPS notes paper and not polymer?",
        "a": "Genuine Australian notes are polymer, so paper with a specimen marking keeps the prop clearly distinct. It also avoids glare on camera. See the [New Notes range](/shop/new-notes/)."
      },
      {
        "q": "Will paper prop money look real on camera?",
        "a": "Yes. Cameras see colour, detail and mass, and matte paper avoids glare. Read [how to judge high quality prop money](/blog/high-quality-prop-money-how-to-judge-it-on-camera/)."
      },
      {
        "q": "Can overseas polymer prop money be stopped at the border?",
        "a": "Yes, lookalike reproductions can be held by customs, delaying a shoot. An Australian supplier avoids that risk. See [local vs overseas suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/)."
      },
      {
        "q": "What markings should a legal prop note have?",
        "a": "Permanent, prominent specimen markings and clear differences from a genuine note. The Reserve Bank explains its approach on its [banknote pages](https://www.rba.gov.au/banknotes/)."
      }
    ],
    "updated": "2026-10-26"
  },
  {
    "slug": "australian-play-money-where-to-buy-and-what-to-check",
    "title": "Australian Play Money: Where to Buy It and What to Check Before You Do",
    "seoTitle": "Australian Play Money Set: Where to Buy and What to Check",
    "excerpt": "Looking for an Australian play money set? Compare toy shops, school suppliers and specialist makers and see what to check on notes and packs.",
    "category": "Buying Guide",
    "date": "2026-10-26",
    "readTime": "8 min read",
    "image": "australian-play-money-where-to-buy-and-what-to-check.webp",
    "imageAlt": "Australian play money set: specimen-marked play notes fanned in a hand for kids games",
    "relatedCategories": [
      "event-and-party-props"
    ],
    "relatedProducts": [
      "event-and-party-prop-cash-pack"
    ],
    "relatedPage": {
      "href": "/shop/event-and-party-props/",
      "label": "Shop Australian play money"
    },
    "content": "Parents, teachers and party hosts search for an Australian play money set for the same reason: they want notes and coins that look Australian, feel sturdy and are clearly toys. Big retailers carry basic sets, school suppliers carry classroom packs and specialist makers carry film-grade notes. This guide compares where to buy Australian play money, and what to check on the notes, the pack and the markings before you spend.\n\nIt is general buying advice from a prop studio that makes specimen-marked notes. We are not affiliated with any retailer named below, and range and prices at shops change often, so check each store.\n\n## The main places to buy play money in Australia\n\n| Where | Typical strengths | Typical limits |\n|---|---|---|\n| Big-box toy and discount stores such as Kmart, Big W and Target | Low price, easy to find, good for a single child | Small packs, thin stock, limited denominations |\n| Office and stationery stores such as Officeworks | Classroom and teaching supplies | Often generic, not always Australian designs |\n| Educational suppliers | Class sets, durable coins | Higher price, school-only ranges |\n| Online marketplaces | Wide choice | Variable quality, unclear markings, slow overseas shipping |\n| Specialist makers such as PROPPS | Heavier paper, Australian denominations, clear markings, bulk quantities, invoice | Orders start at $300 AUD, so best for groups, events and schools |\n\nYour choice depends on the group size. One child's pretend shop is a toy-aisle purchase. A class, a fundraiser or a themed event usually needs more notes than a retail pack offers.\n\n## What to check on the notes\n\n1. **A clear play or specimen marking.** This makes the notes safe to use in games and classrooms. Reproductions of banknotes are regulated; the Reserve Bank explains its approach on its [banknote pages](https://www.rba.gov.au/banknotes/).\n2. **Australian denominations.** A set with $5, $10, $20, $50 and $100 notes lets children practise change-making in dollars.\n3. **Paper weight.** Thin notes tear in the first game.\n4. **Print quality.** Clear numbers and bright colours help young children tell values apart.\n5. **Pack size.** Count the notes per pack, not just the pack price.\n\n## What to check on the seller\n\n- An ABN and a physical address.\n- A clear return policy. Ours is set out on the [refund policy](/refund-policy/) page with refunds in 3 to 8 business days.\n- A stated delivery time and tracking. We dispatch by [Australia Post Express](https://auspost.com.au/) with signature.\n- An invoice for schools and councils.\n\n## Play money by age and use\n\n**Under 5.** Chunky coins and thick notes of low value. Keep small coins away from toddlers because they can be a choking hazard; see [Product Safety Australia](https://www.productsafety.gov.au/).\n\n**Ages 6 to 8.** A full mixed set for shop and cafe games.\n\n**Ages 9 to 12.** Larger quantities for budgeting, auctions and market-day maths. Our guide to [toy money and play money for kids' games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/) has lesson ideas.\n\n**Parties and events.** Bulk packs for casino nights and treasure hunts. See [fake money for parties](/blog/fake-money-for-parties-casino-nights-birthdays-weddings/).\n\n## Printable play money: when it makes sense\n\nMany families search for printable play money. A printout is free and fine for a single lesson, but it is flimsy, uses colour ink, and needs cutting. If you run the activity more than once, a ready-made set is cheaper in the long run and lasts for years. A printout is also a poor fit for anything where the notes will be handled by a group.\n\n## Choosing between play money and prop money\n\nPlay money is made for games and learning. Prop money is made for film, television, theatre and photography. Both must be clearly marked and never spent. If you want a more realistic look for a school production or a themed event, see [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) and [monetary toys and play money sets for kids](/blog/monetary-toys-and-play-money-sets-for-kids/).\n\n## How to order from PROPPS\n\n## Teaching with play money: ideas by year level\n\nPlay money is a flexible teaching tool across the primary years. In early years, sorting notes by colour and value builds number sense. In years 1 and 2, counting to a target amount and making simple change uses the lower denominations. By years 3 and 4, children can handle two-step problems such as \"you have $50 and spend $17.50, how much is left?\". In years 5 and 6, play money supports budgeting, percentages and simple profit-and-loss in a class market.\n\nA common approach is a class economy. Students earn notes for jobs, pay \"rent\" for desks and spend at a class shop. It makes maths concrete and teaches saving. It needs more notes than a family set, which is why teachers often look for bulk packs rather than retail boxes. The Australian Curriculum maths content on money and financial mathematics is available on the [Australian Curriculum website](https://www.australiancurriculum.edu.au/).\n\n## Storage and durability\n\nNotes last longest when stored flat, away from water and sorted by denomination. A ziplock bag per student set stops notes from being mixed, and a labelled tub holds the class float. Heavier paper survives repeated handling much better than thin stock, which tears at the folds. If a set will be used by many children over many terms, paper weight is the single most important feature, more than the artwork.\n\n## Common mistakes when buying play money\n\n- Buying one retail box for a whole class and running out in ten minutes.\n- Choosing a set with only high denominations, which makes change-making impossible.\n- Ignoring the marking, so the notes look too much like real ones.\n- Paying for overseas shipping and waiting weeks for notes that show foreign currency.\n- Forgetting to ask for an invoice when a school or council needs one.\n\n## Bulk, school and event orders\n\nPROPPS orders start at $300 AUD, which suits schools, venues and event companies buying for a group. We issue an invoice for your records and ship from Eltham, Melbourne by Express Post. For a regular supply across a year, ask about [wholesale tiers](/wholesale/), and for branded notes with your school or event name, see [custom and branded props](/shop/custom-and-branded-props/) and the [custom guide for agencies](/blog/custom-and-branded-prop-currency-guide-for-agencies/).\n\n## Safety reminders\n\nPlay money is for pretend use only. Never use it to pay in a real shop, a canteen or a vending machine, even as a lesson. Keep small coins away from under-threes. Always follow the age guidance on the pack and check product safety information on [Product Safety Australia](https://www.productsafety.gov.au/) when buying for young children.\n\n## A buyer comparison in five questions\n\n1. **How many children or guests?** Retail boxes suit one family. Groups need bulk.\n2. **Which denominations do the activities need?** A shop game needs small notes for change.\n3. **How long will it be used?** Heavier paper lasts for terms and years.\n4. **What marking is on the notes?** A clear play or specimen marking is non-negotiable.\n5. **Who is the seller?** An ABN, an address and an invoice make school purchasing simple.\n\nIf you answer those five questions before you shop, you will pick the right set the first time and avoid paying twice. For a wider look at how play money differs from film-grade notes, read [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/).\n\n## Where Australian designs matter\n\nChildren learn to recognise the colours and sizes of the notes they will see in real life, so Australian denominations are worth paying for. A set that shows only foreign currency teaches the wrong lesson, and a set with invented denominations makes real-world change-making harder to transfer. Look for a set that uses the familiar $5, $10, $20, $50 and $100 steps in the colours Australians recognise, while carrying a clear play or specimen marking so no one mistakes it for genuine money.\n\n## Cost per child\n\nCompare packs by cost per child, not by pack price. A cheap pack that covers two children costs more per head than a bulk set that covers thirty. Count the notes, divide by the number of children and compare. Include delivery in the total, and check whether the seller offers an invoice and a refund window. Our [refund policy](/refund-policy/) sets out ours.\n\nBrowse the [play money range](/shop/event-and-party-props/) and the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/). Orders start at $300 AUD, delivery is free from $500 AUD and cryptocurrency payments receive a 10% discount. Parcels ship from Eltham, Melbourne by [Australia Post Express](https://auspost.com.au/) with a signature on delivery. Read the [shipping policy](/shipping-policy/) for times and the [refund policy](/refund-policy/) for the 3 to 8 business day refund window.",
    "faqs": [
      {
        "q": "Where can I buy Australian play money?",
        "a": "Toy and discount stores sell small sets, school suppliers sell class packs, and specialist makers sell heavier, clearly marked sets in bulk. See our [play money range](/shop/event-and-party-props/)."
      },
      {
        "q": "Is Australian play money legal?",
        "a": "Yes, when it is clearly marked as play money or a specimen and never used as payment. The Reserve Bank explains its approach on its [banknote pages](https://www.rba.gov.au/banknotes/)."
      },
      {
        "q": "What should an Australian play money set include?",
        "a": "Notes in $5, $10, $20, $50 and $100 denominations, sturdy paper and a clear play marking. Read [monetary toys and play money sets](/blog/monetary-toys-and-play-money-sets-for-kids/)."
      },
      {
        "q": "Is printable play money a good option?",
        "a": "It is fine for one lesson, but it is flimsy and needs cutting. A ready-made set lasts longer. See [toy money for kids games and learning](/blog/toy-money-and-play-money-for-kids-games-and-learning/)."
      },
      {
        "q": "Can schools order play money in bulk?",
        "a": "Yes. PROPPS invoices with an ABN and ships by Express Post, with orders from $300 AUD. See the [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/)."
      }
    ],
    "updated": "2026-10-26"
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
  },
  {
    question: 'How much does prop money cost?',
    answer: 'Orders start at $300 AUD. Published bundles run from a Starter Stack ($1,500 face value, $115) up to 100 Stacks ($200,000 face value, $14,000). Cryptocurrency payments get 10% off, and studio quantities can ask about wholesale tiers of 10% to 30% off.'
  },
  {
    question: 'Does prop money feel like real money?',
    answer: 'Our notes are printed double-sided on matte archival paper, so they read as money on camera but feel like paper, not polymer, in the hand. That difference, plus the specimen marking, keeps them clearly props.'
  },
  {
    question: 'Can you take prop money on a plane in Australia?',
    answer: 'Generally yes on domestic flights when the notes are clearly marked, packed as strapped stacks and carried with the supplier invoice. International travel needs customs checks at both ends. Check the airline rules before you fly.'
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
