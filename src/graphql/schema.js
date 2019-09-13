var { gql } = require('apollo-server-express');

var typeDefs = gql`
# declare custom scalars for password as HashedPassword
scalar HashedPassword
#Product Schema
type Product {
    _id: String,
    fname: String,
    category: String,
    warehouse: String,
    image: String
}
#User Schema
type User {
    _id: String,
    name: String,
    age: Int,
    email: String,
    address: String,
    password: HashedPassword
}
#Company Schema
type Company {
    _id: String,
    name: String,
    location: String
    num_of_departments : Int
}
type Query {
    getAllUsers: [User]
    getUser(id: Int!): User
    getAllProducts: [Product]
    getProductById(_id: String!): Product
    getAllCompanies: [Company]
}
#List of all mutations
type Mutation {
    updateUser(_id: String!, name: String, age: Int, email:String, address: String): User
    addUser(email:String!, name: String, age: Int, address: String, password: HashedPassword!): User
    addCompany(name:String!, location: String!, num_of_departments: Int!): Company
}`;

module.exports = typeDefs;
