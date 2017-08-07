import React from "react";
import { PropTypes } from "prop-types";

class DemoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: this.props.demo,
      height: "auto"
    };
  }

  render() {
    return (
      <main className="cv-project-demo-container">
        <iframe
          className="cv-project-demo-iframe"
          src={this.state.demo.demo_url}
          height={this.state.height}
        />
      </main>
    );
  }
}

DemoContainer.propTypes = {
  demo: PropTypes.object.isRequired
};

export default DemoContainer;
