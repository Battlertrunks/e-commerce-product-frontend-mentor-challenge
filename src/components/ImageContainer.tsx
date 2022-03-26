import "./ImageContainer.css";
import image1 from "../ecommerce-product-page-main/images/image-product-1.jpg";
import image2 from "../ecommerce-product-page-main/images/image-product-2.jpg";
import image3 from "../ecommerce-product-page-main/images/image-product-3.jpg";
import image4 from "../ecommerce-product-page-main/images/image-product-4.jpg";

import nextIcon from "../ecommerce-product-page-main/images/icon-next.svg";
import prevIcon from "../ecommerce-product-page-main/images/icon-previous.svg";
import { useState } from "react";

const ImageContainer = () => {
  const [previewImage, setPreviewImage] = useState<string>(image1);
  const previewImages = [image1, image2, image3, image4];

  const onPrev = (): void => {
    const index: number = previewImages.indexOf(previewImage);
    if (index) {
      setPreviewImage(previewImages[index - 1]);
    } else {
      setPreviewImage(previewImages[previewImages.length - 1]);
    }
  };

  const onNext = (): void => {
    const index: number = previewImages.indexOf(previewImage);
    if (index < previewImages.length - 1) {
      setPreviewImage(previewImages[index + 1]);
    } else {
      setPreviewImage(previewImages[0]);
    }
  };

  return (
    <div className="ImageContainer">
      <ul>
        <li className="prev-btn">
          <button onClick={onPrev}>
            <img src={prevIcon} alt="Previous button icon." />
          </button>
        </li>
        <li className="next-btn">
          <button onClick={onNext}>
            <img src={nextIcon} alt="Next button icon." />
          </button>
        </li>
      </ul>
      <img src={previewImage} alt="" />
    </div>
  );
};

export default ImageContainer;
