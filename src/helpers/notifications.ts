import * as yup from 'yup';

export const notification = {
    container: 'bottom-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
      showIcon: true,
    },
  };

  export const validationSchema = yup.object({
    companyName: yup.string().required('Company name is required'),
    companySize: yup.number().required('Company size bigger than 0'),
    location: yup.string().required('Location is required'),
    experience: yup.string().required('Experience is required'),
    title: yup.string().required('Title is required'),
    salaryFrom: yup.number().required('Salary is bigger than 0'),
    salaryTo: yup.number().required('Salary is bigger than 0'),
    aboutCompany: yup.string().required('Brand story is required'),
    jobDescription: yup.string().required('Job description is required'),
    tech: yup.string().required('Tech stack is required'),
    webSite: yup.string().required('website stack is required'),
    employmentType: yup.string().required('Employment type is required'),
    address: yup.string().required('Address is required'),
    
  });

  export const validationSchemaSingleOffer = yup.object({
    name: yup.string().required('Name is required'),
    bio: yup.string().required('Bio is required'),
    email: yup.string().email(('Must be an email')).required('Email is required'),
  });
  