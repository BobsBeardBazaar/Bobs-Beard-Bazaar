'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

// This table is used as the JOIN table for Order and Product
const OrderProducts = db.define('orderProducts', {
	quantity: Sequelize.INTEGER // quantity of each item/cart combo
});

module.exports = OrderProducts;
