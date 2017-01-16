import { RECEIVE_REVIEW } from '../constants';


const initialReviewState = {
  selectedReview: {
    comment: '',
    rating: 1,
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
