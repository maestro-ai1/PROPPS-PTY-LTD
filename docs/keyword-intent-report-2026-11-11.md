# Keyword, intent and on-page report: PROPPS (2026-11-11)

Data: Semrush AU Keyword Overview, **all 161 keywords re-run with Update metrics and read only when every row said "Now"** (the table showed "1 month" before the refresh). On-page data: crawl of the live site, 83 URLs. Intent letters are Semrush's: T transactional, C commercial, I informational, N navigational. Class = T if any T, else C if any C, else N, else I.
Full detail: `keyword-report-pages-2026-11-11.csv` (one row per page) and `keyword-report-keywords-2026-11-11.csv` (one row per keyword with flags).

## Verdict on T and C
| Measure | Result |
|---|---|
| Primaries that are T or C | 56 of 75 (75%) |
| Primaries that are I or N | 19 of 75: 4 denomination products, 9 blog posts, 4 pages (about is navigational; compliance is meant to be informational; contact and wholesale are not), 2 tags |
| Secondaries that are T or C | 60 of 86 (70%) |
| Volume sitting on T/C primaries | 4,580 of 10,770 a month (43%) |
| Volume sitting on I/N primaries | 6,190 (57%), of which 4,240 is the four denomination product pages |
| Primaries over KD 28 (refreshed) | 10 (list below) |
| Primaries with no volume | 20 (mostly long-tail blogs and tags, by design) |

**Honest read:** the keyword set is mostly commercial and transactional by count, but the biggest search volume on the site sits on informational denomination terms ("50 dollar note australia" is people looking up the real note). Those four product pages still carry transactional wording in the title and H1 ("... Prop Money for Sale"), but their primary keyword is not a buying query. The transactional primaries that exist (buy film props, australian prop money for sale, buy prop money) have small volume (20 to 90). This is the main thing to decide before indexing the product pages (see Decisions).

## Pages and products (refreshed intent, volume, KD and live structure)
| URL | Primary | Int | Vol | KD | Title starts | H1 has | H2 | H3 | Words | Sec T/C of total |
|---|---|---|---|---|---|---|---|---|---|---|
| / | australian prop money | I/C | 720 | 4 | yes | yes | 7 | 37 | 2637 | 1T 4C of 5 |
| /shop | australian prop money for sale | T | 30 | 14 | yes | yes | 12 | 5 | 751 | 3T 1C of 5 |
| /about | propps | N | 390 | 25 | yes | yes | 7 | 3 | 838 | 0T 2C of 2 |
| /contact | prop shop melbourne | I | 20 | 19 | yes | yes | 2 | 3 | 194 | 3T 0C of 3 |
| new-notes | au prop money | C | 390 | 0 | yes | yes | 18 | 10 | 1495 | 1T 4C of 5 |
| film-and-tv-props | buy film props | T | 90 | 17 | yes | yes | 11 | 10 | 1038 | 4T 1C of 5 |
| money-stacks | prop money stacks | I/T | 20 | 18 | yes | yes | 10 | 10 | 937 | 3T 1C of 5 |
| photography-props | photography props australia | C | 20 | 3 | yes | yes | 10 | 7 | 768 | 2T 0C of 2 |
| event-and-party-props | play money australia | C | 90 | 14 | yes | yes | 10 | 10 | 870 | 1T 4C of 5 |
| custom-and-branded-props | custom prop money | I/C | 20 | 5 | yes | yes | 8 | 9 | 779 | 1T 2C of 4 |
| /wholesale | wholesale prop money | I | 10 | 23 | yes | yes | 8 | 5 | 588 | 2T 3C of 5 |
| /compliance | prop money australia laws | I | 20 | 20 | yes | yes | 3 | 7 | 604 | 1T 0C of 5 |
| new-notes/100-australian-prop-money-for-sale | 100 dollar note australia | C | 1900 | 40 **>28** | yes | yes | 8 | 13 | 971 | 0T 1C of 5 |
| new-notes/50-australian-prop-money-for-sale | 50 dollar note australia | I | 1600 | 27 | yes | yes | 8 | 13 | 988 | 0T 1C of 5 |
| new-notes/20-australian-prop-money-for-sale | 20 dollar note australia | I | 880 | 17 | yes | yes | 8 | 13 | 963 | 1T 1C of 5 |
| new-notes/10-australian-prop-money-for-sale | 10 dollar note australia | I | 880 | 29 **>28** | yes | yes | 8 | 13 | 961 | 0T 2C of 5 |
| new-notes/5-australian-prop-money-for-sale | 5 dollar note australia | I | 880 | 26 | yes | yes | 8 | 13 | 981 | 2T 0C of 5 |
| film-and-tv-props/film-and-tv-prop-currency-pack | prop money for film | T | 0 | 6 | yes | yes | 8 | 11 | 906 | 0T 2C of 3 |
| money-stacks/bulk-money-stack-pack | bulk prop money australia | C | n/a | 26 | yes | yes | 8 | 10 | 853 | 0T 2C of 2 |
| photography-props/photography-prop-currency-set | prop money for photography | T | n/a | 13 | yes | yes | 7 | 8 | 689 | 0T 0C of 0 |
| event-and-party-props/event-and-party-prop-cash-pack | kids play money | C | 20 | 12 | yes | yes | 8 | 13 | 953 | 1T 3C of 5 |
| custom-and-branded-props/custom-and-branded-prop-currency | custom prop notes | I/T | n/a | 13 | yes | yes | 6 | 8 | 690 | 0T 0C of 0 |

