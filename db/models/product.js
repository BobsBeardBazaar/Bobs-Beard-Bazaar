'use strict';


const Sequelize = require('sequelize')
const db = require('APP/db')
const mustache = 'https://tribwxmi.files.wordpress.com/2013/05/mustache-web.jpeg';

//Set up the products model which will represent all the products sold on our store.
const Product = db.define('products', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
      // OB/DYS: consider unique validator here
    },
  image: {
    type: Sequelize.STRING,
    defaultValue: mustache //default photo imported from public folder
    // OB/DYS: consider isUrl validator here
  },
	description: {
    type: Sequelize.TEXT,
    defaultValue: 'No description' // OB/DYS: keep this as null instead
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0 //"Out of stock"/In stock will be handled on frontend
    // OB/DYS: consider min validator here
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0 // OB/DYS: maybe no default here, just error if they don't specify a price
    // OB/DYS: consider min validator here
  }
});

module.exports = Product;
