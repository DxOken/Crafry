const path = require('path')
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PAGES_DIR = "../src/pages"
const SRC_PATH = '../src'
const DIST_PATH = '../dist'



//Copy
const SRC_IMG_PATH = '../src/assets/img'
const SRC_STATIC_PATH = '../src/static'
const SRC_FONTS_PATH = '../src/assets/fonts'
const DIST_IMG_PATH = '../dist/assets/img'
const DIST_FONTS_PATH = '../dist/assets/fonts'




// Current dev or prod page for building
const PAGE = [process.env.PAGE]


const DEV_PAGE = !PAGE.includes(undefined)
    ? PAGE
    : fs.readdirSync(path.join(__dirname, PAGES_DIR))

let entries = {}

for(let i = 0; i < DEV_PAGE.length; i++) {
    entries[DEV_PAGE[i]] = [
        `/src/pages/${DEV_PAGE[i]}/${DEV_PAGE[i]}.scss`,
        `/src/pages/${DEV_PAGE[i]}/${DEV_PAGE[i]}.js`,
        `/src/pages/${DEV_PAGE[i]}/${DEV_PAGE[i]}.pug`
    ]
}

module.exports = {

    entry: entries,

    output: {
        path: path.join(__dirname, DIST_PATH),
    },

    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    target: ['web'],

    resolve: {
        alias: {
            Utils: path.resolve(__dirname, '../src/utils'),
            Components: path.resolve(__dirname, '../src/components'),
            Assets: path.resolve(__dirname, '../src/assets'),
            Pages: path.resolve(__dirname, '../src/pages'),
            Layout: path.resolve(__dirname, '../src/layout'),
        },
        symlinks: false,
        cacheWithContext: false
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, SRC_IMG_PATH),
                    to: path.join(__dirname, DIST_IMG_PATH),
                    noErrorOnMissing: true,
                },
                {
                    from: path.join(__dirname, SRC_STATIC_PATH),
                    to: '',
                    noErrorOnMissing: true,
                },
                {
                    from: path.join(__dirname, SRC_FONTS_PATH),
                    to: path.join(__dirname, DIST_FONTS_PATH),
                    noErrorOnMissing: true,
                },
            ],
        }),
        ...DEV_PAGE.map(page => new HtmlWebpackPlugin({
                template: `${path.join(__dirname, PAGES_DIR)}/${page}/${page}.pug`,
                filename: page === 'index' ? 'index.html' : `pages/${page}.html`,
                chunks: page === 'index' ? ['index'] : [`${page}`],
            })
        )
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, SRC_PATH),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.join(__dirname, SRC_IMG_PATH),
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        root: path.resolve(__dirname, '../src'),
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                include: path.join(__dirname, SRC_FONTS_PATH),
                type: 'asset/resource',
            },
        ]
    }
}