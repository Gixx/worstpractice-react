const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-Webpack test',
            template: path.resolve(__dirname, './src/index.html'), // template file
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
    ],
};
