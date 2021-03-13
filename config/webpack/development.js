process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { merge } = require("@rails/webpacker");
const DotenvPlugin = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpackConfig = require("./base");

const customConfig = {
  plugins: [
    new DotenvPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockPort: 3035,
      },
    }),
  ],
};

module.exports = merge(webpackConfig, customConfig);
