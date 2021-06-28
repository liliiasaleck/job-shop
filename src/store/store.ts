import {createStore} from 'redux';
import {initialState, rootReducer} from './reducers/reducers';

export const store = createStore(rootReducer, initialState);
