import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../favicon.svg";
import "./navbar.scss";
import SearchBar from "../SearchBar";

export default () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

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

  useEffect(() => {
    const onScrollDown = (e) => {
      if (window.scrollY > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };
    window.addEventListener("scroll", onScrollDown);

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScrollDown);
    };
  }, []);

  return (
    <nav className={`navbar-main-c ${isScrolledDown && "navbar-shadow"}`}>
      <div className="navbar-sub-c">
        <Link
          to="/"
          className="navbar-logo-c"
          onClick={() => setIsMobileMenuActive(false)}
        >
          <img src={logo} alt="logo" />
        </Link>

        <div className="search-and-menu-c">
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
            onClick={handleToggleMenu}
          >
            <ul
              className={"navbar-menu-list"}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {menuSections.map((item) => (
                <li key={item.title}>
                  <div className="navbar-menu__item__active"></div>
                  <Link to={item.url} onClick={handleToggleMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
