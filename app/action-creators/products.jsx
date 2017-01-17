import { LOAD_PRODUCTS, RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants.jsx';
import axios from 'axios';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const getProductById = productId => {
  return dispatch => {
    axios.get(`/api/products/${productId}`)
      .then(response => {
        dispatch(receiveProduct(response.data));
      });
  };
};

export const loadProducts = function () {
  return function (dispatch) {
    fetch('/api/products')
    .then(function (res) {
      console.log("inside products component: ", res)
      return res.json();
    })
    .then(function (products) {
      const action = receiveProducts(products);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};