import { RECEIVE_REVIEW } from '../constants';
import axios from 'axios';

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