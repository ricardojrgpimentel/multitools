import { combineReducers } from 'redux'
import cryptoContentReducer from './cryptoContentReducer'
import workbenchRoomReducer from './workbenchRoomReducer'

const rootReducer = combineReducers({
  // short hand property names
  cryptoContentReducer,
  workbenchRoomReducer
})

export default rootReducer