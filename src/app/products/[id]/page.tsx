import AddToCart from "@/components/AddToCart";
import AverateRating from "@/components/AverateRating";
import ProductCard from "@/components/ProductCard";
import Review from "@/components/Review";
import { addToCart } from "@/lib/actions/cart";
import { getProductById, getProducts } from "@/lib/actions/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProductById(+id);
  const products = await getProducts();

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <Image
          className="rounded-md object-cover"
          src={product.image ?? ""}
          alt={`${product.name} image`}
          width={1024}
          height={1024}
        />
      </div>

      <div className="w-full space-y-3 p-5 md:w-1/2">
        <h1 className="text-3xl font-bold leading-10">{product.name}</h1>
        <div className="text-base leading-5">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="text-sm font-light italic leading-5">
          {product.description}
        </div>

        <AverateRating reviews={product.reviews} />

        <div className="flex justify-end">
          <AddToCart productId={id} />
        </div>
      </div>

      <Review reviews={product.reviews} id={product.id} />

      <div className="flex w-full flex-wrap gap-2">
        <h1 className="-mb-2 mt-2 text-2xl font-bold">Related Products</h1>
        <ul role="list" className="m-2 flex flex-row flex-wrap">
          {products
            .filter((p) => p.id !== +id)
            .map((product) => (
              <li key={product.id} className="md:w-1/5">
                <Link href={`/products/${product.id}`}>
                  <ProductCard {...product} small />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
