var { gql } = require('apollo-server-express');

var typeDefs = gql`
type Product {
    fname: String,
    category: String,
    warehouse: String
}
type User {
    _id: String,
    name: String,
    age: Int,
    email: String,
    address: String
}
type Query {
    getAllUsers: [User]
    getUser(id: Int!): User
    getAllProducts: [Product]
}
type Mutation {
    updateUser(_id: String!, name: String, age: Int, email:String, address: String): User
    addUser(email:String!, name: String, age: Int, address: String): User
}`;

module.exports = typeDefs;
