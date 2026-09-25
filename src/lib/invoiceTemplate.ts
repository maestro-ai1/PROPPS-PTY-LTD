// Compact branded invoice email (LIGHT shell: white body, dark header band, gold accent).
import { SITE, CONTACT, REPLY } from '../config/site.js';
import { paymentConfirmLine, paymentWhatsAppLink, encodeAt } from './order.js';

export interface InvoiceOrder {
  ref: string;
  date?: string;
  customerName: string;
  email?: string;
  phone?: string;
  address?: string;
  paymentMethod: string;
  items: { name: string; price: number; quantity: number }[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
}

export interface InvoiceOpts {
  order: InvoiceOrder;
  lines: { label: string; value: string }[];
  termsHtml?: string;
  intro?: string;
  note?: string;
  openUrl?: string;
}

const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const money = (n: number) => `$${Number(n).toFixed(2)}`;
const SANS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif`;
const MONO = `'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace`;
const SERIF = `Georgia, 'Times New Roman', serif`;
const GOLD = REPLY.brand.primary;
const DARK = REPLY.brand.headerDark;

const METHOD_LABEL: Record<string, string> = {
  'bank-transfer': 'Bank transfer (EFT / Osko)',
  payid: 'PayID',
  crypto: 'Cryptocurrency (10% discount applied)',
};

export function brandSealHtml(size = 46): string {
  return `<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" valign="middle" width="${size}" height="${size}" style="width:${size}px;height:${size}px;background-color:#1C1A14;border:2px solid #D4AF37;border-radius:11px;font-family:${SERIF};font-size:${Math.round(size * 0.52)}px;font-weight:700;color:#D4AF37;line-height:${size - 4}px;">P</td></tr></table>`;
}

const heading = (text: string) =>
  `<div style="font-family:${SANS};font-size:10.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${GOLD};padding-bottom:7px;border-bottom:2px solid ${GOLD};">${text}</div>`;

export function buildInvoiceHtml({ order, lines, termsHtml, intro, note, openUrl }: InvoiceOpts): string {
  const lineRows = lines
    .filter((l) => l.value.trim())
    .map((l) =>
      l.label
        ? `<tr>
        <td valign="top" style="padding:7px 0;border-bottom:1px solid #EAE3DC;font-family:${SANS};font-size:12.5px;color:#6F665F;width:34%;">${esc(l.label)}</td>
        <td valign="top" style="padding:7px 0;border-bottom:1px solid #EAE3DC;font-family:${MONO};font-size:13px;font-weight:600;color:#1A1414;word-break:break-all;">${esc(l.value)}</td>
      </tr>`
        : `<tr>
        <td colspan="2" valign="top" style="padding:7px 0;border-bottom:1px solid #EAE3DC;font-family:${MONO};font-size:13px;font-weight:600;color:#1A1414;word-break:break-all;">${esc(l.value)}</td>
      </tr>`
    )
    .join('');

  const itemRows = order.items
    .map(
      (i) => `<tr>
        <td style="padding:5px 0;font-family:${SANS};font-size:12.5px;color:#3A322C;">${i.quantity} &times; ${esc(i.name)}</td>
        <td align="right" style="padding:5px 0 5px 10px;font-family:${MONO};font-size:12.5px;color:#1A1414;white-space:nowrap;">${money(i.price * i.quantity)}</td>
      </tr>`
    )
    .join('');
  const sumRow = (l: string, v: string) => `<tr>
        <td style="padding:2px 0;font-family:${SANS};font-size:12px;color:#6F665F;">${l}</td>
        <td align="right" style="padding:2px 0 2px 10px;font-family:${MONO};font-size:12px;color:#6F665F;white-space:nowrap;">${v}</td>
      </tr>`;

  const invoiceUrl = openUrl || `https://${SITE.domain}/invoice/`;
  const uploadUrl = invoiceUrl.replace('/invoice/', '/confirm/');
  const mailUrl = `mailto:${CONTACT.email.replace('&#64;', '@')}?subject=${encodeURIComponent(`Payment for order ${order.ref}`)}`;
  const waUrl = paymentWhatsAppLink(order.ref, order.total);
  const btn = (href: string, text: string, filled: boolean, outline = false) =>
    `<a href="${encodeAt(esc(href))}" target="_blank" style="display:inline-block;margin:0 5px 8px 5px;padding:13px 20px;font-family:${SANS};font-size:13.5px;font-weight:700;text-decoration:none;border-radius:8px;${
      filled ? `background-color:${GOLD};color:#0D1512;` : outline ? `background-color:#FFFFFF;color:#8A6B25;border:1.5px solid ${GOLD};` : `background-color:#25D366;color:#06210F;`
    }">${text}</a>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Invoice ${esc(order.ref)}</title>
</head>
<body style="margin:0;padding:20px 10px;background-color:#F4F0EA;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Order ${esc(order.ref)} - pay ${money(order.total)} AUD</div>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#FFFFFF;border-radius:14px;overflow:hidden;border:1px solid #EAE3DC;">

