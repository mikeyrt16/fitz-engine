const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(
  common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: {
            allowTsInNodeModules: true,
            transpileOnly: true, // Don't type check in dev (much faster)
          },
        },
      ],
    },
    devServer: {
      static: './dist',
      historyApiFallback: true,
      port: 3000,
    },
  },
)
