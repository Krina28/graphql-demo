const userCtrl = require('../controllers/userController');
const productCtrl = require('../controllers/productController');

var resolvers = {
    Query: {
        getAllUsers() {
            return userCtrl.getAllUserList();
        },
        getUser(obj, { id }) {
            return userCtrl.getUserById({ id });
        },
        addUser() {
            return userCtrl.addUser();
        },
        getAllProducts() {
            return productCtrl.getAllProductList();
        }
    },

    Mutation: {
        updateUser(obj, args) {
            return userCtrl.updateUser(args);
        }
    }
};

module.exports = resolvers;
