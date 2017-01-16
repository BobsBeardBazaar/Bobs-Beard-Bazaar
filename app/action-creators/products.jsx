import { LOAD_PRODUCTS, RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants';
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
    fetch('/api/products')  // OB/DYS: are you trying to make fetch happen?
    .then(function (res) {
      console.log("inside products component: ", res)
      return res.json();
    })
    .then(function (products) {
      const action = receiveProducts(products);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)    // OB/DYS: consider user notification library (react-growl, react-toast, material growl, etc)
    });
  };
};