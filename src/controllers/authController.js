const { User } = require("../models/user");
var jwt = require('jsonwebtoken');

let authCtrl = {
    login: async (args) => {
        let { email, password } = args;
        const response = await new Promise(async (resolve, reject) => {
            await User.findOne({ email, password }, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    if (data) {
                        var token = jwt.sign({ _id: data._id }, 'secret');
                        data.token = token;
                        resolve(data)
                    } else {
                        resolve({ message: 'User not found!!' })
                    }
                }
            })
        })
        return response;
    },
}

module.exports = authCtrl;
