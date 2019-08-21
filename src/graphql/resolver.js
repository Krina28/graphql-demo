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
    }
};

module.exports = resolvers;
