import React from "react";
import { PropTypes } from "prop-types";

const PersonCard = props => {
  const UNKNOWN_IMAGE = require("../../images/default_person.jpg");
  return (
    <div className="person-card">
      <div className="person-image-border">
        <div className="person-image-container">
          <img className="person-image" src={UNKNOWN_IMAGE} />
        </div>
      </div>
      <div className="">
        <span className="">Utkarsh Gupta</span>
        <span className="">GSOC 2017</span>
      </div>
    </div>
  );
};

export default PersonCard;
