var express = require('express');
var { ApolloServer } = require('apollo-server-express');
var typeDefs = require('./src/graphql/schema')
var resolvers = require('./src/graphql/resolver')
require('./src/config/index');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, playground: true, });
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 3000 }, function () {
    console.log('Server started...')
})
