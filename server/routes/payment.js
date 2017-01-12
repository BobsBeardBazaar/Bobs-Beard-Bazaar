'use strict'

const db = require('APP/db')
const Payment = db.model('payments')


module.exports = require('express').Router()
	//gets all payment methods for one user
	.get('/:userId', (req, res, next) =>
		Payment.findAll({
			where: {
				user_id: req.params.userId
			}
		})
		.then(payments => res.json(payments))
		.catch(next))

	//creates payment method
	.post('/', (req, res, next) =>
		Payment.create(req.body)
        // Payment.create({
        //     ccn: 11111111111111,
        //     address: 'laskdjfalkjsd'
        //     // ccv: 987
        // })
		.then(payment => res.status(201).json(payment))
	.catch(next))

	//deletes payment method
	.delete('/:id', (req, res, next) =>
		Payment.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(deletedPaymentsNum => res.status(200).json(deletedPaymentsNum))
		.catch(next))

	// updates payment method
	.put('/:id', (req, res, next) =>
		Payment.update(req.body,
			{
				where:
					{
						id: req.params.id
					},
				returning: true
			})
		.then(result => res.json(result[1][0]))
  	.catch(next))
