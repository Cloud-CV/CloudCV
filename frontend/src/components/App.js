import React from "react";
import { PropTypes } from "prop-types";
import { Link, Route, Switch, Miss } from "react-router-dom";
import HomePageComponent from "./home";
import TeamPageComponent from "./team";
import ProjectPageComponent from "./projects";
import AnalyticsComponent from "./analytics";
import PageNotFoundHandler from "./PageNotFoundHandler";
import Navbar from "./navbar";

const App = props => {
  return (
    <div className="cv-root-container">
      <Navbar />
      <main className="cv-main">
        <Route component={AnalyticsComponent} />
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
};

export default App;
