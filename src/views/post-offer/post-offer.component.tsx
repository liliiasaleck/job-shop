import {Button, TextField, Typography, FormControl, MenuItem, Box} from '@material-ui/core';
import React, {ChangeEvent, EffectCallback, useEffect} from 'react';
import {useStyles} from './post-offer.style';
import {useHistory} from 'react-router-dom';
import {ArrowBack} from '@material-ui/icons';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Navbar from '../../components/navbar/navbar.component';
import {skills} from '../../helpers/technology.const';
import {setOffers, uploadLogo} from '../../store/actions/offers-actions';
import {useDispatch, useSelector} from 'react-redux';
import {redirect} from '../../store/actions/auth-actions';
import {useFormik, FormikProps} from 'formik';
import {store} from 'react-notifications-component';
import {validationSchema, notification} from '../../helpers/notifications';
import {ReactElement} from 'react';
import {PostJobProps} from '../post-offer/post-offer.interface';
import {StoreInterface} from '../../store/store.interface';
import {
  BACK_BUTTON_TEXT,
  UPLOAD_BUTTON_TEXT,
  ABOUT_COMPANY_TEXT,
  BRAND_STORY_TEXT,
  POSITION_INFO_TEXT,
  EXPERIANCE_JUNIOR_TEXT,
  EXPERIANCE_MID_TEXT,
  EXPERIANCE_SENIOR_TEXT,
  EMPLOYMENT_TYPE_TEXT,
  SALARY_QUESTION_TEXT,
  B2B_TEXT,
  PERMANENT_TEXT,
  MANDATE_CONTRACT_TEXT,
  MAIN_TECHNOLOGY_TEXT,
  JOB_DESCRIPTION_TEXT,
  LOCATION_TEXT,
  SUBMIT_BUTTON_TEXT,
} from '../post-offer/post-offer.const';

const PostOffer = (): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const formik: FormikProps<PostJobProps> = useFormik<PostJobProps>({
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

  const user = useSelector(({auth}: StoreInterface) => auth.user);

  useEffect((): void => {
    if (user) {
      return;
    }
    dispatch(redirect());
    history.push('/signIn');
  }, []);

  const fileChangedHandler = (event: ChangeEvent <HTMLInputElement>) : void => {
    if(!event.target?.files?.[0]){
      return;
    }
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
            {BACK_BUTTON_TEXT}
          </Button>
          <Typography className={classes.title}>{UPLOAD_BUTTON_TEXT}</Typography>
          <Button variant="contained" component="label">
            {UPLOAD_BUTTON_TEXT}
            <input type="file" onChange={fileChangedHandler} hidden />
          </Button>
          <Typography className={classes.title}>{ABOUT_COMPANY_TEXT} </Typography>
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
          <Typography className={classes.title}>{BRAND_STORY_TEXT}</Typography>

          <TextareaAutosize
            className={classes.textarea}
            minRows={5}
            id="aboutCompany"
            name="aboutCompany"
            value={formik.values.aboutCompany}
            onChange={formik.handleChange}
          />
          <Typography className={classes.title}>{POSITION_INFO_TEXT}</Typography>
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
              <MenuItem value={'Junior'}>{EXPERIANCE_JUNIOR_TEXT}</MenuItem>
              <MenuItem value={'Mid'}>{EXPERIANCE_MID_TEXT}</MenuItem>
              <MenuItem value={'Senior'}>{EXPERIANCE_SENIOR_TEXT}</MenuItem>
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

          <Typography className={classes.title}>{EMPLOYMENT_TYPE_TEXT}</Typography>
          <Typography className={classes.subTitle}>{SALARY_QUESTION_TEXT}</Typography>

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
              <MenuItem value={'B2B'}>{B2B_TEXT}</MenuItem>
              <MenuItem value={'Permanent'}>{PERMANENT_TEXT}</MenuItem>
              <MenuItem value={'Mandate contract'}>{MANDATE_CONTRACT_TEXT}</MenuItem>
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

          <Typography className={classes.title}>{MAIN_TECHNOLOGY_TEXT}</Typography>
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
          <Typography className={classes.title}>{JOB_DESCRIPTION_TEXT}</Typography>
          <TextareaAutosize
            className={classes.textarea}
            minRows={10}
            id="jobDescription"
            name="jobDescription"
            value={formik.values.jobDescription}
            onChange={formik.handleChange}
          />
          <Typography className={classes.title}>{LOCATION_TEXT}</Typography>
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
              {SUBMIT_BUTTON_TEXT}
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default PostOffer;
