import "./OrderForm.css";

import minus from "../ecommerce-product-page-main/images/icon-minus.svg";
import plus from "../ecommerce-product-page-main/images/icon-plus.svg";
import cart from "../ecommerce-product-page-main/images/icon-cart-white.svg";
import { FormEvent, useContext, useState } from "react";
import CartContext from "../context/CartContext";
import image1 from "../ecommerce-product-page-main/images/image-product-1.jpg";

interface Props {
  onTitle: string;
  onPrice: number;
}

let id: number = 0;

const OrderForm = ({ onTitle, onPrice }: Props) => {
  const [amount, setAmount] = useState<number>(0);

  const { addToCart } = useContext(CartContext);

  if (amount < 0) {
    setAmount(0);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (amount) {
      addToCart({
        thumbnail: image1,
        itemName: onTitle,
        cost: onPrice,
        amount: amount,
        total: onPrice * amount,
        id: (id++).toString(),
      });

      setAmount(0);
    }
  };

  return (
    <form className="OrderForm" onSubmit={(e) => submitHandler(e)}>
      <div>
        <span onClick={() => setAmount((prev) => prev - 1)}>
          <img src={minus} alt="Minus button" />
        </span>
        <p>{amount}</p>
        <span onClick={() => setAmount((prev) => prev + 1)}>
          <img src={plus} alt="Plus button" />
        </span>
      </div>
      <button className="submit-btn">
        <img src={cart} alt="Cart icon." /> <span>Add to cart</span>
      </button>
    </form>
  );
};

export default OrderForm;
