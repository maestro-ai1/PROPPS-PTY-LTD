# PROPPS PTY LTD — project instructions

React/Next.js (App Router) cinema prop currency ecommerce store, mobile-first, Vercel-deployable via GitHub.
Migrated from a Vite SPA in 2026 specifically to get real per-route SSR (unique metadata + server-rendered
JSON-LD per page) so AI/search crawlers that don't execute JavaScript can actually see product and page content.

## Non-negotiable: Crimes (Currency) Act 1981 Section 22 Compliance
All currency items on this website are non-legal tender reproduction props manufactured solely for motion pictures, television, theatre, visual arts, and simulation training.
Never market, describe, or frame products as spendable cash, counterfeit, replica tender, or for financial deception.
Every product carries mandatory specimen markings. 18+ age verification required.
If a request would require breaking the above, stop and say so rather than complying.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to PRODUCTS / CATEGORIES / POSTS
drives the page, route, meta, JSON-LD, and nav links.
Generated agent files (`public/.well-known/*`, `public/llms.txt`, `public/robots.txt`, `vercel.json`)
derive directly from `src/config/site.js` via `npm run gen`.

## Rules
- Mobile-first: verified on ~380px viewports with zero horizontal scrolling.
- Exactly one `<h1>` per page.
- Emails entity-encoded (&#64;) across all rendered HTML and JSON-LD.
- Reply Portal emails MUST use the LIGHT shell (white body, `#141010` header band, `#C5A059` accent).
- `ADMIN_PASSCODE` is server-only, never exposed in client bundles.
- Minimum order: $300 AUD. Free shipping threshold: $500 AUD. Crypto discount: 10%.

## Live Placeholders
- `SITE.domain`: currently `proppsptyltd.com.au` (update in `src/config/site.js` when final DNS is pointed — this is the single source of truth; never hand-edit a domain into any other file).
- `EMAIL_SERVER_*`: SMTP credentials in `.env` (without them, `sendMail()` returns `{sent:false}` gracefully and logs locally).
- `ADMIN_PASSCODE`: default dev passcode `PROPPS2026`.
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`: Upstash Redis store (uses localStorage fallback if absent).

## Brand Facts
- Company: PROPPS PTY LTD (ACN registered).
- Founded: 2019 in Eltham, VIC 3093, Melbourne, Australia.
- Scale: 500+ Australian film, television, and theatrical productions supplied.
- Dispatch: Australia Post Express with mandatory signature on delivery.
