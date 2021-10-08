import {combineReducers} from 'redux';
import authReducer from './authReducer';
import offerReducer from './offersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  offers: offerReducer,
});

export default rootReducer;