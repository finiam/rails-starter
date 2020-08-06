const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    // We only extract CSS during production,
    // for snapshoting purposes.
    process.env.RAILS_ENV === "production"
      ? MiniCssExtractPlugin.loader
      : "style-loader",
    {
      loader: "css-loader",
      options: {
        modules: {
          mode: "local",
          localIdentName: "[hash:8]_[folder]_[name]_[local]",
        },
      },
    },
    "postcss-loader",
  ],
};
