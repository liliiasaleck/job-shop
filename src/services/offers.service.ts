import api from '../api/baseURL';

const OFFERS_API = 'offers';

export const getOffers = (): any => api.post(`${OFFERS_API}/fetchOffers`);

// export const createOffers = (): any => api.post(`${OFFERS_API}/setOffers`);
