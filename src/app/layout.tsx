import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import CartProvider from './context/CartContext';
import CartIndicator from './components/CartIndicator';

export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav className="p-4 shadow flex justify-between">
            <Link href="/">🛍️ Product Catalog</Link>
            <CartIndicator />
          </nav>
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
