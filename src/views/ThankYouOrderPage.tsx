// src/views/ThankYouOrderPage.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail } from 'lucide-react';
import { CopyField } from '../components/CopyField.js';

export const ThankYouOrderContent: React.FC = () => {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || '';
  const customerEmail = searchParams.get('email') || '';

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-full bg-[#14231C] border-2 border-[#56C48B] flex items-center justify-center text-[#56C48B] mx-auto shadow-2xl animate-fade-in">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#C5A059] block">
          Order Successfully Transmitted
        </span>
        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#F8F6F0]">
          THANK YOU FOR YOUR PRODUCTION ORDER
        </h1>
        <p className="text-xs sm:text-sm text-[#B4C0BA] max-w-lg mx-auto leading-relaxed">
          Your order draft has been received by our Melbourne dispatch desk. Please watch your inbox for your official payment-details email.
        </p>
      </div>

      {/* Order Reference Pill with CopyField */}
      <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] text-left space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E2B25]">
          <div>
            <span className="text-[10px] font-mono-code text-[#889690] uppercase block">
              Official Order Reference
            </span>
            <div className="mt-1">
              <CopyField value={orderRef || 'PRP-ORDER-PENDING'} label="Order Reference" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono-code text-[#889690] uppercase block">
              Registered Notification Email
            </span>
            <span className="font-mono-code text-xs text-[#E5C378]">
              {customerEmail || 'Provided at checkout'}
            </span>
          </div>
        </div>

        {/* What Happens Next Guidance (Strict Section P: Watch for email only) */}
        <div className="space-y-3 pt-1">
          <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Next Steps in Fulfillment</span>
          </h4>
          <ul className="text-xs text-[#9AA7A0] space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">1.</span>
              <span>
                Our dispatch desk is reviewing your order details and reserve stock allocation in our Melbourne warehouse.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">2.</span>
              <span>
                <strong>Watch for payment-details email:</strong> An invoice containing your verified payment routing will arrive at{' '}
                <span className="text-white font-mono-code">{customerEmail || 'your email address'}</span> shortly.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">3.</span>
              <span>
                Once verified, your parcel will be sealed in discreet packaging and dispatched via Australia Post Express with signature on delivery.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          href="/shop"
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E5C378] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code text-center"
        >
          Return to Cinema Catalog
        </Link>

        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3.5 bg-[#141E1A] hover:bg-[#1C2A24] text-[#F8F6F0] text-xs font-mono-code rounded-xl border border-[#2C3E36] transition-colors text-center"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};
