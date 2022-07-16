
const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const sequelize = require('../config/connection');

// force: true will drop the table if it already exists
//npm run seed will execute this file, which will seed the database with the example data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
