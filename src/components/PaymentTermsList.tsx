// src/components/PaymentTermsList.tsx
import React from 'react';
import { paymentTermsLines } from '../lib/order.js';
import { ShieldCheck, Clock, FileCheck2, Truck, MessageSquareQuote } from 'lucide-react';

interface PaymentTermsListProps {
  orderRef: string;
  methodId?: string;
  className?: string;
}

export const PaymentTermsList: React.FC<PaymentTermsListProps> = ({
  orderRef,
  methodId,
  className = '',
}) => {
  const lines = paymentTermsLines(orderRef, methodId);
  const icons = [Clock, FileCheck2, ShieldCheck, Truck, MessageSquareQuote];

  return (
    <div className={`p-5 rounded-xl bg-[#121A16] border border-[#2C3E36] ${className}`}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2C3E36]">
        <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
          Dispatch &amp; Payment Fulfillment Terms
        </h4>
      </div>

      <ul className="space-y-3">
        {lines.map((line, idx) => {
          const IconComponent = icons[idx] || ShieldCheck;
          return (
            <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-[#B4C0BA]">
              <span className="p-1 rounded bg-[#1C2A24] text-[#C5A059] shrink-0 mt-0.5">
                <IconComponent className="w-3.5 h-3.5" />
              </span>
              <span>{line}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
