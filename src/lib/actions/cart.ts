"use server";

import { getProductById } from "./products";

const initialCart: Cart = {
  products: [
    {
      id: 1,
      name: "Castle T-Shirt",
      image: "/castle-t-shirt.jpg",
      price: 25,
    },
    {
      id: 2,
      name: "Dragon T-Shirt",
      image: "/dragon-t-shirt.jpg",
      price: 25,
    },
  ],
};

export type Cart = {
  products: {
    id: number;
    image: string;
    name: string;
    price: number;
  }[];
};

export const getCart = async (): Promise<Cart> => {
  return initialCart;
};

export const addToCart = async (productId: number): Promise<Cart> => {
  const product = await getProductById(productId);
  if (product) {
    initialCart.products.push({
      name: product.name,
      id: product.id,
      image: product.image,
      price: product.price,
    });
  }
  return initialCart;
};

export const clearCart = async (): Promise<Cart> => {
  initialCart.products = [];
  return initialCart;
};
