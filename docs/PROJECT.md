# Project Strategy & Technical Architecture — PROPPS PTY LTD

## Overview
- Brand: PROPPS PTY LTD
- Entity: Australian Proprietary Limited Company
- HQ: Eltham, VIC 3093, Melbourne, Australia
- Core Service: Cinema-grade reproduction currency and prop cash for Australian motion pictures, television streaming series, theatrical productions, commercial arts, and training simulation academies.

## Business & Order Rules
- Currency: AUD ($)
- Minimum Order: $300 AUD
- Free Express Shipping: $500 AUD and above via Australia Post Express with mandatory signature on delivery.
- Flat Shipping: $20 AUD for orders under $500 AUD.
- Crypto Discount: 10% instant deduction on Bitcoin (BTC), Tether (USDT), and Ethereum (ETH).
- Order Routing Channels: WhatsApp direct checkout and Email order checkout form.

## Legal Compliance Architecture
- Statutory Authority: Commonwealth of Australia Crimes (Currency) Act 1981 Section 22.
- Criteria:
  1. Permanent specimen marking: "THIS NOTE IS NOT LEGAL TENDER - FOR CINEMATIC USE ONLY" on both sides.
  2. Wood-pulp archival paper stock (120gsm) with non-reflective matte inks vs real bi-axially oriented polymer.
  3. Total omission of optically variable devices (OVDs), clear transparent windows, and tactile braille features.
  4. Deliberate micro-typography and artistic portrait adjustments preventing banknote sorting sensor confusion.
- Adult verification: Mandatory 18+ age gate modal on entry.

## Reply Portal & Email System (Section P)
- Portal Route: `/admin` (passcode-gated via server check and client session storage).
- Dashboard: Live metrics, Order store with channel badges (`whatsapp` / `email`), Enquiry store (`contact` / `wholesale`).
- Payment Composer: Template / Paste toggle, pre-filling customer WhatsApp link (`WhatsAppSendPanel`), and LIGHT branded HTML email builder.
- Light Theme Email Shell: White body, dark header band (`#141010`), gold accent (`#C5A059`), table-based inline CSS for full Zoho / Gmail / Outlook client rendering without dark-mode inversion.
