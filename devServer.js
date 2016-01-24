var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var schema = require('./src/repo/schema');
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var WebpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);


express().use('/graphql', graphqlHTTP({schema: schema, pretty: true, graphiql: true}))
    .listen(8080, ()=> {
        console.log('GraphQL at http://localhost:8080/graphql')
    });

var server = new WebpackDevServer(compiler, {
    stats: {colors: true},
    hot:true,
    publicPath: path.join(__dirname, 'dist'),
    noInfo: true,
    hot: true,
    proxy: {'/graphql': 'http://localhost:8080/graphql'},
    publicPath: config.output.publicPath
});

server.use(require('webpack-hot-middleware')(compiler));
server.use(express.static(path.resolve(__dirname, 'public')));
server.listen(4444, ()=> {
    console.log('application started http://localhost:4444/');
});