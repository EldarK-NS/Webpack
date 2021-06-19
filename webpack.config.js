const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const {}=require('css-loader')

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    analytics: "./analytics.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};
// plugins - для соединения скриптов
// loaders-для встривания расширений не читаемых по дефолту webpack(поддержка различных типов файлов)
// output- указывается правило создания имени файла и место создания папки dist
// resolve : extensions- указывается какие расширения webpack должен понимать по default,(т.е. при импортах можно не указывать расширенияб как в react; alias-помогает оптимизировать относительные  пути при импортах, относительные пути сокращаются до абсолютных, пример : import Name from '../../models/Name' => import Name from '@models/Name'
//optimization- при использовании сторонних билитеков и фреймов (допустим jquery...) для самой библиотеки формируется единный файл-скрипт (vendor) который  раздается на все файлы где используется эта библиотека и таким образом остальные файлы-скрипты не увеличиваются за счет сторонних библиотек
