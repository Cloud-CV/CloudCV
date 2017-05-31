import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

const HomeBody = props => {
  return (
    <div className="cv-home-body">
      <div className="cv-home-card-container">
        <Card extraClass="cv-about-us-card" themeClass="cv-card-light">
          <h1 className="cv-about-us-card-heading">
            <span className="cv-about-us-heading-line">WHO WE ARE</span>
            &nbsp; &nbsp;
            <span className="cv-question-mark">?</span>
          </h1>
          <p className="cv-about-us-card-desc">
            We are witnessing a proliferation of massive visual data. Unfortunately scaling existing computer vision algorithms to large datasets leaves researchers repeatedly solving the same algorithmic, logistical, and infrastructural problems. Our goal is to democratize computer vision; one should not have to be a computer vision, big data and distributed computing expert to have access to state-of-the-art distributed computer vision algorithms. We present CloudCV, a comprehensive system to provide access to state-of-the-art distributed computer vision algorithms as a cloud service through a Web Interface and APIs.
          </p>
        </Card>
      </div>
      <div className="cv-home-card-container cv-arxiv-paper-card-container">
        <Card extraClass="cv-arxiv-paper-card" themeClass="cv-card-dark">
          <div className="cv-arxiv-paper-image-container">
            <Link to="http://arxiv.org/abs/1506.04130" target="_blank">
              <img
                className="cv-arxiv-paper-image"
                src={require("../../images/arxiv_paper.jpg")}
              />
            </Link>
          </div>
          <h1 className="cv-arxiv-paper-heading">
            <Link to="http://arxiv.org/abs/1506.04130" target="_blank">
              Arxiv Paper
            </Link>
          </h1>
          <p className="cv-arxiv-paper-desc">
            {"@ARTICLE{CloudCV,"}<br />
            {
              "author = {Harsh Agrawal and Clint Solomon Mathialagan and Yash Goyal and Neelima Chavali and Prakriti Banik and Akrit Mohapatra and Ahmed Osman and Dhruv Batra},"
            }
            <br />
            {
              'title = "{CloudCV: Large Scale Distributed Computer Vision as a Cloud Service",'
            }
            <br />
            {"journal = {arXiv preprint arXiv:1506.04130},"}<br />
            {"year = {2015},"}<br />
            {"}"}<br />
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HomeBody;
