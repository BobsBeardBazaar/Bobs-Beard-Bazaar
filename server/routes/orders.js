'use strict'

const db = require('APP/db')
const Order = db.model('orders')


module.exports = require('express').Router()
	//GET one order
	.get('/:orderId', (req, res, next) =>
		Order.findById(req.params.orderId) // OB/DYS: consider moving this logic into router.param
		.then(order => res.json(order)) // OB/DYS: watch out for null results
		.catch(next))

	//GET all the orders of this user
	//localhost:1337/api/orders/user/:userId
	// OB/DYS: more standard might be /api/users/:userId/orders
	// OB/DYS: another possibility /api/orders?userId=:userId
	.get('/user/:userId', (req, res, next) =>
		Order.findAll({
			where: {
				user_id: req.params.userId
			}
		})
		.then(order => res.json(order)) // OB/DYS: pluralize?
		.catch(next))

	//GET all the orders for the admin
	.get('/', (req, res, next) =>
		Order.findAll(req.params.userId)
		.then(orders => res.json(orders))
		.catch(next))

	.post('/', (req, res, next) =>
		Order.create(req.body)
		.then(cart => res.status(201).json(cart))
		.catch(next))

	.delete('/:id', (req, res, next) =>
		Order.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(deletedOrdersNum => res.status(200).json(deletedOrdersNum)) // OB/DYS: watch out for null results
		.catch(next))

	.put('/:id', (req, res, next) =>
		Order.update(req.body, { // OB/DYS: wathc out for open-ended updating (this applies more places, too)
			// OB/DYS: consider moving some "authorization logic" into your model, e.g. `Order.updateAuthorized(req.user, req.body)` which would take things out of the data based on the user's authorization and itself would call `Order.update`
			where: {
				id: req.params.id
			},
			returning: true
		})
		.then(result => res.json(result[1][0])) // OB/DYS: watch out for null results
  	.catch(next))
