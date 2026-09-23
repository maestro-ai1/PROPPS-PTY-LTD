# PROPPS PTY LTD — Australian Cinema Prop Currency

Production-ready ecommerce platform for **PROPPS PTY LTD** — Australia's premier manufacturer and distributor of cinema-grade reproduction currency, bank-strapped bundles, vault bricks, and director heist kits.

## Key Features
- **Mobile-First Luxury Australian Aesthetics**: Deep green-black palette (`#0B100E`), warm gold accents (`#C5A059`), serif display typography, and smooth interactive micro-animations.
- **Crimes (Currency) Act 1981 Section 22 Compliant**: 18+ age-gated, prominent specimen markings, and archival non-glare paper substrates for camera sensor fidelity.
- **Dual Checkout Routing**: Direct WhatsApp checkout with synchronous popup launch and Email Order Form checkout.
- **Order Rules Engine**:
  - Minimum order: $300 AUD
  - Free Express Shipping: $500+ AUD
  - Flat shipping fee: $20 AUD
  - Instant Cryptocurrency Discount: 10% on BTC, USDT, and ETH
- **Passcode-Gated Reply Portal (`/admin`)**:
  - Live orders dashboard with WhatsApp and Email channel badges
  - B2B Wholesale & Contact inquiry management
  - Payment Details Composer with Template/Paste toggle & WhatsApp direct pre-filled link
  - Mandatory Light-Theme Branded HTML Email generator (Zoho & Gmail dark-mode proof)
- **Agent-Ready Layer (Level 2+)**:
  - `llms.txt`, `auth.md`, `.well-known/api-catalog`, `agent-skills`, `server-card.json`, `acp.json`, `ucp` ("ucp": "1.0"), and `/js/webmcp.js`.

---

## Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run developer server
npm run dev

# 3. Generate agent files from src/config/site.js
npm run gen

# 4. Run pre-ship crosscheck
npm run crosscheck

# 5. Build for production
npm run build
```

---

## GitHub + Vercel Deployment Steps

1. Create a new empty repository on GitHub.
2. Push your project code:
   ```bash
   git init
   git remote add origin https://github.com/[username]/propps-pty-ltd.git
   git add .
   git commit -m "Initial build — PROPPS PTY LTD v10.0"
   git push -u origin main
   ```
3. In Vercel, click **Add New Project** → **Import Git Repository**.
4. Set **Framework Preset** to Vite or Next.js.
5. In **Environment Variables**, optionally set:
   - `ADMIN_PASSCODE` (default is `PROPPS2026`)
   - `EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD`, `EMAIL_FROM`
   - `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
6. Click **Deploy**.
