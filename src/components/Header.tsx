import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10 flex items-center justify-between bg-gray-600 px-3 py-5 shadow-lg">
      <Link href="/">
        <h1 className="text-2xl font-bold text-white">Store</h1>
      </Link>

      <Dialog>
        <DialogTrigger>
          <div className="rounded-full bg-white px-3 py-1 text-xl text-slate-800">
            2
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Your Cart</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center py-2">
            {true ? (
              <p className="text-lg leading-7 text-gray-600">
                You have 0 items in your cart.
              </p>
            ) : (
              <div className="grid flex-1 grid-cols-2 gap-2">
                <p className="font-semibold">Shirt</p>
                <p className="place-self-end">$39</p>
              </div>
            )}
          </div>
          <DialogFooter className="flex flex-1 items-center !justify-between">
            {true ? (
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            ) : (
              <>
                <Button type="button" variant="secondary">
                  Clear
                </Button>
                <Button type="button">Checkout</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}
