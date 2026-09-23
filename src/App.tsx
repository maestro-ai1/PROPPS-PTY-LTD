// src/App.tsx
import React, { useState, useEffect } from 'react';
import { SITE, PRODUCTS } from './config/site.js';
import { Nav } from './components/Nav.js';
import { Footer } from './components/Footer.js';
import { AnnouncementBar } from './components/AnnouncementBar.js';
import { AgeGateModal } from './components/AgeGateModal.js';
import { CartDrawer, CartItem } from './components/CartDrawer.js';
import { SearchModal } from './components/SearchModal.js';

// Pages
import { HomePage } from './pages/HomePage.js';
import { ShopPage } from './pages/ShopPage.js';
import { ProductDetailPage } from './pages/ProductDetailPage.js';
import { WholesalePage } from './pages/WholesalePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { CompliancePage } from './pages/CompliancePage.js';
import { FaqPage } from './pages/FaqPage.js';
import { ContactPage } from './pages/ContactPage.js';
import { BlogPage } from './pages/BlogPage.js';
import { VideosPage } from './pages/VideosPage.js';
import { ThankYouOrderPage } from './pages/ThankYouOrderPage.js';
import { AdminDashboardPage } from './pages/AdminDashboardPage.js';
import { PolicyPage, PolicyType } from './pages/PolicyPage.js';

export function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [recentOrderRef, setRecentOrderRef] = useState('');
  const [recentCustomerEmail, setRecentCustomerEmail] = useState('');

  // Load cart from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading cart:', e);
    }
  }, []);

  // Save cart to localStorage
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(newCart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  };

  const handleAddToCart = (product: (typeof PRODUCTS)[0], quantity = 1) => {
    const existingIndex = cart.findIndex((item) => item.slug === product.slug);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      updateCart(updated);
    } else {
      updateCart([
        ...cart,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
        },
      ]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (slug: string, delta: number) => {
    const existing = cart.find((item) => item.slug === slug);
    if (!existing) return;
    const newQty = existing.quantity + delta;
    if (newQty <= 0) {
      handleRemoveItem(slug);
    } else {
      const updated = cart.map((item) =>
        item.slug === slug ? { ...item, quantity: newQty } : item
      );
      updateCart(updated);
    }
  };

  const handleRemoveItem = (slug: string) => {
    const updated = cart.filter((item) => item.slug !== slug);
    updateCart(updated);
  };

  const handleClearCart = () => {
    updateCart([]);
  };

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderComplete = (orderRef: string, customerEmail: string) => {
    setRecentOrderRef(orderRef);
    setRecentCustomerEmail(customerEmail);
    handleClearCart();
    setIsCartOpen(false);
    handleNavigate('/thank-you-order');
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Render Page Content based on currentPath
  const renderContent = () => {
    // Thank you order page
    if (currentPath === '/thank-you-order') {
      return (
        <ThankYouOrderPage
          orderRef={recentOrderRef}
          customerEmail={recentCustomerEmail}
          onNavigate={handleNavigate}
        />
      );
    }

    // Admin dashboard / reply portal
    if (currentPath.startsWith('/admin')) {
      return <AdminDashboardPage onNavigate={handleNavigate} />;
    }

    // Wholesale B2B
    if (currentPath === '/wholesale') {
      return <WholesalePage onNavigate={handleNavigate} />;
    }

    // About brand
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // Compliance
    if (currentPath === '/compliance') {
      return <CompliancePage onNavigate={handleNavigate} />;
    }

    // FAQ
    if (currentPath === '/faq') {
      return <FaqPage onNavigate={handleNavigate} />;
    }

    // Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // Videos Showcase
    if (currentPath === '/videos') {
      return <VideosPage onNavigate={handleNavigate} />;
    }

    // Policy & Legal Pages (Shipping, Refund, Privacy, Terms)
    if (currentPath === '/shipping-policy' || currentPath === '/policies/shipping') {
      return <PolicyPage policyType="shipping" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/refund-policy' || currentPath === '/policies/refund') {
      return <PolicyPage policyType="refund" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/privacy-policy' || currentPath === '/policies/privacy') {
      return <PolicyPage policyType="privacy" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/terms-and-conditions' || currentPath === '/terms' || currentPath === '/policies/terms') {
      return <PolicyPage policyType="terms" onNavigate={handleNavigate} />;
    }

    // Blog (Production Guides) & GLOG alias
    if (currentPath.startsWith('/blog') || currentPath.startsWith('/glog')) {
      const parts = currentPath.split('/');
      const slug = parts[2];
      return <BlogPage onNavigate={handleNavigate} selectedSlug={slug} />;
    }

    // Shop Routes
    if (currentPath.startsWith('/shop')) {
      const parts = currentPath.split('/').filter(Boolean); // ['shop', 'category?', 'slug?']
      if (parts.length === 3) {
        // /shop/[category]/[slug]
        const slug = parts[2];
        return (
          <ProductDetailPage
            slug={slug}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      } else if (parts.length === 2) {
        // /shop/[category]
        const category = parts[1];
        return (
          <ShopPage
            initialCategory={category}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      }
      return (
        <ShopPage
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
        />
      );
    }

    // Default Home
    return <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B100E] text-[#B4C0BA] selection:bg-[#C5A059] selection:text-[#0D1512]">
      {/* Age Gate Modal (18+ Adult Commonwealth Verification) */}
      <AgeGateModal />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <Nav
        currentPath={currentPath}
        onNavigate={handleNavigate}
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area with Skip Link Landmark */}
      <main id="main" className="flex-1">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveItem}
        clearCart={handleClearCart}
        onOrderCompleted={(order) => {
          handleOrderComplete(order.ref, order.email);
        }}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(slug) => {
          const prod = PRODUCTS.find((p) => p.slug === slug);
          if (prod) {
            handleNavigate(`/shop/${prod.category}/${prod.slug}`);
          } else {
            handleNavigate('/shop');
          }
        }}
        onSelectPost={(slug) => {
          handleNavigate(`/blog/${slug}`);
        }}
      />
    </div>
  );
}
export default App;
