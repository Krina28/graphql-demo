const mongoose = require('mongoose');
//var database = require("../config/index");
const { Schema } = mongoose;

const productSchema = new Schema({
    fname: String,
    category: String,
    warehouse: String,
    image: String,
}, {
        collection: "product"
    })

const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product
};
