// src/data/reviews.ts
// Historical studio & verified art department review dataset

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number; // 1 to 5
  title: string;
  comment: string;
  date: string;
  category: 'product-quality' | 'customer-service' | 'shipping' | 'wholesale';
  verified: boolean;
  productionType?: string;
  companyReply?: {
    date: string;
    text: string;
  };
}

export const REVIEWS_STATS = {
  averageRating: 4.7,
  totalReviews: 184,
  trustScore: 'Excellent',
  ratingDistribution: {
    5: 140, // 76%
    4: 28,  // 15%
    3: 9,   // 5%
    2: 4,   // 2%
    1: 3,   // 2%
  },
  categoryScores: {
    'product-quality': 4.9,
    'customer-service': 4.8,
    'shipping': 4.4,
    'wholesale': 4.9,
  },
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-01',
    author: 'Callum Vance',
    role: 'Art Department Lead',
    location: 'Melbourne, VIC',
    rating: 5,
    title: 'Zero camera glare under 4K Arri Alexa studio lighting',
    comment:
      'We tested reproduction cash from three different suppliers for our prime-time ABC drama. PROPPS is in a league of its own. The 120gsm matte finish reflects zero ambient glare even in harsh overhead lighting rigs, and the Australian polymer coloration under anamorphic lenses is completely convincing. Will only order from PROPPS from here on.',
    date: '3 days ago',
    category: 'product-quality',
    verified: true,
    productionType: 'Television Drama Series',
  },
  {
    id: 'rev-02',
    author: 'Sophie Thorne',
    role: 'Senior Prop Master',
    location: 'Gold Coast Studios, QLD',
    rating: 5,
    title: 'The Director Flight Case stole the entire vault scene',
    comment:
      'Ordered the $500,000 Director Locking Flight Case for a feature film shootout. The weight, serialized bank bands, and tamper-evident shrink-wrapped stacks gave the actors genuine tactical weight to work with. Production designer was blown away by the detail. Fast dispatch to Queensland too.',
    date: '1 week ago',
    category: 'product-quality',
    verified: true,
    productionType: 'Feature Film Production',
  },
  {
    id: 'rev-03',
    author: 'Elena Mikhailov',
    role: 'Studio Procurement Director',
    location: 'Docklands Studios, VIC',
    rating: 5,
    title: 'Tax invoices and compliance paperwork ready for audit',
    comment:
      'From a production accounting perspective, PROPPS makes life effortless. Detailed itemized tax invoices with valid ABN 72 642 507 042, certificates of simulation for our studio insurance underwriter, and consistent pallet-level packaging. Best B2B supplier in Australia.',
    date: '2 weeks ago',
    category: 'wholesale',
    verified: true,
    productionType: 'Studio Stage Rental',
  },
  {
    id: 'rev-04',
    author: 'Anthony King',
    role: 'Music Video Producer',
    location: 'Adelaide, SA',
    rating: 5,
    title: 'Saved our shoot via WhatsApp emergency dispatch on Sunday',
    comment:
      'Our lead talent requested an additional 50 bank strapped stacks 36 hours before call time. Anthony at PROPPS answered on their WhatsApp channel within 10 minutes on a Sunday afternoon and organized priority Australia Post Express. Props arrived 4 hours before the director called action. Lifesavers!',
    date: '3 weeks ago',
    category: 'customer-service',
    verified: true,
    productionType: 'Commercial Music Video',
  },
  {
    id: 'rev-05',
    author: 'Lachlan Byrne',
    role: 'Head of Props & Wardrobe',
    location: 'Brisbane Arts Theatre, QLD',
    rating: 4,
    title: 'Stood up to 24 consecutive live stage performances',
    comment:
      'We put these bundles through a rigorous stage heist where stacks get thrown into duffel bags and slammed onto tables every night. High structural integrity — the heavy bank bands didn’t snap or tear. Only reason for 4 stars is that I wish there was an option to order pre-aged/circulated banknotes for period plays.',
    date: '1 month ago',
    category: 'product-quality',
    verified: true,
    productionType: 'Theatrical Stage Run',
    companyReply: {
      date: '1 month ago',
      text: 'Thank you Lachlan! We have actually just introduced a distressed/circulated run for theatrical companies that launches next month. Feel free to contact our studio team for custom distressing!',
    },
  },
  {
    id: 'rev-06',
    author: 'Damian Ross',
    role: 'Indie Film Director',
    location: 'Sydney, NSW',
    rating: 4,
    title: 'High production value, slight shipping delay over long weekend',
    comment:
      'The reproduction notes look sensational on 4K digital cinema cameras. The dual-sided print and specimen identifiers strike the perfect balance of visual realism without crossing any legal boundaries. There was a 1-day delay during the Queen’s Birthday public holiday with Australia Post, but PROPPS kept us informed.',
    date: '1 month ago',
    category: 'shipping',
    verified: true,
    productionType: 'Independent Short Film',
  },
  {
    id: 'rev-07',
    author: 'Brendan Ward',
    role: 'Commercial Art Director',
    location: 'Perth, WA',
    rating: 3,
    title: 'Props are 10/10, but initially received no tracking link',
    comment:
      'The actual notes and acrylic display cases are flawless. However, my dispatch confirmation email came through without the tracking link embedded due to an automated glitch. I had to reach out on WhatsApp to get the tracking number. Support answered and resolved it within an hour, but the automated notifications should be smoother.',
    date: '1 month ago',
    category: 'customer-service',
    verified: true,
    productionType: 'Corporate Commercial',
    companyReply: {
      date: '1 month ago',
      text: 'Hi Brendan, thank you for your candid feedback. Our dispatch server experienced an API webhook timeout that morning which omitted the tracking URL in your email. We have since overhauled our dispatch webhook system to include backup SMS tracking. We appreciate your patience!',
    },
  },
  {
    id: 'rev-08',
    author: 'Harper Griffin',
    role: 'Set Decorator',
    location: 'Hobart, TAS',
    rating: 3,
    title: 'Weather grounding in Victoria delayed arrival by 48 hours',
    comment:
      'Our shipment was delayed because Melbourne airport freight experienced fog groundings. We missed our scheduled art department prep day, although the parcel arrived just in time for shoot day. The PROPPS team immediately refunded our express postage fee without me even having to ask, which showed great integrity.',
    date: '2 months ago',
    category: 'shipping',
    verified: true,
    productionType: 'Period Drama Pilot',
    companyReply: {
      date: '2 months ago',
      text: 'Hi Harper, thank you for your understanding. When interstate air freight is grounded by weather, we take proactive responsibility and immediately credit shipping charges. Delighted to hear the props made principal photography!',
    },
  },
  {
    id: 'rev-09',
    author: 'Liam Sanderson',
    role: 'Student Film Producer',
    location: 'Geelong, VIC',
    rating: 2,
    title: 'Misunderstood the 2:00 PM cutoff time, missed Friday delivery',
    comment:
      'I placed my order on Thursday at 5:30 PM expecting next-day Friday delivery for a weekend student shoot. Turns out the daily dispatch cutoff is strictly 2:00 PM AEST, so it didn’t leave the warehouse until Friday morning and arrived Monday. We had to rewrite the scene to use envelopes instead. The props themselves are beautiful, but make the cutoff time much bigger on checkout.',
    date: '2 months ago',
    category: 'shipping',
    verified: true,
    productionType: 'VCA Student Film',
    companyReply: {
      date: '2 months ago',
      text: 'Hi Liam, we are truly sorry your shoot was disrupted. Because each stack requires manual quality inspection and secure Australia Post courier handover, our couriers collect strictly at 2:30 PM. In response to your review, we have added a live countdown banner to the checkout page displaying exact time remaining for same-day dispatch.',
    },
  },
  {
    id: 'rev-10',
    author: 'Travis Meyer',
    role: 'Creative Studio Lead',
    location: 'Alexandria, Sydney NSW',
    rating: 1,
    title: 'Courier refused to leave parcel without signature — had to collect at post office',
    comment:
      'I requested Authority to Leave at our studio front door because we were shooting on location that morning. The driver left a card and took it to the local post office because PROPPS requires mandatory signature on delivery. Had to send an assistant to queue at the post office on a busy shoot day. Very frustrating when you need items left at the door.',
    date: '3 months ago',
    category: 'shipping',
    verified: true,
    productionType: 'Fashion Editorial Shoot',
    companyReply: {
      date: '3 months ago',
      text: 'Hi Travis, we understand the frustration on a hectic shoot schedule. However, as an Australian manufacturer of high-definition specimen prop currency complying with strict institutional protocols and insurer requirements, we legally mandate Signature on Delivery with ID verification on every single consignment. We cannot permit Authority to Leave (ATL) on prop currency parcels to protect our clients and community.',
    },
  },
  {
    id: 'rev-11',
    author: 'Marcus Chen',
    role: 'Art Director',
    location: 'Sydney, NSW',
    rating: 5,
    title: 'Wholesale tiered discounts make studio budgeting easy',
    comment:
      'Ordered 100 mixed bundles across $50, $100 and $20 notes. The wholesale tiered discount was applied automatically at checkout and the bulk carton packaging kept every strap crisp and uncreased. Will be our ongoing supplier for our 2026 slate.',
    date: '3 months ago',
    category: 'wholesale',
    verified: true,
    productionType: 'Action Feature Film',
  },
  {
    id: 'rev-12',
    author: 'Nadia Kowalski',
    role: 'Armourer & Tactical Prop Supervisor',
    location: 'Melbourne, VIC',
    rating: 5,
    title: 'Pairs seamlessly with our ballistic cases and prop firearms',
    comment:
      'For our tactical training simulation and cinema stunts, prop cash needs to withstand rough handling by tactical units. PROPPS bundles are glued and strapped securely with reinforced bands. Outstanding durability and authentic Australian look.',
    date: '4 months ago',
    category: 'product-quality',
    verified: true,
    productionType: 'Tactical Law Enforcement Simulation',
  },
];
