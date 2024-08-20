import Image from "next/image";
import React from "react";

export default function ProductCard({
  name,
  description,
  price,
  image,
  small,
}: {
  name: string;
  image: string;
  description: string;
  price: number;
  small?: boolean;
}) {
  return (
    <div className="flex flex-col p-5">
      <Image
        src={image}
        alt={`${name} image`}
        width={450}
        height={450}
        className="rounded-md object-cover"
      />
      <div className="space-y-2">
        <h3 className={`mt-2 font-bold leading-10 ${small ? "" : "text-xl"}`}>
          {name}
        </h3>
        {!small && (
          <>
            <div className="text-base">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <p className="text-sm font-light">{description}</p>
          </>
        )}
      </div>
    </div>
  );
}
