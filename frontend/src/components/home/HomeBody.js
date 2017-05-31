import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

const HomeBody = props => {
  const ABOUT_US_TITLE = "WHO WE ARE";
  const ABOUT_US_DESC =
    "We are witnessing a proliferation of massive visual data. Unfortunately scaling existing computer vision algorithms to large datasets leaves researchers repeatedly solving the same algorithmic, logistical, and infrastructural problems. Our goal is to democratize computer vision; one should not have to be a computer vision, big data and distributed computing expert to have access to state-of-the-art distributed computer vision algorithms. We present CloudCV, a comprehensive system to provide access to state-of-the-art distributed computer vision algorithms as a cloud service through a Web Interface and APIs.";
  const PAPER_IMAGE = require("../../images/arxiv_paper.jpg");
  const PAPER_TITLE = "Arxiv Paper";
  const PAPER_DESC = [
    "@ARTICLE{CloudCV,",
    "author = {Harsh Agrawal and Clint Solomon Mathialagan and Yash Goyal and Neelima Chavali and Prakriti Banik and Akrit Mohapatra and Ahmed Osman and Dhruv Batra},",
    'title = "{CloudCV: Large Scale Distributed Computer Vision as a Cloud Service",',
    "journal = {arXiv preprint arXiv:1506.04130},",
    "year = {2015},",
    "}"
  ];
  return (
    <div className="cv-home-body">
      <div className="cv-home-card-container">
        <Card extraClass="cv-about-us-card" themeClass="cv-card-light">
          <h1 className="cv-about-us-card-heading">
            <span className="cv-about-us-heading-line">{ABOUT_US_TITLE}</span>
            &nbsp; &nbsp;
            <span className="cv-question-mark">?</span>
          </h1>
          <p className="cv-about-us-card-desc">
            {ABOUT_US_DESC}
          </p>
        </Card>
      </div>
      <div className="cv-home-card-container cv-arxiv-paper-card-container">
        <Card extraClass="cv-arxiv-paper-card" themeClass="cv-card-dark">
          <div className="cv-arxiv-paper-image-container">
            <Link to="http://arxiv.org/abs/1506.04130" target="_blank">
              <img className="cv-arxiv-paper-image" src={PAPER_IMAGE} />
            </Link>
          </div>
          <h1 className="cv-arxiv-paper-heading">
            <Link to="http://arxiv.org/abs/1506.04130" target="_blank">
              {PAPER_TITLE}
            </Link>
          </h1>
          <p className="cv-arxiv-paper-desc">
            {PAPER_DESC.map((string, index) => {
              return <span key={index}>{string}<br /></span>;
            })}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomeBody;
