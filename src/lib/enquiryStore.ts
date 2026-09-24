// src/lib/enquiryStore.ts
// Browser-side client for the enquiry API. Enquiries are emailed and stored by
// the server (/api/contact, /api/wholesale, /api/admin/enquiries) - never in
// browser storage.
import { adminFetch } from './adminClient.js';

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

export interface EnquiryInput {
  type: 'contact' | 'wholesale';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  website?: string; // honeypot - hidden field, must stay empty for real visitors
}

// Public: contact and wholesale forms. Throws when the message could not be
// delivered so the form can show a WhatsApp/phone fallback instead of a false
// "sent" confirmation.
export async function saveEnquiry(input: EnquiryInput): Promise<{ ref: string }> {
  const res = await fetch(`/api/${input.type}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ website: '', ...input }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || 'Message could not be sent');
  }
  return { ref: data.ref };
}

// Admin (passcode-gated)
export async function getEnquiries(): Promise<StoredEnquiry[]> {
  const res = await adminFetch('/api/admin/enquiries');
  if (!res.ok) return [];
  return (await res.json()).enquiries ?? [];
}

export async function deleteEnquiry(id: string): Promise<void> {
  await adminFetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { method: 'DELETE' });
}

export async function updateEnquiryStatus(
  id: string,
  status: StoredEnquiry['status']
): Promise<StoredEnquiry | null> {
  const res = await adminFetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
  if (!res.ok) return null;
  return (await res.json()).enquiry ?? null;
}

export { getEnquiries as getAllEnquiries };
