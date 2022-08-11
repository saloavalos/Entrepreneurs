import React from "react";
import "./entrepreneurs.scss";

export default () => {
  return (
    <div className="entrepreneurs-c">
      <div>
        <p>Lorem, ipsum dolor.</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </div>
      <div className="people-c">
        <div className="each-person-c">
          <div className="each-person__profile-img-c">
            <img src="" alt="Profile" />
          </div>
          <div className="each-person__data">
            <p>Name</p>
            <p>Location</p>
            <p>Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};
