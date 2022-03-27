import "./Header.css";
import logo from "../ecommerce-product-page-main/images/logo.svg";
import sidebarButton from "../ecommerce-product-page-main/images/icon-menu.svg";
import cart from "../ecommerce-product-page-main/images/icon-cart.svg";
import avatar from "../ecommerce-product-page-main/images/image-avatar.png";
import { useContext, useState } from "react";
import SidebarContainer from "./SidebarContainer";
import CartModal from "./CartModal";
import CartContext from "../context/CartContext";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const [cartModalToggle, setCartModalToggle] = useState<boolean>(false);

  const { cartItem } = useContext(CartContext);

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
          <ul className="nav-items">
            <li>
              <button>Collections</button>
            </li>
            <li>
              <button>Men</button>
            </li>
            <li>
              <button>Women</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </ul>
        <ul>
          <li>
            <button
              className="cart-btn"
              onClick={() => setCartModalToggle((prev) => !prev)}
            >
              <img className="cart-icon" src={cart} alt="cart icon button" />
              {cartItem.length !== 0 && (
                <p className="cart-amount">
                  {cartItem.length < 99 ? cartItem.length : `+${99}`}
                </p>
              )}
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
