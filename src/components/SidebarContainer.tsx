import "./SidebarContainer.css";

import closeIcon from "../ecommerce-product-page-main/images/icon-close.svg";

interface Props {
  onToggle: boolean;
  onClose: () => void;
}

const SidebarContainer = ({ onToggle, onClose }: Props) => {
  const sidebarToggler = onToggle
    ? "SidebarContainer"
    : "SidebarContainer sidebar-not-active";

  return (
    <aside className={sidebarToggler}>
      <button onClick={() => onClose()}>
        <img src={closeIcon} alt="Close side bar icon." />
      </button>
      <ul>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarContainer;
