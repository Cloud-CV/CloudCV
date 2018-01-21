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

  componentDidMount() {
    this.updateCarousel();
    window.addEventListener("resize", this.updateCarousel.bind(this));
  }

  componentDidUpdate() {
    this.equalizeCards();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCarousel.bind(this));
  }

  updateCarousel() {
    const SLIDES_TO_SHOW_SMALL = 1;
    const SLIDES_TO_SHOW_LARGE = 2;
    this.setState({
      slidesToShow: window.innerWidth > 800
        ? SLIDES_TO_SHOW_LARGE
        : SLIDES_TO_SHOW_SMALL
    });
  }

  equalizeCards() {
    const cards = document.getElementsByClassName(
      "cv-home-demos-carousel-card"
    );
    const list = document.getElementsByClassName("slider-list");
    const frame = document.getElementsByClassName("slider-frame");
    if (frame[0] !== undefined) {
      const cardWidth = frame[0].offsetWidth / this.state.slidesToShow;
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.height = "auto";
        cards[i].style.width = cardWidth.toString().concat("px");
      }
      let max = 0;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].offsetHeight > max) max = cards[i].offsetHeight;
      }
      max = max.toString().concat("px");
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.height = max;
      }
      frame[0].style.height = max;
      list[0].style.height = max;
    }
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
    if (description.length > limit)
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
                ? "cv-home-demos-carousel-links"
                : "cv-home-demos-card-links"
            }
          >
            <Link to={demo.source_code_url} target="_blank">
              <Button extraClass="cv-home-demos-source">
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
              ? <Carousel
                  decorators={CarouselDecorators}
                  slidesToShow={this.state.slidesToShow}
                  className="cv-home-demos-carousel"
                >
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
