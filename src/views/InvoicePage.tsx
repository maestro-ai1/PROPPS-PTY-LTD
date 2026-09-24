'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Copy, Check, QrCode, ShieldCheck } from 'lucide-react';
import { SITE, CONTACT, REPLY } from '../config/site.js';
import { PAY_METHOD_LABEL, type PayLine, type PayMethodId } from '../lib/payment.js';
import { paymentTermsLines } from '../lib/order.js';

interface InvoiceData {
  ref: string;
  issued: number;
  customerName: string;
  address: string;
  status: string;
  paymentNotified: boolean;
  items: { name: string; price: number; quantity: number }[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  method: PayMethodId;
  lines: PayLine[];
  note: string;
}

const money = (n: number) => `$${Number(n).toFixed(2)}`;

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    return true;
  } catch {
    return false;
  }
}

const CopyButton: React.FC<{ text: string; label?: string; big?: boolean }> = ({ text, label = 'Copy', big }) => {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(text)) {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        }
      }}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-bold transition-colors ${
        done ? 'bg-[#2E7D4F] text-white' : 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#0D1512]'
      } ${big ? 'px-4 py-3 text-sm w-full' : 'px-3 py-2 text-xs shrink-0'}`}
      aria-label={`${label} ${text}`}
    >
      {done ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {done ? 'Copied' : label}
    </button>
  );
};

const QrImage: React.FC<{ value: string }> = ({ value }) => {
  const [src, setSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL(value, { margin: 1, width: 240, errorCorrectionLevel: 'M' }).then(setSrc).catch(() => setSrc(''));
  }, [value]);
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="QR code" width={200} height={200} className="rounded-lg border border-[#E6DED3] bg-white p-2" />
  ) : null;
};

const LineRow: React.FC<{ line: PayLine; autoQr?: boolean }> = ({ line, autoQr }) => {
  const [showQr, setShowQr] = useState(Boolean(autoQr));
  return (
    <div className="py-3 border-b border-[#EAE3DC] last:border-b-0">
      <div className="text-[11px] font-bold uppercase tracking-wider text-[#6F665F] mb-1">{line.label}</div>
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0 font-mono text-[15px] font-semibold text-[#1A1414] break-all select-all">{line.value}</div>
        <button
          type="button"
          onClick={() => setShowQr((v) => !v)}
          className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border border-[#C5A059] text-[#8A6B25] text-xs font-bold shrink-0"
          aria-expanded={showQr}
        >
          <QrCode className="w-4 h-4" /> QR
        </button>
        <CopyButton text={line.value} />
      </div>
      {showQr && (
        <div className="mt-3 flex justify-center">
          <div className="flex flex-col items-center gap-1">
            <QrImage value={line.value} />
            <span className="text-[11px] text-[#6F665F]">Scan to pay {line.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const InvoicePageContent: React.FC = () => {
  const [token, setToken] = useState('');
  const [data, setData] = useState<InvoiceData | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [notified, setNotified] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showAllQr, setShowAllQr] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('t') || '';
    setToken(t);
    if (!t) {
      setState('missing');
      return;
    }
    fetch(`/api/invoice/${encodeURIComponent(t)}/`, { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error('missing');
        const json = (await res.json()) as InvoiceData;
        setData(json);
        setNotified(json.paymentNotified);
        setState('ready');
      })
      .catch(() => setState('missing'));
  }, []);

  const notifyPaid = async () => {
    setBusy(true);
    try {
      const res = await fetch(`/api/invoice/${encodeURIComponent(token)}/paid/`, { method: 'POST' });
      if (res.ok) setNotified(true);
    } finally {
      setBusy(false);
    }
  };

  if (state === 'loading') {
    return <main className="min-h-[60vh] flex items-center justify-center text-[#B4C0BA] text-sm">Loading your invoice...</main>;
  }
  if (state === 'missing' || !data) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-3">
          <h1 className="font-serif-luxury text-2xl text-white">Invoice not found</h1>
          <p className="text-sm text-[#B4C0BA]">
            This invoice link is not valid. Please use the button in your invoice email, or contact us on WhatsApp {CONTACT.whatsapp}.
          </p>
        </div>
      </main>
    );
  }

  const paid = data.status === 'paid' || data.status === 'dispatched';
  const due = new Date(data.issued + REPLY.deadlineHours * 3600 * 1000).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  const issued = new Date(data.issued).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  const filled = data.lines.filter((l) => l.value.trim());
  const allText = `${PAY_METHOD_LABEL[data.method]}\nAmount: ${money(data.total)} AUD\n${filled.map((l) => `${l.label}: ${l.value}`).join('\n')}`;

  return (
    <main className="px-3 sm:px-4 py-8 bg-[#F4F0EA] min-h-screen">
      <div className="max-w-[640px] mx-auto bg-white rounded-2xl overflow-hidden border border-[#EAE3DC] shadow-sm text-[#1A1414]">
        <div className="bg-[#0D1512] border-b-[3px] border-[#C5A059] px-5 sm:px-8 py-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#1C1A14] border-2 border-[#D4AF37] flex items-center justify-center font-serif-luxury font-bold text-2xl text-[#D4AF37] shrink-0">P</div>
          <div className="flex-1 min-w-0">
            <div className="font-serif-luxury font-bold text-white tracking-wider uppercase text-base sm:text-lg leading-tight">{SITE.name}</div>
            <div className="text-[11px] text-[#C5A059] mt-1">{REPLY.headerTagline}</div>
          </div>
          <h1 className="font-serif-luxury font-bold text-[#C5A059] tracking-[3px] text-lg sm:text-xl">INVOICE</h1>
        </div>

        <div className="px-5 sm:px-8 py-6 space-y-6">
          {paid && (
            <div className="rounded-xl bg-[#E8F5EC] border border-[#56C48B] p-4 text-sm font-semibold text-[#1E6B3E]">
              Payment received - thank you. Your order is confirmed and being prepared for dispatch.
            </div>
          )}

          <div className="flex flex-wrap justify-between gap-4 text-sm">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] mb-1">Billed to</div>
              <div className="font-bold">{data.customerName}</div>
              <div className="whitespace-pre-wrap text-[#3A322C]">{data.address}</div>
            </div>
            <div className="text-right space-y-0.5">
              <div><span className="text-[#6F665F]">Invoice no.</span> <strong className="font-mono">{data.ref}</strong></div>
              <div><span className="text-[#6F665F]">Issued</span> <strong>{issued}</strong></div>
              <div><span className="text-[#6F665F]">Payment due</span> <strong>{due}</strong></div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10.5px] uppercase tracking-wider text-[#C5A059] border-b-2 border-[#C5A059]">
                  <th className="text-left py-2 font-bold">Item</th>
                  <th className="text-center py-2 font-bold">Qty</th>
                  <th className="text-right py-2 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((i, idx) => (
                  <tr key={idx} className="border-b border-[#EAE3DC]">
                    <td className="py-2.5 pr-2">{i.name}</td>
                    <td className="py-2.5 text-center font-mono">{i.quantity}</td>
                    <td className="py-2.5 text-right font-mono whitespace-nowrap">{money(i.price * i.quantity)}</td>
                  </tr>
                ))}
                <tr><td colSpan={2} className="pt-3 text-right text-[#6F665F] pr-3">Subtotal</td><td className="pt-3 text-right font-mono">{money(data.subtotal)}</td></tr>
                <tr><td colSpan={2} className="text-right text-[#6F665F] pr-3">Shipping</td><td className="text-right font-mono">{data.shippingFee > 0 ? money(data.shippingFee) : 'FREE'}</td></tr>
                {data.discount > 0 && (
                  <tr><td colSpan={2} className="text-right text-[#6F665F] pr-3">Crypto discount</td><td className="text-right font-mono">-{money(data.discount)}</td></tr>
                )}
                <tr className="border-t-2 border-[#C5A059]">
                  <td colSpan={2} className="pt-3 text-right font-bold uppercase text-xs tracking-wider pr-3">Total due (AUD)</td>
                  <td className="pt-3 text-right font-mono font-bold text-xl text-[#B08A3A]">{money(data.total)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center rounded-lg bg-[#FDFBF7] border border-[#ECE5DC] px-3 py-3 text-xs leading-relaxed text-[#3A322C]">
            <strong>{SITE.name}</strong> · <strong>{REPLY.bizNumber.label} {REPLY.bizNumber.value}</strong>
            <br />
            {CONTACT.address} · <span dangerouslySetInnerHTML={{ __html: CONTACT.email }} />
          </div>

          <section aria-labelledby="pay-heading" className="space-y-3">
            <h2 id="pay-heading" className="font-serif-luxury text-lg font-bold">
              Pay by {PAY_METHOD_LABEL[data.method]}
            </h2>
            <p className="text-sm text-[#3A322C]">Tap <strong>Copy</strong> beside each line, then paste it into your banking or wallet app. Use the QR button to scan a value instead.</p>

            <div className="rounded-xl border-2 border-[#C5A059] bg-[#FDFBF7] px-4">
              <div className="py-3 border-b border-[#EAE3DC]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6F665F] mb-1">Amount to pay (AUD)</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 font-mono text-xl font-bold text-[#B08A3A]">{money(data.total)}</div>
                  <CopyButton text={data.total.toFixed(2)} />
                </div>
              </div>
              {filled.map((l, i) => (
                <LineRow key={`${l.label}-${i}`} line={l} autoQr={data.method === 'crypto' && l.label.trim().toLowerCase() !== 'reference'} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <CopyButton text={allText} label="Copy all details" big />
              <button
                type="button"
                onClick={() => setShowAllQr((v) => !v)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-[#C5A059] text-[#8A6B25] text-sm font-bold"
              >
                <QrCode className="w-4 h-4" /> {showAllQr ? 'Hide QR code' : 'Show QR code (all details)'}
              </button>
            </div>
            {showAllQr && (
              <div className="flex justify-center pt-1">
                <QrImage value={allText} />
              </div>
            )}

            {data.note && <p className="text-sm text-[#3A322C] whitespace-pre-wrap rounded-lg bg-[#F8F6F2] border-l-[3px] border-[#C5A059] p-3">{data.note}</p>}
          </section>

          {!paid && (
            <section className="rounded-xl bg-[#F8F6F2] border border-[#ECE5DC] p-4 space-y-3 text-center">
              {notified ? (
                <p className="text-sm font-semibold text-[#1E6B3E]">
                  Thank you - we have your payment notification. We will confirm it shortly and email you when your order is dispatched.
                </p>
              ) : (
                <>
                  <p className="text-sm text-[#3A322C]">Already sent the payment? Let us know so we can confirm it and dispatch faster.</p>
                  <button
                    type="button"
                    onClick={notifyPaid}
                    disabled={busy}
                    className="w-full px-4 py-3 rounded-lg bg-[#0D1512] text-[#E5C378] font-bold text-sm border border-[#C5A059] disabled:opacity-60"
                  >
                    {busy ? 'Sending...' : 'I have made the payment'}
                  </button>
                </>
              )}
            </section>
          )}

          <section className="rounded-xl bg-[#FAF8F5] border border-[#ECE5DC] p-4">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#6F665F] mb-2">Important notice &amp; terms</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-[#2A221C]">
              {paymentTermsLines(data.ref, data.method).map((line, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </ul>
          </section>

          <p className="text-[11px] leading-relaxed text-center text-[#6F665F] flex items-start gap-1.5 justify-center">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#C5A059]" />
            <span>
              All products are non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};