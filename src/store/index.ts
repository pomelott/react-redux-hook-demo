import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './mySaga';
let data: any = {
  placeHolder: '请输入',
  list: [
    '早晨6点起床',
    '读书两个小时',
    '看NBA'
  ]
}
let sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, data, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
export default store;
