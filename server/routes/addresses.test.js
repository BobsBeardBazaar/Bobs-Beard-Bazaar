const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Address = require('APP/db/models/address');
const app = require('../start');

describe('/api/addresses', () => {

    it('POST a new address (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/addresses')
            .send({
                name: 'Home',
                address: '111 Main st. New Jersey 090876',
                user_id: 2
            })
            .expect(201)
            .then(res => expect(res.body).to.contain({
                name: 'Home',
                address: '111 Main st. New Jersey 090876'
            }))
    )


    it('GET all addresses for one user', () =>
        request(app)
            .get(`/api/addresses/2`)
            .expect(200)
            .then(res => expect(res.body[0]).to.contain(
                {
                    name: 'Home',
                    address: '111 Main st. New Jersey 090876',
                    user_id: 2
                }
            ))
    )

    it('UPDATE an address ', () =>
        request(app)
            .put('/api/addresses/1')
            .send({
                name: 'Business',
                address: '111 Main st. New Jersey 090876',
                user_id: 2
            })
            .expect(200)
            .then(res => expect(res.body).to.contain({
                name: 'Business',
                address: '111 Main st. New Jersey 090876'
            }))
    )


    it('DELETE /:addressId', () =>
        request(app)
            .delete(`/api/addresses/1`)
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    )
})