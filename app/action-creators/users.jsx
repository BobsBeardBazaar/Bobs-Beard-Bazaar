import { RECEIVE_USER } from '../constants';
import axios from 'axios';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const getUserById = userId => {
  return dispatch => {
    axios.get(`/api/users/${userId}`)
      .then(response => {
        dispatch(receiveUser(response.data));
      });
  };
};
