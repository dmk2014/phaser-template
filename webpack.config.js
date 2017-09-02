const path = require('path')
const webpack = require('webpack')
const cleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/app.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'], // .ts for src, .js for webpack-dev-server dependencies
        alias: {
            'Phaser': path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/phaser-split.js'),
            'PIXI': path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/pixi.js'),
            'p2': path.resolve(__dirname, 'node_modules/phaser-ce/build/custom/p2.js'),
            'assets': path.resolve(__dirname, 'assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'ts-loader'
            },
            {
                test: /pixi\.js/,
                loader: 'expose-loader?PIXI'
            },
            {
                test: /phaser-split\.js$/,
                loader: 'expose-loader?Phaser'
            },
            {
                test: /p2\.js/,
                loader: 'expose-loader?p2'
            },
            {
                test: /\.(jpg|jpeg|png|mp3|ogg|json)$/,
                loader: 'file-loader?name=assets/[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        new cleanPlugin(['dist'])
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
}