const { Company } = require("../models/company");

let comapnyCtrl = {
    getAllCompanies: async () => {
        let response = await Company.find();
        return response;
    },
    addCompany: async (args) => {
        await Company.create(args, function (err, data) {
            if (err) {
                console.log("Something wrong when adding data!", err);
                return err;
            }
            delete data.__v;
            addedCompany = data;
            //console.log('added company', data, addedCompany)
            return data;
        })
    }
}

module.exports = comapnyCtrl;
