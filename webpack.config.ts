import * as path from 'path'
import * as webpack from 'webpack'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const pathSrc = path.resolve(__dirname, 'src')
const pathBuild = path.resolve(__dirname, 'dist')
const pathAssets = path.resolve(__dirname, 'assets')

const config: webpack.Configuration = {
    mode: 'production',
    devtool: false,
    entry: pathSrc + '/scripts/app.tsx',
    module: {
        rules: [
            // TypeScript/JSX
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            // Styles
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {importLoaders: 2, sourceMap: false}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            // Images: Copy image files to build folder
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: pathBuild,
        publicPath: '/',
        filename: 'assets/scripts/[name].[contenthash].bundle.js',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: pathAssets + '/images',
                    to: pathBuild + '/assets/images',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                },
                {
                    from: pathAssets + '/data',
                    to: pathBuild + '/assets/data',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'React + Webpack test',
            template: pathSrc + '/template.html', // template file
            filename: pathBuild + '/index.html', // output file
        }),
    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    watch: true,
    watchOptions: {
        poll: 1000,
        ignored: __dirname + '/node_modules/',
    }
}

export default config
