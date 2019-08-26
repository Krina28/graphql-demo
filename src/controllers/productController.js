const { Product } = require("../models/product");

let productCtrl = {
    getAllProductList: async () => {
        let response = await Product.find();
        return response;
    }
}

module.exports = productCtrl;
