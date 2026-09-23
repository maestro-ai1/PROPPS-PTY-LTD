'use client';

import React from 'react';
import { CartDrawer } from './CartDrawer.js';
import { useApp } from '../context/AppContext.js';

export const CartDrawerMount: React.FC = () => {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, clearCart, onOrderCompleted } = useApp();

  return (
    <CartDrawer
      isOpen={isCartOpen}
      onClose={closeCart}
      cart={cart}
      updateQuantity={updateQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      onOrderCompleted={onOrderCompleted}
    />
  );
};
