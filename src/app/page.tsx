import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/products";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <ul role="list" className="flex flex-row flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="md:w-1/3">
            <Link href={`/products/${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
