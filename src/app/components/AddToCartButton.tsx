'use client';
import { useCart } from '../context/CartContext';

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}