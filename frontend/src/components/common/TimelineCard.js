import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const TimelineCard = props => {
  const { date } = props;
  return (
    <li className="timeline-item">
      <div className="timeline-info">
        <span>{date}</span>
      </div>
      <div className="timeline-marker" />
      <Card extraClass="timeline-content">{props.children}</Card>
    </li>
  );
};

TimelineCard.propTypes = {
  date: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export default TimelineCard;
