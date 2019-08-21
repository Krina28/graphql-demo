const users = [{
    id: 3,
    name: 'test user',
    address: 'Ahmedabad',
    age: 20,
    email: 'test@test.com'
},
{
    id: 2,
    name: 'test',
    address: 'Surat',
    age: 22,
    email: 'test12@test.com'
}]

let userCtrl = {
    getAllUserList() {
        return users;
    },
    getUserById(args) {
        let user = users.filter(user => user.id == args.id)
        return user[0];
    }
}

module.exports = userCtrl;
