import {
  LOAD_PRODUCTS,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT
} from '../constants';


const initialProductsState = {
  selected: {
      reviews: []
  },
  list: []
};

export default function (state = initialProductsState, action) {

  const newState = Object.assign({}, state);

  // OB/DYS: do you need both LOAD_PRODUCTS and RECEIVE_PRODUCTS?
  switch (action.type) {
    case LOAD_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCT:
      newState.selected = action.product;
      break;

    default:
      return state;

  }

  return newState;

}
