const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    address: String,
    age: Number
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
