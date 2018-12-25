const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./server.common.js');
const NodemonPlugin = require( 'nodemon-webpack-plugin' )

module.exports = merge(common, {
    watch: true,
    target: 'async-node',
    externals: [
        require('webpack-node-externals')({
            whitelist: [
                'webpack-hot-middleware/client',
            ]
        })
    ],
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new NodemonPlugin({
            verbose: true
        })
    ]
});