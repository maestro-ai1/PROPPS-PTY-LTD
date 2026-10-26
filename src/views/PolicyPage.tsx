// src/views/PolicyPage.tsx
import React from 'react';
import Link from 'next/link';
import { Truck, RefreshCw, Lock, ArrowLeft, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';

export const REFUND_FAQS = [
  { q: 'How long does a refund take?', a: 'Approved refunds are returned to your original payment method within 3 to 8 business days. Bank and PayID refunds sit at the quicker end; cryptocurrency depends on the network.' },
  { q: 'Can I cancel an order and get my money back?', a: 'Yes, in full, if the parcel has not been dispatched. Most paid orders leave Melbourne within 24 business hours, so email us as soon as you can.' },
  { q: 'What if my prop money arrives damaged?', a: 'Email photos and your order reference within 48 hours of delivery. We send a replacement by Express Post at no cost, or refund the affected items within 3 to 8 business days.' },
  { q: 'Do you refund a change of mind?', a: 'Yes, for sealed, unopened stock returned to our Melbourne depot. The return postage is paid by the buyer, and the 3 to 8 business days start once we receive the parcel.' },
  { q: 'Are custom or branded notes refundable?', a: 'Custom aged, weathered and branded orders are made to your brief, so they are refundable only for defects or damage under Australian Consumer Law.' },
];

export type PolicyType = 'shipping' | 'refund' | 'privacy' | 'terms';

const POLICY_PATHS: Record<PolicyType, string> = {
  shipping: '/shipping-policy',
  refund: '/refund-policy',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
};

interface PolicyContentProps {
  policyType: PolicyType;
}

export const PolicyContent: React.FC<PolicyContentProps> = ({ policyType }) => {
  const renderShippingPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F7F2] border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Fulfillment &amp; Logistics Standard</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#1A1414]">
          SHIPPING &amp; DISPATCH POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F]">
          Official delivery guidelines, carrier tracking, security protocols, and dispatch cutoffs for {SITE.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs">
        <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#EAE3DC] space-y-1">
          <span className="text-[#6F665F] text-[11px] block">STANDARD EXPRESS</span>
          <span className="text-[#D4AF37] text-lg font-bold block">$20.00 AUD</span>
          <span className="text-[11px] text-[#6F665F]">Australia Post Express Courier</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#00b67a]/40 space-y-1">
          <span className="text-[#00b67a] text-[11px] block">FREE SHIPPING THRESHOLD</span>
          <span className="text-[#1A1414] text-lg font-bold block">$500+ AUD</span>
          <span className="text-[11px] text-[#00b67a]">Automatically applied at cart</span>
        </div>
        <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#EAE3DC] space-y-1">
          <span className="text-[#6F665F] text-[11px] block">DAILY DISPATCH CUTOFF</span>
          <span className="text-[#D4AF37] text-lg font-bold block">2:00 PM AEST</span>
          <span className="text-[11px] text-[#6F665F]">Monday through Friday</span>
        </div>
      </div>

      <div className="max-w-none text-[#6F665F] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            1. Domestic Dispatch &amp; Transit Times
          </h2>
          <p>
            All production prop orders are securely packed and dispatched from our Melbourne fulfillment depot located in Eltham, VIC 3093. Orders confirmed and paid prior to <strong>2:00 PM AEST</strong> on business days are dispatched on the same day. Orders placed on weekends or Australian national public holidays are dispatched on the next business morning.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#6F665F]">
            <li><strong>Melbourne Metropolitan &amp; Geelong:</strong> 1 business day (Next Day Express).</li>
            <li><strong>Sydney, Canberra, Brisbane, Adelaide Metros:</strong> 1 to 2 business days.</li>
            <li><strong>Perth, Hobart, Darwin &amp; Regional Centers:</strong> 2 to 3 business days.</li>
            <li><strong>Remote &amp; Mining Production Locations:</strong> 3 to 5 business days via regional air mail.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            2. Discreet Commercial Packaging &amp; Chain of Custody
          </h2>
          <p>
            To protect studio privacy and ensure seamless transit, all orders are packaged in plain, heavy-duty, tamper-evident cartons or reinforced Australia Post Express satchels. There are <strong>no external markings, logos, or references to prop money or replica cash</strong> on the exterior packaging.
          </p>
          <p>
            Every parcel includes full end-to-end tracking with live SMS and email tracking links provided upon package scan. A mandatory <strong>Signature on Delivery</strong> is enforced on all orders over $300 AUD to eliminate doorstep theft.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            3. Studio Production Priority Courier (Same-Day)
          </h2>
          <p>
            For major television, streaming, and commercial film productions operating in the greater Melbourne metropolitan area requiring urgent same-day prop handover, point-to-point courier delivery can be arranged through our support team via WhatsApp or email.
          </p>
        </section>
      </div>
    </div>
  );

  const renderRefundPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F7F2] border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <RefreshCw className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Australian Consumer Law (ACL) Compliance</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#1A1414]">
          REFUND &amp; REPLACEMENT POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F]">
          Approved refunds reach you within 3 to 8 business days. Last updated 26 October 2026.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[#F1F9F5] border border-[#00b67a]/40 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#00b67a] shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <span className="font-bold text-[#1A1414] block">3 to 8 business day refunds, 30-day defect guarantee</span>
          <p className="text-[#00b67a] leading-relaxed">
            Once we approve a refund, the money is returned to you within 3 to 8 business days. If your order arrives damaged in transit or with printing faults that do not meet our standards, we offer a priority replacement or a full refund under Australian Consumer Law.
          </p>
        </div>
      </div>

      <div className="max-w-none text-[#6F665F] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            1. Refund Timeline: 3 to 8 Business Days
          </h2>
          <p>
            Refunds are paid back to the method you used to pay, in Australian dollars. After we approve a refund (or confirm that a cancelled order was not yet dispatched), allow <strong>3 to 8 business days</strong> for the funds to reach you. The exact time inside that window depends on your bank or, for cryptocurrency, the network and your wallet. Business days are Monday to Friday, excluding Australian national public holidays.
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-xs text-[#6F665F]">
            <li><strong>Day 0:</strong> you email us your order reference and, for damage, photos.</li>
            <li><strong>Within 1 business day:</strong> we confirm the claim and tell you whether it is a refund or a replacement.</li>
            <li><strong>Within 3 to 8 business days of approval:</strong> the refund lands in your account or wallet.</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            2. Transit Damage or Manufacturing Defects
          </h2>
          <p>
            Our prop notes ship in rigid protective packaging, but parcels can still be damaged by the carrier. If your stacks arrive crushed, water-damaged or torn, tell us within 48 hours of delivery:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#6F665F]">
            <li>Take clear photographs of the outer satchel and the damaged stacks.</li>
            <li>Email us at <span dangerouslySetInnerHTML={{ __html: CONTACT.email }} /> with your order reference number.</li>
            <li>We will send a replacement by Express Post at no cost to you, or refund the affected items in full, within the 3 to 8 business day window above.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            3. Cancelling Before Dispatch
          </h2>
          <p>
            Orders can be cancelled for a 100% refund before the parcel is dispatched. Because most paid orders leave our Eltham, Melbourne depot within 24 business hours, contact us as soon as possible. Once Australia Post has collected the parcel, the order can only be refunded after the unopened parcel is returned to us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            4. Change of Mind Returns
          </h2>
          <p>
            Returned stock must be sealed in its original wrapping and bank straps. Return postage for a change of mind is paid by the purchaser, and the refund timeline starts when we receive and check the returned parcel. Notes remain non-legal tender specimen props and must never be spent; see our <Link href="/compliance/" className="text-[#D4AF37] underline">compliance page</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            5. Custom Aged, Weathered &amp; Branded Orders
          </h2>
          <p>
            Bespoke distressing, hand-weathered bundles and custom branded notes are made to your brief and cannot be restocked for general sale. They are refundable only for defects or damage under Australian Consumer Law. See <Link href="/shop/custom-and-branded-props/" className="text-[#D4AF37] underline">custom and branded props</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            6. Your Rights Under Australian Consumer Law
          </h2>
          <p>
            Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for other reasonably foreseeable loss or damage. Read more on the <a href="https://www.accc.gov.au/consumers/buying-products-and-services/consumer-guarantees" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline">ACCC consumer guarantees page</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            Refund Questions
          </h2>
          <dl className="space-y-3">
            {REFUND_FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-bold text-[#1A1414]">{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
          <p>
            Need help? See our <Link href="/shipping-policy/" className="text-[#D4AF37] underline">shipping policy</Link>, the <Link href="/faq/" className="text-[#D4AF37] underline">FAQ</Link> or <Link href="/contact/" className="text-[#D4AF37] underline">contact us</Link>. Ready to order again? <Link href="/shop/" className="text-[#D4AF37] underline">Shop prop money</Link>.
          </p>
        </section>
      </div>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F7F2] border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Privacy Act 1988 (Cth) Compliance</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#1A1414]">
          PRIVACY POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F]">
          How PROPPS PTY LTD safeguards your customer data, delivery addresses, and payment privacy.
        </p>
      </div>

      <div className="max-w-none text-[#6F665F] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">1. Information We Collect</h2>
          <p>
            We collect only the minimum necessary information required to fulfill your order and provide delivery tracking updates:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#6F665F]">
            <li><strong>Contact Details:</strong> Name, production company name (if applicable), email address, and phone number.</li>
            <li><strong>Delivery Information:</strong> Physical shipping address and delivery instructions for Australia Post.</li>
            <li><strong>Order Inquiries:</strong> Messages, custom requirement notes, and invoice details.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            2. Payment Security &amp; Zero Card Storage
          </h2>
          <p>
            {SITE.name} operates on direct bank transfers (PayID / Osko) and digital cryptocurrency settlements (Bitcoin, USDT). <strong>We never capture, store, or process credit card numbers on our servers.</strong> Your financial account details remain completely confidential between your financial institution and our registered Australian bank account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            3. Non-Disclosure &amp; Third-Party Sharing
          </h2>
          <p>
            We adhere strictly to the Australian Privacy Principles (APPs). We never sell, rent, or trade your contact or order information to marketers or advertising brokers. Data is transmitted exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#6F665F]">
            <li><strong>Australia Post:</strong> Name and address data for automated shipping label generation.</li>
            <li><strong>Legal &amp; Regulatory Authorities:</strong> Only when legally compelled by an enforceable Commonwealth court order or warrant.</li>
          </ul>
        </section>
      </div>
    </div>
  );

  const renderTermsPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#EAE3DC] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F7F2] border border-[#D4AF37]/40 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Statutory Terms of Sale</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#1A1414]">
          TERMS &amp; CONDITIONS OF SALE
        </h1>
        <p className="text-xs sm:text-sm text-[#6F665F]">
          Legally binding agreement governing the acquisition and intended usage of theatrical reproduction props.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[#F9F7F2] border-2 border-[#D4AF37] text-xs space-y-2 shadow-sm">
        <div className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-wider font-mono-code">
          <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
          <span>MANDATORY INTENDED USE ACKNOWLEDGMENT</span>
        </div>
        <p className="text-[#6F665F] leading-relaxed">
          By purchasing from {SITE.name} (PROPPS PTY LTD, ABN 72 642 507 042), you warrant and declare that all reproduction currency items are acquired exclusively for legitimate artistic, theatrical, cinematic, educational, or training purposes. Passing, tendering, or attempting to use replica currency as genuine legal tender is a serious criminal offence under Commonwealth law.
        </p>
      </div>

      <div className="max-w-none text-[#6F665F] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">1. Entity Identification</h2>
          <p>
            These Terms and Conditions apply to all purchases made through this website operated by PROPPS PTY LTD, a registered proprietary company in Victoria, Australia (ABN: 72 642 507 042, Registered Office: Eltham VIC 3093).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            2. Reserve Bank of Australia Compliance Standards
          </h2>
          <p>All products listed on this website are designed strictly to satisfy Reserve Bank of Australia (RBA) guidelines for reproduction notes:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#6F665F]">
            <li>All notes feature prominent, non-removable "SPECIMEN" or "PROP MONEY" design identifiers.</li>
            <li>No notes contain genuine polymer substrate, optical variable ink (OVI), or holographic diffraction patches.</li>
            <li>Notes are manufactured on matte archival paper stock that does not pass tactile or ultraviolet bank verification checks.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">
            3. Minimum Order Quantity &amp; Payment Terms
          </h2>
          <p>
            To maintain our studio production wholesale tier, our standard minimum order value is <strong>$300.00 AUD</strong>. Invoices and payment details are issued immediately upon order submission. Orders must be settled via direct bank transfer or cryptocurrency within 48 hours to secure allocated stock.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#1A1414]">4. Limitation of Liability</h2>
          <p>
            PROPPS PTY LTD disclaims any and all liability arising from the unlawful misuse, unauthorized alteration, or fraudulent distribution of our prop products by third parties. Purchasers indemnify PROPPS PTY LTD against any legal actions arising from breaches of Commonwealth or state laws.
          </p>
        </section>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4AF37] hover:underline transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home Storefront</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-[#EAE3DC] p-6 sm:p-10 shadow-sm">
        {policyType === 'shipping' && renderShippingPolicy()}
        {policyType === 'refund' && renderRefundPolicy()}
        {policyType === 'privacy' && renderPrivacyPolicy()}
        {policyType === 'terms' && renderTermsPolicy()}
      </div>

      {/* Quick Navigation to other policies */}
      <div className="p-4 rounded-xl bg-[#F9F7F2] border border-[#EAE3DC] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code">
        <span className="text-[#6F665F]">Quick Policy Links:</span>
        <div className="flex flex-wrap gap-3">
          <Link
            href={POLICY_PATHS.shipping}
            className={policyType === 'shipping' ? 'text-[#D4AF37] font-bold underline' : 'text-[#6F665F] hover:text-[#1A1414]'}
          >
            Shipping Policy
          </Link>
          <span className="text-[#EAE3DC]">·</span>
          <Link
            href={POLICY_PATHS.refund}
            className={policyType === 'refund' ? 'text-[#D4AF37] font-bold underline' : 'text-[#6F665F] hover:text-[#1A1414]'}
          >
            Refund Policy
          </Link>
          <span className="text-[#EAE3DC]">·</span>
          <Link
            href={POLICY_PATHS.privacy}
            className={policyType === 'privacy' ? 'text-[#D4AF37] font-bold underline' : 'text-[#6F665F] hover:text-[#1A1414]'}
          >
            Privacy Policy
          </Link>
          <span className="text-[#EAE3DC]">·</span>
          <Link
            href={POLICY_PATHS.terms}
            className={policyType === 'terms' ? 'text-[#D4AF37] font-bold underline' : 'text-[#6F665F] hover:text-[#1A1414]'}
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
