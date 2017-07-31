import React from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import Preloader from "../common/Preloader";
import Sidebar from "./Sidebar";
const AJAX_ROOT = process.env.AJAX_ROOT;

class Projects extends React.Component {
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
      .get(`http://${process.env.AJAX_ROOT}/api/demos/all/`)
      .then(response => {
        this.setState({ isFetching: false, demos: response.data });
      })
      .catch(error => {});
  }

  render() {
    if (this.state.isFetching) return <Preloader />;
    else
      return (
        <section className="cv-project-section">
          <Sidebar />
        </section>
      );
  }
}

export default Projects;
