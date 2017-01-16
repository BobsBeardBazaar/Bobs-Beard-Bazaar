import { RECEIVE_USERS } from '../constants';
import axios from 'axios';

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const getUsers = () => {
  return dispatch => {
    axios.get(`/api/users`)
      .then(response => {
        dispatch(receiveUsers(response.data));
      });
  };
};

export const deleteUser = (userId) => {
    return dispatch => {
        axios.delete(`/api/users/${userId}`)
        .then(() => axios.get(`/api/users`))
        .then(response => {
          dispatch(receiveUsers(response.data));
        });
    };
};
