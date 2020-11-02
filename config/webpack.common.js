const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: paths.src + '/scripts/app.jsx',
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.assets + '/images',
          to: paths.build + '/assets/images',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'React + Webpack test',
      template: paths.src + '/template.html', // template file
      filename: paths.build + '/index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
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
}
