import React from "react";

const HomeFooter = props => {
  const IMAGE = require("../../images/cloudcv_footer.png");
  return (
    <div className="cv-home-footer">
      <img className="cv-home-footer-image" src={IMAGE} alt="CloudCV Footer" />
    </div>
  );
};

export default HomeFooter;
