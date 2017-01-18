import {
  LOAD_ORDERS,
  RECEIVE_ORDERS,
  RECEIVE_ORDER,
  RECEIVE_CART
} from '../constants';


const initialOrdersState = {
  selected: {
      order: {}
      
  },
  list: [],
  cart: []
};

export default function (state = initialOrdersState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_ORDERS:
      newState.list = action.orders;
      break;

    case RECEIVE_CART:
      newState.cart= action.cart;
      break;

    case RECEIVE_ORDERS:
      newState.list = action.orders;
      break;

    case RECEIVE_ORDER:
      newState.selected = action.order;
      break;

    default:
      return state;

  }

  return newState;

}
