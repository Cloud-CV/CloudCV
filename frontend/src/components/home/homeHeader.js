import React from "react";

const HomeHeader = props => {
  const INTRO_LINE = "Welcome to";
  const DESC_LINE =
    "Large Scale Distributed Computer Vision As A Cloud Service";
  return (
    <div className="cv-home-header">
      <span className="cv-home-header-intro">{INTRO_LINE}</span>
      <br />
      <h1 className="cv-home-header-title">CLOUDCV</h1>
      <br />
      <span className="cv-home-header-desc">{DESC_LINE}</span>
    </div>
  );
};

export default HomeHeader;
