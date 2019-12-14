import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProjectSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const DEMOS = this.props.demos;
    const PROJECTS = [
      {
        link: "https://evalai.cloudcv.org/",
        name: "Eval AI"
      },
      {
        link: "http://origami.cloudcv.org/",
        name: "Origami"
      },
      {
        link: "http://fabrik.cloudcv.org/",
        name: "Fabrik"
      }
    ];
    return (
      <aside className="cv-project-sidebar">
        <section className="cv-project-sections">
          <h6 className="cv-project-list-heading">Demos</h6>
          <ul className="cv-project-list">
            {DEMOS.map((project, index) => {
              let activeClass = project.active ? "active" : "";
              return (
                <li
                  key={index}
                  className={`cv-project-list-item ${activeClass}`}
                >
                  <Link to={project.link}>{project.name}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="cv-project-sections">
          <h6 className="cv-project-list-heading">Projects</h6>
          <ul className="cv-project-list">
            {PROJECTS.map((project, index) => {
              return (
                <li key={index} className="cv-project-list-item">
                  <Link to={project.link} target="_blank">
                    {project.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
    );
  }
}

ProjectSidebar.propTypes = {
  demos: PropTypes.array
};

export default ProjectSidebar;
