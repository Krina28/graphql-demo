const { User } = require("../models/user");

let userCtrl = {
    getAllUserList: async () => {
        let response = await User.find();
        return response;
    },
    getUserById(args) {
        let user = users.filter(user => user.id == args.id)
        return user[0];
    },
    addUser: async (args) => {
        await User.create(args, function (err, data) {
            let addedUser = {};
            console.log('addedUsersdfsdf', data)
            // if (err) {
            //     console.log("Something wrong when adding data!", err);
            //     return err;
            // }
            // delete data.__v;
            // addedUser = data;

            // return addedUser;
        })
    },
    updateUser: async (args) => {
        let query = { _id: args._id };
        let updatedUserInfo = {};
        await User.findOneAndUpdate(query, args, { useFindAndModify: false }, (err, updatedUser) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            delete updatedUser.__v;
            updatedUserInfo = updatedUser;
        });
        return updatedUserInfo;
    }
}

module.exports = userCtrl;
