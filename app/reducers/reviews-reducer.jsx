import { RECEIVE_REVIEW } from '../constants';


const initialReviewState = {
  selectedReview: { // OB/DYS: selectedReview = {loading: true}
    Author: { // OB/DYS: lower-case author in alias
        name: ''
    },
    author_id: 1,
    comment: '',
    rating: 1,  // OB/DYS: different default value?
    title: ''
  }
};

export default function (state = initialReviewState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REVIEW:
      newState.selectedReview = action.review;
      break;

    default:
      return state;

  }

  return newState;

}
