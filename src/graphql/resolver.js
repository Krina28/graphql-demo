const { GraphQLScalarType } = require('graphql');
const userCtrl = require('../controllers/userController');
const productCtrl = require('../controllers/productController');
const companyCtrl = require('../controllers/companyController');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const HashedPassword = new GraphQLScalarType({
    name: "HashedPassword",
    description: "Storage of Hashed Password",
    parseValue(value) {
        // value comes from the client
        return value; // sent to resolvers
    },
    serialize(value) {
        // value comes from resolvers
        return value; // sent to the client
    },
    async parseLiteral(ast) {
        console.log('ast', ast)
        // value comes from the client
        if (ast.value) {
            let call = await encryptPwd(ast.value)
            // console.log('after call', call)
            return call;
        }
    }
});

//generates hashed password using bcrypt
async function encryptPwd(password) {
    let finalVal;
    await bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            // Store hash in your password DB.
            // console.log('hash', password, hash)
            finalVal = hash;
            return hash;
        });
        return finalVal;
    });
}

var resolvers = {
    Query: {
        // get all users listing call
        getAllUsers() {
            return userCtrl.getAllUserList();
        },
        // get single user call
        getUser(obj, { id }) {
            return userCtrl.getUserById({ id });
        },
        getAllProducts() {
            return productCtrl.getAllProductList();
        },
        getAllCompanies() {
            return companyCtrl.getAllCompanies();
        }
    },

    Mutation: {
        addUser(obj, args) {
            return userCtrl.addUser(args);
        },
        updateUser(obj, args) {
            return userCtrl.updateUser(args);
        },
        addCompany(obj, args) {
            return companyCtrl.addCompany(args);
        },
    },
    HashedPassword
};

module.exports = resolvers;
