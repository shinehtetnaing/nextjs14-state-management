"use client";

import { Cart } from "@/lib/actions/cart";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { createStore, setCart } from "./store";

export default function StoreProvider({
  initialCart,
  children,
}: {
  initialCart: Cart;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setCart(initialCart));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
