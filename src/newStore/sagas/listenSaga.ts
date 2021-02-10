import {listenAction} from '../actions'
import { takeEvery, delay } from 'redux-saga/effects';
export default function* listenSaga () {
  console.log('listenSaga init.')
  yield takeEvery(listenAction.DO_LISTEN, function* (action) {
    yield delay(1000);
    console.log(action)
  })
}