module.exports = {
  test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2|pdf|svg)$/i,
  exclude: /[a-zA-Z]-locator\.svg/,
  use: [
    {
      loader: "file-loader",
      options: {
        name:
          process.env.NODE_ENV === "production"
            ? "[name]-[hash].[ext]"
            : "[name].[ext]",
      },
    },
  ],
};
