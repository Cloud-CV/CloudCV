import React, { Component } from "react";
import { PropTypes } from "prop-types";

const Button = props => {
  return (
    <button className="cv-button">
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.object.isRequired
};

export default Button;
