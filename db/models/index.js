'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

// Require models
const User = require('./user');
const Address = require('./address');
const Cart = require('./cart');
const Order = require('./order');
const Payment = require('./payment');

// Require JOIN table models
const CartProducts = require('./cartProducts');
const OrderProducts = require('./orderProducts');

// # Add associations
// Product foreign key on each Review
Review.belongsTo(Product);
Product.hasMany(Reviews);

// User foreign key on each Review
Review.belongsTo(User, {as: 'Author'});
User.hasMany(Review);

// User foreign key on each Address
User.hasMany(Address);

// Category foreign key on each Product
Category.hasMany(Product);

// User foreign key on each payment
Payment.belongsTo(User);

// Address foreign key as 'BillingAddress' on each payment
Payment.belongsTo(Address, {as: 'BillingAddress'});

// Address foreign key as 'ShippingAddress' on each Order
Order.belongsTo(Address, {as: 'ShippingAddress'});

// Payment foreign key on each Order
Order.belongsTo(Payment);

// User foreign key on each Order
Order.belongsTo(User);

// User foreign key on each Cart
Cart.belongsTo(User);

// Join table 'CartProduct'
Cart.belongsToMany(Product, {through: CartProducts});
Product.belongsToMany(Cart, {through: CartProducts});

// Join table 'OrderProduct'
Order.belongsToMany(Product, {through: OrderProducts});
Product.belongsToMany(Order, {through: OrderProducts});


module.exports = { User, Address, Cart, Order, Payment };
