import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/root.reducer';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer,composedEnhancer);