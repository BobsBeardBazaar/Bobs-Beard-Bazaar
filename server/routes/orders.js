'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const { createError } = require('APP/server/utils');


module.exports = require('express').Router()

    // Grab the order first if asked for
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
    //localhost:1337/api/orders/:orderId
	.get('/:orderId', (req, res, next) =>
        res.json(req._order)
    )

	//GET all the orders for the admin
    // Optional req.query.user
	.get('/', (req, res, next) => {
        let whereQuery = {};
        console.log("inside orders route");

        // If a query for a user exists, then grab only their orders
        if (req.query.userId) {
            console.log("inside the query part", req.query.userId);
            whereQuery = {
                where: {
                    user_id: req.query.userId
                }
            };
        }

        // TODO: if no userId is given, then make sure they are an admin

        Order.findAll(whereQuery, {
            include: [{ model: orderProducts,
            include: [{ model: Products}] }]
        })
		.then(orders => res.json(orders))
		.catch(next);
    })

	.post('/', (req, res, next) =>
        // TODO: add authorization
		Order.create(req.body)
		.then(cart => res.status(201).json(cart))
		.catch(next))

	.delete('/:orderId', (req, res, next) =>
        req._order.destroy()
		.then(() => res.sendStatus(204))
		.catch(next))

	.put('/:orderId', (req, res, next) =>
        // TODO: add authorization
		Order.update(req.body, {
			where: {
				id: req.params.orderId
			},
			returning: true
		})
		.then(result => {
            if (!result) next(createError(404, 'order not found'));
            else res.json(result[1][0]);
        })
        .catch(next));
