'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/types';

type CartItem = Product & { quantity: number; selectedSize?: string };

type StoreContextValue = {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (id: string, selectedSize?: string) => void;
  updateQuantity: (id: string, quantity: number, selectedSize?: string) => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  cartCount: number;
  cartTotal: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const CART_KEY = 'aurelia-cart';
const WISHLIST_KEY = 'aurelia-wishlist';

const sameItem = (item: CartItem, id: string, selectedSize?: string) =>
  item.id === id && item.selectedSize === selectedSize;

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_KEY);
      const savedWishlist = window.localStorage.getItem(WISHLIST_KEY);
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch {}
  }, []);

  useEffect(() => { window.localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)); }, [wishlist]);

  const value = useMemo<StoreContextValue>(() => ({
    cart,
    wishlist,
    addToCart: (product, quantity = 1, selectedSize) => {
      setCart((current) => {
        const existing = current.find((item) => sameItem(item, product.id, selectedSize));
        if (existing) {
          return current.map((item) =>
            sameItem(item, product.id, selectedSize)
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [...current, { ...product, quantity, selectedSize }];
      });
    },
    removeFromCart: (id, selectedSize) =>
      setCart((current) => current.filter((item) => !sameItem(item, id, selectedSize))),
    updateQuantity: (id, quantity, selectedSize) =>
      setCart((current) =>
        current
          .map((item) => (sameItem(item, id, selectedSize) ? { ...item, quantity } : item))
          .filter((item) => item.quantity > 0),
      ),
    toggleWishlist: (id) =>
      setWishlist((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
      ),
    isWishlisted: (id) => wishlist.includes(id),
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  }), [cart, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used inside StoreProvider');
  return context;
}
