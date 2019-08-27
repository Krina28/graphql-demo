const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    address: String,
    age: Number
}, {
        collection: "users"
    })

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
