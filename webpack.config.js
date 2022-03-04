const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: ["@babel/polyfill", "./src/scripts/index.js"],
  resolve: {
    extensions: [".js", ".json"]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].[hash].js"
  },
  plugins: [
    new HtmlPlugin({
      template: "src/templates/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCSSAssetsPlugin({}),
    new CopyWebpackPlugin([
      {
        from: "public/*",
        to: ""
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.(png|jpg|ico|svg|gif|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name]-[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 8000,
    open: true
  }
};

module.exports = config;
