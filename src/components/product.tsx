import React, { useContext } from "react";
import { CartContext, CartItem } from "@/contexts/cartContext";

type ProductProps = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item: CartItem = {
      ...product,
      quantity: 1,
    };

    addToCart(item);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
