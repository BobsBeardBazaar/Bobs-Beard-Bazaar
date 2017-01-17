import { LOAD_ORDERS, RECEIVE_ORDERS, RECEIVE_ORDER } from '../constants';
import axios from 'axios';

export const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
});

export const receiveOrder = order => ({
    type: RECEIVE_ORDER,
    order
});

export const getOrderById = orderId => {
  return dispatch => {
    axios.get(`/api/orders/${orderId}`)
      .then(response => {
        dispatch(receiveOrder(response.data));
      });
  };
};

export const loadOrders = function (userId) {
  return function (dispatch) {
    fetch(`/api/orders?userId=${userId}`)
    .then(function (res) {
      console.log("inside orders component: ", res)
      return res.json();
    })
    .then(function (orders) {
      const action = receiveOrders(orders);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};