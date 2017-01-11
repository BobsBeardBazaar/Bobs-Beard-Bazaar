'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Payment = db.define('payments', {
	name: {
		type: Sequelize.STRING, //name on the card
		allowNull: false
	},
	cardName: {
		type: Sequelize.STRING, // e.g. MasterCard, Visa etc
		allowNull: false
	},
	cardNumber: {
		type: Sequelize.STRING,
		allowNull: false,
		// validate: {
		// 	isCreditCard: true
		// }
	},
	expirationDate: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	securityCode: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			max: 9999
		}
	}
})

module.exports = Payment;