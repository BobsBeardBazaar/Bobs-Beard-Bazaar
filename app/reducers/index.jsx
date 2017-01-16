import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products-reducer').default,
  review: require('./reviews-reducer').default
})

export default rootReducer
