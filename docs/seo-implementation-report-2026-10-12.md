# SEO implementation report — 2026-10-12 (before final audit sign-off)

Source data: `prop-money_all-keywords_au_2026-10-12.csv` (22 rows, read by header) + `keywords australia prop money 2.txt`
+ owner's pasted lists. Nothing is committed or pushed.

## Applied to the working tree
| Page | New title | Primary | Intent | Vol | KD |
|---|---|---|---|---|---|
| `/` | Australian Prop Money for Film & TV \| PROPPS Melbourne | australian prop money | C | 720 | 21 |
| `/shop/` | Australian Prop Money for Sale \| Shop Online \| PROPPS | australian prop money for sale | T | 20 | 19 |
| `/about/` | About PROPPS \| Melbourne Prop Money Makers Since 2019 | propps pty ltd | N | n/a | n/a |
| `/contact/` | Contact PROPPS \| Prop Money Quotes & Trade Orders | contact propps | N | n/a | n/a |

Home H1 and Shop H1 updated; Shop intro rewritten with buy-intent wording (buy prop money, order in AUD) once each.
Supporting only (high KD, per owner): fake money 1600/36, imitation money 1300/38, money fake money 1300/37.

## 10 new blog posts (one primary each, ~160-260 words, no stuffing)
can you buy prop money (T 20/20) · is it illegal to buy prop money (T 20/24) · cheap prop money (T 20/28) ·
high quality prop money (T 20/4) · buying prop money (T 20/1) · 100 dollar prop money (T 20/25) ·
ready prop money (C 30/10) · prop money for music videos australia (n/a) · double-sided prop banknotes AUD (n/a) ·
movie prop cash melbourne (n/a).

## Fixes
- Removed the duplicate `local-vs-overseas-prop-money-suppliers-compared` post. Crawl: 82 URLs, 0 duplicates, 0 non-200, 1 H1 each.
- Agent files regenerated (`npm run gen`).
- Keyword overlay now loads as a separate chunk and only on non-production builds.

## Deliberately not done
- "polymer" terms: site claims paper stock; polymer is the real-note substrate.
- counterfeit making/selling/using terms, detectors, DIY print, wrong-market terms.
- "1 1 prop money": size-compliance question, owner decision.
- New pages: no keyword in the data justifies one (every added term is ~20/mo). Candidate once Semrush data exists: Melbourne / Sydney delivery page.

## Still open (golden rule)
Product titles lack `| Buy Online Australia`; 6 older posts reuse category primaries; 19 older posts keyword-stuffed with bold phrases.
Volume reality: the 10 new primaries total ~200 searches/month.
