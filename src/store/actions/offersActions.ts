import {actionsTypes} from './actionsTypes';
import api from '../../api/baseURL';




export const fetchOffers = () => {
  return async (dispatch, getState) => {
    try {
      const {offers} = getState();
      console.log(offers);
      if (offers.location === 'Location') {
        const result = await api.get('/offers');
        if (result.data) dispatch({type: actionsTypes.FETCH_OFFERS, payload: result.data});
      }
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };
};

export const setOffers = (jobDetailes) => {
  return async (dispatch, getState) => {
    try {
      const {auth} = getState();
      const {user} = auth;
      const userObject = JSON.parse(user);
      let header;
      if (userObject && userObject.accessToken) {
        header = {Authorization: 'Bearer ' + userObject.accessToken};
      }
      const {address} = jobDetailes;
      const result = await api.post('/offers', {...jobDetailes}, {headers: {...header},});
      if (result.data) {
        dispatch({type: actionsTypes.SET_OFFERS, payload: result.data});
        
      }

    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});     
    }
  };
};

export const filterOffersByTech = (tech) => {
  return async (dispatch, getState) => {
    try {
      const result = await api.get('/offers', {params: tech !== 'all' ? {tech} : {}});
      if (result.data)
        dispatch({
          type: actionsTypes.FILTER_OFFERS_BY_TECH,
          payload: {offersList: result.data, tech},
        });
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };
};

export const filterOffersByLocation = (location) => {
  return async (dispatch, getState) => {
    try {
      const result = await api.get('/offers', {params: location !== 'Location' ? {location} : {}});
      if (result.data)
        dispatch({
          type: actionsTypes.FILTER_OFFERS_BY_LOCATION,
          payload: {offersList: result.data, location},
        });
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };
};

export const searchOfferByName = (search) => {
  return async (dispatch, getState) => {
    try {
      const result = await api.get('/offers', {params: {search}});
      if (result.data)
        dispatch({
          type: actionsTypes.SEARCH_OFFER_BY_NAME,
          payload: {offersList: result.data},
        });
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };
};

export const resetFilters = () => {
  return async (dispatch, getState) => {
    dispatch({type: actionsTypes.RESET_FILTERS});
  };
};



export const advancedFilter = (salaryFrom, salaryTo, employmentType, experience) => {
  return async (dispatch, getState) => {
    try {
      let myParams = {};
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
      const result = await api.get('/offers', {params: {...myParams}});
      if (result.data)
        dispatch({
          type: actionsTypes.ADVANCED_FILTER,
          payload: {offersList: result.data},
        });
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };

  
};

export const filterOffers = () => {
  return async (dispatch, getState) => {
    try {
      let myParams = {};
      const {salaryFrom, salaryTo, employmentType, experience, location, tech} = getState().offers;

      myParams = {
        salaryFrom,
        salaryTo,
        employmentType,
        experience,
        tech,
        location,
      };
      console.log('myParams');
      console.log(myParams);
      const result = await api.get('/offers', {params: {...myParams}});
      if (result.data)
        dispatch({
          type: actionsTypes.ADVANCED_FILTER,
          payload: {offersList: result.data},
        });
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
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
