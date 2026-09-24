// Branded HTML invoice email (LIGHT shell: white body, dark header band, gold accent).
import { SITE, CONTACT, REPLY } from '../config/site.js';

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
  paymentHtml: string;
  termsHtml?: string;
  intro?: string;
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

export function buildInvoiceHtml({ order, paymentHtml, termsHtml, intro }: InvoiceOpts): string {
  const dateStr = new Date(order.date || Date.now()).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  const due = new Date(new Date(order.date || Date.now()).getTime() + REPLY.deadlineHours * 3600 * 1000).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const itemRows = order.items
    .map(
      (i) => `<tr>
        <td style="padding:11px 0;border-bottom:1px solid #EAE3DC;font-family:${SANS};font-size:13.5px;color:#1A1414;">${esc(i.name)}</td>
        <td align="center" style="padding:11px 8px;border-bottom:1px solid #EAE3DC;font-family:${MONO};font-size:13px;color:#3A322C;">${i.quantity}</td>
        <td align="right" style="padding:11px 0;border-bottom:1px solid #EAE3DC;font-family:${MONO};font-size:13px;color:#3A322C;white-space:nowrap;">${money(i.price)}</td>
        <td align="right" style="padding:11px 0 11px 10px;border-bottom:1px solid #EAE3DC;font-family:${MONO};font-size:13px;font-weight:600;color:#1A1414;white-space:nowrap;">${money(i.price * i.quantity)}</td>
      </tr>`
    )
    .join('');

  const sumRow = (label: string, value: string) => `<tr>
      <td colspan="3" align="right" style="padding:7px 10px 7px 0;font-family:${SANS};font-size:13px;color:#6F665F;">${label}</td>
      <td align="right" style="padding:7px 0;font-family:${MONO};font-size:13px;color:#1A1414;white-space:nowrap;">${value}</td>
    </tr>`;

  const th = `padding:0 0 8px 0;border-bottom:2px solid ${GOLD};font-family:${SANS};font-size:10.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${GOLD};`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Invoice ${esc(order.ref)}</title>
</head>
<body style="margin:0;padding:24px 12px;background-color:#F4F0EA;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Invoice ${esc(order.ref)} - ${money(order.total)} AUD due by ${esc(due)}</div>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background-color:#FFFFFF;border-radius:14px;overflow:hidden;border:1px solid #EAE3DC;">

      <tr><td style="padding:26px 32px;background-color:${DARK};border-bottom:3px solid ${GOLD};">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
          <td width="60" valign="middle">${brandSealHtml(48)}</td>
          <td valign="middle" style="padding-left:14px;">
            <div style="font-family:${SERIF};font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:1.5px;text-transform:uppercase;">${esc(SITE.name)}</div>
            <div style="font-family:${SANS};font-size:11px;color:${GOLD};margin-top:4px;letter-spacing:0.5px;">${esc(REPLY.headerTagline)}</div>
          </td>
          <td align="right" valign="middle" style="font-family:${SERIF};font-size:22px;font-weight:700;color:${GOLD};letter-spacing:3px;">INVOICE</td>
        </tr></table>
      </td></tr>

      <tr><td style="padding:28px 32px 6px 32px;">
        ${intro ? `<p style="margin:0 0 22px 0;font-family:${SANS};font-size:14.5px;line-height:1.6;color:#3A322C;">${esc(intro)}</p>` : ''}

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:22px;"><tr>
          <td valign="top" width="52%" style="font-family:${SANS};font-size:13px;line-height:1.6;color:#1A1414;">
            <div style="font-size:10.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${GOLD};margin-bottom:6px;">Billed to</div>
            <strong>${esc(order.customerName)}</strong><br>
            ${order.email ? `${esc(order.email)}<br>` : ''}
            ${order.phone ? `${esc(order.phone)}<br>` : ''}
            ${order.address ? esc(order.address).replace(/\n/g, '<br>') : ''}
          </td>
          <td valign="top" align="right" style="font-family:${SANS};font-size:13px;line-height:1.8;color:#3A322C;">
            <span style="color:#6F665F;">Invoice no.</span> <strong style="font-family:${MONO};color:#1A1414;">${esc(order.ref)}</strong><br>
            <span style="color:#6F665F;">Issued</span> <strong style="color:#1A1414;">${esc(dateStr)}</strong><br>
            <span style="color:#6F665F;">Payment due</span> <strong style="color:#1A1414;">${esc(due)}</strong>
          </td>
        </tr></table>

        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td style="${th}">Item</td>
            <td align="center" style="${th}">Qty</td>
            <td align="right" style="${th}">Unit</td>
            <td align="right" style="${th}">Amount</td>
          </tr>
          ${itemRows}
          ${sumRow('Subtotal', money(order.subtotal))}
          ${sumRow('Shipping (Australia Post Express)', order.shippingFee > 0 ? money(order.shippingFee) : 'FREE')}
          ${order.discount > 0 ? sumRow('Crypto discount', `-${money(order.discount)}`) : ''}
          <tr>
            <td colspan="3" align="right" style="padding:14px 10px 12px 0;border-top:2px solid ${GOLD};font-family:${SANS};font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:#1A1414;">Total due (AUD)</td>
            <td align="right" style="padding:14px 0 12px 0;border-top:2px solid ${GOLD};font-family:${MONO};font-size:22px;font-weight:700;color:${GOLD};white-space:nowrap;">${money(order.total)}</td>
          </tr>
        </table>

        <!-- ABN directly beneath the invoice -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:6px 0 26px 0;"><tr>
          <td align="center" style="padding:11px 12px;background-color:#FDFBF7;border:1px solid #ECE5DC;border-radius:8px;font-family:${SANS};font-size:12px;line-height:1.6;color:#3A322C;">
            <strong>${esc(SITE.name)}</strong> &nbsp;&middot;&nbsp; <strong>${esc(REPLY.bizNumber.label)} ${esc(REPLY.bizNumber.value)}</strong><br>
            ${esc(CONTACT.address)} &nbsp;&middot;&nbsp; ${CONTACT.email}
          </td>
        </tr></table>

        <div style="font-family:${SANS};font-size:10.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${GOLD};padding-bottom:8px;border-bottom:2px solid ${GOLD};">How to pay - ${esc(METHOD_LABEL[order.paymentMethod] || order.paymentMethod)}</div>
        <div style="margin:12px 0 22px 0;padding:14px 16px;background-color:#F8F6F2;border-left:3px solid ${GOLD};border-radius:4px;font-family:${SANS};font-size:13.5px;line-height:1.7;color:#1A1414;">${paymentHtml}</div>

        ${
          termsHtml
            ? `<div style="margin:0 0 22px 0;padding:16px;background-color:#FAF8F5;border-radius:8px;border:1px solid #ECE5DC;">
          <div style="font-family:${SANS};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#6F665F;margin-bottom:10px;">Important notice &amp; terms</div>
          ${termsHtml}
        </div>`
            : ''
        }
      </td></tr>

      <tr><td style="padding:22px 32px;background-color:#F7F4F0;border-top:1px solid #EAE3DC;text-align:center;font-family:${SANS};font-size:11.5px;line-height:1.6;color:#6F665F;">
        ${esc(SITE.name)} &middot; ${esc(REPLY.bizNumber.label)} ${esc(REPLY.bizNumber.value)} &middot; Eltham, Victoria Australia<br>
        All products are non-legal tender reproduction props for motion picture, television, theatre, visual arts and simulation use only, marked SPECIMEN in accordance with the Crimes (Currency) Act 1981 Section 22.
      </td></tr>

    </table>
  </td></tr></table>
</body>
</html>`;
}
