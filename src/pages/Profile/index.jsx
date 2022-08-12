import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./profile.scss";

export default () => {
  const [profileData, setProfileData] = useState();

  let params = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.profileID}`)
      .then((response) => setProfileData(response.data))
      .catch((error) => console.log("Unable to get data 🤦‍♂️"));
  }, []);

  return (
    <>
      {!profileData && <div>Loading...</div>}
      {profileData && (
        <div className="entrepreneur-profile-c">
          <p>{profileData.name}</p> <span>{profileData.email}</span>
        </div>
      )}
    </>
  );
};
