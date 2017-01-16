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
