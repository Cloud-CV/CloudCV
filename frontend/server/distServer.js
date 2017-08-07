/* eslint-disable no-console */

import express from "express";
import path from "path";
import compression from "compression";
import bodyParser from "body-parser";

const appConfig = require("../config/config");
const port = appConfig.CLIENT_PORT || 8080;
const clientIP = appConfig.CLIENT_IP || "0.0.0.0";
const app = express();

const http = require("http").Server(app);

app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(compression());
app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

http.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`visit http://${clientIP}:${port}`);
  }
});
