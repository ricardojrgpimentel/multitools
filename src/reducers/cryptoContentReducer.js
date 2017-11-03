import * as types from '../actionTypes'

export default function cryptoContentReducer(state = {}, action){
  switch(action.type) {
    case types.ERROR_FETCHING_COIN_LIST:
      return {
        ...state,
        error: action.error,
        coinListLoading: false
      }
    case types.FETCHING_COIN_LIST:
      return {
        ...state,
        coinListLoading: true
      }
    case types.RECEIVE_COIN_LIST:
      return {
        ...state,
        response: action.response,
        coinListLoading: false
      }
    case types.ERROR_FETCHING_COIN_VALUE:
      return {
        ...state,
        error: action.error,
        [`${action.coin}ValueLoading`]: false
      }
    case types.FETCHING_COIN_VALUE:
      return {
        ...state,
        [`${action.coin}ValueLoading`]: true
      }
    case types.RECEIVE_COIN_VALUE:
      return {
        ...state,
        [`${action.coin}Value`]: action.response,
        [`${action.coin}ValueLoading`]: false
      }
    default:
      return state
  }
}