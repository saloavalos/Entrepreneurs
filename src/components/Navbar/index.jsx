import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../favicon.svg";
import "./navbar.scss";
import SearchBar from "../SearchBar";
import { useEffect } from "react";

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

  const handleToggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <nav className="navbar-main-c">
      <div className="navbar-sub-c">
        <Link to="/" className="navbar-logo-c">
          <img src={logo} alt="logo" />
        </Link>

        <div className="search-bar-and-burger-menu-c">
          <SearchBar />
          <button className="navbar__burger-menu" onClick={handleToggleMenu}>
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
              <li key={item.title} onClick={handleToggleMenu}>
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
