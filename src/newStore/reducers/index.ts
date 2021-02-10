import {combineReducers} from 'redux';
import listenReducer from './listenReducer';
import readReducer from './readReducer';
export default combineReducers({
  listenList: listenReducer,
  readList: readReducer
})