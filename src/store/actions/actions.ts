import {actionsTypes} from './actionsTypes';
import api from '../../api/baseURL';

export const filterOffersByTech = (tech) => {
  return async (dispatch, getState) => {
  try{
    const result = await api.get('/offers', {params: tech !== 'all' ? {tech} : {}});
    if(result.data)dispatch({type: actionsTypes.FILTER_OFFERS_BY_TECH, payload: {offersList: result.data, tech}});
  }catch(error){
      dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});

  }}}

export const searchOfferByName = (value) => ({
  type: actionsTypes.SEARCH_OFFER_BY_NAME,
  payload: value,
});

export const filterOffersByLocation = (location) => ({
  type: actionsTypes.FILTER_OFFERS_BY_LOCATION,
  payload: location,
});

export const resetFilters = () => ({
  type: actionsTypes.RESET_FILTERS,
});

export const changeLocation = (newLocation) => ({
  type: actionsTypes.CHANGE_LOCATION,
  payload: newLocation,
});

export const fetchOffers =  () => {
  return async (dispatch, getState) => {
    try{
      const result = await api.get('/offers');
      if(result.data)dispatch({type: actionsTypes.FETCH_OFFERS, payload: result.data});
    }catch(error){
        dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, error});

    }}}
    // api
    //   .get('/offers')
    //   .then((res) => {
    //     dispatch({type: actionsTypes.FETCH_OFFERS, payload: res.data});
    //   })
    //   .catch((err) => {
    //     dispatch({type: actionsTypes.FETCH_OFFERS_ERROR, err});
    //   });
  