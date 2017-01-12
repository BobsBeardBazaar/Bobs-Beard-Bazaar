const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Category = require('APP/db/models/category');
const app = require('../start');

describe('/api/categories', () => {
	
	it('POST a new category (correctly, passing in a string value)', () => 
		request(app)
			.post('/api/categories')
			.send({
				name: 'Beards'
			})
			.expect(201)
			.then(res => expect(res.body).to.contain({
				name: 'Beards'
			}))
	)

	it('GET all categories', () => 
		request(app)
			.get(`/api/categories`)
			.expect(200)
			.then(res => expect(res.body[0]).to.contain(
				{ 
					"id" : 1, 
					"name": 'Beards'
				}
			))
	)

	it('POST another new category', () => 
		request(app)
			.post('/api/categories')
			.send({
				name: 'Eyebrows'
			})
			.expect(201)
			.then(res => expect(res.body).to.contain({
				name: 'Eyebrows'
			}))
	)

	it('GET all categories...confirming we have 2 categories', () => 
		request(app)
			.get(`/api/categories`)
			.expect(200)
			.then(res => expect(res.body.length).to.equal(2))
	)

	it('DELETE /:categoryId', () =>
		request(app)
			.delete(`/api/categories/1`)
			.expect(200)
			.then(res => expect(res.body).to.equal(1))
	)

	it('DELETE /:categoryId, that does not exist', () =>
		request(app)
			.delete(`/api/categories/1`)
			.expect(200)
			.then(res => expect(res.body).to.equal(0))
	)

})