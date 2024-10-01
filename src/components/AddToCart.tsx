"use client";

import { useCart } from "@/contexts/CartContext";
import { addToCart } from "@/lib/actions/cart";
import { Button } from "./ui/button";

export default function AddToCart({ productId }: { productId: string }) {
  const [, setCart] = useCart();

  return (
    <Button
      onClick={async () => {
        setCart(await addToCart(+productId));
      }}
    >
      Add To Cart
    </Button>
  );
}
