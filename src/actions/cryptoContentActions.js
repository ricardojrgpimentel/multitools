import * as types from '../actionTypes'
import cryptoCompare from '../api/cryptoCompare'

export function fetchingCoinList(){
  return {
    type: types.FETCHING_COIN_LIST,
  }
}

export function receiveCoinList(response){
  return {
    type: types.RECEIVE_COIN_LIST,
    response
  }
}

export function errorFetchingCoinList(error) {
  return {
    type: types.ERROR_FETCHING_COIN_LIST,
    error
  }
}

export function fetchcoinList() {
  return dispatch => {
    dispatch(fetchingCoinList())
    return cryptoCompare.coinList().then(response => {
      dispatch(receiveCoinList(response))
    }).catch(error => {
      dispatch(errorFetchingCoinList(error))
      throw(error)
    })
  }
}