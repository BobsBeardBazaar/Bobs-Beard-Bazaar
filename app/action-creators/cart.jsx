import { RECEIVE_CART } from '../constants';
import axios from 'axios';

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

export const getCartById = userId => {
  return dispatch => {
    axios.get(`/api/orders?userId=${userId}&status=cart`)
      .then(response => {
        dispatch(receiveCart(response.data));
      });
  };
};
