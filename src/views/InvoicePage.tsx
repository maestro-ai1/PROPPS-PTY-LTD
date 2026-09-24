'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Copy, Check, QrCode, Upload, MessageCircle } from 'lucide-react';
import { SITE, CONTACT, REPLY } from '../config/site.js';
import { PAY_METHOD_LABEL, type PayLine, type PayMethodId } from '../lib/payment.js';
import { paymentTermsLines, paymentConfirmLine, paymentWhatsAppLink, encodeAt } from '../lib/order.js';

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
const MAX_BYTES = 4 * 1024 * 1024;

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

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
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
      className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg px-3 text-xs font-bold transition-colors ${
        done ? 'bg-[#2E7D4F] text-white' : 'bg-[#C5A059] text-[#0D1512] hover:bg-[#D4AF37]'
      }`}
      aria-label={`Copy ${text}`}
    >
      {done ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {done ? 'Copied' : 'Copy'}
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
    <img src={src} alt="QR code" width={190} height={190} className="rounded-lg border border-[#E6DED3] bg-white p-2" />
  ) : null;
};

const LineRow: React.FC<{ line: PayLine; autoQr?: boolean }> = ({ line, autoQr }) => {
  const [showQr, setShowQr] = useState(Boolean(autoQr));
  return (
    <div className="border-b border-[#EAE3DC] py-2.5 last:border-b-0">
      {line.label && <div className="mb-0.5 text-[11px] font-bold uppercase tracking-wider text-[#6F665F]">{line.label}</div>}
      <div className="flex items-center gap-2">
        <div className="min-w-0 flex-1 select-all break-all font-mono text-[14px] font-semibold text-[#1A1414]">{line.value}</div>
        <button
          type="button"
          onClick={() => setShowQr((v) => !v)}
          className="inline-flex min-h-10 shrink-0 items-center gap-1 rounded-lg border border-[#C5A059] px-2.5 text-xs font-bold text-[#8A6B25]"
          aria-expanded={showQr}
        >
          <QrCode className="h-4 w-4" /> QR
        </button>
        <CopyButton text={line.value} />
      </div>
      {showQr && (
        <div className="mt-2 flex flex-col items-center gap-1">
          <QrImage value={line.value} />
          {line.label && <span className="text-[11px] text-[#6F665F]">Scan to pay {line.label}</span>}
        </div>
      )}
    </div>
  );
};

const Heading: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="border-b-2 border-[#C5A059] pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#B08A3A]">
    {children}
  </h2>
);

export const InvoicePageContent: React.FC = () => {
  const [token, setToken] = useState('');
  const [data, setData] = useState<InvoiceData | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [upload, setUpload] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [uploadMsg, setUploadMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

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
        if (json.paymentNotified) setUpload('done');
        setState('ready');
      })
      .catch(() => setState('missing'));
  }, []);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (file.size > MAX_BYTES) {
      setUpload('error');
      setUploadMsg('That file is over 4 MB. Please use a smaller screenshot, or the WhatsApp button.');
      return;
    }
    setUpload('sending');
    setUploadMsg('');
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch(`/api/invoice/${encodeURIComponent(token)}/proof/`, { method: 'POST', body });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setUpload('done');
      } else {
        setUpload('error');
        setUploadMsg(json.error || 'Upload failed. Please use the WhatsApp button.');
      }
    } catch {
      setUpload('error');
      setUploadMsg('Network problem. Please try again, or use the WhatsApp button.');
    }
  };

  if (state === 'loading') {
    return <main className="flex min-h-[60vh] items-center justify-center text-sm text-[#B4C0BA]">Loading your invoice...</main>;
  }
  if (state === 'missing' || !data) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md space-y-3 text-center">
          <h1 className="font-serif-luxury text-2xl text-white">Invoice not found</h1>
          <p className="text-sm text-[#B4C0BA]">
            This invoice link is not valid. Please use the button in your invoice email, or contact us on WhatsApp {CONTACT.whatsapp}.
          </p>
        </div>
      </main>
    );
  }

  const paid = data.status === 'paid' || data.status === 'dispatched';
  const filled = data.lines.filter((l) => l.value.trim());
  const waUrl = paymentWhatsAppLink(data.ref, data.total);

  return (
    <main className="min-h-screen bg-[#F4F0EA] px-3 py-6 sm:px-4">
      <div className="mx-auto max-w-[560px] overflow-hidden rounded-2xl border border-[#EAE3DC] bg-white text-[#1A1414] shadow-sm">
        <div className="flex items-center gap-3 border-b-[3px] border-[#C5A059] bg-[#0D1512] px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#D4AF37] bg-[#1C1A14] font-serif-luxury text-xl font-bold text-[#D4AF37]">P</div>
          <div className="min-w-0 flex-1">
            <div className="font-serif-luxury text-[15px] font-bold uppercase leading-tight tracking-wider text-white">{SITE.name}</div>
            <div className="mt-0.5 text-[10.5px] text-[#C5A059]">{REPLY.headerTagline}</div>
          </div>
          <h1 className="font-serif-luxury text-base font-bold tracking-[2px] text-[#C5A059]">INVOICE</h1>
        </div>

        <div className="space-y-5 px-5 py-5">
          {paid && (
            <div className="rounded-xl border border-[#56C48B] bg-[#E8F5EC] p-3 text-sm font-semibold text-[#1E6B3E]">
              Payment received - thank you. Your order is confirmed and being prepared for dispatch.
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 rounded-xl border border-[#ECE5DC] bg-[#FDFBF7] p-4">
            <div>
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#6F665F]">Order number</div>
              <div className="mt-0.5 break-all font-mono text-lg font-bold">{data.ref}</div>
            </div>
            <div className="text-right">
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#6F665F]">Amount due</div>
              <div className="mt-0.5 font-mono text-xl font-bold text-[#B08A3A]">
                {money(data.total)} <span className="text-xs">AUD</span>
              </div>
            </div>
          </div>

          <div className="text-[12.5px] text-[#3A322C]">
            {data.items.map((i, idx) => (
              <div key={idx} className="flex justify-between gap-3 py-0.5">
                <span>
                  {i.quantity} &times; {i.name}
                </span>
                <span className="whitespace-nowrap font-mono">{money(i.price * i.quantity)}</span>
              </div>
            ))}
            <div className="flex justify-between gap-3 py-0.5 text-[12px] text-[#6F665F]">
              <span>Shipping</span>
              <span className="font-mono">{data.shippingFee > 0 ? money(data.shippingFee) : 'FREE'}</span>
            </div>
            {data.discount > 0 && (
              <div className="flex justify-between gap-3 py-0.5 text-[12px] text-[#6F665F]">
                <span>Crypto discount</span>
                <span className="font-mono">-{money(data.discount)}</span>
              </div>
            )}
            <div className="mt-3 text-[11.5px] text-[#6F665F]">
              <strong className="text-[#3A322C]">{SITE.name}</strong> · {REPLY.bizNumber.label} {REPLY.bizNumber.value} · {CONTACT.hq}
            </div>
          </div>

          <section aria-labelledby="pay-heading" className="space-y-2">
            <Heading id="pay-heading">Pay by {PAY_METHOD_LABEL[data.method]}</Heading>
            <p className="text-[13px] text-[#3A322C]">
              Please pay exactly <strong>{money(data.total)} AUD</strong> using the details below. Tap Copy beside each line.
            </p>
            <div className="rounded-xl border-l-[3px] border-[#C5A059] bg-[#F8F6F2] px-4">
              <div className="flex items-center gap-2 border-b border-[#EAE3DC] py-2.5">
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#6F665F]">Amount (AUD)</div>
                  <div className="font-mono text-[15px] font-bold text-[#B08A3A]">{money(data.total)}</div>
                </div>
                <CopyButton text={data.total.toFixed(2)} />
              </div>
              {filled.map((l, i) => (
                <LineRow key={`${l.label}-${i}`} line={l} autoQr={data.method === 'crypto' && l.label.trim().toLowerCase() !== 'reference'} />
              ))}
            </div>
            {data.note && <p className="whitespace-pre-wrap text-[13px] text-[#3A322C]">{data.note}</p>}
          </section>

          <section aria-labelledby="ships-heading" className="space-y-2">
            <Heading id="ships-heading">Before your order ships</Heading>
            <ul className="list-disc space-y-1 pl-5 text-[13px] text-[#2A221C]">
              {paymentTermsLines(data.ref, data.method).map((line, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: encodeAt(line) }} />
              ))}
            </ul>
          </section>

          {!paid && (
            <section id="confirm" aria-labelledby="confirm-heading" className="space-y-3">
              <Heading id="confirm-heading">Confirm your payment</Heading>
              <p className="text-[13px] text-[#3A322C]" dangerouslySetInnerHTML={{ __html: encodeAt(paymentConfirmLine()) }} />

              {upload === 'done' ? (
                <div className="rounded-xl border border-[#56C48B] bg-[#E8F5EC] p-3 text-sm font-semibold text-[#1E6B3E]">
                  Thank you - we have your payment confirmation. We will verify it and email you when your order is dispatched.
                </div>
              ) : (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input ref={fileRef} type="file" accept="image/*,application/pdf" onChange={onFile} className="sr-only" aria-label="Upload payment confirmation" />
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    disabled={upload === 'sending'}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#C5A059] px-4 text-sm font-bold text-[#0D1512] hover:bg-[#D4AF37] disabled:opacity-60"
                  >
                    <Upload className="h-4 w-4" />
                    {upload === 'sending' ? 'Uploading...' : 'Upload confirmation'}
                  </button>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold text-[#06210F]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Confirm via WhatsApp
                  </a>
                </div>
              )}
              {upload === 'error' && <p className="text-sm font-semibold text-[#B3261E]">{uploadMsg}</p>}
              {upload === 'done' && (
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block text-center text-xs font-semibold text-[#1E6B3E] underline">
                  Also message us on WhatsApp
                </a>
              )}
            </section>
          )}

          <p className="text-center text-[11px] leading-relaxed text-[#6F665F]">
            Non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
          </p>
        </div>
      </div>
    </main>
  );
};
