const { Product } = require("../models/product");

let productCtrl = {
    getAllProductList: async () => {
        let response = await Product.find();
        return response;
    },
    addCompany: async () => {
        let response = await Product.find();
        return response;
    },
    getProductById: async (args) => {
        let response = await Product.findById(args._id);
        return response;
    }
}

module.exports = productCtrl;
