'use client';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item: any, index: number) => (
            <li key={index} className="border p-2 my-2">
            <img src={item.thumbnail} alt={item.title} />
              <p className="font-bold">{item.title}</p>
              <p>₹ {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}