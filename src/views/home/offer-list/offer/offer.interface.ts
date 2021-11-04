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