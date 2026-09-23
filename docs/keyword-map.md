# Keyword Map & Entity Strategy — PROPPS PTY LTD

Source data: `prop-money-australia_all-keywords_au_2026-09-23.csv` (395 keywords, AU market),
supplied 2026-09-23. Filtered and organized below by commercial/transactional intent and
keyword difficulty (KD), per instruction to prioritize low-KD + Commercial/Transactional terms,
plus supplemental keywords added where the source file had gaps.

**Methodology note on the source file:** ~250 of the 395 rows are informational "how to spot/
detect/tell counterfeit money" and real-banknote-identification queries (people checking if
currency in their hand is genuine, or looking up serial-number values). Those are excluded
wholesale — see "Excluded Clusters" at the bottom for why. What's below is only the
commercially-relevant subset, reorganized by page.

---

## Primary Site-Wide Keyword
- **prop money australia** (Commercial · Vol 480 · KD 30)

## Tier 1 — Low-KD Quick Wins (target first, easiest to rank)
Sorted by KD ascending. These should anchor the homepage, `/shop`, and top-of-page H1/meta copy.

| Keyword | Intent | Volume | KD |
|---|---|---|---|
| au props | Commercial | 50 | **6** |
| props money | Informational, Commercial | 50 | **11** |
| australia prop money | Commercial | 110 | 18 |
| aus prop money | Informational, Commercial | 70 | 20 |
| prop money | Commercial | 480 | 23 |
| prop australian money | Informational, Commercial | 140 | 23 |
| fake australian money prop | Commercial | 140 | 25 |
| prop money au | Commercial | 70 | 25 |
| australian prop money | Commercial | 720 | 24 |
| au prop money | Commercial | 260 | 28 |
| prop money australia | Commercial | 480 | 30 |

## Tier 2 — Untapped Exact-Match (0–20 recorded volume, but exact buyer intent — no competition)
The source tool couldn't find volume/KD data for these, which in practice means near-zero
competition. Exact-match commercial phrases like this convert disproportionately well relative
to their tiny search volume. Use them as long-tail H2s, image alt text, and FAQ answers rather
than the primary H1.

- buy prop money australia → `/shop/new-notes/`
- movie prop money australia
- prop movie money australia
- realistic prop money australia
- money prop australia
- fake prop money australia
- fake money props australia
- prop bundles of money australia → matches the bundle-tier system directly, use on product pages
- prop money australia laws → `/compliance/` (this is a real, valuable, on-brand informational term)

---

## Page-by-Page Assignments

### Homepage (`/`)
Primary: `prop money australia` · Secondary: `prop money`, `australian prop money`, `au props`, `buy prop money australia`

### Shop hub (`/shop/`)
Primary: `prop money australia` · Secondary: `props money`, `prop bundles of money australia`, `australia prop money`

### New Notes category (`/shop/new-notes/`)
Primary: `buy prop money australia` · Secondary: `fake australian money prop`, `realistic prop money australia`

### $100 product (`/shop/new-notes/100-australian-prop-money-for-sale/`)
- 100 dollar note australia (Informational, Commercial · Vol 1600 · KD 18)
- australian 100 dollar note (Informational, Commercial · Vol 1600 · KD 17)
- $100 note (Informational, Commercial · Vol 1300 · KD 22)
- 100 dollar note (Informational, Commercial · Vol 880 · KD 24)
- australian $100 note (Informational, Commercial · Vol 720 · KD 18)
- 100 australian dollar note (Informational, Commercial · Vol 480 · KD 17)
- hundred dollar note (Informational, Commercial · Vol 320 · KD 27)
- 100 dollar notes (Informational, Commercial · Vol 170 · KD 17)

### $50 product (`/shop/new-notes/50-australian-prop-money-for-sale/`)
- 50 dollar note australia (Informational, Commercial · Vol 1600 · KD 29)
- $50 note (Informational, Transactional · Vol 590 · KD 24)
- 50 note australia (Informational, Commercial · Vol 720 · KD 20)
- australian 50 dollar bill (Informational, Transactional · Vol 480 · KD 25)
- $50 australian note (Informational, Transactional · Vol 320 · KD 20)
- fake fifty dollar bill (Informational, Commercial · Vol 390 · KD 28)

