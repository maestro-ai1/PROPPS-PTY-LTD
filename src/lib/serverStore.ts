// SERVER-ONLY persistence for orders and enquiries (Upstash Redis).
// Browser code never touches this - it goes through /api/* routes. Without
// Redis credentials nothing is stored, and callers fall back to email-only.
import { redisCommand, getRedisCredentials } from './redis.js';
import type { StoredOrder } from './order.js';
import type { PayLinesByMethod } from './payment.js';
import type { StoredEnquiry } from './enquiryStore.js';

const ORDERS_KEY = 'propps:orders';
const ENQUIRIES_KEY = 'propps:enquiries';
const MAX_RECORDS = 1000;

export function storageEnabled(): boolean {
  return getRedisCredentials() !== null;
}

async function readList<T>(key: string): Promise<T[]> {
  const raw = await redisCommand(['GET', key]);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeList<T>(key: string, list: T[]): Promise<void> {
  await redisCommand(['SET', key, JSON.stringify(list.slice(0, MAX_RECORDS))]);
}

export const listOrders = () => readList<StoredOrder>(ORDERS_KEY);
export const listEnquiries = () => readList<StoredEnquiry>(ENQUIRIES_KEY);

export async function addOrder(order: StoredOrder): Promise<void> {
  if (!storageEnabled()) return;
  await writeList(ORDERS_KEY, [order, ...(await listOrders())]);
}

export async function addEnquiry(enquiry: StoredEnquiry): Promise<void> {
  if (!storageEnabled()) return;
  await writeList(ENQUIRIES_KEY, [enquiry, ...(await listEnquiries())]);
}

export async function patchOrder(id: string, status: StoredOrder['status']): Promise<StoredOrder | null> {
  const list = await listOrders();
  const item = list.find((o) => o.id === id || o.ref === id);
  if (!item) return null;
  item.status = status;
  await writeList(ORDERS_KEY, list);
  return item;
}

export async function patchEnquiry(id: string, status: StoredEnquiry['status']): Promise<StoredEnquiry | null> {
  const list = await listEnquiries();
  const item = list.find((e) => e.id === id || e.ref === id);
  if (!item) return null;
  item.status = status;
  await writeList(ENQUIRIES_KEY, list);
  return item;
}

export async function removeOrder(id: string): Promise<void> {
  await writeList(ORDERS_KEY, (await listOrders()).filter((o) => o.id !== id && o.ref !== id));
}

export async function removeEnquiry(id: string): Promise<void> {
  await writeList(ENQUIRIES_KEY, (await listEnquiries()).filter((e) => e.id !== id && e.ref !== id));
}

export async function getOrder(idOrRef: string): Promise<StoredOrder | null> {
  return (await listOrders()).find((o) => o.id === idOrRef || o.ref === idOrRef) ?? null;
}

export async function getOrderByToken(token: string): Promise<StoredOrder | null> {
  if (!token || token.length < 20) return null;
  return (await listOrders()).find((o) => o.invoice?.token === token) ?? null;
}

// Merge fields into a stored order (used for invoice, paid and notified markers).
export async function updateOrder(id: string, patch: Partial<StoredOrder>): Promise<StoredOrder | null> {
  const list = await listOrders();
  const index = list.findIndex((o) => o.id === id || o.ref === id);
  if (index === -1) return null;
  list[index] = { ...list[index], ...patch };
  await writeList(ORDERS_KEY, list);
  return list[index];
}

const PAYMENT_DEFAULTS_KEY = 'propps:payment-defaults';

export async function getPaymentDefaults(): Promise<Partial<PayLinesByMethod> | null> {
  const raw = await redisCommand(['GET', PAYMENT_DEFAULTS_KEY]);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setPaymentDefaults(defaults: Partial<PayLinesByMethod>): Promise<void> {
  await redisCommand(['SET', PAYMENT_DEFAULTS_KEY, JSON.stringify(defaults)]);
}