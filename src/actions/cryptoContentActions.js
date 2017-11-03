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

export function fetchingCoinValue(coin){
  return {
    type: types.FETCHING_COIN_VALUE,
    coin
  }
}

export function receiveCoinValue(coin, response){
  return {
    type: types.RECEIVE_COIN_VALUE,
    response,
    coin
  }
}

export function errorFetchingCoinValue(coin, error) {
  return {
    type: types.ERROR_FETCHING_COIN_VALUE,
    error,
    coin
  }
}

export function fetchCoinValue(coin) {
  return dispatch => {
    dispatch(fetchingCoinValue(coin))
    return cryptoCompare.coinValue(coin).then(response => {
      dispatch(receiveCoinValue(coin, response))
    }).catch(error => {
      dispatch(errorFetchingCoinValue(coin, error))
      throw(error)
    })
  }
}