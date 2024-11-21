"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { clearCart } from "@/lib/actions/cart";
import { Button } from "./ui/button";
import { useCart, setCart } from "@/store/store";
import { useDispatch } from "react-redux";

export default function CartPopup() {
  const cart = useCart();
  const dispatch = useDispatch();

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full bg-white px-3 py-1 text-xl text-slate-800">
          {cart.products.length}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Your Cart</DialogTitle>
        </DialogHeader>
        {cart.products.length === 0 && (
          <p className="text-center text-lg leading-7 text-gray-600">
            You have 0 items in your cart.
          </p>
        )}
        {cart.products.length > 0 && (
          <>
            {cart.products.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between -space-y-1"
              >
                <div className="font-semibold">{product.name}</div>
                <div className="place-self-end">
                  {product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            ))}
          </>
        )}

        <DialogFooter className="flex flex-1 items-center !justify-between">
          {cart.products.length === 0 ? (
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          ) : (
            <>
              <Button
                type="button"
                variant="secondary"
                onClick={async () => {
                  dispatch(setCart(await clearCart()));
                }}
              >
                Clear
              </Button>
              <Button type="button">Checkout</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
