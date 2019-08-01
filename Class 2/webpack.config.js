var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js"
  },
  devServer: {
    port: 8000,
    contentBase: "./public"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env", "react"] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: 'index.css',
    }),
  ]
};
