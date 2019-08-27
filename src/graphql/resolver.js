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
        getAllProducts() {
            return productCtrl.getAllProductList();
        }
    },

    Mutation: {
        addUser(obj, args) {
            return userCtrl.addUser(args);
        },
        updateUser(obj, args) {
            return userCtrl.updateUser(args);
        }
    }
};

module.exports = resolvers;
