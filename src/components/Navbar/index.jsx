import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../favicon.svg";
import "./navbar.scss";
import SearchBar from "../SearchBar";

export default () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const menuSections = [
    {
      title: "Entrepreneurs",
      url: "/entrepreneurs",
    },
    {
      title: "About us",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ];

  return (
    <nav className="navbar-main-c">
      <div className="navbar-sub-c">
        <Link to="/" className="navbar-logo-c">
          <img src={logo} alt="logo" />
        </Link>

        <div className="search-bar-and-burger-menu-c">
          <SearchBar />
          <button
            className="navbar__burger-menu"
            onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
          >
            <span
              className={`burger-menu__lines burger-menu__line1 ${
                isMobileMenuActive && "burger-menu__line1--x"
              }`}
            ></span>
            <span
              className={`burger-menu__lines burger-menu__line2 ${
                isMobileMenuActive && "burger-menu__line2--x"
              }`}
            ></span>
            <span
              className={`burger-menu__lines burger-menu__line3 ${
                isMobileMenuActive && "burger-menu__line3--x"
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`navbar-menu ${
            isMobileMenuActive && "navbar-menu--active"
          }`}
        >
          <ul className={"navbar-menu-list"}>
            {menuSections.map((item) => (
              <li key={item.title}>
                <div className="navbar-menu__item__active"></div>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
