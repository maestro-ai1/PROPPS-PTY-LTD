# Page ↔ Keyword Mapping Audit — PROPPS PTY LTD (AU)
Date: 2026-10-12 · Repo: `main` after `git pull` (42 files updated) · Internal only, keep in `docs/`.

**Intent codes:** T = Transactional · C = Commercial · I = Informational · N = Navigational
**Volume/KD source:** only figures that exist in the repo files: `docs/keyword-map.md` (Semrush CSV 2026-09-23/24)
and `keywords australia prop money 2.txt` (Semrush export, competitor SERP rows). **"n/a" = no volume in either
file** — never estimated. Where the two files disagree both are shown as `a–b`.

---
## 1. Presently used keywords (live in `src/config/site.js`)

### 1a. `SITE.keywords` (site-wide meta keywords / JSON-LD / llms.txt)
| Keyword | Intent | Vol | KD | Status |
|---|---|---|---|---|
| australian prop money | C | 720 | 24–30 | ✅ data |
| prop money australia | C | 480–590 | 27–30 | ✅ data |
| au prop money | C | 260–390 | 26–28 | ✅ data |
| prop australian money | C/I | 140 | 23 | ✅ data |
| fake australian money prop | C | 140 | 25 | ✅ data |
| realistic fake money australia | C/I | 170 | 23 | ✅ data |
| fake note australia | I | 110 | 24 | ✅ data |
| aus prop money | C | 70–90 | 16–20 | ✅ data |
| prop money au | C | 70 | 24–25 | ✅ data |
| props money | C/I | 50 | 11–19 | ✅ data |
| australian fake money | I | n/a | n/a | ⚠️ not in bank |
| fake $100 australia | I | n/a | n/a | ⚠️ not in bank |
| fake australian dollar | I | n/a | n/a | ⚠️ not in bank (bank has "fake australian dollars" 140/23) |
| prop money aud / aud prop money | C | n/a | n/a | ⚠️ not in bank (duplicate variants) |
| prop aus money | C | n/a | n/a | ⚠️ not in bank |
| $100 prop money | T | n/a | n/a | ⚠️ not in bank |
| 1 1 prop money | C | n/a | n/a | ⚠️ not in bank |
| australia fake money | I | n/a | n/a | ⚠️ not in bank |
| australian prop money for sale | T | n/a | n/a | ⚠️ not in bank |
| australian prop money realistic | C | n/a | n/a | ⚠️ not in bank |

### 1b. Page-by-page map (core site)
| URL | Title tag (live) | Focus keyword | Int | Vol | KD | Secondary keywords | Verdict |
|---|---|---|---|---|---|---|---|
| `/` | Prop Money Australia \| Cinema-Grade Currency – PROPPS PTY LTD | prop money australia | C | 480–590 | 27–30 | australian prop money (C, 720, 24–30), prop money (C, 480, 23), au props (C, 50, 6), imitation money (I/T, 1300, 25), fake australian money (I, 720, 29) | ✅ OK. Brand "PROPPS PTY LTD" (N) is only a title suffix |
| `/shop/` | Prop Money Australia \| Shop Cinema Currency | prop money australia | C | 480–590 | 27–30 | props money (C, 50, 11), australia prop money (C, 110, 18), aus prop money (C, 70–90, 16–20) | 🔴 **Same primary as `/`** — cannibalisation |
| `/shop/new-notes/` | Buy Prop Money Australia \| New Notes | buy prop money australia | T | ~20 | n/a | fake australian money prop (C,140,25), realistic prop money australia, prop money au (C,70,24), imitation money (1300/25), au prop money (C,260,28) | ✅ T-intent, but primary has ~20 vol; move "australian prop money" cluster here |
| `/shop/film-and-tv-props/` | Buy Film Props Australia \| Film & TV Props | buy film props | T | 90 | 28 | film props for sale (T, 90, 31), movie prop money australia, cinema prop currency australia | ✅ |
| `/shop/money-stacks/` | Prop Bundles of Money Australia \| Money Stacks | prop bundles of money australia | C | n/a | n/a | money stack australia (~20), fake money stacks, bulk prop money australia | ⚠️ primary has no volume data |
| `/shop/photography-props/` | Prop Money for Photoshoot Australia | prop money for photoshoot | C | n/a | n/a | fake money for photography australia, play money (C,720,19), prop dollar bills | ⚠️ no volume data (supplemental term) |
| `/shop/event-and-party-props/` | Play Money Australia \| Event & Party Props | play money australia | C | 90 | **9** | australian play money (C,320,11), toy money australia (C,170,9), childrens play money (C,90,10), australia play money (C,140,10), toy money (T,170,19) | ✅ best KD on site |
| `/shop/custom-and-branded-props/` | Custom Prop Money Printing Australia | custom prop money printing australia | T | n/a | n/a | branded prop currency australia, prop money online | ⚠️ no volume data |
| `/wholesale/` | Wholesale Prop Money Australia \| Bulk Pricing | wholesale prop money australia | T | n/a | n/a | bulk prop money australia, prop money supplier | ⚠️ no volume data |
| `/compliance/` | Prop Money Australia Laws \| Compliance Guide | prop money australia laws | I | 20 | n/a | crimes currency act 1981 section 22 (I), is it legal to buy prop money (I/Q) | ✅ on-brand |
| `/about/`, `/faq/`, `/blog/` | brand / non-keyword titles | — | N | — | — | — | OK (no keyword target) |

