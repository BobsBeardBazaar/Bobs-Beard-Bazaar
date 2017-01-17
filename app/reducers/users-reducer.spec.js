import {expect} from 'chai';

import {createStore} from 'redux';
import userReducer from 'APP/app/reducers/users-reducer';

describe('User reducer', () => {

    let testStore;
    let usersArray = [
      {
        name: 'Mr. Test One',
        email: 'test1@example.com',
        password: 'abc',
        isAdmin: true
      },
      {
        name: 'Ms. Test Two',
        email: 'test2@example.com',
        password: '1234',
        isAdmin: true
      },
      {
        name: 'Mrs. Test Three',
        email: 'test3@example.com',
        password: 'foobar',
        isAdmin: false
      }
    ];

    beforeEach('Create testing store', () => {
        testStore = createStore(userReducer);
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal([]);
    });

    describe('Set first array of users', () => {

        it('sets initialUsersState', () => {
            testStore.dispatch({ type: 'RECEIVE_USERS', users: usersArray });
            const newState = testStore.getState();
            expect(newState.users).to.be.deep.equal(usersArray);
        });

    });

});