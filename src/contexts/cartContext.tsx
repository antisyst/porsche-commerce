import React, { createContext, useState } from 'react';
import cars from '@/data/data';
import { Car } from '@/data/data';
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextProps = {
  cart: CartItem[];
  addToCart: (cars: CartItem) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (cars: CartItem) => {
    setCart((prev) => [...prev, cars]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((cars) => cars.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};