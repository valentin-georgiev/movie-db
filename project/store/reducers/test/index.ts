import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';
import { testReducer, DEFAULT_TEST_STATE } from "./test";

export default function reducer(
    state = DEFAULT_TEST_STATE,
    action: AnyAction,
) {
    if (action.type === HYDRATE) {
        return state
    }

    return testReducer(state, action)
}