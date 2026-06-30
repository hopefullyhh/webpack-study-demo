const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = function (env, argv) {
  return merge(commonConfig(env, argv), {
    module: {
      rules: [
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          test: /\.p(ost)?css$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          test: /\.scss$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
          ],
        },
        {
          test: /\.sass$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                    sassOptions: {
                      indentedSyntax: true,
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                    sassOptions: {
                      indentedSyntax: true,
                    },
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                    sassOptions: {
                      indentedSyntax: true,
                    },
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                    sourceMap: false,
                    sassOptions: {
                      indentedSyntax: true,
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          test: /\.less$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "less-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "less-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "less-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "less-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
          ],
        },
        {
          test: /\.styl(us)?$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,

                    modules: {
                      localIdentName: "[name]_[local]_[hash:base64:5]",
                      auto: () => true,
                    },
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "stylus-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\?vue/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "stylus-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              resourceQuery: /\.module\.\w+$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "stylus-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
            {
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: "/",
                  },
                },
                {
                  loader: "css-loader",
                  options: {
                    sourceMap: false,
                    importLoaders: 2,
                  },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap: false,
                    postcssOptions: {
                      plugins: ["autoprefixer"],
                    },
                  },
                },
                {
                  loader: "stylus-loader",
                  options: {
                    sourceMap: false,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    ],
    mode: "production",
  });
};
