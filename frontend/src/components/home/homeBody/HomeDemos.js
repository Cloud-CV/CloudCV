import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Preloader from "../../common/Preloader";
import Carousel from "nuka-carousel";
import CarouselDecorators
  from "../../common/carouselDecorators/CarouselDecorators";

class HomeDemos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      demos: []
    };
    this.fetchDemos = this.fetchDemos.bind(this);
    this.fetchDemos();
  }

  fetchDemos() {
    axios
      .get(`${process.env.AJAX_ROOT}/api/demos/demos/`)
      .then(response => {
        this.setState({ demos: response.data, isFetching: false });
      })
      .catch(error => {
        //Redirect
      });
  }

  makeDescription(description) {
    const limit = 80;
    if (description.length > 80)
      return description.substring(0, limit).concat("...");
    return description;
  }

  renderCards(demos, carousel) {
    return demos.map((demo, index) => {
      return (
        <Card
          key={index}
          extraClass={
            carousel ? "cv-home-demos-carousel-card" : "cv-home-demos-card"
          }
        >
          <div className="cv-home-demos-card-title">
            {demo.title}
          </div>
          <div className="cv-home-demos-card-description">
            {this.makeDescription(demo.description)}
          </div>
          <div
            className={
              carousel
                ? "cv-home-demos-card-links-carousel"
                : "cv-home-demos-card-links"
            }
          >
            <Link to={demo.source_code_url} target="_blank">
              <Button className="cv-home-demos-source">
                Source code
              </Button>
            </Link>
            <Link to={`/projects/${demo.permalink}`} target="_blank">
              <Button themeClass="cv-button-dark" extraClass="cv-button-small">
                Demo
              </Button>
            </Link>
          </div>
        </Card>
      );
    });
  }

  render() {
    const DEMOS_TITLE = "DEMOS";
    const CAROUSEL = this.state.demos.length > 2;
    return (
      <div className="cv-home-demos cv-container">
        {!this.state.isFetching &&
          <div>
            <h1 className="cv-home-demos-heading">
              {DEMOS_TITLE}
            </h1>
            {CAROUSEL
              ? <Carousel decorators={CarouselDecorators} slidesToShow={1}>
                  {this.renderCards(this.state.demos, CAROUSEL)}
                </Carousel>
              : <div className="cv-home-demos-content">
                  {this.renderCards(this.state.demos)}
                </div>}
          </div>}
      </div>
    );
  }
}

export default HomeDemos;
