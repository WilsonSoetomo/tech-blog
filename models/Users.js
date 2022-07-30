const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class Users extends Model { 
  checkpassword(loginPw) {
    console.log('this is the password', this.password);
    console.log('login password here', loginPw);
    return bcrypt.compareSync(loginPw, this.password);
  }
}


Users.init({id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},
username: {
  type: DataTypes.STRING,
  allowNull: false,
},
password: {
  type: DataTypes.STRING,
  allowNull: false
}
},
{
  hooks: {
    beforeCreate: async (user) => {
      console.log('user beforeCreate', user);
      user.password = await bcrypt.hash(user.password, 10);
      console.log('user after bcrpt', user);
      return user;
    }
  }, beforeUpdate: async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
    return user;
  },
  sequelize,
  modelName: 'Users',
  freezeTableName: true,
});

module.exports = Users;
