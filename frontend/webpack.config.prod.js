import webpack from "webpack";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production")
};

export default {
  entry: "./src/index",
  target: "web",
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        use: ["babel-loader"]
      },
      { test: /jquery\.js$/, loader: "expose?jQuery!expose?$" },
      {
        test: /(\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /(\.less)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            },
            "less-loader"
          ]
        })
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ["file-loader"] },
      { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      { test: /\.png$/, loader: "url-loader?limit=8192&mimetype=image/png" },
      { test: /\.jpg$/, loader: "url-loader?limit=8192&mimetype=image/jpg" }
    ]
  }
};
