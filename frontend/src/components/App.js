import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link, Route, Switch, Miss } from "react-router-dom";
import { connect } from "react-redux";
import io from "socket.io-client";

import HomePageComponent from "./home/HomePage";
import PageNotFoundHandler from "./PageNotFoundHandler";

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
      <main>
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route component={PageNotFoundHandler} />
        </Switch>
      </main>
    );
  }
}

App.childContextTypes = {
  socket: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(App);
