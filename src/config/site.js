// src/config/site.js
// Single source of truth for PROPPS PTY LTD

export const SITE = {
  name: 'PROPPS PTY LTD',
  tagline: 'Cinema-Grade Reproduction Australian Currency for Film, Television & Visual Arts',
  domain: 'proppsptyltd.com.au',
  abn: '72 642 507 042',
  abrUrl: 'https://abr.business.gov.au/ABN/View?id=72642507042',
  locale: 'en-AU',
  currency: 'AUD',
  target: 'vercel',
  primaryColor: '#C5A059',
  gscVerification: 'PENDING_GSC_VERIFICATION',
  indexNowKey: 'propps-au-indexnow-2026',
  cartKey: 'mm-cart',
}

export const CONTACT = {
  abn: '72 642 507 042',
  email: 'orders&#64;proppsptyltd.com.au',
  phone: '+61 3 9000 0000',
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
  smtpFrom: 'orders@proppsptyltd.com.au',
  web3formsKey: '',
  resendFrom: '',
  turnstileSiteKey: '',
}

export const REPLY = {
  brand: { primary: '#C5A059', headerDark: '#0D1512' },
  currency: { code: 'AUD', symbol: '$' },
  orderPrefix: 'PRP',
  headerTagline: 'Australian Prop Money · Eltham, Melbourne VIC 3093',
  dispatchLine: 'Dispatched via Australia Post Express with end-to-end tracking, fast and safe delivery. Refunded if not satisfied.',
  bizNumber: { label: 'ABN', value: '72 642 507 042' },
  channels: { email: 'orders&#64;proppsptyltd.com.au', whatsapp: '+61420128746', whatsappCountryCode: '61' },
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
    image: 'new-notes.jpeg'
  },
  {
    slug: 'film-and-tv-props',
    name: 'Film & TV Props',
    description: 'Cinema and television production props engineered for on-camera realism under studio lighting.',
    image: 'film-tv-props.jpg'
  },
  {
    slug: 'money-stacks',
    name: 'Money Stacks',
    description: 'Bulk strapped stacks and bundles for scenes requiring large visible cash volumes.',
    image: 'money-stacks.jpeg'
  },
  {
    slug: 'photography-props',
    name: 'Photography Props',
    description: 'Prop currency styled for print, editorial, and commercial photography shoots.',
    image: 'photography-props.jpeg'
  },
  {
    slug: 'event-and-party-props',
    name: 'Event & Party Props',
    description: 'Novelty prop cash for events, parties, and themed entertainment.',
    image: 'event-party-props.jpeg'
  },
  {
    slug: 'custom-and-branded-props',
    name: 'Custom & Branded Props',
    description: 'Bespoke and custom-branded prop currency for agencies, brands, and special productions.',
    image: 'custom-branded-props.jpeg'
  }
]

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
    shortDescription: 'Prop currency styled for editorial and commercial photography shoots.',
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
    excerpt: 'A comprehensive guide to legally using and manufacturing reproduction currency for Australian film and television productions.',
    category: 'Compliance & Legal',
    date: '2026-02-15',
    readTime: '6 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop money australia laws — bundled specimen prop currency stacks compliant with the Crimes (Currency) Act 1981',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance', label: 'Read our full RBA specimen compliance guide' },
    content: `When producing television, cinema, or commercial theatre in Australia, capturing realistic cash exchanges is crucial for cinematic immersion. However, Australia strictly regulates the reproduction of Australian currency under the Commonwealth [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) and guidelines published by the [Reserve Bank of Australia (RBA)](https://www.rba.gov.au/).\n\nUnder Section 22 of the Crimes (Currency) Act, it is an offence to make or circulate counterfeit currency or unauthorized reproductions of currency that could deceive reasonable persons. To ensure full legal compliance, professional prop houses must observe strict criteria:\n\n1. Distinctive Markings: Notes must feature prominent, indelible notices such as 'SPECIMEN', 'REPRODUCTION', or 'FOR MOTION PICTURE USE ONLY'.\n2. Size Adjustments: Reproductions must deviate from genuine currency dimensions (less than 75% or greater than 150% in scale for standard one-sided representations, or strictly marked with substantial textural and structural modifications for filming).\n3. Non-Polymer Texture: Genuine Australian banknotes are printed on specialized biaxially oriented polypropylene (BOPP). PROPPS PTY LTD uses premium non-reflective archival paper instead of polymer, preventing any tactile confusion with genuine legal tender.\n\nBy procuring certified props from PROPPS PTY LTD, Australian production companies protect their crew and production from legal liability while maintaining impeccable visual standards on camera.`
  },
  {
    slug: 'lighting-prop-money-for-camera-avoiding-glare',
    title: 'How Cinematographers Light Prop Money on Camera to Eliminate Glare',
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
    excerpt: 'A practical buyer\'s guide to sourcing compliant, specimen-marked prop currency for Australian productions instead of risky overseas listings.',
    category: 'Buying Guide',
    date: '2026-03-01',
    readTime: '5 min read',
    image: 'blog-fanned-50-stack.jpg',
    imageAlt: 'Buy prop money australia — fanned $50 specimen prop note stack',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance', label: 'Read our full RBA specimen compliance guide' },
    content: `Searching "buy prop money Australia" turns up a mix of overseas marketplaces, unmarked novelty listings, and the occasional prop house — and not all of it is legal to import or use on an Australian set. Under the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/), reproduction currency sold or used in Australia must carry clear, indelible specimen markings and deviate from genuine banknote dimensions and materials.\n\nWhat to check before you buy:\n1. Does the listing show visible "SPECIMEN" or "REPRODUCTION" markings on both sides of the note?\n2. Is the paper stock clearly non-polymer, avoiding any tactile confusion with genuine legal tender?\n3. Does the seller operate an Australian business (ABN-registered) so you have local recourse and fast dispatch, rather than a multi-week import from overseas?\n\nPROPPS PTY LTD is based in Melbourne, VIC, ships via Australia Post Express, and every note in our [current-series prop money range](/shop/new-notes/) is manufactured to the specimen standard from the ground up — not retrofitted after the fact. If your production has a legal or insurance team reviewing props, our [compliance guide](/compliance/) is written specifically to satisfy that review.`
  },
  {
    slug: 'play-money-vs-prop-money-which-one-do-you-need',
    title: 'Play Money vs Prop Money: Which One Do You Need?',
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
    excerpt: 'Clearing up the confusion between imitation money, counterfeit currency, and legally compliant prop money under Australian law.',
    category: 'Compliance & Legal',
    date: '2026-05-10',
    readTime: '5 min read',
    image: 'blog-100-fan-handheld.jpg',
    imageAlt: 'Imitation money vs prop money — fanned $100 specimen prop notes',
    relatedCategories: ['new-notes'],
    relatedProducts: ['5-australian-prop-money-for-sale', '10-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance', label: 'Read our full RBA specimen compliance guide' },
    content: `"Fake money" is a broad, informal term that covers everything from a child's board game token to genuinely illegal counterfeit currency — which is exactly why it's not a useful term for buyers to search by when they actually mean imitation money for legitimate production or event use.\n\nThe [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) draws a firm legal line: manufacturing or circulating currency that could deceive a reasonable person is a serious offence, full stop. What separates lawful imitation prop money from that offence is the presence of clear, permanent specimen markings, deliberate size and material deviation from genuine notes, and honest marketing that never claims the product could pass as real currency.\n\nEvery note we manufacture is designed around that legal line from the first print run, not adjusted afterwards. If you're outfitting a production or event and want the paperwork to hold up under an insurer's or legal team's review, start with our [compliance page](/compliance/) and our [New Notes range](/shop/new-notes/), both built to the same specimen standard.`
  },
  {
    slug: 'best-australian-banknote-denominations-for-film-and-tv-scenes',
    title: 'The Best Australian Banknote Denominations for Film & TV Scenes',
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
    excerpt: 'A condensed compliance checklist covering the Crimes (Currency) Act 1981 requirements every Australian production should confirm before filming.',
    category: 'Compliance & Legal',
    date: '2026-09-15',
    readTime: '5 min read',
    image: 'blog-bundled-stacks.jpg',
    imageAlt: 'Prop money australia laws compliance checklist — bundled specimen prop currency stacks',
    relatedCategories: ['new-notes'],
    relatedProducts: ['100-australian-prop-money-for-sale', '50-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance', label: 'Read our full RBA specimen compliance guide' },
    content: `Legal and insurance sign-off on prop currency is a standard, non-negotiable step for most Australian productions — and it's far easier to satisfy upfront than to fix during a shoot. Here's the condensed checklist our studio recommends to every new production client.\n\n1. **Specimen markings present on both sides** — every note should carry clear, indelible "SPECIMEN" or "REPRODUCTION" text, not a removable sticker.\n2. **Material and dimension deviation from genuine notes** — confirmed by the supplier, not just visually assumed.\n3. **Supplier documentation on request** — a legitimate Australian prop house should be able to confirm compliance with the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) in writing for your production's legal file.\n4. **No marketing language claiming the props are "undetectable" or "spendable"** — this framing itself signals non-compliant intent regardless of the physical product.\n5. **Local dispatch and ABN-registered supplier** — simplifies invoicing, tax documentation, and any warranty or replacement claims.\n\nOur [compliance page](/compliance/) covers each of these points in full detail, and our [New Notes range](/shop/new-notes/) is manufactured to satisfy every item on this list as standard, not as an upgrade.`
  },
  {
    slug: 'local-vs-overseas-prop-money-suppliers-compared',
    title: 'Local vs Overseas Prop Money Suppliers: What Australian Productions Should Check',
    excerpt: 'Why sourcing prop money from an Australian supplier avoids the compliance, customs, and dispatch risks that come with overseas listings.',
    category: 'Buying Guide',
    date: '2026-09-22',
    readTime: '4 min read',
    image: 'blog-50-fan-handheld.jpg',
    imageAlt: 'Realistic prop money for sale — fanned Australian $50 specimen prop notes from a local Melbourne supplier',
    relatedCategories: ['new-notes'],
    relatedProducts: ['50-australian-prop-money-for-sale', '100-australian-prop-money-for-sale'],
    relatedPage: { href: '/compliance', label: 'Read our full RBA specimen compliance guide' },
    content: `A "realistic prop money for sale" search turns up plenty of overseas marketplace listings alongside Australian suppliers, and the price difference can look tempting — until you factor in what an overseas listing usually can't guarantee.\n\nWhat local sourcing gets you that an overseas import often doesn't:\n1. **Confirmed compliance with Australian law.** A supplier based here builds every note around the [Crimes (Currency) Act 1981](https://www.legislation.gov.au/) from the first print run — an overseas seller has no obligation to.\n2. **No customs delay risk.** Reproduction currency can be flagged at the border, which is the last thing you want two days before a shoot.\n3. **Local recourse.** An ABN-registered Australian business gives you a real point of contact for reorders, replacements, or a compliance letter for your production's legal file — not a support ticket into a different time zone.\n4. **Faster, trackable dispatch.** [Australia Post Express](https://auspost.com.au/) with signature on delivery beats waiting on an international parcel with no local tracking.\n\nOur [New Notes range](/shop/new-notes/) is manufactured and dispatched entirely from our Melbourne, VIC studio — see our [compliance page](/compliance/) for the full specimen-marking standard every note is held to.`
  }
]

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
