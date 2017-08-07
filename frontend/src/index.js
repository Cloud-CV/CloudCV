/*eslint-disable  import/default */

import "babel-polyfill";
import Raven from "raven-js";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import style from "./styles/main.scss";

import App from "./components/App";
import configureStore from "./store/configureStore";

Raven.config(
  "https://6d5ebe81f8fb40c0b967b6ff91c80cdb@sentry.io/178146"
).install();

const store = configureStore();
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
