const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing without file extensions
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve static files from the 'public' directory
    port: 8080, // Port for dev server
    hot: true, // Enable Hot Module Replacement
  },
};
