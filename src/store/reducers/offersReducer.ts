import {actionsTypes} from '../actions/actionsTypes';
import {offers} from '../../views/home/components/singleOffers/const/offerList.const';
export const initialState = {
  offersList: [],
  location: 'Location',
  tech: 'all',
  experience: '',
  salary: [0, 0],
  isLoading: false,
  // salaryTo: 0,
  // salaryFrom: 0,
  employmentType: '',
  selectedOffer: {},
  logoUrl: ''
};

export interface Offer {
  id: number;
  title: string;
  salaryFrom: number;
  salaryTo: number;
  location: string;
  tech: string;
  logo: string;
  experience: string;
  companySize: number;
  companyName: string;
  employmentType: string;
  jobDescription: string;
  aboutCompany: string;
}

const offersReducer = (state = initialState, action) => {
  const {type, payload} = action;
 

  switch (type) {
    case actionsTypes.FILTER_OFFERS_BY_TECH:
      const {tech} = payload;
      return {
        ...state,
        offersList: payload.offersList,
        tech,
      };

    case actionsTypes.SEARCH_OFFER_BY_NAME:
      return {
        ...state,
        offersList: payload.offersList,
      };

    case actionsTypes.FILTER_OFFERS_BY_LOCATION:
      const {location} = payload;
      return {
        ...state,
        offersList: payload.offersList,
        location,
      };

    case actionsTypes.ADVANCED_FILTER:

      return {
        ...state,
        offersList: payload.offersList,
        isLoading: false
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
        isLoading: false
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

    default:
      return state;
  }
};

export default offersReducer;

