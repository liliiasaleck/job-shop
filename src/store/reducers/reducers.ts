import {actionsTypes} from '../actions/actionsTypes';
import {offers} from '../../views/home/components/singleOffers/const/offerList.const';
export const initialState = {
  user: 'Unlogin user',
  offersList: [...offers],
  location: 'Location',
  tech: 'all',
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
            offersList:
              state.tech === payload
                ? offers.filter((offer) =>
                    state.location === 'Location' ? [...offers] : offer.location === state.location
                  )
                : offers.filter((offer) =>
                    state.location === 'Location'
                      ? offer.tech === payload
                      : offer.tech === payload && offer.location === state.location
                  ),
            tech: state.tech === payload ? 'all' : payload,
          }
        : {
            ...state,
            offersList: offers.filter((offer) =>
              state.location === 'Location' ? offer : offer.location === state.location
            ),
            tech: 'all',
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

    case actionsTypes.FILTER_OFFERS_BY_LOCATION:
      return {
        ...state,
        offersList: offers.filter((offer) =>
          state.tech === 'all'
            ? offer.location === payload
            : offer.location === payload && offer.tech === state.tech
        ),
      };

    case actionsTypes.RESET_FILTERS:
      return {
        ...state,
        offersList: [...offers],
        tech: 'all',
        location: 'Location',
      };

    case actionsTypes.CHANGE_LOCATION:
      return {
        ...state,
        location: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
