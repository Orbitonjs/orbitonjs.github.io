const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs')
const { pages } = require("./project.config")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const codeScreenshot = require('remark-code-screenshot').default
//const remarkGfm = require('remark-gfm')
let remarkGfm;
let remarkToc;
import('remark-toc').then((modu) => {
  remarkToc = modu
})
import('remark-gfm').then((modu) => {
  remarkGfm = modu
})
const renderer = `
import Orbiton from 'orbiton';
import jsx from 'orbiton/jsx-runtime';

`

const entry = {}

pages.map((page) => {
  entry[page] = `./src/pages/${page}.js`;
})

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  mode: "production",
  devServer: {
    static: './static',
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: ['babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              renderer,
              remarkPlugins: [
                codeScreenshot,
                remarkToc,
                remarkGfm,
              ]
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                auto: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                namedExport: true,
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "static/icons", to: "icons" },
      ],
    }),
    /* new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
        ],
      },
    }), */
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/template.html`,
          filename: `${page}.html`,
          chunks: [page],
          favicon: './static/favicon.png'
        })
    ),
  ),
};
