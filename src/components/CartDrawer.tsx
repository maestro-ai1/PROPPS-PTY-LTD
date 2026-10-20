// src/components/CartDrawer.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Truck,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { SHOP } from '../config/site.js';
import type { StoredOrder } from '../lib/order.js';

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
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const minOrderMet = subtotal >= SHOP.minOrder;
  const minOrderRemaining = Math.max(0, SHOP.minOrder - subtotal);
  const freeShippingMet = subtotal >= SHOP.freeShippingThreshold;
  const freeShippingRemaining = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const shippingFee = freeShippingMet || subtotal === 0 ? 0 : SHOP.shippingFee;

  if (!isOpen) return null;

  // The full-page checkout (contact, delivery, payment, place order) lives at /checkout/.
  const goToCheckout = () => {
    if (!minOrderMet) return;
    onClose();
    router.push('/checkout/');
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
          ) : (
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

            </div>
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
              <div className="flex justify-between text-base font-bold text-[#1A1414] pt-2 border-t border-[#EAE3DC]">
                <span>TOTAL</span>
                <span className="text-[#D4AF37]">${(subtotal + shippingFee).toFixed(2)} AUD</span>
              </div>
            </div>

            <p className="text-[11px] text-[#6F665F] text-center">Pay by PayID, bank transfer or crypto (10% off) at checkout.</p>
            <button
              type="button"
              disabled={!minOrderMet}
              onClick={goToCheckout}
              className="w-full min-h-12 py-3 px-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#C5A059] hover:to-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              title={!minOrderMet ? `Minimum order is $${SHOP.minOrder} AUD` : 'Go to checkout'}
            >
              Checkout <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={onClose} className="w-full text-xs text-[#6F665F] hover:text-[#1A1414] underline">
              Continue shopping
            </button>

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
