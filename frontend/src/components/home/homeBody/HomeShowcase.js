import React from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";
import Button from "../../common/Button";

const HomeShowcase = props => {
  const SHOWCASE_TITLE = "TRY CLOUDCV API";
  const PYTHON = {
    image: require("../../../images/python_logo.png"),
    desc: "Download CloudCV module from PyPI(Python Package Index) and use it with your Python code",
    github: "https://github.com/Cloud-CV/py-cloudcv",
    doc: "https://github.com/Cloud-CV/py-cloudcv/wiki"
  };
  const MATLAB = {
    image: require("../../../images/matlab_logo.png"),
    desc: "Use CloudCV API with your Matlab code",
    github: "https://github.com/Cloud-CV/mat-cloudcv",
    doc: "https://github.com/Cloud-CV/mat-cloudcv/wiki"
  };
  return (
    <div className="cv-home-showcase cv-container">
      <h1 className="cv-home-showcase-heading">
        {SHOWCASE_TITLE}
        <sub>s</sub>
      </h1>
      <div className="cv-home-about-us cv-home-showcase-content">
        <Card extraClass="cv-home-showcase-card">
          <div className="cv-home-showcase-card-image">
            <img src={PYTHON.image} />
          </div>
          <div className="cv-home-showcase-card-desc">
            {PYTHON.desc}
          </div>
          <div className="cv-home-showcase-links">
            <Link to={PYTHON.github} target="_blank">
              <Button extraClass="cv-button-small">Github Repository</Button>
            </Link>
            <Link to={PYTHON.doc} target="_blank">
              <Button themeClass="cv-button-dark" extraClass="cv-button-small">
                Documentation
              </Button>
            </Link>
          </div>
        </Card>
        <Card extraClass="cv-home-showcase-card">
          <div className="cv-home-showcase-card-image">
            <img src={MATLAB.image} />
          </div>
          <div className="cv-home-showcase-card-desc">
            {MATLAB.desc}
          </div>
          <div className="cv-home-showcase-links">
            <Link to={MATLAB.github} target="_blank">
              <Button extraClass="cv-button-small">Github Repository</Button>
            </Link>
            <Link to={MATLAB.doc} target="_blank">
              <Button themeClass="cv-button-dark" extraClass="cv-button-small">
                Documentation
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeShowcase;
