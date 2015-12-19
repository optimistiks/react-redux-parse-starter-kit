var path = require('path');

module.exports = {
    entry: [
        // Set up an ES6-ish environment
        'babel-polyfill',

        // Add your application's scripts below
        './index.js',
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                loader: 'eslint-loader',
                exclude: /node_modules/,
                test: /\.jsx?$/,
            }
        ],
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.jsx?$/,
            },
            { test: /\.css$/, loader: 'style!css' },

        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
