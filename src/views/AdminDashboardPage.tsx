// src/views/AdminDashboardPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  Package,
  Inbox,
  Send,
  Trash2,
  CheckCircle,
  Clock,
  MessageCircle,
  Mail,
  Copy,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  LogOut,
  Building,
  DollarSign,
} from 'lucide-react';
import { useAdminPasscode } from '../lib/useAdminPasscode.js';
import { PasscodeGate } from '../components/admin/PasscodeGate.js';
import { WhatsAppSendPanel } from '../components/admin/WhatsAppSendPanel.js';
import { CopyField } from '../components/CopyField.js';
import { StoredOrder } from '../lib/order.js';
import {
  getAllOrders,
  deleteOrder,
  setOrderStatus,
  sendInvoice,
  getPaymentDefaultsClient,
} from '../lib/orderStore.js';
import { PAY_METHOD_IDS, PAY_METHOD_LABEL, applyDefaults, blankPayText, linesToText, parsePayText, type PayLinesByMethod, type PayMethodId, type PayTextByMethod } from '../lib/payment.js';
import {
  StoredEnquiry,
  getAllEnquiries,
  deleteEnquiry,
  updateEnquiryStatus,
} from '../lib/enquiryStore.js';
import {
  paymentTermsLines,
  paymentTermsHtml,
  instructionsParts,
} from '../lib/order.js';
import { buildEmailHtml } from '../lib/emailTemplate.js';
import { buildInvoiceHtml } from '../lib/invoiceTemplate.js';
import { adminSendMail } from '../lib/adminClient.js';
import { SITE, REPLY, SHOP } from '../config/site.js';

