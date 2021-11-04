export interface OfferModel {
    id: number;
    title: string;
    salaryFrom: number;
    salaryTo: number;
    location: string;
    tech: string;
    logo: object;
    logoUrl: string;
    experience: string;
    companySize: number;
    companyName: string;
    employmentType: string;
    jobDescription: string;
    aboutCompany: string;
  }

  export interface LocationModel{
    longitude: number;
    latitude: number;
  }