// One-off: adds CATEGORY_SECTIONS and CATEGORY_FAQS (new-notes, film-and-tv-props) to src/config/site.js.
const fs = require('fs')
const file = 'src/config/site.js'
let src = fs.readFileSync(file, 'utf8')
const crlf = src.includes('\r\n')
src = src.replace(/\r\n/g, '\n')
if (src.includes('export const CATEGORY_SECTIONS')) throw new Error('already applied')

const sections = {
  'new-notes': [
    {
      h2: 'AU prop money for film, TV, theatre and photography',
      paras: [
        'AU prop money from PROPPS is made in Melbourne for the people who actually put cash on screen: art departments, photographers, theatre companies and trainers. The New Notes range covers all five current Australian denominations, so you can dress a till, a wallet, a briefcase or a vault from one order.',
        "Prop Australian money only works on camera when it reads correctly at working distance and stays obviously a reproduction in the hand. Ours is printed double-sided on matte archival paper, carries permanent specimen markings and is never polymer, so it is easy to tell apart from a genuine note by touch.",
      ],
    },
    {
      h2: 'Which denomination to buy',
      paras: [
        'Hero stacks and close-ups usually use $100 and $50 notes because their colours read strongly on camera. Tills, wallets and counter exchanges look more natural with $20, $10 and $5 notes mixed in. Most orders combine two or three denominations rather than a single one.',
      ],
    },
    {
      h2: 'High quality prop money, built to read on camera',
      paras: [
        "High quality prop money means crisp fine print at arm's length, matte paper that avoids hot spots under studio lights, matching print on both sides and notes that survive repeated takes. Every PROPPS note is checked against that list, so stacks match from take to take.",
        'Searching for prop money au usually means a deadline. Orders start at $300 AUD, dispatch leaves our Melbourne studio within 24 business hours of payment by Australia Post Express, and delivery is free from $500 AUD.',
      ],
    },
    {
      h2: 'Specimen-marked, never spendable',
      paras: [
        'Some buyers search for fake Australian money prop. To be clear about what we sell: these are non-legal tender reproduction props made solely for motion pictures, television, theatre, visual arts and simulation training. They are never to be spent, handed over as payment or presented as real cash. Read the compliance guide for the standard each note is built to.',
      ],
    },
  ],
  'film-and-tv-props': [
    {
      h2: 'Buy film props for the cash scene',
      paras: [
        'Cash scenes are where a production most often needs props that survive a close-up. These packs give the art department counted, strapped prop currency in standard sizes, so a bank counter, a handover or a vault can be dressed without building bundles on the day.',
        'Because the stacks are consistent, the second take and the second camera see the same money as the first. That is the difference between a set that resets in a minute and one that waits while someone re-counts.',
      ],
    },
    {
      h2: 'Movie set props for sale: currency for the shot',
      paras: [
        'We are a currency specialist, not a general prop house. The movie set props for sale here are prop money packs for scenes that show cash, in bundle sizes from a single stack to vault quantities. For furniture, costume or other set dressing, you will need a general prop supplier or a hire house.',
      ],
    },
    {
      h2: 'Realistic money that holds up under studio lights',
      paras: [
        'Realistic money for film does not need to look identical to a real note. It needs to read correctly through the lens while staying clearly marked and different in the hand. Matte, non-reflective paper avoids glare, and double-sided print means a fanned or flipped stack still looks right.',
      ],
    },
    {
      h2: 'Orders for series and studios',
      paras: [
        'Ordering the full quantity for a block of shooting keeps stacks matching across episodes. Orders start at $300 AUD, free delivery applies from $500 AUD, and larger or repeat runs can be quoted on the wholesale page. Every pack carries specimen markings and is a non-legal tender prop.',
      ],
    },
  ],
}

const faqs = {
  'new-notes': [
    { q: 'Where can I buy AU prop money?', a: 'You can buy AU prop money online from PROPPS, a Melbourne studio supplying Australian productions since 2019. Choose a denomination from $5 to $100 and a stack size, then pay by bank transfer, PayID or crypto.', link: { href: '/shop/new-notes/100-australian-prop-money-for-sale/', label: 'See the $100 notes' } },
    { q: 'What is prop Australian money made of?', a: 'Our notes are printed double-sided on matte archival paper, not polymer, and carry permanent specimen markings. Real Australian banknotes are polymer, so the difference is obvious by touch.', link: { href: '/compliance/', label: 'Read the compliance guide' } },
    { q: 'Is prop money au legal to buy?', a: 'Buying clearly marked, non-legal tender reproduction notes for film, television, theatre, photography or training is lawful. Spending them or presenting them as real money is not.', link: { href: '/blog/is-it-illegal-to-buy-prop-money-australia/', label: 'Is it illegal to buy prop money?' } },
    { q: 'What makes high quality prop money?', a: "Crisp print at arm's length, matte non-reflective paper, matching print on both sides and notes that hold up through repeated takes. Ask any supplier for photos of an actual note, front and back.", link: { href: '/blog/high-quality-prop-money-how-to-judge-it-on-camera/', label: 'How to judge it on camera' } },
    { q: 'Is fake Australian money prop the same as your prop money?', a: 'Our product is a specimen-marked reproduction prop for production use, not fake currency. Every note is marked, printed on paper and sold as non-legal tender.', link: { href: '/blog/fake-money-vs-prop-money-the-legal-difference-in-australia/', label: 'Fake money vs prop money' } },
  ],
  'film-and-tv-props': [
    { q: 'Where can I buy film props in Australia?', a: 'PROPPS supplies film and television art departments with prop currency from its Eltham, Melbourne studio. Orders start at $300 AUD and ship by Australia Post Express with signature on delivery.', link: { href: '/blog/buying-film-props-in-australia-a-checklist-for-art-departments/', label: 'Buying film props checklist' } },
    { q: 'Are these movie set props for sale only prop money?', a: 'Yes. We specialise in prop currency for cash scenes. For furniture, costume or general set dressing, use a general prop supplier or hire house.', link: { href: '/shop/', label: 'Browse the full catalog' } },
    { q: 'How realistic is the money on camera?', a: 'It is printed on matte, non-reflective paper with double-sided print, so it reads correctly through the lens without glare. It stays clearly marked as a specimen.', link: { href: '/blog/lighting-prop-money-for-camera-avoiding-glare/', label: 'Lighting prop money without glare' } },
    { q: 'How fast can film props be delivered?', a: 'Orders dispatch from Melbourne within 24 business hours of payment by Australia Post Express, signature required on delivery.', link: { href: '/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/', label: 'Shipping and dispatch' } },
    { q: 'Can I get a better price for a series or studio order?', a: 'Yes. Larger and repeat runs can be quoted on the wholesale page, and ordering the whole block at once keeps stacks matching.', link: { href: '/wholesale/', label: 'Wholesale pricing' } },
  ],
}

const block = `// Extra H2 sections and FAQs shown on selected category pages (SEO easy-win pass 2026-10-20).
export const CATEGORY_SECTIONS = ${JSON.stringify(sections, null, 2)}

export const CATEGORY_FAQS = ${JSON.stringify(faqs, null, 2)}

`
const marker = '// Shared bundle-size pricing tiers'
if (!src.includes(marker)) throw new Error('marker not found')
src = src.replace(marker, () => block + marker)
fs.writeFileSync(file, crlf ? src.replace(/\n/g, '\r\n') : src)
