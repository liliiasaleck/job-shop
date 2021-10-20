import {
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useStyles} from './postJob.style';
import {useHistory} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Navbar from '../../components/navbar/navbar';
import {skills} from '../../helpers/technology.const';
import {setOffers, uploadLogo} from '../../store/actions/offersActions';
import {useDispatch, useSelector} from 'react-redux';
import {redirect} from '../../store/actions/authActions';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {store} from 'react-notifications-component';

const notification = {
  container: 'bottom-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 3000,
    onScreen: true,
    showIcon: true,
  },
};

const validationSchema = yup.object({
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

const PostJob: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [address, setAddress] = useState('');

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companySize: 0,
      location: '',
      experience: '',
      title: '',
      salaryFrom: 0,
      salaryTo: 0,
      employmentType: '',
      jobDescription: '',
      aboutCompany: '',
      tech: '',
      webSite: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setOffers(values));
      history.push('/');
      store.addNotification({
        title: 'Post added!',
        message: 'Your job offer added!',
        type: 'info',
        ...notification,
      });
    },
  });

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const user = useSelector(({auth}: any) => auth.user);
  const logo = useSelector(({offers}: any) => offers.logo);

  useEffect(() => {
    if (!user) {
      dispatch(redirect());
      history.push('/signIn');
    }
  }, []);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logo', file, file.name);
    dispatch(uploadLogo(formData));
  };

  return (
    <>
      <Navbar />
      <Box className={classes.container}>
        <form className={classes.form} autoComplete="off" onSubmit={formik.handleSubmit}>
          <Button className={classes.btn} onClick={() => history.push('/')}>
            <ArrowBack />
            Back
          </Button>
          <Typography className={classes.title}>Company logo</Typography>
          <Button variant="contained" component="label">
            Upload Logo
            <input type="file" onChange={fileChangedHandler} hidden />
          </Button>
          <Typography className={classes.title}>About company </Typography>
          <TextField
            className={classes.textField}
            label="Company name"
            name="companyName"
            id="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            helperText={formik.touched.companyName && formik.errors.companyName}
          />
          <TextField
            className={classes.textField}
            label="Company size"
            name="companySize"
            id="companySize"
            type="number"
            value={formik.values.companySize}
            onChange={formik.handleChange}
            error={formik.touched.companySize && Boolean(formik.errors.companySize)}
            helperText={formik.touched.companySize && formik.errors.companySize}
          />
          <TextField
            className={classes.textField}
            label="Company website"
            name="webSite"
            id="webSite"
            value={formik.values.webSite}
            onChange={formik.handleChange}
            error={formik.touched.webSite && Boolean(formik.errors.webSite)}
            helperText={formik.touched.webSite && formik.errors.webSite}
          />
          <Typography className={classes.title}>Brand story </Typography>

          <TextareaAutosize
            className={classes.textarea}
            minRows={5}
            id="aboutCompany"
            name="aboutCompany"
            value={formik.values.aboutCompany}
            onChange={formik.handleChange}
          />
          <Typography className={classes.title}>Position info</Typography>
          <FormControl className={classes.formControl}>
            <TextField
              select
              className={classes.select}
              style={{width: '200px'}}
              label="Experience level"
              id="experience"
              name="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              error={formik.touched.experience && Boolean(formik.errors.experience)}
              helperText={formik.touched.experience && formik.errors.experience}
            >
              <MenuItem value={'Junior'}>Junior</MenuItem>
              <MenuItem value={'Mid'}>Mid</MenuItem>
              <MenuItem value={'Senior'}>Senior</MenuItem>
            </TextField>
          </FormControl>
          <TextField
            className={classes.offerTitle}
            label="Offer title"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />

          <Typography className={classes.title}>Employment type</Typography>
          <Typography className={classes.subTitle}>
            How much the candidate will earn monthly?
          </Typography>

          <FormControl className={classes.formControl}>
            <TextField
              select
              className={classes.select}
              id="employmentType"
              name="employmentType"
              label="Employment type"
              value={formik.values.employmentType}
              onChange={formik.handleChange}
              error={formik.touched.employmentType && Boolean(formik.errors.employmentType)}
              helperText={formik.touched.employmentType && formik.errors.employmentType}
            >
              <MenuItem value={'B2B'}>B2B</MenuItem>
              <MenuItem value={'Permanent'}>Permanent</MenuItem>
              <MenuItem value={'Mandate contract'}>Mandate contract</MenuItem>
            </TextField>
          </FormControl>
          <TextField
            className={classes.salaryField}
            label="Monthly salary from"
            type="number"
            id="salaryFrom"
            name="salaryFrom"
            value={formik.values.salaryFrom}
            onChange={formik.handleChange}
            error={formik.touched.salaryFrom && Boolean(formik.errors.salaryFrom)}
            helperText={formik.touched.salaryFrom && formik.errors.salaryFrom}
          />
          <TextField
            className={classes.textField}
            label="Monthly salary to"
            type="number"
            id="salaryTo"
            name="salaryTo"
            value={formik.values.salaryTo}
            onChange={formik.handleChange}
            error={formik.touched.salaryTo && Boolean(formik.errors.salaryTo)}
            helperText={formik.touched.salaryTo && formik.errors.salaryTo}
          />

          <Typography className={classes.title}>Main technology</Typography>
          <FormControl className={classes.formControl}>
            <TextField
              select
              className="px-2 my-2"
              style={{width: '200px'}}
              variant="outlined"
              id="tech"
              name="tech"
              label="Tech stack"
              value={formik.values.tech}
              onChange={formik.handleChange}
              error={formik.touched.tech && Boolean(formik.errors.tech)}
              helperText={formik.touched.tech && formik.errors.tech}
            >
              {skills.map(({display}, index) => (
                <MenuItem key={index} value={display}>
                  {display}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Typography className={classes.title}>Job description</Typography>
          <TextareaAutosize
            className={classes.textarea}
            minRows={10}
            id="jobDescription"
            name="jobDescription"
            value={formik.values.jobDescription}
            onChange={formik.handleChange}
          />
          <Typography className={classes.title}>Choose your location</Typography>
          <TextField
            className={classes.textField}
            label="Office city"
            id="location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <TextField
            className={classes.textField}
            label="Office street"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <div>
            <Button className={classes.submitbtn} variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default PostJob;
