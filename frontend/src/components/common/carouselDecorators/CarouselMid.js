import React from "react";
import PropTypes from "prop-types";

class CarouselMid extends React.Component {
  constructor(props) {
    super(props);
    this.getIndexes = this.getIndexes.bind(this);
    this.getListStyles = this.getListStyles.bind(this);
    this.getListItemStyles = this.getListItemStyles.bind(this);
    this.getButtonStyles = this.getButtonStyles.bind(this);
  }
  getIndexes(count, inc) {
    let arr = [];
    for (let i = 0; i < count - (this.props.slidesToShow - 1); i += inc) {
      arr.push(i);
    }
    return arr;
  }
  getListStyles() {
    return {
      position: "relative",
      margin: 0,
      top: -10,
      padding: 0
    };
  }
  getListItemStyles() {
    return {
      listStyleType: "none",
      display: "inline-block"
    };
  }
  getButtonStyles(active) {
    return {
      border: 0,
      background: "transparent",
      color: "black",
      cursor: "pointer",
      padding: 10,
      outline: 0,
      fontSize: 24,
      opacity: active ? 1 : 0.5
    };
  }
  render() {
    let self = this;
    let indexes = this.getIndexes(
      self.props.slideCount,
      self.props.slidesToScroll
    );
    return (
      <ul style={self.getListStyles()}>
        {indexes.map(index => {
          return (
            <li style={self.getListItemStyles()} key={index}>
              <button
                style={self.getButtonStyles(self.props.currentSlide === index)}
                onClick={self.props.goToSlide.bind(null, index)}
              >
                •
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
CarouselMid.propTypes = {
  slidesToShow: PropTypes.number.isRequired
};

export default CarouselMid;
