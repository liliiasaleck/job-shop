import {createStore} from 'redux';

import rootReducer from '../store/reducers/reducers';

export const store = createStore(rootReducer);
