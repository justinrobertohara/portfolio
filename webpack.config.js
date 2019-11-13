const path = require('path');

module.exports = {
  entry: './front_end/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  }
};
