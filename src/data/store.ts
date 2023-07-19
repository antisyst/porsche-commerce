import { Car } from './data';
import create from 'zustand';

type State = {
  cart: Car[];
  addToCart: (product: Car) => void;
  removeFromCart: (productId: number) => void;
};

export const useStore = create<State>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));
