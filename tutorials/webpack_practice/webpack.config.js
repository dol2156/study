const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: {
    index: "./src/index.js",
    sub_page: "./src/sub_page",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // string (기본값)
    filename: "[name]_bundle.js", // string (기본값)
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html",
      chunks:['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/sub_page.html',
      filename: "sub_page.html",
      chunks:['sub_page'],
    }),
  ],
};
