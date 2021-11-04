import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import {PermIdentity, ArrowBack} from '@material-ui/icons';
import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import {useStyles} from './offer.style';
import {faIdCard, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import {useDispatch} from 'react-redux';
import {selectOffer} from '../../../../store/actions/offers-actions';
import {useFormik, FormikProps} from 'formik';
import {validationSchemaSingleOffer, notification} from '../../../../helpers/notifications';
import {store} from 'react-notifications-component';
import {SingleOfferFormik, SingleOfferProps} from '../offer/offer.interface';
import NavigationComponent from '../../../../components/filters/navigation.component';
import {
  COMPANY_NAME_TEXT,
  COMPANY_SIZE_TEXT,
  EXPERIENCE_LVL_TEXT,
  SALARY_CURRENCY_TEXT,
  SALARY_TEXT,
  BARND_STORY_TEXT,
  DESCRIPTION_TEXT,
  APPLY_JOB_TEXT,
  APPLY_BUTTON_TEXT,
} from '../offer/offer.const';

const OfferComponent = ({
  location: {
    state: {
      title,
      salaryFrom,
      salaryTo,
      location,
      companyName,
      companySize,
      experience,
      jobDescription,
      logo,
      employmentType,
      aboutCompany,
    },
  },
}: SingleOfferProps): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleGoBack = (): void => {
    dispatch(selectOffer({}));
    history.push('/');
  };

  const formik: FormikProps<SingleOfferFormik> = useFormik<SingleOfferFormik>({
    initialValues: {
      email: '',
      bio: '',
      name: '',
    },
    validationSchema: validationSchemaSingleOffer,
    onSubmit: () => {
      history.push('/');
      store.addNotification({
        message: 'Your application was successfully submitted!',
        type: 'info',
        ...notification,
      });
    },
  });

  return (
    <>
      <NavigationComponent />
      <Box className={classes.box}>
        <Button className={classes.btnback} onClick={handleGoBack}>
          <ArrowBack />
        </Button>
        <div className={classes.top}>
          <div className={classes.maininfo}>
            <div className={classes.imagebox}>
              <img className={classes.image} src={logo?.url} />
            </div>
            <div>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.subTitle}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
              </Typography>
              <Typography className={classes.subTitle}>
                <FontAwesomeIcon icon={faIdCard} /> {employmentType}
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.information}>
          <Typography className={classes.infodiv}>
            {companyName}
            <p className={classes.smallTitle}>{COMPANY_NAME_TEXT}</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {companySize} <p className={classes.smallTitle}>{COMPANY_SIZE_TEXT}</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {experience}
            <p className={classes.smallTitle}>{EXPERIENCE_LVL_TEXT}</p>
          </Typography>
          <Typography className={classes.infodiv}>
            {salaryFrom}-{salaryTo} {SALARY_CURRENCY_TEXT}
            <p className={classes.smallTitle}>{SALARY_TEXT}</p>
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionText}>{BARND_STORY_TEXT}</Typography>
          <Typography className={classes.aboutCompany}>{aboutCompany}</Typography>
        </div>
        <div className={classes.description}>
          <Typography className={classes.descriptionText}>{DESCRIPTION_TEXT}</Typography>
          <Typography className={classes.aboutCompany}>{jobDescription}</Typography>
        </div>
        <div className={classes.divform}>
          <Typography className={classes.descriptionText}>{APPLY_JOB_TEXT}</Typography>
          <Divider />
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div className={classes.firstform}>
              <TextField
                className={classes.textfield}
                label="First and last name"
                variant="outlined"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PermIdentity className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textfield}
                label="Email"
                variant="outlined"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.secondform}>
              <TextField
                className={classes.textarea}
                label="Introduce yourself (linkedin/github links) optional"
                multiline
                rows={6}
                variant="outlined"
                id="bio"
                name="bio"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.bio}
                error={formik.touched.bio && Boolean(formik.errors.bio)}
                helperText={formik.touched.bio && formik.errors.bio}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button variant="contained" color="secondary" className={classes.signbtn} type="submit">
              {APPLY_BUTTON_TEXT}
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default OfferComponent;
