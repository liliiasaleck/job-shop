import {combineReducers} from 'redux';
import {ignoreActions} from 'redux-ignore';
import {actionsTypes} from '../actions/actions-types';
import authReducer from './auth-reducer';
import offersReducer from './offers-reducer';

const rootReducer = combineReducers({
  auth: ignoreActions(authReducer, [
    actionsTypes.FETCH_OFFERS,
    actionsTypes.SEARCH_OFFER_BY_NAME,
    actionsTypes.ADVANCED_FILTER,
  ]),
  offers: offersReducer,
});

export default rootReducer;