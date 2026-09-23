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
  updateOrderStatus,
} from '../lib/orderStore.js';
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
import { sendMail } from '../lib/mailer.js';
import { SITE, REPLY } from '../config/site.js';

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

  // Payment Composer State
  const [composerMode, setComposerMode] = useState<'template' | 'paste'>('template');
  const [paymentDetailText, setPaymentDetailText] = useState(
    `BSB: 063-000\nAccount: 1234 5678\nAccount Name: PROPPS PTY LTD\nReference: `
  );
  const [emailSending, setEmailSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState<string | null>(null);

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

  // Open Payment Composer for an order
  const handleStartPaymentEmail = (order: StoredOrder) => {
    setSelectedOrder(order);
    if (order.paymentMethod === 'bank-transfer' || order.paymentMethod === 'payid') {
      setPaymentDetailText(`PayID: dispatch@propps.com.au\nBank: Commonwealth Bank of Australia\nBSB: 063-000\nAccount Number: 1092 8493\nAccount Name: PROPPS PTY LTD\nReference: ${order.orderRef}`);
    } else {
      setPaymentDetailText(`Cryptocurrency Transfer (10% Discount Applied):\nUSDT (TRC20): T9yD14Nj9yDb1992019488392\nBitcoin: bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq\nReference: ${order.orderRef}`);
    }
    setActiveTab('send-payment');
    setEmailSuccess(null);
  };

  // Open Enquiry Reply Composer
  const handleStartEnquiryReply = (enquiry: StoredEnquiry) => {
    setSelectedEnquiry(enquiry);
    setReplyMessage(`Dear ${enquiry.name},\n\nThank you for contacting PROPPS PTY LTD regarding your production requirements.\n\nOur Melbourne studio dispatch team has reviewed your inquiry...`);
    setActiveTab('reply-enquiry');
    setReplySuccess(false);
  };

  // Dispatch payment details email
  const handleSendPaymentEmail = async () => {
    if (!selectedOrder) return;
    setEmailSending(true);
    setEmailSuccess(null);

    const parts = instructionsParts(
      `Please find your official payment instructions below for order ${selectedOrder.orderRef}.`,
      paymentDetailText,
      `Complete payment within ${REPLY.deadlineHours} hours to confirm your Australia Post Express allocation.`
    );

    const emailHtml = buildEmailHtml({
      title: `Payment Instructions — Order ${selectedOrder.orderRef}`,
      preheader: `Payment details for order ${selectedOrder.orderRef} (${SITE.name})`,
      intro: `Your prop order has been confirmed by our Melbourne fulfillment desk. Please remit payment using the instructions below.`,
      refBadge: selectedOrder.orderRef,
      rows: [
        { label: 'Order Reference', value: selectedOrder.orderRef, mono: true },
        { label: 'Customer Name', value: selectedOrder.customerName },
        { label: 'Payment Method', value: selectedOrder.paymentMethod },
        { label: 'Payment Details', html: parts.html, block: true },
        { label: 'Amount Due', value: `$${selectedOrder.totalAmount} AUD`, highlight: true, mono: true },
      ],
      afterRows: paymentTermsHtml(),
      footer: `Dispatched from Eltham VIC 3093 · Crimes (Currency) Act 1981 Section 22 Compliant`,
    });

    const result = await sendMail({
      to: selectedOrder.customerEmail || selectedOrder.email || 'customer@example.com',
      subject: `Payment Instructions for Order ${selectedOrder.orderRef || selectedOrder.ref} — ${SITE.name}`,
      html: emailHtml,
      text: `${parts.text}\n\n${paymentTermsLines().join('\n')}`,
    });

    // Mark order status as payment-sent
    await updateOrderStatus(selectedOrder.id, 'payment-sent');
    await loadData();
    setEmailSending(false);
    setEmailSuccess(result.sent ? 'Email dispatched to customer!' : 'Logged to order. Note: SMTP env vars are pending, so email was recorded locally and simulated.');
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

    await sendMail({
      to: selectedEnquiry.email,
      subject: `Re: ${selectedEnquiry.subject || 'Production Inquiry'} — ${SITE.name}`,
      html: emailHtml,
      text: replyMessage,
    });

    await updateEnquiryStatus(selectedEnquiry.id, 'replied');
    await loadData();
    setReplySending(false);
    setReplySuccess(true);
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
                      <th className="p-4">Channel</th>
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
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleStartPaymentEmail(ord)}
                              className="px-2.5 py-1.5 bg-[#C5A059] hover:bg-[#D4AF37] text-[#0D1512] font-bold rounded text-[11px] cursor-pointer"
                            >
                              Payment Email
                            </button>
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

        {/* TAB 4: SEND PAYMENT EMAIL COMPOSER */}
        {activeTab === 'send-payment' && selectedOrder && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E2B25]">
              <div>
                <h2 className="font-serif-luxury text-xl font-bold text-[#F8F6F0]">
                  DISPATCH PAYMENT DETAILS · {selectedOrder.orderRef}
                </h2>
                <p className="text-xs text-[#9AA7A0] font-mono-code">
                  Customer: {selectedOrder.customerName} ({selectedOrder.customerEmail}) · Total: ${selectedOrder.totalAmount} AUD
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className="text-xs font-mono-code text-[#C5A059] hover:underline"
              >
                ← Back to Orders
              </button>
            </div>

            {emailSuccess && (
              <div className="p-4 rounded-xl bg-[#14231C] border border-[#56C48B] text-xs font-mono-code text-[#56C48B] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{emailSuccess}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column: Composer Controls & WhatsApp Panel */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#121A16] border border-[#2C3E36] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#C5A059]">
                      Payment Instructions Text
                    </span>

                    {/* Template / Paste Toggle */}
                    <div className="flex bg-[#0A0F0D] p-1 rounded-lg border border-[#22302A] text-[10px] font-mono-code">
                      <button
                        type="button"
                        onClick={() => setComposerMode('template')}
                        className={`px-2 py-1 rounded transition-colors ${
                          composerMode === 'template' ? 'bg-[#C5A059] text-[#0D1512] font-bold' : 'text-[#889690]'
                        }`}
                      >
                        Template
                      </button>
                      <button
                        type="button"
                        onClick={() => setComposerMode('paste')}
                        className={`px-2 py-1 rounded transition-colors ${
                          composerMode === 'paste' ? 'bg-[#C5A059] text-[#0D1512] font-bold' : 'text-[#889690]'
                        }`}
                      >
                        Paste Details
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#9AA7A0]">
                    Type or paste the bank transfer or cryptocurrency account coordinates. The official framing, order reference, Commonwealth compliance lines, and 48hr deadline are composed automatically.
                  </p>

                  <textarea
                    rows={6}
                    value={paymentDetailText}
                    onChange={(e) => setPaymentDetailText(e.target.value)}
                    className="w-full bg-[#0A0F0D] border border-[#2C3E36] rounded-xl p-3.5 text-xs font-mono-code text-white placeholder-[#4E5C56] focus:border-[#C5A059] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={handleSendPaymentEmail}
                    disabled={emailSending}
                    className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] to-[#E5C378] hover:from-[#D4AF37] hover:to-[#F3D798] text-[#0D1512] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer font-mono-code"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{emailSending ? 'Transmitting Email...' : 'Send Branded Payment Email'}</span>
                  </button>
                </div>

                {/* WhatsApp Dispatch Panel */}
                <WhatsAppSendPanel
                  order={selectedOrder}
                  paymentDetails={paymentDetailText}
                />
              </div>

              {/* Right Column: Live LIGHT HTML Email Preview (Per Section P Rule) */}
              <div className="space-y-2">
                <span className="text-xs font-mono-code text-[#C5A059] uppercase font-bold tracking-wider block">
                  Mandatory Light-Shell Email Preview (Zoho / Gmail Safe)
                </span>

                <div className="p-4 bg-[#F4F0EA] rounded-2xl shadow-xl overflow-hidden border border-[#D5CDBD] text-[#1A1414]">
                  {/* Render preview frame */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#EAE3DC] p-5 space-y-4 text-xs font-sans">
                    {/* Header Dark Band */}
                    <div className="bg-[#141010] p-4 rounded-lg text-center space-y-1">
                      <span className="font-serif-luxury font-black text-lg text-white tracking-wider block">
                        {SITE.name}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#C5A059] block uppercase tracking-widest">
                        {REPLY.headerTagline}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono-code font-bold text-[#C5A059] uppercase">
                        Order Ref: {selectedOrder.orderRef}
                      </span>
                      <h3 className="font-bold text-base text-[#1A1414]">
                        Payment Instructions
                      </h3>
                      <p className="text-xs text-[#4F4640]">
                        Your prop order has been confirmed by our Melbourne fulfillment desk. Please remit payment using the instructions below.
                      </p>
                    </div>

                    {/* Instruction Box */}
                    <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg font-mono-code text-xs whitespace-pre-wrap text-[#2C2420]">
                      {paymentDetailText}
                    </div>

                    {/* Total Amount Due */}
                    <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border-t-2 border-[#C5A059] font-mono-code">
                      <span className="font-bold text-[#6F665F]">AMOUNT DUE:</span>
                      <span className="font-extrabold text-base text-[#C5A059]">
                        ${selectedOrder.totalAmount} AUD
                      </span>
                    </div>

                    {/* Payment Terms Bullet List */}
                    <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E8E2D8] space-y-1 text-[11px] text-[#4F4640]">
                      <span className="font-bold uppercase text-[10px] text-[#6F665F] block">
                        Commonwealth Fulfillment Terms
                      </span>
                      <ul className="list-disc pl-4 space-y-1">
                        {paymentTermsLines().map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-[10px] text-center text-[#7F746E] pt-2 border-t border-[#EAE3DC]">
                      {REPLY.dispatchLine}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
