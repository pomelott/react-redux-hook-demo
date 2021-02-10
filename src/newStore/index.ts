import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers";
import sagas from './sagas';

let sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store =  createStore(reducer, {
  listenList: {
    title: '听力列表'
  },
  readList: {
    title: '阅读列表',
    list: [
      '早晨6点起床',
      '读书两个小时',
      '看NBA'
    ]
  }
}, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(sagas);

export default store