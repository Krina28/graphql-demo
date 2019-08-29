const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    _id: String,
    name: String,
    location: String,
    num_of_departments: Number
}, {
        collection: "company"
    })

const Company = mongoose.model('Company', companySchema);

module.exports = {
    Company
};
