'use strict'

const db = require('APP/db')
const Payment = db.model('payments')


module.exports = require('express').Router()
	.get('/:userId', (req, res, next) => 
		Payment.findAll(req.params.userId)
		.then(payments => res.json(payments))
		.catch(next))
	.post('/', (req, res, next) =>
		Payment.create(req.body)
		.then(payment => res.status(201).json(payment))
		.catch(next))
	.delete('/:id', (req, res, next) =>
		Payment.destroy(req.params.id)
		.then(payment => res.sendStatus(204))
		.catch(next))
	.put('/:id', (req, res, next) => 
		Payment.update(req.body, {where: {id: req.params.id}})
		.then(result => res.json(result[1]))
  		.catch(next))
  	