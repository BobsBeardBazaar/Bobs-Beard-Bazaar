const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const Product = require('APP/db/models/product');
const app = require('../start');

describe('/api/reviews', () => {

    let review1, review2, theProduct;

    const product1 = {
        name: 'Andrews fabulous mustache',
        image: 'google.com/awesomemustache.jpg',
        description: 'its pretty great',
        quantity: 30,
        price: 57.04
    };

    before(
        () => {
            return Product.create(product1)
            .then(createdProduct => {

                theProduct = createdProduct;

                review1 = {
                    comment: 'No words',
                    rating: 5,
                    title: 'Andrews fabulous mustache',
                    product_id: createdProduct.id,
                    author_id: 1
                };

                review2 = {
                    comment: 'I would buy 5 if I could',
                    rating: 5,
                    title: 'Joes exquisite mustache'
                };
            });
        }
    );

	it('POST a new review(1)', () =>
		request(app)
			.post('/api/reviews')
			.send(review1)
			.expect(201)
			.then(res => expect(res.body).to.contain(review1))
	);

    it('POST a new review(2)', () =>
        request(app)
            .post('/api/reviews')
            .send(review2)
            .expect(201)
            .then(res => expect(res.body).to.contain(review2))
    );

    it('GET all reviews...confirming we have 2 reviews', () =>
        request(app)
            .get(`/api/reviews`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(2))
    );

    it('GET all reviews for a user...confirming we have 1 reviews', () =>
        request(app)
            .get(`/api/reviews/user/1`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(1))
    );

    it('GET all reviews for a product...confirming we have 1 reviews', () =>
        request(app)
            .get(`/api/reviews/product/${theProduct.id}`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(1))
    );

    it('Can PUT reviews(1)', () =>
        request(app)
            .put('/api/reviews/1')
            .send({
                title: 'Andrews updated mustache',
                rating: 0
            })
            .expect(200)
            .then(res => expect(res.body.title).to.equal('Andrews updated mustache'))
    );

    it('Can DELETE review(1)', () =>
        request(app)
            .delete('/api/reviews/1')
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    );

    it('Cannot DELETE review(1), since it does not exist', () =>
        request(app)
            .delete('/api/reviews/1')
            .expect(200)
            .then(res => expect(res.body).to.equal(0))
    );

    it('GET all reviews...confirming we have 1 review left', () =>
        request(app)
            .get(`/api/reviews`)
            .expect(200)
            .then(res => expect(res.body.length).to.equal(1))
    );

});
