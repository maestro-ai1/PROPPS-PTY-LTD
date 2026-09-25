// src/lib/order.ts
import { REPLY, SITE, SHOP, CONTACT, ReplyPaymentMethod } from '../config/site.js';
import type { InvoiceRecord } from './payment.js';

export interface OrderItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

export interface StoredOrder {
  id: string;
  ref: string;
  orderRef?: string;
  date: string;
  customerName: string;
  email: string;
  customerEmail?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  notes?: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  totalAmount?: number;
  paymentMethod: string;
  channel: 'whatsapp' | 'email';
  status: 'pending' | 'payment-sent' | 'paid' | 'dispatched' | 'cancelled';
  invoice?: InvoiceRecord;
  confirmToken?: string;
  paymentNotifiedAt?: number;
  paidAt?: number;
  createdAt: number;
}

// Short, easy-to-quote order number: 2 letters + 4 digits, e.g. PP4827.
export function generateOrderRef(): string {
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `${REPLY.orderPrefix}${digits}`;
}

// New short format, plus the older PRP-XXXXXX style still present on stored orders.
export const isValidOrderRef = (ref: string) => /^[A-Z]{2}[0-9]{4}$/.test(ref) || /^[A-Z]{2,5}-[A-Z0-9]{6}$/.test(ref);
export function paymentMethodParts(
  methodId: string,
  amount: string,
  ref: string
): { opening: string; closing: string; methodObj?: ReplyPaymentMethod } {
  const method = REPLY.paymentMethods.find((m) => m.id === methodId) || REPLY.paymentMethods[0];
  const opening = method.opening.replace('{amount}', amount).replace('{ref}', ref);
  const closing = method.closing.replace('{amount}', amount).replace('{ref}', ref);
  return { opening, closing, methodObj: method };
}

// The single source of the short customer-facing payment text (invoice email,
// hosted invoice page, WhatsApp message, admin screen). Plain text: HTML
// renderers must entity-encode the @ (see paymentTermsHtml / encodeAt).
export function paymentTermsLines(ref: string = 'YOUR-ORDER-REF', _methodId?: string): string[] {
  return [
    'This order is confirmed once payment is received.',
    `Use your order number ${ref} as the payment reference.`,
    'Ships within 1 business day.',
  ];
}

// How the customer confirms payment so we can dispatch.
export function paymentConfirmLine(): string {
  const email = CONTACT.email.replace('&#64;', '@');
  return `After paying, send a screenshot of your payment by email to ${email} or on WhatsApp to ${CONTACT.whatsapp} so we can confirm and dispatch.`;
}

export function paymentWhatsAppLink(ref: string, total: number, intent: 'paid' | 'question' = 'paid'): string {
  const digits = CONTACT.whatsapp.replace(/\D/g, '');
  const amount = `($${Number(total).toFixed(2)} AUD)`;
  const text =
    intent === 'paid'
      ? `Hi ${SITE.name}, I have paid order ${ref} ${amount}. Payment screenshot attached.`
      : `Hi ${SITE.name}, I have a question about my order ${ref} ${amount}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
export const encodeAt = (text: string) => text.replace(/@/g, '&#64;');

export function paymentTermsHtml(ref: string = 'YOUR-ORDER-REF', methodId?: string): string {
  const lines = paymentTermsLines(ref, methodId);
  return `
    <ul style="margin: 0; padding: 0 0 0 20px; color: #3A322C; font-size: 13.5px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      ${lines.map((line) => `<li style="margin-bottom: 8px; color: #2A221C;">${encodeAt(line)}</li>`).join('')}
    </ul>
  `;
}
export function instructionsParts(
  opening: string,
  detail: string,
  closing: string
): { text: string; html: string } {
  const text = `${opening}\n\n${detail.trim()}\n\n${closing}`;
  const html = `<div style="white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #1A1414;">${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>`;
  return { text, html };
}
