import {listenAction} from '../actions/index';
export default function listenReducer (state: any = '', action: any) {
  console.log(action.type)
  let newState = Object.assign({}, state);
  switch (action.type) {
    case listenAction.DO_LISTEN:
      if (!newState.list) {
        newState.list = [];
      }
      newState.list.push(action.payload);
      return newState;
    case listenAction.DELETE_LISTEN_ITEM:
      newState.list.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}