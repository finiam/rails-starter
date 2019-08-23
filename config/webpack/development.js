process.env.NODE_ENV = process.env.NODE_ENV || "development";

const DotenvPlugin = require("dotenv-webpack");
const environment = require("./environment");

environment.plugins.prepend("Dotenv", new DotenvPlugin());

module.exports = environment.toWebpackConfig();
