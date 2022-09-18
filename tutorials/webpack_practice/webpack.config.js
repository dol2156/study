const path = require("path");

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: {
    index: "./src/index.js",
    sub_page : "./src/sub_page"
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
};
