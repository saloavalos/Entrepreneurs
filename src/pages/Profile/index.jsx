import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
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
          <div className="profile__banner-c">
            <img src={`https://picsum.photos/1000/400`} alt="" />
          </div>
          <div className="profile__user-photo-c">
            <img src={`https://picsum.photos/200/200`} alt="Profile photo" />
          </div>

          <div className="profile__all-info-c">
            <div className="profile__main-info">
              <div className="profile__username-c">
                <p>{profileData.name}</p>
                <span>@{profileData.username}</span>
              </div>
              <div className="profile__main-actions-btns-c">
                <CustomButton type="primary">View portfolio</CustomButton>
                <CustomButton color="btn-black">+ Follow</CustomButton>
              </div>
            </div>

            <div className="profile__more-info-c">
              <div className="profile__sub-info">
                <div className="profile__company-c">
                  <h6 className="profile-subtitle">Company</h6>
                  <p>{profileData.company.name}</p>
                  <span className="profile-desc">
                    {profileData.company.catchPhrase}
                  </span>
                </div>
                <hr className="divisor-line" />
                <div className="profile__about-me-c">
                  <h6 className="profile-subtitle">About me</h6>
                  <p className="profile-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi distinctio porro sit in consectetur alias velit
                    unde ipsa ab labore
                  </p>
                  <CustomButton type="secondary">Read more</CustomButton>
                </div>
              </div>

              <div className="profile__extra-info-c">
                <div className="extra-info__each-c">
                  <p className="profile__extra-info_title">Location</p>
                  <span className="profile-desc">
                    {profileData.address.city}
                  </span>
                </div>
                <div className="extra-info__each-c">
                  <p className="profile__extra-info_title">Website</p>
                  <span className="profile-desc">{profileData.website}</span>
                </div>
                <div className="extra-info__each-c">
                  <p className="profile__extra-info_title">Email</p>
                  <span className="profile-desc">{profileData.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