      <tr><td style="padding:20px 26px;background-color:${DARK};border-bottom:3px solid ${GOLD};">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
          <td width="54" valign="middle">${brandSealHtml(42)}</td>
          <td valign="middle" style="padding-left:12px;">
            <div style="font-family:${SERIF};font-size:17px;font-weight:700;color:#FFFFFF;letter-spacing:1.3px;text-transform:uppercase;">${esc(SITE.name)}</div>
            <div style="font-family:${SANS};font-size:10.5px;color:${GOLD};margin-top:3px;">${esc(REPLY.headerTagline)}</div>
          </td>
          <td align="right" valign="middle" style="font-family:${SERIF};font-size:17px;font-weight:700;color:${GOLD};letter-spacing:2px;">INVOICE</td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:22px 26px 6px 26px;">
        ${intro ? `<p style="margin:0 0 16px 0;font-family:${SANS};font-size:14px;line-height:1.55;color:#3A322C;">${esc(intro)}</p>` : ''}

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px;background-color:#FDFBF7;border:1px solid #ECE5DC;border-radius:10px;"><tr>
          <td valign="top" width="50%" style="padding:14px 16px;">
            <div style="font-family:${SANS};font-size:10.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#6F665F;">Order number</div>
            <div style="font-family:${MONO};font-size:19px;font-weight:700;color:#1A1414;margin-top:3px;">${esc(order.ref)}</div>
          </td>
          <td valign="top" align="right" style="padding:14px 16px;">
            <div style="font-family:${SANS};font-size:10.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#6F665F;">Amount due</div>
            <div style="font-family:${MONO};font-size:22px;font-weight:700;color:${GOLD};margin-top:3px;">${money(order.total)} <span style="font-size:12px;">AUD</span></div>
          </td>
        </tr></table>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:8px;">
          ${itemRows}
          ${sumRow('Shipping', order.shippingFee > 0 ? money(order.shippingFee) : 'FREE')}
          ${order.discount > 0 ? sumRow('Crypto discount', `-${money(order.discount)}`) : ''}
        </table>

        <div style="margin:0 0 20px 0;font-family:${SANS};font-size:11.5px;color:#6F665F;">
          <strong style="color:#3A322C;">${esc(SITE.name)}</strong> &middot; ${esc(REPLY.bizNumber.label)} ${esc(REPLY.bizNumber.value)} &middot; ${esc(CONTACT.hq)}
        </div>

        ${heading(`Pay by ${esc(METHOD_LABEL[order.paymentMethod] || order.paymentMethod)}`)}
        <p style="margin:10px 0 6px 0;font-family:${SANS};font-size:13px;line-height:1.5;color:#3A322C;">Please pay exactly <strong>${money(order.total)} AUD</strong> using the details below.</p>
        <div style="margin:0 0 6px 0;padding:6px 14px;background-color:#F8F6F2;border-left:3px solid ${GOLD};border-radius:4px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">${lineRows}</table>
        </div>
        ${note ? `<p style="margin:10px 0 0 0;font-family:${SANS};font-size:13px;line-height:1.55;color:#3A322C;">${esc(note).replace(/\n/g, '<br>')}</p>` : ''}
        <div style="margin:0 0 20px 0;font-family:${SANS};font-size:11.5px;color:#6F665F;padding-top:8px;">
          <a href="${esc(invoiceUrl)}" target="_blank" style="color:#8A6B25;">Open the invoice page</a> to copy each detail with one tap or scan a QR code.
        </div>

        ${heading('Before your order ships')}
        <div style="margin:10px 0 18px 0;">${termsHtml || ''}</div>

        ${heading('Confirm your payment')}
        <p style="margin:10px 0 12px 0;font-family:${SANS};font-size:13px;line-height:1.55;color:#3A322C;">${encodeAt(esc(paymentConfirmLine()))}</p>
        <div style="text-align:center;margin:0 0 6px 0;">
          ${btn(uploadUrl, "I've paid - Upload confirmation", true)}${btn(waUrl, 'Confirm via WhatsApp', false)}${btn(mailUrl, 'Reply by email', false, true)}
        </div>
      </td></tr>

      <tr><td style="padding:16px 26px;background-color:#F7F4F0;border-top:1px solid #EAE3DC;text-align:center;font-family:${SANS};font-size:11px;line-height:1.55;color:#6F665F;">
        Non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
      </td></tr>

    </table>
  </td></tr></table>
</body>
</html>`;
}
