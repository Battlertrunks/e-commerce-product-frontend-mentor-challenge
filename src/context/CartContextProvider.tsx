import { ReactNode, useState } from "react";
import Item from "../models/Item";
import CartContext from "./CartContext";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cartItem, setCartItem] = useState<Item[]>([]);

  const addToCart = (item: Item): void => {
    setCartItem((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string): void => {
    setCartItem((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
