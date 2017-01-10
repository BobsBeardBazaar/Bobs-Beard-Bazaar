'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	status: {
		type: Sequelize.ENUM,
		allowNull: false,
		values: ['created', 'processing', 'canceled', 'shipped', 'delivered', 'completed']
	},
	total: {
		type: Sequelize.FLOAT,
		allowNull: false
	}
});

module.exports = Order;
