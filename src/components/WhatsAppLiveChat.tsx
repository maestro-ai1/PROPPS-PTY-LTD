// src/components/WhatsAppLiveChat.tsx
'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '61420128746';
const AGENT_NAME = 'Props Money Agent';
const WELCOME_MESSAGE =
  'Hello! Welcome to Australian PROPPS MONEY PTY LTD support. Let us know what kind of movie or production you are planning today!';

export const WhatsAppLiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() || WELCOME_MESSAGE;
    // Mandatory rule: window.open must be called synchronously with the click/submit.
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl border border-[#2C3E36] bg-[#0F1714] animate-fade-in">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-sm block leading-tight">{AGENT_NAME}</span>
                <span className="text-white/80 text-[10px] font-mono-code flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                  Online
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-white"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Welcome message bubble */}
          <div className="p-4 bg-[#0B100E]">
            <div className="bg-[#1C2A24] text-[#E8ECE9] text-xs rounded-xl rounded-tl-none px-3.5 py-2.5 max-w-[90%] leading-relaxed">
              {WELCOME_MESSAGE}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#0F1714] border-t border-[#22302A] flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-[#121A16] border border-[#2C3E36] rounded-full px-3.5 py-2 text-xs text-white placeholder-[#58645F] focus:border-[#25D366] focus:outline-none"
            />
            <button
              type="submit"
              className="w-9 h-9 shrink-0 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-4 h-4 text-[#0D1512]" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl flex items-center justify-center transition-transform active:scale-95"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        {isOpen ? <X className="w-6 h-6 text-[#0D1512]" /> : <MessageCircle className="w-6 h-6 text-[#0D1512]" />}
      </button>
    </div>
  );
};
