// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
entry: './src/index.jsx',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
},
devServer: {
  static: {
    directory: path.join(__dirname, './static'),
  },
  proxy: [
    {
      context: ['/api'],
      target: 'http://localhost:4000',
      pathRewrite: { '^/api': '' },
    },
  ],
  hot: true,
  compress: true,
  port: 8080,
},
plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: ['/node_modules/'],
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
        use: ['file-loader'],
        exclude: ['/node_modules/'],
      },

    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '...', '.css'],
  },
};
module.exports = () => {
    if (isProduction) {
      config.mode = 'production';
    } else {
      config.mode = 'development';
    }
    return config;
  };