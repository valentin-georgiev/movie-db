import { Types } from "../../types";

export const DEFAULT_TEST_STATE = {
    test: {
        data: '',
        error: null,
    }
}

export const testReducer = (state = DEFAULT_TEST_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case Types.TEST_SUCCESS:
            return {
                ...state,
                test: {
                    ...payload
                }
            }
        

        default:
            return state;
        }
}