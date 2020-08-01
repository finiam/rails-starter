process.env.NODE_ENV = process.env.NODE_ENV || "development";

const DotenvPlugin = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const environment = require("./environment");

environment.plugins.prepend("Dotenv", new DotenvPlugin());
environment.plugins.prepend("BundleAnalyzer", new BundleAnalyzerPlugin());

module.exports = environment.toWebpackConfig();
