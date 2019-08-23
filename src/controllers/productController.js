const { Product } = require("../models/product");

const products = [{
    id: 1,
    name: 'Cold Coffee',
    category: 'Beverage',
    warehouse: 'Ahmedabad'
}, {
    id: 2,
    name: 'burger',
    category: 'Food',
    warehouse: 'Banglore'
},
{
    id: 3,
    name: 'Pasta',
    category: 'Food',
    warehouse: 'Banglore'
}]

let productCtrl = {
    getAllProductList: async () => {
        let response = await Product.find({}).exec();
        console.log('product response', response)
        return products;
    }
}

module.exports = productCtrl;
