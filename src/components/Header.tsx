import "./Header.css";
import logo from "../ecommerce-product-page-main/images/logo.svg";
import sidebarButton from "../ecommerce-product-page-main/images/icon-menu.svg";
import cart from "../ecommerce-product-page-main/images/icon-cart.svg";
import avatar from "../ecommerce-product-page-main/images/image-avatar.png";
import { useState } from "react";
import SidebarContainer from "./SidebarContainer";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const closeSidebar = (): void => {
    setSidebarToggle(false);
  };

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
            <button>
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
      <SidebarContainer onToggle={sidebarToggle} onClose={closeSidebar} />
    </header>
  );
};

export default Header;
