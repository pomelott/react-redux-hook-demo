import { all, call } from 'redux-saga/effects';

import listenSaga from './listenSaga';
import readSaga from './readSaga';

export default function* allSagas () {
  yield all([
    call(listenSaga),
    call(readSaga)
  ])
}