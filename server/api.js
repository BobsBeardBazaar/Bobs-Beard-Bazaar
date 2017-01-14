'use strict';

const db = require('APP/db');
const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth/auth'))
  .use('/users', require('./routes/users'))
  .use('/categories', require('./routes/categories'))
  .use('/orders', require('./routes/orders'))
  .use('/products', require('./routes/products'))
  .use('/reviews', require('./routes/reviews'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || err)
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
