import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { rootSaga } from './sagas';
import rootReducer from './reducers';

import { SagaStore } from './store.types';

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];

    const storeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(
        rootReducer,
        storeEnhancer,
    );

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
}

export const wrapper = createWrapper(makeStore);