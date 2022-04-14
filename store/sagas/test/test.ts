import { put, takeEvery } from 'redux-saga/effects';
import { TestTypes } from '../../types/test';

export function* testSaga() {
    try {
        yield put({
            type: TestTypes.TEST_SUCCESS,
            payload: {
                data: 'hell yeah it works!',
                error: null,
            },
        })
    } catch(errors) {
        console.log(errors);
    }
}

export function* exported() {
    yield takeEvery(TestTypes.TEST, testSaga)
}