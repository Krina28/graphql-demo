var express = require('express');
var bodyParser = require('body-parser');
var {ApolloServer} = require('apollo-server-express');
var graphqlTools = require('graphql-tools');
var typeDefs = require('./src/graphql/schema')
var resolvers = require('./src/graphql/resolver')

var schema = graphqlTools.makeExecutableSchema({typeDefs, resolvers});

const app = require('express')();

const server = new ApolloServer({ typeDefs, resolvers,playground: true, });
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 3000 }, function(){
    console.log('Server started...')
})