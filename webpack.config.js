const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analitycs: './src/analitycs.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}