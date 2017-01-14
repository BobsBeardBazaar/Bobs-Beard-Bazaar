'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const { createError } = require('APP/server/utils');


module.exports = require('express').Router()

    .param('orderId', (req, res, next, orderId) => {
        Order.findById(orderId)
        .then(order => {
            if (!order) {
                next(createError(404, 'order not found'));
                return;
            }

            req._order = order;
            next();
        });
    })

	//GET one order
	.get('/:orderId', (req, res, next) =>
        res.json(req._order)
    )

	//GET all the orders of this user
	//localhost:1337/api/orders/user/:userId
	.get('/user/:userId', (req, res, next) =>
		Order.findAll({
			where: {
				user_id: req.params.userId
			}
		})
		.then(order => res.json(order))
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
		.then(deletedOrdersNum => res.status(200).json(deletedOrdersNum))
		.catch(next))

	.put('/:id', (req, res, next) =>
		Order.update(req.body, {
			where: {
				id: req.params.id
			},
			returning: true
		})
		.then(result => res.json(result[1][0]))
  	.catch(next))
