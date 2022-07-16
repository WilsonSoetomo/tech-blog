const { Product } = require('../models');

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
