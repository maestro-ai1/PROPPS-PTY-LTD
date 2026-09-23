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
    slug: 'next-gen-polymer-props',
    name: 'Current Series AUD Prop Stacks',
    description: 'Modern Australian polymer-styled prop currency notes ($5, $10, $20, $50, $100). Engineered with legal dimensional shifts, matte non-reflective finish, and high-impact camera contrast.',
    image: 'next-gen-aud-stack.webp'
  },
  {
    slug: 'bank-strapped-bundles',
    name: 'Bank Strapped Bundles & Bricks',
    description: '100-note strapped bundles with authentic Australian bank currency bands, serialised vault tags, and shrink-wrapped production bricks for heist and vault sequences.',
    image: 'bank-strapped-bundles.webp'
  },
  {
    slug: 'film-director-kits',
    name: 'Director Production Sets & Cases',
    description: 'Turnkey props for cinema, crime dramas, and music videos including combination briefcase cases, duffle bags filled with strapped prop cash, and safe filler kits.',
    image: 'director-briefcase-kit.webp'
  },
  {
    slug: 'vintage-australian-props',
    name: 'Classic Vintage Australian Heritage',
    description: 'Period-accurate Australian paper currency reproduction notes from the pre-decimal and early decimal eras for historical dramas, period television, and theatre.',
    image: 'vintage-paper-aud.webp'
  },
  {
    slug: 'custom-studio-props',
    name: 'Weathered & Distressed Studio Props',
    description: 'Custom art department distressed currency including weathered, circulated-feel notes, blood-splattered thriller props, and burn-edged stunt notes.',
    image: 'distressed-weathered-notes.webp'
  }
]

