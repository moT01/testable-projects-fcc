const path = require('path');

const PROJECT_PATH = path.join(__dirname, '/local_test');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'FCC_Global',
        path: path.join(PROJECT_PATH, '/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              // chained loaders: 
              // style-loader injects css imported by css-loader
              loader: 'style-loader!css-loader'
            },
            {
              test: /\.html$/,
              exclude: /node_modules/,
              // creates String for importing into JS
              loader: 'html-loader'
            }
        ]
    }
};
