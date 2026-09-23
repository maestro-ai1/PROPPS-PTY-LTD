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
  whatsapp: '+61 400 000 000',
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
  channels: { email: 'orders&#64;proppsptyltd.com.au', whatsapp: '+61400000000', whatsappCountryCode: '61' },
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
    { type: 'whatsapp', value: '+61400000000' }
  ]
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
    price: 250,
    category: 'film-and-tv-props',
    badge: 'Production Ready',
    featured: false,
    images: ['film-tv-props.jpg'],
    shortDescription: 'Cinema-grade prop currency curated for film and television productions, ready for cash-handling and transaction scenes.',
    description: 'Cinema-grade prop currency curated for film and television productions. Designed for authentic on-camera texture and weight in scenes involving cash handling, transactions, and reveals. Every note carries mandatory non-legal-tender specimen markings.',
    details: {
      useCase: 'Film & television production',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'bulk-money-stack-pack',
    name: 'Bulk Money Stack Pack',
    price: 500,
    category: 'money-stacks',
    badge: 'High Volume',
    featured: false,
    images: ['money-stacks.jpeg'],
    shortDescription: 'Bulk strapped prop currency stacks for scenes requiring large visible cash volumes.',
    description: 'Bulk strapped prop currency stacks for scenes requiring large visible cash volumes, ideal for heist sequences, vault reveals, and bank scenes. Every note carries mandatory non-legal-tender specimen markings.',
    details: {
      useCase: 'Heist, vault & bank scenes',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'photography-prop-currency-set',
    name: 'Photography Prop Currency Set',
    price: 180,
    category: 'photography-props',
    badge: 'Studio Favourite',
    featured: false,
    images: ['photography-props.jpeg'],
    shortDescription: 'Prop currency styled for editorial and commercial photography shoots.',
    description: 'Prop currency styled for print, editorial, and commercial photography shoots, delivering a realistic look for camera close-ups. Every note carries mandatory non-legal-tender specimen markings.',
    details: {
      useCase: 'Editorial & commercial photography',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'event-and-party-prop-cash-pack',
    name: 'Event & Party Prop Cash Pack',
    price: 150,
    category: 'event-and-party-props',
    badge: 'Crowd Favourite',
    featured: false,
    images: ['event-party-props.jpeg'],
    shortDescription: 'Novelty prop cash designed for events, parties, and themed entertainment.',
    description: 'Novelty prop cash designed for events, parties, and themed entertainment experiences. Every note carries mandatory non-legal-tender specimen markings.',
    details: {
      useCase: 'Events, parties & themed entertainment',
      paper: 'Premium archival-grade paper',
      print: 'Dual-sided high-definition print',
      dispatch: 'Australia Post Express with signature on delivery'
    }
  },
  {
    slug: 'custom-and-branded-prop-currency',
    name: 'Custom & Branded Prop Currency',
    price: 350,
    category: 'custom-and-branded-props',
    badge: 'Made To Order',
    featured: false,
    images: ['custom-branded-props.jpeg'],
    shortDescription: 'Bespoke prop currency available with custom branding for agencies, brands, and special productions.',
    description: 'Bespoke and custom-branded prop currency for agencies, brands, and special productions. Contact our studio to discuss custom denominations, artwork, and branding. Every note carries mandatory non-legal-tender specimen markings.',
    details: {
      useCase: 'Agencies, brands & special productions',
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
    image: 'post-legal-guidelines.webp',
    content: `When producing television, cinema, or commercial theatre in Australia, capturing realistic cash exchanges is crucial for cinematic immersion. However, Australia strictly regulates the reproduction of Australian currency under the Commonwealth Crimes (Currency) Act 1981 and guidelines published by the Reserve Bank of Australia (RBA).\n\nUnder Section 22 of the Crimes (Currency) Act, it is an offence to make or circulate counterfeit currency or unauthorized reproductions of currency that could deceive reasonable persons. To ensure full legal compliance, professional prop houses must observe strict criteria:\n\n1. Distinctive Markings: Notes must feature prominent, indelible notices such as 'SPECIMEN', 'REPRODUCTION', or 'FOR MOTION PICTURE USE ONLY'.\n2. Size Adjustments: Reproductions must deviate from genuine currency dimensions (less than 75% or greater than 150% in scale for standard one-sided representations, or strictly marked with substantial textural and structural modifications for filming).\n3. Non-Polymer Texture: Genuine Australian banknotes are printed on specialized biaxially oriented polypropylene (BOPP). PROPPS PTY LTD uses premium non-reflective archival paper instead of polymer, preventing any tactile confusion with genuine legal tender.\n\nBy procuring certified props from PROPPS PTY LTD, Australian production companies protect their crew and production from legal liability while maintaining impeccable visual standards on camera.`
  },
  {
    slug: 'lighting-prop-money-for-camera-avoiding-glare',
    title: 'How Cinematographers Light Prop Money on Camera to Eliminate Glare',
    excerpt: 'Practical lighting techniques for Director of Photography crews shooting close-up cash counting and tabletop exchanges.',
    category: 'Cinematography & Lighting',
    date: '2026-01-20',
    readTime: '5 min read',
    image: 'post-lighting-tips.webp',
    content: `Shooting prop money under bright studio lighting presents unique optical challenges. Real polymer Australian banknotes reflect high-output LED panels and Fresnel fixtures, creating blown-out specular highlights that ruin close-up focus.\n\nPROPPS PTY LTD engineered our cinema series prop notes specifically to overcome this obstacle. Our 120gsm matte finish absorbs harsh incident light while maintaining vivid saturation for the emerald greens of the $100 and the rich ochre gold of the $50.\n\nDP Pro Tips:\n- Use soft, diffused side lighting (cross-key) rather than direct top-down lighting to highlight note texture without glare.\n- Incorporate subtle back-rim lighting to define the edges of strapped bundles against dark mahogany desks or metal vault surfaces.\n- In high-speed slow-motion shots (120fps+), our matte paper maintains crisp micro-contrast as notes flutter through the air.`
  },
  {
    slug: 'art-department-guide-weathering-prop-cash',
    title: 'The Art Department Guide: Weathering Prop Cash for Underworld Realism',
    excerpt: 'How scenic artists create believable, weathered street currency without destroying props.',
    category: 'Art Department',
    date: '2025-11-10',
    readTime: '4 min read',
    image: 'post-weathering-guide.webp',
    content: `Pristine, crisp banknotes right out of the wrapper can immediately pull viewers out of a gritty crime thriller or street-level drama. Genuine circulated cash is softened, creased, and carries subtle patina from countless human transactions.\n\nTo achieve organic aging:\n- Mechanical Tumbling: Run stacks through clean cloth tumblers or gently crumple and re-flatten individual notes by hand.\n- Coffee & Tea Washes: Dilute instant dark roast coffee to create a warm, non-toxic staining wash applied with a soft atomizer spray.\n- Edge Burnishing: Lightly drag graphite or fine charcoal along the edges of the bundle to simulate years of friction in wallets and cash drawers.\n\nPROPPS PTY LTD also offers pre-distressed bundles prepared by professional Melbourne scenic artists, saving your art department dozens of prep hours.`
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
