const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Payment = require('APP/db/models/payment')
const app = require('../start')

describe('/api/payments', () => {
    it('POST creates a payment', () =>
      request(app)
        .post('/api/payments')
        .send({
          name: 'YooNah',
          cardName: 'Master',
          cardNumber: '1234567891234567',
          expirationDate: 1012,
          securityCode: 111,
          user_id: 2
        })
        .expect(201)
    )

    it('GET /:userId gets all payment information for one user', () =>
      request(app)
        .get(`/api/payments/2`)
        .expect(200)
        .then(res => expect(res.body[0]).to.contain(
                {
                    name: 'YooNah',
                    cardName: 'Master',
                    cardNumber: '1234567891234567',
                    expirationDate: 1012,
                    securityCode: 111,
                    user_id: 2
                }
            ))
    )

    it('UPDATE a payment ', () =>
    request(app)
        .put('/api/payments/1')
        .send({
            name: 'Surabhi',
            cardName: 'Master',
            cardNumber: '1234567891234567',
            expirationDate: 1012,
            securityCode: 111,
            user_id: 2
        })
        .expect(200)
        .then(res => expect(res.body).to.contain({
            name: 'Surabhi',
            cardName: 'Master',
            cardNumber: '1234567891234567',
            expirationDate: 1012,
            securityCode: 111,
            user_id: 2
        }))
    )

    it('DELETE /:paymentId', () =>
        request(app)
            .delete(`/api/payments/1`)
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    )


  })
