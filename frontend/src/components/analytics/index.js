import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isProduction = process.env.NODE_ENV === "production";
    this.recordPageView = this.recordPageView.bind(this);
  }

  componentDidMount() {
    if (this.isProduction) this.recordPageView();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.isProduction) this.recordPageView();
  }

  recordPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return null;
  }
}

Analytics.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Analytics);
