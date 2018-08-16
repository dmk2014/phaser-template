const merge = require('webpack-merge')
const path = require('path')
const webpackClean = require('clean-webpack-plugin')

const common = require('./webpack.common')
const outputFolder = 'build'

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, outputFolder)
    },
    plugins: [
        new webpackClean([outputFolder])
    ],
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 8080,
        watchOptions: {
            aggregateTimeout: 500,
            ignored: /node_modules/,
            inline: true,
            poll: false
        }
    }
})
