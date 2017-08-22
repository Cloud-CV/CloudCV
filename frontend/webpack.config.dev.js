import webpack from "webpack";
import path from "path";

const GLOBALS = {
  "process.env.AJAX_ROOT": JSON.stringify(
    process.env.AJAX_ROOT || "http://localhost:8000"
  )
};

export default {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "eventsource-polyfill",
    "webpack-hot-middleware/client?reload=true",
    "./src/index"
  ],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
      {
        test: /(demo.scss)$/,
        use: ["to-string-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /(\.scss)$/,
        exclude: /(demo.scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /(\.less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "base64-font-loader"
      },
      { test: /\.png$/, loader: "url-loader?limit=8192&mimetype=image/png" },
      { test: /\.jpg$/, loader: "url-loader?limit=8192&mimetype=image/jpg" }
    ]
  }
};
