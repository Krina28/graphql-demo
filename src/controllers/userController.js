const { User } = require("../models/user");

let userCtrl = {
    addUser: async (args) => {
        let allUsers = await User.insert(args);
        return allUsers;
    },
    getAllUserList: async () => {
        let response = await User.find();
        return response;
    },
    getUserById(args) {
        let user = users.filter(user => user.id == args.id)
        return user[0];
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
