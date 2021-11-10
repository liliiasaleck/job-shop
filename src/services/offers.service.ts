import {FilterOfferParams} from '../ts/filter-offer.interface';
import api from '../api/baseURL';
import { PromiseDataInterface } from '../interfaces/promise-data.interface';
import { OfferModel } from '../interfaces/offer-model.interface';

const OFFERS_API = 'offers';


export const getOffers = (): any => api.get(`${OFFERS_API}`);

export const createOffer = (offer: OfferModel, header: Headers): Promise<PromiseDataInterface<OfferModel>> =>
  api.post(`${OFFERS_API}`, offer, {headers: {...header}});

export const searchOffers = (search: string): any => api.get(`${OFFERS_API}`, {params: {search}});

export const filteredOffer = (myParams: FilterOfferParams): any =>
  api.get(`${OFFERS_API}`, {params: {...myParams}});

export const addLogo = (file: FormData, headers: Headers): any =>
  api.post(`${OFFERS_API}/logo`, file, {headers});
