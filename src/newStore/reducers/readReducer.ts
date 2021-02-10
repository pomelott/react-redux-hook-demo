import {readAction} from '../actions'
export default function readReducer (state: any = [], action: any) {
  console.log(action.type);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case readAction.DO_READ:
      if (!newState.list) {
        newState.list = [];
      }
      newState.list.push(action.payload);
      return newState;
    case readAction.DELETE_READ_ITEM:
      newState.list.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}