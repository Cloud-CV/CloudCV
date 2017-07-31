import React from "react";
import { PropTypes } from "prop-types";
import { Link, Route, Switch, Miss } from "react-router-dom";
import io from "socket.io-client";
import style from "../styles/main.scss";
import HomePageComponent from "./home";
import TeamPageComponent from "./team";
import ProjectPageComponent from "./projects";
import PageNotFoundHandler from "./PageNotFoundHandler";
import Navbar from "./navbar";

class App extends React.Component {
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
      <div className="cv-root-container">
        <Navbar />
        <main className="cv-main">
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route path="/news" component={HomePageComponent} />
            <Route path="/team" component={TeamPageComponent} />
            <Route path="/projects" component={ProjectPageComponent} />
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
