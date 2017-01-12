const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Order = require('APP/db/models/order');
const app = require('../start');

describe('/api/orders', () => {

    it('POST a new order (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/orders')
            .send({
                status: "created",
                total: 100,
                user_id: 1
            })
            .expect(201)
            .then(res => expect(res.body).to.contain({
                status: "created",
                total: 100,
                user_id: 1
            }))
    )

    //to test get all orders for one user, we are posting one more order with user_id=1
    it('POST a new second order (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/orders')
            .send({
                status: "created",
                total: 200,
                user_id: 1
            })
            .expect(201)
            .then(res => expect(res.body).to.contain({
                status: "created",
                total: 200,
                user_id: 1
            }))
    )

    //to test get all the orders in database posting one more order
    it('POST a new third order (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/orders')
            .send({
                status: "created",
                total: 300,
                user_id: 2
            })
            .expect(201)
            .then(res => expect(res.body).to.contain({
                status: "created",
                total: 300,
                user_id: 2
            }))
    )

    it('GET one order by the orderId ', () =>
        request(app)
            .get(`/api/orders/1`)
            .expect(200)
            .then(res => expect(res.body).to.contain(
                {
                    status: "created",
                    total: 100,
                    user_id: 1
                }
            ))
    )

    it('GET all orders for one user ', () =>
        request(app)
            .get(`/api/orders/user/1`)
            .expect(200)
            .then(res => expect(res.body).to.have.length(2))
    )

    it('GET all the orders in our database ', () =>
        request(app)
            .get(`/api/orders`)
            .expect(200)
            .then(res => expect(res.body).to.have.length(3))
    )

    it('UPDATE an order by orderId ', () =>
        request(app)
            .put('/api/orders/1')
            .send({
                status: "shipped",
                total: 1000,
                user_id: 1
            })
            .expect(200)
            .then(res => expect(res.body).to.contain({
                status: "shipped",
                total: 1000,
                user_id: 1
            }))
    )


    it('DELETE /:orderId', () =>
        request(app)
            .delete(`/api/orders/1`)
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    )


})