const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: Number,
    name: String,
    category: String,
    warehouse: String
})

const Product = mongoose.model('Product', productSchema);

module.exports = {
    Product
};
