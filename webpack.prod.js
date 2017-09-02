const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const webpackClean = require('clean-webpack-plugin')

const common = require('./webpack.common')
const outputFolder = 'dist'

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, outputFolder)
    },
    plugins: [
        new webpackClean([outputFolder]),
        new webpack.optimize.UglifyJsPlugin()
    ]
})
