const { Users } = require('../models');
const userData = [
    {
        username: 'admin',
        password: 'admin',
        user_id: 1
    },
    {
        username: 'user',
        password: 'user',
        user_id: 2
    }
];

const seedUsers = () => Users.bulkCreate(userData);


module.exports = seedUsers;
