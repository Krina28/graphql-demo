var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

var schema = buildSchema(`
    type Query {
        message: String
    }
`);
var root = {
    message: () => 'Hello World!'
};

var app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.get('/list', function (req, res) {
    res.send('<html> <body> <h2>Hello World</h2> </body></html>')
});

app.listen(4000, function () {
    console.log('Listening on post 4000');
})
