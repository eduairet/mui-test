const path = require('path'),
  HTMLWebpackPlugin = require('html-webpack-plugin'),
  javascriptRules = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "usage",
              "corejs": 3
            }
          ],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      }
    }
  },
  typescriptRules = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  },
  styleRules = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  };

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      javascriptRules,
      typescriptRules,
      styleRules
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' })
  ]
};