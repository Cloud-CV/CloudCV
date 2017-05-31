import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link, Route, Switch, Miss } from "react-router-dom";
import io from "socket.io-client";
import style from "../styles/main.scss";
import HomePageComponent from "./home";
import PageNotFoundHandler from "./PageNotFoundHandler";
import Navbar from "./navbar";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.socket = io();
    this.socket.on("connect", () => {
      this.socket.emit("hello");
    });
  }

  getChildContext() {
    return {
      socket: this.socket
    };
  }

  componentWillMount() {
    this.socket.on("world", data => {});
  }

  render() {
    return (
      <div className="cv-container">
        <Navbar />
        <main className="cv-main">
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route component={PageNotFoundHandler} />
          </Switch>
        </main>
      </div>
    );
  }
}

App.childContextTypes = {
  socket: PropTypes.object.isRequired
};

export default App;
