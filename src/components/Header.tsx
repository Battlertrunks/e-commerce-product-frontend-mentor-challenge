import "./Header.css";
import logo from "../ecommerce-product-page-main/images/logo.svg";
import sidebarButton from "../ecommerce-product-page-main/images/icon-menu.svg";
import cart from "../ecommerce-product-page-main/images/icon-cart.svg";
import avatar from "../ecommerce-product-page-main/images/image-avatar.png";
import { useState } from "react";
import SidebarContainer from "./SidebarContainer";
import CartModal from "./CartModal";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const [cartModalToggle, setCartModalToggle] = useState<boolean>(false);

  const closeSidebar = (): void => {
    setSidebarToggle(false);
  };

  const backgroundSidebar = sidebarToggle ? "background-shade" : "";

  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <button onClick={() => setSidebarToggle((prev) => !prev)}>
              <img
                className="sidebar"
                src={sidebarButton}
                alt="sidebar button"
              />
            </button>
          </li>
          <li>
            <h1>
              <img className="logo" src={logo} alt="Company logo" />
            </h1>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={() => setCartModalToggle((prev) => !prev)}>
              <img className="cart-icon" src={cart} alt="cart icon button" />
            </button>
          </li>
          <li>
            <button>
              <img
                className="profile-icon"
                src={avatar}
                alt="profile icon button"
              />
            </button>
          </li>
        </ul>
      </nav>
      <div className={backgroundSidebar} />
      <SidebarContainer onToggle={sidebarToggle} onClose={closeSidebar} />
      <CartModal onCart={cartModalToggle} />
    </header>
  );
};

export default Header;
