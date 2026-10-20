'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShieldCheck, Truck, AlertCircle, MessageCircle, Coins } from 'lucide-react';
import { SHOP } from '../config/site.js';
import { StoredOrder, generateOrderRef } from '../lib/order.js';
import { waOrderLink } from '../lib/whatsapp.js';
import { saveOrder } from '../lib/orderStore.js';
import { useApp } from '../context/AppContext.js';

type PayId = 'bank-transfer' | 'payid' | 'crypto';

const STATES = ['VIC', 'NSW', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
const field =
  'w-full rounded-xl border border-[#EAE3DC] bg-white px-3 py-2.5 text-base text-[#1A1414] placeholder-[#A8A49D] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]';
const label = 'mb-1 block text-xs font-bold text-[#3A322C]';

const PAYMENTS: { id: PayId; name: string; hint: string }[] = [
  { id: 'payid', name: 'PayID', hint: 'Instant transfer. Payment details emailed after you order.' },
  { id: 'bank-transfer', name: 'Bank transfer (EFT / Osko)', hint: 'Direct deposit from any Australian bank. Details emailed after you order.' },
  { id: 'crypto', name: 'Crypto: save 10%', hint: 'Bitcoin or USDT. You pay on the next page, discount applied automatically.' },
];

export const CheckoutContent: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, onOrderCompleted } = useApp();
  const [payment, setPayment] = useState<PayId>('payid');
  const [form, setForm] = useState({ name: '', email: '', phone: '', street: '', suburb: '', state: 'VIC', postcode: '' });
  const [submitting, setSubmitting] = useState<'email' | 'whatsapp' | null>(null);
  const [error, setError] = useState('');
  const [finished, setFinished] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const refRef = useRef<string | null>(null);

  const subtotal = cart.reduce((a, i) => a + i.price * i.quantity, 0);
  const belowMin = subtotal > 0 && subtotal < SHOP.minOrder;
  const shippingFee = subtotal >= SHOP.freeShippingThreshold || subtotal === 0 ? 0 : SHOP.shippingFee;
  const toFree = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const discount = payment === 'crypto' ? Math.round(subtotal * (SHOP.cryptoDiscount / 100)) : 0;
  const total = subtotal + shippingFee - discount;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildOrder = (channel: 'whatsapp' | 'email'): StoredOrder => {
    if (!refRef.current) refRef.current = generateOrderRef();
    return {
      id: `ord_${Date.now()}`,
      ref: refRef.current,
      date: new Date().toISOString(),
      customerName: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: `${form.street.trim()}, ${form.suburb.trim()} ${form.state} ${form.postcode.trim()}`,
      city: '',
      state: '',
      postcode: '',
      items: cart,
      subtotal,
      shippingFee,
      discount,
      total,
      paymentMethod: payment,
      channel,
      status: 'pending',
      createdAt: Date.now(),
    };
  };

  const submit = async (channel: 'whatsapp' | 'email') => {
    if (submitting || belowMin || !cart.length) return;
    if (!formRef.current?.reportValidity()) return;
    setError('');
    const order = buildOrder(channel);
    // The WhatsApp chat must open inside the click so pop-up blockers allow it.
    if (channel === 'whatsapp') window.open(waOrderLink(order), '_blank');
    setSubmitting(channel);
    const result = await saveOrder(order);
    if (!result.ok) {
      setSubmitting(null);
      setError(result.error || 'Your order could not be sent. Please try again, or use WhatsApp Order.');
      return;
    }
    setFinished(true);
    refRef.current = null;
    clearCart();
    onOrderCompleted({ ...order, ref: result.ref || order.ref, confirmToken: result.token });
  };

  if (finished) {
    return <main className="flex min-h-[50vh] items-center justify-center px-4 text-sm text-[#6F665F]">Placing your order...</main>;
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="font-serif-luxury text-2xl font-bold text-[#1A1414]">Your cart is empty</h1>
        <p className="mt-2 text-sm text-[#6F665F]">Add some prop currency and come back to check out.</p>
        <Link href="/shop/" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-[#D4AF37] px-6 text-sm font-bold text-white hover:bg-[#C5A059]">
          Browse the shop
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="font-serif-luxury text-2xl font-bold tracking-tight text-[#1A1414] sm:text-3xl">Checkout</h1>
      <p className="mt-1 text-sm text-[#6F665F]">Enter your details, choose how to pay and place your order. No account needed.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            submit('email');
          }}
          className="space-y-5"
          aria-label="Checkout"
        >
          <section aria-labelledby="co-contact" className="rounded-2xl border border-[#EAE3DC] bg-white p-4 sm:p-5">
            <h2 id="co-contact" className="font-serif-luxury text-base font-bold text-[#1A1414]">Contact</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="co-name" className={label}>Full name *</label>
                <input id="co-name" required autoComplete="name" value={form.name} onChange={set('name')} className={field} />
              </div>
              <div>
                <label htmlFor="co-email" className={label}>Email *</label>
                <input id="co-email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={field} />
              </div>
              <div>
                <label htmlFor="co-phone" className={label}>Mobile phone *</label>
                <input id="co-phone" type="tel" required autoComplete="tel" value={form.phone} onChange={set('phone')} className={field} />
              </div>
            </div>
          </section>

          <section aria-labelledby="co-ship" className="rounded-2xl border border-[#EAE3DC] bg-white p-4 sm:p-5">
            <h2 id="co-ship" className="font-serif-luxury text-base font-bold text-[#1A1414]">Delivery address</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="co-street" className={label}>Street address and unit *</label>
                <input id="co-street" required autoComplete="address-line1" value={form.street} onChange={set('street')} className={field} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="co-suburb" className={label}>Suburb *</label>
                <input id="co-suburb" required autoComplete="address-level2" value={form.suburb} onChange={set('suburb')} className={field} />
              </div>
              <div>
                <label htmlFor="co-state" className={label}>State *</label>
                <select id="co-state" value={form.state} onChange={set('state')} className={field}>
                  {STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="co-postcode" className={label}>Postcode *</label>
                <input id="co-postcode" required inputMode="numeric" pattern="[0-9]{4}" maxLength={4} autoComplete="postal-code" value={form.postcode} onChange={set('postcode')} className={field} />
              </div>
            </div>
          </section>

          <section aria-labelledby="co-pay" className="rounded-2xl border border-[#EAE3DC] bg-white p-4 sm:p-5">
            <h2 id="co-pay" className="font-serif-luxury text-base font-bold text-[#1A1414]">Payment method</h2>
            <div role="radiogroup" aria-labelledby="co-pay" className="mt-3 space-y-2">
              {PAYMENTS.map((p) => (
                <label
                  key={p.id}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm ${
                    payment === p.id ? 'border-[#D4AF37] bg-[#FDFBF7] ring-1 ring-[#D4AF37]' : 'border-[#EAE3DC] hover:bg-[#F9F7F2]'
                  }`}
                >
                  <input type="radio" name="payment" value={p.id} checked={payment === p.id} onChange={() => setPayment(p.id)} className="h-4 w-4 accent-[#D4AF37]" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-[#1A1414]">{p.name}</span>
                    <span className="block text-xs text-[#6F665F]">{p.hint}</span>
                  </span>
                  {p.id === 'crypto' && <Coins className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />}
                </label>
              ))}
            </div>
          </section>

          {error && (
            <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </p>
          )}

          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="submit"
              disabled={!!submitting || belowMin}
              className="min-h-12 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] px-4 text-sm font-bold uppercase tracking-wide text-white hover:from-[#C5A059] hover:to-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting === 'email' ? 'Placing your order...' : `Place order · $${total.toFixed(2)} AUD`}
            </button>
            <button
              type="button"
              disabled={!!submitting || belowMin}
              onClick={() => submit('whatsapp')}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#20BA5A] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {submitting === 'whatsapp' ? 'Placing your order...' : 'Order via WhatsApp'}
            </button>
          </div>
        </form>

        <aside aria-label="Order summary" className="h-fit rounded-2xl border border-[#EAE3DC] bg-[#F9F7F2] p-4 sm:p-5 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-luxury text-base font-bold text-[#1A1414]">Your order</h2>
            <button type="button" onClick={clearCart} className="text-xs font-semibold text-[#6F665F] hover:text-red-600">Clear</button>
          </div>

          <ul className="mt-3 space-y-3">
            {cart.map((i) => (
              <li key={i.slug} className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug text-[#1A1414]">{i.name}</p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-[#EAE3DC] bg-white">
                      <button type="button" onClick={() => updateQuantity(i.slug, -1)} className="flex h-9 w-9 items-center justify-center text-[#6F665F] hover:text-[#1A1414]" aria-label={`Decrease quantity of ${i.name}`}>
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold" aria-live="polite">{i.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(i.slug, 1)} className="flex h-9 w-9 items-center justify-center text-[#6F665F] hover:text-[#1A1414]" aria-label={`Increase quantity of ${i.name}`}>
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#1A1414]">${(i.price * i.quantity).toLocaleString()}</span>
                  </div>
                </div>
                <button type="button" onClick={() => removeFromCart(i.slug)} className="p-1.5 text-[#6F665F] hover:text-red-600" aria-label={`Remove ${i.name}`}>
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-1.5 border-t border-[#EAE3DC] pt-3 text-sm">
            <div className="flex justify-between"><dt className="text-[#6F665F]">Subtotal</dt><dd className="font-semibold">${subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt className="text-[#6F665F]">Express Australia Post</dt><dd className={shippingFee === 0 ? 'font-bold text-[#00b67a]' : 'font-semibold'}>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</dd></div>
            {discount > 0 && <div className="flex justify-between font-semibold text-[#B08A3A]"><dt>Crypto discount (10%)</dt><dd>-${discount.toFixed(2)}</dd></div>}
            <div className="flex justify-between border-t border-[#EAE3DC] pt-2 text-base font-bold"><dt>Total (AUD)</dt><dd className="text-[#B08A3A]">${total.toFixed(2)}</dd></div>
          </dl>

          {belowMin && (
            <p role="status" className="mt-3 flex items-start gap-2 rounded-lg bg-amber-100 p-2.5 text-xs font-semibold text-amber-900">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Minimum order is ${SHOP.minOrder} AUD. Add ${(SHOP.minOrder - subtotal).toLocaleString()} more to place it.
            </p>
          )}
          {!belowMin && toFree > 0 && (
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#3A322C]">
              <Truck className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />Add ${toFree.toLocaleString()} for free express shipping.
            </p>
          )}
          <p className="mt-3 flex items-start gap-2 text-xs text-[#6F665F]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#00b67a]" aria-hidden="true" />
            Dispatched from Melbourne VIC 3093 by Australia Post Express with signature on delivery.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-[#6F665F]">
            Non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
          </p>
        </aside>
      </div>
    </main>
  );
};
