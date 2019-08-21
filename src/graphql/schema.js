var { gql } = require('apollo-server-express');

var typeDefs = gql`
type Product {
    id: Int,
    name: String,
    category: String,
    warehouse: String
}
type User {
    id: Int,
    name: String,
    age: Int,
    email: String,
    address: String
}
type Query {
    getAllUsers: [User]
    getUser(id: Int!): User
    getAllProducts: [Product]
}`;

module.exports = typeDefs;