### 1c. Product pages — 🔴 biggest gap
Product `<title>` is the bare product name (e.g. "100 Australian Prop Money For Sale") — see
`src/app/shop/[category]/[slug]/page.tsx:25`. None of the mapped denomination keywords reach the title or meta.

| Product URL | Current title | Best mapped keyword available | Int | Vol | KD |
|---|---|---|---|---|---|
| `/shop/new-notes/100-australian-prop-money-for-sale/` | 100 Australian Prop Money For Sale | 100 dollar note australia / australian 100 dollar note | I/C | 1600 | 17–18 |
| `/shop/new-notes/50-australian-prop-money-for-sale/` | 50 Australian Prop Money For Sale | 50 dollar note australia | I/C | 1600 | 29 |
| same | | 50 note australia | I/C | 720 | 20 |
| `/20-…`, `/10-…`, `/5-…` | 20 / 10 / 5 Australian Prop Money For Sale | n/a — no denomination data in bank | — | n/a | n/a |
| `film-and-tv-prop-currency-pack`, `bulk-money-stack-pack`, `photography-prop-currency-set`, `event-and-party-prop-cash-pack`, `custom-and-branded-prop-currency` | product name only | inherit category secondary set | — | — | — |

Product FAQs (5 per product) are already keyword-built; titles/meta are what's missing.

