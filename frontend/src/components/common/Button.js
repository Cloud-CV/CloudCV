import React from "react";
import { PropTypes } from "prop-types";

const Button = props => {
  const { extraClass, themeClass } = props;
  return (
    <button className={`cv-button ${themeClass} ${extraClass}`}>
      {props.children}
    </button>
  );
};

const themeClassOptions = ["cv-button-light", "cv-button-dark"];

Button.defaultProps = {
  children: null,
  extraClass: "",
  themeClass: themeClassOptions[0]
};

Button.propTypes = {
  children: PropTypes.string,
  extraClass: PropTypes.string,
  themeClass: PropTypes.oneOf(themeClassOptions)
};

export default Button;
