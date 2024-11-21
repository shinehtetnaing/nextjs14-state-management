"use client";

import { addToCart } from "@/lib/actions/cart";
import { setCart } from "@/store/store";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

export default function AddToCart({ productId }: { productId: string }) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={async () => {
        dispatch(setCart(await addToCart(+productId)));
      }}
    >
      Add To Cart
    </Button>
  );
}
