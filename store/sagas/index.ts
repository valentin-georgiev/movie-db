import { all, fork } from 'redux-saga/effects';
import { testSaga } from './test/test';

export function* rootSaga() {
    yield all([
         fork(testSaga)
    ])
}
