// src/views/AdminDashboardPage.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Trash2, ArrowLeft, RefreshCw, Copy, Check, Mail, MessageCircle } from 'lucide-react';
import { useAdminPasscode } from '../lib/useAdminPasscode.js';
import { PasscodeGate } from '../components/admin/PasscodeGate.js';
import { StoredOrder, paymentTermsLines, paymentTermsHtml } from '../lib/order.js';
import { getAllOrders, deleteOrder, setOrderStatus, sendInvoice, getPaymentDefaultsClient } from '../lib/orderStore.js';
import { StoredEnquiry, getAllEnquiries, deleteEnquiry, updateEnquiryStatus } from '../lib/enquiryStore.js';
import {
  PAY_METHOD_IDS,
  PAY_METHOD_LABEL,
  applyDefaults,
  blankPayText,
  linesToText,
  parsePayText,
  type PayLinesByMethod,
  type PayMethodId,
  type PayTextByMethod,
} from '../lib/payment.js';
import { buildEmailHtml } from '../lib/emailTemplate.js';
import { buildInvoiceHtml } from '../lib/invoiceTemplate.js';
import { adminSendMail } from '../lib/adminClient.js';
import { waLink, waPaymentDetailsMessage } from '../lib/whatsapp.js';
import { SITE, SHOP } from '../config/site.js';

type Tab = 'dashboard' | 'orders' | 'enquiries' | 'order' | 'enquiry';

const STATUS_STYLE: Record<string, string> = {
  pending: 'bg-[#2A2413] text-[#E5C378] border-[#C5A059]/50',
  'payment-sent': 'bg-[#122A1E] text-[#56C48B] border-[#56C48B]/50',
  paid: 'bg-[#56C48B] text-[#0D1512] border-[#56C48B]',
  dispatched: 'bg-[#12222A] text-[#6CB6E8] border-[#6CB6E8]/50',
  cancelled: 'bg-[#2A1414] text-[#E0533C] border-[#E0533C]/50',
  new: 'bg-[#2A2413] text-[#E5C378] border-[#C5A059]/50',
  replied: 'bg-[#122A1E] text-[#56C48B] border-[#56C48B]/50',
  archived: 'bg-[#1C1C1C] text-[#889690] border-[#3A3A3A]',
};

const badge = 'px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider';
const label = 'block text-[11px] font-bold uppercase tracking-widest text-[#889690] mb-1.5';
const field =
  'w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl px-4 py-3 text-base text-[#F8F6F0] focus:border-[#C5A059] focus:outline-none';
