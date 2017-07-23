import React from "react";
import { Link } from "react-router-dom";
import HomeAboutUs from "./homeBody/HomeAboutUs";
import HomeShowcase from "./homeBody/HomeShowcase";
import HomeNews from "./homeBody/HomeNews";
import HomeSponsors from "./homeBody/HomeSponsors";
import Button from "../common/Button";

const HomeBody = props => {
  const PROJECT_DESC = "We have multiple projects going on!";
  const PROJECT_BUTTON = "View our Projects";
  const GITHUB_DESC = "Yes, we love open source";
  const GITHUB_BUTTON = "Start Contributing";
  const GITHUB_IMAGE = require("../../images/github_logo.png");
  return (
    <div className="cv-home-body">
      <HomeAboutUs />
      <HomeShowcase />
      <HomeNews />
      <div className="cv-home-projects cv-container">
        <h4>{PROJECT_DESC}</h4>
        <Button themeClass="cv-button-dark" extraClass="cv-button-small">
          {PROJECT_BUTTON}
        </Button>
      </div>
      <HomeSponsors />
      <div className="cv-home-github cv-container">
        <h1 className="cv-home-showcase-heading">{GITHUB_DESC}</h1>
        <br />
        <Link to="https://github.com/Cloud-CV/" target="_blank">
          <Button themeClass="cv-button-dark">
            {GITHUB_BUTTON}
          </Button>
        </Link>
        <br />
        <img
          className="cv-home-gihub-image"
          src={GITHUB_IMAGE}
          alt="Github Logo"
        />
      </div>
    </div>
  );
};

export default HomeBody;