export const AdminDashboardContent: React.FC = () => {
  const { isUnlocked, unlock, lock, error } = useAdminPasscode();

  // Navigation tab inside admin
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'enquiries' | 'send-payment' | 'reply-enquiry'>('dashboard');

  // State data
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(false);

  // Selected item for payment / reply composers
  const [selectedOrder, setSelectedOrder] = useState<StoredOrder | null>(null);
  const [selectedEnquiry, setSelectedEnquiry] = useState<StoredEnquiry | null>(null);

  // Payment Composer State: one paste box per payment method
  const [payText, setPayText] = useState<PayTextByMethod>(() => blankPayText(''));
  const [activeMethod, setActiveMethod] = useState<PayMethodId>('bank-transfer');
  const [saveDefaults, setSaveDefaults] = useState(true);
  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);
  const [invoiceLink, setInvoiceLink] = useState<string | null>(null);
  // Enquiry Reply State
  const [replyMessage, setReplyMessage] = useState('');
  const [replySending, setReplySending] = useState(false);
  const [replySuccess, setReplySuccess] = useState(false);

  // Fetch orders & enquiries
  const loadData = async () => {
    setLoading(true);
    try {
      const [o, e] = await Promise.all([getAllOrders(), getAllEnquiries()]);
      const normalizedOrders: StoredOrder[] = o.map((ord) => ({
        ...ord,
        orderRef: ord.orderRef || ord.ref,
        customerEmail: ord.customerEmail || ord.email,
        totalAmount: ord.totalAmount ?? ord.total,
      }));
      setOrders(normalizedOrders);
      setEnquiries(e);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUnlocked) {
      loadData();
    }
  }, [isUnlocked]);

  // If not unlocked, render PasscodeGate
  if (!isUnlocked) {
    return <PasscodeGate onUnlock={unlock} error={error} />;
  }

  // Handle Order Deletion
  const handleDeleteOrder = async (id: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      await deleteOrder(id);
      await loadData();
      if (selectedOrder?.id === id) setSelectedOrder(null);
    }
  };

  // Handle Enquiry Deletion
  const handleDeleteEnquiry = async (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      await deleteEnquiry(id);
      await loadData();
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    }
  };

  // Open the invoice composer: client details and the method the client chose are
  // pre-filled; saved payment details are loaded into the paste boxes.
  const handleStartPaymentEmail = async (order: StoredOrder) => {
    const ref = order.orderRef || order.ref;
    setSelectedOrder(order);
    setActiveMethod((PAY_METHOD_IDS as string[]).includes(order.paymentMethod) ? (order.paymentMethod as PayMethodId) : 'bank-transfer');
    setPayText(blankPayText(ref));
    setInvoiceLink(order.invoice ? `https://${SITE.domain}/invoice/?t=${order.invoice.token}` : null);
    setActiveTab('send-payment');
    setEmailSuccess(null);
    const defaults = await getPaymentDefaultsClient();
    const lines = applyDefaults(defaults, ref);
    const text: PayTextByMethod = {
      'bank-transfer': linesToText(lines['bank-transfer']),
      payid: linesToText(lines.payid),
      crypto: linesToText(lines.crypto),
    };
    if (order.invoice) text[order.invoice.method] = linesToText(order.invoice.lines);
    setPayText(text);
  };
  // Mark an order paid / dispatched. Marking paid emails the client a thank-you.
  const handleSetStatus = async (order: StoredOrder, status: StoredOrder['status']) => {
    if (status === 'paid' && !confirm('Mark as paid? This automatically emails the client a payment-received thank-you.')) return;
    const { order: saved, thankYouSent } = await setOrderStatus(order.id, status);
    if (!saved) {
      alert('Could not update the order.');
      return;
    }
    await loadData();
    if (status === 'paid') alert(thankYouSent ? 'Marked paid. Thank-you email sent to the client.' : 'Marked paid, but the thank-you email could not be sent.');
  };
  // Open Enquiry Reply Composer
  const handleStartEnquiryReply = (enquiry: StoredEnquiry) => {
    setSelectedEnquiry(enquiry);
    setReplyMessage(`Dear ${enquiry.name},\n\nThank you for contacting PROPPS PTY LTD regarding your production requirements.\n\nOur Melbourne studio dispatch team has reviewed your inquiry...`);
    setActiveTab('reply-enquiry');
    setReplySuccess(false);
  };

  // Dispatch the invoice email (branded invoice + "open invoice & pay" page)
  const handleSendPaymentEmail = async () => {
    if (!selectedOrder) return;
    const lines = parsePayText(payText[activeMethod]);
    if (lines.length === 0) {
      alert('Paste or type the payment details in the box first.');
      return;
    }
    if (!selectedOrder.email) {
      setEmailSuccess('This order has no customer email (WhatsApp order). Use the WhatsApp option instead.');
      return;
    }
    setEmailSending(true);
    setEmailSuccess(null);
    const allLines = Object.fromEntries(PAY_METHOD_IDS.map((id) => [id, parsePayText(payText[id])])) as PayLinesByMethod;
    const result = await sendInvoice({ orderId: selectedOrder.id, method: activeMethod, lines, saveDefaults, allLines });
    setEmailSending(false);
    if (result.sent && result.order) {
      setSelectedOrder({ ...result.order, orderRef: result.order.ref, customerEmail: result.order.email, totalAmount: result.order.total });
      setInvoiceLink(result.order.invoice ? `https://${SITE.domain}/invoice/?t=${result.order.invoice.token}` : null);
      setEmailSuccess(`Invoice emailed to ${selectedOrder.email}. Status is now payment-sent.`);
      await loadData();
    } else {
      setEmailSuccess(`Invoice was NOT sent (${result.reason || 'unknown error'}). Check the email settings in Vercel, or use WhatsApp.`);
    }
  };
  // Send enquiry reply
  const handleSendEnquiryReply = async () => {
    if (!selectedEnquiry) return;
    setReplySending(true);

    const emailHtml = buildEmailHtml({
      title: `Reply to your inquiry — ${SITE.name}`,
      intro: `Thank you for contacting our Melbourne studio. Please find our response below:`,
      rows: [
        { label: 'Inquiry Reference', value: selectedEnquiry.id, mono: true },
        { label: 'Response', value: replyMessage, block: true },
      ],
      footer: `PROPPS PTY LTD · Melbourne VIC 3093 Australia`,
    });

    const result = await adminSendMail({
      to: selectedEnquiry.email,
      subject: `Re: ${selectedEnquiry.subject || 'Production Inquiry'} — ${SITE.name}`,
      html: emailHtml,
      text: replyMessage,
    });

    if (result.sent) {
      await updateEnquiryStatus(selectedEnquiry.id, 'replied');
      await loadData();
    }
    setReplySending(false);
    setReplySuccess(result.sent);
    if (!result.sent) {
      alert(`Reply was NOT sent (${result.reason || 'unknown error'}). Check the email settings in Vercel.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#090D0B] text-[#B4C0BA] pb-20">
      {/* Admin Top Navigation Bar */}
      <div className="bg-[#0E1513] border-b border-[#1E2B25] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#141E1A] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif-luxury font-bold text-xs">
                  P
                </div>
                <span className="font-serif-luxury font-bold text-sm text-[#F8F6F0]">
                  {SITE.name} PORTAL
                </span>
              </div>

              {/* Navigation Tabs */}
              <nav className="hidden sm:flex items-center gap-1 text-xs font-mono-code">
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'dashboard'
                      ? 'bg-[#1C2A24] text-[#C5A059] font-bold'
                      : 'text-[#889690] hover:text-white'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('orders')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'orders'
                      ? 'bg-[#1C2A24] text-[#C5A059] font-bold'
                      : 'text-[#889690] hover:text-white'
                  }`}
                >
                  <span>Orders</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#121A16] text-[10px] text-[#C5A059] border border-[#22302A]">
                    {orders.length}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('enquiries')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    activeTab === 'enquiries'
                      ? 'bg-[#1C2A24] text-[#C5A059] font-bold'
                      : 'text-[#889690] hover:text-white'
                  }`}
                >
                  <span>Enquiries</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#121A16] text-[10px] text-[#C5A059] border border-[#22302A]">
                    {enquiries.length}
                  </span>
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={loadData}
                disabled={loading}
                className="p-2 text-[#889690] hover:text-[#C5A059] rounded-lg hover:bg-[#141E1A]"
                title="Refresh Data"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>

              <button
                type="button"
                onClick={lock}
                className="px-3 py-1.5 rounded-lg bg-[#141E1A] hover:bg-[#1C2A24] border border-[#22302A] text-xs font-mono-code text-[#E0533C] flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lock Portal</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* TAB 1: OVERVIEW DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#22302A] space-y-2">
                <span className="text-xs font-mono-code uppercase text-[#9AA7A0]">
                  Total Prop Orders
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-code text-3xl font-extrabold text-[#C5A059]">
                    {orders.length}
                  </span>
                  <Package className="w-6 h-6 text-[#4E5C56]" />
                </div>
                <p className="text-[11px] text-[#889690] font-mono-code">
                  WhatsApp &amp; Email Checkout Records
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#22302A] space-y-2">
                <span className="text-xs font-mono-code uppercase text-[#9AA7A0]">
                  Studio Inquiries
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-code text-3xl font-extrabold text-[#E5C378]">
                    {enquiries.length}
                  </span>
                  <Inbox className="w-6 h-6 text-[#4E5C56]" />
                </div>
                <p className="text-[11px] text-[#889690] font-mono-code">
                  Contact Form &amp; Wholesale Requests
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#22302A] space-y-2">
                <span className="text-xs font-mono-code uppercase text-[#9AA7A0]">
                  Storage Mode
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-code text-xl font-bold text-[#56C48B]">
                    Active &amp; Ready
                  </span>
                  <Building className="w-6 h-6 text-[#4E5C56]" />
                </div>
                <p className="text-[11px] text-[#889690] font-mono-code">
                  Melbourne VIC 3093 Hub
                </p>
              </div>
            </div>

            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders List */}
              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#22302A] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E2B25]">
                  <h3 className="font-serif-luxury text-sm font-bold text-[#F8F6F0] uppercase tracking-wider">
                    Recent Orders
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('orders')}
                    className="text-xs font-mono-code text-[#C5A059] hover:underline"
                  >
                    View All ({orders.length}) →
                  </button>
                </div>

                {orders.length === 0 ? (
                  <p className="text-xs text-[#889690] py-6 text-center font-mono-code">
                    No orders registered yet. Checkout an item to see it here!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {orders.slice(0, 4).map((ord) => (
                      <div
                        key={ord.id}
                        className="p-3 bg-[#0D1512] rounded-xl border border-[#1E2B25] flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono-code font-bold text-xs text-[#C5A059]">
                              {ord.orderRef}
                            </span>
                            <span
                              className={`text-[9px] font-mono-code px-1.5 py-0.5 rounded uppercase font-bold ${
                                ord.channel === 'whatsapp'
                                  ? 'bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40'
                                  : 'bg-[#1C2A24] text-[#E5C378] border border-[#2C3E36]'
                              }`}
                            >
                              {ord.channel}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#9AA7A0] block mt-0.5">
                            {ord.customerName} · ${ord.totalAmount} AUD
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleStartPaymentEmail(ord)}
                          className="px-2.5 py-1 bg-[#1C2A24] hover:bg-[#263830] text-[#C5A059] text-[11px] font-mono-code rounded border border-[#2C3E36]"
                        >
                          Payment Details →
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Enquiries List */}
              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#22302A] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E2B25]">
                  <h3 className="font-serif-luxury text-sm font-bold text-[#F8F6F0] uppercase tracking-wider">
                    Recent Enquiries
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('enquiries')}
                    className="text-xs font-mono-code text-[#C5A059] hover:underline"
                  >
                    View All ({enquiries.length}) →
                  </button>
                </div>

                {enquiries.length === 0 ? (
                  <p className="text-xs text-[#889690] py-6 text-center font-mono-code">
                    No inquiries received yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {enquiries.slice(0, 4).map((enq) => (
                      <div
                        key={enq.id}
                        className="p-3 bg-[#0D1512] rounded-xl border border-[#1E2B25] flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs text-[#F8F6F0]">
                              {enq.name}
                            </span>
                            <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-[#1C2A24] text-[#C5A059] border border-[#2C3E36] uppercase">
                              {enq.type}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#9AA7A0] block mt-0.5 truncate max-w-xs">
                            {enq.subject || enq.message}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleStartEnquiryReply(enq)}
                          className="px-2.5 py-1 bg-[#1C2A24] hover:bg-[#263830] text-[#C5A059] text-[11px] font-mono-code rounded border border-[#2C3E36]"
                        >
                          Reply →
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ORDERS TABLE */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                  STORED PRODUCTION ORDERS ({orders.length})
                </h2>
                <p className="text-xs text-[#9AA7A0] font-mono-code">
                  Saved via WhatsApp and Email checkout with live status tracking.
                </p>
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="p-12 text-center bg-[#121A16] rounded-2xl border border-[#22302A] space-y-2">
                <Package className="w-8 h-8 text-[#4E5C56] mx-auto" />
                <p className="text-sm font-semibold text-[#F8F6F0]">No Orders in Storage</p>
                <p className="text-xs text-[#9AA7A0]">Add props to cart and complete checkout to generate records.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#22302A] bg-[#121A16]">
                <table className="w-full text-left text-xs font-mono-code">
                  <thead className="bg-[#0D1512] text-[#889690] uppercase border-b border-[#1E2B25]">
                    <tr>
                      <th className="p-4">Ref &amp; Date</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Items / Total</th>
                      <th className="p-4">Payment / Channel</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A2520]">
                    {orders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-[#141E1A] transition-colors">
                        <td className="p-4">
                          <span className="font-bold text-[#C5A059] block">{ord.orderRef}</span>
                          <span className="text-[10px] text-[#7A8782] block">
                            {new Date(ord.createdAt).toLocaleDateString()}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-white block">{ord.customerName}</span>
                          <span className="text-[10px] text-[#9AA7A0] block">{ord.customerEmail}</span>
                          <span className="text-[10px] text-[#7A8782] block">{ord.phone}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-white block">${ord.totalAmount} AUD</span>
                          <span className="text-[10px] text-[#9AA7A0] block">
                            {ord.items.map((i: { quantity: number; name: string }) => `${i.quantity}x ${i.name}`).join(', ')}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="block mb-1 text-[11px] font-bold text-[#E5C378]">
                            {PAY_METHOD_LABEL[ord.paymentMethod as PayMethodId] || ord.paymentMethod}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              ord.channel === 'whatsapp'
                                ? 'bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40'
                                : 'bg-[#1C2A24] text-[#E5C378] border border-[#2C3E36]'
                            }`}
                          >
                            {ord.channel}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              ord.status === 'payment-sent'
                                ? 'bg-[#56C48B]/20 text-[#56C48B] border border-[#56C48B]/40'
                                : 'bg-[#1C2A24] text-[#C5A059] border border-[#2C3E36]'
                            }`}
                          >
                            {ord.status}
                          </span>
                          {ord.paymentNotifiedAt && ord.status !== 'paid' && ord.status !== 'dispatched' && (
                            <span className="block mt-1 text-[10px] font-bold text-[#56C48B]">Client says PAID - verify</span>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleStartPaymentEmail(ord)}
                              className="px-2.5 py-1.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0D1512] font-bold rounded text-[11px] cursor-pointer"
                            >
                              {ord.invoice ? 'Invoice' : 'Send Invoice'}
                            </button>
                            {(ord.status === 'payment-sent' || ord.status === 'pending') && (
                              <button type="button" onClick={() => handleSetStatus(ord, 'paid')} className="px-2.5 py-1.5 bg-[#56C48B] hover:bg-[#6fd6a0] text-[#0D1512] font-bold rounded text-[11px] cursor-pointer">Mark Paid</button>
                            )}
                            {ord.status === 'paid' && (
                              <button type="button" onClick={() => handleSetStatus(ord, 'dispatched')} className="px-2.5 py-1.5 bg-[#1C2A24] border border-[#56C48B] text-[#56C48B] font-bold rounded text-[11px] cursor-pointer">Mark Dispatched</button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleDeleteOrder(ord.id)}
                              className="p-1.5 text-[#889690] hover:text-[#E0533C] rounded hover:bg-[#1C2A24]"
                              title="Delete Order"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ENQUIRIES TABLE */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                  ENQUIRIES &amp; WHOLESALE REQUESTS ({enquiries.length})
                </h2>
                <p className="text-xs text-[#9AA7A0] font-mono-code">
                  Direct customer contact form submissions and B2B wholesale studio quotes.
                </p>
              </div>
            </div>

            {enquiries.length === 0 ? (
              <div className="p-12 text-center bg-[#121A16] rounded-2xl border border-[#22302A] space-y-2">
                <Inbox className="w-8 h-8 text-[#4E5C56] mx-auto" />
                <p className="text-sm font-semibold text-[#F8F6F0]">No Enquiries Logged</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-[#22302A] bg-[#121A16]">
                <table className="w-full text-left text-xs font-mono-code">
                  <thead className="bg-[#0D1512] text-[#889690] uppercase border-b border-[#1E2B25]">
                    <tr>
                      <th className="p-4">Sender</th>
                      <th className="p-4">Type / Subject</th>
                      <th className="p-4">Message</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A2520]">
                    {enquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-[#141E1A] transition-colors">
                        <td className="p-4">
                          <span className="font-bold text-white block">{enq.name}</span>
                          <span className="text-[10px] text-[#9AA7A0] block">{enq.email}</span>
                          <span className="text-[10px] text-[#7A8782] block">{enq.phone}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-1.5 py-0.5 rounded bg-[#1C2A24] text-[9px] text-[#C5A059] uppercase font-bold border border-[#2C3E36] inline-block mb-1">
                            {enq.type}
                          </span>
                          <span className="text-xs text-white block font-semibold">
                            {enq.subject || 'No subject'}
                          </span>
                        </td>
                        <td className="p-4 max-w-xs">
                          <p className="text-xs text-[#9AA7A0] line-clamp-2 whitespace-pre-wrap">
                            {enq.message}
                          </p>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              enq.status === 'replied'
                                ? 'bg-[#56C48B]/20 text-[#56C48B] border border-[#56C48B]/40'
                                : 'bg-[#1C2A24] text-[#C5A059] border border-[#2C3E36]'
                            }`}
                          >
                            {enq.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleStartEnquiryReply(enq)}
                              className="px-2.5 py-1.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0D1512] font-bold rounded text-[11px] cursor-pointer"
                            >
                              Compose Reply
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              className="p-1.5 text-[#889690] hover:text-[#E0533C] rounded hover:bg-[#1C2A24]"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: INVOICE COMPOSER (one paste box + live preview) */}
        {activeTab === 'send-payment' && selectedOrder && (() => {
          const ref = selectedOrder.orderRef || selectedOrder.ref;
          const clientMethod = selectedOrder.paymentMethod as PayMethodId;
          const discount = activeMethod === 'crypto' ? Math.round(selectedOrder.subtotal * (SHOP.cryptoDiscount / 100)) : 0;
          const total = selectedOrder.subtotal + selectedOrder.shippingFee - discount;
          const lines = parsePayText(payText[activeMethod]);
          const previewHtml = buildInvoiceHtml({
            order: {
              ref,
              date: selectedOrder.invoice ? new Date(selectedOrder.invoice.sentAt).toISOString() : new Date().toISOString(),
              customerName: selectedOrder.customerName,
              email: selectedOrder.email,
              phone: selectedOrder.phone,
              address: selectedOrder.address,
              paymentMethod: activeMethod,
              items: selectedOrder.items,
              subtotal: selectedOrder.subtotal,
              shippingFee: selectedOrder.shippingFee,
              discount,
              total,
            },
            lines,
            termsHtml: paymentTermsHtml(ref, activeMethod),
            openUrl: `https://${SITE.domain}/invoice/`,
            intro: `Thank you ${selectedOrder.customerName}. Your invoice and payment details are below.`,
          });
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2B25]">
                <div>
                  <h2 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">REPLY · {ref}</h2>
                  <p className="text-xs text-[#9AA7A0] font-mono-code">
                    {selectedOrder.customerName} · ${total.toFixed(2)} AUD · status: {selectedOrder.status}
                  </p>
                </div>
                <button type="button" onClick={() => setActiveTab('orders')} className="text-xs font-mono-code text-[#C5A059] hover:underline">
                  ← Back to Orders
                </button>
              </div>

              {emailSuccess && (
                <div className="p-4 rounded-xl bg-[#14231C] border border-[#56C48B] text-xs font-mono-code text-[#56C48B] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{emailSuccess}</span>
                </div>
              )}
              {invoiceLink && (
                <div className="p-4 rounded-xl bg-[#121A16] border border-[#2C3E36] text-xs font-mono-code space-y-2">
                  <span className="text-[#C5A059] uppercase font-bold tracking-wider block">Client invoice page</span>
                  <CopyField value={invoiceLink} />
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-5">
                  {/* Customer (auto-filled) */}
                  <div className="p-4 rounded-2xl bg-[#121A16] border border-[#2C3E36] text-xs font-mono-code space-y-1">
                    <div className="text-white font-bold">{selectedOrder.customerName}</div>
                    <div className="text-[#B4C0BA] break-all">{selectedOrder.email || '(no email - WhatsApp order)'} · {selectedOrder.phone}</div>
                    <div className="text-[#B4C0BA] whitespace-pre-wrap">{selectedOrder.address}</div>
                    <div className="text-[#9AA7A0]">{selectedOrder.items.map((i) => `${i.quantity}x ${i.name}`).join(', ')}</div>
                  </div>

                  {/* Payment method chosen by the customer, others beside it */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] block">Payment method</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {PAY_METHOD_IDS.map((id) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveMethod(id)}
                          className={`px-3 py-2 rounded-lg border text-left text-[11px] font-mono-code transition-colors ${
                            activeMethod === id ? 'bg-[#C5A059] text-[#0D1512] border-[#C5A059] font-bold' : 'bg-[#0A0F0D] text-[#B4C0BA] border-[#2C3E36] hover:border-[#C5A059]'
                          }`}
                        >
                          <span className="block">{PAY_METHOD_LABEL[id]}</span>
                          {clientMethod === id && (
                            <span className={`block mt-1 text-[9px] uppercase tracking-wider ${activeMethod === id ? 'text-[#0D1512]' : 'text-[#E5C378]'}`}>★ Customer chose this</span>
                          )}
                        </button>
                      ))}
                    </div>
                    {activeMethod !== clientMethod && (
                      <p className="text-[11px] text-[#E5C378] font-mono-code">
                        Customer chose {PAY_METHOD_LABEL[clientMethod] || clientMethod}. Invoicing {PAY_METHOD_LABEL[activeMethod]} changes the total to ${total.toFixed(2)}.
                      </p>
                    )}
                  </div>

                  {/* The one paste box */}
                  <div className="space-y-2">
                    <label htmlFor="pay-details-box" className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059] block">
                      Payment details - type or paste here
                    </label>
                    <textarea
                      id="pay-details-box"
                      rows={9}
                      value={payText[activeMethod]}
                      onChange={(e) => setPayText((prev) => ({ ...prev, [activeMethod]: e.target.value }))}
                      placeholder={'One detail per line, e.g.\nBSB: 123-456\nAccount number: 12345678'}
                      className="w-full bg-[#0A0F0D] border-2 border-[#2C3E36] rounded-xl p-4 text-sm font-mono-code text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                    />
                    <p className="text-[11px] text-[#7A8782] font-mono-code">
                      Lines like &quot;BSB: 123-456&quot; get a Copy button for your customer. Lines ending in a colon with nothing after it are ignored.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1714] border border-[#22302A] text-xs font-mono-code text-[#9AA7A0] space-y-1">
                    <span className="text-[#C5A059] font-bold uppercase tracking-wider block text-[11px]">Instructions added automatically</span>
                    {paymentTermsLines(ref, activeMethod).map((line, i) => (
                      <div key={i}>• {line}</div>
                    ))}
                  </div>

                  <label className="flex items-center gap-2 text-[11px] font-mono-code text-[#9AA7A0]">
                    <input type="checkbox" checked={saveDefaults} onChange={(e) => setSaveDefaults(e.target.checked)} />
                    Remember these details for the next order
                  </label>

                  <button
                    type="button"
                    onClick={handleSendPaymentEmail}
                    disabled={emailSending}
                    className="w-full py-4 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer font-mono-code disabled:opacity-60"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{emailSending ? 'Sending...' : selectedOrder.invoice ? 'Resend to customer' : 'Send to customer'}</span>
                  </button>

                  <details className="rounded-xl bg-[#121A16] border border-[#22302A]">
                    <summary className="cursor-pointer p-3 text-xs font-mono-code text-[#9AA7A0]">Send by WhatsApp instead</summary>
                    <div className="p-3 pt-0">
                      <WhatsAppSendPanel order={selectedOrder} paymentDetails={payText[activeMethod]} />
                    </div>
                  </details>
                </div>

                {/* Live preview of exactly what the customer receives */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-code text-[#C5A059] uppercase font-bold tracking-wider block">
                    Preview - what the customer receives
                  </span>
                  <iframe
                    title="Invoice email preview"
                    srcDoc={previewHtml}
                    sandbox=""
                    className="w-full h-[1100px] rounded-2xl border border-[#D5CDBD] bg-[#F4F0EA]"
                  />
                </div>
              </div>
            </div>
          );
        })()}
        {/* TAB 5: REPLY TO ENQUIRY COMPOSER */}
        {activeTab === 'reply-enquiry' && selectedEnquiry && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E2B25]">
              <div>
                <h2 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                  REPLY TO ENQUIRY · {selectedEnquiry.name}
                </h2>
                <p className="text-xs text-[#9AA7A0] font-mono-code">
                  Recipient: {selectedEnquiry.email} · Subject: {selectedEnquiry.subject}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('enquiries')}
                className="text-xs font-mono-code text-[#C5A059] hover:underline"
              >
                ← Back to Enquiries
              </button>
            </div>

            {replySuccess && (
              <div className="p-4 rounded-xl bg-[#14231C] border border-[#56C48B] text-xs font-mono-code text-[#56C48B] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Reply dispatched to customer!</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column: Form */}
              <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] space-y-4">
                <div className="p-3 bg-[#0A0F0D] rounded-xl border border-[#22302A] text-xs space-y-1">
                  <span className="text-[10px] font-mono-code text-[#889690] uppercase block">
                    Original Message:
                  </span>
                  <p className="text-[#B4C0BA] whitespace-pre-wrap">
                    {selectedEnquiry.message}
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code uppercase text-[#B4C0BA] mb-1">
                    Your Response Body
                  </label>
                  <textarea
                    rows={8}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl p-3.5 text-xs text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendEnquiryReply}
                  disabled={replySending}
                  className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer font-mono-code"
                >
                  <Send className="w-4 h-4" />
                  <span>{replySending ? 'Sending Response...' : 'Send Branded Reply'}</span>
                </button>
              </div>

              {/* Right Column: Preview */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code text-[#C5A059] uppercase font-bold tracking-wider block">
                  Live Branded Email Preview
                </span>

                <div className="p-4 bg-[#F4F0EA] rounded-2xl shadow-xl border border-[#D5CDBD] text-[#1A1414]">
                  <div className="bg-white rounded-xl p-5 space-y-4 text-xs font-sans">
                    <div className="bg-[#141010] p-4 rounded-lg text-center">
                      <span className="font-serif-luxury font-black text-lg text-white tracking-wider block">
                        {SITE.name}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-[#1A1414]">
                        Response to your inquiry
                      </h4>
                      <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg whitespace-pre-wrap text-[#2C2420]">
                        {replyMessage}
                      </div>
                    </div>

                    <div className="text-[10px] text-center text-[#7F746E] pt-2 border-t border-[#EAE3DC]">
                      PROPPS PTY LTD · Melbourne VIC 3093 Australia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
