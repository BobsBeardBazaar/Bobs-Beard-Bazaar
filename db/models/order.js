'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  // OB/DYS: could include stripe token here and destory the payment model
	status: {
		type: Sequelize.ENUM,
		allowNull: false,
		values: ['created', 'processing', 'canceled', 'shipped', 'delivered', 'completed']
    // OB/DYS: could include a default value here
	},
	total: { // OB/DYS: having total here as well as on the order's products is duplicate data, another alternative is to have instance method e.g. getTotal
		type: Sequelize.FLOAT, // OB/DYS: to avoid floating point rounding problems, consider using INTEGER and measuring in cents
		allowNull: false
	}
});

module.exports = Order;
