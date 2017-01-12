'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('carts', {
	total: {
		type: Sequelize.FLOAT,
		allowNull: false
	}
});

module.exports = Cart;
