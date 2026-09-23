import type { Metadata } from 'next';
import React from 'react';
import { AdminDashboardContent } from '../../views/AdminDashboardPage.js';

export const metadata: Metadata = {
  title: 'Reply Portal',
  robots: { index: false, follow: false, nocache: true },
};

export default function Page() {
  return <AdminDashboardContent />;
}
