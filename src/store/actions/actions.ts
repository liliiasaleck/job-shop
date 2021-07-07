import {actionsTypes} from './actionsTypes';

export const filterOffersByTech = (tech) => ({
  type: actionsTypes.FILTER_OFFERS_BY_TECH,
  payload: tech,
});

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
