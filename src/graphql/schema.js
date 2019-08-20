var { gql} = require('apollo-server-express');

var typeDefs = gql`
type Book {
    id: Int,
    title: String,
    authors: [Author]
}
type Author {
    id: Int,
    name: String,
    age: Int,
    books: [Book]
}
type Query {
    getBooks: [Book],
    getBookById(id: Int!): Book,
    getAuthors: [Author]
}`;

module.exports = typeDefs;
