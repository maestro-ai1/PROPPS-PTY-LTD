// Shared (browser + server) payment-method types and default line templates.
import { CRYPTO_WALLETS } from '../config/site.js';

export type PayMethodId = 'bank-transfer' | 'payid' | 'crypto';

export const PAY_METHOD_IDS: PayMethodId[] = ['bank-transfer', 'payid', 'crypto'];

export const PAY_METHOD_LABEL: Record<PayMethodId, string> = {
  'bank-transfer': 'Bank transfer (EFT / Osko)',
  payid: 'PayID',
  crypto: 'Cryptocurrency (10% discount)',
};

export interface PayLine {
  label: string;
  value: string;
}

export type PayLinesByMethod = Record<PayMethodId, PayLine[]>;

export interface InvoiceRecord {
  token: string;
  method: PayMethodId;
  lines: PayLine[];
  note?: string;
  sentAt: number;
  total: number;
  subtotal: number;
  shippingFee: number;
  discount: number;
  customerNotifiedAt?: number;
}

export function isPayMethod(value: unknown): value is PayMethodId {
  return typeof value === 'string' && (PAY_METHOD_IDS as string[]).includes(value);
}

// Starting point shown in the admin composer. Bank and PayID values are left
// blank on purpose - the owner types them (or saves them once as defaults).
export function blankPayLines(ref: string): PayLinesByMethod {
  return {
    'bank-transfer': [
      { label: 'Bank', value: '' },
      { label: 'Account name', value: 'PROPPS PTY LTD' },
      { label: 'BSB', value: '' },
      { label: 'Account number', value: '' },
      { label: 'Reference', value: ref },
    ],
    payid: [
      { label: 'PayID', value: '' },
      { label: 'PayID name', value: 'PROPPS PTY LTD' },
      { label: 'Reference', value: ref },
    ],
    crypto: [
      { label: 'USDT (TRC20)', value: CRYPTO_WALLETS.usdtTrc20 },
      { label: 'Bitcoin', value: CRYPTO_WALLETS.bitcoin },
      { label: 'Ethereum', value: CRYPTO_WALLETS.ethereum },
      { label: 'Reference', value: ref },
    ],
  };
}

// Owner-saved defaults keep their values, but the Reference line always
// follows the order being invoiced.
export function applyDefaults(defaults: Partial<PayLinesByMethod> | null, ref: string): PayLinesByMethod {
  const base = blankPayLines(ref);
  if (!defaults) return base;
  for (const id of PAY_METHOD_IDS) {
    const saved = defaults[id];
    if (Array.isArray(saved) && saved.length > 0) {
      base[id] = saved.map((l) => (l.label.toLowerCase() === 'reference' ? { label: l.label, value: ref } : l));
    }
  }
  return base;
}
