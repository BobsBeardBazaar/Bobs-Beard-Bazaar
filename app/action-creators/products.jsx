import { LOAD_PRODUCTS, RECEIVE_PRODUCTS, RECEIVE_PRODUCT, FILTER_PRODUCTS } from '../constants';
import axios from 'axios';
import { browserHistory } from 'react-router';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const setFilter = filterId => {
    return {
        type: FILTER_PRODUCTS,
        filterId: +filterId
    };
};

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
      return res.json();
    })
    .then(function (products) {
      const action = receiveProducts(products);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err);
    });
  };
};

export const deleteProduct = productId => {
    return () => {
        axios.delete(`/api/products/${productId}`)
        .then(() => {
            browserHistory.push('/products');
        });
    };
};
