import { Cart } from "@/lib/actions/cart";
import { Button } from "./ui/button";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  return <Button>Add To Cart</Button>;
}
