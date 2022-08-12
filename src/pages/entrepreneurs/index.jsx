import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./entrepreneurs.scss";

export default () => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setEntrepreneurs(response.data))
      .catch((error) => console.log("We have an error 😫"));
  }, []);

  return (
    <div className="entrepreneurs-c">
      <div className="entrepreneurs__title-c">
        <p>Lorem, ipsum 👌</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </div>
      <div className="people-c">
        {!entrepreneurs.length && <div>Loading...</div>}
        {entrepreneurs.length > 0 &&
          entrepreneurs.map((eachEntrepreneur) => (
            <Link
              to={`/entrepreneurs/${eachEntrepreneur.id}`}
              className="each-person-link"
              key={eachEntrepreneur.id}
            >
              <div className="each-person-c">
                <div className="each-person__profile-img-c">
                  <img src="https://picsum.photos/id/0/400/300" alt="Profile" />
                </div>

                <div className="each-person__data">
                  <p>{eachEntrepreneur.name}</p>
                  <p>
                    Company: <span>{eachEntrepreneur?.company?.name}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
