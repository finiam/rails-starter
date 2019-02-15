const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.css$/,
  use: [
    process.env.NODE_ENV === "development" ||
    process.env.EXTRACT_CSS === "false"
      ? "style-loader"
      : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: true,
        localIdentName: "[folder]__[local]__[hash]"
      }
    },
    "postcss-loader"
  ]
};
