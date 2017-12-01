import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Preloader from "../../common/Preloader";

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
                    <div className="cv-home-demos-card-image">
                      <img src={demo.image} />
                    </div>
                    <div className="cv-home-demos-links">
                      <Link to={demo.github_url} target="_blank">
                        <Button extraClass="cv-button-small">
                          Github
                        </Button>
                      </Link>
                      <Link to={demo.documentation_url} target="_blank">
                        <Button
                          themeClass="cv-button-dark"
                          extraClass="cv-button-small"
                        >
                          Documentation
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

export default HomeDemos;