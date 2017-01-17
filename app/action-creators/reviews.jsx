import { RECEIVE_REVIEW } from '../constants';
import axios from 'axios';

import { getProductById } from './products';

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const getReviewById = reviewId => {
  return dispatch => {
    axios.get(`/api/reviews/${reviewId}`)
      .then(response => {
        dispatch(receiveReview(response.data));
      });
  };
};

export const addReview = (reviewData) => {
    console.log('this is the reviewdata', reviewData);
    return dispatch => {
        axios.post(`/api/reviews`, reviewData)
        .then(() => dispatch(getProductById(reviewData.product_id)));
    };
};
