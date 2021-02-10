import { put, takeEvery, delay } from 'redux-saga/effects'


function* mySaga() {
  console.log('mysaga')
  yield takeEvery('addList', function* () {
    console.log(11)
    yield delay(1000);
    yield put({
      type: 'testsaga',
      payload: 'saga item'
    })
  })
}

export default mySaga;