## Product page structure (H1, H2, H3, schema)
Every product page has one H1 that contains the primary, 6 to 8 H2s, 8 to 13 H3s, 689 to 988 words, and Product + Offer + FAQPage + BreadcrumbList schema. The H2 pattern is: Production & Camera Specifications, About the <denomination> prop note, Ordering <denomination> prop money in Australia, Frequently Asked Questions, Related prop specimens, What buyers search for (secondary keywords as H3), Related searches, Topics.

Gaps found:
- The first H2 ("Production & Camera Specifications") and the FAQ H2 are generic, not keyworded.
- Golden rule is 5 secondaries per product. Photography set has **0**, custom pack **0**, bulk pack **2**, film pack **3**, so those pages have no (or a short) "What buyers search for" block.
- The four small-volume products (film, bulk, photography, custom) have primaries with no volume, so they rely on the category pages for traffic.

## Over KD 28 after refresh (rule: KD 28 or below)
| Role | Keyword | Int | Vol | KD |
|---|---|---|---|---|
| product primary | 100 dollar note australia | C | 1900 | 40 |
| product primary | 10 dollar note australia | I | 880 | 29 |
| blog primary | crimes currency act prop money | I | n/a | 29 |
| blog primary | custom prop money printing australia | C | n/a | 32 |
| blog primary | australian banknotes | I | 1000 | 35 |
| blog primary | props for filming | I/C | 20 | 44 |
| tag | movie grade prop money | C | n/a | 30 |
| tag | most realistic prop money | T | 10 | 31 |
| tag | close up realistic prop money | C | n/a | 34 |
| tag | paper notes money | I | 40 | 29 |

Secondaries over KD 28 (8): cash bundle prop (31), $100 note (30), 100 dollar note (31), $50 australian note (29), 10 dollar prop money (32), 10 note australia (30), 5 dollar prop money (30), new 5 dollar note australia (40).
KD moves between refreshes (for example "prop money for photography" read 27 yesterday and 13 today), so treat 27 to 31 as borderline, not as certain failures.

