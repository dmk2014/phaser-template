const merge = require('webpack-merge')
const path = require('path')
const webpackClean = require('clean-webpack-plugin')

const common = require('./webpack.common')
const outputFolder = 'dist'

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, outputFolder)
    },
    plugins: [
        new webpackClean([outputFolder])
    ]
})
