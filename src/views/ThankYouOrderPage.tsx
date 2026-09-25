// src/views/ThankYouOrderPage.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { CopyField } from '../components/CopyField.js';
import { CONTACT } from '../config/site.js';

export const ThankYouOrderContent: React.FC = () => {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || '';
  const customerEmail = searchParams.get('email') || '';
  const viaWhatsApp = searchParams.get('channel') === 'whatsapp';

  const waHref = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi PROPPS PTY LTD, I have just placed order ${orderRef}.`
  )}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-8">
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-full bg-[#14231C] border-2 border-[#56C48B] flex items-center justify-center text-[#56C48B] mx-auto shadow-2xl animate-fade-in">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#56C48B] block">
          Order Placed
        </span>
        <h1 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#F8F6F0]">
          THANK YOU - YOUR ORDER HAS BEEN PLACED
        </h1>
        <p className="text-xs sm:text-sm text-[#B4C0BA] max-w-lg mx-auto leading-relaxed">
          {viaWhatsApp
            ? 'We have opened WhatsApp with your order details - please press Send so our Melbourne dispatch desk receives it. We will reply with your payment details.'
            : 'Your order has been received by our Melbourne dispatch desk. We will email your invoice and payment details next.'}
          {customerEmail && (
            <>
              {' '}
              A confirmation email with your order number has been sent to{' '}
              <span className="text-white font-mono-code break-all">{customerEmail}</span>.
            </>
          )}
        </p>
      </div>

      {/* Order Reference Pill with CopyField */}
      <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] text-left space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E2B25]">
          <div>
            <span className="text-[10px] font-mono-code text-[#889690] uppercase block">
              Your Order Number
            </span>
            <div className="mt-1">
              <CopyField value={orderRef || 'PP-PENDING'} label="Order Number" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono-code text-[#889690] uppercase block">
              {customerEmail ? 'Confirmation Sent To' : 'Order Channel'}
            </span>
            <span className="font-mono-code text-xs text-[#E5C378] break-all">
              {customerEmail || (viaWhatsApp ? 'WhatsApp' : 'Provided at checkout')}
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-1">
          <p className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>What Happens Next</span>
          </p>
          <ul className="text-xs text-[#9AA7A0] space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">1.</span>
              <span>Our dispatch desk is reviewing your order and reserving your stock in Melbourne.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">2.</span>
              <span>
                {viaWhatsApp && !customerEmail ? (
                  <>
                    <strong>Watch WhatsApp:</strong> we will send your invoice and payment details in the chat.
                  </>
                ) : (
                  <>
                    <strong>Watch your email:</strong> your invoice and payment details will arrive
                    {customerEmail ? (
                      <>
                        {' '}
                        at <span className="text-white font-mono-code break-all">{customerEmail}</span>
                      </>
                    ) : null}{' '}
                    shortly.
                  </>
                )}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C5A059] font-bold">3.</span>
              <span>
                Once payment is received and confirmed, your parcel is packed discreetly and dispatched via Australia Post Express with signature on delivery.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        {viaWhatsApp && (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-[#0B100E] font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono-code text-center flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Open WhatsApp
          </a>
        )}
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
