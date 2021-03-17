const { webpackConfig, merge } = require("@rails/webpacker");
const path = require("path");

const customConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },

  resolve: {
    alias: {
      root: path.resolve("./frontend"),
    },
  },
};

module.exports = merge(webpackConfig, customConfig);
