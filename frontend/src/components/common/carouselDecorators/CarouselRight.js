import React from "react";
import right from "../../../images/ic_chevron_right.svg";
import PropTypes from "prop-types";

class CarouselRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.nextSlide();
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
        src={right}
        className="carousel-button"
        onClick={this.handleClick}
        style={this.getButtonStyles(
          this.props.currentSlide + this.props.slidesToScroll >=
            this.props.slideCount && !this.props.wrapAround
        )}
      />
    );
  }
}
CarouselRight.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  nextSlide: PropTypes.func.isRequired,
  wrapAround: PropTypes.bool.isRequired,
  slidesToScroll: PropTypes.number.isRequired,
  slideCount: PropTypes.number.isRequired
};

export default CarouselRight;
