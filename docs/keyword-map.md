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

---

## 🔍 Audit & Expansion — 2026-09-24 (30,003-row keyword bank + live Lighthouse audit)

**New source:** `australian-prop-money_keywords bank.csv` (30,003 rows, generic "Australian money"
seed expansion — most rows are real-currency/economy/numismatic noise unrelated to the niche).
Filtered by: keyword semantically matches prop/fake/play/toy/replica/novelty money or film/movie
props, Volume ≥ 20, and (where scored) Intent contains Commercial or Transactional. ~29,600 of the
30,003 rows were dropped as niche-irrelevant (real banknote trivia, economy/GDP stats, unclaimed-
money registers, band names, coin collecting, counterfeit-detection). This confirms and extends —
does not replace — the Tier 1/Tier 2 sets above.

### New Tier 1 candidates found (Vol ≥ 50, KD ≤ 40, genuinely on-niche)
| Keyword | Intent | Volume | KD | Best Use |
|---|---|---|---|---|
| imitation money | Informational, Transactional | 1300 | 25 | Homepage/New Notes secondary — strong synonym |
| fake australian money | Informational | 720 | 29 | Homepage secondary, blog |
| play money | Commercial | 720 | 19 | New: Event & Party Props / Photography Props secondary |
| australian play money | Commercial | 320 | **11** | Event & Party Props — very low KD |
| au prop money | Commercial | 260 | 28 | (already in Tier 1 above) |
| australian toy money | Commercial | 170 | **10** | Event & Party Props secondary |
| toy money | Transactional | 170 | 19 | Event & Party Props secondary |
| toy money australia | Commercial | 170 | **9** | Event & Party Props secondary |
| fake australian dollars | Informational | 140 | 23 | Blog/homepage LSI |
| australia play money | Commercial | 140 | **10** | Event & Party Props secondary |
| fake australian money prop | Commercial | 140 | 25 | (already in Tier 1 above) |
| fake note australia | Informational | 110 | 24 | Blog LSI |
| buy film props | Transactional | 90 | 28 | **Film & TV Props category — new primary candidate** |
| film props for sale | Transactional | 90 | 31 | Film & TV Props secondary |
| childrens play money | Commercial | 90 | **10** | Event & Party Props secondary |
| play money australia | Commercial | 90 | **9** | Event & Party Props — lowest KD in the whole set |
| prop money au | Commercial | 70 | 25 | (already in Tier 1 above) |
| aus prop money | Informational, Commercial | 70 | 20 | (already in Tier 1 above) |

**⚠️ Deliberately excluded from this batch too:** `fake money` (Vol 1600, KD 38) and `fake note
detector` / `fake money detector` / `fake dollar bill detector` (all informational, all in the
counterfeit-detection-tool cluster) — same brand-safety reasoning as the original Excluded
Clusters section: ambiguous-to-illegal search intent, wrong audience, or literally a different
product (detection machines). `money fake money` / `fake fake money` are keyword-tool phrase-order
artifacts (not real search phrasing) — dropped as junk, not used even as LSI.

**Printable/DIY cluster found and excluded from commercial targeting:** `printable play money
australia`, `play money printable australia`, `australian money printables play money`, `play
money print` — these are "print my own at home for free" intent, the opposite of a sale. Only
worth touching in a blog post that explicitly pitches professional cinema-grade props as the
upgrade from home-printed paper.

### Tier 2 additions — Untapped Exact-Match (Vol ~20, zero competition, same treatment as existing Tier 2)
buy prop money · buy prop money near me · cheap prop money · prop money for sale ·
prop money near me · real prop money for sale · realistic prop money for sale ·
where to buy prop money · where can i buy prop money · fake cash prop · fake party money ·
fake money stacks · money stack australia · australian money bundles · prop dollar bills ·
buy fake money stacks · money bundle amounts australia

### Live SEO Audit — Google PageSpeed Insights / Lighthouse (mobile, homepage, 2026-09-23)
Real automated audit run against `https://proppsptyltd.com.au/` (not estimated):

| Category | Score |
|---|---|
| **SEO** | **100 / 100** ✅ (target of 90+ already met and exceeded) |
| Best Practices | 100 / 100 ✅ |
| Accessibility | 90 / 100 🟡 (at threshold, 3 issues found) |
| Performance | 84 / 100 🟡 |
| Agentic Browsing (AI crawler readiness) | 3/3 ✅ |

