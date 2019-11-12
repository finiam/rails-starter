/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { environment } = require("@rails/webpacker");
const { join } = require("path");
const { sync } = require("glob");
const path = require("path");

const loadersDir = join(__dirname, "loaders");
const notServerRendering = name => name !== "server_rendering";
const sharedConfig = {
  stats: {
    children: false
  },

  module: {
    // Import loaders from our loaders folder
    rules: sync(join(loadersDir, "*.js")).map(loader => require(loader))
  },

  // Never split the chunks from the SSR pack
  // we need that whole
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks(chunk) {
            return notServerRendering(chunk.name);
          },
          name: "vendors",
          priority: 1
        }
      }
    }
  },

  resolve: {
    alias: {
      root: path.resolve("./frontend"),
      "react-dom": "@hot-loader/react-dom"
    }
  },

  devServer: {
    clientLogLevel: "info"
  },

  // Fix for SSR when using async components
  output: {
    globalObject: 'this'
  }
};

/**
 * Delete all the loaders that come by default with Webpacker
 * replacing them with our own
 */
environment.loaders = { values: () => [] };

environment.config.merge(sharedConfig);

module.exports = environment;
