'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')
const mustache = require('APP/public/mustacheDefault.jpg')

//Set up the products model which will represent all the products sold on our store.
const Product = db.define('products', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  image: {
    type: Sequelize.STRING,
    defaultValue: mustache //default photo imported from public folder
  },
	description: {
    type: Sequelize.TEXT,
    defaultValue: 'No description'
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0 //"Out of stock"/In stock will be handled on frontend
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0
  }
});

module.exports = Product;
