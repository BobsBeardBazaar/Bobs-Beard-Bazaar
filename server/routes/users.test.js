const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('../start')

describe('/api/users', () => {
  describe('when not logged in', () => {
    it('GET /:id fails 401 (Unauthorized)', () =>
      request(app)
        .get(`/api/users/1`)
        .expect(401)
    )

    it('POST creates a user', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'beth@secrets.org',
          password: '12345'
        })
        .expect(201)
    )

    it('POST redirects to the user it just made', () =>
      request(app)
        .post('/api/users')
        .send({
          email: 'eve@interloper.com',
          password: '23456',
        })
        .redirects(1)
        .then(res => expect(res.body).to.contain({
          email: 'eve@interloper.com'
        }))
    )

    it('POST a new address (correctly, passing in a string value)', () =>
        request(app)
            .post('/api/users/2/addresses/')
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
            .get(`/api/users/2/addresses/`)
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
            .put('/api/users/2/addresses/1')
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
            .delete(`/api/users/2/addresses/1`)
            .expect(200)
            .then(res => expect(res.body).to.equal(1))
    )

  })
});
