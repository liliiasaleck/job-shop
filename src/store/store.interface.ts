import {OfferModel, LocationModel} from '../ts/interface';

export interface StoreInterface {
  auth: {
    authError: string;
    user: string;
    successMessage: string;
  };
  offers: {
    offersList: OfferModel[];
    location: string;
    tech: string;
    experience: string;
    salary: Array<number>;
    isLoading: boolean;
    employmentType: string;
    selectedOffer: LocationModel;
    logoUrl: string;
    logo: {url: string};
  };
}

