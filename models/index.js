
const Users = require('./Users');
const Posts = require('./Posts');

// Posts belongsTo User
Posts.belongsTo(Users, { foreignKey: 'user_id' });
// Users have many posts
Users.hasMany(Posts, { foreignKey: 'user_id' });

module.exports = {
  Users,
  Posts
};
