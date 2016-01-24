import path from'path';
import  express from 'express';
import  webpack from 'webpack';
import  config from './webpack.config.dev';
import  schema from './src/schema/schema';
import  graphql from 'graphql';
import  graphqlHTTP from 'express-graphql';
import  WebpackDevServer from 'webpack-dev-server';


const compiler = webpack(config);

express().use('/', graphqlHTTP({schema: schema, pretty: true, graphiql: true}))
    .listen(8080, ()=> {
        console.log('GraphQL at http://localhost:8080')
    });

const server = new WebpackDevServer(compiler, {
    stats: {colors: true},
    proxy: {'/graphql': 'http://localhost:8080'},
    hot: true,
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath
});

server.use(require('webpack-hot-middleware')(compiler));
server.use('/public', express.static(path.resolve(__dirname, 'public')));
server.listen(4444, ()=> {
    console.log('application started http://localhost:4444/');
});
