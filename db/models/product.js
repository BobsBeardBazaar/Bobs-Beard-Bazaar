'use strict';


const Sequelize = require('sequelize')
const db = require('APP/db')
const mustache = 'https://tribwxmi.files.wordpress.com/2013/05/mustache-web.jpeg';

//Set up the products model which will represent all the products sold on our store.
const Product = db.define('products', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  image: {
    type: Sequelize.STRING,
    defaultValue: mustache, //default photo imported from public folder
    validate: {
      isUrl: true
    }
  },
	description: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0, //"Out of stock"/In stock will be handled on frontend
    validate: {
      min: 0,
      max: 100
    }
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      min: 0
    }
  }
}, {
  indexes: [{fields: ['name'], unique: true}]
});

module.exports = Product;
