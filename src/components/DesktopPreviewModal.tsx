import { ReactFragment } from "react";
import closeIcon from "../ecommerce-product-page-main/images/icon-close.svg";
import "./DesktopPreviewModal.css";

interface Props {
  onModal: ReactFragment;
  onClose: () => void;
}

const DesktopPreviewModal = ({ onModal, onClose }: Props) => {
  return (
    <div className="DesktopPreviewModal">
      <div>
        <button className="close-image-modal" onClick={() => onClose()}>
          <img src={closeIcon} alt="Close Previews button icon." />
        </button>
        {onModal}
      </div>
    </div>
  );
};

export default DesktopPreviewModal;
