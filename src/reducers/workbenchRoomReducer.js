import * as types from '../actionTypes'

export default function cryptoContentReducer(state = {}, action){
  switch(action.type) {
    case types.ADD_WORKBENCH:
      return {
        ...state,
        id: action.id,
        type: action.type
      }
    case types.REMOVE_WORKBENCH:
      return {
        ...state,
        id: action.id,
        type: action.type
      }
    default:
      return state
  }
}
