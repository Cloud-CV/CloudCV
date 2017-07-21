import React from "react";
import HomeAboutUs from "./homeBody/HomeAboutUs";
import HomeShowcase from "./homeBody/HomeShowcase";
import HomeNews from "./homeBody/HomeNews";

const HomeBody = props => {
  return (
    <div className="cv-home-body">
      <HomeAboutUs />
      <HomeShowcase />
      <HomeNews />
    </div>
  );
};

export default HomeBody;
