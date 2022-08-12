import React, { useEffect } from "react";
import "./home.scss";
import teamWorking from "../../assets/images/studio-team.jpg";
import CustomButton from "../../components/CustomButton";

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-c">
      <section className="home__section-main-c">
        <h2 className="sector-main__title">
          Expand your community
          {/* Expand your creativity
          Expand your knowledge */}
        </h2>
        <p className="sector-main__desc">
          Explore and get in contact with more entrepreneurs just like you.
        </p>
        <div className="sector-main__btns-c">
          <CustomButton type="primary">Join us</CustomButton>
          <CustomButton type="secondary">See how it works</CustomButton>
        </div>
        <div className="main__img-c">
          <img src={teamWorking} alt="Team working" />
        </div>
      </section>
      <section className="home__section-people-c">
        <h2 className="people__title">Our entrepreneurs</h2>
        <p className="people__desc">Lorem ipsum dolor sit amet consectetur.</p>

        <CustomButton type="primary" to="/entrepreneurs">
          View all profiles
        </CustomButton>
      </section>
    </div>
  );
};
