'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

// Require models
const User = require('./user');
const Address = require('./address');
const Order = require('./order');
const Product = require('./product');
const Review = require('./review');
const Category = require('./category');

// Require JOIN table models
const OrderProducts = require('./orderProducts');

// # Add associations
// Product foreign key on each Review
Review.belongsTo(Product);
Product.hasMany(Review);

// User foreign key on each Review
Review.belongsTo(User, {as: 'Author'});
User.hasMany(Review, {as: 'Author'});

// User foreign key on each Address
User.hasMany(Address);

// Category foreign key on each Product
Category.hasMany(Product);
Product.belongsTo(Category);

// Address foreign key as 'ShippingAddress' on each Order
Order.belongsTo(Address, {as: 'ShippingAddress'});

// User foreign key on each Order
Order.belongsTo(User);

// Join table 'OrderProduct'
Order.belongsToMany(Product, {through: OrderProducts});
Product.belongsToMany(Order, {through: OrderProducts});

module.exports = {User, Product, Review, Category, Address, Order}
