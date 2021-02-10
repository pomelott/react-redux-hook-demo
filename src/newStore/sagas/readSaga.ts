
import { takeLatest, delay } from 'redux-saga/effects';
import {readAction} from '../actions';
export default function* readSaga () {
  console.log('readSaga init');
  yield takeLatest(readAction.DO_READ, function* (action) {
    yield delay(2000);
    console.log(action);
  })
}