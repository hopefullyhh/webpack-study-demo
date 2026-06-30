const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinimizerPlugin = require("minimizer-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = function (env, argv) {
  return {
    entry: {
      index: "./src/index.ts",
      print: "./src/print.ts",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        vue$: "vue/dist/vue.runtime.esm.js",
      },
      extensions: [".js", ".ts", ".vue"],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false, // disable the behaviour
          },
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                compilerOptions: {
                  whitespace: "condense", // 压缩空格
                },
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          resourceQuery: /type=style/,
          sideEffects: true, // 处理 vue style 的副作用
        },
        {
          test: /\.(svg)(\?.*)?$/,
          type: "asset/resource",
          generator: {
            filename: "img/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            filename: "img/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: "asset/resource",
          generator: {
            filename: "media/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[hash:8][ext]",
          },
        },
        {
          test: /\.m?jsx?$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                cacheCompression: false,
                cacheIdentifier: "00a7e99c",
              },
            },
          ],
          exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        },
        {
          test: /\.ts$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ["\\.vue$"],
                happyPackMode: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: "webpack-demo",
        template: path.resolve(__dirname, "public/index.html"),
      }),
      new DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.production ? "production" : "development"),
          BASE_URL: JSON.stringify("/"),
        },
      }),
      new CaseSensitivePathsPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "dist"),
            toType: "dir",
            noErrorOnMissing: true,
            globOptions: {
              ignore: ["**/index.html"],
            },
            info: {
              minimized: true,
            },
          },
        ],
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
        },
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx", "vue"],
        emitWarning: true,
        emitError: true,
        failOnError: false,
        failOnWarning: false,
        cache: true,
        cacheLocation: path.resolve(__dirname, "node_modules/.cache/eslintcache"),
      }),
    ],
    optimization: {
      moduleIds: "deterministic", // 使用 deterministic 模块 ID 以获得更好的长效缓存
      runtimeChunk: "single", // 将 webpack runtime 代码单独打包成一个 chunk
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      minimizer: [
        new MinimizerPlugin({
          test: /\.(?:[cm]?js|css|html?|json)(\?.*)?$/i,
          parallel: true,
          minify: [
            MinimizerPlugin.terserMinify,
            MinimizerPlugin.cssnanoMinify,
            MinimizerPlugin.htmlMinifierTerser,
            MinimizerPlugin.jsonMinify,
          ],
          minimizerOptions: [
            {
              compress: {
                arrows: false,
                collapse_vars: false,
                comparisons: false,
                computed_props: false,
                hoist_funs: false,
                hoist_props: false,
                hoist_vars: false,
                inline: false,
                loops: false,
                negate_iife: false,
                properties: false,
                reduce_funcs: false,
                reduce_vars: false,
                switches: false,
                toplevel: false,
                typeofs: false,
                booleans: true,
                if_return: true,
                sequences: true,
                unused: true,
                conditionals: true,
                dead_code: true,
                evaluate: true,
              },
              mangle: {
                safari10: true,
              },
            },
            {
              preset: [
                "default",
                {
                  mergeLonghand: false,
                  cssDeclarationSorter: false,
                },
              ],
            },
            {
              caseSensitive: false,
              collapseWhitespace: true,
              conservativeCollapse: true,
              keepClosingSlash: true,
              minifyCSS: true,
              minifyJS: false,
              removeComments: true,
              removeScriptTypeAttributes: false,
              removeStyleLinkTypeAttributes: false,
            },
            {
              space: "\t",
            },
          ],
          extractComments: false,
        }),
      ],
    },
  };
};
