import {actionsTypes} from '../actions/actionsTypes';
import {offers} from '../../views/home/components/singleOffers/const/offerList.const';
export const initialState = {
  user: 'Unlogin user',
  offersList: [...offers],
};

const rootReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionsTypes.LOGIN_USER:
      return {...state, isUserLogged: true};
    case actionsTypes.LOGOUT_USER:
      return {...state, isUserLogged: false};

    case actionsTypes.FILTER_OFFERS_BY_TECH:
      return payload !== 'all'
        ? {
            ...state,
            offersList: offers.filter((offer) => offer.tech === payload),
          }
        : {
            ...state,
            offersList: [...offers],
          };

    case actionsTypes.SEARCH_OFFER_BY_NAME:
      return payload.length !== 0
        ? {
            ...state,
            offersList: offers.filter((offer) => {
              return offer.title.toLowerCase().includes(payload.toLowerCase());
            }),
          }
        : {...state, offersList: [...offers]};

    default:
      return state;
  }
};

export default rootReducer;
