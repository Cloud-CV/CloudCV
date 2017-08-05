import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Preloader from "../../common/Preloader";

class HomeShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      projects: []
    };
    this.fetchProjects = this.fetchProjects.bind(this);
    this.fetchProjects();
  }

  fetchProjects() {
    axios
      .get(`${process.env.AJAX_ROOT}/api/demos/projects/`)
      .then(response => {
        this.setState({ projects: response.data, isFetching: false });
      })
      .catch(error => {
        //Redirect
      });
  }

  render() {
    const SHOWCASE_TITLE = "PROJECTS";
    return (
      <div className="cv-home-showcase cv-container">
        {!this.state.isFetching &&
          <div>
            <h1 className="cv-home-showcase-heading">
              {SHOWCASE_TITLE}
            </h1>
            <div className="cv-home-showcase-content">
              {this.state.projects.map((project, index) => {
                return (
                  <Card key={index} extraClass="cv-home-showcase-card">
                    <div className="cv-home-showcase-card-image">
                      <img src={project.image} />
                    </div>
                    <div className="cv-home-showcase-links">
                      <Link to={project.github_url} target="_blank">
                        <Button extraClass="cv-button-small">
                          Github
                        </Button>
                      </Link>
                      <Link to={project.documentation_url} target="_blank">
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

export default HomeShowcase;
