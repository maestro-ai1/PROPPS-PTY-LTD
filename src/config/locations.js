// src/config/locations.js
// City landing pages (/locations/<slug>/). Each is a delivery page for one Australian city: one primary keyword per city,
// unique local copy, five FAQs. PROPPS ships Australia-wide from Eltham, Melbourne by Australia Post Express.
export const LOCATIONS = [
  {
    slug: 'sydney',
    city: 'Sydney',
    state: 'NSW',
    kw: 'prop money sydney',
    secondary: ['fake money sydney', 'buy prop money sydney', 'film prop money sydney', 'prop money delivery sydney', 'australian prop money sydney'],
    industry: 'Screen NSW',
    place: 'Fox Studios Australia in Moore Park',
    lead: 'Looking for prop money in Sydney? PROPPS posts Australian prop notes from Melbourne to Sydney by Australia Post Express, with tracking and a signature on delivery, so your art department, agency or party host has the notes in hand before the shoot or event.',
    local: [
      'Sydney is the biggest market for screen and advertising work in the country. Productions registered with Screen NSW, crews working out of Fox Studios Australia in Moore Park and agencies across the CBD, Surry Hills and North Sydney order prop money for bank scenes, heist stacks, street deals and commercial shoots.',
      'Outside film, Sydney buyers order prop notes for bucks and hens nights, corporate casino evenings, harbour cruises, photo booths and music videos. A single starter stack covers most photo set-ups, while a full production usually moves to the bulk stack pack.',
    ],
    order: 'Sydney orders are packed in Eltham and dispatched within 24 business hours of payment. Parcels travel interstate by Express Post and are signed for at the door, so book a delivery address that someone will staff during business hours.',
  },
  {
    slug: 'melbourne',
    city: 'Melbourne',
    state: 'VIC',
    kw: 'prop money melbourne',
    secondary: ['fake money melbourne', 'buy prop money melbourne', 'film prop money melbourne', 'prop money delivery melbourne', 'australian prop money melbourne'],
    industry: 'Screen Victoria',
    place: 'Docklands Studios Melbourne',
    lead: 'Prop money in Melbourne starts at home: PROPPS packs and dispatches every order from Eltham, so Melbourne productions, agencies and event hosts are the closest customers on our delivery map. Australian prop notes are sent by Australia Post Express with tracking and a signature on delivery.',
    local: [
      'Melbourne has a deep film, television and theatre scene. Productions supported by Screen Victoria, crews at Docklands Studios Melbourne, independent filmmakers in Collingwood and Richmond, and drama schools across the city order prop currency for scenes that need cash on the table.',
      'Melbourne party hosts and venues use prop notes for casino nights, themed birthdays, wedding photo booths and Melbourne Cup events, where a tidy stack photographs well and guests can handle it freely. Photographers and content creators use the photography set for clean, repeatable cash shots.',
    ],
    order: 'Because we ship from Eltham, Melbourne orders have the shortest trip of any city. Order early in the week of your shoot, choose a delivery address that is staffed for the signature, and add spare stacks to cover resets.',
  },
  {
    slug: 'brisbane',
    city: 'Brisbane',
    state: 'QLD',
    kw: 'prop money brisbane',
    secondary: ['fake money brisbane', 'buy prop money brisbane', 'film prop money brisbane', 'prop money delivery brisbane', 'australian prop money brisbane'],
    industry: 'Screen Queensland',
    place: 'the Queensland screen industry between Brisbane and the Gold Coast',
    lead: 'Need prop money in Brisbane? PROPPS delivers Australian prop notes to Brisbane by Australia Post Express from our Melbourne studio, with tracking, a signature on delivery and tax invoices for production companies and agencies.',
    local: [
      'Queensland productions backed by Screen Queensland often move between Brisbane and the Gold Coast, and art departments in the Brisbane region order prop money for television drama, commercials, short films and student productions. A single stack covers a close-up, and bulk packs cover wider scenes.',
      'Brisbane event organisers, venue managers and party hosts also buy play and prop notes for casino nights, race-day themes, school fundraisers and photo booths. Content creators in Fortitude Valley and South Brisbane use the photography set for social posts.',
    ],
    order: 'Brisbane orders are dispatched from Eltham within 24 business hours of payment and travel by Express Post. Allow for the interstate trip when you plan the shoot date, and order a spare stack for resets.',
  },
  {
    slug: 'perth',
    city: 'Perth',
    state: 'WA',
    kw: 'prop money perth',
    secondary: ['fake money perth', 'buy prop money perth', 'film prop money perth', 'prop money delivery perth', 'australian prop money perth'],
    industry: 'Screenwest',
    place: 'the Western Australian screen sector',
    lead: 'Prop money in Perth is a distance order, so PROPPS makes it simple: Australian prop notes ship from Melbourne by Australia Post Express with end-to-end tracking and a signature on delivery, and we invoice every order so your production file is complete.',
    local: [
      'Western Australian productions supported by Screenwest, along with independent filmmakers, advertising agencies and drama students in Perth, order prop currency for crime drama, comedy, music videos and commercials. Because Perth is the furthest city from our studio, most customers order early and add spare stacks.',
      'Perth hosts use prop notes for themed parties, corporate evenings, charity casino nights and photo booths, while photographers book the photography set for fashion and product shoots that need cash in frame.',
    ],
    order: 'Perth orders leave Eltham within 24 business hours of payment. Express Post covers the long trip to Western Australia, but plan your delivery date with extra margin and use an address that is staffed for the signature.',
  },
  {
    slug: 'adelaide',
    city: 'Adelaide',
    state: 'SA',
    kw: 'prop money adelaide',
    secondary: ['fake money adelaide', 'buy prop money adelaide', 'film prop money adelaide', 'prop money delivery adelaide', 'australian prop money adelaide'],
    industry: 'the South Australian Film Corporation',
    place: 'the Adelaide Film Festival and Fringe season',
    lead: 'Searching for prop money in Adelaide? PROPPS sends Australian prop notes from Melbourne to Adelaide by Australia Post Express, tracked, signed for on delivery and invoiced, so productions and event hosts can order with confidence.',
    local: [
      'Adelaide has a busy independent screen community, with productions working with the South Australian Film Corporation, short films shown around the Adelaide Film Festival and student projects across the city. Art departments order prop money for crime stories, comedies and music videos.',
      'During the Fringe season, Adelaide venues, performers and event hosts also look for prop and play notes for sketches, casino-style nights and photo set-ups. A starter stack is usually enough for a show, and bulk packs suit larger productions.',
    ],
    order: 'Adelaide is a short interstate trip from Eltham. Orders are dispatched within 24 business hours of payment by Express Post with a signature on delivery. Book a staffed delivery address and add a spare stack for resets.',
  },
  {
    slug: 'canberra',
    city: 'Canberra',
    state: 'ACT',
    kw: 'prop money canberra',
    secondary: ['fake money canberra', 'buy prop money canberra', 'film prop money canberra', 'prop money delivery canberra', 'australian prop money canberra'],
    industry: 'Screen Canberra',
    place: 'the capital region creative sector',
    lead: 'Prop money in Canberra is easy to order online: PROPPS delivers Australian prop notes to the ACT by Australia Post Express from Melbourne, with tracking, a signature on delivery and tax invoices for agencies, training providers and productions.',
    local: [
      'Canberra productions registered with Screen Canberra, communications teams, training providers and educators across the capital region order prop currency for short films, training scenarios, campaign videos and school drama. Government and agency buyers often need a clean invoice, which every PROPPS order includes.',
      'Canberra hosts also order play and prop notes for themed nights, fundraisers and photo booths, and photographers use the photography set for clean cash shots without hunting for an accurate look.',
    ],
    order: 'Canberra orders are dispatched from Eltham within 24 business hours of payment and travel by Express Post. Use an address that is staffed for the signature and order early in the week of your shoot.',
  },
  {
    slug: 'gold-coast',
    city: 'Gold Coast',
    state: 'QLD',
    kw: 'prop money gold coast',
    secondary: ['fake money gold coast', 'buy prop money gold coast', 'film prop money gold coast', 'prop money delivery gold coast', 'australian prop money gold coast'],
    industry: 'Screen Queensland',
    place: 'Village Roadshow Studios at Oxenford',
    lead: 'Prop money on the Gold Coast? PROPPS delivers Australian prop notes to the Gold Coast by Australia Post Express from Melbourne, with tracking and a signature on delivery, so productions and party hosts can plan a shoot or a night out with the notes in hand.',
    local: [
      'The Gold Coast is a working screen hub, with crews at Village Roadshow Studios in Oxenford, productions supported by Screen Queensland and a steady flow of commercials and television. Art departments order prop money for heist scenes, bank sets and street deals, and bulk stacks cover bigger set dressing.',
      'The Gold Coast is also known for bucks and hens weekends, themed parties, photo shoots and music videos, all of which use prop and play notes. A single set suits a weekend, and a starter stack covers a content day.',
    ],
    order: 'Gold Coast orders are dispatched from Eltham within 24 business hours of payment and travel by Express Post with a signature on delivery. Allow for the interstate trip, and order an extra stack for resets or a second shoot day.',
  },
];

