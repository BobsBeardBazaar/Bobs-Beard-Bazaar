import { combineReducers } from 'redux'

const rootReducer = combineReducers({

  auth: require('./auth').default, 
  products: require('./products-reducer').default, 
  orders: require('./orders-reducer').default,
  review: require('./reviews-reducer').default,
  users: require('./users-reducer').default
});


export default rootReducer
