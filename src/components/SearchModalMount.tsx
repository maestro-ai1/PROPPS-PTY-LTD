'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SearchModal } from './SearchModal.js';
import { useApp } from '../context/AppContext.js';
import { PRODUCTS } from '../config/site.js';

export const SearchModalMount: React.FC = () => {
  const router = useRouter();
  const { isSearchOpen, closeSearch } = useApp();

  return (
    <SearchModal
      isOpen={isSearchOpen}
      onClose={closeSearch}
      onSelectProduct={(slug) => {
        const prod = PRODUCTS.find((p) => p.slug === slug);
        router.push(prod ? `/shop/${prod.category}/${prod.slug}` : '/shop');
      }}
      onSelectPost={(slug) => {
        router.push(`/blog/${slug}`);
      }}
    />
  );
};
