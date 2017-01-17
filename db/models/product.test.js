'use strict'

const db = require('APP/db');
const Product = require('./product');
const {expect} = require('chai');

describe('Product', () => {
	before('wait for db', () => db.didSync)

	it('checking if default values are working', () => {
		return Product.create({
			name: 'Joe Cumins'
		})
		.then(product => {
				expect(product).to.contain({
				name: 'Joe Cumins', 
				image: 'https://tribwxmi.files.wordpress.com/2013/05/mustache-web.jpeg', 
				description: 'No description',
				quantity: 0,
				price: 0
			})
				return product.destroy();
			}
		)
	})


})