## Informational and navigational primaries
- page: **propps** (N, 390/25) /about
- page: **prop shop melbourne** (I, 20/19) /contact
- page: **wholesale prop money** (I, 10/23) /wholesale
- page: **prop money australia laws** (I, 20/20) /compliance
- product: **50 dollar note australia** (I, 1600/27) new-notes/50-australian-prop-money-for-sale
- product: **20 dollar note australia** (I, 880/17) new-notes/20-australian-prop-money-for-sale
- product: **10 dollar note australia** (I, 880/29) new-notes/10-australian-prop-money-for-sale
- product: **5 dollar note australia** (I, 880/26) new-notes/5-australian-prop-money-for-sale
- blog: **crimes currency act prop money** (I, n/a/29) /blog/crimes-currency-act-1981-rba-prop-money-guidelines
- blog: **fake money australia** (I, 320/25) /blog/fake-money-vs-prop-money-the-legal-difference-in-australia
- blog: **ready prop money** (I, 20/23) /blog/ready-prop-money-stacks-for-fast-turnaround
- blog: **australian banknotes** (I, 1000/35) /blog/best-australian-banknote-denominations-for-film-and-tv-scenes
- blog: **money stack australia** (I, 20/23) /blog/prop-cash-for-heist-and-bank-scenes-getting-the-volume-right
- blog: **australian dollar prop notes** (I, n/a/20) /blog/local-vs-overseas-prop-money-suppliers-compared
- blog: **prop dollar** (I, 110/20) /blog/prop-dollar-vs-prop-cash-vs-prop-money
- blog: **can you take prop money on a plane** (I, 0/21) /blog/can-you-take-prop-money-on-a-plane-in-australia
- blog: **how much is a million dollars in prop money** (I, n/a/28) /blog/how-much-is-a-million-dollars-in-prop-money
- tag: **australian prop money for movies** (I, n/a/21) /tags/australian-prop-money-for-movies
- tag: **paper notes money** (I, 40/29) /tags/paper-notes-money

## Decisions before indexing
1. **Denomination products (5/10/20/50/100):** keep the informational volume terms as primaries (current), or switch the primary to the T/C prop-money phrase and move the note term to a secondary. T/C options: $100 prop money (C 20/21), $20 prop money (C 10/16), $5 prop money (T n/a/12), $10 prop money (C n/a/14), 20 dollar prop money (T 10/25), 100 dollar prop money (T 20/25, owned by a blog post). The $100 page is also over KD 28 at 40 and the $10 page at 29 (informational).
2. **/wholesale/:** swap primary and secondary: "bulk prop money" is T 10/18, "wholesale prop money" is I 10/23.
3. **Products with 0 to 3 secondaries** (photography, custom, bulk, film): source the missing secondaries in Semrush.
4. **KD over 28 blog primaries and tags** (list above): keep as long-tail posts, or retarget.

## Option B applied (2026-11-11, later)
- $100 page primary is now `australian 100 dollar note` (I, 1,900, KD 27; was 100 dollar note australia, KD 40). $10 page primary is now `australian 10 dollar note` (I, 1,000, KD 27; was KD 29).
- The prop money phrase is the first secondary on every note page: $100 prop money (C 20/21), $50 prop money (I 20/23), $20 prop money (C 10/16) and 20 dollar prop money (T 10/25), $10 prop money (C n/a/14), $5 prop money (T n/a/12).
- Secondaries over KD 28 are no longer mapped (held in the ledger, still used in copy): 100 dollar note australia 40, $100 note 30, 100 dollar note 31, $50 australian note 29, 10 dollar note australia 29, 10 note australia 30, 10 dollar prop money 32, 5 dollar prop money 30, new 5 dollar note australia 40. So the $100, $10 and $5 pages have 3, 2 and 3 secondaries, below the rule of 5, because the rest do not pass KD 28.
- The "$100 prop money" tag page was retired (the keyword now belongs to the $100 product) and redirects to it. Sitemap is 82 URLs.
- Wholesale left as is. Re-crawl: 82 pages, 2 failing (the two ranking legal posts), 0 broken links.
