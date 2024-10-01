"use client";

import { Cart, getCart } from "@/lib/actions/cart";
import React, { createContext, useContext, useState } from "react";

const useCartState = (initialCart: Cart) => {
  return useState<Cart>(initialCart);
};

const CartContext = createContext<ReturnType<typeof useCartState> | null>(null);

const CartProvider = ({
  children,
  initialCart,
}: {
  children: React.ReactNode;
  initialCart: Cart;
}) => {
  const [cart, setCart] = useCartState(initialCart);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};
