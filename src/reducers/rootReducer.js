import { combineReducers } from 'redux'
import cryptoContentReducer from './cryptoContentReducer'

const rootReducer = combineReducers({
  // short hand property names
  cryptoContentReducer,
})

export default rootReducer