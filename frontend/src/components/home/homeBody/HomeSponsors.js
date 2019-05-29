import React from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";

const HomeSponsors = props => {
  const SUPPORT_TITLE = "WE FAVOR OPEN SOURCE";
  const SUPPORT_DESC =
    "We use a lot of open source softwares as the basis for our work. Some of them are:";
  const SUPPORTERS = [
    {
      title: "Django",
      image: require("../../../images/django_logo.svg"),
      link: "https://www.djangoproject.com/"
    },
    {
      title: "Python",
      image: require("../../../images/python_logo.png"),
      link: "https://www.python.org/"
    },
    {
      title: "React",
      image: require("../../../images/reactjs_logo.svg"),
      link: "https://facebook.github.io/react/"
    },
    {
      title: "Angular",
      image: require("../../../images/angular_logo.svg"),
      link: "https://angular.io/"
    },
    {
      title: "Pytorch",
      image: require("../../../images/pytorch_logo.png"),
      link: "http://pytorch.org/"
    },
    {
      title: "Keras",
      image: require("../../../images/keras_logo.jpg"),
      link: "https://keras.io/"
    }
  ];
  const SPONSOR_TITLE = "SPONSORS";
  const SPONSORS = [
    require("../../../images/supporter_gt.png"),
    require("../../../images/supporter_virginia.png"),
    require("../../../images/supporter_aws.png"),
    require("../../../images/supporter_azure.png"),
    require("../../../images/supporter_nvidia.png")
  ];
  return (
    <div className="cv-container">
      <h1 className="cv-home-showcase-heading">{SUPPORT_TITLE}</h1>
      <br />
      <br />
      <p>{SUPPORT_DESC}</p>
      <div className="cv-home-showcase-content">
        {SUPPORTERS.map((company, index) => {
          return (
            <Card key={index} extraClass="cv-home-sponsor-card">
              <Link to={company.link} target="_blank">
                <img
                  src={company.image}
                  className="cv-home-sponsor-card-image"
                  alt={company.title}
                  title={company.title}
                />
                <p className="cv-home-sponsor-card-desc">{company.title}</p>
              </Link>
            </Card>
          );
        })}
      </div>
      <div className="right-align cv-home-sponsors-container">
        <h1 className="cv-home-showcase-heading">{SPONSOR_TITLE}</h1>
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
