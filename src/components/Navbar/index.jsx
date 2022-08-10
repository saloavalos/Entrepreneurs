import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../favicon.svg";
import "./navbar.scss";
import SearchIcon from "../../assets/icons/Search";

export default () => {
  return (
    <nav className="navbar-main-c">
      <div className="navbar-sub-c">
        <Link to="/" className="navbar-logo-c">
          <img src={logo} alt="logo" />
        </Link>
        <div className="search-bar-and-burger-menu-c">
          {/* //use component instead for btn*/}
          <button>
            <SearchIcon />
          </button>
          <button>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
