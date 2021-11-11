import {actionsTypes} from './actions.types';
import api from '../../api/baseURL';
import {
  addLogo,
  createOffer,
  filteredOffer,
  getOffers,
  searchOffers,
} from '../../services/offers.service';
import {Dispatch} from 'react';
import {IOffersAction} from '../../interfaces/action-types.interface';

export const fetchOffers = () => {
  return async (dispatch: Dispatch<IOffersAction>, getState) => {
    try {
      const {offers} = getState();
      if (offers.location === 'Location') {
        const response = await getOffers();
        if (response.data) dispatch({type: actionsTypes.FETCH_OFFERS, payload: response.data});
      }
    } catch (err) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
    }
  };
};

export const setOffers = (jobDetailes) => {
  return async (dispatch: Dispatch<IOffersAction>, getState) => {
    try {
      const {auth, offers} = getState();
      const {user} = auth;
      const userObject = JSON.parse(user);
      let header;
      if (userObject && userObject.accessToken) {
        header = {Authorization: 'Bearer ' + userObject.accessToken};
      }
      const {address} = jobDetailes;
      const response = await createOffer({...jobDetailes, logoId: offers.logo.id}, header);
      if (response.data) {
        dispatch({type: actionsTypes.SET_OFFERS, payload: response.data});
      }
    } catch (err) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
    }
  };
};

export const searchOfferByName = (search: string) => {
  return async (dispatch: Dispatch<IOffersAction>) => {
    try {
      const response = await searchOffers(search);
      console.log(response);
      if (response.data)
        dispatch({
          type: actionsTypes.SEARCH_OFFER_BY_NAME,
          payload: {offersList: response.data},
        });
    } catch (err) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
    }
  };
};

export const resetFilters = () => {
  return async (dispatch: Dispatch<IOffersAction>) => {
    dispatch({type: actionsTypes.RESET_FILTERS});
  };
};

export const filterOffers = () => {
  return async (dispatch: Dispatch<IOffersAction>, getState) => {
    try {
      dispatch({type: actionsTypes.SET_LOADING});
      let myParams = {};
      const {salaryFrom, salaryTo, employmentType, experience, location, tech} = getState().offers;
      if (salaryFrom) {
        myParams = {...myParams, salaryFrom};
      }
      if (salaryTo) {
        myParams = {...myParams, salaryTo};
      }
      if (employmentType) {
        myParams = {...myParams, employmentType};
      }
      if (experience) {
        myParams = {...myParams, experience};
      }
      if (location && location !== 'Location') {
        myParams = {...myParams, location};
      }
      if (tech && tech !== 'all') {
        myParams = {...myParams, tech};
      }
      const response = await filteredOffer(myParams);
      if (response.data) {
        dispatch({
          type: actionsTypes.ADVANCED_FILTER,
          payload: {offersList: response.data},
        });
      }
    } catch (err) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
    }
  };
};

export const changeSalary = (salaryArray) => ({
  type: actionsTypes.SET_SALARY,
  payload: salaryArray,
});

export const changeTech = (tech) => ({
  type: actionsTypes.SET_TECH,
  payload: tech,
});
export const changeEmploymentType = (employmentType) => ({
  type: actionsTypes.SET_EMPLOYMENTTYPE,
  payload: employmentType,
});
export const changeExperience = (experience) => ({
  type: actionsTypes.SET_EXPERIENCE,
  payload: experience,
});
export const changeLocation = (location) => ({
  type: actionsTypes.SET_LOCATION,
  payload: location,
});

export const selectOffer = (offer) => {
  return async (dispatch: Dispatch<IOffersAction>) => {
    dispatch({type: actionsTypes.SELECT_OFFER, payload: offer});
  };
};

export const uploadLogo = (file: FormData) => {
  return async (dispatch: Dispatch<IOffersAction>, getState) => {
    try {
      const {auth} = getState();
      const {user} = auth;
      const userObject = JSON.parse(user);
      let headers;
      if (userObject && userObject.accessToken) {
        headers = {Authorization: 'Bearer ' + userObject.accessToken};
      }
      headers = {...headers, 'content-type': 'multipart/form-data'};
      const response = await addLogo(file, headers);

      if (response.data)
        dispatch({
          type: actionsTypes.UPLOAD_LOGO,
          payload: response.data,
        });
    } catch (err) {
      dispatch({type: actionsTypes.UPLOAD_LOGO_ERROR, err});
    }
  };
};
