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
      <div className="mx-auto max-w-md space-y-6 rounded-3xl border border-[#EAE3DC] bg-white p-6 sm:p-8 shadow-sm">
        <div className="space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{SITE.name}</div>
          <h1 className="font-serif-luxury text-3xl font-bold leading-tight text-[#1A1414]">Confirm Your Payment</h1>
          <div className="text-lg text-[#D4AF37]">
            Order <strong className="font-mono text-[#1A1414]">{info.ref}</strong>
          </div>
        </div>

        {paid ? (
          <div className="rounded-2xl border border-[#00b67a] bg-[#F1F9F5] p-4 text-center text-sm font-semibold text-[#00b67a]">
            Payment received - thank you. Your order is confirmed and being prepared for dispatch.
          </div>
        ) : done ? (
          <div className="rounded-2xl border border-[#00b67a] bg-[#F1F9F5] p-5 text-center text-sm font-semibold leading-relaxed text-[#00b67a]">
            Thank you - we have your payment confirmation. We will verify it and email you when your order is dispatched.
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Payment screenshot</div>
              <input ref={fileRef} type="file" accept="image/*,application/pdf,.heic" onChange={onPick} className="sr-only" aria-label="Choose payment screenshot" />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#EAE3DC] px-4 py-6 text-center transition-colors hover:border-[#D4AF37]"
              >
                {previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="Selected payment screenshot" className="max-h-44 rounded-lg object-contain" />
                ) : (
                  <Upload className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
                )}
                <span className="text-base text-[#1A1414]">{file ? file.name : 'Tap to choose a screenshot'}</span>
                <span className="text-xs text-[#6F665F]">JPG, PNG, WebP, HEIC or PDF - up to 4MB</span>
              </button>
            </div>

            <div>
              <label htmlFor="proof-note" className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Note (optional)
              </label>
              <textarea
                id="proof-note"
                rows={3}
                maxLength={500}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Anything we should know..."
                className="w-full rounded-2xl border border-[#EAE3DC] bg-[#F9F7F2] px-4 py-3 text-base text-[#1A1414] placeholder-[#A8A49D] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

            <button
              type="button"
              onClick={send}
              disabled={sending}
              className="min-h-14 w-full rounded-2xl bg-[#D4AF37] px-4 text-base font-bold text-white hover:bg-[#C5A059] disabled:opacity-60 shadow-md"
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
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-bold text-white hover:bg-[#20BA5A] transition-colors shadow-sm"
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