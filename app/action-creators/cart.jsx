import { RECEIVE_CART } from '../constants';
import axios from 'axios';

export const receiveCart = cart => ({
    type: RECEIVE_CART,
    cart
});

export const getCartById = cartId => {
  return dispatch => {
    axios.get(`/api/orders/${cartId}`)
      .then(response => {
        dispatch(receiveCart(response.data));
      });
  };
};
