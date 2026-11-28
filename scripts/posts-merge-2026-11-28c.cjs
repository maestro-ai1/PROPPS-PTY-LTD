// Merges batch C with its extra sections (1,500-word rule) and trims excerpts to 158 characters.
const base = require('./posts-batch-2026-11-28c.cjs');
const X = {};
X['fake-money-for-sale-in-australia-realistic-fake-money-notes-for-film-photos-and-parties'] = `## Fake money questions buyers ask first
Most buyers ask the same handful of things before they order. Will it look real on camera? Yes, when you choose realistic prop notes in the right denomination and light them well. Can I buy just one stack? Yes, a starter stack is the smallest order unit, though the minimum order is $150 AUD. Can I get it by Friday? Order early in the week and choose Express Post. Can I pay by PayID? Yes, along with bank transfer and cryptocurrency, which receives a 10% discount. Will I get an invoice? Every order includes a tax invoice. If your question is not on the list, the studio answers email enquiries quickly.

## Fake money for creators who film every week
Some customers order fake money every month because their content needs it: finance-style thumbnails, comedy sketches, giveaway videos and product reviews. If that is you, buy a bulk stack once and store it flat. Keep the notes in a labelled box, count them after each shoot and reorder only when the stack is thin. Buying in volume cuts the cost per note, and a consistent look across videos keeps your channel looking professional.

## Fake money for businesses and agencies
Agencies and brands order fake money for campaigns, trade stands, giveaways and shoots. A branded or custom run suits a campaign that needs a specific design, and standard stacks suit one-off shoots. Procurement teams get a tax invoice and clear terms, and larger runs qualify for wholesale pricing. Send the brief to the studio with the quantity and the date, and we will confirm the options.`;
X['fake-australian-money-buy-realistic-fake-australian-notes-for-sets-shoots-and-parties'] = `## A buyer's checklist for fake Australian money
Before you order, write down five answers. Who will handle the notes: actors, guests or only the camera? How close will the camera be? How many denominations does the scene need? How many resets or shoot days are planned? When must the parcel arrive? With those answers, the order almost writes itself. A camera-only shot needs a small set and careful lighting. A scene with actors needs spares because notes crease with handling. A party needs a float for every guest.

## How actors and crews handle fake Australian money
Notes survive better when the crew handles them with care. Give actors clean hands, keep stacks in a flat box between takes and use a strap for bundles so edges stay tidy. If a note gets creased, set it aside for background use and replace it in close-ups. A sensible production keeps two tiers: hero notes for the lens and working notes for everything else. This habit extends the life of every order and keeps the picture sharp.

## Lighting fake Australian money for a photo
Light decides whether notes look real. Use a large soft source from the side, add a white card opposite to fill shadows and avoid direct flash, which flattens colour and creates glare on the finish. Shoot slightly above the notes at a gentle angle so the colours and edges show. Keep the background clean and plain so the notes stand out. A few test frames before the real shoot save a lot of editing.

## Wide shots, close-ups and the money in between
Wide shots only need the colour and shape of the notes to read as cash, so stacks of lower detail work well and keep the cost down. Medium shots need correct proportions and tidy edges. Close-ups need the best notes you have, held steady and lit properly. Plan the order by shot type rather than by scene to avoid paying for detail the camera will never see.

## Building a prop department stock of fake Australian notes
Production designers who work on several jobs a year often keep a small standing stock: a few stacks of each denomination, some strapped bundles and a bag of aged notes. A reliable local supplier keeps this simple, because a reorder takes a few clicks and arrives by Express Post. Keep a stock list with counts and dates, and top it up after each job.

## Using fake Australian money safely at events
At parties and events, treat the notes like any other prop. Brief the crowd, keep a count, collect notes at the end and store them flat. Tell venue staff what is being used so nobody is surprised. For fast-moving crowd moments such as a cash cannon finale, use notes made for parties and keep the hero notes for the photo corner. Our [event and party prop cash pack](/shop/event-and-party-props/event-and-party-prop-cash-pack/) is built for that.

## Why local supply beats overseas for fake Australian notes
Local supply means Australian colours and proportions are right, delivery takes days, not weeks, invoices are in Australian dollars and questions get answered in your time zone. Overseas sellers can be cheaper per note, but customs, delays and mismatched designs cost more than they save when a shoot date is fixed. Our guide to [local vs overseas prop money suppliers](/blog/local-vs-overseas-prop-money-suppliers-compared/) goes through the trade-offs.`;
module.exports = base.map((p) => {
  const add = X[p.slug];
  const marker = '## Where to go next';
  const at = p.content.lastIndexOf(marker);
  const content = p.content.slice(0, at) + add + '\n\n' + p.content.slice(at);
  let excerpt = p.excerpt;
  if (excerpt.length > 158) excerpt = excerpt.slice(0, 155).replace(/\s+\S*$/, '') + '.';
  return { ...p, content, excerpt };
});
