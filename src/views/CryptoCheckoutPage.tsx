'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Upload, MessageCircle, Copy, Check, AlertTriangle } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';
import { paymentWhatsAppLink } from '../lib/order.js';

const MAX_BYTES = 4 * 1024 * 1024;

interface Info {
  ref: string;
  total: number;
  discount: number;
  status: string;
  paymentNotified: boolean;
  wallets: { btc: string; usdtTrc20: string; usdtErc20: string };
}

type CoinId = 'btc' | 'usdtTrc20' | 'usdtErc20';

const COINS: { id: CoinId; tab: string; name: string; network: string; warning: string }[] = [
  { id: 'btc', tab: 'Bitcoin', name: 'Bitcoin (BTC)', network: 'Bitcoin network', warning: 'Send only Bitcoin (BTC) to this address.' },
  { id: 'usdtTrc20', tab: 'USDT TRC20', name: 'USDT (Tether)', network: 'TRON network (TRC20)', warning: 'Send only USDT on the TRON (TRC20) network. Other networks will be lost.' },
  { id: 'usdtErc20', tab: 'USDT ERC20', name: 'USDT (Tether)', network: 'Ethereum network (ERC20)', warning: 'Send only USDT on the Ethereum (ERC20) network. Other networks will be lost.' },
];

const money = (n: number) => `$${Number(n).toFixed(2)} AUD`;

