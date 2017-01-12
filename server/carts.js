'use strict'

const db = require('APP/db')
const Cart = db.model('carts')

module.exports = require('express').Router()

	//each user has only one cart
	.get('/:userId', (req, res, next) =>
		Cart.findOne({
			where: {
				user_id: req.params.userId
			}
		})
		.then(cart => res.json(cart))
		.catch(next))

	.post('/', (req, res, next) =>
		Cart.create({
			total: req.body.total,
			user_id: req.body.user_id
		})
		.then(cart => res.status(201).json(cart))
		.catch(next))

	.delete('/:cartId', (req, res, next) =>
		Cart.destroy({
			where: {
				id: req.params.cartId
			}
		})
		.then(deletedCartsNum => res.status(200).json(deletedCartsNum))
		.catch(next))

	.put('/:cartId', (req, res, next) =>
		Cart.update(req.body, {
			where: {
				id: req.params.cartId
			},
			returning: true
		})
		.then(result => res.json(result[1][0]))
  		.catch(next))
