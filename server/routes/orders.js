'use strict';

const db = require('APP/db');
const Order = db.model('orders');

const OrderProducts = db.model('orderProducts');
const Products = db.model('products');
const { createError } = require('APP/server/utils');
const { mustBeLoggedIn, forbidden, selfOrAdminOnly } = require('../auth/auth.filters');


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
    // Optional req.query.user, req.query.status
    .get('/', (req, res, next) => {
        let whereQuery = {};

        // If a query for a user exists, then grab only their orders
        if (req.query.userId) {
            whereQuery = {
                where: {
                    user_id: req.query.userId
                }
            };
        }

        Order.findAll( Object.assign(whereQuery,
            {
                include: [{ model: Products,
                    through: {
                        attributes: ['quantity', 'price']
                    }
                }]
            })
        )
		.then((orders) => {
            res.json(orders);
        })
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
