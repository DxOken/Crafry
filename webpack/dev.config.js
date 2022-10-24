const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./base.config')

// CONFIGS
const POSTCSS = '../postcss.config.js'


const devWebpackConfig = merge(baseWebpackConfig, {

    mode: "development",

    output: {
        filename: `${process.env.DIST_ASSETS}/js/pages/[name].js`,
        pathinfo: false
    },

    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        open: process.env.PAGE === 'index' || process.env.PAGE === undefined
            ? true
            : [`/pages/${process.env.PAGE}.html`],
        port: 9090,


    },
    devtool: 'eval',
    optimization: {
        runtimeChunk: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    module: {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
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
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
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
    res(devWebpackConfig)
})


