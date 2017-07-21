import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import HomeFooter from "./HomeFooter";
import Button from "../common/Button";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hashLinkScroll = this.hashLinkScroll.bind(this);
  }

  componentDidMount() {
    this.hashLinkScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    this.hashLinkScroll();
  }

  hashLinkScroll() {
    const { path } = this.props.match;
    if (path !== "/") {
      setTimeout(() => {
        const id = path.replace("/", "");
        const element = document.getElementById(id);
        if (element)
          element.scrollIntoView({
            behavior: "smooth"
          });
      }, 0);
    } else {
      setTimeout(() => {
        const element = document.body;
        if (element)
          element.scrollIntoView({
            behavior: "smooth"
          });
      }, 0);
    }
  }

  render() {
    return (
      <div className="cv-home-container">
        <HomeHeader />
        <div className="cv-home-button cv-container">
          <Link to="/">
            <Button themeClass="cv-button-dark">
              Know More
            </Button>
          </Link>
        </div>
        <HomeBody />
        <HomeFooter />
      </div>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default HomePage;
