# GSC + Semrush + live on-page report: 2026-11-11

## Google Search Console (28 days, 12 Oct to 8 Nov)
- 19 clicks, 455 impressions, CTR 4.2%, average position 33.9 (was 17 / 416 on 20 Oct: flat).
- **Indexing:** 88 indexed (was 45). 38 not indexed = 36 "page with redirect" (the intentional 301s) + 2 "discovered, not crawled": `/shop/new-notes/10-australian-prop-money-for-sale/` and `/shop/new-notes/50-australian-prop-money-for-sale/`.
- Six tag pages are already indexed and showing impressions.
- Homepage: 10 of 19 clicks, 161 impressions, position 21, mostly the brand query "propps".
- Head terms (position): australian prop money for sale 49.6, prop money 55, prop money australia 72.8, prop australian money 73, aus prop money 45 (1 click).
- Pages at position 4 to 11 with no clicks: /compliance/ 10.6, /contact/ 10.6, fake-money-vs-prop-money 7.4, prop-dollar-vs-prop-cash 8.5, crimes-currency-act post 6.8 (1 click).
- /shop/film-and-tv-props/: 57 impressions at position 64, CTR 1.8%.
- Generic "props" queries (props 27, wholesale props 26, themed props for sale 22, stage/theatre/cinema props) bring impressions but we only stock currency.
- Messages bell was not readable (the messages URL 404s); open it from the GSC header.

## Semrush (AU, domain overview 10 Nov)
- Authority Score 2, 45 organic keywords (+15%), organic traffic 2, backlinks 718 from 531 referring domains (low quality for an AS of 2).
- Best positions: "money forgery" 26/27 (1.6K searches, from the fake-money-vs-prop-money post), prop cash 37, prop dollar 37 (primary of its post), australia prop money 48, buy film props 52, props australia 58.
- "money forgery" is a crime-intent term we excluded on brand-safety grounds; the page ranks by accident. Do not chase it and do not redirect the page.

## Live on-page gate (83 live URLs, scripted crawl against the keyword map)
Real failures:
| Rule | Count | Where |
|---|---|---|
| Title does not start with the primary | 23 | 18 of 36 blogs, /about/, /contact/, 2 products, 1 tag |
| H1 lacks the primary | 25 | 22 blogs, /contact/, 2 products, 1 tag |
| Primary not in first 3 paragraphs | 25 | homepage, /shop/, all 6 categories, /wholesale/, /contact/, 8 tags, 2 products, 5 blogs |
| Meta lacks the primary | 11 | /shop/, /contact/, /compliance/, 2 products, 5 blogs, 1 tag |
| Secondary keywords not visible on the page | 23 | /, /about/, /contact/, /wholesale/, /compliance/, film, play money and custom categories, 4 note products, event pack |
| Image alt is the product name, not the focus keyword | 10 | every product |
| Fewer than 2 authority outbound links | 14 | blogs |
| Fewer than 5 internal outbound links | 4 | /about/, /contact/, /wholesale/, /compliance/ |
| No BreadcrumbList | 3 | /about/, /wholesale/, /faq/ |
| Title over 60 characters | 1 | /refund-policy/ (63) |

Passing: one H1 first heading, no skipped levels, 1,500+ words, TOC, 5 FAQs, visible updated date (all 36 posts; the crawler flagged it as missing because React puts a comment in the text, a false alarm), Article, Product and Breadcrumb schema, 0 broken internal links.
Not verified: image contact-sheet visual check, external link health, and Search Console data older than 28 days.

## Fix applied 2026-11-11 (ebikedirect.eu approach)
The ebikedirect.eu repo generates title, H1, meta, first sentence, image alt and visible secondaries from one keyword map. PROPPS had the map and the pages separately, so they drifted. Fixes:
- Every post now stores `primary` (from keyword-map.js); 18 blog titles, H1s and metas rewritten to start with / carry that exact primary. Ranking posts (crimes-currency-act, fake-money-vs-prop-money) left alone.
- New `PageTopics` component renders each page's secondary keywords as visible H3 topics with a link to the matching guide (map-driven, all pages, categories and products).
- First paragraphs now carry the primary: home, shop, 6 categories, wholesale, about, contact, compliance, 8 tags, 7 post intros. Contact title/H1/meta now lead with "prop shop melbourne"; about title leads with PROPPS; compliance meta carries the exact primary.
- Product main image alt is the mapped focus keyword. Breadcrumb schema added to /about/, /wholesale/, /faq/. `NextSteps` internal links on about, contact, wholesale, compliance. Guides with fewer than 2 authority links get a "Sources and further reading" section. Refund policy title no longer exceeds 60 characters.
- Re-crawl (83 pages): 68 failing pages down to 4. 0 broken links, 0 orphans, 86 of 86 secondaries still linked from 2+ pages.
- Left on purpose: bulk-money-stack-pack and photography-prop-currency-set (their mapped primaries "bag of prop money" and "prop money for photography" have no volume and the pages already rank on other terms: needs a keyword decision), and the two ranking legal posts.
