import "./OrderForm.css";

import minus from "../ecommerce-product-page-main/images/icon-minus.svg";
import plus from "../ecommerce-product-page-main/images/icon-plus.svg";
import cart from "../ecommerce-product-page-main/images/icon-cart-white.svg";
import { FormEvent, useState } from "react";

const OrderForm = () => {
  const [amount, setAmount] = useState<number>(0);

  if (amount < 0) {
    setAmount(0);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="OrderForm" onSubmit={(e) => submitHandler(e)}>
      <div>
        <button onClick={() => setAmount((prev) => prev - 1)}>
          <img src={minus} alt="Minus button" />
        </button>
        <p>{amount}</p>
        <button onClick={() => setAmount((prev) => prev + 1)}>
          <img src={plus} alt="Plus button" />
        </button>
      </div>
      <button className="submit-btn">
        <img src={cart} alt="Cart icon." /> <span>Add to cart</span>
      </button>
    </form>
  );
};

export default OrderForm;
