import React from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";
import Button from "../../common/Button";

const HomeSponsors = props => {
  const SUPPORT_TITLE = "OUR SUPPORT";
  const SUPPORTERS = [
    {
      image: require("../../../images/supporter_virginia.png"),
      desc: "This is a project being developed at the Machine Learning and Perception Lab, led by Prof. Dhruv Batra"
    },
    {
      image: require("../../../images/supporter_graph_lab.png"),
      desc: "CloudCV uses GraphLab for implementing distributed computer vision algorithms."
    },
    {
      image: require("../../../images/supporter_opencv.jpg"),
      desc: "Some of the functionality is derived from using OpenCV with Graphlab SDK."
    }
  ];
  const SPONSOR_TITLE = "SPONSORS";
  const SPONSORS = [
    require("../../../images/supporter_virginia.png"),
    require("../../../images/supporter_aws.png"),
    require("../../../images/supporter_azure.png"),
    require("../../../images/supporter_nvidia.png")
  ];
  return (
    <div className="cv-container">
      <h1 className="cv-home-showcase-heading">
        {SUPPORT_TITLE}
      </h1>
      <div className="cv-home-about-us">
        {SUPPORTERS.map((company, index) => {
          return (
            <Card key={index} extraClass="cv-home-sponsor-card">
              <img src={company.image} className="cv-home-sponsor-card-image" />
              <span className="cv-home-sponsor-card-desc">{company.desc}</span>
            </Card>
          );
        })}
      </div>
      <div className="right-align">
        <h1 className="cv-home-showcase-heading">
          {SPONSOR_TITLE}
        </h1>
      </div>
      <div className="cv-home-sponsors">
        {SPONSORS.map((company, index) => {
          return (
            <img key={index} src={company} className="cv-home-spon-card" />
          );
        })}
      </div>
    </div>
  );
};

export default HomeSponsors;
