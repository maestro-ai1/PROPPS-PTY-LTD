# Google Merchant Center setup, step by step (proppsptyltd.com.au)

Goal: get the 11 products onto the Google Shopping tab and free product listings, so buyers can find them without clicking through search results. Free to list. Google's menu names change now and then, so match by meaning if a label differs.

## Before you start (must be done first)
1. **The domain must be live.** At the moment the .au registry shows a "client hold" from GoDaddy (16 Nov 2026), so the site does not resolve. Clear that first, then confirm https://proppsptyltd.com.au/ opens.
2. **Use the Google account that owns Search Console** (the proppsptyltd Gmail). It already proves you own the site.
3. The site already has the pages Google checks for: shipping policy, refund policy, terms, privacy and contact (address Eltham VIC 3093).

## Step 1: Create the account
1. Go to https://merchants.google.com and sign in.
2. Click **Get started** and enter: business name **PROPPS PTY LTD**, country **Australia**, time zone Melbourne.
3. Choose the **free listings** option (you can add paid Shopping ads later).
4. Add the business address (Eltham VIC 3093), phone and a contact email you check daily.

## Step 2: Verify and claim the website
1. In Merchant Center open **Settings > Business info > Website** (or the "Website" step in setup).
2. Enter `https://proppsptyltd.com.au` and click **Verify**. The quickest route is the Search Console link: choose that method, because the same Google account already owns the property.
3. Click **Claim website**. A green tick shows when both are done.

## Step 3: Shipping and returns
1. **Settings > Shipping and returns > Shipping**. Create one service for Australia:
   - Name: Australia Post Express (signature on delivery)
   - Cost: **$20 flat**, and **free for orders from $500** (same as the website; the minimum order is now $150)
   - Handling time: **1 business day** (website says dispatch within 24 business hours)
   - Transit time: 1 to 3 business days (adjust to your real Express times)
2. **Returns**: add the return policy link `https://proppsptyltd.com.au/refund-policy/` and the window shown on that page (refund within 3 to 8 business days, as written there).
3. **Tax**: if your prices include GST, tick the matching option so the price shown in Google equals the price on the site.

## Step 4: Add the products with the feed
The site now publishes a ready feed at **https://proppsptyltd.com.au/feeds/google-merchant.xml** (11 products, updated automatically on every deploy).
1. **Products > Feeds > Add feed** (or "Add products > Upload a file").
2. Country **Australia**, language **English**, destination **Free listings** (and Shopping ads if you want them).
3. Input method: **Scheduled fetch**.
4. File name `google-merchant.xml`, URL `https://proppsptyltd.com.au/feeds/google-merchant.xml`, fetch **daily**.
5. Click **Create feed**, then **Fetch now** once.
6. Open **Products > All products**. Each of the 11 should appear within minutes. Open one and check price, image and link.

What the feed already sends for every product: id, title, description, link, image link, availability (in stock), condition (new), price in AUD, brand PROPPS, "no GTIN" (identifier_exists no), a Google product category and a product type. No barcode is needed because these are your own made-to-order products.

## Step 5: Switch on the free programs
1. **Growth > Manage programs**.
2. Turn on **Free listings** (and **Shopping ads** only if you plan to spend).
3. Accept the terms. Review usually takes 3 to 7 days.

## Step 6: Check Diagnostics
1. Open **Products > Diagnostics** after 1 to 2 days.
2. Fix any item flagged "Missing value" or "Price mismatch": the price in the feed must match the price on the product page (the feed uses each product's starting price).
3. If Google disapproves, the message says why. Reply or edit, then click **Request review**.

## Step 7: Link Search Console and check the result
1. In Merchant Center: **Settings > Linked accounts**, link the Search Console property.
2. About a week after approval, open Search Console > **Shopping** reports (and the earlier "products aren't on the Search Shopping tab" message should clear).
3. On Google, search `prop money australia` and open the **Shopping** tab to look for the listings.

## Policy risk to know about (please read)
Google reviews every product against its shopping policies, including rules on counterfeit goods and misleading products. Prop money is a grey area for reviewers. Our protection is the site itself: every note is clearly specimen-marked, titles and descriptions say non-legal tender, and nothing is marketed as spendable. If a product is disapproved:
- Do not remove the specimen wording to pass review.
- Ask for a manual review and point to the compliance page `https://proppsptyltd.com.au/compliance/`.
- Keep the play money pack and the Party Cash Cannon Kit (clearly pretend play notes) in the feed, because they carry the lowest risk.
- If Google still refuses currency products, free listings are simply not available for them; the website SEO work is unaffected.

## Checklist
- [ ] Domain live again
- [ ] Merchant Center account created, business info added
- [ ] Website verified and claimed
- [ ] Shipping ($20 under $500, free from $500), returns and tax set
- [ ] Feed added, fetched, 11 products visible
- [ ] Free listings program on
- [ ] Diagnostics clear (or reviews requested)
- [ ] Search Console linked
