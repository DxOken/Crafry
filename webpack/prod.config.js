const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./base.config')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const { extendDefaultPlugins } = require("svgo");

const DIST_ASSETS = 'assets'

// CONFIGS
const POSTCSS = '../postcss.config.js'


const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",

    output: {
        filename: `${DIST_ASSETS}/js/pages/[name].[hash].js`,
        clean: true,
    },

    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin({
                parallel: true,
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${DIST_ASSETS}/css/[name].[hash].css`
        }),
        // new ImageMinimizerPlugin({
        //     minimizerOptions: {
        //         // Lossless optimization with custom option
        //         // Feel free to experiment with options for better result for you
        //         plugins: [
        //             ["gifsicle", { interlaced: true }],
        //             ["jpegtran", { progressive: true }],
        //             ["optipng", { optimizationLevel: 5 }],
        //             // Svgo configuration here https://github.com/svg/svgo#configuration
        //             [
        //                 "svgo",
        //                 {
        //                     plugins: extendDefaultPlugins([
        //                         {
        //                             name: "removeViewBox",
        //                             active: false,
        //                         },
        //                         {
        //                             name: "addAttributesToSVGElement",
        //                             params: {
        //                                 attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        //                             },
        //                         },
        //                     ]),
        //                 },
        //             ],
        //         ],
        //     },
        // }),
    ],
    module: {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: false,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: false,
                            postcssOptions: {
                                config: path.join(__dirname, POSTCSS),
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: false,
                            postcssOptions: {
                                config: path.join(__dirname, POSTCSS),
                            },
                        },
                    },
                ],
            },
        ]
    }
})

module.exports = new Promise((res) => {
    res(prodWebpackConfig)
})