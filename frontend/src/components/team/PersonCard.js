import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const PersonCard = props => {
  return (
    <div className="cv-team-person-card">
      <Link to={props.link} target="_blank">
        <div className="cv-team-person-image-border">
          <div className="cv-team-person-image-container">
            <div className="maintain-aspect-ratio">
              <img src={props.image} />
            </div>
            <div className="cv-team-person-card-overlay">
              <span className="cv-team-person-card-overlay-text">Profile</span>
            </div>
          </div>
        </div>
        <div className="cv-team-person-card-details">
          <span className="cv-team-person-name">{props.name}</span>
          <span className="cv-team-person-desc">{props.description}</span>
        </div>
      </Link>
    </div>
  );
};

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default PersonCard;
