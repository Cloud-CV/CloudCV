import React from "react";

const HomeHeader = props => {
  const DESC_LINE = "Building platforms for reproducible AI Research";
  return (
    <div className="cv-home-header">
      <h1 className="cv-home-header-title">CLOUDCV</h1>
      <br />
      <span className="cv-home-header-desc">{DESC_LINE}</span>
    </div>
  );
};

export default HomeHeader;
