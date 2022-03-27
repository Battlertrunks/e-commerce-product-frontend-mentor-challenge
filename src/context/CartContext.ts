import { createContext } from "react";
import Item from "../models/Item";

interface CartContextModel {
  cartItem: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
}

const defaultValues: CartContextModel = {
  cartItem: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext(defaultValues);

export default CartContext;
