import AddToCart from "@/components/AddToCart";
import { addToCart } from "@/lib/actions/cart";
import { getProductById } from "@/lib/actions/products";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProductById(+id);

  if (!product) {
    notFound();
  }

  const addToCartAction = async () => {
    return await addToCart(+id);
  };

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
        <div className="flex justify-end">
          <AddToCart addToCartAction={addToCartAction} />
        </div>
      </div>
    </div>
  );
}
