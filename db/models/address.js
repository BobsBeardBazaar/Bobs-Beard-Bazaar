'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Address = db.define('addresses', {
	name: Sequelize.STRING, //e.g. home, office etc
	address: {
		type: Sequelize.TEXT,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	}
})

module.exports = Address;