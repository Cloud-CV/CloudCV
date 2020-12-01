import React from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";

const HomeAboutUs = props => {
  const ABOUT_US_TITLE = "WHO ARE WE";
  const ABOUT_US_DESC =
    "CloudCV is a young open source cloud platform started in 2013 by students and faculty from Machine Learning and Perception Lab at Virginia Tech (now at Georgia Tech) with the aim to make AI research more reproducible. At CloudCV, we are building tools that enable researchers to build, compare and share state-of-the-art algorithms. We believe that one shouldn't have to be an AI expert to have access to cutting edge vision algorithms. Likewise, researchers shouldn't have to worry about building a service around their deep learning models to showcase and share it with others.";
  return (
    <div className="cv-home-about-us cv-container" id="about">
      <div className="cv-home-card-container">
        <Card extraClass="cv-about-us-card" themeClass="cv-card-deep-light">
          <h1 className="cv-about-us-card-heading">
            <span className="cv-about-us-heading-line">{ABOUT_US_TITLE}</span>
            &nbsp; &nbsp;
            <span className="cv-question-mark">?</span>
          </h1>
          <p className="cv-about-us-card-desc">{ABOUT_US_DESC}</p>
        </Card>
      </div>
    </div>
  );
};

export default HomeAboutUs;
