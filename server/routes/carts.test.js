const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Cart = require('APP/db/models/cart');
const app = require('../start');

describe('/api/carts', () => {

    it('POST a new cart (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/carts')
            .send({
                total: 100,
                user_id: 1
            })
            .expect(201)
            .then(res => expect(res.body).to.contain({
                total: 100,
                user_id: 1
            }))
    )


    it('GET cart for one user', () =>
        request(app)
            .get(`/api/carts/1`)
            .expect(200)
            .then(res => expect(res.body).to.contain(
                {
                    total: 100,
                    user_id: 1
                }
            ))
    )

    it('UPDATE a cart ', () =>
        request(app)
            .put('/api/carts/1')
            .send({
                total: 1000,
                user_id: 1
            })
            .expect(200)
            .then(res => expect(res.body).to.contain({
                total: 1000,
                user_id: 1
            }))
    )


    it('DELETE /:cartId', () =>
        request(app)
            .delete(`/api/carts/1`)
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    )


})