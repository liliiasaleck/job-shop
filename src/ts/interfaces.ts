export interface SingleOfferProps {
  location: {
    state: {
      title: string;
      salaryFrom: number;
      salaryTo: number;
      location: string;
      companyName: string;
      companySize: number;
      experience: string;
      jobDescription: string;
      logo: any;
      employmentType: string;
      aboutCompany: string;
    };
  };
}

export interface SingleOfferFormik {
  email: string;
  bio: string;
  name: string;
}

export interface PostJobProps {
  companyName: string;
  companySize: number;
  location: string;
  experience: string;
  title: string;
  salaryFrom: number;
  salaryTo: number;
  employmentType: string;
  jobDescription: string;
  aboutCompany: string;
  tech: string;
  webSite: string;
  address: string;
}

export interface FormDataProps {
  email: string;
  password: string;
}

export interface Offer {
  offersList: Offer[];
  location: string;
  tech: string;
  experience: string;
  salary: Array<number>;
  isLoading: boolean;
  employmentType: string;
  selectedOffer: object;
  logoUrl: string;
  logo: object;
}
