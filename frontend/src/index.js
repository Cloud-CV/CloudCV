/*eslint-disable  import/default */

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import App from "./components/App";
import configureStore from "./store/configureStore";

const store = configureStore();
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
);
