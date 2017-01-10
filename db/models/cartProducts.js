'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

// This table is used as the JOIN table for Cart and Product
const CartProducts = db.define('cartProducts', {
	quantity: Sequelize.INTEGER // quantity of each item/cart combo
});

module.exports = CartProducts;
