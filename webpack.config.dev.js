var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        './src/Index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel'],
            exclude: /node_modules/,
            presets: ['react'],
            query: {
                stage: 0,
                plugins: ['./src/build/babelRelayPlugin']
            },
            include: path.join(__dirname, 'src')
        }]
    }
};
