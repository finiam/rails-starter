const { join } = require("path");
const { sync } = require("glob");
const path = require("path");

const loadersDir = join(__dirname, "../config/webpack/loaders");

module.exports = {
  module: {
    // import loaders from our loaders folder
    // eslint-disable-next-line
    rules: sync(join(loadersDir, "*.js")).map((loader) => require(loader)),
  },

  resolve: {
    alias: {
      root: path.resolve("./frontend"),
    },
  },
};
