import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/contexts/CartContext";
import { getCart } from "@/lib/actions/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS State Management",
  description: "The Possible Ways To Manage State.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialCart = await getCart();
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider initialCart={initialCart}>
          <Header />
          <main className="mx-auto max-w-4xl">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
