'use strict';

const db = require('APP/db');
const User = db.model('users');
const Address = db.model('addresses');
const { createError } = require('APP/server/utils');

const { mustBeLoggedIn, forbidden, selfOrAdminOnly } = require('../auth/auth.filters');

module.exports = require('express').Router()

    // PARAM - get the user
    .param('userId', (req, res, next, userId) => {
        User.findById(userId)
		.then(user => {
            if (!user) { // If user not found, send 404
                next(createError(404, 'user not found'));
                return;
            }

            req._user = user;
            next();
        })
		.catch(next);
    })

    // GET - /users/ - List all the users
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next)
    )

    // POST - /users/ - Creates a user
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next)
    )

    // PUT - /users/:userId - Updates a certain user
    .put('/:userId',
    selfOrAdminOnly('update a user'),
    // Sanitize the input if the user is not an admin
    (req, res, next) => {
        if (!req.user.isAdmin) {
            if (req.body.isAdmin) delete req.body.isAdmin;
            next();
        } else { next(); } // If admin, let the request pass through
    },
    // Update the user
    (req, res, next) => {
        User.update(req.body, {
            where: {
                id: req.params.userId
            },
            returning: true
        })
        .then(result => {
            if (result) res.json(result[1][0]); // Return the updated user settings
            else next(createError(404, 'user not found')); // If no user, error out
        });
    })

    // DELETE - /users/:userId - Deletes a certain user
    .delete('/:userId',
    selfOrAdminOnly('delete a user'),
    (req, res, next) => {
        req._user.destroy()
        .then(() => res.sendStatus(207))
        .catch(next);
    })

    // GET - /users/:userId - Gets a certain user
	.get('/:userId', selfOrAdminOnly('get user info'), (req, res, next) =>
        res.json(req._user)
    )

    // GET - /users/:userId/addresses/ - gets all addresses
    .get('/:userId/addresses/', (req, res, next) =>
        req._user.getAddresses()
        .then(addresses => res.json(addresses))
        .catch(next)
    )

    // POST - /users/:userId/addresses/ - creates a new user address
    .post('/:userId/addresses/', (req, res, next) =>
		Address.create({
			name: req.body.name,
			address: req.body.address,
			user_id: req.params.userId
		})
		.then(address => res.status(201).json(address))
		.catch(next)
    )

    // PUT - /users/:userId/addresses/:addressId - updates a user address
    .put('/:userId/addresses/:addressId', (req, res, next) =>
        Address.update(req.body, {
            where: {
                id: req.params.addressId
            },
            returning: true
        })
    .then(result => {
        if (result) res.json(result[1][0]);
        else next(createError(404, 'address not found'));
    })
    .catch(next)
    )

    // DELETE - /users/:userId/addresses/:addressId - deletes a user address
    .delete('/:userId/addresses/:addressId', (req, res, next) =>
        Address.destroy({
            where: {
                id: req.params.addressId
            }
        })
    .then(numDeleted => res.status(200).json(numDeleted))
    .catch(next)
);