export const locationBySlug = (slug) => LOCATIONS.find((l) => l.slug === slug);

export const locationFaqs = (l) => [
  {
    question: `Can I buy prop money in ${l.city}?`,
    answer: `Yes. PROPPS delivers Australian prop money to ${l.city} and across ${l.state} by Australia Post Express. Orders start at $150 AUD, delivery is free from $500 AUD, and every parcel is tracked and signed for.`,
  },
  {
    question: `How long does prop money delivery to ${l.city} take?`,
    answer: `Orders are packed in Eltham, Melbourne and dispatched within 24 business hours of payment. Express Post then carries the parcel to ${l.city}. See the shipping policy for current delivery times, and order early in the week of your shoot or event.`,
  },
  {
    question: `Do you sell fake money in ${l.city} for films and parties?`,
    answer: `PROPPS sells prop money, often searched as fake money, for film, television, photography and events in ${l.city}. Every note is a non-legal-tender prop carrying specimen markings, and the range runs from $5 to $100 notes in stacks and bulk packs.`,
  },
  {
    question: `Can ${l.city} production companies get a tax invoice?`,
    answer: `Yes. Every order includes a tax invoice, which suits production companies, agencies and schools in ${l.city}. Wholesale tiers of 10% to 30% off apply to larger runs, and cryptocurrency payments receive a 10% discount.`,
  },
  {
    question: `How much prop money should I order for a ${l.city} shoot?`,
    answer: `A starter stack covers a photo or a single close-up, one stack covers most scenes and five or more stacks suit wider sets. Add a spare stack for resets. Contact the studio with your scene list and we will size the order.`,
  },
];
