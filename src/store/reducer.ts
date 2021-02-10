

function reducer (state: any = {}, action: any) {
  console.log(state, action);
  switch ((action as any).type) {
    case 'addList':
      // let newState = {...state};
      // newState.list.push(action.payload);
      // return newState;
      return Object.assign({}, state, action)
    case 'deleteItem':
      state.list.splice(action.payload, 1);
      return state;
    case 'testsaga':
      state.list.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default reducer;