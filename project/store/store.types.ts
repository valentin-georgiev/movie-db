import { Store } from 'redux';
import { Task } from 'redux-saga';

export type SagaStore = Store & {
    sagaTask?: Task;
}