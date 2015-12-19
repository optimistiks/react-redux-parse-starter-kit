var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: [
        // Set up an ES6-ish environment
        'babel-polyfill',

        // Add your application's scripts below
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.jsx?$/,
            },
            { test: /\.css$/, loader: 'style!css' },

        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
