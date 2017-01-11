'use strict'

const db = require('APP/db')
const Address = db.model('addresses')


module.exports = require('express').Router()
	.get('/:userId', (req, res, next) =>
		Address.findAll(req.params.userId)
		.then(addresses => res.json(addresses))
		.catch(next))

	.post('/', (req, res, next) =>
		Address.create({
			name: req.body.name,
			address: req.body.address
		})
		.then(address => res.status(201).json(address))
		.catch(next))

	.delete('/:id', (req, res, next) =>
		Address.destroy(req.params.id)
		.then(address => res.sendStatus(204))
		.catch(next))

	.put('/:id', (req, res, next) =>
		Address.update(req.body, {
			where: {
				id: req.params.id
			},
			returning: true
		})
		.then(result => res.json(result[1][0]))
  	.catch(next))
