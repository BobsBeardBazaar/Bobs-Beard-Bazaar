'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth/auth'))
  .use('/users', require('./routes/users'))

  .use('/addresses', require('./routes/addresses'))
  .use('/carts', require('./routes/carts'))
  .use('/categories', require('./routes/categories'))
  .use('/orders', require('./routes/orders'))
  .use('/payments', require('./routes/payment'))
  .use('/products', require('./routes/products'))
  .use('/reviews', require('./routes/reviews'))
  
// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
