import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  products: require('./products-reducer').default, 
  orders: require('./orders-reducer').default
})

export default rootReducer
