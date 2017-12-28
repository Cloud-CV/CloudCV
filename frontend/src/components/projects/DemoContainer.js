import React from "react";
import { PropTypes } from "prop-types";
import styles from "../../styles/demo.scss";
import axios from "axios";
const AJAX_ROOT = process.env.AJAX_ROOT;
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../common/Button";

class DemoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: this.props.demo,
      height: "auto",
      loading: this.props.demo.from_origami
    };
    this.receiveMessage = this.receiveMessage.bind(this);
    this.sendStyleSheet = this.sendStyleSheet.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.saveOutput = this.saveOutput.bind(this);
    this.sendBrokenDemo = this.sendBrokenDemo.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.log = -1;
    window.addEventListener("message", this.receiveMessage, false);
    this.setTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.demo.demo_url !== this.state.demo.demo_url) {
      this.setState({
        demo: nextProps.demo,
        loading: nextProps.demo.from_origami
      });
      this.setTimer();
    }
  }

  saveInput(data) {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof Blob) formData.set(key, value, key);
      else formData.set(key, value);
    });
    formData.set("log_type", "Submission");
    axios({
      method: "post",
      url: `${process.env.AJAX_ROOT}/api/logs/${this.state.demo.permalink}/add/`,
      data: formData
    })
      .then(response => {
        if (response.status === 200) this.log = response.data.success.id;
      })
      .catch(error => {});
  }

  saveOutput(formData) {
    if (this.log !== -1)
      axios({
        method: "post",
        url: `${process.env.AJAX_ROOT}/api/logs/${this.log}/output/`,
        data: formData
      })
        .then(response => {
          if (response.status === 200) this.log = -1;
        })
        .catch(error => {});
  }

  sendStyleSheet() {
    let iframeWindow = document.getElementsByTagName("iframe")[0].contentWindow;
    let stylesheet = {
      action: "STYLESHEET_SEND",
      styles: styles.toString()
    };
    iframeWindow.postMessage(stylesheet, "*");
  }

  receiveMessage(message) {
    switch (message.data.action) {
      case "DEMO_ONLOAD":
        this.sendStyleSheet();
        this.setState({ loading: false });
        break;
      case "INPUT_SUBMITTED":
        this.saveInput(message.data.payload);
        break;
      case "OUTPUT_SUBMITTED":
        this.saveOutput(message.data.payload);
        break;
    }
  }

  sendBrokenDemo() {
    let formData = new FormData();
    formData.set("log_type", "Break");
    axios({
      method: "post",
      url: `${process.env.AJAX_ROOT}/api/logs/${this.state.demo.permalink}/add/`,
      data: formData
    })
      .then(response => {})
      .catch(error => {});
  }

  setTimer() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 10000);
  }

  render() {
    return (
      <main className="cv-project-demo-container">
        <Tabs>
          <TabList>
            <Tab>Demo</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel>
            {this.state.loading && <div id="loader" />}
            <iframe
              className="cv-project-demo-iframe"
              src={this.state.demo.demo_url}
              height={this.state.height}
              visibility={this.state.loading ? "hidden" : "visible"}
            />
          </TabPanel>
          <TabPanel>
            <center>
              <h3>{this.state.demo.title}</h3>
            </center>
            <div className="about-text">
              {this.state.demo.description
                ? this.state.demo.description
                : "Sorry, no description for the demo is available."}
            </div>
            <div className="about-text">
              <a href={this.state.demo.source_code_url}>
                {this.state.demo.source_code_url ? "Link to source code" : ""}
              </a>
            </div>
            <div className="about-text">
              {this.state.demo.paper_description}
            </div>
            <div className="about-text">
              <a href={this.state.demo.paper_url}>
                {this.state.demo.paper_url ? "Link to Paper" : ""}
              </a>
            </div>
          </TabPanel>
        </Tabs>
        <Button
          extraClass="cv-project-demo-not-working"
          onClick={this.sendBrokenDemo}
        >
          Demo not working?
        </Button>
      </main>
    );
  }
}

DemoContainer.propTypes = {
  demo: PropTypes.object.isRequired
};

export default DemoContainer;
