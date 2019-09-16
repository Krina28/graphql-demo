const { User } = require("../models/user");
var jwt = require('jsonwebtoken');

let authCtrl = {
    login: async (args) => {
        console.log('login', args)
        let { email, password } = args;
        await User.findOne({ email, password }, function (err, data) {
            if (err) {
                console.log('err', err)
            } else {
                var token = jwt.sign({ _id: data._id }, 'secret');
                console.log('token', token)
                data.token = token;
                console.log('data', data)
                return data, token;
            }
        })
    },
}

module.exports = authCtrl;
