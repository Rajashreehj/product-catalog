'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartIndicator() {
  const { cart } = useCart();
  return <Link href="/cart">🛒 ({cart.length})</Link>;
}