import * as types from '../actionTypes'

export function addWorkbench(id, boxType){
  return {
    type: types.ADD_WORKBENCH,
    id,
    boxType,
  }
}

export function removeWorkbench(id, boxType){
  return {
    type: types.REMOVE_WORKBENCH,
    id,
    boxType,
  }
}

export function workbenchActions(id, boxType, action) {
  return dispatch => {
    switch(action){
      case 'add':
        return dispatch(addWorkbench(id, boxType))
      case 'remove':
        return dispatch(removeWorkbench(id, boxType))
      default:
        return
    }
  }
}
