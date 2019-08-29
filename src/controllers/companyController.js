const { Company } = require("../models/company");

let comapnyCtrl = {
    getAllCompanies: async () => {
        let response = await Company.find();
        return response;
    },
    addCompany: async (args) => {
        await Company.create(args, function (err, data) {

            return addedCompany;
        })
    }
}

module.exports = comapnyCtrl;