const when = (ts: number) =>
  new Date(ts).toLocaleString('en-AU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

export const AdminDashboardContent: React.FC = () => {
  const { isUnlocked, unlock, lock, error } = useAdminPasscode();

  const [tab, setTab] = useState<Tab>('dashboard');
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(false);

  // Send payment details
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [method, setMethod] = useState<PayMethodId>('bank-transfer');
  const [mode, setMode] = useState<'template' | 'paste'>('template');
  const [templates, setTemplates] = useState<PayTextByMethod>(() => blankPayText(''));
  const [payText, setPayText] = useState<PayTextByMethod>(() => blankPayText(''));
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  // Enquiry reply
  const [enquiry, setEnquiry] = useState<StoredEnquiry | null>(null);
  const [reply, setReply] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [o, e] = await Promise.all([getAllOrders(), getAllEnquiries()]);
      setOrders(o);
      setEnquiries(e);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUnlocked) loadData();
  }, [isUnlocked]);

  if (!isUnlocked) return <PasscodeGate onUnlock={unlock} error={error} />;

  const pendingCount = orders.filter((o) => o.status === 'pending' || o.status === 'payment-sent').length;
  const newCount = enquiries.filter((e) => e.status === 'new').length;
  const claimedPaid = orders.filter((o) => o.paymentNotifiedAt && o.status !== 'paid' && o.status !== 'dispatched' && o.status !== 'cancelled').length;

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  // ---- Orders -------------------------------------------------------------
  const openOrder = async (o: StoredOrder) => {
    setOrder(o);
    setMethod((PAY_METHOD_IDS as string[]).includes(o.paymentMethod) ? (o.paymentMethod as PayMethodId) : 'bank-transfer');
    setMode('template');
    setNote('');
    setMessage(null);
    const blank = blankPayText(o.ref);
    setTemplates(blank);
    setPayText(blank);
    setTab('order');
    const lines: PayLinesByMethod = applyDefaults(await getPaymentDefaultsClient(), o.ref);
    const text: PayTextByMethod = {
      'bank-transfer': linesToText(lines['bank-transfer']),
      payid: linesToText(lines.payid),
      crypto: linesToText(lines.crypto),
    };
    if (o.invoice) text[o.invoice.method] = linesToText(o.invoice.lines);
    setTemplates(text);
    setPayText(text);
  };

  const removeOrder = async (id: string) => {
    if (!confirm('Delete this order?')) return;
    await deleteOrder(id);
    await loadData();
  };

  const chooseMode = (next: 'template' | 'paste') => {
    setMode(next);
    setPayText((prev) => ({ ...prev, [method]: next === 'template' ? templates[method] : '' }));
  };

  const totalFor = (o: StoredOrder, m: PayMethodId) =>
    o.subtotal + o.shippingFee - (m === 'crypto' ? Math.round(o.subtotal * (SHOP.cryptoDiscount / 100)) : 0);

  const sendToCustomer = async () => {
    if (!order) return;
    const lines = parsePayText(payText[method]);
    if (lines.length === 0) {
      alert('Type or paste the payment details first.');
      return;
    }
    setSending(true);
    setMessage(null);
    const allLines = Object.fromEntries(PAY_METHOD_IDS.map((id) => [id, parsePayText(payText[id])])) as PayLinesByMethod;
    const result = await sendInvoice({ orderId: order.id, method, lines, note, saveDefaults: true, allLines });
    setSending(false);
    if (result.sent && result.order) {
      setOrder(result.order);
      setMessage(`Sent to ${order.email}. Status is now payment-sent.`);
      await loadData();
    } else {
      setMessage(`NOT sent (${result.reason || 'unknown error'}). Try again, or send by WhatsApp below.`);
    }
  };

  const setStatus = async (status: StoredOrder['status']) => {
    if (!order) return;
    if (status === 'paid' && !confirm('Mark as paid? The customer is automatically emailed a payment-received thank-you.')) return;
    const res = await setOrderStatus(order.id, status);
    if (!res.order) {
      alert('Could not update the order.');
      return;
    }
    setOrder(res.order);
    await loadData();
    setMessage(
      status === 'paid'
        ? res.thankYouSent
          ? 'Marked paid. Thank-you email sent to the customer.'
          : 'Marked paid, but the thank-you email could not be sent.'
        : `Status is now ${status}.`
    );
  };

  // ---- Enquiries ----------------------------------------------------------
  const openEnquiry = (e: StoredEnquiry) => {
    setEnquiry(e);
    setReply(`Dear ${e.name},\n\nThank you for contacting ${SITE.name}.\n\n\n\nKind regards,\n${SITE.name}`);
    setMessage(null);
    setTab('enquiry');
  };

  const removeEnquiry = async (id: string) => {
    if (!confirm('Delete this enquiry?')) return;
    await deleteEnquiry(id);
    await loadData();
  };

  const sendReply = async () => {
    if (!enquiry) return;
    setSending(true);
    setMessage(null);
    const result = await adminSendMail({
      to: enquiry.email,
      subject: `Re: ${enquiry.subject || 'Your enquiry'} — ${SITE.name}`,
      html: buildEmailHtml({
        title: `Reply to your enquiry`,
        intro: `Thank you for contacting ${SITE.name}. Our reply is below.`,
        rows: [
          { label: 'Reference', value: enquiry.ref, mono: true },
          { label: 'Reply', value: reply, block: true },
        ],
      }),
      text: reply,
    });
    setSending(false);
    if (result.sent) {
      await updateEnquiryStatus(enquiry.id, 'replied');
      await loadData();
      setMessage(`Reply sent to ${enquiry.email}.`);
    } else {
      setMessage(`NOT sent (${result.reason || 'unknown error'}).`);
    }
  };

  // ---- Screens ------------------------------------------------------------
  const navBtn = (id: Tab, text: string, active: boolean) => (
    <button
      type="button"
      onClick={() => setTab(id)}
      className={`min-h-12 rounded-xl border px-1 text-[10.5px] font-bold uppercase tracking-wide transition-colors ${
        active ? 'border-[#C5A059] text-[#E5C378] bg-[#1A1710]' : 'border-[#22302A] text-[#F8F6F0] bg-[#0E1513] hover:border-[#C5A059]/60'
      }`}
    >
      {text}
    </button>
  );

  const orderScreen = () => {
    if (!order) return null;
    const total = totalFor(order, method);
    const isChosen = (id: PayMethodId) => order.paymentMethod === id;
    const lines = parsePayText(payText[method]);
    const previewHtml = buildInvoiceHtml({
      order: {
        ref: order.ref,
        date: order.invoice ? new Date(order.invoice.sentAt).toISOString() : new Date().toISOString(),
        customerName: order.customerName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        paymentMethod: method,
        items: order.items,
        subtotal: order.subtotal,
        shippingFee: order.shippingFee,
        discount: method === 'crypto' ? Math.round(order.subtotal * (SHOP.cryptoDiscount / 100)) : 0,
        total,
      },
      lines,
      note,
      termsHtml: paymentTermsHtml(order.ref, method),
      openUrl: `https://${SITE.domain}/invoice/`,
      intro: `Thank you ${order.customerName}. Your invoice and payment details are below.`,
    });
    const waMessage = waPaymentDetailsMessage({ ...order, paymentMethod: method, total }, payText[method]);
    const invoiceLink = order.invoice ? `https://${SITE.domain}/invoice/?t=${order.invoice.token}` : null;

    return (
      <div className="space-y-5">
        <button type="button" onClick={() => setTab('orders')} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#22302A] px-4 text-xs font-bold uppercase tracking-wider text-[#F8F6F0]">
          <ArrowLeft className="h-4 w-4" /> All orders
        </button>
        <div>
          <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0]">SEND PAYMENT DETAILS</h2>
          <p className="text-sm text-[#889690]">Fill in the details, review the preview below, then send.</p>
        </div>

        {message && (
          <div className={`rounded-xl border p-4 text-sm ${message.startsWith('NOT') ? 'border-[#E0533C] text-[#E0533C]' : 'border-[#56C48B] text-[#56C48B]'}`}>
            {message}
          </div>
        )}

        <div className="space-y-4 rounded-2xl border border-[#22302A] bg-[#0E1513] p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className={label}>Order #</span>
              <input readOnly value={order.ref} className={field} />
            </div>
            <div>
              <span className={label}>Amount due</span>
              <input readOnly value={`$${total.toFixed(2)}`} className={field} />
            </div>
          </div>
          <div>
            <span className={label}>Customer name</span>
            <input readOnly value={order.customerName} className={field} />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <span className={label}>Customer email *</span>
              <input readOnly value={order.email || '(none - WhatsApp order)'} className={field} />
            </div>
            <div>
              <span className={label}>Customer phone</span>
              <input readOnly value={order.phone} className={field} />
            </div>
          </div>

          <div>
            <label htmlFor="pay-method" className={label}>
              Payment method
            </label>
            <select id="pay-method" value={method} onChange={(e) => setMethod(e.target.value as PayMethodId)} className={field}>
              {PAY_METHOD_IDS.map((id) => (
                <option key={id} value={id}>
                  {PAY_METHOD_LABEL[id]}
                  {isChosen(id) ? '  (customer chose this)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="pay-details" className="text-[11px] font-bold uppercase tracking-widest text-[#889690]">
                Payment details *
              </label>
              <div className="flex overflow-hidden rounded-lg border border-[#2C3E36] text-[11px] font-bold uppercase">
                {(['template', 'paste'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => chooseMode(m)}
                    className={`min-h-9 px-3 ${mode === m ? 'bg-[#C5A059] text-[#0D1512]' : 'bg-[#0A0F0D] text-[#B4C0BA]'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              id="pay-details"
              rows={8}
              value={payText[method]}
              onChange={(e) => setPayText((prev) => ({ ...prev, [method]: e.target.value }))}
              placeholder={'One detail per line, e.g.\nBSB: 123-456\nAccount number: 12345678'}
              className={`${field} font-mono text-sm`}
            />
            <p className="mt-1.5 text-xs text-[#66736D]">Auto-filled from your saved details for this method - edit freely. Each line gets a Copy button for the customer.</p>
          </div>

          <div className="rounded-xl border border-[#22302A] bg-[#0A0F0D] p-4">
            <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-[#889690]">
              <span>Payment terms</span>
              <span className="text-[#66736D]">always included</span>
            </div>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-[#B4C0BA]">
              {paymentTermsLines(order.ref, method).map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <label htmlFor="pay-note" className={label}>
              Notes (optional)
            </label>
            <textarea id="pay-note" rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. estimated dispatch date" className={field} />
          </div>
        </div>

        <div className="space-y-2">
          <span className={label}>Email preview</span>
          <iframe title="Email preview" srcDoc={previewHtml} sandbox="" className="h-[760px] w-full rounded-2xl border border-[#D5CDBD] bg-[#F4F0EA]" />
        </div>

        <button
          type="button"
          onClick={sendToCustomer}
          disabled={sending || !order.email}
          className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#C5A059] px-4 text-sm font-extrabold uppercase tracking-wider text-[#0D1512] hover:bg-[#D4AF37] disabled:opacity-50"
        >
          <Mail className="h-5 w-5 shrink-0" />
          <span className="truncate">{sending ? 'Sending...' : order.email ? `${order.invoice ? 'Resend' : 'Send'} to ${order.email}` : 'No email - use WhatsApp'}</span>
        </button>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#66736D]">
          <span className="h-px flex-1 bg-[#22302A]" /> or send via whatsapp <span className="h-px flex-1 bg-[#22302A]" />
        </div>

        <div className="space-y-3">
          <span className={label}>WhatsApp message preview</span>
          <div className="max-h-56 overflow-y-auto whitespace-pre-wrap rounded-xl border border-[#22302A] bg-[#0A0F0D] p-4 text-sm text-[#B4C0BA]">{waMessage}</div>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={waLink(order.phone, waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-xs font-extrabold uppercase tracking-wider text-[#0B100E]"
            >
              <MessageCircle className="h-4 w-4" /> Open WhatsApp
            </a>
            <button
              type="button"
              onClick={() => copy('wa', waMessage)}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#2C3E36] px-3 text-xs font-bold uppercase tracking-wider text-[#F8F6F0]"
            >
              {copied === 'wa' ? <Check className="h-4 w-4 text-[#56C48B]" /> : <Copy className="h-4 w-4 text-[#C5A059]" />} {copied === 'wa' ? 'Copied' : 'Copy text'}
            </button>
          </div>
        </div>

        {invoiceLink && (
          <div className="space-y-2 rounded-2xl border border-[#22302A] bg-[#0E1513] p-4">
            <span className={label}>Customer invoice link</span>
            <div className="break-all rounded-lg bg-[#0A0F0D] p-3 text-xs text-[#B4C0BA]">{invoiceLink}</div>
            <button type="button" onClick={() => copy('link', invoiceLink)} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#2C3E36] text-xs font-bold uppercase tracking-wider text-[#F8F6F0]">
              {copied === 'link' ? <Check className="h-4 w-4 text-[#56C48B]" /> : <Copy className="h-4 w-4 text-[#C5A059]" />} {copied === 'link' ? 'Copied' : 'Copy link'}
            </button>
          </div>
        )}

        <div className="space-y-3 rounded-2xl border border-[#22302A] bg-[#0E1513] p-4">
          <div className="flex items-center justify-between">
            <span className={`${label} mb-0`}>Order status</span>
            <span className={`${badge} ${STATUS_STYLE[order.status]}`}>{order.status}</span>
          </div>
          {order.paymentNotifiedAt && order.status !== 'paid' && order.status !== 'dispatched' && (
            <p className="text-sm font-semibold text-[#56C48B]">Customer says they have paid - check your bank, then mark as paid.</p>
          )}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setStatus('paid')} disabled={order.status === 'paid' || order.status === 'dispatched'} className="min-h-12 rounded-xl bg-[#56C48B] text-xs font-extrabold uppercase tracking-wider text-[#0D1512] disabled:opacity-40">
              Mark paid
            </button>
            <button type="button" onClick={() => setStatus('dispatched')} disabled={order.status === 'dispatched'} className="min-h-12 rounded-xl border border-[#6CB6E8] text-xs font-extrabold uppercase tracking-wider text-[#6CB6E8] disabled:opacity-40">
              Mark dispatched
            </button>
          </div>
        </div>
      </div>
    );
  };

  const enquiryScreen = () => {
    if (!enquiry) return null;
    const previewHtml = buildEmailHtml({
      title: 'Reply to your enquiry',
      intro: `Thank you for contacting ${SITE.name}. Our reply is below.`,
      rows: [
        { label: 'Reference', value: enquiry.ref, mono: true },
        { label: 'Reply', value: reply, block: true },
      ],
    });
    return (
      <div className="space-y-5">
        <button type="button" onClick={() => setTab('enquiries')} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#22302A] px-4 text-xs font-bold uppercase tracking-wider text-[#F8F6F0]">
          <ArrowLeft className="h-4 w-4" /> All enquiries
        </button>
        <h2 className="font-serif-luxury text-2xl font-bold text-[#F8F6F0]">REPLY TO {enquiry.name.toUpperCase()}</h2>
        {message && (
          <div className={`rounded-xl border p-4 text-sm ${message.startsWith('NOT') ? 'border-[#E0533C] text-[#E0533C]' : 'border-[#56C48B] text-[#56C48B]'}`}>{message}</div>
        )}
        <div className="space-y-2 rounded-2xl border border-[#22302A] bg-[#0E1513] p-4 text-sm">
          <div className="break-all text-[#B4C0BA]">{enquiry.email}{enquiry.phone ? ` · ${enquiry.phone}` : ''}</div>
          {enquiry.company && <div className="text-[#889690]">{enquiry.company}</div>}
          <div className="whitespace-pre-wrap text-[#F8F6F0]">{enquiry.message}</div>
        </div>
        <div>
          <label htmlFor="reply-box" className={label}>
            Your reply
          </label>
          <textarea id="reply-box" rows={9} value={reply} onChange={(e) => setReply(e.target.value)} className={field} />
        </div>
        <div className="space-y-2">
          <span className={label}>Email preview</span>
          <iframe title="Reply preview" srcDoc={previewHtml} sandbox="" className="h-[520px] w-full rounded-2xl border border-[#D5CDBD] bg-[#F4F0EA]" />
        </div>
        <button type="button" onClick={sendReply} disabled={sending} className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#C5A059] px-4 text-sm font-extrabold uppercase tracking-wider text-[#0D1512] hover:bg-[#D4AF37] disabled:opacity-50">
          <Mail className="h-5 w-5 shrink-0" />
          <span className="truncate">{sending ? 'Sending...' : `Send reply to ${enquiry.email}`}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="mx-auto min-h-screen max-w-2xl space-y-5 px-4 py-6 text-[#B4C0BA]">
      <div className="flex items-center justify-between">
        <h1 className="font-serif-luxury text-3xl font-bold text-[#F8F6F0]">DASHBOARD</h1>
        <button type="button" onClick={loadData} aria-label="Refresh" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#22302A] text-[#C5A059]">
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <nav aria-label="Admin sections" className="grid grid-cols-4 gap-2">
        {navBtn('dashboard', 'Dashboard', tab === 'dashboard')}
        {navBtn('orders', 'Orders', tab === 'orders' || tab === 'order')}
        {navBtn('enquiries', 'Enquiries', tab === 'enquiries' || tab === 'enquiry')}
        <button type="button" onClick={lock} className="min-h-12 rounded-xl border border-[#E0533C]/60 px-1 text-[10.5px] font-bold uppercase tracking-wide text-[#E0533C]">
          Sign out
        </button>
      </nav>

      {tab === 'dashboard' && (
        <div className="space-y-4">
          {claimedPaid > 0 && (
            <button type="button" onClick={() => setTab('orders')} className="w-full rounded-xl border border-[#56C48B] bg-[#122A1E] p-4 text-left text-sm font-semibold text-[#56C48B]">
              {claimedPaid} customer{claimedPaid > 1 ? 's say' : ' says'} they have paid - tap to check
            </button>
          )}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setTab('orders')} className="rounded-2xl border border-[#22302A] bg-[#0E1513] p-5 text-center hover:border-[#C5A059]/60">
              <div className="text-3xl">📦</div>
              <div className="mt-2 text-4xl font-bold text-[#F8F6F0]">{orders.length}</div>
              <div className="text-xs uppercase tracking-widest text-[#889690]">Orders</div>
              <span className={`${badge} mt-3 inline-block ${STATUS_STYLE.pending}`}>{pendingCount} pending</span>
            </button>
            <button type="button" onClick={() => setTab('enquiries')} className="rounded-2xl border border-[#22302A] bg-[#0E1513] p-5 text-center hover:border-[#C5A059]/60">
              <div className="text-3xl">💬</div>
              <div className="mt-2 text-4xl font-bold text-[#F8F6F0]">{enquiries.length}</div>
              <div className="text-xs uppercase tracking-widest text-[#889690]">Enquiries</div>
              <span className={`${badge} mt-3 inline-block ${STATUS_STYLE.new}`}>{newCount} new</span>
            </button>
          </div>
        </div>
      )}

      {tab === 'orders' && (
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Orders ({orders.length})</h2>
          {orders.length === 0 && <p className="rounded-2xl border border-[#22302A] bg-[#0E1513] p-6 text-center text-sm text-[#889690]">No orders yet.</p>}
          {orders.map((o) => (
            <div
              key={o.id}
              role="button"
              tabIndex={0}
              onClick={() => openOrder(o)}
              onKeyDown={(e) => e.key === 'Enter' && openOrder(o)}
              className="relative cursor-pointer rounded-2xl border border-[#22302A] bg-[#0E1513] p-4 transition-colors hover:border-[#C5A059]/60"
            >
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span className="text-sm font-bold text-[#E5C378]">{o.ref}</span>
                <span className={`${badge} ${STATUS_STYLE[o.status]}`}>{o.status}</span>
                <span className={`${badge} ${o.channel === 'whatsapp' ? 'border-[#25D366]/50 bg-[#10261A] text-[#25D366]' : 'border-[#2C3E36] bg-[#141E1A] text-[#B4C0BA]'}`}>{o.channel}</span>
                {o.paymentNotifiedAt && o.status !== 'paid' && o.status !== 'dispatched' && <span className={`${badge} border-[#56C48B] bg-[#56C48B] text-[#0D1512]`}>says paid</span>}
              </div>
              <button
                type="button"
                aria-label="Delete order"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOrder(o.id);
                }}
                className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center text-[#66736D] hover:text-[#E0533C]"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <div className="mt-2 text-lg font-semibold text-[#F8F6F0]">{o.customerName}</div>
              <div className="break-all text-sm text-[#889690]">
                {o.email || 'no email'} · {o.phone}
              </div>
              <div className="mt-2 text-xs text-[#66736D]">{o.items.map((i) => `${i.quantity}x ${i.name}`).join(', ')}</div>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-xs text-[#889690]">{PAY_METHOD_LABEL[o.paymentMethod as PayMethodId] || o.paymentMethod}</span>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#F8F6F0]">${o.total.toFixed(2)}</div>
                  <div className="text-[11px] text-[#66736D]">{when(o.createdAt)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'enquiries' && (
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059]">Enquiries ({enquiries.length})</h2>
          {enquiries.length === 0 && <p className="rounded-2xl border border-[#22302A] bg-[#0E1513] p-6 text-center text-sm text-[#889690]">No enquiries yet.</p>}
          {enquiries.map((e) => (
            <div
              key={e.id}
              role="button"
              tabIndex={0}
              onClick={() => openEnquiry(e)}
              onKeyDown={(ev) => ev.key === 'Enter' && openEnquiry(e)}
              className="relative cursor-pointer rounded-2xl border border-[#22302A] bg-[#0E1513] p-4 transition-colors hover:border-[#C5A059]/60"
            >
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span className={`${badge} ${STATUS_STYLE[e.status]}`}>{e.status}</span>
                <span className={`${badge} border-[#2C3E36] bg-[#141E1A] text-[#B4C0BA]`}>{e.type}</span>
                <span className="text-xs text-[#66736D]">{when(e.createdAt)}</span>
              </div>
              <button
                type="button"
                aria-label="Delete enquiry"
                onClick={(ev) => {
                  ev.stopPropagation();
                  removeEnquiry(e.id);
                }}
                className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center text-[#66736D] hover:text-[#E0533C]"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              <div className="mt-2 text-lg font-semibold text-[#F8F6F0]">{e.name}</div>
              <div className="break-all text-sm text-[#889690]">
                {e.email}
                {e.phone ? ` · ${e.phone}` : ''}
              </div>
              <div className="mt-2 line-clamp-2 text-sm text-[#66736D]">{e.message}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'order' && orderScreen()}
      {tab === 'enquiry' && enquiryScreen()}
    </div>
  );
};
