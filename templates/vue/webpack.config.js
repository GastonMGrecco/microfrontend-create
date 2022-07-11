const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const Webpack = require('webpack');
const path = require('path');
const deps = require('./vue-project/package.json').dependencies;



module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js'

    },
    devServer: {
      port: 8081,
      liveReload: true,
      open: true,
      hot: false,
      watchFiles: ['public/**/*']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-env']
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader','postcss-loader'],
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true,
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ModuleFederationPlugin({
        name: 'my-microfrontend',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes: {
          './my-microfrontend': './src/App.js'
        },
        shared: {
          ...deps,
          vue: {
            singleton: true,
            requiredVersion: deps.vue
          }
        }
      }),
      new VueLoaderPlugin()
    ]
  };
};
