import {actionsTypes} from './actionsTypes';
import api from '../../api/baseURL';

//FETCH

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

//SET_OFFERS??

export const setOffers = (jobDetailes) => {
  return async (dispatch, getState) => {
    try {
      const {address} = jobDetailes;
      console.log(address);
      const result = await api.post('/offers', address);
      if (result.data) dispatch({type: actionsTypes.SET_OFFERS, payload: result.data});
    } catch (error) {
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});
    }
  };
};

//BY_TECH
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

//LOCATION??
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

//SEARCH??

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


export const changeLocation = (newLocation) => ({
  type: actionsTypes.CHANGE_LOCATION,
  payload: newLocation,
});

export const advancedFilter = (salaryFrom, salaryTo, employmentType, experience) => {
  return async (dispatch, getState) => {
    try {
      let myParams = {};
      if(salaryFrom){
        myParams = {...myParams, salaryFrom}
      }
      if(salaryTo){
        myParams = {...myParams, salaryTo}
      }
      if(employmentType){
        myParams = {...myParams, employmentType}
      }
      if(experience){
        myParams = {...myParams, experience}
      }
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


// api
//   .get('/offers')
//   .then((res) => {
//     dispatch({type: actionsTypes.FETCH_OFFERS, payload: res.data});
//   })
//   .catch((err) => {
//     dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
//   });
