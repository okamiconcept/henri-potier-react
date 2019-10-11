import React from "react";
import { Link } from "react-router-dom";
import { useOrder } from "./OrderContext";

const Header: React.FC = () => {
  const [stateOrder] = useOrder();

  return (
    <header>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            HENRI POTTIER
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/products">
              Products
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  className="button is-info badge has-badge-rounded has-badge-danger"
                  data-badge={stateOrder.count}
                  to="/cart"
                >
                  <span className="icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <strong>View Order</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
