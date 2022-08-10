import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow.jsx";
import "./customButton.scss";

export default ({ children, type, color }) => {
  const buttonColors = ["btn-blue", "btn-black"];

  const checkButtonColor = buttonColors.includes(color)
    ? color
    : buttonColors[0];

  return (
    <Link
      to="/"
      className={`btn ${
        type === "primary" ? "primary-btn" : "secondary-btn"
      } ${checkButtonColor}`}
    >
      {children}
      {type === "secondary" && <Arrow />}
    </Link>
  );
};
