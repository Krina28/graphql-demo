const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
