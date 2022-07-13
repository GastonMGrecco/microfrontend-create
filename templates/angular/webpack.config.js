const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const deps = require('./package.json').dependencies;


module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new ModuleFederationPlugin({
        name: 'my-microfrontend',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes: {
          './my-microfrontend': './src/bootstrap.ts'
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          }
        }
      })
    ]
  };
};
