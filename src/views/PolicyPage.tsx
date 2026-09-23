// src/pages/PolicyPage.tsx
import React, { useEffect } from 'react';
import { ShieldCheck, Truck, RefreshCw, FileText, Lock, ArrowLeft, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';

export type PolicyType = 'shipping' | 'refund' | 'privacy' | 'terms';

interface PolicyPageProps {
  policyType: PolicyType;
  onNavigate: (path: string) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({ policyType, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [policyType]);

  const renderShippingPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#38242A] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C0D12] border border-[#D4AF37]/50 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Fulfillment &amp; Logistics Standard</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
          SHIPPING &amp; DISPATCH POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#D1C7CA]">
          Official delivery guidelines, carrier tracking, security protocols, and dispatch cutoffs for {SITE.name}.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-code text-xs">
        <div className="p-4 rounded-xl bg-[#140C0F] border border-[#38242A] space-y-1">
          <span className="text-[#A69C9F] text-[11px] block">STANDARD EXPRESS</span>
          <span className="text-[#D4AF37] text-lg font-bold block">$20.00 AUD</span>
          <span className="text-[11px] text-[#C5BDBA]">Australia Post Express Courier</span>
        </div>
        <div className="p-4 rounded-xl bg-[#140C0F] border border-[#00b67a]/40 space-y-1">
          <span className="text-[#00E599] text-[11px] block">FREE SHIPPING THRESHOLD</span>
          <span className="text-white text-lg font-bold block">$500+ AUD</span>
          <span className="text-[11px] text-[#A7D1BD]">Automatically applied at cart</span>
        </div>
        <div className="p-4 rounded-xl bg-[#140C0F] border border-[#38242A] space-y-1">
          <span className="text-[#A69C9F] text-[11px] block">DAILY DISPATCH CUTOFF</span>
          <span className="text-[#FF8591] text-lg font-bold block">2:00 PM AEST</span>
          <span className="text-[11px] text-[#C5BDBA]">Monday through Friday</span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-[#C5BDBA] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            1. Domestic Dispatch &amp; Transit Times
          </h2>
          <p>
            All production prop orders are securely packed and dispatched from our Melbourne fulfillment depot located in Eltham, VIC 3093. Orders confirmed and paid prior to <strong>2:00 PM AEST</strong> on business days are dispatched on the same day. Orders placed on weekends or Australian national public holidays are dispatched on the next business morning.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#A69C9F]">
            <li><strong>Melbourne Metropolitan &amp; Geelong:</strong> 1 business day (Next Day Express).</li>
            <li><strong>Sydney, Canberra, Brisbane, Adelaide Metros:</strong> 1 to 2 business days.</li>
            <li><strong>Perth, Hobart, Darwin &amp; Regional Centers:</strong> 2 to 3 business days.</li>
            <li><strong>Remote &amp; Mining Production Locations:</strong> 3 to 5 business days via regional air mail.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
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
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
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
      <div className="border-b border-[#38242A] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C0D12] border border-[#D4AF37]/50 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <RefreshCw className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Australian Consumer Law (ACL) Compliance</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
          REFUND &amp; REPLACEMENT POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#D1C7CA]">
          Clear, fair refund, return, and damaged shipment replacement policies under Commonwealth standards.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-[#140C0F] border border-[#00b67a]/40 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#00E599] shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <span className="font-bold text-[#F8F6F0] block">30-Day Defect &amp; Damage Guarantee</span>
          <p className="text-[#A7D1BD] leading-relaxed">
            If your order arrives damaged in transit or features printing blemishes not consistent with our quality standards, we offer immediate priority replacement or full refund under Australian Consumer Law.
          </p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-[#C5BDBA] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            1. Transit Damage or Manufacturing Defects
          </h2>
          <p>
            While our prop bills are packaged in rigid protective envelopes and sealed acrylic containers, packages can occasionally sustain carrier trauma. If your cinema stacks arrive crushed, water-damaged, or torn, notify our dispatch team within 48 hours of delivery:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#A69C9F]">
            <li>Take clear photographs of the outer postal satchel and damaged inner stacks.</li>
            <li>Email our team at <span dangerouslySetInnerHTML={{ __html: CONTACT.email }} /> with your Order Reference Number.</li>
            <li>We will dispatch a replacement parcel via Express Post within 24 hours at zero additional cost to you.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            2. Production Schedule Cancellations
          </h2>
          <p>
            Orders can be cancelled with a 100% full refund prior to postal dispatch. Once a parcel has been collected by Australia Post or courier, cancellations cannot be processed until the unopened parcel is returned to our Melbourne warehouse.
          </p>
          <p>
            Returned stock must remain sealed in original heat-shrunk wrapping and bank straps. Return postage for voluntary changes of mind is the responsibility of the purchaser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            3. Custom Aged &amp; Weathered Orders
          </h2>
          <p>
            Bespoke distressing services, hand-weathered cartel bundles, and custom laser-engraved director briefcase plates involve custom artisanal hand-crafting and cannot be restocked for general sale once completed.
          </p>
        </section>
      </div>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#38242A] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C0D12] border border-[#D4AF37]/50 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Privacy Act 1988 (Cth) Compliance</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
          PRIVACY POLICY
        </h1>
        <p className="text-xs sm:text-sm text-[#D1C7CA]">
          How PROPPS PTY LTD safeguards your customer data, delivery addresses, and payment privacy.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-[#C5BDBA] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            1. Information We Collect
          </h2>
          <p>
            We collect only the minimum necessary information required to fulfill your order and provide delivery tracking updates:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#A69C9F]">
            <li><strong>Contact Details:</strong> Name, production company name (if applicable), email address, and phone number.</li>
            <li><strong>Delivery Information:</strong> Physical shipping address and delivery instructions for Australia Post.</li>
            <li><strong>Order Inquiries:</strong> Messages, custom requirement notes, and invoice details.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            2. Payment Security &amp; Zero Card Storage
          </h2>
          <p>
            {SITE.name} operates on direct bank transfers (PayID / Osko) and digital cryptocurrency settlements (Bitcoin, USDT). <strong>We never capture, store, or process credit card numbers on our servers.</strong> Your financial account details remain completely confidential between your financial institution and our registered Australian bank account.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            3. Non-Disclosure &amp; Third-Party Sharing
          </h2>
          <p>
            We adhere strictly to the Australian Privacy Principles (APPs). We never sell, rent, or trade your contact or order information to marketers or advertising brokers. Data is transmitted exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#A69C9F]">
            <li><strong>Australia Post:</strong> Name and address data for automated shipping label generation.</li>
            <li><strong>Legal &amp; Regulatory Authorities:</strong> Only when legally compelled by an enforceable Commonwealth court order or warrant.</li>
          </ul>
        </section>
      </div>
    </div>
  );

  const renderTermsPolicy = () => (
    <div className="space-y-8">
      <div className="border-b border-[#38242A] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C0D12] border border-[#D4AF37]/50 text-[#D4AF37] font-mono-code text-[11px] font-bold uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Statutory Terms of Sale</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F8F6F0]">
          TERMS &amp; CONDITIONS OF SALE
        </h1>
        <p className="text-xs sm:text-sm text-[#D1C7CA]">
          Legally binding agreement governing the acquisition and intended usage of theatrical reproduction props.
        </p>
      </div>

      {/* Compliance Warning Box */}
      <div className="p-4 rounded-xl bg-[#181612] border-2 border-[#D4AF37] text-xs space-y-2">
        <div className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-wider font-mono-code">
          <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
          <span>MANDATORY INTENDED USE ACKNOWLEDGMENT</span>
        </div>
        <p className="text-[#C5BDBA] leading-relaxed">
          By purchasing from {SITE.name} (PROPPS PTY LTD, ABN 72 642 507 042), you warrant and declare that all reproduction currency items are acquired exclusively for legitimate artistic, theatrical, cinematic, educational, or training purposes. Passing, tendering, or attempting to use replica currency as genuine legal tender is a serious criminal offence under Commonwealth law.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-[#C5BDBA] text-xs sm:text-sm leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            1. Entity Identification
          </h2>
          <p>
            These Terms and Conditions apply to all purchases made through this website operated by PROPPS PTY LTD, a registered proprietary company in Victoria, Australia (ABN: 72 642 507 042, Registered Office: Eltham VIC 3093).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            2. Reserve Bank of Australia Compliance Standards
          </h2>
          <p>
            All products listed on this website are designed strictly to satisfy Reserve Bank of Australia (RBA) guidelines for reproduction notes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-[#A69C9F]">
            <li>All notes feature prominent, non-removable "SPECIMEN" or "PROP MONEY" design identifiers.</li>
            <li>No notes contain genuine polymer substrate, optical variable ink (OVI), or holographic diffraction patches.</li>
            <li>Notes are manufactured on matte archival paper stock that does not pass tactile or ultraviolet bank verification checks.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            3. Minimum Order Quantity &amp; Payment Terms
          </h2>
          <p>
            To maintain our studio production wholesale tier, our standard minimum order value is <strong>$300.00 AUD</strong>. Invoices and payment details are issued immediately upon order submission. Orders must be settled via direct bank transfer or cryptocurrency within 48 hours to secure allocated stock.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-lg font-bold text-[#F8F6F0]">
            4. Limitation of Liability
          </h2>
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
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono-code text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home Storefront</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#0F080A] rounded-2xl border border-[#38242A] p-6 sm:p-10 shadow-2xl">
        {policyType === 'shipping' && renderShippingPolicy()}
        {policyType === 'refund' && renderRefundPolicy()}
        {policyType === 'privacy' && renderPrivacyPolicy()}
        {policyType === 'terms' && renderTermsPolicy()}
      </div>

      {/* Quick Navigation to other policies */}
      <div className="p-4 rounded-xl bg-[#140C0F] border border-[#2B181E] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code">
        <span className="text-[#A69C9F]">Quick Policy Links:</span>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/policies/shipping')}
            className={`cursor-pointer transition-colors ${
              policyType === 'shipping' ? 'text-[#D4AF37] font-bold underline' : 'text-[#C5BDBA] hover:text-white'
            }`}
          >
            Shipping Policy
          </button>
          <span className="text-[#38242A]">·</span>
          <button
            type="button"
            onClick={() => onNavigate('/policies/refund')}
            className={`cursor-pointer transition-colors ${
              policyType === 'refund' ? 'text-[#D4AF37] font-bold underline' : 'text-[#C5BDBA] hover:text-white'
            }`}
          >
            Refund Policy
          </button>
          <span className="text-[#38242A]">·</span>
          <button
            type="button"
            onClick={() => onNavigate('/policies/privacy')}
            className={`cursor-pointer transition-colors ${
              policyType === 'privacy' ? 'text-[#D4AF37] font-bold underline' : 'text-[#C5BDBA] hover:text-white'
            }`}
          >
            Privacy Policy
          </button>
          <span className="text-[#38242A]">·</span>
          <button
            type="button"
            onClick={() => onNavigate('/policies/terms')}
            className={`cursor-pointer transition-colors ${
              policyType === 'terms' ? 'text-[#D4AF37] font-bold underline' : 'text-[#C5BDBA] hover:text-white'
            }`}
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>
    </div>
  );
};
