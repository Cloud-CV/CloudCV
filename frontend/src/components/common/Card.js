import React from "react";
import { PropTypes } from "prop-types";

const Card = props => {
  const { themeClass, extraClass } = props;
  return (
    <section className={`cv-card ${themeClass} ${extraClass}`}>
      {props.children}
    </section>
  );
};

const themeClassOptions = [
  "cv-card-light",
  "cv-card-dark",
  "cv-card-deep-light"
];

Card.defaultProps = {
  children: null,
  extraClass: "",
  themeClass: themeClassOptions[0]
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  extraClass: PropTypes.string,
  themeClass: PropTypes.oneOf(themeClassOptions)
};

export default Card;
