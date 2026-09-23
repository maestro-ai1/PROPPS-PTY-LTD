// src/lib/enquiryStore.ts
import { redisCommand, getRedisCredentials } from './redis.js';

export interface StoredEnquiry {
  id: string;
  ref: string;
  type: 'contact' | 'wholesale';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  estimatedVolume?: string;
  subject: string;
  message: string;
  status: 'new' | 'replied' | 'archived';
  createdAt: number;
}

const REDIS_KEY = 'propps:enquiries';
const LOCAL_STORAGE_KEY = 'propps_stored_enquiries';

const SEED_ENQUIRIES: StoredEnquiry[] = [
  {
    id: 'enq_1',
    ref: 'ENQ-819A2',
    type: 'wholesale',
    name: 'Julian Sterling',
    email: 'production@melbournestudios.com.au',
    phone: '+61 411 920 334',
    company: 'Melbourne Studio Lot & Theatrical Props',
    estimatedVolume: '10,000+ notes / 100 Strapped Bundles',
    subject: 'Bulk Supply for Crime Anthology TV Series Season 2',
    message: 'We are prepping a 6-part crime anthology shooting across Victoria starting next month. Need tiered wholesale rates for 100x $100 bundles and 40x $50 bundles, plus custom weathered props for scene work. Could you confirm bulk pricing and turnaround time?',
    status: 'new',
    createdAt: Date.now() - 3600000 * 8,
  },
  {
    id: 'enq_2',
    ref: 'ENQ-542B8',
    type: 'contact',
    name: 'Sarah Lindqvist',
    email: 'sarah.lindqvist@rmit.edu.au',
    phone: '+61 405 331 892',
    company: 'RMIT School of Art & Design',
    subject: 'Verification of RBA reproduction guidelines on exhibition props',
    message: 'Hello, our graduate gallery installation includes a conceptual display of Australian monetary policy. We want to confirm your props feature the official specimen markings compliant with Section 22 Crimes (Currency) Act 1981 before placing an order. Thank you!',
    status: 'new',
    createdAt: Date.now() - 3600000 * 30,
  },
];

function getLocalEnquiries(): StoredEnquiry[] {
  if (typeof window === 'undefined') return SEED_ENQUIRIES;
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
    return SEED_ENQUIRIES;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return SEED_ENQUIRIES;
  }
}

function saveLocalEnquiries(enquiries: StoredEnquiry[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(enquiries));
}

export async function getEnquiries(): Promise<StoredEnquiry[]> {
  const creds = getRedisCredentials();
  if (creds) {
    const raw = await redisCommand(['GET', REDIS_KEY]);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse redis enquiries', e);
      }
    }
  }
  return getLocalEnquiries();
}

export type EnquiryInput = Omit<StoredEnquiry, 'id' | 'ref' | 'status' | 'createdAt'> &
  Partial<Pick<StoredEnquiry, 'id' | 'ref' | 'status' | 'createdAt'>>;

export async function saveEnquiry(input: EnquiryInput): Promise<StoredEnquiry> {
  const enquiry: StoredEnquiry = {
    id: input.id || `enq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ref: input.ref || `ENQ-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    status: input.status || 'new',
    createdAt: input.createdAt || Date.now(),
    name: input.name,
    email: input.email,
    phone: input.phone,
    company: input.company,
    estimatedVolume: input.estimatedVolume,
    subject: input.subject,
    message: input.message,
    type: input.type,
  };

  const enquiries = await getEnquiries();
  const index = enquiries.findIndex((e) => e.id === enquiry.id || e.ref === enquiry.ref);
  let updated: StoredEnquiry[];
  if (index >= 0) {
    updated = [...enquiries];
    updated[index] = enquiry;
  } else {
    updated = [enquiry, ...enquiries];
  }

  saveLocalEnquiries(updated);

  const creds = getRedisCredentials();
  if (creds) {
    await redisCommand(['SET', REDIS_KEY, JSON.stringify(updated)]);
  }

  return enquiry;
}

export async function deleteEnquiry(id: string): Promise<void> {
  const enquiries = await getEnquiries();
  const updated = enquiries.filter((e) => e.id !== id && e.ref !== id);
  saveLocalEnquiries(updated);

  const creds = getRedisCredentials();
  if (creds) {
    await redisCommand(['SET', REDIS_KEY, JSON.stringify(updated)]);
  }
}

export async function updateEnquiryStatus(
  id: string,
  status: StoredEnquiry['status']
): Promise<StoredEnquiry | null> {
  const enquiries = await getEnquiries();
  const item = enquiries.find((e) => e.id === id || e.ref === id);
  if (!item) return null;

  item.status = status;
  await saveEnquiry(item);
  return item;
}

export { getEnquiries as getAllEnquiries };
