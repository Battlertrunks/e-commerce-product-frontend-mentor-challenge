import OrderForm from "./OrderForm";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <section className="ProductDetails">
      <p className="company">
        <strong>Sneaker Company</strong>
      </p>
      <h2 className="item-name">Fall Limited Edition Sneakers</h2>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div>
        <h3 className="sale-price">
          $125.00 <span className="percent-off">50%</span>
        </h3>
        <h4 className="orig-price">$250.00</h4>
      </div>
      <OrderForm />
    </section>
  );
};

export default ProductDetails;
