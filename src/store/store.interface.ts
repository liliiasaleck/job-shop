import { LocationModel } from '../interfaces/location-model.interface';
import { OfferModel } from '../interfaces/offer-model.interface';

export interface StoreInterface {
  auth: {
    authError: string;
    user: string;
    successMessage: string;
    isLoading: boolean;
  };
  offers: {
    offersList: OfferModel[];
    location: string;
    tech: string;
    experience: string;
    salary: Array<number>;
    employmentType: string;
    selectedOffer: LocationModel;
    logoUrl: string;
    logo: {url: string};
    isLoading: boolean;
  };
}

