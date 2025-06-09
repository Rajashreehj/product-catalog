'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const CartContext = createContext<any>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);