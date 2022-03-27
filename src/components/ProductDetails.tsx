import ProductDetailsModel from "../models/ProductDetailsModel";
import OrderForm from "./OrderForm";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product: ProductDetailsModel = {
    company: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    percentOff: 50,
    fullPrice: 250,
  };

  return (
    <section className="ProductDetails">
      <p className="company">
        <strong>{product.company}</strong>
      </p>
      <h2 className="item-name">{product.productName}</h2>
      <p className="description">{product.description}</p>
      <div className="price-info">
        <h3 className="sale-price">
          ${product.price.toFixed(2)}{" "}
          <span className="percent-off">{product.percentOff}%</span>
        </h3>
        <h4 className="orig-price">${product.fullPrice?.toFixed(2)}</h4>
      </div>
      <OrderForm onTitle={product.productName} onPrice={product.price} />
    </section>
  );
};

export default ProductDetails;
