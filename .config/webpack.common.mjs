import { resolve, dirname, relative } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
import fs from 'fs';
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import { getPages } from './utils.mjs'

const renderer = `
import Orbiton from 'orbiton';
import jsx from 'orbiton/jsx-runtime';

`

const entry = {}
const pages = getPages('./src/pages')
const HTMLPages = []
pages.map((page) => {
  const pageNameWithExt = relative("./src/pages", page)
  const pageName = pageNameWithExt.slice(0, pageNameWithExt.length - 3)
  HTMLPages.push(pageName)
  entry[pageName] = `./${page}`;
})


export const config = {
  entry,
  output: {
    filename: '[name].js',
    path: resolve(dirname('.'), 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(md|mdx)?$/,
        use: ['babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              renderer,
              remarkPlugins: [
                remarkToc,
                remarkGfm,
              ],
              rehypePlugins: [
                rehypeHighlight
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
        { from: "static/public", to: "" },
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
    HTMLPages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/template.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
  ),
}