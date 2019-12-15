import React from "react";
import { Link } from "react-router-dom";
import HomeAboutUs from "./homeBody/HomeAboutUs";
import HomeNews from "./homeBody/HomeNews";
import HomeDemos from "./homeBody/HomeDemos";
import HomeSponsors from "./homeBody/HomeSponsors";
import HomeShowcase from "./homeBody/HomeShowcase";
import HomeContactUs from "./homeBody/HomeContactUs";
import Button from "../common/Button";

const HomeBody = props => {
  const PROJECT_HEADING = "Projects";
  const GITHUB_DESC = "Interested in contributing?";
  const GITHUB_STRING =
    "We are looking for active open source contributors who could help us taking the projects to next level. Please feel free to visit following links if you are interested in joining our team";
  const GITHUB_IMAGE = require("../../images/github_logo.png");
  const GITTER_IMAGE = require("../../images/gitter_logo.png");
  const GSOC_LOGO = require("../../images/gsoc_logo.png");
  const GCI_LOGO = require("../../images/gci_logo.png");
  return (
    <div className="cv-home-body">
      <HomeAboutUs />
      <HomeNews />
      <HomeShowcase />
      <HomeDemos />
      <HomeSponsors />
      <div className="cv-home-github cv-container" id="contribute">
        <h1 className="cv-home-showcase-heading">{GITHUB_DESC}</h1>
        <br />
        <p>{GITHUB_STRING}</p>
        <div className="cv-home-github-icons">
          <Link
            to="https://summerofcode.withgoogle.com/organizations/5709446018236416/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cv-home-gihub-image"
              src={GSOC_LOGO}
              alt="GSOC Logo"
            />
            <p>GSoC</p>
          </Link>
          <Link
            to="https://codein.withgoogle.com/archive/2018/organization/5635703144710144/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cv-home-gihub-image"
              src={GCI_LOGO}
              alt="GCI Logo"
            />
            <p>GCI</p>
          </Link>
          <Link
            to="https://github.com/Cloud-CV/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cv-home-gihub-image"
              src={GITHUB_IMAGE}
              alt="GitHub Logo"
            />
            <p>GitHub</p>
          </Link>
          <Link
            to="https://gitter.im/Cloud-CV/Lobby"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cv-home-gihub-image"
              src={GITTER_IMAGE}
              alt="Gitter Logo"
            />
            <p>Gitter</p>
          </Link>
        </div>
      </div>
      <HomeContactUs />
    </div>
  );
};

export default HomeBody;
