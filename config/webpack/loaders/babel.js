module.exports = {
  test: /\.js|.jsx(\.erb)?$/,
  exclude:
    process.env.NODE_ENV === "development"
      ? // watch everything except node_modules
        [/node_modules/]
      : // exclude stories and tests from other environments
        [/node_modules/, /.+\.stories\.js$/, /.+\.test\.js/],
  loader: "babel-loader"
};
