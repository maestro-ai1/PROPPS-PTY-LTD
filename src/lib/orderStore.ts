// src/lib/orderStore.ts
// Browser-side client for the order API. Orders are stored and emailed by the
// server (/api/order, /api/admin/orders) - never in browser storage.
import { StoredOrder } from './order.js';
import { adminFetch } from './adminClient.js';

export interface SubmitOrderResult {
  ok: boolean;
  ref?: string;
  emailed?: boolean;
  error?: string;
}

// Public: called by the cart at checkout (both WhatsApp and email channels).
export async function saveOrder(order: StoredOrder): Promise<SubmitOrderResult> {
  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ref: order.ref,
        customerName: order.customerName,
        email: order.email,
        phone: order.phone,
        address: order.address,
        paymentMethod: order.paymentMethod,
        channel: order.channel,
        items: order.items.map((i) => ({ slug: i.slug, quantity: i.quantity })),
        website: '',
      }),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok && data.ok !== false, ref: data.ref, emailed: data.emailed, error: data.error };
  } catch {
    return { ok: false, error: 'Network error' };
  }
}

// Admin (passcode-gated)
export async function getOrders(): Promise<StoredOrder[]> {
  const res = await adminFetch('/api/admin/orders');
  if (!res.ok) return [];
  const data = await res.json();
  return data.orders ?? [];
}

export async function deleteOrder(id: string): Promise<void> {
  await adminFetch(`/api/admin/orders/${encodeURIComponent(id)}`, { method: 'DELETE' });
}

export async function updateOrderStatus(
  id: string,
  status: StoredOrder['status']
): Promise<StoredOrder | null> {
  const res = await adminFetch(`/api/admin/orders/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
  if (!res.ok) return null;
  return (await res.json()).order ?? null;
}

export { getOrders as getAllOrders };
export type { StoredOrder } from './order.js';
