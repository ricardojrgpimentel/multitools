import * as types from '../actionTypes'

export default function cryptoContentReducer(state = {}, action){
  switch(action.type) {
    case types.ERROR_FETCHING_COIN_LIST:
      return {
        ...state,
        error: action.error
      }
    case types.FETCHING_COIN_LIST:
      return {
        ...state,
      }
    case types.RECEIVE_COIN_LIST:
      return {
        ...state,
        response: action.response
      }
    default:
      return state
  }
}