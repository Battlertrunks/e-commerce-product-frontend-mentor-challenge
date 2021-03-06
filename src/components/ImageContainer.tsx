import "./ImageContainer.css";
import image1 from "../ecommerce-product-page-main/images/image-product-1.jpg";
import image2 from "../ecommerce-product-page-main/images/image-product-2.jpg";
import image3 from "../ecommerce-product-page-main/images/image-product-3.jpg";
import image4 from "../ecommerce-product-page-main/images/image-product-4.jpg";

import nextIcon from "../ecommerce-product-page-main/images/icon-next.svg";
import prevIcon from "../ecommerce-product-page-main/images/icon-previous.svg";
import React, { useState } from "react";
import DesktopPreviewModal from "./DesktopPreviewModal";

const ImageContainer = () => {
  const [previewImage, setPreviewImage] = useState<string>(image1);
  const previewImages = [image1, image2, image3, image4];

  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [previewClicked, setPreviewClicked] = useState<boolean>(false);

  const onPrev = (): void => {
    const index: number = previewImages.indexOf(previewImage);
    if (index) {
      setPreviewImage(previewImages[index - 1]);
      setSelectedImage(index - 1);
    } else {
      setPreviewImage(previewImages[previewImages.length - 1]);
    }
  };

  const onNext = (): void => {
    const index: number = previewImages.indexOf(previewImage);
    if (index < previewImages.length - 1) {
      setPreviewImage(previewImages[index + 1]);
      setSelectedImage(index + 1);
    } else {
      setPreviewImage(previewImages[0]);
    }
  };

  const onSelect = (selectedImg: number): void => {
    setPreviewImage(previewImages[selectedImg]);
    setSelectedImage(selectedImg);
  };

  const closePreview = () => {
    setPreviewClicked((prev) => !prev);
  };

  const displayPreviews = (
    <div className="images-container">
      <div className="main-image">
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
        <img
          onClick={() => setPreviewClicked((prev) => !prev)}
          className="main-preview-image"
          src={previewImage}
          alt="Preview image."
        />
      </div>
      <ul className="desktop-preview-container">
        {previewImages.map((image, i) => (
          <li className={i === selectedImage ? "selected-image" : ""}>
            <img
              onClick={() => onSelect(i)}
              src={image}
              alt={`Preview image ${i}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="ImageContainer">
      {displayPreviews}
      {previewClicked && (
        <DesktopPreviewModal onModal={displayPreviews} onClose={closePreview} />
      )}
    </div>
  );
};

export default ImageContainer;
