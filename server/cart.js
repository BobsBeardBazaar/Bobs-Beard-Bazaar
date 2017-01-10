'use strict'

const db = require('APP/db')
const Cart = db.model('carts')


module.exports = require('express').Router()
	.get('/:userId', (req, res, next) => 
		Cart.findOne(req.params.userId)
		.then(cart => res.json(cart))
		.catch(next))
	.post('/', (req, res, next) =>
		Cart.create(req.body)
		.then(cart => res.status(201).json(cart))
		.catch(next))
	.delete('/:id', (req, res, next) =>
		Cart.destroy(req.params.id)
		.then(cart => res.sendStatus(204))
		.catch(next))
	.put('/:id', (req, res, next) => 
		Cart.update(req.body, {where: {id: req.params.id}})
		.then(result => res.json(result[1]))
  		.catch(next))
  	