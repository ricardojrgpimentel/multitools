import * as types from '../actionTypes'

export default function workbenchRoomReducer(state = {box: []}, action){
  switch(action.type) {
    case types.ADD_WORKBENCH:
      return {
        ...state,
        id: action.id,
        boxType: action.boxType,
        box: [...state.box, {id: action.id, boxType: action.boxType}]
      }
    case types.REMOVE_WORKBENCH:
      return {
        ...state,
        id: action.id,
        boxType: action.boxType,
        box: state.box.filter(e => e !== {id: action.id, boxType: action.boxType})
      }
    default:
      return state
  }
}
