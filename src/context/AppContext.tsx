'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { SITE, PRODUCTS } from '../config/site.js';
import type { StoredOrder } from '../lib/order.js';

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

type Product = (typeof PRODUCTS)[number];

interface AppContextValue {
  cart: CartItem[];
  cartCount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (slug: string, delta: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  onOrderCompleted: (order: StoredOrder) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {
      console.error('Error loading cart:', e);
    }
  }, []);

  const updateCart = useCallback((newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(newCart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, []);

  const addToCart = useCallback(
    (product: Product, quantity = 1) => {
      setCart((prev) => {
        const existingIndex = prev.findIndex((item) => item.slug === product.slug);
        let next: CartItem[];
        if (existingIndex > -1) {
          next = [...prev];
          next[existingIndex] = { ...next[existingIndex], quantity: next[existingIndex].quantity + quantity };
        } else {
          next = [...prev, { slug: product.slug, name: product.name, price: product.price, quantity }];
        }
        try {
          localStorage.setItem(SITE.cartKey, JSON.stringify(next));
        } catch (e) {
          console.error('Error saving cart:', e);
        }
        return next;
      });
      setIsCartOpen(true);
    },
    []
  );

  const updateQuantity = useCallback(
    (slug: string, delta: number) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.slug === slug);
        if (!existing) return prev;
        const newQty = existing.quantity + delta;
        const next = newQty <= 0
          ? prev.filter((item) => item.slug !== slug)
          : prev.map((item) => (item.slug === slug ? { ...item, quantity: newQty } : item));
        try {
          localStorage.setItem(SITE.cartKey, JSON.stringify(next));
        } catch (e) {
          console.error('Error saving cart:', e);
        }
        return next;
      });
    },
    []
  );

  const removeFromCart = useCallback((slug: string) => {
    setCart((prev) => {
      const next = prev.filter((item) => item.slug !== slug);
      try {
        localStorage.setItem(SITE.cartKey, JSON.stringify(next));
      } catch (e) {
        console.error('Error saving cart:', e);
      }
      return next;
    });
  }, []);

  const clearCart = useCallback(() => updateCart([]), [updateCart]);

  const onOrderCompleted = useCallback((_order: StoredOrder) => {
    setIsCartOpen(false);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value: AppContextValue = {
    cart,
    cartCount,
    isCartOpen,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    isSearchOpen,
    openSearch: () => setIsSearchOpen(true),
    closeSearch: () => setIsSearchOpen(false),
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    onOrderCompleted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
