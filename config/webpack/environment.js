const { environment } = require("@rails/webpacker");
const { join } = require("path");
const { sync } = require("glob");
const path = require("path");

const loadersDir = join(__dirname, "loaders");
const sharedConfig = {
  stats: {
    children: false
  },

  module: {
    // import loaders from our loaders folder
    rules: sync(join(loadersDir, "*.js")).map(loader => require(loader))
  },

  resolve: {
    alias: {
      root: path.resolve("./frontend")
    }
  },

  devServer: {
    clientLogLevel: "info"
  }
};

// delete existing loaders from @webpacker/rails config
environment.loaders = { values: () => [] };
environment.config.merge(sharedConfig);

module.exports = environment;
