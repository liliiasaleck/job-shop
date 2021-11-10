import {actionsTypes} from '../actions/actions.types';

const initState = {
  offersList: [],
  location: 'Location',
  tech: 'all',
  experience: '',
  salary: [0, 0],
  isLoading: false,
  employmentType: '',
  selectedOffer: {},
  logoUrl: '',
  logo: {url: ''},
};


const offersReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actionsTypes.SEARCH_OFFER_BY_NAME:
      return {
        ...state,
        offersList: payload.offersList,
      };

    case actionsTypes.ADVANCED_FILTER:
      return {
        ...state,
        offersList: payload.offersList,
        isLoading: false,
      };

    case actionsTypes.RESET_FILTERS:
      return {
        ...state,
        location: 'Location',
        tech: 'all',
        salary: [0, 0],
        employmentType: '',
        experience: '',
      };
    case actionsTypes.CHANGE_LOCATION:
      return {
        ...state,
        location: payload,
      };

    case actionsTypes.FETCH_OFFERS:
      return {
        ...state,
        offersList: payload,
      };
    case actionsTypes.FETCH_OFFERS_ERROR:
      return {
        ...state,
        offersList: payload,
        isLoading: false,
      };

    case actionsTypes.SET_OFFERS:
      return {
        ...state,
      };

    case actionsTypes.SET_OFFERS_ERROR:
      return {
        ...state,
        offersList: payload,
      };

    case actionsTypes.SET_SALARY:
      return {
        ...state,
        salary: payload,
      };

    case actionsTypes.SET_EXPERIENCE:
      return {
        ...state,
        experience: payload,
      };

    case actionsTypes.SET_TECH:
      return {
        ...state,
        tech: payload,
      };

    case actionsTypes.SET_LOCATION:
      return {
        ...state,
        location: payload,
      };

    case actionsTypes.SET_EMPLOYMENTTYPE:
      return {
        ...state,
        employmentType: payload,
      };

    case actionsTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionsTypes.SELECT_OFFER:
      return {
        ...state,
        selectedOffer: payload,
      };

    case actionsTypes.UPLOAD_LOGO:
      return {
        ...state,
        logo: payload,
      };

    default:
      return state;
  }
};

export default offersReducer;
