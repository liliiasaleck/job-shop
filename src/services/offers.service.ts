import api from '../api/baseURL';

const OFFERS_API = 'offers';

export const getOffers = (): any => api.get(`${OFFERS_API}/fetchOffers`);
