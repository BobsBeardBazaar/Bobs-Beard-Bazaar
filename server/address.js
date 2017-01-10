'use strict'

const db = require('APP/db')
const Address = db.model('carts')


module.exports = require('express').Router()
	.get('/:userId', (req, res, next) => 
		Address.findAll(req.params.userId)
		.then(addresses => res.json(addresses))
		.catch(next))
	.post('/', (req, res, next) =>
		Address.create(req.body)
		.then(address => res.status(201).json(address))
		.catch(next))
	.delete('/:id', (req, res, next) =>
		Address.destroy(req.params.id)
		.then(address => res.sendStatus(204))
		.catch(next))
	.put('/:id', (req, res, next) => 
		Address.update(req.body, {where: {id: req.params.id}})
		.then(result => res.json(result[1]))
  		.catch(next))