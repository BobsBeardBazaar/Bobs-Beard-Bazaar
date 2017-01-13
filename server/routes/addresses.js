'use strict'

const db = require('APP/db')
const Address = db.model('addresses')

// OB/DYS: consider moving address logic INSIDE other routers

module.exports = require('express').Router()
	//localhost:1337/api/addresses/{number}
	//get all the addresses for one user
	.get('/:userId', (req, res, next) =>
		Address.findAll({
			where: {
				user_id: req.params.userId
			}
		})
		.then(addresses => res.json(addresses))
		.catch(next))

	//we may not actually need this route, but we put it here just in case
	//get one address for one user
	//localhost:1337/api/addresses/{userId}/{addressId}
	// OB/DYS: consider flipping this on its head: /api/users/{userId}/addresses (more standard, more RESTful)
	.get('/:userId/:addressId', (req, res, next) =>
		Address.findById(req.params.addressId)
		.then(addresses => res.json(addresses))
		.catch(next))

		//localhost:1337/api/addresses/{addressId}
	.post('/', (req, res, next) =>
		Address.create({
			name: req.body.name,
			address: req.body.address,
			user_id: req.body.user_id
		})
		.then(address => res.status(201).json(address))
		.catch(next))

		//localhost:1337/api/addresses/{addressId}
	.delete('/:addressId', (req, res, next) =>
		Address.destroy({
			where: {
				id: req.params.addressId
			}
		})
		.then(deletedAddressNum => res.status(200).json(deletedAddressNum))
		.catch(next))

		//localhost:1337/api/addresses/{addressId}
	.put('/:addressId', (req, res, next) =>
		Address.update(req.body, {
			where: {
				id: req.params.addressId
			},
			returning: true
		})
		.then(result => res.json(result[1][0]))
  	.catch(next))
