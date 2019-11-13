const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    // We only extract CSS during testing,
    // for snapshoting purposes.
    process.env.RAILS_ENV === "test"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          mode: "local",
          localIdentName: "[hash:8]_[folder]_[name]_[local]"
        }
      }
    },
    "postcss-loader"
  ]
};
