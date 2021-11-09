export interface OfferModel {
    id: number;
    title: string;
    salaryFrom: number;
    salaryTo: number;
    location: string;
    longitude: number;
    latitude:number;
    tech: string;
    logo: {url: string};
    logoUrl: string;
    experience: string;
    companySize: number;
    companyName: string;
    employmentType: string;
    jobDescription: string;
    aboutCompany: string;
    address: string;
    logoId: number;
  }

  export interface LocationModel{
    longitude: number;
    latitude: number;
  }

  export type FilterOfferParams = {
    salaryFrom?: number;
    salaryTo?: number;
    location?: string;
    employmentType?: string;
    tech?: string;
    experience?: string;
  }