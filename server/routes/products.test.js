const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Product = require('APP/db/models/product');
const app = require('../start');

describe('/api/products', () => {

    const product1 = {
        name: 'Andrews fabulous mustache',
        image: 'google.com/awesomemustache.jpg',
        description: 'its pretty great',
        quantity: 30,
        price: 57.04
    };

    const product2 = {
        name: 'Joes fabulous mustache',
        image: 'google.com/joesawesomemustache.jpg',
        description: 'its really great',
        quantity: 4,
        price: 570.04
    };

	it('POST a new product(1)', () =>
		request(app)
			.post('/api/products')
			.send(product1)
			.expect(201)
			.then(res => expect(res.body).to.contain(product1))
	);

    it('POST a new product(2)', () =>
        request(app)
            .post('/api/products')
            .send(product2)
            .expect(201)
            .then(res => expect(res.body).to.contain(product2))
    );

    it('GET all products...confirming we have 2 products', () =>
        request(app)
            .get(`/api/products`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(2))
    );

    it('Can PUT product(1)', () =>
        request(app)
            .put('/api/products/1')
            .send({
                name: 'Andrews updated mustache'
            })
            .expect(200)
            .then(res => expect(res.body.name).to.equal('Andrews updated mustache'))
    );

    it('Can DELETE product(1)', () =>
        request(app)
            .delete('/api/products/1')
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    );

    it('Cannot DELETE product(1), since it does not exist', () =>
        request(app)
            .delete('/api/products/1')
            .expect(200)
            .then(res => expect(res.body).to.equal(0))
    );

    it('GET all products...confirming we have 1 product left', () =>
        request(app)
            .get(`/api/products`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(1))
    );

});
