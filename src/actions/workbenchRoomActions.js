import * as types from '../actionTypes'

export function addWorkbench(id, type){
  return {
    type: types.ADD_WORKBENCH,
    id,
    type
  }
}

export function removeWorkbench(id, type){
  return {
    type: types.REMOVE_WORKBENCH,
    id,
    type
  }
}

export function workbenchActions(id, type, action) {
  return dispatch => {
    switch(action){
      case 'add':
        return dispatch(addWorkbench(id, type))
      case 'remove':
        return dispatch(removeWorkbench(id, type))
      default:
        return
    }
  }
}
