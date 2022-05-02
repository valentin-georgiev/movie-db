import { Store } from 'redux';
import { Task } from 'redux-saga'

export interface SagaStore extends Store {
    sagaTask?: Task;
}