export const PRODUCTS = [
  {
    slug: 'aud-100-full-print-strapped-bundle',
    name: 'AUD $100 Cinema Series 100-Note Strapped Bundle',
    price: 320,
    category: 'next-gen-polymer-props',
    badge: 'Best Seller',
    featured: true,
    images: ['aud-100-bundle.webp'],
    shortDescription: 'Full 100-note strapped bundle of dual-sided AUD $100 cinema prop notes with official reproduction bank band.',
    description: 'Crafted specifically for Australian television and cinema productions. This 100-note bundle features high-definition dual-sided prints of the green Australian $100 note design with required Commonwealth legal specimen identifiers, non-reflective matte finish for high-output studio lighting, and authentic dimensions. Secured with a printed Australian currency band.',
    details: {
      count: '100 notes per bundle',
      denomination: '$100 AUD simulation',
      dimensions: 'Compliant RBA dimensional adjustment',
      paper: '120gsm high-tensile matte archival paper',
      finish: 'Dual-sided camera ready matte non-glare'
    }
  },
  {
    slug: 'aud-50-full-print-strapped-bundle',
    name: 'AUD $50 Cinema Series 100-Note Strapped Bundle',
    price: 310,
    category: 'next-gen-polymer-props',
    badge: 'Popular Choice',
    featured: true,
    images: ['aud-50-bundle.webp'],
    shortDescription: 'Full 100-note bundle of dual-sided AUD $50 cinema prop notes with heavy-duty bank band.',
    description: 'The industry standard prop for Australian crime thrillers, casino scenes, and high-stakes drama. Contains 100 double-sided printed notes mimicking the vibrant gold tone of the Australian $50 note with prominent SPECIMEN and REPRODUCTION notices. Perfect for handling, counting on camera, and close-up tabletop shots.',
    details: {
      count: '100 notes per bundle',
      denomination: '$50 AUD simulation',
      dimensions: 'Compliant RBA dimensional adjustment',
      paper: '120gsm high-tensile matte archival paper',
      finish: 'Dual-sided camera ready matte non-glare'
    }
  },
  {
    slug: 'aud-20-full-print-strapped-bundle',
    name: 'AUD $20 Cinema Series 100-Note Strapped Bundle',
    price: 300,
    category: 'next-gen-polymer-props',
    badge: 'Studio Essential',
    featured: false,
    images: ['aud-20-bundle.webp'],
    shortDescription: '100-note bundle of vivid red-orange AUD $20 prop banknotes, banded and sealed.',
    description: 'High-contrast red-orange Australian $20 cinema reproduction notes. Designed to withstand vigorous handling in action sequences and counting scenes without ripping or causing lens flare under sodium and LED cinema fixtures.',
    details: {
      count: '100 notes per bundle',
      denomination: '$20 AUD simulation',
      dimensions: 'Compliant RBA dimensional adjustment',
      paper: '120gsm high-tensile matte archival paper',
      finish: 'Dual-sided camera ready matte non-glare'
    }
  },
  {
    slug: 'aud-mixed-denomination-master-pack',
    name: 'AUD Mixed Denomination Studio Master Pack ($5, $10, $20, $50, $100)',
    price: 480,
    category: 'next-gen-polymer-props',
    badge: 'Most Versatile',
    featured: true,
    images: ['aud-mixed-pack.webp'],
    shortDescription: 'Comprehensive kit featuring 250 mixed prop banknotes across all 5 modern Australian denominations.',
    description: 'An art director\'s dream pack. Includes 50 notes each of $5, $10, $20, $50, and $100 Australian denominations. Ideal for cash register dressing, wallet inserts, street transaction scenes, and commercial training simulations.',
    details: {
      count: '250 notes total (50 of each denomination)',
      denomination: 'Mixed $5, $10, $20, $50, $100',
      dimensions: 'Graduated realistic sizes with legal alterations',
      paper: '120gsm archival matte cinema grade',
      finish: 'Full dual-sided print'
    }
  },
  {
    slug: 'vault-heist-10-bundle-brick-100k-prop',
    name: 'Vault Heist 10-Bundle Bank Brick ($100k Prop Simulation)',
    price: 750,
    category: 'bank-strapped-bundles',
    badge: 'High Value',
    featured: true,
    images: ['vault-heist-brick.webp'],
    shortDescription: 'Heavyweight bank brick consisting of ten 100-note strapped bundles in shrink-wrapped vault packaging.',
    description: 'Engineered for high-intensity heist movies and bank robbery scenes. Ten individually strapped $100-note bundles stacked and wrapped in thick industrial heat-shrink with a tamper-evident Reserve Bank simulation vault label.',
    details: {
      count: '1,000 prop notes (10 strapped bundles of 100)',
      denomination: '$100 AUD simulation',
      packaging: 'Heavy duty heat-shrink with serialised vault barcode label',
      weight: 'Approx. 1.2kg solid feel',
      finish: 'Dual-sided high resolution'
    }
  },
  {
    slug: 'film-directors-aluminium-cash-briefcase-kit',
    name: 'The Director\'s Aluminium Vault Case Kit',
    price: 1250,
    category: 'film-director-kits',
    badge: 'Production Flagship',
    featured: true,
    images: ['aluminium-briefcase-kit.webp'],
    shortDescription: 'Locking aluminium flight briefcase packed with 20 strapped bundles of $50 & $100 prop notes.',
    description: 'The ultimate hero prop for cinema climaxes and underworld ransom handoffs. Comes with a reinforced brushed aluminium case with twin combination locks and custom foam insert holding 20 pristine strapped bundles (10x $100 and 10x $50 bundles). Ready to open on camera to stun your audience.',
    details: {
      count: '2,000 prop notes (20 strapped bundles)',
      case: 'Reinforced aluminium hardcase with dual 3-digit combination locks',
      interior: 'Custom laser-cut high-density velvet-lined foam insert',
      dimensions: '450mm x 330mm x 110mm',
      finish: 'Turnkey hero camera ready'
    }
  },
  {
    slug: 'vintage-paper-era-100-aud-bundle',
    name: 'Historic Series Vintage Australian $100 Paper Prop Bundle',
    price: 360,
    category: 'vintage-australian-props',
    badge: 'Period Accurate',
    featured: false,
    images: ['vintage-100-bundle.webp'],
    shortDescription: '100-note bundle replicating the iconic pre-polymer paper $100 note design for historical productions.',
    description: 'Perfect for period films set in the 1980s and early 1990s before the introduction of polymer currency in Australia. Printed on textured off-white heavy rag paper giving the realistic weight and feel of vintage Australian paper notes with legal specimen marks.',
    details: {
      count: '100 notes per bundle',
      era: '1984-1996 Paper Series tribute',
      paper: '135gsm cotton rag texture',
      finish: 'Vintage warm tones'
    }
  },
  {
    slug: 'action-distressed-weathered-100-bundle',
    name: 'Action Distressed & Weathered $50 Currency Bundle',
    price: 340,
    category: 'custom-studio-props',
    badge: 'Art Dept Distressed',
    featured: false,
    images: ['distressed-50-bundle.webp'],
    shortDescription: '100 individually tumbled and hand-weathered $50 prop notes for authentic gritty scenes.',
    description: 'Fresh prop money looks fake in gritty underworld scenes. Our scenic artists tumble, crease, and gently age each note so the stack looks thoroughly circulated and weathered without compromising the structural integrity of the paper.',
    details: {
      count: '100 pre-distressed notes',
      treatment: 'Mechanical tumble creasing & organic aging patina',
      safety: 'Clean, odourless, non-toxic water-based scenic wash'
    }
  },
  {
    slug: 'crime-heist-canvas-duffle-bag-pack',
    name: 'Getaway Heist Tactical Duffle Bag Cash Loadout',
    price: 1850,
    category: 'film-director-kits',
    badge: 'Studio Blockbuster',
    featured: true,
    images: ['duffle-bag-kit.webp'],
    shortDescription: 'Tactical black canvas duffle loaded with 30 strapped prop cash bundles and vault brick.',
    description: 'Designed for high-adrenaline getaway scenes and bank robbery sequences. Includes a military-grade canvas duffle bag stuffed with 30 strapped bundles ($100s and $50s) along with 2 shrink-wrapped bank bricks. Weighted realistically for authentic shoulder hang.',
    details: {
      count: '3,000 strapped notes + 2 sealed bricks',
      bag: 'Heavyweight black tactical canvas duffle with heavy-duty metal zippers',
      weight: 'Approx. 5.5kg realistic heist weight'
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
