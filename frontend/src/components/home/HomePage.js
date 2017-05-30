import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import HomeHeader from "./homeHeader";
import Button from "../common/Button";

const HomePage = () => {
  return (
    <div className="cv-home-container">
      <HomeHeader />
      <div className="cv-home-button">
        <Link to="/">
          <Button>
            Get More Insights
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
