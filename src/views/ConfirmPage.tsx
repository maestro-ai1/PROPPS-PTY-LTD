'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Upload, MessageCircle } from 'lucide-react';
import { SITE, CONTACT } from '../config/site.js';
import { paymentWhatsAppLink, encodeAt } from '../lib/order.js';

const MAX_BYTES = 4 * 1024 * 1024;

interface Info {
  ref: string;
  total: number;
  status: string;
}

export const ConfirmPageContent: React.FC = () => {
  const [token, setToken] = useState('');
  const [info, setInfo] = useState<Info | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [note, setNote] = useState('');
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
    fetch(`/api/invoice/${encodeURIComponent(t)}/`, { cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw new Error('missing');
        const json = await res.json();
        setInfo({ ref: json.ref, total: json.total, status: json.status });
        if (json.paymentNotified) setDone(true);
        setState('ready');
      })
      .catch(() => setState('missing'));
  }, []);

  useEffect(() => {
    if (!file || !/^image\/(jpeg|png|webp)$/.test(file.type)) {
      setPreviewUrl('');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

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
      if (note.trim()) body.append('note', note.trim());
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

  const wa = info ? paymentWhatsAppLink(info.ref, info.total) : `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`;
  const help = (
    <p className="text-center text-sm leading-relaxed text-[#B4986A]">
      Having trouble? Email <span dangerouslySetInnerHTML={{ __html: `<a class="underline" href="mailto:${encodeAt(CONTACT.email.replace('&#64;', '@'))}">${CONTACT.email}</a>` }} /> or{' '}
      <a className="underline" href={wa} target="_blank" rel="noopener noreferrer">
        WhatsApp {CONTACT.whatsapp}
      </a>
      .
    </p>
  );

  if (state === 'loading') {
    return <main className="flex min-h-[60vh] items-center justify-center text-sm text-[#B4C0BA]">Loading...</main>;
  }
  if (state === 'missing' || !info) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md space-y-3 text-center">
          <h1 className="font-serif-luxury text-2xl text-white">Link not valid</h1>
          <p className="text-sm text-[#B4C0BA]">
            Please use the button in your invoice email, or message us on WhatsApp {CONTACT.whatsapp}.
          </p>
        </div>
      </main>
    );
  }

  const paid = info.status === 'paid' || info.status === 'dispatched';

  return (
    <main className="px-4 py-8">
      <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-[#2C3E36] bg-[#0E1513] p-6 sm:p-8">
        <div className="space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">{SITE.name}</div>
          <h1 className="font-serif-luxury text-3xl font-bold leading-tight text-[#F3E3B5]">Confirm Your Payment</h1>
          <div className="text-lg text-[#C5A059]">
            Order <strong className="font-mono text-[#F8F6F0]">{info.ref}</strong>
          </div>
        </div>

        {paid ? (
          <div className="rounded-2xl border border-[#56C48B] bg-[#122A1E] p-4 text-center text-sm font-semibold text-[#56C48B]">
            Payment received - thank you. Your order is confirmed and being prepared for dispatch.
          </div>
        ) : done ? (
          <div className="rounded-2xl border border-[#56C48B] bg-[#122A1E] p-5 text-center text-sm font-semibold leading-relaxed text-[#56C48B]">
            Thank you - we have your payment confirmation. We will verify it and email you when your order is dispatched.
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#E5C378]">Payment screenshot</div>
              <input ref={fileRef} type="file" accept="image/*,application/pdf,.heic" onChange={onPick} className="sr-only" aria-label="Choose payment screenshot" />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#5A4A2A] px-4 py-6 text-center transition-colors hover:border-[#C5A059]"
              >
                {previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="Selected payment screenshot" className="max-h-44 rounded-lg object-contain" />
                ) : (
                  <Upload className="h-7 w-7 text-[#C5A059]" aria-hidden="true" />
                )}
                <span className="text-base text-[#F8F6F0]">{file ? file.name : 'Tap to choose a screenshot'}</span>
                <span className="text-xs text-[#8A7A55]">JPG, PNG, WebP, HEIC or PDF - up to 4MB</span>
              </button>
            </div>

            <div>
              <label htmlFor="proof-note" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#E5C378]">
                Note (optional)
              </label>
              <textarea
                id="proof-note"
                rows={3}
                maxLength={500}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Anything we should know..."
                className="w-full rounded-2xl border border-[#2C3E36] bg-[#0A0F0D] px-4 py-3 text-base text-[#F8F6F0] placeholder-[#66736D] focus:border-[#C5A059] focus:outline-none"
              />
            </div>

            {error && <p className="text-sm font-semibold text-[#E0533C]">{error}</p>}

            <button
              type="button"
              onClick={send}
              disabled={sending}
              className="min-h-14 w-full rounded-2xl bg-[#D4B13A] px-4 text-base font-bold text-[#0D1512] hover:bg-[#E5C24A] disabled:opacity-60"
            >
              {sending ? 'Sending...' : 'Send Payment Confirmation'}
            </button>
          </div>
        )}

        {!paid && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-bold text-[#06210F]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Or confirm via WhatsApp
          </a>
        )}

        {help}
      </div>
    </main>
  );
};