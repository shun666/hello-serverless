const slsw = require('serverless-webpack');
require('source-map-support').install();


module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: [ 'transform-runtime', 'transform-async-to-generator']

                }
            }
        ]
    },
    externals: { 'aws-sdk': 'aws-sdk' }
};