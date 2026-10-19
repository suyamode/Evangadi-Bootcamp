import React from "react";
import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Apple Logo" />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac/">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad">
                  iPad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch">
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv">
                  TV
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search">
                  <img src={searchIcon} alt="Search" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart">
                  <img src={cart} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
