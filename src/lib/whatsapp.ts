// src/lib/whatsapp.ts
import { SITE, REPLY } from '../config/site.js';
import { StoredOrder, paymentTermsLines, paymentConfirmLine, paymentMethodParts } from './order.js';

export function toWhatsAppNumber(raw: string): string {
  if (!raw) return '';
  // Remove non-numeric characters except leading plus
  let cleaned = raw.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  } else if (cleaned.startsWith('0')) {
    // Australian local mobile 04xx xxx xxx -> 614xx xxx xxx
    cleaned = (REPLY.channels.whatsappCountryCode || '61') + cleaned.substring(1);
  }
  return cleaned;
}

export function waLink(number: string, message: string): string {
  const norm = toWhatsAppNumber(number);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${norm}?text=${encoded}`;
}

export function waOrderLink(order: StoredOrder): string {
  const currencySymbol = REPLY.currency.symbol;
  const itemsText = order.items
    .map((item) => `• ${item.quantity}x ${item.name} (${currencySymbol}${item.price} each)`)
    .join('\n');

  const discountLine = order.discount > 0 
    ? `\n*Crypto Discount (10%):* -${currencySymbol}${order.discount.toFixed(2)}`
    : '';

  const message = [
    `*${SITE.name} — NEW ORDER SUBMISSION*`,
    `----------------------------------------`,
    `*Order Reference:* ${order.ref}`,
    `*Date:* ${new Date(order.createdAt).toLocaleDateString('en-AU')}`,
    ``,
    `*Customer Details:*`,
    `• Name: ${order.customerName}`,
    `• Phone: ${order.phone}`,
    order.email ? `• Email: ${order.email}` : '',
    `• Delivery Address: ${[order.address, order.city, order.state, order.postcode].filter(Boolean).join(', ')}`,
    order.notes ? `• Production Notes: ${order.notes}` : '',
    ``,
    `*Order Items:*`,
    itemsText,
    ``,
    `*Financial Summary:*`,
    `• Subtotal: ${currencySymbol}${order.subtotal.toFixed(2)}`,
    `• Express Shipping: ${currencySymbol}${order.shippingFee.toFixed(2)}`,
    discountLine,
    `*TOTAL DUE:* ${currencySymbol}${order.total.toFixed(2)} AUD`,
    `*Payment Method:* ${order.paymentMethod.toUpperCase()}`,
    ``,
    `_Please reply with verified payment instructions to confirm dispatch reservation._`
  ].filter(Boolean).join('\n');

  const targetNumber = REPLY.channels.whatsapp || '61420128746';
  return waLink(targetNumber, message);
}

export function waPaymentDetailsMessage(order: StoredOrder, customPaymentDetails: string): string {
  const currencySymbol = REPLY.currency.symbol;
  const formattedAmount = `${currencySymbol}${order.total.toFixed(2)} AUD`;
  const { opening, closing } = paymentMethodParts(order.paymentMethod, formattedAmount, order.ref);
  const terms = paymentTermsLines(order.ref, order.paymentMethod);

  return [
    `*${SITE.name} — PAYMENT DETAILS*`,
    `----------------------------------------`,
    `*Order Reference:* ${order.ref}`,
    `*Customer:* ${order.customerName}`,
    `*Amount Due:* ${formattedAmount}`,
    ``,
    opening,
    ``,
    `*Account / Wallet Information:*`,
    customPaymentDetails.trim(),
    ``,
    closing,
    ``,
    `*Before your order ships:*`,
    ...terms.map((t) => `• ${t}`),
    ``,
    paymentConfirmLine(),
    ``,
    `_Thank you for choosing ${SITE.name} for your cinema prop reproduction requirements._`
  ].join('\n');
}
