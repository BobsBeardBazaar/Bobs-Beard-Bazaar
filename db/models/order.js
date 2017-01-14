'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const orderProducts = require('APP/db/models/orderProducts')

const Order = db.define('orders', {
	status: {
		type: Sequelize.ENUM,
		allowNull: false,
		values: ['cart', 'created', 'processing', 'canceled', 'shipped', 'delivered', 'completed'],
		defaultValue: 'cart'
	},
	// need to look into how stripe works: https://stripe.com/docs/api#intro
	stripeToken: {
		type: Sequelize.STRING,
	}
}, {
	instanceMethods: {
		getTotal: function(){
			return orderProducts.findAll({
				where: {
					order_id: this.id
				}
			})
			.then(productsArray => {
					return productsArray.reduce((prev, curr)=>{
						return prev + (curr.quantity * curr.price);
					}, 0)
				}
			)
		}
	}
});

module.exports = Order;
