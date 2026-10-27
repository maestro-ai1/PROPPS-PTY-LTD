# Secondary-keyword interlinking and keyword tags â€” 2026-10-27

Source of truth: the keyword bank (`src/config/keyword-map.js`, `docs/keyword-ledger-2026-10-26.csv`, the 2026-10-12 Semrush export and the Google AU autocomplete bank).

## 1. Secondary keywords link to the page that owns their primary
- Code: `src/config/keyword-links.js`. 86 secondaries (13 pages, 10 products), all derived from `keyword-map.js`.
- **Related searches block** (`src/components/RelatedBlocks.tsx`) on every blog post, category and product page. Each secondary is assigned to two relevant host pages, never its own target, at most one anchor per target per host and at most 6 per host. Relevance: same product, same category, compliance and wholesale topics.
- **In-body links**: the first natural mention of a secondary in a plain blog paragraph becomes a link (max 3 per post, one per target, skipped if the post already links that target). Never inside headings, lists, tables, bold or existing links.
- Audit (local crawl, 88 pages): every one of the 86 secondaries is an anchor to its target on at least 2 pages (0 below).

## 2. Leftover keywords become indexable tags
- Code: `src/config/tags.js`, route `/tags/` (hub) and `/tags/<slug>/`. 17 tags, each a keyword in the bank that is not a primary or secondary and passes the stock, brand-safety and KD checks.
- Each tag page: own title, description, H1, two paragraphs of unique copy, matching products, ranges and 5 to 6 guides, related tags, and a button to the page that owns the closest primary.
- **Thin-page guard**: a tag needs at least 3 matches and one guide, otherwise it is not built, linked or put in the sitemap.
- Tag chips ("Topics") appear on posts, products and categories, balanced across tags, plus the footer link to `/tags/` and the sitemap.
- Not tags (each in one place in the ledger): counterfeit and detection terms, DIY printing, prank use, no-stock lines (money gun, USD, hire), KD over 28.

## 3. Semrush check, refreshed (2026-10-27)
Keyword Overview AU, with **Update metrics** run on all keywords (without it the rows show stale or empty data). Final figures:

| Tag | Volume | KD |
|---|---|---|
| paper notes money | 40 | 7 |
| fake money prop money | 30 | 19 |
| $100 prop money | 20 | 21 |
| fake money props | 20 | 17 |
| fake australian money prop for sale | 20 | 25 |
| best australian prop money | 20 | 12 |
| fake money for kids | 20 | 21 |
| most realistic prop money | 20 | 25 |
| money props for movies | 10 | 20 |
| buy realistic prop money, fake money for wedding | 0 | 15, 20 |
| aged movie prop money, movie grade prop money, australian prop money for movies, movie prop money bulk, close up realistic prop money, australian play money for kids | n/a (under 10) | 11, 23, 20, 23, 27, 26 |

**Dropped (KD over 28), moved to hold in the ledger:** $20 bill prop money (30), $50 bill prop money (30), australian dollar prop money (30), fake money for birthday party (29), fake money for photos (30).
An earlier un-refreshed read showed these as n/a, which was wrong; KD moves a point or two between refreshes, so re-check the borderline ones (most realistic 25, close up realistic 27, play money for kids 26) before building on them.

Ledger: 204 rows (`node scripts/build-keyword-ledger.cjs`). Local crawl: 83 pages, 0 problems, 0 orphans, all 86 secondaries linked from at least 2 pages.

## Next
- Request indexing for /tags/ and the first few tag pages once the GSC quota is back.
