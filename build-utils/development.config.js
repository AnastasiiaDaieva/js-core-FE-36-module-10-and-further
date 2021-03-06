const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    open: true,
    compress: true,
    port: 4141,
    noInfo: true,
    quiet: true,
    clientLogLevel: "warning",
    stats: "errors-only",
  },
});
