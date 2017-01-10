'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Review = require('./review');

//Associations
Review.belongsTo(Product);
Product.hasMany(Review);
Review.belongsTo(User, { as: 'author'});
User.hasMany(Review)


module.exports = {User, Product, Review}