---
## 2. Blog posts (44 in `POSTS`) — primary keyword → URL
| Post slug | Primary keyword | Int | Vol | KD |
|---|---|---|---|---|
| crimes-currency-act-1981-rba-… | prop money australia laws | I | 20 | n/a |
| prop-money-compliance-checklist-… | prop money australia laws | I | 20 | n/a | 🔴 **duplicate of above** |
| lighting-prop-money-for-camera-… | lighting prop money for camera | I | n/a | n/a |
| art-department-guide-weathering-prop-cash | prop cash for film production | C | n/a | n/a |
| where-to-buy-prop-money-in-australia-legally | buy prop money australia | T | ~20 | n/a |
| play-money-vs-prop-money-… | play money australia | C | 90 | 9 | 🔴 same primary as `/shop/event-and-party-props/` |
| how-much-prop-money-do-you-need-… | prop bundles of money australia | C | n/a | n/a | 🔴 same as money-stacks category |
| prop-money-for-photography-… | prop money for photoshoot | C | n/a | n/a | 🔴 same as photography category |
| novelty-money-for-parties-… | novelty prop money australia | C | n/a | n/a |
| custom-and-branded-prop-currency-guide-… | custom prop money printing australia | T | n/a | n/a | 🔴 same as custom category |
| wholesale-prop-money-for-production-companies-… | wholesale prop money australia | T | n/a | n/a | 🔴 same as `/wholesale/` |
| fake-money-vs-prop-money-… | imitation money | I | 1300 | 25 |
| best-australian-banknote-denominations-… | australian banknotes | I | n/a | n/a |
| brief-history-of-australian-currency-notes-… | australian currency notes | I | n/a | n/a |
| how-directors-use-prop-money-… | movie money for sale australia | C | n/a | n/a |
| buying-film-props-in-australia-… | buy film props | T | 90 | 28 | 🔴 same as film category |
| film-props-for-sale-what-to-look-for-… | film props for sale | T | 90 | 31 |
| prop-cash-for-heist-and-bank-scenes-… | money stack australia | C | ~20 | n/a |
| prop-money-for-content-creators-… | fake australian money | I | 720 | 29 |
| cryptocurrency-payments-for-studios-… | crypto discount prop money | I | n/a | n/a |
| toy-money-and-play-money-for-kids-… | toy money australia | C | 170 | 9 |
| shipping-and-dispatch-… | prop money near me | T | ~20 | n/a |
| local-vs-overseas-prop-money-suppliers-compared | prop money for sale near me | C | n/a | n/a | 🔴 **slug defined twice** (`site.js:711` and `:987`) |
| 19 newer posts (evolution-of-australian-prop-money-cinema … prop-money-aud-for-independent-filmmakers) | one SITE.keywords variant each: realistic fake money australia (170/23, ×2 posts), prop money au (70/24), aus prop money (70–90/16–20), props money (50/11–19), fake note australia (110/24), prop australian money (140/23), au prop money (260–390/26–28) and others | I/C | see 1a | |

---
## 3. Findings (technical SEO only)
1. **Cannibalisation (high):** `/` and `/shop/` share "prop money australia"; 6 posts duplicate their category's primary
   (play money australia, prop bundles of money australia, prop money for photoshoot, custom prop money printing
   australia, wholesale prop money australia, buy film props). Blog posts should target the informational/question
   variant instead, and link to the category.
2. **Duplicate post slug** `local-vs-overseas-prop-money-suppliers-compared` ×2 in `POSTS` — one will be hidden
   or generate duplicate URLs/sitemap entries. Remove one.
3. **Duplicate content cluster:** "prop money australia laws" is the primary of two posts and `/compliance/`.
4. **Product titles carry no keywords** — add a mapped title formula (e.g. `100 Dollar Note Australia | Prop Money for Sale`).
   The biggest-volume mapped terms (1,600/mo, KD 17–29) currently map to nothing in the title.
5. **8–9 `SITE.keywords` entries have no data in the bank** (listed in 1a); several are near-duplicates
   (prop money aud / aud prop money / prop aus money / australia fake money). Keep ≤ 10, only those with data.
6. **Data conflict:** "prop money australia" 480/30 vs 590/27, "au prop money" 260/28 vs 390/26 — two exports
   from different dates. Refresh from one Semrush pull before locking.
7. **Intent mismatch:** "fake …" informational terms (fake australian money 720, imitation money 1300) sit in the homepage
   secondary set. Fine as query-matching LSI, but per CLAUDE.md Section 22 rule, never use them as product framing
   or H1/product titles.
8. **Missing keyword data (Semrush request list):** $5 / $10 / $20 note australia, prop bundles of money australia,
   prop money for photoshoot, custom prop money printing australia, wholesale prop money australia, movie money
   for sale australia, australian banknotes, australian currency notes.

## 4. Quick-win order
1. De-duplicate slug + 6 cannibalising posts retarget. 2. Product title/meta formula using 100/50 dollar note
terms. 3. Homepage vs `/shop/` primary split (shop → "buy prop money australia"/"props money"). 4. Prune
`SITE.keywords` to data-backed terms. 5. Pull the missing-data list above.