**Lighthouse SEO passed all 10 automated checks** (indexable, meta description present, valid
`hreflang`/canonical, crawlable links, structured data present, etc.) — the only "manually check"
item is a routine reminder to validate structured data in Google's Rich Results Test, which is
good practice but not a failure.

**Accessibility issues found (fix before/alongside the keyword rollout, they affect UX + can
suppress ranking via Core Web Vitals/UX signals):**
1. Insufficient colour contrast on some text (dark theme gold-on-charcoal in places).
2. Touch targets too small/tightly spaced on mobile (likely the new 8-item desktop nav bleeding
   into a breakpoint, or category pill buttons).
3. Heading elements not in sequentially-descending order — likely an H3 (e.g. "RELATED PROP
   SPECIMENS") appearing without an intervening H2 on some pages.

**Performance (84/100):** render-blocking requests (~1.85s possible savings, likely the Google
Fonts `<link rel="stylesheet">` noted as a known follow-up in `layout.tsx`) and ~71 KiB of
image-delivery savings (next/image is already used sitewide, so this is likely a couple of
oversized source photos, not a structural issue).

---

## Refined Per-Page Keyword Targets (Focus + 5 Secondary) — for the next build pass

| Page | Focus Keyword (Vol/KD) | Secondary Keywords (5) |
|---|---|---|
| Homepage `/` | prop money australia (480/30) | australian prop money (720/24), prop money (480/23), au props (50/6), imitation money (1300/25), fake australian money (720/29) |
| Shop hub `/shop/` | prop money australia (480/30) | props money (50/11), prop bundles of money australia, australia prop money (110/18), buy prop money australia, aus prop money (70/20) |
| New Notes `/shop/new-notes/` | buy prop money australia | fake australian money prop (140/25), realistic prop money australia, prop money au (70/25), imitation money (1300/25), au prop money (260/28) |
| Film & TV Props `/shop/film-and-tv-props/` | buy film props (90/28) | film props for sale (90/31), movie prop money australia, cinema prop currency australia, prop cash for film production, movie money for sale australia |
| Money Stacks `/shop/money-stacks/` | prop bundles of money australia | money stack australia, fake money stacks, fake australian money prop (140/25), bulk prop money australia, buy fake money stacks |
| Photography Props `/shop/photography-props/` | prop money for photoshoot | fake money for photography australia, imitation money (1300/25), play money (720/19), prop dollar bills, fake australian money (720/29) |
| Event & Party Props `/shop/event-and-party-props/` | play money australia (90/9) | australian play money (320/11), toy money australia (170/9), childrens play money (90/10), novelty prop money australia, fake party money |
| Custom & Branded Props `/shop/custom-and-branded-props/` | custom prop money printing australia | branded prop currency australia, prop dollar bills, prop money for sale, order prop money, prop money online |
| Wholesale `/wholesale/` | wholesale prop money australia | bulk prop money australia, prop money supplier, prop money price, order prop money, prop cash for film production |
| Compliance `/compliance/` | prop money australia laws | crimes currency act 1981 section 22, RBA reproduction currency guidelines, is it legal to buy prop money, is it illegal to buy prop money, fake australian money prop |

### Blog keyword intent + linking plan (existing 3 posts + 2 new candidates)
| Post | Primary Intent Keyword | Outbound Internal Links | Inbound (link here from) |
|---|---|---|---|
| Crimes (Currency) Act 1981 & RBA guidelines | prop money australia laws | → `/compliance/`, → New Notes products ($100/$50) | Homepage footer, Compliance page, Money Stacks post |
| Lighting prop money for camera | film props for sale | → Film & TV Props category, → $100/$50 products | Film & TV Props category page |
| Art department weathering guide | prop cash for film production | → Film & TV Props, → Money Stacks | Money Stacks category page |
| **New:** "Play Money vs Prop Money — Which One Do You Need for Your Shoot/Party?" | play money australia (90/9) | → Event & Party Props, → Photography Props | Event & Party Props category page |
| **New:** "Where to Buy Prop Money in Australia (Legally)" | buy prop money australia | → Shop hub, → Compliance | Homepage, Blog index |

This satisfies the "5+ secondary keywords per page" and "intentional blog keywords with in/outbound
linking" requirements. **This is a preview only — nothing above has been written into `site.js`,
page metadata, or new blog content yet.** Next step on approval: apply these focus/secondary
keywords to title tags, H1s, meta descriptions, and body copy across the 10 mapped pages, write the
2 new blog posts, and fix the 3 Lighthouse accessibility issues.
