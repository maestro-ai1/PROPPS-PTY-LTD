# Secondary-keyword interlinking and keyword tags — 2026-10-27

Source of truth: the keyword bank (`src/config/keyword-map.js`, `docs/keyword-ledger-2026-10-26.csv`, the 2026-10-12 Semrush export and the Google AU autocomplete bank).

## 1. Secondary keywords link to the page that owns their primary
- Code: `src/config/keyword-links.js`. 86 secondaries (13 pages, 10 products), all derived from `keyword-map.js`.
- **Related searches block** (`src/components/RelatedBlocks.tsx`) on every blog post, category and product page. Each secondary is assigned to two relevant host pages, never its own target, at most one anchor per target per host and at most 6 per host. Relevance: same product, same category, compliance and wholesale topics.
- **In-body links**: the first natural mention of a secondary in a plain blog paragraph becomes a link (max 3 per post, one per target, skipped if the post already links that target). Never inside headings, lists, tables, bold or existing links.
- Audit (local crawl, 88 pages): every one of the 86 secondaries is an anchor to its target on at least 2 pages (0 below).

## 2. Leftover keywords become indexable tags
- Code: `src/config/tags.js`, route `/tags/` (hub) and `/tags/<slug>/`. 22 tags, each a keyword in the bank that is not a primary or secondary and passes the stock and brand-safety checks.
- Each tag page: own title, description, H1, two paragraphs of unique copy, matching products, ranges and 5 to 6 guides, related tags, and a button to the page that owns the closest primary.
- **Thin-page guard**: a tag needs at least 3 matches and one guide, otherwise it is not built, linked or put in the sitemap (0 dropped).
- Tag chips ("Topics") appear on posts, products and categories, balanced so every tag gets 5 to 9 inbound chips, plus the footer link to `/tags/` and the sitemap.
- Not tags (rule: nothing omitted, each in one place): counterfeit and detection terms, DIY printing, prank use, no-stock lines (money gun, USD, hire), KD over 28. They stay in the ledger as excluded or hold.

| Tag | Volume / KD | Target |
|---|---|---|
| $100 prop money | 20 / 26 | $100 product |
| fake money props | 20 / 23 | shop |
| fake money prop money | 30 / 18 | compliance |
| fake australian money prop for sale | 20 / 20 | new notes |
| paper notes money | 50 / 28 | polymer vs paper post |
| 17 Google-bank tags (movie grade, most realistic, kids, party, wedding and so on) | unverified | see `tags.js` |

Ledger rebuilt: 204 rows (`node scripts/build-keyword-ledger.cjs`).

## Next
- Semrush Keyword Overview on the 17 unverified tags (replace null volume/KD in the ledger; drop any over KD 28).
- Request indexing for `/tags/` and the first few tag pages once the GSC quota is back.
