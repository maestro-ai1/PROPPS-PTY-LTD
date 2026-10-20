// Batch 2 of the 2026-10-20 blog rewrite (audit posts 5 to 8). Apply with:
//   node scripts/apply-posts-rewrite.cjs scripts/posts-rewrite-batch2-2026-10-20.cjs
const B = (...blocks) => blocks.join('\n\n');

const LAW = 'https://www.legislation.gov.au/';
const RBA = 'https://www.rba.gov.au/banknotes/';
const AUSPOST = 'https://auspost.com.au/';

module.exports = [
  // ---------------------------------------------------------------- 5
  {
    slug: 'where-to-buy-prop-money-in-australia-legally',
    readTime: '9 min read',
    excerpt:
      'Where to buy prop money in Australia legally: how to pick a local studio, check specimen markings and avoid risky overseas listings. Order with confidence.',
    content: B(
      `Search for "buy prop money Australia" and the results are a mixed bag: overseas marketplaces, unmarked novelty listings, forum posts and the occasional professional studio. Not all of it is lawful to import, carry or use on an Australian set. This guide explains where to buy prop money in Australia legally, how to compare your options, what to check before you pay and what a sensible order looks like. It is general information, not legal advice.`,
      `## The short answer`,
      `Buy marked, non-legal tender reproduction notes from an Australian business you can identify, with an ABN, a physical address, clear product descriptions and traceable delivery. That combination gives you an invoice for the production file, a local contact if something goes wrong and notes that are built to the standard in the Commonwealth [Crimes (Currency) Act 1981](${LAW}) and the Reserve Bank's reproduction guidance. You can read the detail in our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/).`,
      `## Your five options for buying prop money`,
      `Most buyers end up choosing between these five routes. Each has a different risk profile.`,
      `### 1. A local prop currency studio`,
      `A specialist Australian studio is the best fit for film, television, theatre and advertising work. You get notes made for the screen, specimen markings on every note, an invoice, local support and Australia Post Express delivery. PROPPS PTY LTD works this way from Eltham, Victoria, and has supplied more than 500 Australian film, television and theatrical productions since 2019. Browse the [New Notes range](/shop/new-notes/) to see the product.`,
      `### 2. A general prop hire house`,
      `Some hire houses stock a few bundles of stage cash. This works for a single day of theatre, but selection is limited, notes may be reused and finishes vary. It is a reasonable fallback for tiny jobs, not a plan for a series.`,
      `### 3. Party and novelty shops`,
      `Novelty and party shops sell play money that looks nothing like real currency. That is safe and suits children's games, fundraisers and classrooms, but it will not hold up in a close-up. Our guide to [play money vs prop money](/blog/play-money-vs-prop-money-which-one-do-you-need/) explains where the line sits.`,
      `### 4. Overseas marketplaces`,
      `Overseas listings are where most trouble starts. Sellers often ship polymer notes that copy current Australian designs closely, with faint or no specimen markings, long delivery times and no one to contact. Parcels can be held at the border. Our comparison of [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) goes through the differences in detail.`,
      `### 5. Making your own`,
      `Do not print your own. A home-printed copy has no safeguards, no markings and no paperwork, and a convincing copy is exactly what the law is written to catch.`,
      `## What to check before you buy`,
      `Spend five minutes on this checklist before you place an order with any seller.`,
      `1. **Specimen markings.** Every note should carry permanent, prominent markings. Ask for a close-up photo of the front and back of an actual note, not a render.\n2. **Material.** Real Australian banknotes are polymer. Reproductions printed on matte paper are easy to tell apart by touch. PROPPS notes are printed double-sided on 120gsm archival paper.\n3. **Business details.** Look for an ABN, a physical address and a working phone number. You should be able to say who you paid.\n4. **Honest descriptions.** The product page should say the notes are non-legal tender props made for film, television, theatre, visual arts or training. Treat any claim of "government clearance", "undetectable" quality or "unmarked" delivery as a warning.\n5. **Delivery.** Traceable shipping with a signature on delivery is the sensible standard. PROPPS ships by [Australia Post](${AUSPOST}) Express with a mandatory signature.\n6. **Policies.** A real supplier publishes shipping, refund and privacy policies and a compliance page.\n7. **Paperwork.** You should receive an invoice you can keep on the production file.`,
      `## Why local matters`,
      `Buying from an Australian studio changes a number of small things that add up on a production:`,
      `- **Speed.** Express dispatch from Melbourne takes days, not weeks. A late change to the call sheet is manageable.\n- **Recourse.** If a parcel is damaged or a count is wrong, you can ring someone.\n- **Paperwork.** A local invoice answers questions from insurers and location owners.\n- **Currency fit.** A local studio keeps up with changes to the real note designs, so your on-screen cash looks current.\n- **Lower legal risk.** Local specimen-marked notes avoid the border and compliance questions that come with overseas polymer copies.`,
      `## How much to expect to pay`,
      `Prices depend on denomination, bundle size and finish. At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount. Notes are sold in stacks, from a Starter Stack up to 100 Stacks for large scenes. For help matching quantity to the shot, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/). If you are watching the budget, our [cheap prop money guide](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains where a low price usually comes from.`,
      `## A simple buying process`,
      `1. **List the scenes.** Write down which scenes show cash, which denominations are visible and whether any shot is a close-up.\n2. **Choose the denominations.** Start with the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, then add $20, $10 and $5 notes for tills and wallets.\n3. **Choose stack sizes.** Match stack size to what the camera sees. Our guide to [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/) shows how.\n4. **Order early enough.** Express dispatch is quick, but a signature is required, so plan who will be at the address.\n5. **File the paperwork.** Keep the invoice and a note of the specimen markings with the production file.\n6. **Control the notes on set.** Store them with the prop master and count them in and out each day.`,
      `## Buying for different uses`,
      `The right order depends on the job, and so does what you should ask the supplier.`,
      `- **Film and television.** You need volume, matching stacks and fast dispatch. Ask about wholesale rates if the order will repeat across a season, and keep the invoice with the production file.\n- **Theatre.** Notes are seen from a distance, but they are handled backstage every night. Ask about durability and how many notes a run needs. Our [event and party props](/shop/event-and-party-props/) suit lighter stage use.\n- **Photography.** Close-ups show print detail and paper finish. Matte stock avoids glare under strobes. See our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/).\n- **Advertising and branded content.** Agencies often want a branded or custom look. Our [custom and branded props](/shop/custom-and-branded-props/) cover that, and the legal checklist still applies.\n- **Training and simulation.** Cash-handling trainers need notes they can reuse and account for. Keep them in the training room and record their return.\n- **Events and parties.** Marked novelty notes are enough. Keep them out of circulation and away from shops and taxis.`,
      `## Warning signs in a listing`,
      `A few phrases tell you a listing is written for the wrong reason. Be cautious of copy that promises notes which pass detection tests, describes the product as "real looking" without mentioning markings, offers discreet or unmarked delivery as a feature, or claims government clearance without linking to a document. A professional studio describes what the product is, who it is for and how it is marked. It does not need to sound like a secret.`,
      `Be equally careful with listings that hide the seller. If there is no ABN, no address, no phone number and no policies, there is nobody to hold responsible when a parcel goes missing or a count is short. Those are the same details an insurer or location owner will want to see.`,
      `## What not to do after you buy`,
      `The law is mostly concerned with what happens after the purchase. Never spend prop notes, never hand them out as tips or gifts, never cover or crop the markings in publicity stills and never post unmarked close-ups that suggest the cash is real. If someone asks about a note, show the specimen markings and the invoice. Our guide to [whether it is illegal to buy prop money](/blog/is-it-illegal-to-buy-prop-money-australia/) goes through the common situations that cause problems, and the [Reserve Bank of Australia](${RBA}) publishes guidance on banknote reproductions.`,
      `## Where to go next`,
      `If you are ready to order, start with the [New Notes range](/shop/new-notes/). If your production needs larger quantities, see [Money Stacks](/shop/money-stacks/) and our [wholesale page](/wholesale/), or [contact the studio](/contact/) with your shot list. If a legal team is reviewing the purchase, send them to the [compliance page](/compliance/).`,
      `This article is general information, not legal advice.`
    ),
    faqs: [
      {
        q: 'Where is the best place to buy prop money in Australia?',
        a: 'A local prop currency studio with an ABN, specimen-marked notes, an invoice and signed-for delivery is the safest choice for film, TV, theatre and photography. Browse the [New Notes range](/shop/new-notes/) to see what a compliant order looks like.',
      },
      {
        q: 'Can I buy prop money from overseas?',
        a: 'You can, but overseas listings often ship polymer notes that copy Australian designs closely, with weak markings and long delivery, and parcels can be held at the border. Compare the options in [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).',
      },
      {
        q: 'How do I know a prop money seller is legitimate?',
        a: 'Check for an ABN, a physical address, specimen markings on every note, honest product descriptions, published policies and traceable delivery. Our [compliance page](/compliance/) sets out what we expect from our own notes.',
      },
      {
        q: 'Is there a minimum order for prop money?',
        a: 'At PROPPS, orders start at $300 AUD and delivery is free from $500 AUD. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) to size an order to the shot.',
      },
      {
        q: 'Can I buy prop money near me?',
        a: 'PROPPS is based in Eltham, Melbourne and dispatches across Australia by Australia Post Express with signature on delivery. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for timing in your state.',
      },
    ],
  },

  // ---------------------------------------------------------------- 6
  {
    slug: '100-dollar-prop-money-which-bundle-size',
    readTime: '9 min read',
    excerpt:
      '100 dollar prop money: how to choose a bundle size for wallet shots, desk spreads and vault reveals, with stack prices. Plan your order before you shoot.',
    content: B(
      `For most Australian productions, 100 dollar prop money does the heavy lifting. The denomination reads clearly on camera, signals value at a glance and holds its colour under both natural and studio light. The harder question is how much to order. Too little and the scene looks thin. Too much and the budget goes on bundles the lens never sees. This guide shows how to pick a bundle size for wallet shots, desk spreads, bag reveals and vault scenes, with the real stack sizes and prices, and a few tricks that let a small order read as a large one. All our notes are specimen-marked, non-legal tender props.`,
      `## The short answer`,
      `Match the stack size to what the camera actually sees. A hand or wallet shot needs a Starter Stack. A desk or table spread needs one or two stacks. A bag or briefcase scene needs five. A vault or heist reveal needs ten or more, and a full bank vault scene is where 50 and 100 stack orders come in. Use hero stacks of $100 notes where the camera is close, and fill the rest of the frame with cheaper material.`,
      `## The bundle sizes and what they cost`,
      `Every product in the [New Notes range](/shop/new-notes/) is sold in the same stack tiers. Stack sizes are described by face value, and prices are in AUD:`,
      `- **Starter Stack:** $1,500 face value, $115\n- **1 Stack:** $2,000 face value, $200\n- **5 Stacks:** $10,000 face value, $850\n- **10 Stacks:** $20,000 face value, $1,600\n- **50 Stacks:** $100,000 face value, $7,500\n- **100 Stacks:** $200,000 face value, $14,000`,
      `Orders start at $300 AUD, so a Starter Stack on its own does not clear the minimum. A Starter Stack plus a 1 Stack, or a single 5 Stacks order, is the usual way to start. Delivery is free from $500 AUD, and payments in cryptocurrency receive a 10% discount. You can see the current prices on the [$100 product page](/shop/new-notes/100-australian-prop-money-for-sale/).`,
      `## Match the bundle to the shot`,
      `### Wallet or hand shot`,
      `A close shot of a hand counting notes or a wallet opening only shows a few notes. One Starter Stack covers it, with plenty left over for continuity. Spend the saved budget on a clean, uncreased hero note that you keep for the close-up.`,
      `### Table spread or desk scene`,
      `A pile on a table, a desk or a car bonnet needs volume without depth. One or two stacks give a natural-looking spread. Let the notes fall loosely and vary the angles. A neat grid looks staged.`,
      `### Bag, briefcase or handover`,
      `A handover scene shows a bag opening and a thick bundle at the top. Five stacks usually fill a briefcase to the lip. Put $100 notes on top of the bundles that show, and place filler underneath. If the scene shows the same bag twice, order enough matching stacks so you are not rebuilding them between set-ups.`,
      `### Heist or vault reveal`,
      `A vault, a safe or a cash room is where the camera pulls back. This is where 10 stacks and above come in. Count the shelves, the pallets and the bags in the frame, then work out how many bundles each one holds. For the biggest scenes our [Money Stacks category](/shop/money-stacks/) and [wholesale page](/wholesale/) are the right place to start. Our guide to [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/) goes through the maths in detail.`,
      `## Make a small order look big`,
      `Art departments rarely buy a full vault of hero notes. These are the usual tricks:`,
      `1. **Hero on top, filler underneath.** The camera sees the top note and the stack edges. Put $100 notes at the visible faces and cheaper material behind them.\n2. **Fan the notes.** A fanned handful reads as a thicker stack than a flat one.\n3. **Vary the denominations.** An all-$100 drawer looks wrong. Mix in $50 and $20 notes, as our guide to the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) explains.\n4. **Use depth of field.** A shallow focus blurs bundles in the background, so you do not need hero quality there.\n5. **Break the line.** Open a strap, spill a few notes and leave one stack at an angle. Perfect order looks fake.\n6. **Keep spares.** Hold one stack unopened as a reserve for late changes.`,
      `## Continuity and re-takes`,
      `Continuity is the quiet cost of a cash scene. If the same money appears before and after a handover, you need matching stacks for both sides of the cut. Notes are double-sided, so a flipped stack still looks right. Order the full quantity for a block of shooting in one go, so the notes in scene 12 match the notes in scene 3. If you need a repeat order, [contact the studio](/contact/) and mention the earlier order.`,
      `## Worked examples`,
      `These three examples show how the same tiers stretch across different scenes. Quantities are a starting point. Always count what your own shot list shows.`,
      `### A bank counter scene`,
      `The camera starts on a teller counting a bundle, then cuts to a wide of the counter with a few stacks. One 5 Stacks order covers the hero stacks, the teller's drawer and a reserve. Put $100 and $50 notes on the visible faces of the bundles and use $20 and $10 notes in the drawer. Total: $850, which also clears the order minimum and delivery threshold.`,
      `### A kitchen-table handover`,
      `A character slides a bundle across a table, and the camera holds on the money for two seconds. One stack in a close-up is enough, and a Starter Stack plus a 1 Stack ($315 together) clears the minimum with room for a second take and a reserve. If the scene is shot twice from different angles, the second stack lets the art department reset instantly without rebuilding the first.`,
      `### A vault reveal`,
      `A heist or security scene pulls back to show shelves of bundles. A 10 Stacks order ($1,600) fills a modest vault. A larger set with pallets and open bags suits 50 Stacks ($7,500). A full cash room is where 100 Stacks ($14,000) and a wholesale conversation make sense. In every case, put hero stacks at the front and let depth of field handle the back.`,
      `## Common mistakes with bundle sizes`,
      `- **Ordering for the whole frame instead of the visible faces.** The camera sees the top of a stack, not its core.\n- **Forgetting the second set-up.** Matching stacks for a second angle save more time than they cost.\n- **Buying only $100 notes.** A drawer or wallet with a single denomination looks staged.\n- **No reserve.** A single unopened stack is cheaper than a rush order on the morning of the shoot.\n- **Leaving it late.** Express dispatch is fast, but it needs someone at the address to sign.`,
      `## Why $100 notes dominate screen work`,

      `The Reserve Bank's current $100 note is a strong, saturated green that reads on camera under most lighting, and the denomination signals value instantly. That is why productions lean on $100 and $50 notes for hero stacks and use $20, $10 and $5 notes for tills, wallets and counters. If you are choosing between denominations, read our [guide to the $50 and $100 range](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) and browse the [$50 product](/shop/new-notes/50-australian-prop-money-for-sale/) alongside the $100.`,
      `## Compliance and handling`,
      `Every note carries permanent specimen markings, and every product is a non-legal tender reproduction made for motion pictures, television, theatre, visual arts and simulation training. Keep the notes with the prop master, count them in and out each day, keep the invoice on file and never spend them or hand them out. For the legal background read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/). The [Reserve Bank](${RBA}) publishes its own guidance on banknote reproductions.`,
      `## Where to go next`,
      `Start with the [$100 prop notes](/shop/new-notes/100-australian-prop-money-for-sale/), compare the [Money Stacks](/shop/money-stacks/), or read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) if you are still sizing the order.`
    ),
    faqs: [
      {
        q: 'How much 100 dollar prop money do I need for a scene?',
        a: 'A wallet shot needs a Starter Stack, a desk spread one or two stacks, a briefcase five, and a vault ten or more. Match the order to what the camera sees. See the [$100 product](/shop/new-notes/100-australian-prop-money-for-sale/) for current prices.',
      },
      {
        q: 'What bundle sizes are available for $100 prop notes?',
        a: 'Starter Stack ($115), 1 Stack ($200), 5 Stacks ($850), 10 Stacks ($1,600), 50 Stacks ($7,500) and 100 Stacks ($14,000), all in AUD. Browse the [New Notes range](/shop/new-notes/) to choose.',
      },
      {
        q: 'Can I order a single Starter Stack?',
        a: 'Orders start at $300 AUD, so a Starter Stack on its own does not clear the minimum. Add a 1 Stack or choose 5 Stacks. Read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) before you order.',
      },
      {
        q: 'Are $100 prop notes double-sided?',
        a: 'Yes, notes are printed on both sides, so a flipped or fanned stack still looks right on camera. See [high quality prop money and how to judge it](/blog/high-quality-prop-money-how-to-judge-it-on-camera/) for what to check.',
      },
      {
        q: 'Can I get a bulk price for a vault scene?',
        a: 'Yes. For 50 and 100 stack scenes and for repeat orders across a season, use the [wholesale page](/wholesale/) or [contact the studio](/contact/) with your shot list.',
      },
    ],
  },

  // ---------------------------------------------------------------- 7
  {
    slug: 'ready-prop-money-stacks-for-fast-turnaround',
    readTime: '9 min read',
    excerpt:
      'Ready prop money means counted, strapped stacks you can place on set. Learn how pre-strapped stacks save prep time and simplify continuity. Plan your order.',
    content: B(
      `Call sheets change. A scene moves a day earlier, a table spread becomes a vault reveal, or the director adds a second take of a handover with a different bag. When cash is in the shot, the art department is the department that feels it first. Ready prop money, meaning stacks that are already counted, strapped and sized, takes the preparation out of a late change. This guide explains what ready stacks are, when they save time, how to size and store them, and how to order them for a fast turnaround. Every note we sell is a specimen-marked, non-legal tender prop.`,
      `## The short answer`,
      `Ready prop money is supplied as pre-counted, strapped stacks, so the art department can place them instead of building them. It saves prep hours, keeps stacks matching across set-ups and makes late changes manageable. Orders dispatch from our Melbourne studio by Australia Post Express, with a signature required on delivery. Browse the [Money Stacks category](/shop/money-stacks/) to see what is available.`,
      `## What ready stacks are`,
      `A ready stack is a bundle of notes that has been counted and strapped at the studio. The art department opens the box, checks the count and places the stack. Nothing needs to be banded, squared or counted on the morning of the shoot. Stack sizes are standard, so you can plan around them. Our stack tiers run from a Starter Stack through 1, 5, 10, 50 and 100 stacks, which covers anything from a wallet shot to a full vault.`,
      `## Why ready stacks help on a tight schedule`,
      `1. **Less prep.** There is no counting or banding on the day. A prop master with a small team can dress a scene in minutes instead of an hour.\n2. **Consistent look.** Matching stacks make continuity simpler between takes and between set-ups.\n3. **Fewer mistakes.** A strapped stack has a known count, so you can track it in and out at the end of the day.\n4. **Easier handover.** The second unit or a new art department assistant can pick up the stacks and place them without a briefing.\n5. **Faster dispatch.** Orders leave our Melbourne studio by Express Post within 24 business hours of payment.`,
      `## When ready stacks matter most`,
      `Ready stacks pay off whenever time is the scarcest resource:`,
      `- **Late scene changes.** A move from a table spread to a vault reveal needs more stacks, not more preparation.\n- **Multi-camera days.** Two cameras and three set-ups need identical stacks in several places at once.\n- **Series work.** Episode six has to match episode one. Order once, and use the same size and strapping throughout.\n- **Small crews.** Student films and independent productions rarely have a spare person to count and band notes.\n- **Photography.** A studio shoot with an hourly rate benefits from stacks that go straight on the set.`,
      `For a longer look at how to match volume to scene, read [how much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) and [prop cash for heist and bank scenes](/blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right/).`,
      `## How to size a ready-stack order`,
      `Use a simple process:`,
      `1. **Count the visible stacks.** Walk the shot list and count how many stacks the camera sees in each scene.\n2. **Add the hidden ones.** Add stacks that sit behind hero bundles, under bags or in the background. The lens may blur them, but they still need to be there.\n3. **Allow for continuity.** If the same money appears twice in a scene, double the count for the second set-up.\n4. **Add a reserve.** Keep one stack unopened as a spare for late changes.\n5. **Round up to the nearest tier.** The tiers are Starter ($115), 1 Stack ($200), 5 Stacks ($850), 10 Stacks ($1,600), 50 Stacks ($7,500) and 100 Stacks ($14,000), in AUD.`,
      `Orders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount. For larger or repeat runs, ask about wholesale rates on our [wholesale page](/wholesale/).`,
      `## Choosing denominations for ready stacks`,
      `Ready stacks work best when the denomination mix fits the scene. Use $100 and $50 notes on the visible faces of hero stacks, because those colours read strongly on camera. Add $20, $10 and $5 stacks for tills, wallets and counters. See our [$100 bundle size guide](/blog/100-dollar-prop-money-which-bundle-size/) for how to size the biggest stacks, and the guide to the [best Australian banknote denominations for film and TV](/blog/best-australian-banknote-denominations-for-film-and-tv-scenes/) for the mix.`,
      `## A worked example: a three-day shoot`,
      `Imagine a short drama with a bank scene on day one, a car handover on day two and a kitchen-table scene on day three, all using the same money. The art department needs hero stacks for the bank counter, a bag for the car and a close-up bundle for the table.`,
      `With ready stacks the plan is simple. Order 5 Stacks for the bank counter and drawer, add a 1 Stack and a Starter Stack for the handover and the table, and keep one stack sealed as a reserve. Because every stack is strapped and counted, the prop master can reset the bag between takes in a minute, track the count at wrap each day and hand the same stacks to the next location. Without ready stacks, each of those resets means banding, squaring and counting by hand while the crew waits.`,
      `## Common mistakes with ready stacks`,
      `- **Opening everything on day one.** Keep the reserve sealed until it is needed.\n- **Ordering different sizes for the same scene.** Matching stacks protect continuity, so keep sizes consistent across a scene.\n- **Not counting at wrap.** A quick count at the end of the day is the cheapest way to avoid a missing-stack surprise.\n- **Leaving the notes unattended.** Assign one person and a secure place before the parcel arrives.\n- **Waiting until the night before.** Ready stacks are fast, but a signature is required on delivery and weekends and remote addresses take longer.`,
      `## Storing and handling ready stacks on set`,
      `A stack that is ready to place should stay that way. A few simple rules keep the notes in good shape and keep the paperwork clean:`,
      `- **Keep them in the box until the scene.** A strap protects the edges and keeps the count.\n- **Assign one person.** The prop master or art department assistant is responsible for the notes, in and out, each day.\n- **Count at wrap.** A quick count at the end of the day catches anything missing before it leaves the location.\n- **Keep one stack sealed.** A reserve for late changes is cheaper than a rush order.\n- **Protect from moisture and heat.** Archival paper handles normally, but damp conditions and hot cars curl edges.\n- **Never leave notes in a car or on a location overnight.** Store them securely.`,
      `## Ordering for a fast turnaround`,
      `The fastest way to get ready stacks on set is to plan the order a few days before the shoot:`,
      `1. Choose your stack tiers and denominations in the [Money Stacks category](/shop/money-stacks/).\n2. Place the order and pay at checkout. If you pay in crypto, the 10% discount applies.\n3. Orders dispatch from Melbourne by [Australia Post](${AUSPOST}) Express within 24 business hours of payment.\n4. A signature is required on delivery, so make sure someone is at the address.\n5. On arrival, check the count, file the invoice and store the stacks with the prop master.`,
      `If your shoot date is very close, [contact the studio](/contact/) and we will tell you what is realistic for your state. Our guide to [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) shows typical timings.`,
      `## Compliance and responsible use`,
      `Ready stacks are still props. Every note carries permanent specimen markings, and every product is a non-legal tender reproduction made for motion pictures, television, theatre, visual arts and simulation training. They must never be spent, handed out as gifts or tips, or presented as real cash. Keep the invoice on the production file, control the notes on set and brief the cast and crew. Read our [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/) for the full standard.`,
      `## Where to go next`,
      `Browse [Money Stacks](/shop/money-stacks/), compare the [$100](/shop/new-notes/100-australian-prop-money-for-sale/) and [$50](/shop/new-notes/50-australian-prop-money-for-sale/) products, or send your shot list through the [contact page](/contact/) for a quantity suggestion.`
    ),
    faqs: [
      {
        q: 'What is ready prop money?',
        a: 'Ready prop money is supplied as pre-counted, strapped stacks, so the art department can place them without counting or banding on the day. Browse the [Money Stacks category](/shop/money-stacks/) to see the sizes.',
      },
      {
        q: 'How fast can ready prop money stacks be delivered?',
        a: 'Orders leave our Melbourne studio by Australia Post Express within 24 business hours of payment, with a signature required on delivery. See [shipping and dispatch](/blog/shipping-and-dispatch-how-fast-can-you-get-prop-money-in-australia/) for typical timings.',
      },
      {
        q: 'How many stacks do I need for a scene?',
        a: 'Count the stacks the camera sees, add the hidden ones, double for repeat set-ups and add a reserve. [How much prop money you need for a scene](/blog/how-much-prop-money-do-you-need-for-a-scene/) shows examples.',
      },
      {
        q: 'Can I get a better price on a large ready-stack order?',
        a: 'Yes. For 50 and 100 stack runs and repeat orders across a season, ask about rates on the [wholesale page](/wholesale/).',
      },
      {
        q: 'Are ready stacks legal to use on set?',
        a: 'Yes, as long as they are used as props. Every note carries specimen markings and is a non-legal tender reproduction. Never spend them. Read our [compliance page](/compliance/) for the standard.',
      },
    ],
  },

  // ---------------------------------------------------------------- 8
  {
    slug: 'high-quality-prop-money-how-to-judge-it-on-camera',
    readTime: '9 min read',
    excerpt:
      'High quality prop money: the print, paper, edge and handling checks that show whether notes will hold up on camera. Learn what to ask before you order.',
    content: B(
      `High quality prop money is easy to spot once you know what to look for, and just as easy to miss if you judge it from a product photo. A render can hide soft print, glare-prone paper and edges that curl after two takes. This guide gives you a practical way to judge prop money before your shoot: four checks for the notes themselves, tests you can run under your own lights, questions to put to a supplier and the red flags that tell you to walk away. It is written for art departments, photographers and directors. All PROPPS notes are specimen-marked, non-legal tender props.`,
      `## The short answer`,
      `Judge prop money on four things: print detail, paper, double-sided finish and handling. Then test a sample under the lighting you will actually use, both at arm's length and up close. Quality is not about looking identical to a real banknote. It is about reading correctly on camera while staying clearly marked and different in the hand.`,
      `## Check 1: Print detail`,
      `Fine line work is the first thing to fail in a cheap print. Hold a note at arm's length: the main design, portrait and colour blocks should look clean. Then bring it close: fine lines should stay crisp rather than turning into a blur or showing visible dots. If you are shooting a close-up of a hand counting notes, the lens will see the fine detail. If the print softens at your working distance, it will soften on camera.`,
      `Look at colour as well as detail. Saturated colourways such as the gold of the $50 and the green of the $100 should read as deep, even colours, not flat or patchy. Check that the colours match across a stack, because two print runs that do not match are a continuity problem.`,
      `## Check 2: Paper`,
      `Paper decides how a note behaves under lights. A glossy or reflective stock throws hot spots into the lens, and a thin stock looks flimsy as soon as an actor handles it. Matte, non-reflective stock handles naturally and avoids glare under studio lighting. PROPPS notes are printed on 120gsm archival paper, which is heavy enough to feel like a note and matte enough to stay out of trouble with a lighting rig. Our guide to [lighting prop money on camera without glare](/blog/lighting-prop-money-for-camera-avoiding-glare/) goes through the lighting side.`,
      `Paper also matters for compliance. Genuine Australian banknotes are polymer, so a reproduction on paper is easy to tell apart by touch. That is a deliberate feature, not a compromise.`,
      `## Check 3: Both sides`,
      `Many cheap prints are one-sided or have a rough reverse. That matters whenever an actor fans, flips or counts notes, because the camera will see the back. Check that both sides carry the same print quality, and that the reverse is aligned with the front. Our notes are printed double-sided, so a fanned or flipped stack looks right.`,
      `## Check 4: Handling`,
      `A scene may need ten takes. Notes should survive repeated handling without curling, creasing badly or tearing. Test a sample note by folding it once, fanning it and counting it through your fingers a dozen times. Look at the corners and edges. If the corners round off or the edges fray in a few minutes, the notes will not last a day on set.`,
      `## A simple on-set test`,
      `Before you commit to a large order, run this five-minute test with a sample:`,
      `1. **Light it as you will shoot it.** Use your actual key light, practicals and any bounce.\n2. **Check at working distance.** View the note through the lens or monitor at the distance of your wide, medium and close shots.\n3. **Tilt it.** Rotate the note slowly and watch for hot spots and reflections.\n4. **Handle it.** Fan, flip, count and fold it a dozen times.\n5. **Compare to your other props.** Put it next to the wallet, the bag or the desk it will sit on.\n6. **Take photos on the camera you will use.** The monitor lies less than a product page does.`,
      `## Questions to ask a supplier`,
      `Good suppliers answer these directly. Evasive answers are a warning.`,
      `1. Can I see a close-up photo of an actual note, front and back?\n2. What is the paper stock and weight?\n3. Are the notes printed on both sides?\n4. Are the specimen markings permanent, and where are they?\n5. Can I order a sample or see a hand-held video?\n6. How are the notes counted and strapped?\n7. Do I get an invoice and written product description for the production file?\n8. How is the order delivered, and is a signature required?`,
      `## Red flags`,
      `Quality and honesty tend to travel together. Walk away if you see:`,
      `- **Renders instead of photos.** If every image is a mock-up, the real product may not match.\n- **No specimen markings.** Unmarked notes are the biggest risk for buyers.\n- **Claims of undetectable quality or passing tests.** That is the wrong promise for a prop.\n- **Government clearance claims with no source.** Regulators do not approve individual prop sellers.\n- **Unmarked or discreet packaging as a selling point.** Legitimate props do not need to hide.\n- **No Australian business details.** You should be able to see an ABN and an address.`,
      `For more on weighing up suppliers, read [where to buy prop money in Australia legally](/blog/where-to-buy-prop-money-in-australia-legally/) and [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/).`,
      `## What quality means for different shoots`,
      `The same note is judged differently depending on the job:`,
      `- **A feature film close-up** needs crisp fine detail, accurate colour and a natural feel in the actor's hand. Judge the note at working distance and check both sides.\n- **A television drama** often shoots fast with multiple set-ups, so handling and matching stacks matter as much as print detail.\n- **Theatre** is viewed from a distance, so colour and durability matter more than the finest line work. Notes get handled every night.\n- **Photography** shows everything at high resolution and under controlled lighting, so paper finish and glare control matter most. Read our [photography guide](/blog/prop-money-for-photography-realistic-cash-shots-without-the-risk/).\n- **Content creators** shoot on phones and small cameras, where bright, saturated colour and clear markings read well. See the [guide for content creators](/blog/prop-money-for-content-creators-social-media-and-photoshoot-guidelines/).`,
      `## Keeping prop money in good condition`,
      `Even good notes can be ruined by poor storage. Keep them flat, dry and out of direct sun. Avoid leaving them in a hot car, where edges curl. Keep them strapped and in the box until the scene. Handle them by the edges, and keep a few spare notes for hero shots so the best ones are not handled more than needed. At wrap, count the notes in and store them with the prop master, never loose in a bag or costume.`,
      `## Quality is not the same as cost`,
      `A higher price does not guarantee quality, and a low price does not always mean poor quality. What matters is whether the price covers the things you cannot see on a product page: paper weight, double-sided alignment, consistent colour between runs, counting and strapping, paperwork and delivery. Our guide to [cheap prop money and what you are really paying for](/blog/cheap-prop-money-what-you-are-really-paying-for/) goes through the trade-offs. At PROPPS, orders start at $300 AUD, delivery is free from $500 AUD and payments in cryptocurrency receive a 10% discount.`,
      `## Match quality to the shot`,
      `Not every shot needs the same level of detail. A close-up of a hand counting notes needs hero-quality print and handling. A wide of a vault needs volume, and a shallow depth of field will blur the bundles at the back. Put your best notes where the camera is close and use stacks for the rest. Our guide to [$100 prop money bundle sizes](/blog/100-dollar-prop-money-which-bundle-size/) shows how to split an order between hero and background stacks.`,
      `## Compliance still matters`,
      `High quality does not mean realistic enough to deceive. Every note we sell carries permanent specimen markings, is printed on paper rather than polymer and is sold as a non-legal tender prop for motion pictures, television, theatre, visual arts and simulation training. Keep the notes under the prop master's control, never spend them and never post unmarked close-ups that suggest the cash is real. Read the [Section 22 guide](/blog/crimes-currency-act-1981-rba-prop-money-guidelines/) and visit the [compliance page](/compliance/) for the full standard.`,
      `## Where to go next`,
      `See the print for yourself in the [$50 product](/shop/new-notes/50-australian-prop-money-for-sale/) or the [Film & TV props range](/shop/film-and-tv-props/), or [contact the studio](/contact/) with your lighting setup and we will help you pick.`
    ),
    faqs: [
      {
        q: 'How can I tell if prop money is high quality?',
        a: 'Check print detail at arm\'s length and up close, matte paper, double-sided finish and how the notes handle after repeated takes. Browse the [New Notes range](/shop/new-notes/) to see the PROPPS print.',
      },
      {
        q: 'What paper is best for prop money on camera?',
        a: 'A matte, non-reflective stock avoids hot spots under studio lights. PROPPS notes are printed on 120gsm archival paper. See [lighting prop money without glare](/blog/lighting-prop-money-for-camera-avoiding-glare/) for lighting tips.',
      },
      {
        q: 'Does high quality prop money need to look exactly like real money?',
        a: 'No. Quality means reading correctly on camera while staying clearly marked and different in the hand. Our notes carry permanent specimen markings and are printed on paper, not polymer. Read the [compliance page](/compliance/) for the standard.',
      },
      {
        q: 'Can I get a sample before ordering prop money?',
        a: 'Ask the supplier for close-up photos of an actual note, front and back, and a hand-held video. [Contact the studio](/contact/) with your lighting setup if you want advice before you order.',
      },
      {
        q: 'Is expensive prop money always better?',
        a: 'Not always. Price should cover paper weight, print alignment, colour consistency, counting, paperwork and delivery. Our guide to [cheap prop money](/blog/cheap-prop-money-what-you-are-really-paying-for/) explains what you are paying for.',
      },
    ],
  },
];
