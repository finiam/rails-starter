module.exports = {
  test: /\.js|.jsx(\.erb)?$/,
  exclude: [/node_modules/, /.+\.stories\.js$/, /.+\.test\.js/],
  loader: "babel-loader"
};
