import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import Button from "../common/Button";

const HomePage = () => {
  return (
    <div className="cv-home-container">
      <HomeHeader />
      <div className="cv-home-button">
        <Link to="/">
          <Button>
            Know More
          </Button>
        </Link>
      </div>
      <HomeBody />
    </div>
  );
};

export default HomePage;
