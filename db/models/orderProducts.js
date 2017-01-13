'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

// This table is used as the JOIN table for Order and Product
const OrderProducts = db.define('orderProducts', {
	quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0 //"Out of stock"/In stock will be handled on frontend
  },
	price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = OrderProducts;
