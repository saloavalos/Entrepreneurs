import React from "react";
import "./footer.scss";

export default () => {
  return (
    <div className="footer-container">
      <p className="footer-copyright-text">
        Copyright © {new Date().getUTCFullYear()} Salo Avalos
      </p>
    </div>
  );
};
