// src/components/admin/WhatsAppSendPanel.tsx
import React, { useState } from 'react';
import { MessageCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { StoredOrder } from '../../lib/order.js';
import { waPaymentDetailsMessage, waLink } from '../../lib/whatsapp.js';

interface WhatsAppSendPanelProps {
  order: StoredOrder;
  paymentDetails: string;
}

export const WhatsAppSendPanel: React.FC<WhatsAppSendPanelProps> = ({
  order,
  paymentDetails,
}) => {
  const [copied, setCopied] = useState(false);

  const formattedMsg = waPaymentDetailsMessage(order, paymentDetails);
  const waUrl = waLink(order.phone, formattedMsg);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLaunch = () => {
    window.open(waUrl, '_blank');
  };

  return (
    <div className="p-4 bg-[#141E1A] rounded-xl border border-[#2C3E36] space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-[#22302A]">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <h4 className="text-xs font-bold text-[#F8F6F0] font-mono-code uppercase tracking-wider">
            WhatsApp Direct Customer Dispatch Panel
          </h4>
        </div>
        <span className="text-[11px] font-mono-code text-[#C5A059]">
          Recipient: {order.phone}
        </span>
      </div>

      <p className="text-xs text-[#9AA7A0] leading-relaxed">
        Pre-formatted with the exact order reference, amount due, your customized account/wallet instructions, and Commonwealth terms of fulfillment.
      </p>

      {/* Message Preview Box */}
      <div className="p-3 bg-[#0B100E] rounded-lg border border-[#22302A] text-xs font-mono-code text-[#B4C0BA] max-h-40 overflow-y-auto whitespace-pre-wrap select-all">
        {formattedMsg}
      </div>

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={handleLaunch}
          className="flex-1 py-2.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-[#0B100E] font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer font-mono-code"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Launch WhatsApp Message</span>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="py-2.5 px-4 bg-[#1C2A24] hover:bg-[#263830] text-[#F8F6F0] border border-[#2C3E36] rounded-lg text-xs font-mono-code flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-[#56C48B]" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
          <span>{copied ? 'Copied' : 'Copy Text'}</span>
        </button>
      </div>
    </div>
  );
};
