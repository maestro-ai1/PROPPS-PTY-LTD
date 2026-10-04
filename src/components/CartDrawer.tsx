// src/components/CartDrawer.tsx
import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Truck,
  ShieldCheck,
  MessageCircle,
  CreditCard,
  ArrowRight,
  AlertCircle,
  Percent,
} from 'lucide-react';
import { SITE, SHOP, REPLY } from '../config/site.js';
import { StoredOrder, generateOrderRef } from '../lib/order.js';
import { waOrderLink } from '../lib/whatsapp.js';
import { saveOrder } from '../lib/orderStore.js';

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (slug: string, delta: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  onNavigateToOrderForm?: () => void;
  onOrderCompleted?: (order: StoredOrder) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  clearCart,
  onNavigateToOrderForm,
  onOrderCompleted,
}) => {
  const [checkoutMode, setCheckoutMode] = useState<'cart' | 'details'>('cart');
  const [selectedPayment, setSelectedPayment] = useState<'bank-transfer' | 'payid' | 'crypto'>('bank-transfer');

  // Customer form details (kept simple and brief - just what's needed to dispatch)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const minOrderMet = subtotal >= SHOP.minOrder;
  const minOrderRemaining = Math.max(0, SHOP.minOrder - subtotal);

  const freeShippingMet = subtotal >= SHOP.freeShippingThreshold;
  const freeShippingRemaining = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const shippingFee = freeShippingMet || subtotal === 0 ? 0 : SHOP.shippingFee;

  const isCrypto = selectedPayment === 'crypto';
  const cryptoDiscount = isCrypto ? Math.round(subtotal * (SHOP.cryptoDiscount / 100)) : 0;
  const finalTotal = subtotal + shippingFee - cryptoDiscount;

  if (!isOpen) return null;

  const FIELD_LABELS: Record<string, string> = {
    name: 'full name',
    phone: 'mobile phone',
    email: 'email address',
    address: 'delivery address',
  };

  // Returns true when the details are complete. Otherwise shows a summary right
  // above the buttons (the form itself scrolls out of view on small screens) and
  // scrolls to the first field that needs attention.
  const validateDetails = (requireEmail: boolean) => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) errors.phone = 'Contact number is required';
    const email = formData.email.trim();
    if (requireEmail && !email) {
      errors.email = 'Email is required so we can send your order confirmation and invoice';
    } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.address.trim()) errors.address = 'Delivery address is required';
    setFormErrors(errors);

    const keys = Object.keys(errors);
    if (keys.length > 0) {
      setSubmitError(`Please complete: ${keys.map((k) => FIELD_LABELS[k]).join(', ')}.`);
      requestAnimationFrame(() => {
        const first = document.querySelector<HTMLElement>('[data-invalid="true"]');
        first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        first?.focus({ preventScroll: true });
      });
      return false;
    }
    setSubmitError(null);
    return true;
  };

  const updateField = (field: 'name' | 'phone' | 'email' | 'address', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: '' }));
    setSubmitError(null);
  };

  const buildOrder = (channel: 'whatsapp' | 'email'): StoredOrder => ({
    id: `ord_${Date.now()}`,
    ref: generateOrderRef(),
    date: new Date().toISOString(),
    customerName: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    address: formData.address.trim(),
    city: '',
    state: '',
    postcode: '',
    items: cart,
    subtotal,
    shippingFee,
    discount: cryptoDiscount,
    total: finalTotal,
    paymentMethod: selectedPayment,
    channel,
    status: 'pending',
    createdAt: Date.now(),
  });

  // WhatsApp Checkout (Synchronous window.open rule)
  const handleWhatsAppCheckout = () => {
    if (!minOrderMet || isSubmitting) return;
    if (checkoutMode === 'cart') {
      setCheckoutMode('details');
      return;
    }
    if (!validateDetails(false)) return;

    const newOrder = buildOrder('whatsapp');

    // Mandatory WebForge Rule: window.open MUST be called synchronously
    window.open(waOrderLink(newOrder), '_blank');

    // Save the order, then show the "order placed" page with the order number.
    setIsSubmitting(true);
    saveOrder(newOrder)
      .then((result) => {
        clearCart();
        onOrderCompleted?.({ ...newOrder, ref: result.ref || newOrder.ref });
        onClose();
      })
      .finally(() => setIsSubmitting(false));
  };

  // Standard Email / Invoice Checkout
  const handleEmailCheckout = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (!minOrderMet || isSubmitting) return;
    if (checkoutMode === 'cart') {
      setCheckoutMode('details');
      return;
    }
    if (!validateDetails(true)) return;

    setIsSubmitting(true);
    setSubmitError(null);
    const newOrder = buildOrder('email');
    const result = await saveOrder(newOrder);
    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error || 'Your order could not be sent. Please try again, or use WhatsApp Order.');
      return;
    }
    clearCart();
    onOrderCompleted?.({ ...newOrder, ref: result.ref || newOrder.ref });
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white text-[#1A1414] h-full flex flex-col shadow-2xl border-l border-[#EAE3DC]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#EAE3DC] flex items-center justify-between bg-[#F9F7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#1A1414] tracking-wide">
                PRODUCTION ORDER CART
              </h3>
              <p className="text-[11px] font-mono-code text-[#6F665F]">
                {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'} RESERVED
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6F665F] hover:text-[#1A1414] rounded-lg hover:bg-[#EAE3DC]/50 transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Threshold Progress Banners */}
        <div className="px-5 py-3 bg-white border-b border-[#EAE3DC] space-y-2 text-xs">
          {/* Min Order Check */}
          {!minOrderMet ? (
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Minimum order is <strong>${SHOP.minOrder} AUD</strong>. Add{' '}
                <strong>${minOrderRemaining} AUD</strong> more to proceed.
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#00b67a]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Minimum order threshold reached (${SHOP.minOrder} AUD).</span>
            </div>
          )}

          {/* Free Shipping Check */}
          <div className="pt-1">
            <div className="flex items-center justify-between text-[11px] font-mono-code mb-1">
              <span className="flex items-center gap-1.5 text-[#6F665F]">
                <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
                {freeShippingMet
                  ? 'FREE EXPRESS SHIPPING UNLOCKED'
                  : `ADD $${freeShippingRemaining} AUD FOR FREE EXPRESS SHIPPING`}
              </span>
              <span className="font-bold text-[#D4AF37]">
                ${subtotal} / ${SHOP.freeShippingThreshold}
              </span>
            </div>
            <div className="w-full bg-[#F9F7F2] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#C5A059] h-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / SHOP.freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F9F7F2] border border-[#EAE3DC] flex items-center justify-center text-[#6F665F]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <p className="font-serif-luxury text-lg text-[#1A1414]">YOUR CART IS CURRENTLY EMPTY</p>
                <p className="text-xs text-[#6F665F] mt-1 max-w-xs">
                  Explore our selection of cinema-grade reproduction AUD prop banknotes, bank bundles, and director cases.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#C5A059] transition-all"
              >
                Browse Prop Catalog
              </button>
            </div>
          ) : checkoutMode === 'cart' ? (
            /* Items List */
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.slug}
                  className="p-3.5 bg-[#F9F7F2] rounded-xl border border-[#EAE3DC] flex items-center justify-between gap-3 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-[#1A1414] truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono-code font-bold text-xs text-[#D4AF37]">
                        ${item.price} AUD
                      </span>
                      <span className="text-[11px] text-[#6F665F]">each</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white border border-[#EAE3DC] rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, -1)}
                        className="p-1.5 text-[#6F665F] hover:text-[#1A1414] transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono-code text-xs font-bold px-2.5 text-[#1A1414]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, 1)}
                        className="p-1.5 text-[#6F665F] hover:text-[#1A1414] transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.slug)}
                      className="p-1.5 text-[#6F665F] hover:text-[#D4AF37] rounded transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Payment Rail Selector */}
              <div className="mt-6 pt-4 border-t border-[#EAE3DC]">
                <span className="text-xs font-bold text-[#1A1414] tracking-wide uppercase font-serif-luxury block mb-2">
                  Select Intended Payment Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPayment('bank-transfer')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      selectedPayment === 'bank-transfer'
                        ? 'bg-white border-[#D4AF37] text-[#1A1414] shadow ring-1 ring-[#D4AF37]'
                        : 'bg-[#F9F7F2] border-[#EAE3DC] text-[#6F665F] hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span className="text-[11px] font-bold">Bank EFT</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#D4AF37]">Osko / 24/7</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPayment('payid')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      selectedPayment === 'payid'
                        ? 'bg-white border-[#D4AF37] text-[#1A1414] shadow ring-1 ring-[#D4AF37]'
                        : 'bg-[#F9F7F2] border-[#EAE3DC] text-[#6F665F] hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span className="text-[11px] font-bold">PayID</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#D4AF37]">Instant AU</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPayment('crypto')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all relative overflow-hidden ${
                      selectedPayment === 'crypto'
                        ? 'bg-white border-[#D4AF37] text-[#1A1414] shadow ring-1 ring-[#D4AF37]'
                        : 'bg-[#F9F7F2] border-[#EAE3DC] text-[#6F665F] hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <div className="absolute top-0 right-0 bg-[#D4AF37] text-white font-black text-[8px] px-1 font-mono-code">
                      -10%
                    </div>
                    <span className="text-[11px] font-bold">Crypto</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#D4AF37]">BTC / USDT</span>
                  </button>
                </div>

                {isCrypto && (
                  <div className="mt-2 p-2 bg-[#F9F7F2] rounded-md border border-[#D4AF37]/40 flex items-center gap-2 text-[11px] text-[#D4AF37]">
                    <Percent className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                    <span>10% Crypto discount applied! You save ${cryptoDiscount} AUD.</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Delivery & Dispatch Details Form */
            <form onSubmit={handleEmailCheckout} noValidate className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE3DC]">
                <span className="font-serif-luxury font-bold text-sm text-[#1A1414]">
                  DISPATCH &amp; CONTACT INFORMATION
                </span>
                <button
                  type="button"
                  onClick={() => setCheckoutMode('cart')}
                  className="text-xs text-[#D4AF37] hover:underline"
                >
                  ← Back to cart
                </button>
              </div>

              {(
                [
                  { key: 'name', label: 'Full Name *', type: 'text', placeholder: 'e.g. Liam Hemsworth' },
                  { key: 'phone', label: 'Mobile Phone *', type: 'tel', placeholder: '0400 000 000' },
                  { key: 'email', label: 'Email Address * (order confirmation & invoice)', type: 'email', placeholder: 'propps@studio.com.au' },
                ] as const
              ).map((f) => (
                <div key={f.key}>
                  <label htmlFor={`checkout-${f.key}`} className="block text-[#6F665F] mb-1 font-medium">
                    {f.label}
                  </label>
                  <input
                    id={`checkout-${f.key}`}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={formData[f.key]}
                    onChange={(e) => updateField(f.key, e.target.value)}
                    data-invalid={formErrors[f.key] ? 'true' : undefined}
                    aria-invalid={formErrors[f.key] ? true : undefined}
                    className={`w-full bg-white border rounded-lg px-3 py-2 text-[#1A1414] placeholder-[#A8A49D] focus:outline-none ${
                      formErrors[f.key] ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3DC] focus:border-[#D4AF37]'
                    }`}
                  />
                  {f.key === 'email' && !formErrors.email && (
                    <span className="text-[#6F665F] text-[10px] mt-0.5 block">Optional if you order via WhatsApp.</span>
                  )}
                  {formErrors[f.key] && <span className="text-red-500 text-[11px] mt-0.5 block">{formErrors[f.key]}</span>}
                </div>
              ))}

              <div>
                <label htmlFor="checkout-address" className="block text-[#6F665F] mb-1 font-medium">
                  Delivery Address *
                </label>
                <textarea
                  id="checkout-address"
                  rows={2}
                  placeholder="Street, suburb, state, postcode"
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  data-invalid={formErrors.address ? 'true' : undefined}
                  aria-invalid={formErrors.address ? true : undefined}
                  className={`w-full bg-white border rounded-lg px-3 py-2 text-[#1A1414] placeholder-[#A8A49D] focus:outline-none ${
                    formErrors.address ? 'border-red-500 focus:border-red-500' : 'border-[#EAE3DC] focus:border-[#D4AF37]'
                  }`}
                />
                {formErrors.address && <span className="text-red-500 text-[11px] mt-0.5 block">{formErrors.address}</span>}
              </div>
            </form>
          )}
        </div>

        {/* Footer & Checkout Action Bar */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#F9F7F2] border-t border-[#EAE3DC] space-y-3.5">
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs font-mono-code">
              <div className="flex justify-between text-[#6F665F]">
                <span>SUBTOTAL</span>
                <span className="font-bold text-[#1A1414]">${subtotal.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-[#6F665F]">
                <span>EXPRESS AUSPOST DISPATCH</span>
                <span className={shippingFee === 0 ? 'text-[#00b67a] font-bold' : 'text-[#1A1414]'}>
                  {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)} AUD`}
                </span>
              </div>
              {cryptoDiscount > 0 && (
                <div className="flex justify-between text-[#D4AF37]">
                  <span>CRYPTO DISCOUNT (10%)</span>
                  <span>-${cryptoDiscount.toFixed(2)} AUD</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#1A1414] pt-2 border-t border-[#EAE3DC]">
                <span>TOTAL DUE</span>
                <span className="text-[#D4AF37]">${finalTotal.toFixed(2)} AUD</span>
              </div>
            </div>

            {submitError && (
              <p role="alert" className="text-xs text-red-600 font-mono-code flex items-start gap-1.5 rounded-lg border border-red-200 bg-red-50 p-2.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </p>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {/* WhatsApp Checkout (Immediate window.open) */}
              <button
                type="button"
                disabled={!minOrderMet || isSubmitting}
                onClick={handleWhatsAppCheckout}
                className="py-3 px-3 bg-[#25D366] hover:bg-[#20BA5A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
                title={!minOrderMet ? `Minimum order is $${SHOP.minOrder} AUD` : 'Submit order via WhatsApp'}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="truncate">WhatsApp Order</span>
              </button>

              {/* Email / Invoice Form Checkout */}
              <button
                type="button"
                disabled={!minOrderMet || isSubmitting}
                onClick={(e) => handleEmailCheckout(e)}
                className="py-3 px-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#C5A059] hover:to-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  {isSubmitting ? 'Placing your order...' : checkoutMode === 'cart' ? 'Proceed to Details' : 'Confirm Order'}
                </span>
                {!isSubmitting && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>

            <p className="text-[10px] text-[#6F665F] text-center font-mono-code">
              Dispatched from Melbourne VIC 3093 with tracking &amp; signature.
            </p>
            <p className="text-[10px] text-[#6F665F] text-center font-mono-code">
              Non-legal-tender specimen prop currency, Section 22 Crimes (Currency) Act 1981 compliant.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
