import {combineReducers} from 'redux';
import { ignoreActions } from 'redux-ignore';
import { actionsTypes } from '../actions/actionsTypes';
import authReducer from './authReducer';
import offersReducer from './offersReducer';

const rootReducer = combineReducers({
  auth: ignoreActions(authReducer, [
    actionsTypes.FETCH_OFFERS,
    actionsTypes.FILTER_OFFERS_BY_LOCATION,
    actionsTypes.FILTER_OFFERS_BY_TECH,
    actionsTypes.SEARCH_OFFER_BY_NAME,
    actionsTypes.ADVANCED_FILTER
  ]),
  offers: offersReducer,
});

export default rootReducer;