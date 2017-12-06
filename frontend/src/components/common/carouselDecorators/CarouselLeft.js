import React from "react";
import left from "../../../images/ic_chevron_left.svg";
import PropTypes from "prop-types";

class CarouselLeft extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.previousSlide();
  }
  getButtonStyles(disabled) {
    return {
      border: 0,
      color: "white",
      outline: 0,
      opacity: disabled ? 0.3 : 1,
      cursor: "pointer"
    };
  }
  render() {
    return (
      <img
        src={left}
        className="carousel-button"
        onClick={this.handleClick}
        style={this.getButtonStyles(
          this.props.currentSlide === 0 && !this.props.wrapAround
        )}
      />
    );
  }
}
CarouselLeft.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  previousSlide: PropTypes.func.isRequired,
  wrapAround: PropTypes.bool.isRequired
};

export default CarouselLeft;
