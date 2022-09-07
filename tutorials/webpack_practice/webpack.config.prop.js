// npx webpack --config webpack.config.prod.js
const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
};