### $20 / $10 / $5 products
The source file has almost no denomination-specific volume for $5/$10/$20 (AU search demand
skews heavily to $50/$100 — likely because those are the denominations most associated with
"prop money" and heist/production imagery). **Recommend supplementing with a fresh
keyword-tool pull scoped to "$20 note australia", "$10 note australia", "$5 note australia" +
"prop"/"fake"/"replica" modifiers** before finalizing copy for those three product pages. Until
then, target the Tier 1 generic terms (`prop money`, `props money`) plus on-page denomination
mentions.

### Money Stacks category (`/shop/money-stacks/`)
Primary: `prop bundles of money australia` · Secondary: `fake australian money prop`

### Film & TV Props category (`/shop/film-and-tv-props/`)
Primary: `movie prop money australia` · Secondary (supplemental, not in source file):
- prop cash for film production
- cinema prop currency australia
- movie money for sale australia

### Photography Props category (`/shop/photography-props/`)
Supplemental (not in source file — this category had zero source-file coverage):
- prop money for photoshoot
- fake money for photography australia

### Event & Party Props category (`/shop/event-and-party-props/`)
Supplemental (not in source file):
- fake money for proposal australia
- money gun prop cash
- novelty prop money australia
- prop cash for party australia

### Custom & Branded Props category (`/shop/custom-and-branded-props/`)
Supplemental (not in source file):
- custom prop money printing australia
- branded prop currency australia

### Wholesale (`/wholesale/`)
- prop money wholesale australia (supplemental)
- bulk prop money australia (supplemental)

### Compliance (`/compliance/`)
- prop money australia laws (Vol 20, no KD — real, relevant, on-brand)
- crimes currency act 1981 section 22 (existing, retained from prior strategy)
- RBA reproduction currency guidelines (existing, retained)

### Blog / topical authority (feeds internal links back to product pages, does not compete
for transactional intent directly)
- australian banknotes (Informational · Vol 1000 · KD 28)
- australian currency notes (Informational · Vol 880 · KD 30)
- australian dollar notes (Informational · Vol 480 · KD 28)
- old australian money notes (Informational, Commercial · Vol 320 · KD 21) → good angle for a
  "vintage/period-drama props" post, ties to a future Vintage category if reintroduced

---

## Excluded Clusters (deliberately not targeted — do not optimize any page for these)

1. **"How to spot/detect/tell/identify counterfeit money" cluster (~60 keywords, e.g. "how to
   detect counterfeit money", "how to spot a fake bill", "how to tell if money is fake").**
   Excluded even where volume is decent (up to 170/mo) and several are tagged Commercial by the
   tool. Search intent here is people checking whether *real* currency in their possession is
   genuine (consumers, retail staff, banks) — not people wanting to buy props. Ranking for these
   would draw the wrong audience and, more importantly, puts a prop-currency seller's content
   right next to counterfeit-detection-evasion search intent, which is a real brand-safety and
   legal-optics problem for this business specifically.
2. **"purchase counterfeit money" (Transactional · Vol 50 · KD 39).** Explicitly excluded — this
   reflects intent to buy currency to actually spend fraudulently, which is illegal. Do not target
   under any circumstances.
3. **Serial-number / value-checker / banknote-counter cluster** ("note serial checker", "bank note
   value checker", "banknote counter", "rare australian $50 notes serial numbers value",
   "collectable australian notes"). Wrong audience entirely — numismatic collectors and people
   authenticating currency they hold, not film/theatre buyers. "banknote counter" and "fake money
   detector" specifically refer to counting/detection *machines*, a different product category.
4. **Generic real-currency trivia** ("who is on the $50 note", "what is australian money made
   of", "australian legal tender"). Low commercial value for this business even where volume is
   high; only worth a passing mention inside a blog post already targeting a real target keyword,
   never a dedicated page.

## Entity Optimization
- KnowsAbout schema: Australian Prop Money, Cinema Reproduction Currency, Film Production Props,
  Theatrical Stage Currency.
- Local Geographic Anchor: Eltham, VIC 3093, Melbourne, Australia.
