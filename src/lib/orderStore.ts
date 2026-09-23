// src/lib/orderStore.ts
import { StoredOrder } from './order.js';
import { redisCommand, getRedisCredentials } from './redis.js';

const REDIS_KEY = 'propps:orders';
const LOCAL_STORAGE_KEY = 'propps_stored_orders';

// Initial realistic orders for Australian film productions
const SEED_ORDERS: StoredOrder[] = [
  {
    id: 'ord_1',
    ref: 'PRP-9J42K1',
    date: new Date(Date.now() - 3600000 * 5).toISOString(),
    customerName: 'Marcus Vance (Apex Cinema Productions)',
    email: 'm.vance@apexcinema.com.au',
    phone: '+61 412 884 921',
    address: 'Docklands Studios, Stage 3, 476 Docklands Dr',
    city: 'Docklands',
    state: 'VIC',
    postcode: '3008',
    notes: 'Require non-glare notes for 4K Arri Alexa camera close-ups on casino table scene.',
    items: [
      {
        slug: 'aud-100-full-print-strapped-bundle',
        name: 'AUD $100 Cinema Series 100-Note Strapped Bundle',
        price: 320,
        quantity: 2,
      },
      {
        slug: 'aud-50-full-print-strapped-bundle',
        name: 'AUD $50 Cinema Series 100-Note Strapped Bundle',
        price: 310,
        quantity: 2,
      },
    ],
    subtotal: 1260,
    shippingFee: 0, // Free over $500
    discount: 0,
    total: 1260,
    paymentMethod: 'bank-transfer',
    channel: 'email',
    status: 'pending',
    createdAt: Date.now() - 3600000 * 5,
  },
  {
    id: 'ord_2',
    ref: 'PRP-7L88M3',
    date: new Date(Date.now() - 3600000 * 22).toISOString(),
    customerName: 'Chloe Sutherland (Swinburne Film Thesis)',
    email: 'chloe.suth@student.swin.edu.au',
    phone: '+61 403 912 443',
    address: '14 Burwood Road',
    city: 'Hawthorn',
    state: 'VIC',
    postcode: '3122',
    notes: 'Short film bank robbery sequence. Urgent dispatch requested.',
    items: [
      {
        slug: 'aud-mixed-denomination-master-pack',
        name: 'AUD Mixed Denomination Studio Master Pack ($5, $10, $20, $50, $100)',
        price: 480,
        quantity: 1,
      },
    ],
    subtotal: 480,
    shippingFee: 20,
    discount: 48, // 10% crypto discount applied
    total: 452,
    paymentMethod: 'crypto',
    channel: 'whatsapp',
    status: 'payment-sent',
    createdAt: Date.now() - 3600000 * 22,
  },
  {
    id: 'ord_3',
    ref: 'PRP-4X19T7',
    date: new Date(Date.now() - 3600000 * 48).toISOString(),
    customerName: 'Damian Cross (Outlaw Theatrical Co)',
    email: 'props@outlawtheatre.com.au',
    phone: '+61 422 109 883',
    address: '78 George Street, The Rocks',
    city: 'Sydney',
    state: 'NSW',
    postcode: '2000',
    notes: 'Touring stage play in Sydney and Brisbane.',
    items: [
      {
        slug: 'film-directors-aluminium-cash-briefcase-kit',
        name: "The Director's Aluminium Vault Case Kit",
        price: 1250,
        quantity: 1,
      },
    ],
    subtotal: 1250,
    shippingFee: 0,
    discount: 0,
    total: 1250,
    paymentMethod: 'payid',
    channel: 'email',
    status: 'dispatched',
    createdAt: Date.now() - 3600000 * 48,
  },
];

function getLocalOrders(): StoredOrder[] {
  if (typeof window === 'undefined') return SEED_ORDERS;
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_ORDERS));
    return SEED_ORDERS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return SEED_ORDERS;
  }
}

function saveLocalOrders(orders: StoredOrder[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
}

export async function getOrders(): Promise<StoredOrder[]> {
  const creds = getRedisCredentials();
  if (creds) {
    const raw = await redisCommand(['GET', REDIS_KEY]);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse redis orders', e);
      }
    }
  }
  return getLocalOrders();
}

export async function saveOrder(order: StoredOrder): Promise<void> {
  const orders = await getOrders();
  const index = orders.findIndex((o) => o.id === order.id || o.ref === order.ref);
  let updated: StoredOrder[];
  if (index >= 0) {
    updated = [...orders];
    updated[index] = order;
  } else {
    updated = [order, ...orders];
  }

  saveLocalOrders(updated);

  const creds = getRedisCredentials();
  if (creds) {
    await redisCommand(['SET', REDIS_KEY, JSON.stringify(updated)]);
  }
}

export async function deleteOrder(id: string): Promise<void> {
  const orders = await getOrders();
  const updated = orders.filter((o) => o.id !== id && o.ref !== id);
  saveLocalOrders(updated);

  const creds = getRedisCredentials();
  if (creds) {
    await redisCommand(['SET', REDIS_KEY, JSON.stringify(updated)]);
  }
}

export async function updateOrderStatus(
  id: string,
  status: StoredOrder['status']
): Promise<StoredOrder | null> {
  const orders = await getOrders();
  const order = orders.find((o) => o.id === id || o.ref === id);
  if (!order) return null;

  order.status = status;
  await saveOrder(order);
  return order;
}

export { getOrders as getAllOrders };
export type { StoredOrder } from './order.js';
