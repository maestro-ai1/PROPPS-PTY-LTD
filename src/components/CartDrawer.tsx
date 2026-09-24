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

  const validateDetails = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.phone.trim()) errors.phone = 'Australian contact number is required';
    if (!formData.address.trim()) errors.address = 'Delivery address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // WhatsApp Checkout (Synchronous window.open rule)
  const handleWhatsAppCheckout = () => {
    if (!minOrderMet) return;
    if (checkoutMode === 'cart') {
      setCheckoutMode('details');
      return;
    }

    if (!validateDetails()) return;

    const ref = generateOrderRef();
    const newOrder: StoredOrder = {
      id: `ord_${Date.now()}`,
      ref,
      date: new Date().toISOString(),
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: '',
      state: '',
      postcode: '',
      items: cart,
      subtotal,
      shippingFee,
      discount: cryptoDiscount,
      total: finalTotal,
      paymentMethod: selectedPayment,
      channel: 'whatsapp',
      status: 'pending',
      createdAt: Date.now(),
    };

    // Mandatory WebForge Rule: window.open MUST be called synchronously
    const link = waOrderLink(newOrder);
    window.open(link, '_blank');

    // Async save order and clear cart afterwards
    saveOrder(newOrder).then(() => {
      clearCart();
      if (onOrderCompleted) {
        onOrderCompleted(newOrder);
      }
      onClose();
    });
  };

  // Standard Email / Invoice Checkout
  const handleEmailCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!minOrderMet) return;
    if (checkoutMode === 'cart') {
      setCheckoutMode('details');
      return;
    }

    if (!validateDetails()) return;
    if (!formData.email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: 'Email address is required for official invoice' }));
      return;
    }

    setIsSubmitting(true);
    const ref = generateOrderRef();
    const newOrder: StoredOrder = {
      id: `ord_${Date.now()}`,
      ref,
      date: new Date().toISOString(),
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: '',
      state: '',
      postcode: '',
      items: cart,
      subtotal,
      shippingFee,
      discount: cryptoDiscount,
      total: finalTotal,
      paymentMethod: selectedPayment,
      channel: 'email',
      status: 'pending',
      createdAt: Date.now(),
    };

    const result = await saveOrder(newOrder);
    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error || 'Your order could not be sent. Please try WhatsApp Order instead.');
      return;
    }
    setSubmitError(null);
    clearCart();
    if (onOrderCompleted) {
      onOrderCompleted({ ...newOrder, ref: result.ref || newOrder.ref });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-[#0F1714] text-[#E8ECE9] h-full flex flex-col shadow-2xl border-l border-[#2C3E36]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#22302A] flex items-center justify-between bg-[#0B100E]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#1C2A24] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#F8F6F0] tracking-wide">
                PRODUCTION ORDER CART
              </h3>
              <p className="text-[11px] font-mono-code text-[#9AA7A0]">
                {cart.length} {cart.length === 1 ? 'ITEM' : 'ITEMS'} RESERVED
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#9AA7A0] hover:text-white rounded-lg hover:bg-[#1A2520] transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Threshold Progress Banners */}
        <div className="px-5 py-3 bg-[#141E1A] border-b border-[#22302A] space-y-2 text-xs">
          {/* Min Order Check */}
          {!minOrderMet ? (
            <div className="flex items-center gap-2 text-[#E0A83A]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Minimum order is <strong>${SHOP.minOrder} AUD</strong>. Add{' '}
                <strong>${minOrderRemaining} AUD</strong> more to proceed.
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[#56C48B]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Minimum order threshold reached (${SHOP.minOrder} AUD).</span>
            </div>
          )}

          {/* Free Shipping Check */}
          <div className="pt-1">
            <div className="flex items-center justify-between text-[11px] font-mono-code mb-1">
              <span className="flex items-center gap-1.5 text-[#B4C0BA]">
                <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
                {freeShippingMet
                  ? 'FREE EXPRESS SHIPPING UNLOCKED'
                  : `ADD $${freeShippingRemaining} AUD FOR FREE EXPRESS SHIPPING`}
              </span>
              <span className="font-bold text-[#C5A059]">
                ${subtotal} / ${SHOP.freeShippingThreshold}
              </span>
            </div>
            <div className="w-full bg-[#1C2A24] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#C5A059] to-[#E5C378] h-full transition-all duration-300"
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
              <div className="w-16 h-16 rounded-full bg-[#18231E] border border-[#2C3E36] flex items-center justify-center text-[#9AA7A0]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <div>
                <p className="font-serif-luxury text-lg text-[#F8F6F0]">YOUR CART IS CURRENTLY EMPTY</p>
                <p className="text-xs text-[#9AA7A0] mt-1 max-w-xs">
                  Explore our selection of cinema-grade reproduction AUD prop banknotes, bank bundles, and director cases.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#C5A059] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#D4AF37] transition-all"
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
                  className="p-3.5 bg-[#141E1A] rounded-xl border border-[#22302A] flex items-center justify-between gap-3 hover:border-[#2C3E36] transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-[#F8F6F0] truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono-code font-bold text-xs text-[#C5A059]">
                        ${item.price} AUD
                      </span>
                      <span className="text-[11px] text-[#9AA7A0]">each</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-[#0D1512] border border-[#2C3E36] rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, -1)}
                        className="p-1.5 text-[#B4C0BA] hover:text-white transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono-code text-xs font-bold px-2.5 text-[#F8F6F0]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, 1)}
                        className="p-1.5 text-[#B4C0BA] hover:text-white transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.slug)}
                      className="p-1.5 text-[#889690] hover:text-[#E0533C] rounded transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Payment Rail Selector */}
              <div className="mt-6 pt-4 border-t border-[#22302A]">
                <span className="text-xs font-bold text-[#F8F6F0] tracking-wide uppercase font-serif-luxury block mb-2">
                  Select Intended Payment Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPayment('bank-transfer')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      selectedPayment === 'bank-transfer'
                        ? 'bg-[#1C2A24] border-[#C5A059] text-white shadow'
                        : 'bg-[#121A16] border-[#22302A] text-[#9AA7A0] hover:border-[#2C3E36]'
                    }`}
                  >
                    <span className="text-[11px] font-bold">Bank EFT</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#C5A059]">Osko / 24/7</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPayment('payid')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${
                      selectedPayment === 'payid'
                        ? 'bg-[#1C2A24] border-[#C5A059] text-white shadow'
                        : 'bg-[#121A16] border-[#22302A] text-[#9AA7A0] hover:border-[#2C3E36]'
                    }`}
                  >
                    <span className="text-[11px] font-bold">PayID</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#C5A059]">Instant AU</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPayment('crypto')}
                    className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all relative overflow-hidden ${
                      selectedPayment === 'crypto'
                        ? 'bg-[#1C2A24] border-[#C5A059] text-white shadow ring-1 ring-[#C5A059]'
                        : 'bg-[#121A16] border-[#22302A] text-[#9AA7A0] hover:border-[#2C3E36]'
                    }`}
                  >
                    <div className="absolute top-0 right-0 bg-[#C5A059] text-[#0D1512] font-black text-[8px] px-1 font-mono-code">
                      -10%
                    </div>
                    <span className="text-[11px] font-bold">Crypto</span>
                    <span className="text-[9px] font-mono-code mt-1 text-[#E5C378]">BTC / USDT</span>
                  </button>
                </div>

                {isCrypto && (
                  <div className="mt-2 p-2 bg-[#1C2A24] rounded-md border border-[#C5A059]/40 flex items-center gap-2 text-[11px] text-[#E5C378]">
                    <Percent className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
                    <span>10% Crypto discount applied! You save ${cryptoDiscount} AUD.</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Delivery & Dispatch Details Form */
            <form onSubmit={handleEmailCheckout} className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#22302A]">
                <span className="font-serif-luxury font-bold text-sm text-[#F8F6F0]">
                  DISPATCH &amp; CONTACT INFORMATION
                </span>
                <button
                  type="button"
                  onClick={() => setCheckoutMode('cart')}
                  className="text-xs text-[#C5A059] hover:underline"
                >
                  ← Back to cart
                </button>
              </div>

              <div>
                <label className="block text-[#9AA7A0] mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Liam Hemsworth"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#121A16] border border-[#2C3E36] rounded-lg px-3 py-2 text-white placeholder-[#58645F] focus:border-[#C5A059] focus:outline-none"
                />
                {formErrors.name && (
                  <span className="text-[#E0533C] text-[10px] mt-0.5 block">{formErrors.name}</span>
                )}
              </div>

              <div>
                <label className="block text-[#9AA7A0] mb-1 font-medium">Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="0400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#121A16] border border-[#2C3E36] rounded-lg px-3 py-2 text-white placeholder-[#58645F] focus:border-[#C5A059] focus:outline-none"
                />
                {formErrors.phone && (
                  <span className="text-[#E0533C] text-[10px] mt-0.5 block">{formErrors.phone}</span>
                )}
              </div>

              <div>
                <label className="block text-[#9AA7A0] mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="propps@studio.com.au"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121A16] border border-[#2C3E36] rounded-lg px-3 py-2 text-white placeholder-[#58645F] focus:border-[#C5A059] focus:outline-none"
                />
                {formErrors.email && (
                  <span className="text-[#E0533C] text-[10px] mt-0.5 block">{formErrors.email}</span>
                )}
              </div>

              <div>
                <label className="block text-[#9AA7A0] mb-1 font-medium">Delivery Address *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Street, suburb, state, postcode"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#121A16] border border-[#2C3E36] rounded-lg px-3 py-2 text-white placeholder-[#58645F] focus:border-[#C5A059] focus:outline-none"
                />
                {formErrors.address && (
                  <span className="text-[#E0533C] text-[10px] mt-0.5 block">{formErrors.address}</span>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Footer & Checkout Action Bar */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#0B100E] border-t border-[#22302A] space-y-3.5">
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs font-mono-code">
              <div className="flex justify-between text-[#9AA7A0]">
                <span>SUBTOTAL</span>
                <span className="font-bold text-white">${subtotal.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-[#9AA7A0]">
                <span>EXPRESS AUSPOST DISPATCH</span>
                <span className={shippingFee === 0 ? 'text-[#56C48B] font-bold' : 'text-white'}>
                  {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)} AUD`}
                </span>
              </div>
              {cryptoDiscount > 0 && (
                <div className="flex justify-between text-[#E5C378]">
                  <span>CRYPTO DISCOUNT (10%)</span>
                  <span>-${cryptoDiscount.toFixed(2)} AUD</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#F8F6F0] pt-2 border-t border-[#22302A]">
                <span>TOTAL DUE</span>
                <span className="text-[#C5A059]">${finalTotal.toFixed(2)} AUD</span>
              </div>
            </div>

            {submitError && (
              <p role="alert" className="text-xs text-[#E0533C] font-mono-code flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </p>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {/* WhatsApp Checkout (Immediate window.open) */}
              <button
                type="button"
                disabled={!minOrderMet}
                onClick={handleWhatsAppCheckout}
                className="py-3 px-3 bg-[#25D366] hover:bg-[#20BA5A] disabled:opacity-40 disabled:cursor-not-allowed text-[#0B100E] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
                title={!minOrderMet ? `Minimum order is $${SHOP.minOrder} AUD` : 'Submit order via WhatsApp'}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="truncate">WhatsApp Order</span>
              </button>

              {/* Email / Invoice Form Checkout */}
              <button
                type="button"
                disabled={!minOrderMet || isSubmitting}
                onClick={(e) => {
                  if (checkoutMode === 'cart') {
                    setCheckoutMode('details');
                  } else {
                    handleEmailCheckout(e);
                  }
                }}
                className="py-3 px-3 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] disabled:opacity-40 disabled:cursor-not-allowed text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CreditCard className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  {checkoutMode === 'cart' ? 'Proceed to Details' : 'Confirm Order'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[10px] text-[#6E7B75] text-center font-mono-code">
              Dispatched from Melbourne VIC 3093 with tracking &amp; signature.
            </p>
            <p className="text-[10px] text-[#6E7B75] text-center font-mono-code">
              Non-legal-tender specimen prop currency, Section 22 Crimes (Currency) Act 1981 compliant.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
