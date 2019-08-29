const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    address: String,
    age: Number,
    password: String
}, {
        collection: "users"
    })

const User = mongoose.model('User', userSchema);

userSchema.path('email').validate(async (value) => {
    const emailCount = await User.countDocuments({ email: value });
    return !emailCount;
}, 'Email already exists');

module.exports = {
    User
};