export const CryptoCheckoutContent: React.FC = () => {
  const [token, setToken] = useState('');
  const [info, setInfo] = useState<Info | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [coin, setCoin] = useState<CoinId>('btc');
  const [qr, setQr] = useState('');
  const [copied, setCopied] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('t') || '';
    setToken(t);
    if (!t) {
      setState('missing');
      return;
    }
    fetch(`/api/order/crypto/?t=${encodeURIComponent(t)}`, { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error('missing');
        const json = (await res.json()) as Info;
        setInfo(json);
        if (json.paymentNotified) setDone(true);
        setState('ready');
      })
      .catch(() => setState('missing'));
  }, []);

  const address = info?.wallets[coin] ?? '';
  useEffect(() => {
    if (!address) return;
    let live = true;
    QRCode.toDataURL(address, { margin: 1, width: 260, errorCorrectionLevel: 'M' })
      .then((u) => live && setQr(u))
      .catch(() => live && setQr(''));
    return () => {
      live = false;
    };
  }, [address]);

  useEffect(() => {
    if (!file || !/^image\/(jpeg|png|webp)$/.test(file.type)) {
      setPreviewUrl('');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = address;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    e.target.value = '';
    setError('');
    if (f && f.size > MAX_BYTES) {
      setFile(null);
      setError('That file is over 4 MB. Please choose a smaller screenshot.');
      return;
    }
    setFile(f);
  };

  const send = async () => {
    if (!file) {
      setError('Please choose your payment screenshot first.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const body = new FormData();
      body.append('file', file);
      body.append('note', `Paid with ${COINS.find((c) => c.id === coin)?.tab}`);
      const res = await fetch(`/api/invoice/${encodeURIComponent(token)}/proof/`, { method: 'POST', body });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) setDone(true);
      else setError(json.error || 'Upload failed. Please use the WhatsApp button below.');
    } catch {
      setError('Network problem. Please try again, or use the WhatsApp button below.');
    } finally {
      setSending(false);
    }
  };

  if (state === 'loading') {
    return <main className="flex min-h-[60vh] items-center justify-center text-sm text-[#6F665F]">Loading your crypto payment...</main>;
  }
  if (state === 'missing' || !info) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md space-y-3 text-center">
          <h1 className="font-serif-luxury text-2xl text-[#1A1414]">Payment link not valid</h1>
          <p className="text-sm text-[#6F665F]">
            Please use the button in your order email, or message us on WhatsApp {CONTACT.whatsapp}.
          </p>
        </div>
      </main>
    );
  }

  const paid = info.status === 'paid' || info.status === 'dispatched';
  const active = COINS.find((c) => c.id === coin)!;
  const wa = paymentWhatsAppLink(info.ref, info.total);

  return (
    <main className="px-3 py-6 sm:px-4">
      <div className="mx-auto max-w-md space-y-5 rounded-3xl border border-[#EAE3DC] bg-white p-5 shadow-sm sm:p-7">
        <div className="space-y-2 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{SITE.name}</div>
          <h1 className="font-serif-luxury text-2xl font-bold leading-tight text-[#1A1414] sm:text-3xl">Pay with Crypto</h1>
          <div className="text-sm text-[#6F665F]">
            Order <strong className="font-mono text-[#1A1414]">{info.ref}</strong>
          </div>
        </div>

        <div className="rounded-2xl border border-[#ECE5DC] bg-[#FDFBF7] p-4 text-center">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#6F665F]">Amount to pay</div>
          <div className="mt-1 font-mono text-2xl font-bold text-[#B08A3A]">{money(info.total)}</div>
          {info.discount > 0 && <div className="mt-1 text-xs text-[#00b67a]">10% crypto discount applied (-{money(info.discount)})</div>}
          <p className="mt-2 text-xs text-[#6F665F]">Send the crypto equivalent of this AUD amount at the current rate.</p>
        </div>

        {paid ? (
          <div className="rounded-2xl border border-[#00b67a] bg-[#F1F9F5] p-4 text-center text-sm font-semibold text-[#00b67a]">
            Payment received - thank you. Your order is confirmed and being prepared for dispatch.
          </div>
        ) : done ? (
          <div className="rounded-2xl border border-[#00b67a] bg-[#F1F9F5] p-5 text-center text-sm font-semibold leading-relaxed text-[#00b67a]">
            Thank you - we have your payment screenshot. We will verify it and email you a confirmation.
          </div>
        ) : (
          <>
            <section aria-label="Choose cryptocurrency" className="space-y-3">
              <div role="tablist" className="grid grid-cols-3 gap-1 rounded-xl bg-[#F4F0EA] p-1">
                {COINS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={coin === c.id}
                    onClick={() => {
                      setCoin(c.id);
                      setQr('');
                      setCopied(false);
                    }}
                    className={`min-h-11 rounded-lg px-1 text-xs font-bold transition-colors sm:text-sm ${
                      coin === c.id ? 'bg-[#D4AF37] text-white shadow' : 'text-[#6F665F] hover:text-[#1A1414]'
                    }`}
                  >
                    {c.tab}
                  </button>
                ))}
              </div>

              <div className="space-y-3 text-center">
                <div className="text-sm font-semibold text-[#1A1414]">
                  {active.name} <span className="font-normal text-[#6F665F]">- {active.network}</span>
                </div>
                <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center rounded-xl border border-[#E6DED3] bg-white p-2">
                  {qr ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qr} alt={`${active.tab} payment QR code`} width={200} height={200} />
                  ) : (
                    <span className="text-xs text-[#6F665F]">Generating QR...</span>
                  )}
                </div>
                <div className="break-all rounded-xl border border-[#EAE3DC] bg-[#F9F7F2] px-3 py-3 font-mono text-[13px] text-[#1A1414] select-all">
                  {address}
                </div>
                <button
                  type="button"
                  onClick={copy}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1A1414] px-4 text-sm font-bold text-white hover:bg-[#2A2222]"
                >
                  {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  {copied ? 'Address copied' : 'Copy address'}
                </button>
                <div className="flex items-start gap-2 rounded-xl bg-[#FFF8E6] p-3 text-left text-xs text-[#6B5420]">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{active.warning}</span>
                </div>
              </div>
            </section>

            <section aria-label="Upload payment screenshot" className="space-y-3 border-t border-[#EAE3DC] pt-5">
              <h2 className="text-center font-serif-luxury text-lg font-bold text-[#1A1414]">After paying, upload your screenshot</h2>
              <input ref={fileRef} type="file" accept="image/*,application/pdf,.heic" onChange={onPick} className="sr-only" aria-label="Choose payment screenshot" />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex min-h-36 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#EAE3DC] px-4 py-5 text-center transition-colors hover:border-[#D4AF37]"
              >
                {previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="Selected payment screenshot" className="max-h-40 rounded-lg object-contain" />
                ) : (
                  <Upload className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
                )}
                <span className="break-all text-sm text-[#1A1414]">{file ? file.name : 'Tap to choose a screenshot'}</span>
                <span className="text-xs text-[#6F665F]">JPG, PNG, WebP, HEIC or PDF - up to 4MB</span>
              </button>
              {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
              <button
                type="button"
                onClick={send}
                disabled={sending}
                className="min-h-14 w-full rounded-2xl bg-[#D4AF37] px-4 text-base font-bold text-white shadow-md hover:bg-[#C5A059] disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'I have paid - send screenshot'}
              </button>
            </section>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-bold text-white shadow-sm hover:bg-[#20BA5A]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Need help? WhatsApp us
            </a>
          </>
        )}

        <p className="text-center text-[11px] leading-relaxed text-[#6F665F]">
          Non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
        </p>
      </div>
    </main>
  );
};
