# GraphQL Demo in nodejs

## Dependency
Node version : Node v6

NPM version : npm v5

## Installation
`npm install apollo-server-express graphql graphql-tools express --save`

## GraphiQL Playground
- Add `playground: true` to server creation script and that will allow to open graghiql playground while running the query.


## Example
```jsx
var express = require('express');
var { ApolloServer } = require('apollo-server-express');
var graphqlTools = require('graphql-tools');
var typeDefs = require('./src/graphql/schema')
var resolvers = require('./src/graphql/resolver')

var schema = graphqlTools.makeExecutableSchema({ typeDefs, resolvers });

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, playground: true, });
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 3000 }, function () {
    console.log('Server started...')
})
```

## Features
- Grahql Apollo Express Server Integration
- Schema & Resolvers Implementation
- Queries & Examples 

Feel free to reach out through LinkedIn or Stack overflow !!

https://www.linkedin.com/in/krina-soni-b840676b

https://stackoverflow.com/users/8880590/krina-soni

