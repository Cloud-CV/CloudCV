/* eslint-disable no-console */

import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import bodyParser from "body-parser";
import colors from "colors";

const appConfig = require("../config/config");
const port = appConfig.CLIENT_PORT || 8080;
const clientIP = appConfig.CLIENT_IP || "0.0.0.0";
const app = express();
const compiler = webpack(config);

const http = require("http").Server(app);

app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb" }));

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../src/index.html"));
});

http.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`visit http://${clientIP}:${port}`.yellow);
  }
});
