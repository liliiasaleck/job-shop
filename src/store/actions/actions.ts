import {actionsTypes} from './actionsTypes';

export const filterOffersByTech = (tech) => ({
  type: actionsTypes.FILTER_OFFERS_BY_TECH,
  payload: tech,
});

export const searchOfferByName = (value) => ({
  type: actionsTypes.SEARCH_OFFER_BY_NAME,
  payload: value,
});

// export const filterCityType = (city) => ({
//   type: actionsTypes.SEARCH_OFFER_BY_CITY,
//   payload: city,
// });
