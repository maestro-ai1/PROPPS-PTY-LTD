// src/components/CopyField.tsx
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyFieldProps {
  label?: string;
  value: string;
  displayValue?: string;
  className?: string;
}

export const CopyField: React.FC<CopyFieldProps> = ({
  label,
  value,
  displayValue,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {label && (
        <span className="text-[11px] font-semibold tracking-wider text-[#9AA7A0] uppercase mb-1">
          {label}
        </span>
      )}
      <button
        type="button"
        onClick={handleCopy}
        className="group relative inline-flex items-center justify-between gap-3 px-3.5 py-2 bg-[#121A16] hover:bg-[#1A2520] active:scale-[0.99] border border-[#2C3E36] hover:border-[#C5A059] rounded-lg transition-all cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
        title="Click to copy to clipboard"
        aria-label={`Copy ${label || value}`}
      >
        <span className="font-mono-code text-[13px] font-semibold text-[#F8F6F0] tracking-wide select-all truncate">
          {displayValue || value}
        </span>

        <span
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
            copied
              ? 'bg-[#C5A059] text-[#0D1512] font-bold'
              : 'bg-[#1C2A24] text-[#C5A059] group-hover:bg-[#C5A059]/20'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
};
