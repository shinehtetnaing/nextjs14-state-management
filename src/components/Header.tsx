import Link from "next/link";
import CartPopup from "./CartPopup";

export default function Header() {
  return (
    <header className="mb-10 flex items-center justify-between bg-gray-600 px-3 py-5 shadow-lg">
      <Link href="/">
        <h1 className="text-2xl font-bold text-white">Store</h1>
      </Link>

      <CartPopup />
    </header>
  );
}
