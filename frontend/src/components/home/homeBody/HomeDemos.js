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

  render() {
    const DEMOS_TITLE = "DEMOS";
    if (this.state.demos.length > 2) {
      return (
        <div className="cv-home-demos cv-container">
          <div>
            <h1 className="cv-home-demos-heading">
              {DEMOS_TITLE}
            </h1>
            <Carousel slideWidth={0.5} decorators={CarouselDecorators}>
              {this.state.demos.map((demo, index) => {
                return (
                  <div key={index} className="cv-home-demos-card-wrapper">
                    <Card className="cv-home-demos-card" style="height: 300px;">
                      <div className="cv-home-demos-card-title">
                        {demo.title}
                      </div>
                      <div className="cv-home-demos-card-description">
                        {demo.description}
                      </div>
                      <div className="cv-home-demos-links">
                        <Link to={demo.source_code_url} target="_blank">
                          <Button extraClass="cv-button-small">
                            Source code
                          </Button>
                        </Link>
                        <Link to={demo.demo_url} target="_blank">
                          <Button
                            themeClass="cv-button-dark"
                            extraClass="cv-button-small"
                          >
                            Website
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cv-home-demos cv-container">
          {!this.state.isFetching &&
            <div>
              <h1 className="cv-home-demos-heading">
                {DEMOS_TITLE}
              </h1>
              <div className="cv-home-demos-content">
                {this.state.demos.map((demo, index) => {
                  return (
                    <Card key={index} extraClass="cv-home-demos-card">
                      <div className="cv-home-demos-card-title">
                        {demo.title}
                      </div>
                      <div className="cv-home-demos-card-description">
                        {demo.description}
                      </div>
                      <div className="cv-home-demos-links">
                        <Link to={demo.source_code_url} target="_blank">
                          <Button extraClass="cv-button-small">
                            Source code
                          </Button>
                        </Link>
                        <Link to={demo.demo_url} target="_blank">
                          <Button
                            themeClass="cv-button-dark"
                            extraClass="cv-button-small"
                          >
                            Website
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>}
        </div>
      );
    }
  }
}

export default HomeDemos;
