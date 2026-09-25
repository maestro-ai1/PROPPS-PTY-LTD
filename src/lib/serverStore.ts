// SERVER-ONLY persistence for orders and enquiries (Upstash Redis).
// Each record is its own field in a Redis hash, so concurrent writes (two
// orders at the same moment) can never overwrite each other. Browser code
// never touches this - it goes through /api/* routes. Without Redis
// credentials nothing is stored, and callers fall back to email-only.
import { redisCommand, redisStrict, getRedisCredentials } from './redis.js';
import type { StoredOrder } from './order.js';
import type { PayLinesByMethod } from './payment.js';
import type { StoredEnquiry } from './enquiryStore.js';

const ORDERS_HASH = 'propps:orders:h';
const ENQUIRIES_HASH = 'propps:enquiries:h';
// Earlier versions kept one JSON array per key; migrated into the hashes on first read.
const LEGACY_ORDERS = 'propps:orders';
const LEGACY_ENQUIRIES = 'propps:enquiries';
const PAYMENT_DEFAULTS_KEY = 'propps:payment-defaults';

export function storageEnabled(): boolean {
  return getRedisCredentials() !== null;
}

async function migrateLegacy(hash: string, legacyKey: string): Promise<void> {
  const raw = await redisCommand(['GET', legacyKey]);
  if (typeof raw !== 'string') return;
  try {
    const items = JSON.parse(raw);
    if (Array.isArray(items)) {
      for (const item of items) if (item?.id) await redisStrict(['HSET', hash, item.id, JSON.stringify(item)]);
    }
    await redisStrict(['DEL', legacyKey]);
  } catch (err) {
    console.error('[store] legacy migration failed', err);
  }
}

async function readAll<T extends { createdAt: number }>(hash: string, legacyKey: string): Promise<T[]> {
  await migrateLegacy(hash, legacyKey);
  const flat = await redisCommand(['HGETALL', hash]);
  if (!Array.isArray(flat)) return [];
  const out: T[] = [];
  for (let i = 1; i < flat.length; i += 2) {
    try {
      out.push(JSON.parse(flat[i]));
    } catch {
      /* skip corrupt record */
    }
  }
  return out.sort((a, b) => b.createdAt - a.createdAt);
}

async function readOne<T>(hash: string, id: string): Promise<T | null> {
  const raw = await redisCommand(['HGET', hash, id]);
  if (typeof raw !== 'string') return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

const write = (hash: string, id: string, value: unknown) => redisStrict(['HSET', hash, id, JSON.stringify(value)]);

export const listOrders = () => readAll<StoredOrder>(ORDERS_HASH, LEGACY_ORDERS);
export const listEnquiries = () => readAll<StoredEnquiry>(ENQUIRIES_HASH, LEGACY_ENQUIRIES);

// Writes throw on failure so the API never reports an unsaved order as stored.
export async function addOrder(order: StoredOrder): Promise<void> {
  await write(ORDERS_HASH, order.id, order);
}

export async function addEnquiry(enquiry: StoredEnquiry): Promise<void> {
  await write(ENQUIRIES_HASH, enquiry.id, enquiry);
}

async function findOrder(idOrRef: string): Promise<StoredOrder | null> {
  return (await readOne<StoredOrder>(ORDERS_HASH, idOrRef)) ?? (await listOrders()).find((o) => o.ref === idOrRef) ?? null;
}

export const getOrder = findOrder;

export async function getOrderByToken(token: string): Promise<StoredOrder | null> {
  if (!token || token.length < 20) return null;
  return (await listOrders()).find((o) => o.invoice?.token === token || o.confirmToken === token) ?? null;
}

// Merge fields into a stored order (invoice, paid and notified markers).
export async function updateOrder(id: string, patch: Partial<StoredOrder>): Promise<StoredOrder | null> {
  const order = await findOrder(id);
  if (!order) return null;
  const next = { ...order, ...patch };
  await write(ORDERS_HASH, next.id, next);
  return next;
}

export const patchOrder = (id: string, status: StoredOrder['status']) => updateOrder(id, { status });

export async function patchEnquiry(id: string, status: StoredEnquiry['status']): Promise<StoredEnquiry | null> {
  const enq =
    (await readOne<StoredEnquiry>(ENQUIRIES_HASH, id)) ?? (await listEnquiries()).find((e) => e.ref === id) ?? null;
  if (!enq) return null;
  const next = { ...enq, status };
  await write(ENQUIRIES_HASH, next.id, next);
  return next;
}

export async function removeOrder(id: string): Promise<void> {
  const order = await findOrder(id);
  if (order) await redisStrict(['HDEL', ORDERS_HASH, order.id]);
}

export async function removeEnquiry(id: string): Promise<void> {
  const enq =
    (await readOne<StoredEnquiry>(ENQUIRIES_HASH, id)) ?? (await listEnquiries()).find((e) => e.ref === id) ?? null;
  if (enq) await redisStrict(['HDEL', ENQUIRIES_HASH, enq.id]);
}

export async function getPaymentDefaults(): Promise<Partial<PayLinesByMethod> | null> {
  const raw = await redisCommand(['GET', PAYMENT_DEFAULTS_KEY]);
  if (typeof raw !== 'string') return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setPaymentDefaults(defaults: Partial<PayLinesByMethod>): Promise<void> {
  await redisStrict(['SET', PAYMENT_DEFAULTS_KEY, JSON.stringify(defaults)]);
}