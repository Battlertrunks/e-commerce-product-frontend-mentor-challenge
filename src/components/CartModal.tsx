import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Item from "../models/Item";
import "./CartModal.css";

import deleteIcon from "../ecommerce-product-page-main/images/icon-delete.svg";

interface Props {
  onCart: boolean;
}

const CartModal = ({ onCart }: Props) => {
  const { cartItem, removeFromCart } = useContext(CartContext);
  console.log(cartItem.length);

  const animation: string = onCart
    ? "CartModal pull-down-animation"
    : "CartModal";

  return (
    <section className={animation}>
      <h4>Cart</h4>
      <div className="line-divider">
        {cartItem.length ? (
          <div className="list-and-checkout-btn">
            <ul>
              {cartItem.map((item) => (
                <li key={item.id}>
                  <img
                    className="thumbnail"
                    src={item.thumbnail}
                    alt={`${item.itemName} image thumbnail`}
                  />
                  <div className="info-container">
                    <p className="item-name">{item.itemName}</p>
                    <div className="cost-amount">
                      <p>
                        ${item.cost.toFixed(2)} x {item.amount}{" "}
                        <span>${item.total.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    className="delete-icon"
                    onClick={() => removeFromCart(item.id?.toString()!)}
                  >
                    <img src={deleteIcon} alt="Delete cart item icon." />
                  </button>
                </li>
              ))}
            </ul>
            <button className="checkout-btn">Checkout</button>
          </div>
        ) : (
          <p className="cart-empty">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default CartModal;
